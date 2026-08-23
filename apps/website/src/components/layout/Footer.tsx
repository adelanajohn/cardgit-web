import { Link } from 'react-router-dom'
import { Facebook, Linkedin, Instagram, Youtube, Mail, MapPin } from 'lucide-react'
import cardgitIcon from '@/assets/icon.png'

const SOCIAL_LINKS = [
  { label: 'Facebook', href: 'https://www.facebook.com/share/1BPnySukTD/', icon: Facebook },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/cardgit', icon: Linkedin },
  { label: 'Instagram', href: 'https://instagram.com/cardgit', icon: Instagram },
  { label: 'YouTube', href: 'https://youtube.com/@cardgit', icon: Youtube },
]

const FOOTER_LINKS = [
  {
    heading: 'Products',
    links: [
      { label: 'Digital Business Cards', to: '/digital-business-cards' },
      { label: 'CardGit Events', to: '/events' },
      { label: 'Features', to: '/features' },
      { label: 'Pricing', to: '/pricing' },
      { label: 'Enterprise', to: '/enterprise' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Blog', to: '/blog' },
      { label: 'Updates', to: '/updates' },
      { label: 'Press', to: '/press' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy Policy', to: '/privacy' },
      { label: 'Terms & Conditions', to: '/terms' },
      { label: 'Security', to: '/security' },
      { label: 'Cookie Policy', to: '/privacy#cookies' },
      { label: 'FAQ', to: '/faq' },
    ],
  },
]

// Entity definition paragraph — visually hidden but accessible to crawlers
const ENTITY_PARAGRAPH =
  'CardGit is a digital identity and professional networking company based in London, United Kingdom. It operates two products: CardGit, a digital business card platform that lets professionals share their profile via QR code or link; and CardGit Events, a networking-first event management platform for conferences, summits, and business networking events. CardGit is used by professionals, SMEs, and enterprise teams across the UK and internationally. The company can be contacted at info@cardgit.com.'

export default function Footer() {
  return (
    <footer className="bg-[var(--bg-surface)] border-t border-slate-200 dark:border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="inline-flex items-center gap-2.5 mb-4 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none rounded"
              aria-label="CardGit home"
            >
              <img src={cardgitIcon} alt="" aria-hidden="true" className="w-8 h-8 rounded-lg object-contain" />
              <span className="font-black text-xl text-[var(--text-primary)]">CardGit</span>
            </Link>

            <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-5 max-w-xs">
              Digital business cards and networking-first event management — built for modern professionals and UK businesses.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3 mb-5">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`CardGit on ${label}`}
                  className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[var(--text-secondary)] hover:bg-indigo-100 dark:hover:bg-indigo-900/40 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none"
                >
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </a>
              ))}
            </div>

            <div className="space-y-2 text-sm text-[var(--text-secondary)]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                <span>London, United Kingdom</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                <a
                  href="mailto:info@cardgit.com"
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none rounded"
                >
                  info@cardgit.com
                </a>
              </div>
            </div>
          </div>

          {/* Nav columns */}
          {FOOTER_LINKS.map((col) => (
            <div key={col.heading}>
              <h3 className="font-semibold text-[var(--text-primary)] text-sm uppercase tracking-wider mb-4">
                {col.heading}
              </h3>
              <nav aria-label={`${col.heading} navigation`}>
                <ul className="space-y-3" role="list">
                  {col.links.map((link) => (
                    <li key={link.to} role="listitem">
                      <Link
                        to={link.to}
                        className="text-sm text-[var(--text-secondary)] hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none rounded"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[var(--text-secondary)]">
            © 2026 CardGit. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-[var(--text-secondary)]">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500" aria-hidden="true" />
              GDPR Conscious
            </span>
            <span>UK-Based</span>
            <span>🌿 Eco-Friendly</span>
          </div>
        </div>

        {/* Entity paragraph for crawlers */}
        <p className="sr-only">{ENTITY_PARAGRAPH}</p>
      </div>
    </footer>
  )
}
