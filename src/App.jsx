import { useState } from 'react'
import Hero from './Hero.jsx'
import { projects, opinion, principles, workScope, formats, clients, assets } from './data.js'

function LeftRail({ onPreview }) {
  return (
    <aside className="rail rail--left">
      <div className="rail__head">
        <span className="t-label">Хронология проектов</span>
        <span className="t-small">2013–2026</span>
      </div>
      <div className="rail__list">
        {projects.map((p) => (
          <div
            className={`feature${p.preview ? ' feature--interactive' : ''}`}
            key={p.title}
            onMouseEnter={p.preview ? () => onPreview(p) : undefined}
            onMouseLeave={p.preview ? () => onPreview(null) : undefined}
          >
            <img className="feature__icon" src={p.icon} alt={p.title} />
            <div className="feature__text t-small">
              <span className="feature__year">{p.year}</span>
              <span>{p.title}</span>
              <span className="feature__desc">{p.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </aside>
  )
}

function RightRail() {
  return (
    <aside className="rail rail--right">
      <div className="rail__head">
        <span className="t-label">Мнения</span>
        <span className="t-small">1/{opinion.total}</span>
      </div>
      <div className="opinion">
        <img className="opinion__photo" src={opinion.photo} alt={opinion.name} />
        <div className="opinion__person t-small">
          <div>{opinion.name}</div>
          <div className="opinion__role">{opinion.role}</div>
        </div>
        <p className="opinion__quote t-sub">{opinion.quote}</p>
      </div>
      <a className="btn-contact t-small" href="mailto:hello@charmer.design">
        Написать нам
      </a>
    </aside>
  )
}

function Expertise() {
  return (
    <section className="section" id="expertise">
      <p className="t-label section__label">Наша экспертиза</p>
      <div className="expertise__row">
        <p className="t-display expertise__lead">
          За годы работы с медиа мы пришли к <em>нескольким принципам</em>,
          которые помогают создавать проекты, способные жить долго
          и оставаться полезными аудитории.
        </p>
        <div className="expertise__list">
          {principles.map((pr) => (
            <div key={pr.n}>
              <div className="principle__num">{pr.n}</div>
              <h3 className="t-sub principle__title">{pr.title}</h3>
              <p className="t-body principle__text">{pr.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Method() {
  return (
    <section className="section" id="method">
      <p className="t-label section__label">От идеи до запуска и поддержки</p>
      <p className="t-display method__lead">
        Каждый проект начинается по-разному: иногда есть только{' '}
        <em>идея будущего медиа</em>, иногда – <em>существующая платформа</em>,
        которой нужен редизайн или новый этап развития. Мы умеем работать{' '}
        <em>на разных стадиях проекта</em> – от формирования концепции
        и визуального языка до запуска, поддержки и дальнейшего развития продукта.
      </p>

      <p className="t-label t-label--black block-title">Что входит в работу</p>
      <div className="work-grid">
        {workScope.map((w) => (
          <div className="work-card" key={w.title}>
            <h3 className="t-sub">{w.title}</h3>
            <p className="t-body">{w.text}</p>
            <img className="work-card__img" src={w.img} alt="" />
          </div>
        ))}
      </div>

      <p className="t-label t-label--black block-title">Форматы работы</p>
      <div className="formats-row">
        {formats.map((f) => (
          <div className="formats-card" key={f.n}>
            <div className="principle__num">{f.n}</div>
            <h3 className="t-sub principle__title">{f.title}</h3>
            <p className="t-small feature__desc formats-card__text">{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Clients() {
  return (
    <section className="section" id="clients">
      <p className="t-label section__label">От идеи до запуска и поддержки</p>
      <p className="t-display clients__lead">
        Медиа внутри корпорации, образовательная платформа, культурная
        институция или цифровой продукт – <em>задачи могут отличаться</em>,
        но принципы работы с контентом и аудиторией остаются похожими.
      </p>
      <div className="clients-grid">
        {clients.map((c, i) => (
          <div className="clients-grid__cell" key={i}>
            <img src={c.img} alt={c.name} style={{ width: c.w }} />
          </div>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="section contact" id="contact">
      <p className="t-label section__label">Работа с нами</p>
      <p className="t-display contact__lead">
        Расскажите, что вы планируете запустить или развивать –
        корпоративное медиа, контентную платформу или отдельный проект.
        Поможем определить формат работы и следующие шаги.
      </p>
      <a className="btn-contact t-small" href="mailto:hello@charmer.design">
        Написать нам
      </a>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__card">
        <img className="footer__photo" src={assets.footerPhoto} alt="" />
        <p className="footer__note t-small">
          Charmer – дизайн-студия на стыке стратегии, брендинга и цифрового
          дизайна. Медиа – одно из направлений нашей практики, через которое
          хорошо виден наш подход к работе со сложным контентом, системами
          и продуктами. Если ваша задача выходит за рамки медиа, мы будем
          рады показать другие проекты студии
        </p>
        <div className="footer__logo">
          <img src={assets.logoFooter} alt="charmer" />
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  const [preview, setPreview] = useState(null)

  return (
    <div className={preview ? 'is-previewing' : ''}>
      <LeftRail onPreview={setPreview} />
      <main className="center">
        <Hero />
        <div className="content">
          <Expertise />
          <Method />
          <Clients />
          <Contact />
          <Footer />
        </div>
      </main>
      <RightRail />

      <div className="preview-overlay" aria-hidden />
      <div className="preview-stage" aria-hidden>
        {projects
          .filter((p) => p.preview)
          .map((p) => (
            <img
              key={p.title}
              className={`preview-stage__img${preview === p ? ' is-active' : ''}`}
              src={p.preview}
              alt=""
            />
          ))}
      </div>
    </div>
  )
}
