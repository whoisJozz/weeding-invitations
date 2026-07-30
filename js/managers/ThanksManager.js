/**
 * ThanksManager.js
 * Sprint 10: Acordeón GSAP
 */
export default class ThanksManager {
    constructor() {
        this.section = document.getElementById('gratitud');
        this.elements = gsap.utils.toArray('#gratitud .thanks-anim');
        this.headers = document.querySelectorAll('.accordion-header');

        this.initScroll();
        this.initAccordion();
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
                    start: "top 75%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    }

    initAccordion() {
        this.headers.forEach(header => {
            header.addEventListener('click', () => {
                const body = header.nextElementSibling;
                const isActive = header.classList.contains('active');

                // Cerrar cualquier otro acordeón abierto para limpieza visual
                this.headers.forEach(h => {
                    if (h !== header && h.classList.contains('active')) {
                        h.classList.remove('active');
                        h.setAttribute('aria-expanded', 'false');
                        gsap.to(h.nextElementSibling, {
                            height: 0,
                            opacity: 0,
                            filter: "blur(4px)",
                            duration: 0.6,
                            ease: "power2.out"
                        });
                    }
                });

                // Alternar el actual
                if (isActive) {
                    header.classList.remove('active');
                    header.setAttribute('aria-expanded', 'false');
                    gsap.to(body, {
                        height: 0,
                        opacity: 0,
                        filter: "blur(4px)",
                        duration: 0.6,
                        ease: "power2.out"
                    });
                } else {
                    header.classList.add('active');
                    header.setAttribute('aria-expanded', 'true');
                    gsap.to(body, {
                        height: "auto",
                        opacity: 1,
                        filter: "blur(0px)",
                        duration: 0.6,
                        ease: "power2.out"
                    });
                }
            });
        });
    }
}