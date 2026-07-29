/**
 * PhotoManager.js
 * Orquesta la extracción de la fotografía del sobre.
 */

export default class PhotoManager {
    constructor() {
        this.section = document.getElementById('recuerdo');
        this.container = document.querySelector('.act-photo-anim');
        this.photo = document.querySelector('.fine-art-photo');
        this.envelopeFront = document.querySelector('.envelope-front');
        this.caption = document.querySelector('.act-caption-anim');

        this.initScroll();
    }

    initScroll() {
        if (!this.section || !this.photo) return;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: this.section,
                start: "top 65%", // Se activa cuando asoma un poco más arriba de la mitad
                toggleActions: "play none none reverse"
            }
        });

        // 1. Entrada del sobre completo
        tl.fromTo(this.container,
            { opacity: 0, y: 60 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
        );

        // 2. La fotografía emerge (Sale hacia arriba)
        tl.fromTo(this.photo,
            { y: "25%", scale: 0.96, boxShadow: "0 2px 5px rgba(0,0,0,0.02)" },
            { 
                y: "-15%", 
                scale: 1, 
                boxShadow: "0 15px 35px rgba(0,0,0,0.12)", 
                duration: 1.4, 
                ease: "power2.out" 
            },
            "-=0.2" // Inicia un poco antes de que termine de entrar el sobre
        );

        // 3. El bolsillo frontal se difumina ligeramente para perder protagonismo
        tl.to(this.envelopeFront,
            { opacity: 0.65, filter: "blur(2px)", duration: 1, ease: "power2.out" },
            "-=1.0"
        );

        // 4. Aparición del texto
        tl.fromTo(this.caption,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
            "-=0.5"
        );
    }
}