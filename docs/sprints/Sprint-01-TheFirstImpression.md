---
Project: A&Y Experience

Version: 1.0.0

Sprint: 01

Name: The First Impression

Status: Approved

Owner: Product Team

Target: Gemini

Last Updated: 2026-07-23
---

# Sprint 01 — The First Impression

> "The invitation begins before the invitation itself."

---

# Objetivo

Construir la primera impresión del usuario.

Este Sprint NO busca desarrollar la invitación completa.

Su única responsabilidad es crear una introducción cinematográfica que genere curiosidad y prepare la transición hacia la experiencia principal.

La experiencia debe sentirse elegante, limpia y fluida.

---

# Alcance

Este Sprint comienza cuando el usuario abre la página.

Finaliza cuando aparece completamente la portada (Hero).

Nada más.

---

# Flujo esperado

Carga inicial

↓

Pantalla completamente limpia

↓

Mensaje

"Toca para abrir"

↓

Click del usuario

↓

Reproducción del video

↓

Fade cinematográfico

↓

Desaparición del video

↓

Aparición del Hero

↓

Fin del Sprint

---

# Experiencia buscada

El usuario debe sentir que está abriendo una invitación física.

No debe sentirse como una página web.

Todo deberá transmitir:

Elegancia.

Calma.

Sofisticación.

Minimalismo.

---

# Restricciones

No desarrollar:

Countdown.

Mesa de regalos.

Padrinos.

Dress Code.

RSVP.

Scroll Story.

Animaciones posteriores.

Todo eso pertenece a futuros Sprints.

---

# Carpetas autorizadas

✅

assets/video/

css/base/

css/components/

js/

index.html

---

# Carpetas protegidas

❌

docs/

prompts/

README.md

assets/images/

---

# Archivos nuevos esperados

css/components/intro.css

css/components/hero.css

js/managers/IntroManager.js

js/main.js

---

# Archivos que pueden modificarse

index.html

main.css

---

# Dependencias

GSAP

ScrollTrigger

Lenis (solo inicialización)

---

# Reglas

Todo el código deberá estar comentado.

No duplicar funciones.

No utilizar estilos inline.

No utilizar JavaScript dentro del HTML.

Utilizar variables CSS.

Todo deberá ser modular.

---

# Animaciones

Las animaciones deberán sentirse naturales.

Inspiración:

Apple

Luxury Wedding Films

Editorial Design

No utilizar rebotes exagerados.

No utilizar efectos llamativos.

---

# Video

El video será tratado como un recurso cinematográfico.

No deberá reproducirse automáticamente.

El usuario iniciará la experiencia mediante un click.

---

# Hero

El Hero únicamente deberá aparecer.

No debe contener todavía toda la información definitiva.

Será únicamente la portada.

---

# Si detectas una mejora importante

No implementarla.

Generar un RFC.

Esperar aprobación.

---

# Entregables

Pantalla inicial.

Click funcional.

Video integrado.

Fade.

Hero.

Código modular.

Comentarios.

---

# Definition of Done

✔ Pantalla inicial visible.

✔ Click funcional.

✔ Video correctamente integrado.

✔ Fade cinematográfico.

✔ Hero aparece sin parpadeos.

✔ Responsive.

✔ Sin errores de consola.

✔ Código comentado.

✔ Lighthouse Performance superior a 90 (si es posible).

✔ Lighthouse Accessibility superior a 90 (si es posible).

---

# QA

Verificar:

No existe scroll horizontal.

No hay flickering.

No existen console.log.

No existen variables sin utilizar.

No existen estilos duplicados.

El Hero aparece únicamente al finalizar el video.

El video nunca se reproduce automáticamente.

Todo funciona correctamente en dispositivos móviles.

---

# Commit esperado

feat(intro): implement cinematic first impression experience

---

# Fin del Sprint

El Sprint termina únicamente cuando el Hero aparece completamente y la experiencia queda lista para comenzar el siguiente Sprint.

