/**
 * main.js
 */
import IntroManager from './managers/IntroManager.js';
import AudioManager from './managers/AudioManager.js';

document.addEventListener('DOMContentLoaded', () => {
    // Lenis Smooth Scroll
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Inicializar Managers
    const audioManager = new AudioManager();
    new IntroManager(audioManager);

    // Escuchar el final del Sprint
    window.addEventListener('intro:completed', () => {
        // Lógica para futuros Sprints (ej. habilitar scroll)
    });
});