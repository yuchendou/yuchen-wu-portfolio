import { ProjectLayout } from '../../components/ProjectLayout'
import { getProjectBySlug } from '../../data/projects'

export function FarmLink() {
  const project = getProjectBySlug('farmlink')!

  return (
    <ProjectLayout
      title={project.title}
      subtitle={project.subtitle}
      context={project.context}
      tags={project.tags}
    >
      <section>
        <h2>Overview</h2>
        <p>
          FarmLink is a mobile platform designed to allow farmers and producers to list surplus
          food before it becomes waste. Charities, volunteers and individuals can discover, claim
          or purchase available produce and coordinate collection.
        </p>
        <p>
          <strong>SDGs:</strong> SDG 2 — Zero Hunger · SDG 12 — Responsible Consumption and
          Production
        </p>
      </section>

      <section>
        <h2>Problem</h2>
        <p>
          Farmers and food producers may have edible surplus produce that cannot be sold due to
          appearance, excess inventory, approaching expiry dates or logistics delays. At the same
          time, charities and community organisations need affordable and accessible food
          supplies.
        </p>
      </section>

      <section>
        <h2>Solution / Approach</h2>
        <p>
          Build a role-based React Native application with Firebase authentication and a clear
          listing-to-claim workflow, while keeping product scope honest about what is implemented
          versus planned.
        </p>
      </section>

      <section>
        <h2>Implemented / In Progress</h2>
        <ul>
          {(project.implementedFeatures ?? []).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Proposed / Planned Features</h2>
        <p>
          The following capabilities were designed or discussed as part of the product vision and
          should not be assumed to be fully implemented:
        </p>
        <ul>
          {(project.plannedFeatures ?? []).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Engineering Workflow</h2>
        <ul>
          <li>Private GitHub Enterprise repository</li>
          <li>Feature branches and pull requests</li>
          <li>Required code review and branch protection</li>
          <li>Linear history</li>
          <li>Git LFS</li>
          <li>SSH authentication</li>
          <li>README and repository documentation</li>
        </ul>
      </section>

      <section>
        <h2>Screenshots / Architecture</h2>
        <div className="media-grid">
          <div className="placeholder-media">
            <div>
              <strong>FarmLink UI screenshots</strong>
              Add images under <code>src/assets/projects/screenshots/</code>
            </div>
          </div>
          <div className="placeholder-media">
            <div>
              <strong>Architecture / user flow</strong>
              Placeholder for listing → claim → collection flow
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2>What I Learned</h2>
        <ul>
          <li>Structuring multi-role mobile UX for producers and community users</li>
          <li>Working in a PR-driven team repository with review and branch protection</li>
          <li>Balancing product ambition with honest delivery status</li>
        </ul>
      </section>
    </ProjectLayout>
  )
}
