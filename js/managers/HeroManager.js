/**
 * HeroManager.js
 * Editorial Polish.
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
        this.maxSparkles = 4;
    }

    playEntrySequence() {
        const tl = gsap.timeline({
            onComplete: () => this.initSparkleSystem()
        });

        tl.to(this.frame, { opacity: 1, duration: 2.5, ease: "power1.inOut" })
          /* FIX DA: Flores reducidas al 25% de opacidad para que no compitan */
          .to(this.flowers, { opacity: 0.25, duration: 3, ease: "power1.inOut", stagger: 0.5 }, "-=1.5");

        tl.fromTo(this.kicker, 
            { opacity: 0, y: 15 }, 
            { opacity: 1, y: 0, duration: 2, ease: "power2.out" }, "-=0.5"
        );

        tl.fromTo(this.names[0], { opacity: 0, filter: "blur(6px)" }, { opacity: 1, filter: "blur(0px)", duration: 2, ease: "power2.out" }, "-=1")
          .fromTo(this.ampersand, { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 2, ease: "power2.out" }, "-=1.5")
          .fromTo(this.names[1], { opacity: 0, filter: "blur(6px)" }, { opacity: 1, filter: "blur(0px)", duration: 2, ease: "power2.out" }, "-=1.5");

        tl.fromTo(this.quote, 
            { opacity: 0, y: 10 }, 
            { opacity: 1, y: 0, duration: 2.5, ease: "power2.out" }, "-=1"
        );
    }

    initSparkleSystem() {
        /* FIX DA: El polvo aparece con mucha menor frecuencia */
        setInterval(() => this.spawnSparkle(), 3000);
    }

    spawnSparkle() {
        if (this.activeSparkles >= this.maxSparkles) return;

        this.activeSparkles++;
        
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
        
        const top = Math.random() * 90 + 5; 
        const left = Math.random() * 90 + 5;
        
        sparkle.style.top = `${top}%`;
        sparkle.style.left = `${left}%`;
        
        this.sparklesContainer.appendChild(sparkle);

        /* FIX DA: Animación extremadamente lenta (12 segundos) y casi imperceptible */
        gsap.timeline({
            onComplete: () => {
                sparkle.remove();
                this.activeSparkles--;
            }
        })
        .to(sparkle, { opacity: 0.6, scale: 1.5, duration: 4, ease: "sine.inOut" })
        .to(sparkle, { y: -15, x: 10, duration: 8, ease: "none" }, "-=4") /* Ligera deriva en el aire */
        .to(sparkle, { opacity: 0, scale: 0.5, duration: 4, ease: "sine.inOut" }, "-=4");
    }
}