/**
 * IntroManager.js
 * Orquestación milimétrica y cinematográfica.
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
        this.rafId = null; // Para el monitoreo de alta precisión

        this.init();
    }

    init() {
        if (!this.introSection || !this.video || !this.heroSection) return;

        this.introSection.addEventListener('pointerdown', () => this.handleUserInteraction(), { once: true });
        
        // La secuencia inicia mostrando el primer frame del video inmediatamente
        this.playOpeningSequence();
    }

    playOpeningSequence() {
        // Silencio visual. El texto aparece integrado a la composición.
        gsap.to(this.startText, {
            opacity: 0.85, // No llega a 1 para sentirse afectado por la luz del video
            filter: "blur(0px)",
            duration: 0.6,
            delay: 0.8,
            ease: "power2.out",
            onComplete: () => this.startBreathingAnimation()
        });
    }

    startBreathingAnimation() {
        this.breathingAnim = gsap.to(this.startText, {
            scale: 1.01, // Aún más sutil
            opacity: 0.65,
            duration: 3.5, // Más pausado
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
            filter: "blur(8px)",
            duration: 0.3,
            ease: "power2.inOut",
            onComplete: () => {
                setTimeout(() => {
                    this.startVideoPlayback();
                }, 250); // Pausa de 250ms (Objetivo 4)
            }
        });
    }

    startVideoPlayback() {
        this.video.muted = false; 
        const playPromise = this.video.play();
        
        if (playPromise !== undefined) {
            playPromise.then(() => {
                // Iniciamos monitoreo a 60fps en lugar del evento torpe timeupdate
                this.trackVideoProgress();
            }).catch(() => this.forceTransition());
        }
    }

    trackVideoProgress() {
        if (this.isTransitioning || !this.video.duration) return;
        
        const timeRemaining = this.video.duration - this.video.currentTime;
        
        // Corte milimétrico a los 700ms (Objetivo 5)
        if (timeRemaining <= 0.7) {
            this.isTransitioning = true;
            this.audioManager.fadeIn(); 
            this.transitionToHero();
        } else {
            // Continúa monitoreando en el siguiente frame
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

        // El video se desvanece por completo garantizando que el usuario 
        // nunca vea el último frame congelado (Objetivo 5).
        tl.to(this.introSection, {
            opacity: 0,
            duration: 0.7, // Sincronizado exactamente con el tiempo restante del video
            ease: "none" // Transición lineal para fundirse con la velocidad real del video
        })
        // El Hero emerge (Objetivo 6)
        .to(this.heroSection, { 
            opacity: 1, 
            scale: 1,
            filter: "blur(0px)",
            duration: 2.5, 
            ease: "power2.out" 
        }, "-=0.7");
    }
}