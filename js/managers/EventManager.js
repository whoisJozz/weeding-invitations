/**
 * EventManager.js
 * Unifica las animaciones de la Escena del Evento.
 */

export default class EventManager {
    constructor() {
        this.section = document.getElementById('evento');
        this.narrative = document.querySelector('.event-narrative');
        this.dateBlock = document.querySelector('.event-date');
        this.locationBlock = document.querySelector('.event-location');
        this.btn = document.querySelector('.editorial-btn');

        this.initScroll();
    }

    initScroll() {
        if (!this.section) return;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: this.section,
                start: "top 75%",
                toggleActions: "play none none reverse"
            }
        });

        // 1. Texto editorial (Fade + Blur)
        tl.fromTo(this.narrative, 
            { opacity: 0, y: 30, filter: "blur(8px)" },
            { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.5, ease: "power2.out" }
        );

        // 2. Fecha: Animación de Impresión (Efecto Sello)
        tl.fromTo(this.dateBlock, 
            { opacity: 0, scale: 1.08 },
            { opacity: 1, scale: 1, duration: 1.2, ease: "back.out(1.4)" },
            "-=0.6" // Se solapa para mayor fluidez
        );

        // 3. Recepción/Lugar: Fade secundario suave
        tl.fromTo(this.locationBlock, 
            { opacity: 0 },
            { opacity: 1, duration: 1.5, ease: "power1.inOut" },
            "-=0.4"
        );

        // 4. Botón: Aparece al final
        tl.fromTo(this.btn, 
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
            "-=0.8"
        );
    }
}