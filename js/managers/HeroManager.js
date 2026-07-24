/**
 * HeroManager.js
 * Orquesta la construcción editorial del Hero y el sistema de partículas.
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
        this.maxSparkles = 4; // Límite estricto de brillos
    }

    playEntrySequence() {
        const tl = gsap.timeline({
            onComplete: () => this.initSparkleSystem()
        });

        // 1. El Marco y las Flores (El lienzo)
        tl.to(this.frame, { opacity: 1, duration: 2, ease: "power2.inOut" })
          .to(this.flowers, { opacity: 0.85, duration: 2.5, ease: "power1.inOut", stagger: 0.5 }, "-=1");

        // 2. El Kicker ("Nuestra Boda")
        tl.fromTo(this.kicker, 
            { opacity: 0, y: 10 }, 
            { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" }, "-=0.5"
        );

        // 3. Los Nombres
        tl.fromTo(this.names[0], { opacity: 0, filter: "blur(4px)" }, { opacity: 1, filter: "blur(0px)", duration: 1.5, ease: "power2.out" }, "-=0.5")
          .fromTo(this.ampersand, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" }, "-=1")
          .fromTo(this.names[1], { opacity: 0, filter: "blur(4px)" }, { opacity: 1, filter: "blur(0px)", duration: 1.5, ease: "power2.out" }, "-=1");

        // 4. La Frase Pequeña
        tl.fromTo(this.quote, 
            { opacity: 0, y: 10 }, 
            { opacity: 1, y: 0, duration: 2, ease: "power2.out" }, "-=0.5"
        );
    }

    initSparkleSystem() {
        setInterval(() => this.spawnSparkle(), 1500);
    }

    spawnSparkle() {
        if (this.activeSparkles >= this.maxSparkles) return;

        this.activeSparkles++;
        
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
        
        // Posicionamiento aleatorio dentro del marco
        const top = Math.random() * 90 + 5; 
        const left = Math.random() * 90 + 5;
        
        sparkle.style.top = `${top}%`;
        sparkle.style.left = `${left}%`;
        
        this.sparklesContainer.appendChild(sparkle);

        gsap.timeline({
            onComplete: () => {
                sparkle.remove();
                this.activeSparkles--;
            }
        })
        .to(sparkle, { opacity: 0.8, scale: 1.5, duration: 2, ease: "sine.inOut" })
        .to(sparkle, { rotation: 45, duration: 4, ease: "none" }, "-=2")
        .to(sparkle, { opacity: 0, scale: 0, duration: 2, ease: "sine.inOut" }, "-=2");
    }
}