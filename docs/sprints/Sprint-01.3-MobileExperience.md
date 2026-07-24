---
Project: Nuestra Boda

Sprint:
01.3

Name:
Mobile Experience Refinement

Status:
READY

Priority:
HIGH

Owner:
Lead Front-End Engineer (Gemini)

Creative Direction:
ChatGPT

Product Owner:
Client

---

# Objetivo

Refinar completamente la experiencia de apertura para que funcione de manera idéntica en Desktop y dispositivos móviles.

Este Sprint no agrega nuevas funcionalidades.

Su propósito es perfeccionar la experiencia existente.

---

# Carpetas que se modificarán

index.html

css/components/

css/base/

js/managers/

js/config/

assets/fonts/

---

# Archivos que probablemente se modificarán

index.html

css/components/intro.css

css/base/typography.css

js/managers/IntroManager.js

js/config/video.js

---

# Archivos que NO deben tocarse

Hero

Countdown

RSVP

DressCode

Gallery

GiftTable

Padrinos

Scroll

Lenis

GSAP Timeline principal

---

# Tareas

## 1

Eliminar completamente la pantalla blanca inicial.

---

## 2

Mostrar el primer frame del video desde el primer instante.

---

## 3

Mantener el video inmóvil.

No permitir:

- zoom
- drag
- selección
- gestos táctiles

---

## 4

Conservar correctamente el aspecto 9:16.

Nunca deformar el video.

---

## 5

Corregir la carga de Symphony.

La frase:

"Toca para abrir"

deberá utilizar dicha fuente.

---

## 6

Reposicionar la leyenda.

Debe aparecer encima del sello.

Nunca pegada a las esquinas.

---

## 7

Incrementar el tamaño de la leyenda.

Utilizar clamp() para comportamiento responsive.

---

## 8

Aplicar color oficial:

#C8A24A

---

## 9

Implementar una animación editorial:

Fade In

↓

Respiración muy sutil

↓

Fade Out

---

## 10

Sincronizar

Fade

↓

Video

↓

Audio

↓

Hero

---

# Prompt para Gemini

Implementa todas las mejoras descritas en RFC-003 respetando la arquitectura del proyecto.

No agregues nuevas funcionalidades.

No modifiques la estructura del Hero.

La prioridad absoluta es que la introducción se perciba como una experiencia cinematográfica premium.

El video deberá mostrarse desde el primer frame sin pantallas intermedias.

La leyenda "Toca para abrir" deberá utilizar la fuente Symphony correctamente cargada desde assets/fonts, emplear el color oficial #C8A24A, ubicarse por encima del sello con una composición elegante y desaparecer mediante un fade suave al momento en que el usuario interactúe.

Video y audio deberán comenzar exactamente en la misma interacción del usuario para garantizar compatibilidad con Android e iOS.

El video nunca deberá deformarse, desplazarse ni permitir gestos táctiles.

Todo el código deberá mantenerse modular, comentado y justificado.

---

# Definition of Done

☑ Sin pantalla blanca

☑ Symphony funcionando

☑ Video inmóvil

☑ Audio en Android

☑ Audio en iPhone

☑ Fade