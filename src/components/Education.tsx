import { education } from '../data/education'

export function Education() {
  return (
    <section id="education" className="section education" aria-labelledby="education-heading">
      <div className="container">
        <div className="section-header">
          <p className="section-kicker">Academic</p>
          <h2 id="education-heading" className="section-title">
            Education
          </h2>
        </div>

        <article className="education__card card">
          <header className="education__header">
            <div>
              <h3>{education.institution}</h3>
              <p className="education__degree">{education.degree}</p>
            </div>
            <div className="education__meta">
              <p>{education.dates}</p>
              <p>{education.location}</p>
            </div>
          </header>

          <h4 className="education__coursework-title">Relevant coursework</h4>
          <ul className="tag-list" aria-label="Relevant coursework">
            {education.coursework.map((item) => (
              <li key={item} className="tag">
                {item}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}
