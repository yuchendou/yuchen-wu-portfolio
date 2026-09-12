export type ExperienceItem = {
  id: string
  organisation: string
  role: string
  dates: string
  location?: string
  description: string
  highlights?: string[]
  tags: string[]
  sections?: {
    title: string
    items: string[]
  }[]
  caseStudy?: {
    title: string
    description: string
    impact: string[]
  }
}

export const experience: ExperienceItem[] = [
  {
    id: 'formosa',
    organisation: 'Formosa Plastics Group',
    role: 'Systems Control & IT Operations Engineer',
    dates: 'July 2022 – February 2026',
    description:
      'Supported enterprise IT operations and information security activities in a large corporate environment.',
    highlights: [
      'Supported enterprise IT operations and system control activities.',
      'Participated in ISO/IEC 27001 implementation and information security management activities.',
      'Conducted and supported information security risk assessments.',
      'Supported access control and permission management processes.',
      'Participated in security and internal audit activities.',
      'Assisted with enterprise system administration and operational support.',
      'Worked across technical operations and security governance requirements.',
    ],
    tags: [
      'IT Operations',
      'ISO/IEC 27001',
      'Risk Assessment',
      'Access Control',
      'Security Governance',
      'System Administration',
      'Audit',
    ],
  },
  {
    id: 'yulon',
    organisation: 'Yulon Group',
    role: 'Information Security Intern',
    dates: '2026',
    description:
      'Worked with an information security team on vulnerability management, security awareness exercises, infrastructure hardening and internal technology initiatives.',
    tags: [
      'Vulnerability Management',
      'Security Awareness',
      'Security Operations',
      'Nessus',
      'Windows Server',
      'TLS',
    ],
    sections: [
      {
        title: 'Vulnerability Management',
        items: [
          'Participated in vulnerability assessment activities covering 24 hosts.',
          'Analysed security findings and assisted with remediation activities.',
          'Worked on remediation of the SWEET32 vulnerability on Windows Server environments.',
          'Hardened TLS configuration by disabling legacy TLS 1.0/1.1 and weak cipher suites including 3DES and RC4.',
          'Used IIS Crypto during Windows Server hardening.',
          'Validated RDP connectivity using TLS 1.2 after remediation.',
          'Worked with Nessus vulnerability findings, including Plugin 42873.',
        ],
      },
      {
        title: 'Security Awareness / Social Engineering',
        items: [
          'Participated in an organisation-wide social engineering simulation involving 86 participants.',
          'Analysed employee interaction metrics across simulated phishing scenarios.',
          '38 participants did not pass the exercise.',
          'A news-sharing scenario recorded a 10.47% open rate, compared with 25.88% in the previous year\'s comparable exercise.',
          'An invoice/prize scenario recorded a 13.95% open rate, 6.98% click rate and 3.49% trigger rate.',
          'Supported approximately one hour of information security awareness training.',
        ],
      },
    ],
    caseStudy: {
      title: 'Internal AI Seminar Check-in Tool',
      description:
        'Built and supported a QR-based attendee check-in and seating workflow for an internal AI seminar.',
      impact: [
        'Approximately 40 attendees.',
        'Previous manual attendee lookup could take around one minute per person.',
        'QR-based workflow enabled approximately 3–4 attendees to process check-in concurrently.',
        'Helped streamline attendee lookup and seating coordination.',
      ],
    },
  },
]

export const timeline = [
  {
    year: '2022',
    title: 'Formosa Plastics Group',
    detail: 'Systems Control & IT Operations Engineer',
  },
  {
    year: '2026',
    title: 'University of Sydney',
    detail: 'Master of Computer Science',
  },
  {
    year: '2026',
    title: 'Yulon Group',
    detail: 'Information Security Internship',
  },
  {
    year: 'Current',
    title: 'Focus areas',
    detail: 'Cybersecurity · Software · Privacy · AI',
  },
] as const
