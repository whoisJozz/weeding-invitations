# RFC-003
## Mobile Intro Experience & Cinematic Playback

Status:
PROPOSED

Author:
Architecture & Creative Direction

Reviewers:
Lead Front-End Engineer (Gemini)
Product Owner

Date:
2026-07-24

---

# Contexto

Durante las primeras pruebas realizadas en dispositivos reales mediante Vercel, se detectaron inconsistencias que afectan directamente la experiencia cinematográfica de apertura de la invitación.

Aunque la funcionalidad principal opera correctamente, existen comportamientos que rompen la inmersión y disminuyen la percepción premium del proyecto.

Este RFC define los lineamientos que deberán seguirse antes de continuar con el desarrollo del Hero.

---

# Problemas detectados

## UX-001

La pantalla muestra un fondo blanco antes del primer frame del video.

Resultado:

Se rompe el efecto cinematográfico.

---

## UX-002

El video puede desplazarse o manipularse mediante gestos táctiles (zoom, pellizco o arrastre).

Resultado:

El usuario percibe el video como un elemento HTML común y no como una experiencia inmersiva.

---

## UX-003

El video perdió su composición original.

Resultado:

El sobre deja de estar correctamente centrado y la narrativa visual se rompe.

---

## UX-004

El audio únicamente inicia en Desktop.

Resultado:

En dispositivos móviles la experiencia pierde gran parte de su impacto emocional.

---

## UX-005

La leyenda inicial no utiliza la tipografía oficial Symphony.

Resultado:

La interfaz pierde coherencia visual con el resto de la invitación.

---

# Decisiones aprobadas

## Intro

El primer frame del video deberá estar visible inmediatamente al ingresar.

Nunca deberá mostrarse una pantalla blanca.

---

## Video

El video deberá comportarse como una escena cinematográfica.

No podrá:

- desplazarse
- escalarse
- seleccionarse
- mostrar controles

---

## Audio

Video y música deberán comenzar exactamente en la misma interacción del usuario.

Nunca deberá solicitarse un segundo toque.

---

## Tipografía

La frase:

"Toca para abrir"

utilizará exclusivamente la fuente Symphony.

No se aceptarán fuentes fallback como resultado final.

---

## Narrativa

La experiencia deberá seguir la siguiente secuencia:

Usuario entra

↓

Primer frame del video

↓

Aparece "Toca para abrir"

↓

Usuario toca

↓

Fade Out del texto

↓

Video + Música

↓

Fade cinematográfico

↓

Hero

---

# Impacto

UX

Muy Alto

---

Performance

Bajo

---

Compatibilidad

Desktop

Android

iPhone

Tablet

---

# Aprobación

Este RFC deberá implementarse antes del Sprint 02.

No podrán desarrollarse nuevas secciones mientras la experiencia inicial no cumpla con estos requisitos.