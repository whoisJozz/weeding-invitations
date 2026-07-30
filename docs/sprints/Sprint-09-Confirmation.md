# Sprint 09

## Acto VIII

# Confirmación de Asistencia

---

## Objetivo

Diseñar la escena editorial de Confirmación de Asistencia manteniendo el mismo lenguaje visual del resto de la invitación.

La sección debe sentirse como el cierre natural de la experiencia, invitando al usuario a confirmar su presencia de una forma elegante y sencilla.

No debe sentirse como un formulario.

Debe sentirse como una invitación.

---

## Narrativa

Título

Nos encantará verte

Texto

Tu presencia será el regalo más valioso.

Ayúdanos confirmando tu asistencia para preparar este día de la mejor manera.

Botón

Confirmar asistencia

Debajo del botón

Agradecemos confirmar antes del 01 de noviembre de 2026.

---

## Flujo

Usuario llega a la sección

↓

Lee el mensaje

↓

Hace clic en el botón

↓

Se abre Google Forms en una nueva pestaña

↓

La invitación permanece abierta.

---

## Enlace

El botón utilizará el enlace oficial proporcionado por el cliente.

Debe abrir utilizando:

target="_blank"

rel="noopener noreferrer"

No incrustar el formulario dentro de la invitación.

---

## Diseño

Mantener exactamente el mismo lenguaje editorial.

Mucho espacio en blanco.

Nada de tarjetas.

Nada de cajas.

Nada de fondos adicionales.

La composición debe respirar.

---

## Tipografía

Título

Symphony

Color dorado

Texto

Glacial

Color taupe

Botón

Montserrat

Color azul marino

Borde dorado

Hover editorial

---

## Animación

Entrada mediante GSAP.

Secuencia:

Título

↓

Texto

↓

Botón

↓

Nota inferior

Todas las animaciones utilizarán:

Fade

Blur

Ligero desplazamiento vertical

Sin rebotes.

Sin escalados.

Sin rotaciones.

---

## Responsive

Desktop

Tablet

Android

iPhone

Todo deberá permanecer perfectamente centrado.

El botón nunca deberá tocar los bordes.

---

## Arquitectura

Crear únicamente

css/components/confirmation.css

js/managers/ConfirmationManager.js

Registrar únicamente desde main.js.

No modificar otros managers.

---

## Recursos

Este Sprint no requiere:

SVG

PNG

Fuentes

Videos

Audios

Si Gemini considera necesario agregar recursos deberá solicitar autorización antes de implementarlos.

---

## Restricciones

No modificar:

IntroManager

HeroManager

StoryManager

CountdownManager

EventManager

DressCodeManager

GiftManager

Únicamente implementar la nueva escena.

---

## Criterios de aceptación

✓ Abre correctamente Google Forms

✓ Nueva pestaña

✓ Sin CLS

✓ Sin errores Lighthouse

✓ Compatible con Desktop

✓ Compatible con Android

✓ Compatible con iOS

✓ Mantiene el lenguaje editorial del proyecto

✓ No rompe escenas anteriores