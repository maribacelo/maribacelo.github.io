import type { ExperienceRow, NavLink, Perspective, ProjectCard, SeoProps } from '../types/site';

export const SITE_NAME = 'Mariana Bacelo';
export const SITE_ROLE = 'Senior Service Designer';
export const SITE_EMAIL = 'marianabacelo00@gmail.com';
export const SITE_LINKEDIN = 'https://www.linkedin.com/in/mariana-bacelo/';
export const DEFAULT_OG_IMAGE = 'assets/mariana-at-work.webp';

export const defaultSeo: SeoProps = {
  title: `${SITE_ROLE} · ${SITE_NAME}`,
  description:
    'Mariana Bacelo, service strategy, research and digital transformation. Explore selected work across complex systems.',
  ogType: 'website',
  robots: 'noindex,nofollow',
  noIndex: true,
};

export function mainNav(current: 'work' | 'about' | 'experience' | 'contact' | 'none' = 'none'): NavLink[] {
  return [
    { href: '/#work', label: 'Work', current: current === 'work' },
    { href: '/about/', label: 'About', current: current === 'about' },
    { href: '/assets/mariana-bacelo-cv.pdf', label: 'CV', external: true },
    { href: '/#track-record', label: 'Experience', current: current === 'experience' },
    { href: '/#contact', label: 'Let’s talk', highlight: true, current: current === 'contact' },
  ];
}

export const projects: ProjectCard[] = [
  {
    number: '01',
    slug: 'innovation-services',
    client: 'Braskem · Innovation ecosystem',
    title: 'From fragmented programmes to shared ways of working.',
    label: 'SERVICE DESIGN · OPERATING MODELS',
    image: 'innovation-processes.webp',
    imageAlt: 'Project material: From fragmented programmes to shared ways of working.',
    visualClass: 'innovation-services',
    ariaLabel: 'Explore Connecting five innovation programmes into a clearer service.',
  },
  {
    number: '02',
    slug: 'customer-service-strategy',
    client: 'Braskem · Netherlands headquarters',
    title: 'Connecting customer needs to account and service priorities.',
    label: 'CUSTOMER EXPERIENCE · SERVICE STRATEGY',
    image: 'cx-journey.webp',
    imageAlt: 'Project material: Connecting customer needs to account and service priorities.',
    visualClass: 'customer-service-strategy',
    ariaLabel: 'Explore Making customer differences useful for service decisions.',
  },
  {
    number: '03',
    slug: 'global-logistics',
    client: 'Braskem · Global logistics',
    title: 'One global product. A continuous loop from measurement to design.',
    label: 'PRODUCT STRATEGY · RESEARCH · UX',
    image: 'logistics-platform.webp',
    imageAlt: 'Project material: One global product. A continuous loop from measurement to design.',
    visualClass: 'global-logistics',
    ariaLabel: 'Explore Closing the loop between product evidence and better logistics workflows.',
  },
  {
    number: '04',
    slug: 'logistics-business-alignment',
    client: 'Braskem · New logistics business',
    title: 'Aligning leadership, teams and customer relationships at the start.',
    label: 'BUSINESS DESIGN · STAKEHOLDER ALIGNMENT',
    image: 'expansion-swot.webp',
    imageAlt: 'Project material: Aligning leadership, teams and customer relationships at the start.',
    visualClass: 'logistics-business-alignment',
    ariaLabel: 'Explore Creating shared direction for a new logistics business.',
  },
];

export const additionalProject = {
  slug: 'go-to-market',
  eyebrow: 'ALSO EXPLORE / 05',
  title: 'Where should a consultancy focus its commercial effort?',
  description: 'Customer profiling, buyer research and go-to-market priorities.',
};

