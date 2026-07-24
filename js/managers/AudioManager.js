/**
 * AudioManager.js
 * Controla la reproducción de la música de fondo para la experiencia.
 */
export default class AudioManager {
    constructor() {
        this.audio = document.getElementById('bg-audio');
    }

    play() {
        if (this.audio) {
            this.audio.volume = 0;
            this.audio.play().catch(() => console.warn('Audio autoplay prevented'));
            
            // Fade in musical suave
            gsap.to(this.audio, {
                volume: 0.8,
                duration: 3,
                ease: "power1.inOut"
            });
        }
    }
}