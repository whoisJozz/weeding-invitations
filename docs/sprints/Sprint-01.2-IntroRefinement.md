---
Project: Nuestra Boda
Version: 1.0.0
Sprint: 01.2
Name: Intro Refinement
Status: Approved

Assigned To:
Lead Experience Engineer (Gemini)

Reviewed By:
Architecture & Creative Direction (ChatGPT)

Approved By:
Product Owner

Last Updated: 2026-07-24
---

# Sprint 01.2 — Intro Refinement

> "The invitation begins before the first interaction."

---

# Objetivo

Perfeccionar la experiencia inicial del usuario antes de continuar con el Hero.

No se agregan nuevas funcionalidades.

Este Sprint se centra exclusivamente en mejorar la percepción visual, la interacción y la narrativa cinematográfica de la introducción.

---

# Contexto

Tras desplegar la primera versión en Vercel y realizar pruebas iniciales, se detectaron varios aspectos visuales que deben corregirse antes de continuar con el desarrollo.

La funcionalidad general es correcta, pero la experiencia aún no comunica el nivel premium esperado.

---

# Cambios requeridos

## 1. Leyenda de interacción

Modificar el texto mostrado al usuario.

Mostrar:

"Toca para abrir"

No utilizar "Click para abrir" ni "Haz clic para abrir".

La experiencia está pensada principalmente para dispositivos móviles.

---

## 2. Posición

La leyenda deberá colocarse visualmente relacionada con el sobre.

No deberá quedar pegada a la esquina.

Debe ubicarse por encima del sello, con suficiente espacio negativo para mantener una composición elegante.

La mirada del usuario debe viajar del texto hacia el sello de forma natural.

---

## 3. Tipografía

Utilizar obligatoriamente la fuente Symphony.

Si la fuente no carga correctamente, corregir la importación desde assets/fonts y validar que el navegador esté utilizando dicha tipografía.

No se aceptarán fuentes de reemplazo como resultado final.

---

## 4. Color

Utilizar el dorado metálico oficial:

#C8A24A

El texto debe contrastar correctamente con el sobre azul marino.

---

## 5. Tamaño

Incrementar considerablemente el tamaño de la leyenda.

Debe ser claramente visible sin competir con el sello.

Se recomienda utilizar valores responsivos mediante clamp().

---

## 6. Animación

La leyenda debe:

- aparecer mediante un fade suave,
- permanecer visible con una respiración muy sutil de opacidad,
- desaparecer elegantemente al iniciar el video.

No utilizar escalados, rebotes ni efectos llamativos.

---

## 7. Responsive

Validar específicamente la experiencia en:

- Desktop
- Android (Chrome)
- iPhone (Safari)

La composición debe mantenerse consistente en todos los dispositivos.

---

# Definition of Done

- La fuente Symphony carga correctamente.
- La leyenda utiliza el color oficial.
- La posición guía visualmente hacia el sello.
- El tamaño es adecuado en móvil y escritorio.
- La animación resulta elegante y discreta.
- No existen errores en consola.
- La experiencia mantiene su carácter premium.

---

# Technical Debt

Mantener abiertos:

- Ajuste fino del zoom del video en escritorio.
- Validación de resolución en dispositivos reales.
- Sincronización definitiva entre video, audio y transición.

---

# Commit sugerido

style(intro): refine cinematic interaction prompt