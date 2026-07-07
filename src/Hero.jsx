import { useEffect, useRef, useState } from 'react'
import { assets } from './data.js'

const lerp = (a, b, t) => a + (b - a) * t
const clamp01 = (v) => Math.min(1, Math.max(0, v))

// Скролл-раскадровка первого экрана (Frame 20 → 21 → 22 → CENTER в Figma):
// фото 786×1048 с отступами раскрывается на всю колонку, логотип и заголовок
// уезжают вверх, в конце проявляется навигация.
export default function Hero() {
  const wrapRef = useRef(null)
  const [p, setP] = useState(0)

  useEffect(() => {
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const el = wrapRef.current
        if (!el) return
        const total = el.offsetHeight - window.innerHeight
        setP(clamp01(-el.getBoundingClientRect().top / total))
      })
    }
    onScroll()
    addEventListener('scroll', onScroll, { passive: true })
    addEventListener('resize', onScroll)
    return () => {
      removeEventListener('scroll', onScroll)
      removeEventListener('resize', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  const zoom = clamp01(p / 0.85) // фото раскрывается чуть раньше конца
  const easeZoom = 1 - Math.pow(1 - zoom, 2)

  const photo = {
    top: lerp(16, 0, easeZoom),
    bottom: lerp(16, 0, easeZoom),
    inset: lerp(15.885, 0, easeZoom), // (1152-786)/2/1152
    radius: lerp(16, 0, easeZoom),
  }
  const logoY = lerp(6.7, -17, easeZoom) // vh: 72px → за верхний край (темп по Frame 21/22)
  const titleTop = lerp(24.1, 3, easeZoom) // vh: y260 → y32 по раскадровке
  const titleFade = 1 - clamp01((p - 0.82) / 0.13)
  const navFade = clamp01((p - 0.85) / 0.15)
  const introSize = lerp(26, 42, easeZoom)

  return (
    <div className="hero" ref={wrapRef}>
      <div className="hero__stage">
        <div
          className="hero__photo"
          style={{
            top: photo.top,
            bottom: photo.bottom,
            left: `${photo.inset}%`,
            right: `${photo.inset}%`,
            borderRadius: photo.radius,
          }}
        >
          <img src={assets.cover} alt="Charmer — дизайн медиа" />
        </div>

        <div className="hero__logo" style={{ top: `${logoY}vh` }}>
          <img src={assets.logo} alt="charmer" />
        </div>

        <h1
          className="hero__title t-display"
          style={{
            top: `${titleTop}vh`,
            transform: 'translateX(-50%)',
            opacity: titleFade,
          }}
        >
          Дизайн медиа, которые читают
        </h1>

        <p
          className="hero__intro t-display"
          style={{
            left: `calc(${photo.inset}% + ${lerp(32, 48, easeZoom)}px)`,
            bottom: lerp(48, 64, easeZoom),
            fontSize: introSize,
            lineHeight: `${introSize + 2}px`,
            width: `${lerp(42, 61, easeZoom)}%`,
          }}
        >
          Помогаем крупным компаниям <em>создавать</em> корпоративные{' '}
          <em>медиа</em> и <em>контентные платформы</em> – от стратегии
          и визуального языка до запуска, развития и поддержки продукта.
        </p>

        <nav className="hero__nav t-small" style={{ opacity: navFade, pointerEvents: navFade > 0.5 ? 'auto' : 'none' }}>
          <a href="#expertise">Наш опыт</a>
          <a href="#method">Методология</a>
          <a href="#clients">Клиенты</a>
        </nav>
      </div>
    </div>
  )
}
