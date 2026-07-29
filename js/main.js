/**
 * main.js
 */
import IntroManager from './managers/IntroManager.js';
import AudioManager from './managers/AudioManager.js';
import HeroManager from './managers/HeroManager.js';
import StoryManager from './managers/StoryManager.js';
import PhotoManager from './managers/PhotoManager.js'; 
import CountdownManager from './managers/CountdownManager.js';
import EventManager from './managers/EventManager.js'; 
import GodparentsManager from './managers/GodparentsManager.js'; // Añadido: Sprint 07

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
        new PhotoManager(); 
        new CountdownManager(); 
        new EventManager(); 
        new GodparentsManager(); // Inicia orquestación del Homenaje a los Padrinos

        setTimeout(() => {
            lenis.start();
            document.body.style.overflowY = ''; 
        }, 3000);
    });
});