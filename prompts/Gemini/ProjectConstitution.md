# RFC-001 — Arquitectura Base del Proyecto

**Proyecto:** A&Y Experience  
**Versión:** 1.0.0  
**Estado:** Aprobado con modificaciones menores  
**Fecha:** 23 de julio de 2026

---

# Contexto

Primero que nada, gracias por la propuesta de arquitectura.

La estructura propuesta cumple correctamente con los principios de:

- Modularidad
- Separación de responsabilidades
- Escalabilidad
- Mantenibilidad

La propuesta es sólida y servirá como base del proyecto.

El objetivo de este documento no es reemplazar la arquitectura propuesta, sino ajustarla al alcance real del proyecto.

Debemos recordar que el objetivo es terminar una experiencia premium antes del **31 de julio**, por lo que buscamos el mejor equilibrio entre calidad, organización y velocidad de desarrollo.

---

# Objetivos del proyecto

Este proyecto NO busca construir una aplicación empresarial.

Buscamos construir una experiencia cinematográfica para una invitación digital de boda.

La prioridad será siempre:

1. Experiencia del usuario.
2. Elegancia visual.
3. Rendimiento.
4. Modularidad.
5. Facilidad de mantenimiento.

---

# Arquitectura aprobada

Se aprueba la estructura general propuesta con los siguientes ajustes.

---

# 1. Punto de entrada

En lugar de:

```
app.js
```

Se utilizará:

```
main.js
```

## Motivo

Es una convención ampliamente utilizada en proyectos Front-End modernos.

Permite identificar inmediatamente el archivo responsable de inicializar toda la aplicación.

---

# 2. Assets

En lugar de una carpeta genérica:

```
media/
```

Se utilizará:

```
assets/

audio/
video/
images/
fonts/
textures/
```

## Motivo

La separación facilita el mantenimiento y evita mezclar recursos de distinta naturaleza.

---

# 3. Configuración global

Se agrega una nueva carpeta.

```
js/config/
```

Contendrá:

```
gsap.config.js

motion.config.js

theme.config.js
```

## Motivo

Centralizar configuraciones evita valores mágicos distribuidos por todo el proyecto.

---

# 4. Managers

Se agrega:

```
js/managers/
```

Ejemplos:

```
IntroManager.js

AnimationManager.js

ScrollManager.js

CountdownManager.js

ThemeManager.js
```

## Motivo

No toda la lógica corresponde a un Controller.

Algunos módulos administrarán estado, eventos y coordinación entre componentes.

---

# 5. Animaciones globales

Dentro de:

```
css/base/
```

se agrega:

```
animations.css
```

## Motivo

Evitar duplicar keyframes o reglas compartidas.

---

# 6. Componentes CSS

Los componentes deberán representar únicamente secciones reales del proyecto.

Ejemplo:

```
intro.css

hero.css

countdown.css

gifts.css

godparents.css

dresscode.css

rsvp.css
```

---

# 7. Documentación

Se agregan dos carpetas nuevas.

```
docs/rfc/
```

y

```
docs/sprints/
```

## Motivo

Toda decisión importante deberá documentarse.

Cada Sprint tendrá su propio registro.

---

# 8. Prompts

La carpeta prompts se organizará de la siguiente manera.

```
prompts/

Gemini/

Templates/

Archive/
```

## Motivo

Versionar prompts permitirá mejorar continuamente la interacción sin perder versiones anteriores.

---

# Arquitectura resultante

```
a-y-experience/

assets/
    audio/
    fonts/
    images/
    textures/
    video/

css/

    base/
        reset.css
        variables.css
        typography.css
        animations.css

    layout/
        grid.css

    components/
        intro.css
        hero.css
        countdown.css
        gifts.css
        godparents.css
        dresscode.css
        rsvp.css

    main.css

js/

    main.js

    config/
        gsap.config.js
        motion.config.js
        theme.config.js

    managers/
        IntroManager.js
        AnimationManager.js
        ScrollManager.js
        CountdownManager.js
        ThemeManager.js

    controllers/

    utils/

docs/

    architecture/

    rfc/

    sprints/

    Decisions.md

prompts/

    Gemini/

    Templates/

    Archive/

README.md

index.html

vercel.json
```

