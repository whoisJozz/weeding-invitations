/**
 * ConfirmationManager.js
 * Sprint 09
 */
export default class ConfirmationManager {
    constructor() {
        this.section = document.getElementById('confirmacion');
        this.elements = gsap.utils.toArray('#confirmacion .confirm-anim');

        this.initScroll();
    }

    initScroll() {
        if (!this.section || this.elements.length === 0) return;

        gsap.fromTo(this.elements,
            { opacity: 0, y: 30, filter: "blur(6px)" },
            {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                duration: 1.2,
                stagger: 0.2, // Escalonamiento suave (Título -> Texto -> Botón -> Nota)
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