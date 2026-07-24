/**
 * HeroManager.js
 * Editorial Polish Final (RFC-008 & Sprint 02.3)
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
        
        this.activeSparkles = 0;
        this.maxSparkles = 2; // Máximo 2 simultáneos (Sprint 02.3)
        this.sparkleTimer = null;
    }

    playEntrySequence() {
        const tl = gsap.timeline({
            onComplete: () => this.initSparkleSystem()
        });

        // Nivel 3: El Marco surge del silencio
        tl.to(this.frame, { opacity: 1, duration: 2.5, ease: "power1.inOut" })
          
          // Nivel 2: Las Flores (Acuarelas) entran muy lento (4 segs) hasta opacidad 0.22
          .to(this.flowers, { opacity: 0.22, duration: 4, ease: "power1.inOut", stagger: 0.5 }, "-=1.5");

        // Nivel 1: El Contenido Principal
        tl.fromTo(this.kicker, 
            { opacity: 0, y: 15 }, 
            { opacity: 1, y: 0, duration: 2, ease: "power2.out" }, "-=2" // Inicia mientras pintan las flores
        );

        tl.fromTo(this.names[0], { opacity: 0, filter: "blur(6px)" }, { opacity: 1, filter: "blur(0px)", duration: 2.5, ease: "power2.out" }, "-=1.5")
          .fromTo(this.ampersand, { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 2.5, ease: "power2.out" }, "-=2")
          .fromTo(this.names[1], { opacity: 0, filter: "blur(6px)" }, { opacity: 1, filter: "blur(0px)", duration: 2.5, ease: "power2.out" }, "-=2");

        tl.fromTo(this.quote, 
            { opacity: 0, y: 10 }, 
            { opacity: 1, y: 0, duration: 2.5, ease: "power2.out" }, "-=1"
        );
    }

    initSparkleSystem() {
        this.scheduleNextSparkle();
    }

    scheduleNextSparkle() {
        // Intervalo aleatorio entre 5000ms y 7000ms (5 - 7 segundos)
        const nextInterval = Math.random() * (7000 - 5000) + 5000;
        
        this.sparkleTimer = setTimeout(() => {
            this.spawnSparkle();
            this.scheduleNextSparkle(); // Bucle recursivo orgánico
        }, nextInterval);
    }

    spawnSparkle() {
        if (this.activeSparkles >= this.maxSparkles) return;

        this.activeSparkles++;
        
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
        
        // Área segura dentro del marco (15% a 85%)
        const top = Math.random() * 70 + 15; 
        const left = Math.random() * 70 + 15;
        
        sparkle.style.top = `${top}%`;
        sparkle.style.left = `${left}%`;
        
        this.sparklesContainer.appendChild(sparkle);

        // Animación etérea y apenas perceptible
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