export const perspectives: Perspective[] = [
  {
    id: 'perspective-0',
    tabLabel: '01 / STRATEGY',
    tabTitle: 'Where should\nwe focus?',
    label: 'CONNECTING BUSINESS AND CUSTOMER NEEDS',
    title: 'Turn a broad ambition into a clearer direction.',
    copy: 'Research, customer understanding and stakeholder alignment help make priorities explicit, and bring uncertainty into the conversation before it becomes a delivery problem.',
    linkHref: '/work/customer-service-strategy/',
    linkText: 'Explore customer service strategy ↗',
  },
  {
    id: 'perspective-1',
    tabLabel: '02 / SERVICE',
    tabTitle: 'How should\nit work?',
    label: 'CONNECTING EXPERIENCE AND OPERATIONS',
    title: 'Make the system behind the service visible.',
    copy: 'Journeys show the experience. Blueprints, process maps and responsibility models connect it to the people, dependencies and routines needed to deliver it.',
    linkHref: '/work/innovation-services/',
    linkText: 'Explore connected innovation services ↗',
  },
  {
    id: 'perspective-2',
    tabLabel: '03 / EVIDENCE',
    tabTitle: 'Is it delivering\nvalue?',
    label: 'CONNECTING INSIGHT AND DELIVERY',
    title: 'Use evidence to shape the next decision.',
    copy: 'Behavioural data, qualitative research and validation work together. In the logistics product, regular measurement fed into feature exploration, testing and design handoff.',
    linkHref: '/work/global-logistics/',
    linkText: 'Explore the logistics product ↗',
  },
];

export const primaryExperience: ExperienceRow[] = [
  {
    period: '2026 to present',
    organisation: 'AstraZeneca',
    role: 'Independent contractor · UK pharmaceutical R&D',
    focus: 'Connect fragmented workflows into an end-to-end service.',
    contribution:
      'Discovery across legacy processes, demand intake, prioritisation, allocation and operational oversight.',
  },
  {
    period: '2025 to present',
    organisation: 'Instituto de Informática, I.P.',
    role: 'Independent contractor · Portuguese Social Security',
    focus: 'Connect citizen and employee evidence to digital service priorities.',
    contribution:
      '10+ research activities, qualitative synthesis, surveys, behavioural analytics and experience measurement.',
  },
  {
    period: '2023 to 2025',
    organisation: 'Ilegra',
    role: 'CX Strategist · Industrial & financial consulting',
    focus: 'Connect customer needs, business priorities and delivery.',
    contribution:
      'Discovery, service and product strategy, cross-functional research and experience measurement. Braskem cases featured above.',
  },
  {
    period: '2021 to 2023',
    organisation: 'Ilegra',
    role: 'Senior Product Designer · Financial software',
    focus: 'Create consistent experiences across complex financial workflows.',
    contribution:
      'Design-system standards and UX writing across four modules, supported by discovery and user validation.',
  },
];

export const earlierExperience: ExperienceRow[] = [
  {
    period: '2021',
    organisation: 'Reserva',
    role: 'Service Designer · Retail & e-commerce',
    focus: 'Connect cross-channel journeys during retail-to-digital transformation.',
    contribution:
      'Customer research, analytics, journey mapping and contributions to CMS migration and mobile app development.',
  },
  {
    period: '2020 to 2021',
    organisation: 'Act Digital',
    role: 'Product Designer · Financial services',
    focus: 'Improve digital insurance and investor experiences.',
    contribution:
      'User research and digital experience design for Prudential Brazil and the BTG Pactual investor portal.',
  },
  {
    period: '2019 to 2020',
    organisation: 'iFriend',
    role: 'UX/UI Designer & Researcher · Travel',
    focus: 'Connect product behaviour with experience improvements.',
    contribution: 'Application design system and behavioural analysis with product and marketing teams.',
  },
  {
    period: '2018 to 2019',
    organisation: 'ByteMe',
    role: 'UX/UI Designer · Venture builder',
    focus: 'Translate emerging business ideas into digital products.',
    contribution:
      'Discovery and interface design alongside business stakeholders and developers through product launch.',
  },
];
