import { ProjectLayout } from '../../components/ProjectLayout'
import { getProjectBySlug } from '../../data/projects'

export function AIPrivacy() {
  const project = getProjectBySlug('ai-privacy')!

  return (
    <ProjectLayout
      title={project.title}
      subtitle={project.subtitle}
      context={project.context}
      tags={project.tags}
    >
      <aside className="callout" role="note">
        <strong>Status:</strong> Ongoing academic research / coursework. This is not presented as
        a published paper.
      </aside>

      <section>
        <h2>Research Direction</h2>
        <p>
          Investigating how universities can assess privacy risks introduced by AI systems, and
          how traditional privacy risk assessment approaches may need to adapt to AI-specific
          threats.
        </p>
      </section>

      <section>
        <h2>Topics Explored</h2>
        <ul className="two-col-list">
          {[
            'AI privacy risk assessment',
            'Prompt injection',
            'Memory poisoning',
            'PII leakage and retention',
            'Model memorisation',
            'Sensitive information reproduction',
            'Private / offline model deployment',
            'AI-specific privacy controls',
            'Differential Privacy',
            'Anonymisation',
            'Aggregation',
            'Privacy–utility trade-offs',
            'Noise and entropy',
            'Linkage attacks',
            'Inference attacks',
            'GDPR and consent',
            'Privacy-Preserving Machine Learning',
            'Secure Multi-Party Computation',
            'Homomorphic Encryption',
          ].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Diagram</h2>
        <div className="placeholder-media">
          <div>
            <strong>AI privacy research diagram</strong>
            Placeholder for threat / control framework visualisation
          </div>
        </div>
      </section>
    </ProjectLayout>
  )
}
