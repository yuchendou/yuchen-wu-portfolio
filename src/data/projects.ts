export type ProjectStatus = 'featured' | 'secondary' | 'research' | 'grouped'

export type Project = {
  id: string
  slug: string
  title: string
  subtitle: string
  context: string
  summary: string
  tags: string[]
  features?: string[]
  implementedFeatures?: string[]
  plannedFeatures?: string[]
  order: number
  category: 'featured' | 'more' | 'cyber' | 'research'
  hasDetailPage: boolean
}

export const projects: Project[] = [
  {
    id: 'farmlink',
    slug: 'farmlink',
    title: 'FarmLink',
    subtitle:
      'Reducing food waste by connecting surplus food producers with charities and communities.',
    context: 'University of Sydney — COMP5216 Mobile Computing Team Project',
    summary:
      'A mobile platform for farmers and producers to list surplus food before it becomes waste, helping charities and communities discover, claim or purchase available produce.',
    tags: [
      'React Native',
      'TypeScript',
      'Expo',
      'Expo Router',
      'Firebase',
      'Firebase Authentication',
      'Git',
      'GitHub',
    ],
    implementedFeatures: [
      'Role-oriented mobile UX for producers and community users',
      'Product listing flows with photo-assisted capture',
      'Browse / search and claim workflow concepts',
      'Firebase Authentication integration',
      'Private GitHub Enterprise workflow with PRs and code review',
    ],
    plannedFeatures: [
      'Urgency / Expiry Score',
      'QR-based collection confirmation',
      'In-app chat',
      'Ratings and notifications',
      'Administrative monitoring and dispute management',
      'Payment architecture / Stripe test integration',
      'Duplicate listing detection and blacklist controls',
    ],
    order: 1,
    category: 'featured',
    hasDetailPage: true,
  },
  {
    id: 'security-lab',
    slug: 'security-lab',
    title: 'Virtual Cybersecurity Lab',
    subtitle:
      'Isolated network environment for practising network security, web application security and Linux security.',
    context: 'University cybersecurity coursework and security laboratory exercises',
    summary:
      'A segmented virtual lab built around Kali Linux, OPNsense, and Ubuntu targets for authorised security practice across networking, web apps and Linux hardening.',
    tags: [
      'Kali Linux',
      'Ubuntu',
      'OPNsense',
      'VirtualBox',
      'DVWA',
      'NGINX',
      'NAXSI',
      'MariaDB',
      'OpenVPN',
      'Nmap',
      'Wireshark',
      'Burp Suite',
    ],
    features: [
      'Network segmentation and firewall configuration',
      'NAT, port forwarding and VPN setup',
      'Reconnaissance, packet analysis and web testing methodology',
      'Linux privilege escalation and access-control concepts',
    ],
    order: 2,
    category: 'featured',
    hasDetailPage: true,
  },
  {
    id: 'yulon-security',
    slug: 'yulon-security',
    title: 'Yulon Information Security Case Study',
    subtitle:
      'Vulnerability management, security awareness metrics and an internal AI seminar check-in workflow.',
    context: 'Yulon Group — Information Security Internship (2026)',
    summary:
      'Hands-on internship work spanning host vulnerability remediation, organisation-wide awareness exercises, and a QR-based seminar check-in tool.',
    tags: [
      'Vulnerability Management',
      'Nessus',
      'TLS Hardening',
      'Security Awareness',
      'Windows Server',
    ],
    features: [
      'Assessment coverage across 24 hosts',
      'TLS / SWEET32 remediation on Windows Server',
      'Social engineering simulation analysis (86 participants)',
      'QR check-in workflow for ~40 seminar attendees',
    ],
    order: 3,
    category: 'featured',
    hasDetailPage: true,
  },
  {
    id: 'accessible-camera',
    slug: 'accessible-camera',
    title: 'Accessible Camera App',
    subtitle:
      'A React Native camera application designed with accessibility and screen-reader usability in mind.',
    context: 'University of Sydney — COMP5216 Mobile Computing',
    summary:
      'Focuses on VoiceOver-friendly controls, dynamic accessibility labels, and a focus-aware camera lifecycle.',
    tags: [
      'React Native',
      'TypeScript',
      'Expo SDK 54',
      'Expo Router',
      'iOS',
      'VoiceOver',
      'Accessibility',
    ],
    features: [
      'Camera on/off controls with dynamic button states',
      'Front/rear camera switching',
      'Dynamic accessibility labels and accessibilityRole',
      'VoiceOver testing',
      'Focus-aware camera lifecycle using useIsFocused()',
      'Non-interactive preview excluded from unnecessary screen-reader navigation',
    ],
    order: 4,
    category: 'featured',
    hasDetailPage: true,
  },
  {
    id: 'ai-privacy',
    slug: 'ai-privacy',
    title: 'Privacy Risk Assessment Framework for AI Systems in Universities',
    subtitle:
      'Investigating how universities can assess privacy risks introduced by AI systems.',
    context: 'University of Sydney — privacy/security research coursework',
    summary:
      'Ongoing academic research exploring how traditional privacy risk assessment approaches may need to adapt to AI-specific threats such as prompt injection, memorisation and PII leakage.',
    tags: [
      'AI Privacy',
      'Risk Assessment',
      'Differential Privacy',
      'GDPR',
      'PPML',
    ],
    features: [
      'AI-specific privacy threat modelling',
      'Controls including DP, anonymisation and aggregation',
      'Privacy–utility trade-offs and linkage/inference risks',
      'Governance considerations (GDPR, consent)',
    ],
    order: 5,
    category: 'research',
    hasDetailPage: true,
  },
  {
    id: 'captioned-image',
    slug: 'captioned-image',
    title: 'Captioned Image App',
    subtitle:
      'Small React Native accessibility exercise with dynamic image loading and accessible captions.',
    context: 'University of Sydney — COMP5216 Mobile Computing',
    summary:
      'Coursework exercise focusing on accessible image labels and captions in a React Native / Expo app.',
    tags: ['React Native', 'TypeScript', 'Expo', 'Expo Router', 'Accessibility'],
    features: [
      'Dynamic image loading',
      'Image captions',
      'Accessible image labels',
    ],
    order: 6,
    category: 'more',
    hasDetailPage: false,
  },
]

export const cyberGroups = [
  {
    title: 'Cryptography',
    items: [
      'MD5 password cracking exercises',
      'Vigenère cipher cryptanalysis',
      'Diffie–Hellman key exchange',
      'RSA certificate analysis',
      'HMAC-SHA256',
      'AES-GCM',
    ],
  },
  {
    title: 'Network Security',
    items: [
      'Wireshark',
      'TLS traffic analysis',
      'OCSP analysis',
      'Packet inspection',
      'Secure communication concepts',
    ],
  },
  {
    title: 'Linux / System Security',
    items: [
      'Linux ACL',
      'Access control',
      'Bell–LaPadula confidentiality model',
      'Biba integrity model',
      '32-bit stack buffer overflow laboratory exercises',
    ],
  },
  {
    title: 'Android Security',
    items: [
      'Android reverse engineering',
      'JADX',
      'APKTool',
      'ADB',
      'Analysis of insecure random token generation',
      'Comparison of Random() and SecureRandom',
      'Mobile application security analysis',
    ],
  },
] as const

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return projects
    .filter((p) => p.category === 'featured' || p.category === 'research')
    .sort((a, b) => a.order - b.order)
}

export function getMoreProjects(): Project[] {
  return projects.filter((p) => p.category === 'more').sort((a, b) => a.order - b.order)
}
