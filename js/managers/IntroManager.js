/**
 * IntroManager.js
 */
export default class IntroManager {
    constructor(audioManager) {
        this.introSection = document.getElementById('intro');
        this.startText = document.getElementById('start-text');
        this.video = document.getElementById('intro-video');
        this.heroSection = document.getElementById('hero');
        this.audioManager = audioManager;
        
        this.isTransitioning = false;
        this.fadeLeadTime = 1.5; 

        this.init();
    }

    init() {
        if (!this.introSection || !this.video || !this.heroSection) return;

        // Se usa 'pointerdown' para unificar la respuesta táctil rápida en iOS/Android y clicks en Desktop
        this.introSection.addEventListener('pointerdown', () => this.startExperience(), { once: true });
        this.video.addEventListener('timeupdate', () => this.checkVideoProgress());
    }

    startExperience() {
        // Fade out de la leyenda
        gsap.to(this.startText, {
            opacity: 0,
            duration: 1.2,
            ease: "power2.inOut",
            overwrite: "auto"
        });

        // Sincronización absoluta: Video y Audio se disparan en el mismo tick de ejecución[cite: 7, 8]
        this.video.muted = false; // Asegurar que el video pueda emitir sonido si lo tuviera
        const videoPlayPromise = this.video.play();
        const audioPlayPromise = this.audioManager.playRaw(); // Delegamos la orden de play nativa

        if (videoPlayPromise !== undefined) {
            videoPlayPromise.catch(() => this.forceTransition());
        }
    }

    checkVideoProgress() {
        if (this.isTransitioning || !this.video.duration) return;
        const timeRemaining = this.video.duration - this.video.currentTime;
        
        if (timeRemaining <= this.fadeLeadTime) {
            this.isTransitioning = true;
            this.transitionToHero();
        }
    }

    forceTransition() {
        if (!this.isTransitioning) {
            this.isTransitioning = true;
            this.transitionToHero();
        }
    }

    transitionToHero() {
        this.heroSection.style.display = 'flex';
        this.heroSection.setAttribute('aria-hidden', 'false');

        const tl = gsap.timeline({
            onComplete: () => {
                this.introSection.style.display = 'none';
                this.video.pause();
                window.dispatchEvent(new CustomEvent('intro:completed'));
            }
        });

        tl.to(this.introSection, {
            opacity: 0,
            duration: 2.5,
            ease: "power1.inOut"
        })
        .to(this.heroSection, { 
            opacity: 1, 
            duration: 2.5, 
            ease: "power2.out" 
        }, "-=1.5");
    }
}