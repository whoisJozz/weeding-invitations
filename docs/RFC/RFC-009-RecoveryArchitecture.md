# RFC-009
# Recovery Architecture & Development Policy

Estado:
APPROVED

Autor:
Creative Director + Front-End Architecture

---

## Objetivo

A partir de este RFC queda congelada la arquitectura base del proyecto.

Las siguientes modificaciones tienen como objetivo recuperar estabilidad antes de continuar desarrollando los siguientes actos de la invitación.

Este documento tiene prioridad sobre cualquier Sprint anterior.

---

# Filosofía del proyecto

Esta aplicación NO debe sentirse como una página web.

Debe sentirse como una experiencia cinematográfica.

Cada pantalla cuenta parte de una historia.

NO buscamos efectos llamativos.

Buscamos elegancia, ritmo, respiración visual y lujo editorial.

Siempre priorizar:

- simplicidad
- fluidez
- rendimiento
- estabilidad

sobre agregar nuevas animaciones.

---

# Arquitectura

Queda prohibido modificar sin autorización:

- estructura HTML
- IntroManager
- HeroManager
- AudioManager
- rutas existentes
- nombres de assets
- estructura de carpetas

Si alguna mejora requiere modificar estos componentes deberá justificarse previamente.

---

# Flujo aprobado

Intro

↓

Leyenda sobre el video

↓

Tap

↓

Fade de la leyenda

↓

Video comienza

↓

Video termina

↓

Audio ambiental

↓

Hero

↓

Scroll

↓

Historia

Este flujo NO debe alterarse.

---

# Política de Assets

No cambiar nombres.

No mover carpetas.

No cambiar extensiones.

Siempre validar que cada asset exista físicamente.

Antes de asumir un error de CSS validar:

- nombre
- extensión
- mayúsculas
- minúsculas
- ruta

---

# Política de Animaciones

Las animaciones deben sentirse naturales.

No teatrales.

No lentas.

El usuario nunca debe esperar.

La aplicación debe sentirse viva.

---

# Objetivo del Recovery

No agregar funcionalidades.

Recuperar estabilidad.

Una vez aprobado QA continuará Story Act II.