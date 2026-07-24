/**
 * AudioManager.js
 * Controla la reproducción de la música de fondo de la experiencia.
 */
export default class AudioManager {
    constructor() {
        this.audio = document.getElementById('bg-audio');
        this.isUnlocked = false;
    }

    /**
     * IMPORTANTE: Este método debe llamarse directamente dentro del evento de click/touch
     * del usuario. Reproduce el audio con volumen 0 para desbloquear el contexto de audio en iOS/Safari.
     */
    unlock() {
        if (this.audio && !this.isUnlocked) {
            this.audio.volume = 0;
            const playPromise = this.audio.play();
            
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    this.isUnlocked = true;
                    // El audio ya está corriendo, pero el usuario no lo escucha todavía.
                }).catch(() => {
                    console.warn('Audio unlock prevented by browser');
                });
            }
        }
    }

    /**
     * Se llama 700ms antes de terminar el video para hacer la transición emocional.
     */
    fadeIn() {
        if (this.audio) {
            // Por seguridad, verificamos si se pausó y lo volvemos a lanzar
            if (this.audio.paused) {
                this.audio.play().catch(() => {});
            }
            
            // Fade in musical de 3 segundos
            gsap.to(this.audio, {
                volume: 0.8,
                duration: 3,
                ease: "power1.inOut"
            });
        }
    }
}