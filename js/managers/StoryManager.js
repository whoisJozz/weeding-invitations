/**
 * StoryManager.js
 * Sprint 04.0: Controla la transición cinematográfica entre el Hero y el Acto II.
 */

export default class StoryManager {
    constructor() {
        this.heroContent = document.querySelector('.hero-content');
        this.storyTexts = document.querySelectorAll('.story-text');
        
        this.initScroll();
    }

    initScroll() {
        if (!this.heroContent) return;

        // 1. Transición Cinemática: Fade Out suave del texto de la portada al scrollear
        gsap.to(this.heroContent, {
            opacity: 0,
            y: -50,
            filter: "blur(4px)",
            scrollTrigger: {
                trigger: document.body,
                start: "top top",
                end: "400px top",
                scrub: 1.5 // Suavizado para que se sienta fluido y continuo
            }
        });

        // 2. Aparición Escalonada: Las frases de la historia emergen conforme se descubre la página
        this.storyTexts.forEach((text) => {
            gsap.fromTo(text,
                { 
                    opacity: 0, 
                    y: 40, 
                    filter: "blur(8px)" 
                },
                {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    duration: 2.5,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: text,
                        start: "top 75%", // Se activa cuando el elemento cruza el 75% inferior de la pantalla
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });
    }
}