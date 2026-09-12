export type SkillGroup = {
  title: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Programming',
    skills: ['Python', 'Java', 'SQL', 'TypeScript'],
  },
  {
    title: 'Software / Mobile Development',
    skills: [
      'React',
      'React Native',
      'Expo',
      'Expo Router',
      'Firebase',
      'Firebase Authentication',
    ],
  },
  {
    title: 'Cybersecurity',
    skills: [
      'Wireshark',
      'Burp Suite',
      'Nmap',
      'SQLMap',
      'Hydra',
      'Gobuster',
      'JADX',
      'APKTool',
      'ADB',
    ],
  },
  {
    title: 'Security Concepts',
    skills: [
      'Web Application Security',
      'Network Security',
      'Access Control',
      'Vulnerability Management',
      'Security Hardening',
      'Cryptography',
      'Mobile Security',
      'Privacy',
    ],
  },
  {
    title: 'Systems & Networking',
    skills: [
      'Linux',
      'Windows Server',
      'OPNsense',
      'NGINX',
      'MariaDB',
      'TCP/IP',
      'TLS',
      'VPN',
      'NAT',
      'Firewall',
      'SSH',
    ],
  },
  {
    title: 'Development Tools',
    skills: [
      'Git',
      'GitHub',
      'Git LFS',
      'VS Code',
      'Jupyter',
      'VirtualBox',
      'UTM',
    ],
  },
  {
    title: 'Governance / Privacy',
    skills: [
      'ISO/IEC 27001',
      'Security Risk Assessment',
      'Access Control',
      'Security Auditing',
      'GDPR',
      'Differential Privacy',
      'Anonymisation',
      'Privacy-Preserving Machine Learning',
    ],
  },
]
