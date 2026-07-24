---
Project: A&Y Experience
Version: 1.0.0
Sprint: 01.1
Name: Polish & Motion
Status: Approved
Target: Gemini
Owner: Product Team
Last Updated: 2026-07-23
---

# Sprint 01.1 — Polish & Motion

> "The first impression defines the entire experience."

---

# Contexto

El Sprint 01 permitió construir la estructura técnica inicial de la experiencia.

Después de una primera revisión (Architecture Review + UX Review + QA), se detectó que la implementación cumple funcionalmente, pero todavía no transmite la calidad visual y cinematográfica esperada.

Este Sprint NO agrega funcionalidades nuevas.

Su objetivo es perfeccionar la experiencia existente.

---

# Objetivo

Transformar la introducción en una experiencia premium.

El usuario nunca debe sentir que abrió una página web.

Debe sentir que tiene un sobre físico frente a él.

---

# Dirección Creativa

La primera escena representa un sobre colocado sobre una mesa.

No debe existir una pantalla negra.

No debe existir una sensación de carga.

El sobre ya está presente cuando el usuario abre la página.

La acción del usuario no inicia el sitio.

La acción del usuario abre la invitación.

---

# Flujo esperado

Usuario abre la URL

↓

Se muestra inmediatamente el primer frame del video (sin reproducción)

↓

El sobre permanece inmóvil

↓

Aparece la leyenda:

"Click para abrir"

↓

El usuario hace click en cualquier parte de la pantalla

↓

La leyenda desaparece mediante un fade elegante

↓

Comienza la reproducción del video

↓

La música inicia exactamente al mismo tiempo

↓

Antes de terminar el video comienza el fade cinematográfico

↓

El video desaparece sin mostrar el último frame congelado

↓

Se dispara el evento:

intro:completed

↓

Fin del Sprint

---

# Cambios requeridos

## Pantalla inicial

Eliminar completamente el fondo negro.

Eliminar cualquier botón HTML.

Mostrar únicamente el primer frame del video.

---

## Leyenda

Texto:

Click para abrir

Ubicación:

Superior izquierda.

Separación aproximada:

32px del borde superior.

32px del borde izquierdo.

Debe sentirse editorial.

Nunca como un botón.

---

## Video

El video debe cargarse inmediatamente.

Debe permanecer pausado.

No debe reproducirse automáticamente.

La reproducción inicia únicamente mediante interacción del usuario.

---

## Música

Agregar pista de fondo.

La reproducción inicia al mismo tiempo que el video.

La música continuará durante el resto de la experiencia.

---

## Fade

El fade no debe comenzar cuando el video termina.

Debe comenzar aproximadamente durante los últimos segundos del video.

El objetivo es ocultar completamente el cambio de escena.

---

## Responsive

La composición debe diseñarse sobre una relación 9:16.

Posteriormente deberá adaptarse a escritorio manteniendo dicha composición.

No debe existir zoom excesivo.

No debe perder calidad visual.

---

# Carpetas autorizadas

assets/video/

assets/audio/

css/base/

css/components/

js/managers/

js/config/

index.html

---

# Archivos esperados

Modificar:

index.html

intro.css

main.js

IntroManager.js

Agregar:

AudioManager.js

(si aplica)

---

# Restricciones

No desarrollar todavía:

Hero completo

Scroll

Countdown

Mesa de regalos

Dress Code

RSVP

Padrinos

---

# Definition of Done

- No existe pantalla negra.
- No existen botones HTML.
- El primer frame permanece visible.
- La leyenda aparece correctamente.
- El click inicia video y música.
- El fade inicia antes del final del video.
- No existe frame congelado.
- Responsive correcto.
- Sin errores de consola.
- Código comentado.

---

# QA Checklist

□ El sitio carga mostrando inmediatamente el sobre.

□ El texto "Click para abrir" parece una indicación editorial y no un botón.

□ El video conserva su composición.

□ No existe pérdida evidente de resolución.

□ El fade es imperceptible.

□ La música inicia sincronizada.

□ No existen errores 404.

□ Sin console.log.

□ Lighthouse Performance > 90.

□ Lighthouse Accessibility > 90.

---

# Commit sugerido

feat(intro): polish cinematic intro experience
