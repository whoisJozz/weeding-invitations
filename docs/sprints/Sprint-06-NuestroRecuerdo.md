# Sprint 06
# Nuestro Recuerdo

Estado

READY

---

## Objetivo

Construir la escena editorial de la fotografía.

No es una galería.

No es una sección.

Es un momento emocional.

---

## Orden narrativo

Hero

↓

Historia

↓

Fotografía

↓

Lugar

↓

Contador

↓

Dress Code

↓

Mesa de regalos

↓

Padrinos

↓

Confirmación

---

## Escena

El usuario termina de leer la historia.

Hace scroll.

El fondo continúa.

Los brillos siguen flotando.

El espacio queda limpio.

Aparece lentamente un sobre elegante.

Dentro del sobre sobresale una fotografía.

No completamente.

Solo una parte.

---

## Interacción

Al entrar al viewport

animar:

sobre

↓

fotografía

↓

texto

↓

brillos

---

## Animación

1.

Fade In

+

TranslateY

del sobre.

Duración

0.8

---

2.

La fotografía sale lentamente.

TranslateY

Scale

Shadow

Duración

1.4

---

3.

El sobre pierde protagonismo.

opacity

↓

blur ligero

---

4.

La fotografía queda suspendida.

No debe moverse.

Debe sentirse estable.

---

## Fotografía

Formato vertical.

Relación aproximada

4:5

Con borde blanco fino.

Como impresión Fine Art.

No Polaroid gruesa.

---

## Marco

Color

Marfil

Sombra

Muy suave.

---

## Texto

Debajo

Una frase.

Ejemplo:

"Cada fotografía guarda un instante...

esta guarda el comienzo de nuestra vida juntos."

Tipografía secundaria.

Color Taupe.

No utilizar Symphony.

---

## Brillos

Mantener sistema existente.

Reducir frecuencia.

No competir con la fotografía.

---

## Performance

IntersectionObserver.

Una sola ejecución.

No repetir animaciones.

---

## Recursos

Gemini NO debe asumir rutas.

Antes de implementar preguntar:

• ubicación fotografía

• nombre archivo

• tamaño recomendado

---

## Archivos nuevos

sections/photo.html

css/components/photo.css

js/managers/PhotoManager.js

---

## Archivos a modificar

index.html

main.js

---

## Archivos prohibidos

IntroManager

HeroManager

CountdownManager

StoryManager

AudioManager

No modificar salvo bug crítico.

---

## RF

RF-021

Mostrar fotografía editorial.

RF-022

Animación cinematográfica.

RF-023

Responsive.

RF-024

Performance.

---

## RNF

60 FPS.

Sin CLS.

Sin parpadeos.

Sin animaciones repetidas.

---

## Entregables

PhotoSection

PhotoManager

Animaciones

Responsive

Documentación