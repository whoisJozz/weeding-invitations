# HOTFIX-001

## Nombre

Editorial Countdown Responsive Fix

Estado

BLOCKER

Prioridad

CRÍTICA

---

## Contexto

El Countdown ya funciona correctamente a nivel lógico.

El cálculo de días, horas, minutos y segundos es correcto.

Sin embargo, la composición visual presenta problemas de distribución y responsive.

Este Hotfix deberá resolver únicamente la capa visual.

No modificar la lógica del contador.

---

## Problemas detectados

### Desktop

El contador sobrepasa el ancho del marco editorial.

Los bloques ocupan más espacio del permitido.

La composición pierde equilibrio visual.

---

### iPhone

Los números y separadores no mantienen una distribución uniforme.

Existe overflow horizontal en determinadas resoluciones.

El contenido deja de sentirse centrado.

---

### Responsive

La sección no conserva el mismo comportamiento editorial observado en Hero y Evento.

---

## Objetivo

Conservar exactamente la funcionalidad actual.

Modificar únicamente:

layout

spacing

responsive

tipografía

alineación

---

## Restricciones

NO modificar

CountdownManager.js

No modificar:

cálculo

timer

zona horaria

fecha del evento

animaciones GSAP

Toda la corrección deberá realizarse desde countdown.css.

---

## Diseño esperado

La composición debe sentirse similar a un reloj editorial.

Mucho aire.

Separación homogénea.

Todos los bloques perfectamente alineados.

Nunca deberán tocar los bordes.

---

## Desktop

Los cuatro bloques deberán permanecer centrados.

El ancho máximo deberá limitarse.

No ocupar toda la pantalla.

---

## Tablet

Reducir proporcionalmente.

Mantener una sola fila.

---

## Android

Mantener una sola fila mientras exista espacio suficiente.

Si el ancho disponible no es suficiente:

Permitir dos filas perfectamente equilibradas.

Nunca producir overflow.

---

## iPhone

Priorizar legibilidad.

Reducir:

tipografía

gap

padding

antes de provocar overflow.

Como último recurso:

permitir dos filas simétricas.

Nunca cortar contenido.

Nunca ocultar números.

---

## Recomendaciones técnicas

Utilizar:

display:flex

o

display:grid

según resulte más estable.

Preferir:

gap

flex-wrap

max-width

clamp()

min()

max()

Evitar:

width fijos

margin negativos

transform para corregir posiciones

---

## Performance

No introducir JavaScript adicional.

Toda la solución deberá resolverse mediante CSS responsive.

---

## QA

Comprobar:

Desktop 1920

Desktop 1366

iPad

Android

iPhone Safari

Landscape

Portrait

---

## Criterios de aceptación

✓ Sin overflow.

✓ Sin CLS.

✓ Sin barras horizontales.

✓ Tipografía consistente.

✓ Separación uniforme.

✓ Responsive correcto.

✓ Mantiene la identidad editorial.

✓ No modifica la lógica del contador.

---

## Nota del Director Creativo

Este Hotfix NO busca rediseñar el Countdown.

Busca que el diseño existente alcance el mismo nivel de calidad editorial que el Hero y el Evento.

La lógica ya está aprobada.

La prioridad absoluta es la estabilidad visual.