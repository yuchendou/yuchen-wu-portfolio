import { ExternalLink } from 'lucide-react'
import {
  EMAIL,
  GITHUB_URL,
  hasEmail,
  hasGithub,
  hasLinkedIn,
  LINKEDIN_URL,
  mailtoHref,
  RESUME_ENABLED,
  RESUME_URL,
} from '../config/site'

type SocialLinkProps = {
  className?: string
  showLabels?: boolean
}

export function SocialLinks({ className = '', showLabels = false }: SocialLinkProps) {
  return (
    <ul className={`social-links ${className}`.trim()} aria-label="Social links">
      <li>
        {hasGithub() ? (
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
            GitHub
            {showLabels ? <ExternalLink size={14} aria-hidden="true" /> : null}
          </a>
        ) : (
          <span className="social-links__disabled" title="Add GITHUB_URL in src/config/site.ts">
            GitHub
          </span>
        )}
      </li>
      <li>
        {hasLinkedIn() ? (
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
            LinkedIn
            {showLabels ? <ExternalLink size={14} aria-hidden="true" /> : null}
          </a>
        ) : (
          <span className="social-links__disabled" title="Add LINKEDIN_URL in src/config/site.ts">
            LinkedIn
          </span>
        )}
      </li>
      <li>
        {hasEmail() ? (
          <a href={mailtoHref()}>
            Email
            {showLabels ? <ExternalLink size={14} aria-hidden="true" /> : null}
          </a>
        ) : (
          <span className="social-links__disabled" title="Add EMAIL in src/config/site.ts">
            {EMAIL || 'Email'}
          </span>
        )}
      </li>
    </ul>
  )
}

type ResumeButtonProps = {
  className?: string
  variant?: 'primary' | 'secondary' | 'ghost'
  label?: string
}

export function ResumeButton({
  className = '',
  variant = 'secondary',
  label = 'View Resume',
}: ResumeButtonProps) {
  const classes = `btn btn-${variant} ${className}`.trim()

  if (!RESUME_ENABLED) {
    return (
      <span
        className={classes}
        role="link"
        aria-disabled="true"
        title="Place resume.pdf in /public and set RESUME_ENABLED = true"
      >
        {label}
      </span>
    )
  }

  return (
    <a className={classes} href={RESUME_URL} target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  )
}
