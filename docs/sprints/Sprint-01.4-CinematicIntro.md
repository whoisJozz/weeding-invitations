# Sprint 01.4
## Cinematic Intro Polish

Estado

READY

Prioridad

P0

---

# Objetivo

Transformar la introducción actual en una experiencia cinematográfica premium siguiendo completamente el RFC-004.

Este Sprint no incorpora nuevas funcionalidades.

Su único objetivo es perfeccionar la experiencia inicial.

---

# Carpetas que se modificarán

index.html

css/components/

css/base/

js/managers/

js/config/

assets/fonts/

assets/audio/

---

# Archivos candidatos

index.html

css/components/intro.css

css/base/typography.css

js/managers/IntroManager.js

js/managers/AudioManager.js

---

# Archivos que NO deben tocarse

Hero

Scroll

Countdown

Mesa de regalos

Padrinos

Dress Code

Confirmación

Lenis

ScrollTrigger

---

# Tareas

## 1

Corregir la carga de Symphony.

Eliminar completamente el error 404.

---

## 2

Reposicionar la leyenda.

Debe ubicarse visualmente por encima del sello.

Nunca deberá ocultarlo.

---

## 3

Agregar una aparición elegante.

Fade In

+

Blur

---

## 4

Agregar respiración muy sutil mediante GSAP.

Nunca deberá parecer un botón.

---

## 5

Al tocar:

Fade Out

+

Blur

↓

Esperar aproximadamente 250 ms

↓

Comenzar video

---

## 6

Eliminar completamente cualquier retraso visual entre el video y la transición.

---

## 7

La música deberá iniciar mediante un fade in durante los últimos 700 ms del video.

No iniciar la música al mismo tiempo que el video.

---

## 8

Verificar Safari iOS.

Verificar Chrome Android.

---

# Prompt para Gemini

Implementa completamente RFC-004.

No agregues nuevas secciones.

No modifiques el Hero.

Toda la atención debe centrarse en perfeccionar la experiencia cinematográfica de apertura.

La introducción deberá sentirse elegante, pausada y editorial.

La leyenda "Toca para abrir" deberá aparecer mediante un fade con blur, respirar de forma extremadamente sutil y desaparecer completamente antes de que inicie el video.

El video iniciará aproximadamente 250 ms después de terminar la animación de salida del texto.

La música principal no deberá iniciar junto con el video.

Deberá comenzar mediante un fade in aproximadamente 700 ms antes de finalizar el video para generar una transición emocional hacia el Hero.

La fuente Symphony deberá cargarse correctamente desde assets/fonts sin producir errores 404.

Todo el código deberá mantenerse modular, comentado y optimizado.

Cada decisión deberá justificarse mediante comentarios.

---

# QA Checklist

□ Sin pantallas blancas

□ Symphony funcionando

□ Sin errores 404

□ Sin errores JS

□ Texto correctamente alineado

□ Texto desaparece antes del video

□ Música sincronizada

□ Hero sin cortes

□ Desktop

□ Android

□ iPhone

□ Lighthouse sin regresiones

---

# Definition of Done

☑ Introducción cinematográfica aprobada

☑ UX Premium

☑ Sin bugs críticos

☑ Código modular

☑ Responsive

☑ Compatible con Vercel

---

# Commit

Branch

feature/sprint-01.4-cinematic-intro

Commit

feat(intro): implement cinematic opening experience

Deploy

Vercel Preview

Merge

develop