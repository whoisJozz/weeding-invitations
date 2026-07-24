# RFC-004
# Cinematic Intro Experience

Status:
PROPOSED

Priority:
P0

Sprint:
01.4

Author:
Creative Direction (ChatGPT)

Implementation:
Lead Front-End Engineer (Gemini)

Reviewers:
Product Owner

---

# Objetivo

La introducción dejará de comportarse como una pantalla de inicio tradicional.

A partir de este RFC, la introducción deberá sentirse como el primer plano de una película.

El usuario nunca deberá percibir que está interactuando con un sitio web.

Toda la experiencia deberá transmitir elegancia, calma y expectativa.

---

# Problemas detectados

## UX-001

La leyenda "Toca para abrir" aparece en una posición visualmente incómoda.

Actualmente compite con el sello del sobre.

---

## UX-002

La leyenda permanece visible mientras el video comienza.

Esto rompe la ilusión cinematográfica.

---

## UX-003

La música inicia al mismo tiempo que el video.

Narrativamente genera demasiada información sonora.

---

## UX-004

La introducción carece de pequeños tiempos de respiración visual.

Todo ocurre demasiado rápido.

---

# Dirección Creativa

La introducción deberá sentirse como si el usuario estuviera frente a una invitación física colocada sobre una mesa.

Nada deberá distraer del sobre.

El sobre siempre será el protagonista.

---

# Narrativa

Secuencia deseada

Usuario entra

↓

Primer frame del video completamente inmóvil

↓

Silencio visual durante aproximadamente 800 ms

↓

Aparece lentamente la leyenda

"Toca para abrir"

↓

La leyenda permanece respirando mediante una animación extremadamente sutil

↓

Usuario toca la pantalla

↓

La leyenda desaparece mediante:

Opacity

+

Blur

↓

Pequeña pausa (200–300 ms)

↓

Comienza el video

↓

El usuario observa únicamente la apertura del sobre

↓

Aproximadamente 700 ms antes de terminar el video comienza un fade in de la música de fondo

↓

El video se desvanece

↓

Comienza la portada Hero

---

# Tipografía

Fuente obligatoria:

Symphony

Nunca utilizar fallback como resultado final.

---

# Composición

La leyenda deberá ubicarse visualmente por encima del sello.

Nunca deberá ocultarlo.

Nunca deberá quedar pegada a las esquinas.

Nunca deberá sentirse como un botón.

---

# Animación de la leyenda

Entrada

Opacity 0 → 1

Blur 8px → 0px

Duración aproximada

600 ms

---

Reposo

Movimiento prácticamente imperceptible

Escala

1 → 1.015 → 1

Duración

3 segundos

Repetición infinita

Muy sutil

---

Salida

Blur

0 → 8px

Opacity

1 → 0

Duración

300 ms

---

# Audio

El video conservará únicamente sus efectos ambientales.

La música principal NO comenzará inmediatamente.

La música deberá comenzar mediante un fade in durante los últimos 700 ms del video.

La transición deberá sentirse natural.

---

# Restricciones

No utilizar librerías adicionales.

No modificar la arquitectura del proyecto.

Mantener GSAP como motor de animación.

Mantener código modular.

No duplicar lógica.

---

# Impacto

UX

Muy Alto

Performance

Muy Bajo

Compatibilidad

Desktop

Android

iPhone

Tablet

---

# Definition of Done

☑ Primer frame visible inmediatamente

☑ Sin pantallas blancas

☑ Symphony cargando correctamente

☑ Leyenda correctamente posicionada

☑ Leyenda desaparece antes del video

☑ Música entra mediante fade

☑ Hero aparece suavemente

☑ Sin errores en consola

☑ Compatible con Safari iOS

☑ Compatible con Chrome Android