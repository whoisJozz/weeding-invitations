/**
 * IntroManager.js
 * Sincronización ininterrumpida y soporte Safe/iOS.
 */

export default class IntroManager {
    constructor(audioManager) {
        this.introSection = document.getElementById('intro');
        this.startText = document.getElementById('start-text');
        this.video = document.getElementById('intro-video');
        this.heroSection = document.getElementById('hero');
        
        this.audioManager = audioManager;
        this.isTransitioning = false;
        this.breathingAnim = null;
        this.rafId = null;

        this.init();
    }

    init() {
        if (!this.introSection || !this.video || !this.heroSection) return;

        this.introSection.addEventListener('click', () => this.handleUserInteraction(), { once: true });
        this.forceIOSFrameRender();
        this.playOpeningSequence();
    }

    forceIOSFrameRender() {
        this.video.addEventListener('loadedmetadata', () => {
            this.video.currentTime = 0.1;
        }, { once: true });
    }

    playOpeningSequence() {
        gsap.to(this.startText, {
            opacity: 0.85, 
            filter: "drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.4)) blur(0px)",
            duration: 0.6,
            delay: 0.8,
            ease: "power2.out",
            onComplete: () => this.startBreathingAnimation()
        });
    }

    startBreathingAnimation() {
        this.breathingAnim = gsap.to(this.startText, {
            scale: 1.01,
            opacity: 0.65,
            duration: 3.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    }

    handleUserInteraction() {
        if (this.breathingAnim) this.breathingAnim.kill();
        this.audioManager.unlock();

        gsap.to(this.startText, {
            opacity: 0,
            filter: "drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.4)) blur(8px)",
            duration: 0.3,
            ease: "power2.inOut",
            onComplete: () => {
                setTimeout(() => {
                    this.startVideoPlayback();
                }, 250);
            }
        });
    }

    startVideoPlayback() {
        this.video.muted = false; 
        const playPromise = this.video.play();
        
        if (playPromise !== undefined) {
            playPromise.then(() => {
                this.trackVideoProgress();
            }).catch(() => this.forceTransition());
        }
    }

    trackVideoProgress() {
        if (this.isTransitioning || !this.video.duration) return;
        
        const timeRemaining = this.video.duration - this.video.currentTime;
        
        // Transición adelantada a los 0.45s
        if (timeRemaining <= 0.45) {
            this.isTransitioning = true;
            this.audioManager.fadeIn(); 
            this.transitionToHero();
        } else {
            this.rafId = requestAnimationFrame(() => this.trackVideoProgress());
        }
    }

    forceTransition() {
        if (!this.isTransitioning) {
            this.isTransitioning = true;
            if (this.rafId) cancelAnimationFrame(this.rafId);
            this.audioManager.fadeIn();
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

        // La salida del video dura los mismos 0.45s para no congelarse
        tl.to(this.introSection, {
            opacity: 0,
            duration: 0.45, 
            ease: "none"
        })
        .to(this.heroSection, { 
            opacity: 1, 
            scale: 1,
            filter: "blur(0px)",
            duration: 2.5, 
            ease: "power2.out" 
        }, "-=0.45");
    }
}