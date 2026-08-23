import { useParams, Link } from 'react-router-dom'
import { Check, ArrowRight, TrendingUp, Users, Building, Calendar, Briefcase, Heart, BarChart2, GraduationCap } from 'lucide-react'
import SEO from '@/components/SEO'
import AnimatedSection from '@/components/ui/AnimatedSection'
import CTABanner from '@/components/ui/CTABanner'
import { useCases } from '@/data/useCases'
import { SITE_URL } from '@/data/seo'
import NotFound from './NotFound'

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  TrendingUp, Users, Building, Calendar, Briefcase, Heart, BarChart2, GraduationCap,
}

export default function UseCasePage() {
  const { slug } = useParams<{ slug: string }>()
  const uc = useCases.find((u) => u.slug === slug)

  if (!uc) return <NotFound />

  const Icon = ICONS[uc.icon] || TrendingUp

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: uc.headline,
    description: uc.subheadline,
    url: `${SITE_URL}/use-cases/${uc.slug}`,
    isPartOf: { '@type': 'WebSite', name: 'CardGit', url: SITE_URL },
    about: {
      '@type': 'SoftwareApplication',
      name: 'CardGit',
      url: 'https://app.cardgit.com',
    },
  }

  return (
    <>
      <SEO
        title={`${uc.headline} | CardGit`}
        description={uc.subheadline}
        canonical={`${SITE_URL}/use-cases/${uc.slug}`}
        jsonLd={webPageSchema}
        breadcrumbs={[
          { name: 'Use Cases', item: `${SITE_URL}/use-cases` },
          { name: uc.title, item: `${SITE_URL}/use-cases/${uc.slug}` },
        ]}
      />

      {/* Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-indigo-50 via-white to-violet-50 dark:from-indigo-950/30 dark:via-slate-950 dark:to-violet-950/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-indigo-500/30">
              <Icon className="w-8 h-8 text-white" aria-hidden="true" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-[var(--text-primary)] mb-4">{uc.headline}</h1>
            <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">{uc.subheadline}</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Pain points */}
            <AnimatedSection delay={0.1}>
              <h2 className="text-xl font-black text-[var(--text-primary)] mb-6">The Challenge</h2>
              <ul className="space-y-4" role="list">
                {uc.painPoints.map((p, i) => (
                  <li key={i} role="listitem" className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-red-500" aria-hidden="true" />
                    </span>
                    <span className="text-[var(--text-secondary)] text-sm leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            {/* Solutions */}
            <AnimatedSection delay={0.15}>
              <h2 className="text-xl font-black text-[var(--text-primary)] mb-6">How CardGit Helps</h2>
              <ul className="space-y-4" role="list">
                {uc.solutions.map((s, i) => (
                  <li key={i} role="listitem" className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-[var(--text-secondary)] text-sm leading-relaxed">{s}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>

          {/* Features used */}
          <AnimatedSection delay={0.2} className="mb-16">
            <h2 className="text-xl font-black text-[var(--text-primary)] mb-6">Key Features for {uc.title}</h2>
            <div className="flex flex-wrap gap-2">
              {uc.features.map((f) => (
                <span key={f} className="px-4 py-2 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium">
                  {f}
                </span>
              ))}
            </div>
          </AnimatedSection>

          {/* Case study */}
          <AnimatedSection delay={0.25} className="bg-gradient-to-br from-indigo-50 to-violet-50 dark:from-indigo-950/40 dark:to-violet-950/40 border border-indigo-200/50 dark:border-indigo-700/30 rounded-3xl p-8 mb-16">
            <div className="flex items-start gap-3 mb-4">
              <Icon className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <div className="font-bold text-[var(--text-primary)]">{uc.caseStudy.company}</div>
                <div className="text-sm text-[var(--text-secondary)]">{uc.caseStudy.location}</div>
              </div>
            </div>
            <blockquote className="text-[var(--text-secondary)] italic leading-relaxed mb-4">
              "{uc.caseStudy.quote}"
            </blockquote>
            <p className="text-emerald-600 dark:text-emerald-400 font-semibold text-sm">{uc.caseStudy.result}</p>
          </AnimatedSection>

          {/* Related use cases */}
          <AnimatedSection delay={0.3} className="mb-12">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-black text-[var(--text-primary)]">Other Use Cases</h2>
              <Link to="/use-cases" className="text-sm text-indigo-600 dark:text-indigo-400 font-semibold hover:gap-2 flex items-center gap-1 transition-all focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none rounded">
                View all <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.35}>
            <CTABanner
              headline={`Start Using CardGit for ${uc.title}`}
              subheadline="Create your free digital business card today. No credit card required."
              primaryCTA={{ label: 'Create Free Card', href: 'https://app.cardgit.com/auth/signup' }}
              secondaryCTA={{ label: 'View All Features', href: '/features' }}
            />
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
