import { SITE } from '../config/site'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <p className="footer__name">{SITE.name}</p>
          <p className="footer__tagline">{SITE.tagline}</p>
        </div>
        <div className="footer__meta">
          <p>Built with React + TypeScript</p>
          <p>© 2026 {SITE.name}</p>
        </div>
      </div>
    </footer>
  )
}
