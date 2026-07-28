/**
 * main.js
 */
import IntroManager from './managers/IntroManager.js';
import AudioManager from './managers/AudioManager.js';
import HeroManager from './managers/HeroManager.js';
import StoryManager from './managers/StoryManager.js';
import Act3Manager from './managers/Act3Manager.js'; // Añadido Sprint 05.0

document.addEventListener('DOMContentLoaded', () => {
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

    lenis.stop();
    document.body.style.overflowY = 'hidden'; 

    const audioManager = new AudioManager();
    new IntroManager(audioManager);
    const heroManager = new HeroManager();

    window.addEventListener('intro:completed', () => {
        heroManager.playEntrySequence();
        
        new StoryManager();
        new Act3Manager(); // Inicializar Acto III

        setTimeout(() => {
            lenis.start();
            document.body.style.overflowY = ''; 
        }, 3000);
    });
});