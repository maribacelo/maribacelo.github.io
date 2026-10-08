export interface SeoProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  robots?: string;
  noIndex?: boolean;
}

export interface NavLink {
  href: string;
  label: string;
  external?: boolean;
  current?: boolean;
  highlight?: boolean;
}

export interface Perspective {
  id: string;
  tabLabel: string;
  tabTitle: string;
  label: string;
  title: string;
  copy: string;
  linkHref: string;
  linkText: string;
}

export interface ProjectCard {
  number: string;
  slug: string;
  client: string;
  title: string;
  label: string;
  image: string;
  imageAlt: string;
  visualClass: string;
  ariaLabel: string;
}

export interface ExperienceRow {
  period: string;
  organisation: string;
  role: string;
  focus: string;
  contribution: string;
}

export interface DeckSlide {
  id: string;
  label: string;
  title: string;
  src: string;
  alt: string;
  caption: string;
  laptopFrame?: boolean;
}

export interface SlideDeckData {
  id: string;
  ariaLabel: string;
  eyebrow: string;
  title: string;
  description?: string;
  slides: DeckSlide[];
  hint?: string;
}

export interface CaseMeta {
  slug: string;
  title: string;
  pageTitle: string;
  description: string;
  eyebrow: string;
  intro: string;
  coverSrc: string;
  coverAlt: string;
  coverCaption?: string;
  nextSlug?: string;
  nextTitle?: string;
}
