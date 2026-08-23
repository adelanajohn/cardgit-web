import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SEO from '@/components/SEO'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { pageSEO, SITE_URL } from '@/data/seo'

const COMPARISONS = [
  { slug: 'cardgit-vs-paper-business-cards', title: 'CardGit vs Paper Business Cards', description: 'A practical comparison of digital business cards versus traditional printed cards — covering cost, functionality, analytics, and environmental impact.' },
  { slug: 'cardgit-events-vs-eventbrite', title: 'CardGit Events vs Eventbrite', description: 'How CardGit Events compares to Eventbrite for UK conferences, summits, and professional networking events — with a focus on attendee networking features.' },
  { slug: 'cardgit-events-vs-hopin', title: 'CardGit Events vs Hopin', description: 'A feature comparison between CardGit Events and Hopin for hybrid and virtual event management, with a focus on attendee engagement and networking tools.' },
  { slug: 'cardgit-events-vs-whova', title: 'CardGit Events vs Whova', description: 'How CardGit Events compares to Whova for conference management — covering networking, session management, exhibitor tools, and UK market fit.' },
]

export default function Compare() {
  const seo = pageSEO['compare']

  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        canonical={seo.canonical}
        breadcrumbs={[{ name: 'Compare', item: `${SITE_URL}/compare` }]}
      />

      <section className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-black text-[var(--text-primary)] mb-4">
              CardGit vs Alternatives
            </h1>
            <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
              Factual, feature-by-feature comparisons to help you choose the right tool for your needs.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {COMPARISONS.map((c, i) => (
              <AnimatedSection key={c.slug} delay={i * 0.1}>
                <Link
                  to={`/compare/${c.slug}`}
                  className="group flex flex-col bg-[var(--bg-surface)] border border-slate-200 dark:border-slate-700/50 rounded-2xl p-6 hover:border-indigo-300 dark:hover:border-indigo-600 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none"
                >
                  <h2 className="font-black text-[var(--text-primary)] text-lg mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {c.title}
                  </h2>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed flex-1 mb-4">{c.description}</p>
                  <span className="inline-flex items-center gap-1 text-indigo-600 dark:text-indigo-400 text-sm font-semibold group-hover:gap-2 transition-all">
                    Read comparison <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
