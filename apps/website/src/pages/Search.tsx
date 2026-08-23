import { useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { Search as SearchIcon } from 'lucide-react'
import SEO from '@/components/SEO'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { blogPosts } from '@/data/blog'
import { useCases } from '@/data/useCases'
import { SITE_URL } from '@/data/seo'

const ALL_CONTENT = [
  { title: 'Digital Business Cards', description: 'Create and share a professional digital business card with QR code, lead capture, and analytics.', href: '/digital-business-cards', type: 'Product' },
  { title: 'CardGit Events', description: 'Networking-first event management for conferences, summits, and networking events.', href: '/events', type: 'Product' },
  { title: 'Features', description: 'Explore all CardGit platform features.', href: '/features', type: 'Page' },
  { title: 'Pricing', description: 'Free and paid plans for digital cards and event management.', href: '/pricing', type: 'Page' },
  { title: 'Enterprise', description: 'Team management and brand consistency at scale.', href: '/enterprise', type: 'Page' },
  { title: 'About CardGit', description: 'London-based digital identity platform.', href: '/about', type: 'Page' },
  { title: 'FAQ', description: 'Answers to common questions about CardGit.', href: '/faq', type: 'Page' },
  { title: 'Contact', description: 'Get in touch with the CardGit team.', href: '/contact', type: 'Page' },
  ...useCases.map((uc) => ({ title: uc.title, description: uc.subheadline, href: `/use-cases/${uc.slug}`, type: 'Use Case' })),
  ...blogPosts.map((p) => ({ title: p.title, description: p.excerpt, href: `/blog/${p.slug}`, type: 'Blog' })),
]

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialQ = searchParams.get('q') || ''
  const [query, setQuery] = useState(initialQ)

  const results = query.trim().length > 1
    ? ALL_CONTENT.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase())
      )
    : []

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSearchParams({ q: query })
  }

  return (
    <>
      <SEO
        title="Search | CardGit"
        description="Search cardgit.com for features, use cases, blog posts, and more."
        canonical={`${SITE_URL}/search`}
        noIndex
      />

      <section className="pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-10">
            <h1 className="text-4xl md:text-5xl font-black text-[var(--text-primary)] mb-6">Search CardGit</h1>
            <form onSubmit={handleSubmit} role="search" aria-label="Site search">
              <div className="flex gap-3">
                <label htmlFor="search-input" className="sr-only">Search</label>
                <div className="flex-1 relative">
                  <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--text-secondary)]" aria-hidden="true" />
                  <input
                    id="search-input"
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search features, blog posts, use cases…"
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-[var(--bg-surface)] text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:outline-none"
                >
                  Search
                </button>
              </div>
            </form>
          </AnimatedSection>

          {query.trim().length > 1 && (
            <AnimatedSection delay={0.1}>
              <p className="text-sm text-[var(--text-secondary)] mb-6">
                {results.length} result{results.length !== 1 ? 's' : ''} for "{query}"
              </p>

              {results.length === 0 ? (
                <p className="text-[var(--text-secondary)]">No results found. Try a different search term.</p>
              ) : (
                <ul className="space-y-4" role="list">
                  {results.map((item, i) => (
                    <li key={i} role="listitem">
                      <Link
                        to={item.href}
                        className="group block bg-[var(--bg-surface)] border border-slate-200 dark:border-slate-700/50 rounded-xl p-5 hover:border-indigo-300 dark:hover:border-indigo-600 transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <span className="text-xs font-semibold text-indigo-500 uppercase tracking-wider">{item.type}</span>
                            <h2 className="font-bold text-[var(--text-primary)] mt-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{item.title}</h2>
                            <p className="text-sm text-[var(--text-secondary)] mt-1 line-clamp-2">{item.description}</p>
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </AnimatedSection>
          )}
        </div>
      </section>
    </>
  )
}
