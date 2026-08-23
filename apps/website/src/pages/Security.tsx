import { Shield, Lock, Eye, Server } from 'lucide-react'
import SEO from '@/components/SEO'
import AnimatedSection from '@/components/ui/AnimatedSection'
import FeatureCard from '@/components/ui/FeatureCard'
import { pageSEO, SITE_URL } from '@/data/seo'

const SECURITY_FEATURES = [
  { icon: Lock, title: 'Data Encryption', description: 'All data transmitted between your browser and CardGit servers is encrypted using TLS. Data at rest is encrypted using industry-standard encryption.' },
  { icon: Shield, title: 'GDPR-Conscious Design', description: 'CardGit is designed with GDPR compliance in mind. You control your data, can export it, and can request deletion at any time.' },
  { icon: Eye, title: 'Access Controls', description: 'CardGit uses role-based access controls across both the digital business card platform and CardGit Events to limit data access to authorised personnel only.' },
  { icon: Server, title: 'Secure Infrastructure', description: 'CardGit services are hosted on secure cloud infrastructure with regular security assessments and automated vulnerability monitoring.' },
]

export default function Security() {
  const seo = pageSEO['security']

  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        canonical={seo.canonical}
        breadcrumbs={[{ name: 'Security', item: `${SITE_URL}/security` }]}
      />

      <section className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-black text-[var(--text-primary)] mb-4">Security at CardGit</h1>
            <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
              CardGit is designed with security and privacy as core principles. We take the protection of your data seriously.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {SECURITY_FEATURES.map((f, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <FeatureCard icon={f.icon} title={f.title} description={f.description} />
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.2} className="bg-[var(--bg-surface)] border border-slate-200 dark:border-slate-700/50 rounded-2xl p-8">
            <h2 className="font-black text-[var(--text-primary)] text-xl mb-4">Responsible Disclosure</h2>
            <p className="text-[var(--text-secondary)] mb-4">
              If you discover a security vulnerability in CardGit, we ask that you report it responsibly to our team before public disclosure. This gives us the opportunity to investigate and address the issue.
            </p>
            <a
              href="mailto:info@cardgit.com?subject=Security Disclosure"
              className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold hover:underline focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none rounded"
            >
              Report a vulnerability: info@cardgit.com
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
