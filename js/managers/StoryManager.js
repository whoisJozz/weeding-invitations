/**
 * StoryManager.js
 * Acto II: Nuestra Historia (Sprint 03.0)
 * Controla el Parallax de salida del Hero y el Fade-In de la narrativa.
 */

export default class StoryManager {
    constructor() {
        // Elementos del Hero
        this.heroSection = document.querySelector('.hero-section');
        this.heroFrame = document.querySelector('.hero-frame');
        this.heroQuote = document.querySelector('.hero-quote');
        this.heroKicker = document.querySelector('.hero-kicker');
        this.heroNames = document.querySelector('.hero-title');
        this.floralAccents = document.querySelectorAll('.floral-accent');

        // Elementos de Story
        this.storySection = document.getElementById('story');
        this.storyTitle = document.querySelector('.story-title');
        this.storyPhrase = document.querySelector('.story-phrase');
        this.storySubphrase = document.querySelector('.story-subphrase');

        this.initScrollTriggers();
    }

    initScrollTriggers() {
        if (!this.heroSection || !this.storySection) return;

        // 1. Desvanecimiento del Hero vía Scroll (Sincronizado con el scroll del usuario)
        gsap.timeline({
            scrollTrigger: {
                trigger: this.heroSection,
                start: "top top",
                end: "bottom top",
                scrub: 1.5 // Suavizado que simula "pasar de página"
            }
        })
        .to(this.heroFrame, { opacity: 0, scale: 0.98, duration: 1 }, 0) // El marco se apaga
        .to(this.heroQuote, { opacity: 0, y: -30, duration: 0.5 }, 0) // La frase desaparece antes
        .to(this.heroKicker, { opacity: 0, y: -20, duration: 0.5 }, 0)
        .to(this.floralAccents, { y: 150, opacity: 0.1, duration: 1 }, 0) // Las flores bajan muy lentamente (Parallax)
        .to(this.heroNames, { y: 200, opacity: 0.3, duration: 1 }, 0); // Los nombres bajan lentamente

        // 2. Aparición Narrativa (Disparado al alcanzar la sección)
        const storyTl = gsap.timeline({
            scrollTrigger: {
                trigger: this.storySection,
                start: "top 70%", // Dispara cuando el 30% del bloque es visible
                toggleActions: "play none none reverse"
            }
        });

        storyTl.fromTo(this.storyTitle, 
            { opacity: 0, filter: "blur(8px)", y: 30 },
            { opacity: 1, filter: "blur(0px)", y: 0, duration: 2, ease: "power2.out" }
        )
        .fromTo(this.storyPhrase,
            { opacity: 0, filter: "blur(8px)", y: 30 },
            { opacity: 1, filter: "blur(0px)", y: 0, duration: 2.5, ease: "power2.out" },
            "-=1"
        )
        .fromTo(this.storySubphrase,
            { opacity: 0, filter: "blur(8px)", y: 30 },
            { opacity: 1, filter: "blur(0px)", y: 0, duration: 2.5, ease: "power2.out" },
            "+=0.8" // Respetando la "Pequeña pausa visual" solicitada
        );
    }
}