import { skillGroups } from '../data/skills'

export function Skills() {
  return (
    <section id="skills" className="section skills" aria-labelledby="skills-heading">
      <div className="container">
        <div className="section-header">
          <p className="section-kicker">Capabilities</p>
          <h2 id="skills-heading" className="section-title">
            Skills
          </h2>
          <p className="section-lead">
            Grouped by practice area — no percentage bars, just what I work with.
          </p>
        </div>

        <div className="skills__grid">
          {skillGroups.map((group) => (
            <article key={group.title} className="skills__card card">
              <h3>{group.title}</h3>
              <ul className="tag-list">
                {group.skills.map((skill) => (
                  <li key={skill} className="tag">
                    {skill}
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
