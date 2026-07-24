# Sprint 02.2
## Nombre
Cinematic Polish

---

# Objetivo

Elevar la calidad cinematográfica del Intro y Hero antes de comenzar los nuevos Actos de la invitación.

---

# Tareas

## Intro

- El video debe comenzar inmediatamente después del toque.
- El texto "Toca para abrir" debe comenzar su fade mientras el video ya inició.
- Eliminar el delay artificial de 250 ms.
- Revisar la estrategia actual de currentTime = 0.1.
- Buscar una solución más estable usando eventos como canplay o canplaythrough.

---

## Hero

- Revisar alineación óptica.
- Ajustar márgenes para móviles pequeños.
- Revisar carga inicial de las tipografías.

---

## Sparkles

Modificar completamente el sistema.

Actualmente:

- Frecuencia fija
- Tamaño fijo
- Opacidad fija

Nuevo comportamiento:

- Tamaño aleatorio
- Opacidad aleatoria
- Duración aleatoria
- Posición aleatoria
- Tiempo de aparición aleatorio

El efecto debe parecer polvo suspendido.

Nunca confeti.

---

## Animaciones

Eliminar cualquier movimiento que se perciba robótico.

Las curvas deberán ser suaves.

Usar easing cinematográficos.

---

## Performance

Reducir repaints innecesarios.

Evitar timers cuando requestAnimationFrame sea suficiente.

---

# QA Checklist

☐ Intro responde inmediatamente

☐ El texto desaparece mientras el video ya comenzó

☐ Sin pantallas negras

☐ Sin pantallas blancas

☐ Sin tirones

☐ Hero perfectamente alineado

☐ Sparkles orgánicos

☐ Tipografías cargando correctamente

☐ Compatible Desktop

☐ Compatible Android

☐ Compatible iOS

---

# Definition of Done

La experiencia inicial debe sentirse fluida, elegante y cinematográfica en todos los dispositivos principales.