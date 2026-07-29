/**
 * GodparentsManager.js
 * Sprint 07: Animaciones en cascada optimizadas para listas editoriales largas.
 */

export default class GodparentsManager {
    constructor() {
        this.section = document.getElementById('padrinos');
        this.elements = gsap.utils.toArray('#padrinos .gp-anim');

        this.initScroll();
    }

    initScroll() {
        if (!this.section || this.elements.length === 0) return;

        // Batch procesa los elementos en grupos según entran a la pantalla
        // Es la técnica más performante para listas largas evitando CLS y sobrecarga.
        ScrollTrigger.batch(this.elements, {
            start: "top 85%", 
            onEnter: (batch) => {
                gsap.fromTo(batch,
                    { 
                        opacity: 0, 
                        y: 30, 
                        filter: "blur(8px)" 
                    },
                    {
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                        duration: 0.8, // Requisito exacto del Sprint
                        stagger: 0.15, // Stagger exacto del Sprint
                        ease: "power2.out",
                        overwrite: true
                    }
                );
            }
        });
    }
}