/**
 * GiftManager.js
 * Sprint 08
 */
export default class GiftManager {
    constructor() {
        this.section = document.getElementById('mesa-regalos');
        this.elements = gsap.utils.toArray('#mesa-regalos .gift-anim');

        this.initScroll();
    }

    initScroll() {
        if (!this.section || this.elements.length === 0) return;

        gsap.fromTo(this.elements,
            { opacity: 0, y: 30, filter: "blur(6px)" },
            {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                duration: 1.2,
                stagger: 0.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: this.section,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    }
}