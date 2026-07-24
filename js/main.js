/**
 * main.js
 * Archivo principal de la experiencia.
 * Inicializa el smooth scroll y orquesta la introducción.
 */

import IntroManager from './managers/IntroManager.js';
import AudioManager from './managers/AudioManager.js';

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

    // 2. Inicialización de la Primera Impresión
    const audioManager = new AudioManager();
    new IntroManager(audioManager);

    // 3. Escucha de Eventos Globales
    window.addEventListener('intro:completed', () => {
        // Espacio reservado para habilitar lógicas de scroll 
        // y módulos de los siguientes Sprints.
    });
});