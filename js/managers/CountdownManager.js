/**
 * CountdownManager.js
 * RFC-011: Editorial Storytelling Timing
 */

export default class CountdownManager {
    constructor() {
        // Fecha oficial dictada por RFC-011
        // Se alinea a la zona horaria del dispositivo local (America/Mexico_City)
        this.targetDate = new Date(2026, 10, 21, 17, 0, 0).getTime();

        this.elements = {
            days: document.getElementById('cd-days'),
            hours: document.getElementById('cd-hours'),
            mins: document.getElementById('cd-mins'),
            secs: document.getElementById('cd-secs')
        };

        // Almacenamos el estado anterior para animar SÓLO cuando cambia
        this.currentValues = {
            days: null,
            hours: null,
            mins: null,
            secs: null
        };

        this.rafId = null;
        this.tick = this.tick.bind(this);
        
        this.start();
    }

    start() {
        // En lugar de setInterval, usamos rAF para sincronizar el cálculo
        // con la GPU y evitar layout thrashing.
        this.rafId = requestAnimationFrame(this.tick);
    }

    stop() {
        if (this.rafId) {
            cancelAnimationFrame(this.rafId);
        }
    }

    tick() {
        const now = new Date().getTime();
        const diff = this.targetDate - now;

        if (diff > 0) {
            const d = Math.floor(diff / (1000 * 60 * 60 * 24));
            const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const s = Math.floor((diff % (1000 * 60)) / 1000);

            this.updateElement('days', this.format(d));
            this.updateElement('hours', this.format(h));
            this.updateElement('mins', this.format(m));
            this.updateElement('secs', this.format(s));
        } else {
            // El Gran Día ha llegado
            this.updateElement('days', '00');
            this.updateElement('hours', '00');
            this.updateElement('mins', '00');
            this.updateElement('secs', '00');
            this.stop();
            return; 
        }

        this.rafId = requestAnimationFrame(this.tick);
    }

    format(num) {
        return num < 10 ? `0${num}` : num.toString();
    }

    updateElement(key, newValue) {
        const el = this.elements[key];
        if (!el) return;

        // Microanimación editorial (Solo si el dígito cambia)
        if (this.currentValues[key] !== newValue) {
            this.currentValues[key] = newValue;
            
            gsap.fromTo(el,
                { 
                    y: 12, 
                    opacity: 0, 
                    filter: "blur(4px)" 
                },
                { 
                    y: 0, 
                    opacity: 1, 
                    filter: "blur(0px)", 
                    duration: 0.35, // Tiempo exacto solicitado
                    ease: "power2.out",
                    onStart: () => {
                        el.innerText = newValue;
                    }
                }
            );
        }
    }
}