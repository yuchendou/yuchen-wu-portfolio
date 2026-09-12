import { ProjectLayout } from '../../components/ProjectLayout'
import { getProjectBySlug } from '../../data/projects'

export function YulonSecurity() {
  const project = getProjectBySlug('yulon-security')!

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
          Information security internship work covering vulnerability management, security
          awareness analysis, infrastructure hardening and an internal technology initiative for
          seminar check-in.
        </p>
      </section>

      <section>
        <h2>Vulnerability Management</h2>
        <ul>
          <li>Participated in vulnerability assessment activities covering 24 hosts.</li>
          <li>Analysed security findings and assisted with remediation activities.</li>
          <li>
            Worked on remediation of the SWEET32 vulnerability on Windows Server environments.
          </li>
          <li>
            Hardened TLS configuration by disabling legacy TLS 1.0/1.1 and weak cipher suites
            including 3DES and RC4.
          </li>
          <li>Used IIS Crypto during Windows Server hardening.</li>
          <li>Validated RDP connectivity using TLS 1.2 after remediation.</li>
          <li>Worked with Nessus vulnerability findings, including Plugin 42873.</li>
        </ul>
      </section>

      <section>
        <h2>Security Awareness</h2>
        <ul>
          <li>
            Participated in an organisation-wide social engineering simulation involving 86
            participants.
          </li>
          <li>Analysed employee interaction metrics across simulated phishing scenarios.</li>
          <li>38 participants did not pass the exercise.</li>
          <li>
            A news-sharing scenario recorded a 10.47% open rate, compared with 25.88% in the
            previous year&apos;s comparable exercise.
          </li>
          <li>
            An invoice/prize scenario recorded a 13.95% open rate, 6.98% click rate and 3.49%
            trigger rate.
          </li>
          <li>Supported approximately one hour of information security awareness training.</li>
        </ul>
      </section>

      <section>
        <h2>Internal AI Seminar Check-in Tool</h2>
        <p>
          Built and supported a QR-based attendee check-in and seating workflow for an internal AI
          seminar.
        </p>
        <ul>
          <li>Approximately 40 attendees.</li>
          <li>Previous manual attendee lookup could take around one minute per person.</li>
          <li>
            QR-based workflow enabled approximately 3–4 attendees to process check-in
            concurrently.
          </li>
          <li>Helped streamline attendee lookup and seating coordination.</li>
        </ul>
      </section>

      <section>
        <h2>Visuals</h2>
        <div className="placeholder-media">
          <div>
            <strong>Internship visuals placeholder</strong>
            Add presentation slides or anonymised project graphics if permitted
          </div>
        </div>
      </section>
    </ProjectLayout>
  )
}
