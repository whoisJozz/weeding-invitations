# Sprint 10

## Acto IX

Con Gratitud

---

## Narrativa

Título

Con Gratitud

Texto

"Nuestra historia no habría sido posible sin todas las personas que hoy caminan a nuestro lado.

Gracias por formar parte de este capítulo tan importante de nuestras vidas."

---

## Diseño

Muchísimo espacio en blanco.

Editorial.

Elegante.

Minimalista.

---

## Sistema

Se implementará un Accordion Editorial.

No un acordeón tradicional.

Cada categoría será una línea elegante.

Ejemplo

────────────────────────

Padres

+

────────────────────────

Al abrir

el símbolo gira

↓

aparece el contenido

↓

fade

↓

blur

↓

auto height

↓

cierre suave

---

## Categorías

1

Padres

Contenido

Padres del novio

Salvador Zárate Barajas

Ángeles Imelda Pérez Rodríguez

Padres de la novia

Ricardo Lugo Zúñiga

Claudia Yesenia Gómez Robles

---

2

Padrinos y Madrinas

Toda la lista.

Sin modificar nombres.

---

3

Damas y Caballeros de Honor

Primero

Damo

Dama

Después

Todos los demás.

---

4

Pajes

Toda la lista.

---

## Animaciones

GSAP

height:auto

opacity

blur

duration

0.6

ease

power2.out

---

## Iconografía

No usar imágenes.

No usar SVG.

El +

se construirá mediante CSS.

Al abrir

+

↓

×

mediante rotación.

---

## Responsive

Desktop

Tablet

Android

iPhone

Debe verse exactamente igual.

---

## Arquitectura

Crear únicamente

thanks.css

ThanksManager.js

Registrar desde main.js.

---

## Restricciones

No tocar

Hero

Story

Countdown

DressCode

Gift

Confirmation

No reutilizar código antiguo de padrinos.

La información se migrará completamente.

---

## Criterios de aceptación

✓ Responsive.

✓ Accesible.

✓ Sin CLS.

✓ Sin grids.

✓ Sin listas gigantes.

✓ Sin Scroll infinito innecesario.

✓ Compatible Android.

✓ Compatible iOS.

✓ Compatible Desktop.