---

# Metodología oficial del proyecto

A partir de este momento se trabajará mediante Sprints.

Cada Sprint tendrá obligatoriamente:

## 1. Objetivo del Sprint

Qué se desarrollará y cuál es la experiencia buscada.

---

## 2. Carpetas involucradas

Qué carpetas pueden modificarse.

Qué carpetas NO deben tocarse.

---

## 3. Archivos

Archivos nuevos.

Archivos modificados.

Archivos protegidos.

---

## 4. Dependencias

Qué módulos deben existir previamente.

---

## 5. Prompt del Sprint

Prompt específico para desarrollo.

Nunca prompts gigantes.

---

## 6. RFC

Si durante el Sprint se detecta una decisión que pueda afectar:

- arquitectura
- UX
- rendimiento
- mantenibilidad

NO deberá implementarse inmediatamente.

Primero deberá generarse un RFC.

---

# Formato oficial RFC

```
RFC-00X

Estado

Autor

Problema

Opciones consideradas

Recomendación

Impacto

Riesgos

Pendiente de aprobación
```

---

## 7. Definition of Done

Cada Sprint tendrá criterios de aceptación.

Ejemplo.

- Funciona correctamente.
- Sin errores en consola.
- Responsive.
- Código comentado.
- Sin duplicación.

---

## 8. QA Checklist

Antes del Merge.

Se revisará:

Arquitectura.

UX.

Animaciones.

Responsive.

Performance.

Accesibilidad.

Código.

---

## 9. Sprint Review

Al terminar el Sprint.

Se calificará.

Arquitectura.

Código.

UX.

Performance.

Accesibilidad.

---

## 10. Sprint Retrospective

Responder:

¿Qué salió bien?

¿Qué puede mejorar?

¿Qué aprendimos?

---

## 11. Conventional Commit

Cada Sprint terminará con un commit siguiendo Conventional Commits.

Ejemplo.

```
feat(intro): implement cinematic landing experience
```

---

# Principios del proyecto

Todos los participantes del proyecto deberán respetar los siguientes principios.

1. La experiencia del usuario tiene prioridad sobre la cantidad de animaciones.

2. Mobile First.

3. No agregar dependencias innecesarias.

4. Toda decisión importante deberá documentarse.

5. Nunca duplicar código.

6. Cada módulo tendrá una única responsabilidad.

7. El rendimiento es un requisito.

8. Si existe una mejora importante, deberá proponerse mediante un RFC antes de implementarse.

9. Ningún Sprint deberá desviarse de su objetivo principal.

10. Todo cambio deberá estar justificado.

---

# Observación

La arquitectura inicial propuesta se considera aprobada.

Las modificaciones descritas en este documento buscan adaptar la solución al alcance del proyecto, mejorar la mantenibilidad y establecer una metodología de trabajo uniforme para todas las fases de desarrollo.

A partir de este punto, cualquier modificación significativa de la arquitectura deberá realizarse mediante un RFC y ser aprobada antes de su implementación.

## Nota para el equipo

Este proyecto se desarrollará de forma colaborativa.

- **Gemini** asumirá el rol de **Lead Front-End Engineer**, proponiendo e implementando soluciones técnicas.
- **ChatGPT** actuará como **Director Creativo, Arquitecto de Software, UX Lead y QA**, revisando la arquitectura, la experiencia de usuario, la consistencia visual y la calidad técnica antes de integrar cada Sprint.
- **Product Owner (Cliente/Desarrollo)** será responsable de validar el cumplimiento de los objetivos, aprobar RFC, realizar los commits y gestionar el repositorio.

El objetivo no es que una IA sustituya a la otra, sino aprovechar las fortalezas de cada una para construir una experiencia de alta calidad, documentada y mantenible.