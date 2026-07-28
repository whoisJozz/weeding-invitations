/**
 * Act3Manager.js
 * Sprint 05.0: Orquestación del Acto III (Fecha y Contador)
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
        if (!this.dateSection || !this.countdownSection) return;

        // 1. Animación de la Fecha (Stagger secuencial)
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
                stagger: 0.15, // Aparición en cascada muy elegante
                ease: "power2.out",
                scrollTrigger: {
                    trigger: this.dateSection,
                    start: "top 75%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        // 2. Animación del Contador (Aparece en bloque)
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