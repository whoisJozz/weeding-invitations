/**
 * main.js (Actualización)
 */
import IntroManager from './managers/IntroManager.js';
import AudioManager from './managers/AudioManager.js';
import HeroManager from './managers/HeroManager.js';
import StoryManager from './managers/StoryManager.js'; // FIX: Nueva importación

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

    // FIX SPRINT 03.0: Detener el scroll preventivamente para no arruinar la experiencia
    lenis.stop();
    document.body.style.overflowY = 'hidden'; 

    const audioManager = new AudioManager();
    new IntroManager(audioManager);
    const heroManager = new HeroManager();

    window.addEventListener('intro:completed', () => {
        heroManager.playEntrySequence();
        
        // FIX SPRINT 03.0: Inicializamos las interacciones de scroll del Acto II
        new StoryManager();
        
        // Habilitar el scroll después de que la portada se haya formado (~4 segundos)
        setTimeout(() => {
            lenis.start();
            document.body.style.overflowY = ''; // Liberar el scroll nativo
        }, 4000);
    });
});