/**
 * StoryManager.js
 * RFC-012: Editorial Storytelling Motion
 */

export default class StoryManager {
    constructor() {
        this.heroContent = document.querySelector('.hero-content');
        this.storyTexts = document.querySelectorAll('.story-text');
        
        this.initScroll();
    }

    initScroll() {
        if (!this.heroContent) return;

        // Transición de salida del Hero (Se mantiene)
        gsap.to(this.heroContent, {
            opacity: 0,
            y: -50,
            filter: "blur(4px)",
            scrollTrigger: {
                trigger: document.body,
                start: "top top",
                end: "400px top",
                scrub: 1.5 
            }
        });

        // FIX: Tiempos editoriales definidos en RFC-012
        const durations = [1.2, 1.5, 1.8];

        this.storyTexts.forEach((text, index) => {
            // Asigna el tiempo correspondiente o 1.8s por defecto
            const duration = durations[index] || 1.8;

            gsap.fromTo(text,
                { 
                    opacity: 0, 
                    y: 50,               // Desplazamiento vertical pronunciado
                    filter: "blur(12px)" // Blur cinemático profundo
                },
                {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    duration: duration,
                    ease: "power2.out",  // Easing suave y elegante
                    scrollTrigger: {
                        trigger: text,
                        start: "top 80%", // El texto debe aparecer al ir siendo descubierto
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });
    }
}