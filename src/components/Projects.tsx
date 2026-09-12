import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { cyberGroups, getFeaturedProjects, getMoreProjects } from '../data/projects'

export function Projects() {
  const featured = getFeaturedProjects()
  const more = getMoreProjects()

  return (
    <section id="projects" className="section projects" aria-labelledby="projects-heading">
      <div className="container">
        <div className="section-header">
          <p className="section-kicker">Selected work</p>
          <h2 id="projects-heading" className="section-title">
            Featured Projects
          </h2>
          <p className="section-lead">
            Mobile systems, cybersecurity labs, internship case studies and privacy research —
            with clear separation between completed work and planned features.
          </p>
        </div>

        <div className="projects__grid">
          {featured.map((project) => (
            <article key={project.id} className="project-card card">
              <div className="placeholder-media" aria-hidden="true">
                <div>
                  <strong>{project.title}</strong>
                  Screenshot / diagram placeholder
                </div>
              </div>
              <div className="project-card__body">
                <p className="project-card__context">{project.context}</p>
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__subtitle">{project.subtitle}</p>
                <p className="project-card__summary">{project.summary}</p>

                {(project.implementedFeatures || project.features) && (
                  <ul className="project-card__features">
                    {(project.implementedFeatures ?? project.features ?? [])
                      .slice(0, 4)
                      .map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                  </ul>
                )}

                <ul className="tag-list" aria-label={`${project.title} technologies`}>
                  {project.tags.slice(0, 6).map((tag) => (
                    <li key={tag} className="tag">
                      {tag}
                    </li>
                  ))}
                </ul>

                {project.hasDetailPage ? (
                  <Link className="btn btn-secondary project-card__cta" to={`/projects/${project.slug}`}>
                    View Project
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                ) : null}
              </div>
            </article>
          ))}
        </div>

        <div className="projects__more">
          <h3 className="projects__subheading">More Projects</h3>
          <div className="projects__more-grid">
            {more.map((project) => (
              <article key={project.id} className="project-mini card">
                <h4>{project.title}</h4>
                <p>{project.summary}</p>
                <ul className="tag-list">
                  {project.tags.map((tag) => (
                    <li key={tag} className="tag">
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <div id="cybersecurity-engineering" className="cyber-groups">
          <div className="section-header">
            <p className="section-kicker">Labs &amp; coursework</p>
            <h3 className="section-title" style={{ fontSize: '1.5rem' }}>
              Cybersecurity Engineering
            </h3>
            <p className="section-lead">
              Topic-grouped laboratory and coursework experience. All security testing was
              performed in isolated, authorised educational environments.
            </p>
          </div>

          <div className="cyber-groups__grid">
            {cyberGroups.map((group) => (
              <article key={group.title} className="cyber-card card">
                <h4>{group.title}</h4>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
