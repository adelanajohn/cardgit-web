import { Mail, MapPin, CreditCard, Calendar, Shield, Leaf, Globe, Users } from 'lucide-react'
import SEO from '@/components/SEO'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { pageSEO, SITE_URL } from '@/data/seo'

const VALUES = [
  { icon: Shield, title: 'Privacy-First', description: 'CardGit is designed with GDPR-conscious data practices. Professionals retain control over their data and who can access it.' },
  { icon: Leaf, title: 'Sustainability', description: "Digital business cards eliminate the waste produced by physical card printing and disposal — CardGit's eco-friendly alternative has no material footprint." },
  { icon: Globe, title: 'Accessibility', description: 'CardGit profiles are viewable by anyone with a browser, without app download requirements, on any device.' },
  { icon: CreditCard, title: 'Simplicity', description: 'Professional identity should be simple to create, simple to share, and simple to update. CardGit is built on this principle.' },
]

export default function About() {
  const seo = pageSEO['about']

  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        canonical={seo.canonical}
        breadcrumbs={[{ name: 'About', item: `${SITE_URL}/about` }]}
      />

      <section className="pt-24 pb-16 bg-gradient-to-b from-[var(--bg-page)] to-[var(--bg-surface)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <AnimatedSection className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-black text-[var(--text-primary)] mb-6">
              About CardGit
            </h1>
            {/* Entity definition paragraph — visible and GEO-optimised */}
            <p className="text-xl text-[var(--text-secondary)] leading-relaxed max-w-3xl mx-auto">
              CardGit is a digital identity and professional networking company based in London, United Kingdom. It operates two products: CardGit, a digital business card platform that lets professionals share their profile via QR code or link; and CardGit Events, a networking-first event management platform for conferences, summits, and business networking events. CardGit is used by professionals, SMEs, and enterprise teams across the UK and internationally.
            </p>
          </AnimatedSection>

          {/* Mission */}
          <AnimatedSection delay={0.1} className="bg-[var(--bg-surface)] border border-slate-200 dark:border-slate-700/50 rounded-3xl p-10 mb-12">
            <h2 className="text-2xl font-black text-[var(--text-primary)] mb-4">Our Mission</h2>
            <p className="text-indigo-600 dark:text-indigo-400 font-semibold text-lg mb-3">
              "Simplifying Professional Identity and Human Connection"
            </p>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
              CardGit exists to make professional networking frictionless — whether you're sharing your contact details at a meeting, connecting with someone at a conference, or running an event where 500 people need to find their most valuable conversations. We built CardGit because the tools professionals relied on — paper cards, scattered social profiles, generic event platforms — were not built for the way modern networking actually works.
            </p>
          </AnimatedSection>

          {/* Products */}
          <AnimatedSection delay={0.15} className="mb-12">
            <h2 className="text-2xl font-black text-[var(--text-primary)] mb-6">Our Products</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-indigo-50 to-violet-50 dark:from-indigo-950/40 dark:to-violet-950/40 rounded-2xl p-6 border border-indigo-200/50 dark:border-indigo-700/30">
                <CreditCard className="w-8 h-8 text-indigo-600 mb-4" aria-hidden="true" />
                <h3 className="font-bold text-[var(--text-primary)] text-lg mb-2">CardGit — Digital Business Cards</h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                  A digital business card platform for individuals, teams, and businesses. Share your professional profile via QR code or link. Features include lead capture, appointment booking, social media integration, product showcases, analytics, and team management.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-pink-50 dark:from-blue-950/40 dark:to-pink-950/30 rounded-2xl p-6 border border-purple-200/50 dark:border-purple-700/30">
                <Calendar className="w-8 h-8 text-purple-600 mb-4" aria-hidden="true" />
                <h3 className="font-bold text-[var(--text-primary)] text-lg mb-2">CardGit Events</h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                  A networking-first event management platform for conferences, summits, expos, and business networking events. Built on CardGit's digital identity infrastructure — enabling smart matchmaking, live engagement, and measurable networking outcomes.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Team placeholder */}
          <AnimatedSection delay={0.22} className="mb-12">
            <h2 className="text-2xl font-black text-[var(--text-primary)] mb-6">Our Team</h2>
            <div className="bg-[var(--bg-surface)] border border-slate-200 dark:border-slate-700/50 rounded-2xl p-8 text-center">
              <Users className="w-10 h-10 text-indigo-400 mx-auto mb-4" aria-hidden="true" />
              <p className="text-[var(--text-secondary)] leading-relaxed max-w-xl mx-auto">
                CardGit is built by a team of professionals passionate about making networking meaningful. We're based in London, UK. Team profiles coming soon — in the meantime, say hello at{' '}
                <a
                  href="mailto:info@cardgit.com"
                  className="text-indigo-600 dark:text-indigo-400 hover:underline focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none rounded"
                >
                  info@cardgit.com
                </a>
                .
              </p>
            </div>
          </AnimatedSection>

          {/* Values */}
          <AnimatedSection delay={0.28} className="mb-12">
            <h2 className="text-2xl font-black text-[var(--text-primary)] mb-6">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {VALUES.map((v, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <v.icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--text-primary)] mb-1">{v.title}</h3>
                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{v.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Contact */}
          <AnimatedSection delay={0.35} className="bg-[var(--bg-surface)] border border-slate-200 dark:border-slate-700/50 rounded-3xl p-8">
            <h2 className="text-2xl font-black text-[var(--text-primary)] mb-6">Get in Touch</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-[var(--text-secondary)]">
                <MapPin className="w-5 h-5 text-indigo-500 flex-shrink-0" aria-hidden="true" />
                <span>London, United Kingdom</span>
              </div>
              <div className="flex items-center gap-3 text-[var(--text-secondary)]">
                <Mail className="w-5 h-5 text-indigo-500 flex-shrink-0" aria-hidden="true" />
                <a href="mailto:info@cardgit.com" className="text-indigo-600 dark:text-indigo-400 hover:underline focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none rounded">
                  info@cardgit.com
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
