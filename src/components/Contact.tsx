import { Mail } from 'lucide-react'
import { hasEmail, mailtoHref } from '../config/site'
import { SocialLinks } from './SocialLinks'

export function Contact() {
  return (
    <section id="contact" className="section contact" aria-labelledby="contact-heading">
      <div className="container contact__inner">
        <div className="section-header">
          <p className="section-kicker">Next step</p>
          <h2 id="contact-heading" className="section-title">
            Let&apos;s Connect
          </h2>
          <p className="section-lead">
            I&apos;m currently exploring internship and graduate opportunities in cybersecurity,
            software engineering, backend engineering, Trust &amp; Safety and AI-related roles.
          </p>
        </div>

        <div className="contact__panel card">
          <SocialLinks className="contact__social" showLabels />
          {hasEmail() ? (
            <a className="btn btn-primary" href={mailtoHref()}>
              <Mail size={16} aria-hidden="true" />
              Email me
            </a>
          ) : (
            <p className="contact__hint">
              Add your <code>EMAIL</code>, <code>GITHUB_URL</code> and <code>LINKEDIN_URL</code> in{' '}
              <code>src/config/site.ts</code> before publishing.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
