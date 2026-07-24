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
        // Tiempo en segundos antes del final del video para iniciar el fade
        this.fadeLeadTime = 1.5; 

        this.init();
    }

    init() {
        if (!this.introSection || !this.video || !this.heroSection) return;

        // Click en cualquier parte de la pantalla inicia la experiencia
        this.introSection.addEventListener('click', () => this.startExperience(), { once: true });
        
        // Monitorear el tiempo del video para iniciar el fade anticipado
        this.video.addEventListener('timeupdate', () => this.checkVideoProgress());
    }

    startExperience() {
        // Fade out de la leyenda editorial
        gsap.to(this.startText, {
            opacity: 0,
            duration: 1.5,
            ease: "power2.inOut"
        });

        // Iniciar video y música simultáneamente
        this.video.play().catch(() => this.forceTransition());
        this.audioManager.play();
    }

    checkVideoProgress() {
        if (this.isTransitioning || !this.video.duration) return;

        const timeRemaining = this.video.duration - this.video.currentTime;
        
        // Iniciar transición cinematográfica antes de que el video termine
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
                
                // Disparar evento de completado
                window.dispatchEvent(new CustomEvent('intro:completed'));
            }
        });

        // Fade out de la introducción y video
        tl.to(this.introSection, {
            opacity: 0,
            duration: 2,
            ease: "power1.inOut"
        })
        // Fade in del Hero
        .to(this.heroSection, { 
            opacity: 1, 
            duration: 2, 
            ease: "power2.out" 
        }, "-=1.2");
    }
}