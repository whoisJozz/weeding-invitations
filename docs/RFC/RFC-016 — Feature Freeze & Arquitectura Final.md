# RFC-016 — Feature Freeze & Arquitectura Final

Estado del proyecto:
Release Candidate (RC) Preparation

---

## Objetivo

A partir de este RFC el proyecto entra oficialmente en etapa de congelación de funcionalidades.

No deberán agregarse nuevas escenas ni nuevas funcionalidades sin autorización.

La prioridad será:

1. UX
2. UI
3. Rendimiento
4. Responsive
5. Accesibilidad
6. QA

---

## Funcionalidades restantes

Únicamente quedan autorizadas:

- Acto VII — Dress Code
- Acto VII.5 — Mesa de Regalos
- Acto VIII — Confirmación
- Acto IX — Con Gratitud (Accordion Editorial)

Después de estos actos comienza QA Editorial.

---

## Arquitectura

Antes de crear un Manager nuevo deberá comprobar:

¿Existe uno que controle esa escena?

SI
→ reutilizarlo.

NO
→ crear uno nuevo.

No modificar:

IntroManager

HeroManager

StoryManager

CountdownManager

EventManager

sin autorización.

---

## Recursos

Antes de utilizar cualquier recurso deberá comprobar:

✓ nombre

✓ extensión

✓ ruta

✓ existencia

Si no puede comprobarlo deberá detener la implementación y solicitar confirmación.

No inventar rutas.

No inventar archivos.

---

## Restricciones

No mover carpetas.

No renombrar assets.

No modificar arquitectura.

No agregar dependencias.

No instalar librerías.

Mantener compatibilidad con:

Desktop

Android

iOS

---

## Objetivo Final

Conservar la identidad editorial construida desde el Sprint 01.