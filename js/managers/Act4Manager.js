/**
 * Act4Manager.js
 * Sprint 06: Revelado cinematográfico de la Ubicación
 */

export default class Act4Manager {
    constructor() {
        this.section = document.getElementById('ubicacion');
        this.elements = document.querySelectorAll('#ubicacion .act4-anim');

        this.initScroll();
    }

    initScroll() {
        if (!this.section || this.elements.length === 0) return;

        // Revelado cinemático: Duración 2s, Blur profundo, Delay secuencial (stagger)
        gsap.fromTo(this.elements,
            { 
                opacity: 0, 
                y: 50, 
                filter: "blur(12px)" 
            },
            {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                duration: 2.0, // Requerimiento exacto del Sprint
                stagger: 0.6, // Pausa elegante entre frase -> lugar -> botón
                ease: "power2.out",
                scrollTrigger: {
                    trigger: this.section,
                    start: "top 75%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    }
}