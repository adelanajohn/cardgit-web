export const SITE_URL = 'https://cardgit.com'
export const SITE_NAME = 'CardGit'
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og/default.png`

export interface PageSEO {
  title: string
  description: string
  canonical?: string
  ogImage?: string
  noIndex?: boolean
}

export const pageSEO: Record<string, PageSEO> = {
  home: {
    title: 'CardGit — Digital Business Cards & Networking-First Events Platform',
    description:
      'CardGit is a UK-based digital identity platform. Create free digital business cards with QR sharing, lead capture, and analytics. Run smarter events with CardGit Events.',
    canonical: SITE_URL,
    ogImage: `${SITE_URL}/og/home.png`,
  },
  'digital-business-cards': {
    title: 'Digital Business Cards | CardGit — Free, Smart & Eco-Friendly',
    description:
      'Create your free digital business card with CardGit. Share your professional profile, products, and services with a single QR code. Used by professionals and businesses across the UK.',
    canonical: `${SITE_URL}/digital-business-cards`,
    ogImage: `${SITE_URL}/og/digital-business-cards.png`,
  },
  events: {
    title: 'CardGit Events — Networking-First Event Management Platform | UK Conferences & Summits',
    description:
      'CardGit Events helps organisers run smarter conferences, summits, and networking events. Registration, attendee engagement, smart matchmaking, live Q&A, polls, gamification, and analytics — all in one platform.',
    canonical: `${SITE_URL}/events`,
    ogImage: `${SITE_URL}/og/events.png`,
  },
  features: {
    title: 'Features | CardGit — Digital Cards & Events Platform',
    description:
      'Explore all CardGit features: digital business cards, QR sharing, lead capture, appointment booking, event management, smart matchmaking, gamification, and more.',
    canonical: `${SITE_URL}/features`,
  },
  pricing: {
    title: 'Pricing | CardGit — Free Digital Business Card & Event Management Plans',
    description:
      'CardGit offers flexible pricing for individuals, teams, and enterprises. Start free with digital business cards or choose a plan that fits your event management needs.',
    canonical: `${SITE_URL}/pricing`,
  },
  enterprise: {
    title: 'Enterprise & Teams | CardGit — Brand-Consistent Digital Identity at Scale',
    description:
      'Manage digital business cards for your entire team from a central dashboard. SSO, GDPR controls, onboarding workflows, and dedicated support for UK enterprises.',
    canonical: `${SITE_URL}/enterprise`,
  },
  'use-cases': {
    title: 'Use Cases | CardGit — For Every Industry & Role',
    description:
      'See how CardGit helps sales teams, recruiters, property consultants, event organisers, freelancers, healthcare professionals, and universities network smarter.',
    canonical: `${SITE_URL}/use-cases`,
  },
  compare: {
    title: 'Compare | CardGit vs Alternatives',
    description:
      'Compare CardGit digital business cards and CardGit Events against alternatives. Honest, feature-by-feature comparisons.',
    canonical: `${SITE_URL}/compare`,
  },
  about: {
    title: 'About CardGit | UK-Based Digital Identity Platform',
    description:
      'CardGit is a London-based digital identity and professional networking company. Learn about our mission to simplify professional identity and human connection.',
    canonical: `${SITE_URL}/about`,
  },
  blog: {
    title: 'Blog | CardGit — Networking, Events & Digital Identity Insights',
    description:
      'Tips, guides, and insights on professional networking, event management, digital business cards, and the future of professional identity.',
    canonical: `${SITE_URL}/blog`,
  },
  updates: {
    title: 'Product Updates | CardGit Changelog',
    description:
      "Stay up to date with CardGit's latest features, improvements, and platform updates.",
    canonical: `${SITE_URL}/updates`,
  },
  press: {
    title: 'Press & Media | CardGit',
    description:
      'CardGit press mentions, media resources, and company announcements. Contact press@cardgit.com for media enquiries.',
    canonical: `${SITE_URL}/press`,
  },
  faq: {
    title: 'FAQ | CardGit — Frequently Asked Questions',
    description:
      'Answers to common questions about CardGit digital business cards and CardGit Events. Free plans, GDPR, QR codes, event ticketing, and more.',
    canonical: `${SITE_URL}/faq`,
  },
  privacy: {
    title: 'Privacy Policy | CardGit',
    description: 'CardGit privacy policy — how we collect, use, and protect your data in line with GDPR.',
    canonical: `${SITE_URL}/privacy`,
  },
  terms: {
    title: 'Terms & Conditions | CardGit',
    description: 'CardGit terms and conditions of service.',
    canonical: `${SITE_URL}/terms`,
  },
  security: {
    title: 'Security | CardGit',
    description:
      "How CardGit protects your data and maintains platform security.",
    canonical: `${SITE_URL}/security`,
  },
  contact: {
    title: 'Contact | CardGit',
    description:
      'Get in touch with CardGit. Email us at info@cardgit.com or use our contact form. London, UK.',
    canonical: `${SITE_URL}/contact`,
  },
}
