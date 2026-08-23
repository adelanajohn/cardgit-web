import { Shield, Users, BarChart2, Settings, Lock, Headphones, Layers, Globe, Calendar } from 'lucide-react'
import SEO from '@/components/SEO'
import AnimatedSection from '@/components/ui/AnimatedSection'
import FeatureCard from '@/components/ui/FeatureCard'
import { pageSEO, SITE_URL } from '@/data/seo'

const ENTERPRISE_FEATURES = [
  { icon: Users, title: 'Centralised Team Management', description: 'Manage all employee digital cards from a single admin dashboard. Add, update, and remove team members without touching individual cards.' },
  { icon: Shield, title: 'Brand Consistency', description: 'Define brand templates that all employee cards inherit. No individual can deviate from approved brand guidelines.' },
  { icon: Lock, title: 'GDPR Compliance & Data Controls', description: "Enterprise-grade data controls ensure your team's profile data meets UK and EU GDPR requirements." },
  { icon: Settings, title: 'Onboarding & Offboarding Workflows', description: "New starters get their branded card from day one. Leavers' cards are deactivated immediately from the admin dashboard." },
  { icon: Globe, title: 'Custom Integrations', description: 'Integrate CardGit with your existing HR, CRM, and identity management systems.' },
  { icon: BarChart2, title: 'Team-Level Analytics', description: "Aggregate analytics across all employee cards show how your team's collective digital presence is performing." },
  { icon: Layers, title: 'SSO (Single Sign-On)', description: 'Enterprise SSO integration ensures employees use your existing identity provider to access CardGit.' },
  { icon: Headphones, title: 'Dedicated Account Support', description: "A dedicated account manager supports your team's setup, training, and ongoing use." },
  { icon: Calendar, title: 'CardGit Events Multi-Event Management', description: 'Run multiple events simultaneously under a single enterprise account. Centralised reporting and branding controls span all events in your organisation.' },
]

export default function Enterprise() {
  const seo = pageSEO['enterprise']

  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        canonical={seo.canonical}
        breadcrumbs={[{ name: 'Enterprise', item: `${SITE_URL}/enterprise` }]}
      />

      <section className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              Enterprise & Teams
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-[var(--text-primary)] mb-6">
              Brand-Consistent Digital Identity at Scale
            </h1>
            <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto mb-10 leading-relaxed">
              CardGit Enterprise gives large organisations and teams the tools to manage digital business cards at scale — with consistent branding, GDPR compliance, and centralised control.
            </p>
            <a
              href="mailto:info@cardgit.com?subject=CardGit Enterprise Enquiry"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold px-8 py-4 rounded-xl hover:from-indigo-700 hover:to-violet-700 transition-all shadow-lg shadow-indigo-500/30 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:outline-none text-lg"
            >
              Book a Business Demo
            </a>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {ENTERPRISE_FEATURES.map((f, i) => (
              <AnimatedSection key={i} delay={i * 0.06}>
                <FeatureCard icon={f.icon} title={f.title} description={f.description} />
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.1} className="bg-gradient-to-br from-indigo-600 to-violet-700 rounded-3xl p-10 md:p-16 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Ready to Roll Out CardGit Enterprise?</h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              Contact our team to discuss your requirements, get a custom quote, and arrange an onboarding demo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@cardgit.com?subject=Business Demo Request"
                className="inline-flex items-center justify-center bg-white text-indigo-700 font-semibold px-8 py-4 rounded-xl hover:bg-indigo-50 transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-indigo-600 focus-visible:outline-none"
              >
                Book a Business Demo
              </a>
              <a
                href="mailto:info@cardgit.com"
                className="inline-flex items-center justify-center border-2 border-white/60 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
              >
                Email: info@cardgit.com
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
