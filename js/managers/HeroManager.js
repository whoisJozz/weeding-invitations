/**
 * HeroManager.js
 */
export default class HeroManager {
    constructor() {
        this.frame = document.querySelector('.hero-frame');
        this.flowers = document.querySelectorAll('.floral-accent');
        this.kicker = document.querySelector('.hero-kicker');
        this.names = document.querySelectorAll('.hero-title .name');
        this.ampersand = document.querySelector('.hero-title .ampersand');
        this.quote = document.querySelector('.hero-quote');
        
        this.verse = document.querySelector('.hero-verse');
        this.reference = document.querySelector('.hero-reference');
        this.scrollIndicator = document.querySelector('.scroll-indicator');

        this.sparklesContainer = document.getElementById('sparkles-container');
        
        this.frameGlint = document.createElement('div');
        this.frameGlint.classList.add('frame-glint');
        this.frame.appendChild(this.frameGlint);
        
        this.activeSparkles = 0;
        this.maxSparkles = 4; 
        this.sparkleTimer = null;
    }

    playEntrySequence() {
        const tl = gsap.timeline({
            onComplete: () => {
                this.initSparkleSystem();
                this.initFrameGlint();
                this.animateScrollIndicator(); 
            }
        });

        tl.to(this.frame, { opacity: 1, duration: 0.8, ease: "power2.out" }, 0);
        tl.to(this.flowers, { opacity: 0.6, duration: 3.5, ease: "power1.inOut", stagger: 0.2 }, 0.2);

        tl.fromTo(this.kicker, 
            { opacity: 0, y: 15 }, 
            { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" }, 0.6
        );

        tl.fromTo(this.names[0], { opacity: 0, filter: "blur(6px)" }, { opacity: 1, filter: "blur(0px)", duration: 2, ease: "power2.out" }, 0.9);
        tl.fromTo(this.ampersand, { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 2, ease: "power2.out" }, 1.1);
        tl.fromTo(this.names[1], { opacity: 0, filter: "blur(6px)" }, { opacity: 1, filter: "blur(0px)", duration: 2, ease: "power2.out" }, 1.3);

        tl.fromTo(this.quote, 
            { opacity: 0, y: 10 }, 
            { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" }, 1.6
        );

        tl.fromTo(this.verse, 
            { opacity: 0, y: 15, filter: "blur(4px)" }, 
            { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.5, ease: "power2.out" }, 1.9
        );

        tl.fromTo(this.reference, 
            { opacity: 0, y: 10 }, 
            { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" }, 2.3
        );

        tl.fromTo(this.scrollIndicator,
            { opacity: 0, y: -10 },
            { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" }, 2.8
        );
    }

    animateScrollIndicator() {
        gsap.to(this.scrollIndicator, {
            y: 8,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    }

    initFrameGlint() {
        this.scheduleNextGlint();
    }

    scheduleNextGlint() {
        const nextInterval = Math.random() * (12000 - 8000) + 8000;
        setTimeout(() => {
            this.animateGlint();
            this.scheduleNextGlint();
        }, nextInterval);
    }

    animateGlint() {
        gsap.set(this.frameGlint, { top: 0, left: 0, width: "150px", height: "1px", x: -150, opacity: 0 });
        gsap.timeline()
            .to(this.frameGlint, { opacity: 1, duration: 0.5, ease: "power2.in" })
            .to(this.frameGlint, { x: this.frame.offsetWidth, duration: 3, ease: "none" }, "-=0.5")
            .to(this.frameGlint, { opacity: 0, duration: 0.5, ease: "power2.out" }, "-=0.5");
    }

    initSparkleSystem() {
        this.scheduleNextSparkle();
    }

    scheduleNextSparkle() {
        const nextInterval = Math.random() * (5000 - 3000) + 3000;
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
        .to(sparkle, { opacity: 0.8, scale: 1.2, duration: 4, ease: "sine.inOut" })
        .to(sparkle, { y: -10, x: 5, duration: 8, ease: "none" }, "-=4")
        .to(sparkle, { opacity: 0, scale: 0.8, duration: 4, ease: "sine.inOut" }, "-=4");
    }
}