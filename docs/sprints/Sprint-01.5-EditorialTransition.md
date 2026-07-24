# Sprint 01.5
# Editorial Transition

Estado

READY

Prioridad

P0

---

# Objetivo

Eliminar completamente la sensación de "sitio web".

La introducción deberá sentirse como la apertura de una invitación física.

Este Sprint está dedicado exclusivamente al refinamiento visual.

No se agregará ninguna funcionalidad nueva.

---

# Problemas detectados

## UX-001

Actualmente el primer frame mostrado al usuario es un fondo sólido.

Debe ser el primer frame del video.

---

## UX-002

La leyenda aparece antes que el video.

Debe vivir sobre el video.

Nunca sobre un fondo vacío.

---

## UX-003

El texto todavía se percibe como un elemento HTML flotante.

Debe sentirse integrado al video.

---

## UX-004

Existe un pequeño congelamiento al finalizar el MP4.

Rompe la continuidad narrativa.

---

# Objetivos

## Objetivo 1

El primer frame visible del sitio deberá ser exactamente el primer frame del video.

El video permanecerá pausado.

---

## Objetivo 2

La leyenda

"Toca para abrir"

deberá aparecer sobre el video.

Nunca sobre un fondo beige.

Nunca sobre un fondo blanco.

---

## Objetivo 3

La leyenda deberá sentirse integrada.

No deberá parecer un botón.

No deberá parecer un overlay.

Debe sentirse parte de la composición.

---

## Objetivo 4

Después del toque

Fade Out

↓

Blur

↓

250 ms

↓

Comienza el video

---

## Objetivo 5

Eliminar completamente el congelamiento del último frame.

El fade deberá comenzar aproximadamente 700 ms antes del final del video.

Cuando el video termine deberá tener opacity 0.

El usuario nunca verá el último frame detenido.

---

## Objetivo 6

La transición hacia Hero deberá sentirse editorial.

No como un cambio de pantalla.

---

# Restricciones

No modificar Hero.

No modificar Scroll.

No modificar Countdown.

No modificar RSVP.

No modificar Dress Code.

No modificar arquitectura.

---

# Prompt para Gemini

Analiza este Sprint como si fueras un UX Designer, Motion Designer y Front-End Engineer.

No implementes únicamente lo solicitado.

Analiza el ritmo visual.

Analiza el peso visual.

Analiza la narrativa.

El primer frame del sitio deberá ser el primer frame del video completamente pausado.

La leyenda "Toca para abrir" deberá vivir sobre el video y formar parte de la composición.

Nunca deberá aparecer sobre un fondo vacío.

Al tocar la pantalla:

• Fade Out del texto
• Blur
• Esperar aproximadamente 250 ms
• Comenzar el video

Durante los últimos 700 ms del video deberá comenzar el fade hacia Hero.

El usuario nunca deberá alcanzar a percibir el último frame congelado.

Piensa como un diseñador de experiencias.

No solamente como un programador.

Si detectas una solución visualmente superior propónla antes de implementarla.

Justifica cada decisión.

---

# Carpetas

index.html

css/components/

css/base/

js/managers/

assets/fonts/

---

# QA

□ El primer frame es el video

□ La leyenda está sobre el video

□ No existe fondo beige inicial

□ El texto no parece un botón

□ Fade perfecto

□ Sin último frame congelado

□ Hero aparece naturalmente

□ Compatible iPhone

□ Compatible Android

□ Compatible Desktop

---

# Definition of Done

La introducción deberá sentirse como una producción cinematográfica y no como una página web.