/**
 * AudioManager.js
 */
export default class AudioManager {
    constructor() {
        this.audio = document.getElementById('bg-audio');
    }

    // Método directo para sortear políticas de autoplay
    playRaw() {
        if (this.audio) {
            this.audio.volume = 0;
            const playPromise = this.audio.play();
            
            // Fade in musical suave gestionado por GSAP
            gsap.to(this.audio, {
                volume: 0.8,
                duration: 3,
                ease: "power1.inOut"
            });
            
            return playPromise;
        }
    }
}