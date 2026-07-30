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
/* GodparentsManager ELIMINADO EN APEGO AL RFC-017 */
import DressCodeManager from './managers/DressCodeManager.js'; 
import GiftManager from './managers/GiftManager.js';           
import ConfirmationManager from './managers/ConfirmationManager.js'; 
import ThanksManager from './managers/ThanksManager.js'; // NUEVO Sprint 10

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
        new DressCodeManager(); 
        new GiftManager();      
        new ConfirmationManager(); 
        new ThanksManager(); // Inicia la coreografía final

        setTimeout(() => {
            lenis.start();
            document.body.style.overflowY = ''; 
        }, 3000);
    });
});