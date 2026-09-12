import { ProjectLayout } from '../../components/ProjectLayout'
import { getProjectBySlug } from '../../data/projects'

export function AccessibleCamera() {
  const project = getProjectBySlug('accessible-camera')!

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
          A React Native camera application designed with accessibility and screen-reader
          usability in mind, combining mobile development practice with VoiceOver testing.
        </p>
      </section>

      <section>
        <h2>Key Features</h2>
        <ul>
          {(project.features ?? []).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Approach</h2>
        <p>
          Controls expose clear roles and dynamic labels so state changes remain understandable
          under VoiceOver. The camera preview is treated as non-interactive content where
          appropriate, reducing noisy screen-reader navigation. Camera lifecycle is tied to
          navigation focus via <code>useIsFocused()</code>.
        </p>
      </section>

      <section>
        <h2>Screenshot</h2>
        <div className="placeholder-media">
          <div>
            <strong>Accessible Camera App screenshot</strong>
            Add an iOS / VoiceOver-relevant capture here
          </div>
        </div>
      </section>

      <section>
        <h2>What I Learned</h2>
        <ul>
          <li>Accessibility labels and roles need to stay in sync with UI state</li>
          <li>Focus-aware lifecycle matters for camera and media resources</li>
          <li>Screen-reader testing surfaces issues visual QA can miss</li>
        </ul>
      </section>
    </ProjectLayout>
  )
}
