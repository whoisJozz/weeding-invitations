/**
 * HeroManager.js
 * Milestone M1: Tiempos reducidos, opacidad ajustada y Glint en el marco.
 */

export default class HeroManager {
    constructor() {
        this.frame = document.querySelector('.hero-frame');
        this.flowers = document.querySelectorAll('.floral-accent');
        this.kicker = document.querySelector('.hero-kicker');
        this.names = document.querySelectorAll('.hero-title .name');
        this.ampersand = document.querySelector('.hero-title .ampersand');
        this.quote = document.querySelector('.hero-quote');
        this.sparklesContainer = document.getElementById('sparkles-container');
        
        // Elemento dinámico para el brillo del marco
        this.frameGlint = document.createElement('div');
        this.frameGlint.classList.add('frame-glint');
        this.frame.appendChild(this.frameGlint);
        
        this.activeSparkles = 0;
        this.maxSparkles = 2; 
        this.sparkleTimer = null;
    }

    playEntrySequence() {
        const tl = gsap.timeline({
            onComplete: () => {
                this.initSparkleSystem();
                this.initFrameGlint();
            }
        });

        // Tiempos reducidos ~20%
        // Marco: de 2.5s a 2s
        tl.to(this.frame, { opacity: 1, duration: 2, ease: "power1.inOut" })
          
          // Flores: de 4s a 3.2s | Opacidad: de 0.22 a 0.35
          .to(this.flowers, { opacity: 0.35, duration: 3.2, ease: "power1.inOut", stagger: 0.4 }, "-=1.2");

        // Kicker: de 2s a 1.6s
        tl.fromTo(this.kicker, 
            { opacity: 0, y: 15 }, 
            { opacity: 1, y: 0, duration: 1.6, ease: "power2.out" }, "-=1.6" 
        );

        // Nombres y Ampersand: de 2.5s a 2s
        tl.fromTo(this.names[0], { opacity: 0, filter: "blur(6px)" }, { opacity: 1, filter: "blur(0px)", duration: 2, ease: "power2.out" }, "-=1.2")
          .fromTo(this.ampersand, { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 2, ease: "power2.out" }, "-=1.6")
          .fromTo(this.names[1], { opacity: 0, filter: "blur(6px)" }, { opacity: 1, filter: "blur(0px)", duration: 2, ease: "power2.out" }, "-=1.6");

        // Frase final: de 2.5s a 2s
        tl.fromTo(this.quote, 
            { opacity: 0, y: 10 }, 
            { opacity: 1, y: 0, duration: 2, ease: "power2.out" }, "-=1"
        );
    }

    // --- Sistema de Brillo en el Marco (Glint) ---
    initFrameGlint() {
        this.scheduleNextGlint();
    }

    scheduleNextGlint() {
        // Aparece aleatoriamente cada 8 a 12 segundos
        const nextInterval = Math.random() * (12000 - 8000) + 8000;
        
        setTimeout(() => {
            this.animateGlint();
            this.scheduleNextGlint();
        }, nextInterval);
    }

    animateGlint() {
        // Prepara el brillo en el borde superior, oculto y desplazado hacia la izquierda
        gsap.set(this.frameGlint, {
            top: 0,
            left: 0,
            width: "150px",
            height: "1px",
            x: -150,
            opacity: 0
        });

        // Recorre el marco de izquierda a derecha con un fade in/out suave
        gsap.timeline()
            .to(this.frameGlint, { opacity: 1, duration: 0.5, ease: "power2.in" })
            .to(this.frameGlint, { x: this.frame.offsetWidth, duration: 3, ease: "none" }, "-=0.5")
            .to(this.frameGlint, { opacity: 0, duration: 0.5, ease: "power2.out" }, "-=0.5");
    }

    // --- Sistema de Polvo Dorado ---
    initSparkleSystem() {
        this.scheduleNextSparkle();
    }

    scheduleNextSparkle() {
        const nextInterval = Math.random() * (7000 - 5000) + 5000;
        
        this.sparkleTimer = setTimeout(() => {
            this.spawnSparkle();
            this.scheduleNextSparkle(); 
        }, nextInterval);
    }

    spawnSparkle() {
        if (this.activeSparkles >= this.maxSparkles) return;

        this.activeSparkles++;
        
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
        
        const top = Math.random() * 70 + 15; 
        const left = Math.random() * 70 + 15;
        
        sparkle.style.top = `${top}%`;
        sparkle.style.left = `${left}%`;
        
        this.sparklesContainer.appendChild(sparkle);

        gsap.timeline({
            onComplete: () => {
                sparkle.remove();
                this.activeSparkles--;
            }
        })
        .to(sparkle, { opacity: 0.5, scale: 1.2, duration: 4, ease: "sine.inOut" })
        .to(sparkle, { y: -10, x: 5, duration: 8, ease: "none" }, "-=4")
        .to(sparkle, { opacity: 0, scale: 0.8, duration: 4, ease: "sine.inOut" }, "-=4");
    }
}