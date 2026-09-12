export function About() {
  return (
    <section id="about" className="section about" aria-labelledby="about-heading">
      <div className="container">
        <div className="section-header">
          <p className="section-kicker">Background</p>
          <h2 id="about-heading" className="section-title">
            About Me
          </h2>
        </div>

        <div className="about__grid">
          <div className="about__copy">
            <p>
              I am a Master of Computer Science student at the University of Sydney with more
              than three years of professional experience in enterprise IT operations and
              information security.
            </p>
            <p>
              Before beginning my postgraduate studies, I worked as a Systems Control &amp; IT
              Operations Engineer at Formosa Plastics Group, where I gained experience in
              enterprise systems, ISO/IEC 27001, security risk assessment, access control and
              audit activities.
            </p>
            <p>
              My current work and studies focus on cybersecurity, software engineering, mobile
              development, privacy and AI security. I enjoy understanding systems from both
              defensive and offensive perspectives — from designing secure applications to
              analysing vulnerabilities and security controls.
            </p>
            <p>
              I am particularly interested in cybersecurity engineering, backend systems, Trust
              &amp; Safety engineering, privacy engineering and practical applications of AI.
            </p>
          </div>

          <aside className="about__aside card" aria-label="Positioning">
            <h3>Career narrative</h3>
            <ol className="about__story">
              <li>
                <strong>Enterprise IT</strong>
                <span>Systems, access control, operations</span>
              </li>
              <li>
                <strong>Security governance</strong>
                <span>ISO/IEC 27001, risk, audit</span>
              </li>
              <li>
                <strong>Postgraduate depth</strong>
                <span>Cybersecurity, software, privacy, AI</span>
              </li>
            </ol>
          </aside>
        </div>
      </div>
    </section>
  )
}
