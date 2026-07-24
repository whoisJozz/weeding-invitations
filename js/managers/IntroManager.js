/**
 * IntroManager.js
 * Orquesta la experiencia cinematográfica inicial de la invitación.
 * Controla la secuencia de entrada, la interacción táctil (con desbloqueo de audio para iOS),
 * la reproducción del video y la transición final hacia el Hero.
 */

export default class IntroManager {
    constructor(audioManager) {
        // Elementos del DOM
        this.introSection = document.getElementById('intro');
        this.startText = document.getElementById('start-text');
        this.video = document.getElementById('intro-video');
        this.heroSection = document.getElementById('hero');
        
        // Dependencias
        this.audioManager = audioManager;
        
        // Estado
        this.isTransitioning = false;
        this.breathingAnim = null;

        this.init();
    }

    init() {
        if (!this.introSection || !this.video || !this.heroSection) return;

        // Utilizamos 'pointerdown' para unificar clicks en Desktop y taps rápidos en móviles
        this.introSection.addEventListener('pointerdown', () => this.handleUserInteraction(), { once: true });
        
        // Monitoreo del progreso del video para iniciar la transición antes de que termine
        this.video.addEventListener('timeupdate', () => this.checkVideoProgress());
        
        // Inicia la secuencia contemplativa en cuanto el DOM está listo
        this.playOpeningSequence();
    }

    playOpeningSequence() {
        // Silencio visual inicial de 800ms, luego aparición elegante de la leyenda (Fade In + Blur a 0)
        gsap.to(this.startText, {
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.6,
            delay: 0.8,
            ease: "power2.out",
            onComplete: () => this.startBreathingAnimation()
        });
    }

    startBreathingAnimation() {
        // Animación de respiración constante y casi imperceptible para no parecer un botón
        this.breathingAnim = gsap.to(this.startText, {
            scale: 1.015,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    }

    handleUserInteraction() {
        // 1. Detenemos la respiración inmediatamente
        if (this.breathingAnim) this.breathingAnim.kill();

        // 2. DESBLOQUEO SILENCIOSO DE AUDIO: 
        // Fundamental para sortear las políticas de autoplay en Safari/iOS.
        // Debe ocurrir exactamente dentro de este call stack originado por el usuario.
        this.audioManager.unlock();

        // 3. Salida elegante de la leyenda (Fade Out + Blur)
        gsap.to(this.startText, {
            opacity: 0,
            filter: "blur(8px)",
            duration: 0.3,
            ease: "power2.inOut",
            onComplete: () => {
                // Pausa dramática de 250ms antes de iniciar la acción principal
                setTimeout(() => {
                    this.startVideoPlayback();
                }, 250);
            }
        });
    }

    startVideoPlayback() {
        // Nos aseguramos de habilitar el canal de audio del video por si contiene efectos ambientales
        this.video.muted = false; 
        const playPromise = this.video.play();
        
        // Manejo seguro de la promesa por si el navegador bloquea la reproducción del video
        if (playPromise !== undefined) {
            playPromise.catch(() => this.forceTransition());
        }
    }

    checkVideoProgress() {
        if (this.isTransitioning || !this.video.duration) return;
        
        const timeRemaining = this.video.duration - this.video.currentTime;
        
        // Iniciar la transición 700ms antes de finalizar el video
        if (timeRemaining <= 0.7) {
            this.isTransitioning = true;
            
            // Iniciamos el fade in emocional de la música
            this.audioManager.fadeIn(); 
            
            // Transición cruzada hacia el Hero
            this.transitionToHero();
        }
    }

    forceTransition() {
        // Método de seguridad en caso de que el video falle o no pueda reproducirse
        if (!this.isTransitioning) {
            this.isTransitioning = true;
            this.audioManager.fadeIn();
            this.transitionToHero();
        }
    }

    transitionToHero() {
        // Preparamos el Hero para ser visible y accesible
        this.heroSection.style.display = 'flex';
        this.heroSection.setAttribute('aria-hidden', 'false');

        const tl = gsap.timeline({
            onComplete: () => {
                // Limpieza del DOM y liberación de recursos
                this.introSection.style.display = 'none';
                this.video.pause();
                
                // Disparamos el evento para que main.js (y futuros Sprints) sepan que la intro terminó
                window.dispatchEvent(new CustomEvent('intro:completed'));
            }
        });

        // Fade out suave de la escena del sobre (2.5s)
        tl.to(this.introSection, {
            opacity: 0,
            duration: 2.5,
            ease: "power1.inOut"
        })
        // Aparición de la portada tras un ligero solapamiento (offset de -1.5s)
        .to(this.heroSection, { 
            opacity: 1, 
            duration: 2.5, 
            ease: "power2.out" 
        }, "-=1.5");
    }
}