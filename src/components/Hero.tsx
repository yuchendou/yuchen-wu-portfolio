import { ArrowDownRight, MapPin } from 'lucide-react'
import { SITE } from '../config/site'
import { ResumeButton, SocialLinks } from './SocialLinks'

export function Hero() {
  return (
    <section className="hero section" aria-labelledby="hero-heading">
      <div className="container hero__grid fade-in">
        <div className="hero__content">
          <p className="section-kicker">Portfolio</p>
          <h1 id="hero-heading" className="hero__title">
            {SITE.name}
          </h1>
          <p className="hero__tagline">{SITE.tagline}</p>
          <p className="hero__lead">
            Master of Computer Science student at the University of Sydney with 3+ years of
            enterprise IT operations and information security experience.
          </p>
          <p className="hero__lead hero__lead--secondary">
            Interested in building secure, reliable and privacy-aware systems across
            cybersecurity, backend engineering and AI.
          </p>

          <div className="hero__actions">
            <a className="btn btn-primary" href="#projects">
              View Projects
              <ArrowDownRight size={16} aria-hidden="true" />
            </a>
            <ResumeButton variant="secondary" />
          </div>

          <SocialLinks className="hero__social" />

          <p className="hero__meta">
            <MapPin size={14} aria-hidden="true" />
            <span>
              Based in {SITE.location}
              <span className="hero__meta-sep" aria-hidden="true">
                ·
              </span>
              Open to internship and graduate opportunities
            </span>
          </p>
        </div>

        <aside className="hero__panel" aria-label="Career snapshot">
          <div className="hero__panel-card">
            <h2 className="hero__panel-title">At a glance</h2>
            <dl className="hero__stats">
              <div>
                <dt>Experience</dt>
                <dd>3+ years enterprise IT &amp; security</dd>
              </div>
              <div>
                <dt>Education</dt>
                <dd>MCompSci · University of Sydney</dd>
              </div>
              <div>
                <dt>Focus</dt>
                <dd>Security · Backend · Trust &amp; Safety · AI</dd>
              </div>
            </dl>
            <p className="hero__panel-note">
              Enterprise IT foundations, expanded through postgraduate cybersecurity and
              software engineering.
            </p>
          </div>
        </aside>
      </div>
    </section>
  )
}
