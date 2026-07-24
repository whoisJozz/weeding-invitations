/**
 * main.js
 */
import IntroManager from './managers/IntroManager.js';
import AudioManager from './managers/AudioManager.js';
import HeroManager from './managers/HeroManager.js';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Inicialización de Lenis (Smooth Scroll)
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

    // 2. Inicialización de Managers
    const audioManager = new AudioManager();
    new IntroManager(audioManager);
    const heroManager = new HeroManager();

    // 3. Transición del Acto I al Acto II
    window.addEventListener('intro:completed', () => {
        heroManager.playEntrySequence();
    });
});