/**
 * Act3Manager.js
 */
export default class Act3Manager {
    constructor() {
        this.dateSection = document.getElementById('fecha');
        this.dateElements = document.querySelectorAll('#fecha .act3-anim');
        
        this.countdownSection = document.getElementById('contador');
        this.countdownElements = document.querySelectorAll('#contador .act3-anim');

        this.initScroll();
    }

    initScroll() {
        // Validación de seguridad por si el HTML no se actualizó correctamente
        if (!this.dateSection || !this.countdownSection || this.dateElements.length === 0) {
            console.warn("Act3Manager: Los elementos del Acto III no se encontraron en el DOM.");
            return;
        }

        gsap.fromTo(this.dateElements,
            { 
                opacity: 0, 
                y: 40, 
                filter: "blur(8px)" 
            },
            {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                duration: 1.5,
                stagger: 0.15, 
                ease: "power2.out",
                scrollTrigger: {
                    trigger: this.dateSection,
                    start: "top 75%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        gsap.fromTo(this.countdownElements,
            { 
                opacity: 0, 
                y: 40, 
                filter: "blur(8px)" 
            },
            {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                duration: 1.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: this.countdownSection,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    }
}