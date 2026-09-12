import { experience, timeline } from '../data/experience'

export function Experience() {
  return (
    <section id="experience" className="section experience" aria-labelledby="experience-heading">
      <div className="container">
        <div className="section-header">
          <p className="section-kicker">Work</p>
          <h2 id="experience-heading" className="section-title">
            Professional Experience
          </h2>
          <p className="section-lead">
            Enterprise IT operations and information security work across large corporate
            environments.
          </p>
        </div>

        <ol className="timeline" aria-label="Career progression">
          {timeline.map((item) => (
            <li key={`${item.year}-${item.title}`} className="timeline__item">
              <span className="timeline__year">{item.year}</span>
              <div className="timeline__content">
                <strong>{item.title}</strong>
                <span>{item.detail}</span>
              </div>
            </li>
          ))}
        </ol>

        <div className="experience__list">
          {experience.map((job) => (
            <article key={job.id} className="experience__card card" id={job.id}>
              <header className="experience__header">
                <div>
                  <h3 className="experience__org">{job.organisation}</h3>
                  <p className="experience__role">{job.role}</p>
                </div>
                <p className="experience__dates">
                  <time>{job.dates}</time>
                </p>
              </header>

              <p className="experience__desc">{job.description}</p>

              {job.highlights ? (
                <ul className="experience__bullets">
                  {job.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}

              {job.sections?.map((section) => (
                <div key={section.title} className="experience__section">
                  <h4>{section.title}</h4>
                  <ul className="experience__bullets">
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}

              {job.caseStudy ? (
                <div className="experience__case">
                  <h4>{job.caseStudy.title}</h4>
                  <p>{job.caseStudy.description}</p>
                  <ul className="experience__bullets">
                    {job.caseStudy.impact.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ) : null}

              <ul className="tag-list" aria-label={`${job.organisation} technologies`}>
                {job.tags.map((tag) => (
                  <li key={tag} className="tag">
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
