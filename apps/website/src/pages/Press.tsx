import { Mail } from 'lucide-react'
import SEO from '@/components/SEO'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { pageSEO, SITE_URL } from '@/data/seo'

export default function Press() {
  const seo = pageSEO['press']

  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        canonical={seo.canonical}
        breadcrumbs={[{ name: 'Press', item: `${SITE_URL}/press` }]}
      />

      <section className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-black text-[var(--text-primary)] mb-4">
              Press & Media
            </h1>
            <p className="text-[var(--text-secondary)] text-lg max-w-xl mx-auto">
              CardGit press mentions, media resources, and company announcements.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="bg-[var(--bg-surface)] border border-slate-200 dark:border-slate-700/50 rounded-3xl p-8 mb-12">
            <h2 className="text-xl font-black text-[var(--text-primary)] mb-4">Media Enquiries</h2>
            <p className="text-[var(--text-secondary)] mb-4">
              For press enquiries, interview requests, and media assets, please contact our team:
            </p>
            <a
              href="mailto:info@cardgit.com?subject=Press Enquiry"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold px-6 py-3 rounded-xl hover:from-indigo-700 hover:to-violet-700 transition-all focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
              info@cardgit.com
            </a>
          </AnimatedSection>

          <AnimatedSection delay={0.15} className="mb-12">
            <h2 className="text-xl font-black text-[var(--text-primary)] mb-6">Company Facts</h2>
            <dl className="grid md:grid-cols-2 gap-4">
              {[
                { term: 'Founded', desc: 'London, United Kingdom' },
                { term: 'Products', desc: 'CardGit (digital business cards), CardGit Events (event management)' },
                { term: 'Market', desc: 'UK-primary, International' },
                { term: 'Contact', desc: 'info@cardgit.com' },
              ].map(({ term, desc }) => (
                <div key={term} className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4">
                  <dt className="text-xs font-bold text-[var(--text-secondary)] uppercase tracking-wider mb-1">{term}</dt>
                  <dd className="font-semibold text-[var(--text-primary)]">{desc}</dd>
                </div>
              ))}
            </dl>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="bg-[var(--bg-surface)] border border-slate-200 dark:border-slate-700/50 rounded-3xl p-8">
            <h2 className="text-xl font-black text-[var(--text-primary)] mb-4">About CardGit</h2>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              CardGit is a digital identity and professional networking company based in London, United Kingdom. It operates two products: CardGit, a digital business card platform that lets professionals share their profile via QR code or link; and CardGit Events, a networking-first event management platform for conferences, summits, and business networking events. CardGit is used by professionals, SMEs, and enterprise teams across the UK and internationally. The company can be contacted at info@cardgit.com.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
