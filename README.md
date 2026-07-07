# Charmer — Дизайн медиа, которые читают

Лендинг направления «медиа» студии Charmer. Вёрстка по макету Figma
(BASE-Copy, страница WIP2) со скролл-раскадровкой первого экрана:
обложка раскрывается из врезки на всю колонку (референс —
mouthwashmagazine.com), логотип и заголовок уезжают вверх, появляется
навигация. Колонки «Хронология проектов» и «Мнения» зафиксированы по краям.

## Стек

- **Vite + React** — без лишних зависимостей
- Скролл-анимация — свой хук на `requestAnimationFrame` + sticky-сцена
  (см. [src/Hero.jsx](src/Hero.jsx))
- Все тексты и контент — в [src/data.js](src/data.js)

## Запуск

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # прод-сборка в dist/
```

## Шрифты

Пока стоят Google-аналоги (переменные в `:root` в
[src/styles.css](src/styles.css)):

| В макете | Здесь |
| --- | --- |
| William Subhead LC | Source Serif 4 |
| ABC Monument Grotesk | Inter |
| Even Mono | PT Mono |

Чтобы подключить оригиналы — добавьте `@font-face` и поменяйте
`--font-serif` / `--font-sans` / `--font-mono`.
