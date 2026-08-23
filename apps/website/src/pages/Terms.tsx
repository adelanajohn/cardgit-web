import SEO from '@/components/SEO'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { pageSEO, SITE_URL } from '@/data/seo'

export default function Terms() {
  const seo = pageSEO['terms']

  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        canonical={seo.canonical}
        breadcrumbs={[{ name: 'Terms & Conditions', item: `${SITE_URL}/terms` }]}
      />

      <section className="pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-10">
            <h1 className="text-4xl md:text-5xl font-black text-[var(--text-primary)] mb-4">Terms & Conditions</h1>
            <p className="text-[var(--text-secondary)]">Last updated: August 2026</p>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-black">
            <section>
              <h2>Acceptance of Terms</h2>
              <p>By accessing or using CardGit services, including cardgit.com, app.cardgit.com, and events.cardgit.com, you agree to be bound by these Terms & Conditions. If you do not agree, do not use our services.</p>
            </section>

            <section>
              <h2>Use of Services</h2>
              <p>CardGit grants you a non-exclusive, non-transferable licence to use our services for lawful personal and professional purposes. You must not use our services to engage in unlawful activity, send unsolicited communications, or infringe the intellectual property rights of others.</p>
            </section>

            <section>
              <h2>Account Responsibility</h2>
              <p>You are responsible for maintaining the security of your CardGit account credentials and for all activity that occurs under your account. Notify us immediately if you suspect unauthorised access.</p>
            </section>

            <section>
              <h2>Intellectual Property</h2>
              <p>CardGit and its content, features, and functionality are owned by CardGit and protected by UK and international copyright law. You retain ownership of content you create on the platform.</p>
            </section>

            <section>
              <h2>Limitation of Liability</h2>
              <p>To the extent permitted by UK law, CardGit's liability for any claim arising from use of our services is limited to the amount paid by you for the service in the 12 months preceding the claim.</p>
            </section>

            <section>
              <h2>Governing Law</h2>
              <p>These Terms are governed by English law. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
            </section>

            <section>
              <h2>Contact</h2>
              <p>For questions about these Terms, contact CardGit at <a href="mailto:info@cardgit.com">info@cardgit.com</a>.</p>
            </section>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
