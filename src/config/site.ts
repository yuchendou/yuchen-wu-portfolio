/**
 * Personal contact & social configuration.
 * Replace placeholder values before publishing.
 *
 * TODO: Set GITHUB_URL, LINKEDIN_URL, and EMAIL to your real values.
 * TODO: Place your resume at public/resume.pdf and set RESUME_ENABLED to true.
 */

/** TODO: Replace with your GitHub profile URL */
export const GITHUB_URL = ''

/** TODO: Replace with your LinkedIn profile URL */
export const LINKEDIN_URL = ''

/** TODO: Replace with your email address */
export const EMAIL = ''

/** Path to resume in /public. Keep in sync with the file you upload. */
export const RESUME_URL = '/resume.pdf'

/**
 * Set to true once public/resume.pdf exists.
 * When false, Resume buttons remain visible but are disabled.
 */
export const RESUME_ENABLED = false

export const SITE = {
  name: 'Yuchen Wu',
  title: 'Yuchen Wu | Cybersecurity & Software Engineering',
  description:
    'Yuchen Wu is a Master of Computer Science student at the University of Sydney with professional experience in enterprise IT operations, cybersecurity, software development and information security.',
  location: 'Sydney, Australia',
  tagline: 'Cybersecurity · Software Engineering · AI',
} as const

export function hasGithub(): boolean {
  return GITHUB_URL.trim().length > 0
}

export function hasLinkedIn(): boolean {
  return LINKEDIN_URL.trim().length > 0
}

export function hasEmail(): boolean {
  return EMAIL.trim().length > 0
}

export function mailtoHref(): string {
  return hasEmail() ? `mailto:${EMAIL}` : '#'
}
