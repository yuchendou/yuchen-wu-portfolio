import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

type Props = {
  title: string
  subtitle?: string
  context?: string
  tags?: string[]
  children: ReactNode
}

export function ProjectLayout({ title, subtitle, context, tags, children }: Props) {
  return (
    <main id="main" className="project-page fade-in">
      <div className="container project-page__inner">
        <Link to="/#projects" className="project-page__back">
          <ArrowLeft size={16} aria-hidden="true" />
          Back to Projects
        </Link>

        <header className="project-page__header">
          {context ? <p className="section-kicker">{context}</p> : null}
          <h1 className="project-page__title">{title}</h1>
          {subtitle ? <p className="project-page__subtitle">{subtitle}</p> : null}
          {tags && tags.length > 0 ? (
            <ul className="tag-list" aria-label="Technologies">
              {tags.map((tag) => (
                <li key={tag} className="tag">
                  {tag}
                </li>
              ))}
            </ul>
          ) : null}
        </header>

        <div className="project-page__body">{children}</div>
      </div>
    </main>
  )
}
