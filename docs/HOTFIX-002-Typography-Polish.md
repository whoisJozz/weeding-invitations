# HOTFIX-002

## Nombre

Editorial Typography & Composition Polish

Estado

BLOCKER MENOR

Prioridad

ALTA

---

## Contexto

El proyecto ha alcanzado el estado RC1.

No se agregarán nuevas funcionalidades.

Este Hotfix está dedicado exclusivamente al pulido visual.

No modificar arquitectura.

No modificar JavaScript.

No modificar GSAP.

---

# Objetivo

Eliminar pequeños defectos tipográficos y de composición detectados durante las pruebas reales en:

• iPhone Safari
• Desktop
• Vercel Production

---

# Problemas detectados

## 01

Los títulos editoriales presentan cortes en los caracteres superiores.

Ejemplos:

Andrew

Nos encantará verte

Con Gratitud

No es un problema de fuente.

Es un problema de composición CSS.

---

## 02

Revisar:

line-height

overflow

padding

margin

transform

height

display

para evitar clipping de las tipografías caligráficas.

No utilizar soluciones mediante escalado.

Debe resolverse la causa raíz.

---

## 03

Revisar todos los títulos escritos con Symphony.

Debe existir suficiente espacio superior e inferior para respetar el ascendente y descendente de la tipografía.

---

## 04

Los botones accordion muestran el símbolo "+" demasiado cercano a las flores editoriales.

Reposicionar el indicador.

Nunca deberá competir visualmente con la composición floral.

---

## 05

Revisar nuevamente:

safe-area iPhone

viewport Safari

renderizado de fuentes

overflow hidden

---

# Restricciones

NO modificar:

estructura HTML

HeroManager

StoryManager

CountdownManager

EventManager

AccordionManager

No cambiar animaciones.

No cambiar tipografías.

No cambiar colores.

---

# QA

Desktop Chrome

Safari iPhone

Android Chrome

Edge

Vercel Production

Localhost

Todos deberán renderizar exactamente igual.

---

# Criterios de aceptación

✓ Ninguna letra cortada.

✓ Ningún título clippeado.

✓ Accordion correctamente alineado.

✓ Flores sin interferencias.

✓ Sin overflow.

✓ Sin CLS.

✓ Sin modificaciones funcionales.

---

# Nota del Director Creativo

Estamos en fase RC1.

Este documento busca únicamente eliminar los últimos defectos visuales antes del Release Final.

No deberán introducirse nuevas funcionalidades.