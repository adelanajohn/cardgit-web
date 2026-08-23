import { Link } from 'react-router-dom'
import { ArrowRight, TrendingUp, Users, Building, Calendar, Briefcase, Heart, BarChart2, GraduationCap } from 'lucide-react'
import SEO from '@/components/SEO'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { useCases } from '@/data/useCases'
import { pageSEO, SITE_URL } from '@/data/seo'

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  TrendingUp, Users, Building, Calendar, Briefcase, Heart, BarChart2, GraduationCap,
}

export default function UseCases() {
  const seo = pageSEO['use-cases']

  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        canonical={seo.canonical}
        breadcrumbs={[{ name: 'Use Cases', item: `${SITE_URL}/use-cases` }]}
      />

      <section className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-black text-[var(--text-primary)] mb-4">
              CardGit for Every Industry
            </h1>
            <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
              CardGit digital business cards and CardGit Events are used across a wide range of UK industries and professional roles. Find your use case below.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((uc, i) => {
              const Icon = ICONS[uc.icon] || TrendingUp
              return (
                <AnimatedSection key={uc.slug} delay={i * 0.06}>
                  <Link
                    to={`/use-cases/${uc.slug}`}
                    className="group flex flex-col bg-[var(--bg-surface)] border border-slate-200 dark:border-slate-700/50 rounded-2xl p-6 hover:border-indigo-300 dark:hover:border-indigo-600 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" aria-hidden="true" />
                    </div>
                    <h2 className="font-bold text-[var(--text-primary)] text-lg mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {uc.title}
                    </h2>
                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed flex-1 mb-4">
                      {uc.subheadline}
                    </p>
                    <span className="inline-flex items-center gap-1 text-indigo-600 dark:text-indigo-400 text-sm font-semibold group-hover:gap-2 transition-all">
                      Learn more <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </span>
                  </Link>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
