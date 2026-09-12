import { ProjectLayout } from '../../components/ProjectLayout'
import { getProjectBySlug } from '../../data/projects'

export function SecurityLab() {
  const project = getProjectBySlug('security-lab')!

  return (
    <ProjectLayout
      title={project.title}
      subtitle={project.subtitle}
      context={project.context}
      tags={project.tags}
    >
      <aside className="callout" role="note">
        <strong>Security note:</strong> All security testing was performed in isolated,
        authorised educational lab environments. This page focuses on skills, methodology and
        concepts — not exploitation procedures.
      </aside>

      <section>
        <h2>Overview</h2>
        <p>
          An isolated virtual network environment used to practise network security, web
          application security and Linux security concepts within university coursework.
        </p>
      </section>

      <section>
        <h2>Architecture</h2>
        <div className="arch-diagram" aria-label="Lab architecture diagram">
          <div className="arch-diagram__node">Kali Linux</div>
          <div className="arch-diagram__arrow" aria-hidden="true">
            ↓
          </div>
          <div className="arch-diagram__node">OPNsense Firewall</div>
          <div className="arch-diagram__arrow" aria-hidden="true">
            ↓
          </div>
          <div className="arch-diagram__node">Ubuntu Target</div>
          <div className="arch-diagram__arrow" aria-hidden="true">
            ↓
          </div>
          <div className="arch-diagram__node">NGINX / DVWA / MariaDB</div>
        </div>
        <div className="placeholder-media" style={{ marginTop: '1rem' }}>
          <div>
            <strong>Network architecture diagram</strong>
            Replace with a cleaned diagram — no real IPs, credentials or secrets
          </div>
        </div>
      </section>

      <section>
        <h2>Areas Explored</h2>
        <ul className="two-col-list">
          <li>Network segmentation</li>
          <li>Firewall configuration</li>
          <li>NAT / port forwarding</li>
          <li>VPN configuration</li>
          <li>SSH / SCP</li>
          <li>Network reconnaissance</li>
          <li>Packet analysis</li>
          <li>Web vulnerability testing</li>
          <li>Authentication testing</li>
          <li>SQL injection concepts</li>
          <li>Web shell / reverse shell concepts</li>
          <li>Linux privilege escalation</li>
          <li>SUID permissions</li>
          <li>AppArmor</li>
          <li>Database permissions</li>
        </ul>
      </section>

      <section>
        <h2>Related Technologies</h2>
        <ul className="tag-list">
          {[
            'OpenVPN',
            'Nmap',
            'Wireshark',
            'Burp Suite',
            'SQLMap',
            'Hydra',
            'Gobuster',
            'Dirb',
            'NAXSI',
          ].map((tag) => (
            <li key={tag} className="tag">
              {tag}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>What I Learned</h2>
        <ul>
          <li>How segmented networks and firewall policy shape attack surface</li>
          <li>Structured methodology over ad-hoc tooling</li>
          <li>Defensive implications of common web and Linux weaknesses</li>
        </ul>
      </section>
    </ProjectLayout>
  )
}
