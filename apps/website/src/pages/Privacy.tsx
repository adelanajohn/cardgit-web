import SEO from '@/components/SEO'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { pageSEO, SITE_URL } from '@/data/seo'

export default function Privacy() {
  const seo = pageSEO['privacy']

  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        canonical={seo.canonical}
        breadcrumbs={[{ name: 'Privacy Policy', item: `${SITE_URL}/privacy` }]}
      />

      <section className="pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-10">
            <h1 className="text-4xl md:text-5xl font-black text-[var(--text-primary)] mb-4">Privacy Policy</h1>
            <p className="text-[var(--text-secondary)]">Last updated: August 2026</p>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-black">
            <section aria-labelledby="privacy-overview">
              <h2 id="privacy-overview">Overview</h2>
              <p>CardGit is a UK-based digital identity platform operated from London, United Kingdom. This Privacy Policy explains how we collect, use, and protect your personal information when you use cardgit.com, app.cardgit.com, or events.cardgit.com.</p>
              <p>CardGit is committed to GDPR-conscious data practices. We collect only the data necessary to provide our services and give you control over how your data is used.</p>
            </section>

            <section aria-labelledby="privacy-data-we-collect">
              <h2 id="privacy-data-we-collect">Data We Collect</h2>
              <p>We collect information you provide when creating a CardGit account, including name, email address, professional details, and profile information. We also collect usage data to improve our services, including page views, feature usage, and analytics data.</p>
              <p>If you use CardGit Events, we collect registration information, attendance data, and engagement data related to events you organise or attend.</p>
            </section>

            <section aria-labelledby="privacy-how-we-use">
              <h2 id="privacy-how-we-use">How We Use Your Data</h2>
              <p>We use your data to provide and improve our services, send relevant communications you have opted into, and comply with legal obligations. We do not sell your personal data to third parties.</p>
            </section>

            <section aria-labelledby="privacy-cookies" id="cookies">
              <h2 id="privacy-cookies">Cookies</h2>
              <p>CardGit uses cookies to maintain your session, remember your preferences (including dark mode), and collect anonymised analytics data. You can manage cookie preferences in your browser settings.</p>
            </section>

            <section aria-labelledby="privacy-your-rights">
              <h2 id="privacy-your-rights">Your Rights (GDPR)</h2>
              <p>Under UK GDPR, you have the right to access, correct, delete, or port your personal data. You also have the right to restrict or object to certain processing. To exercise any of these rights, contact us at info@cardgit.com.</p>
            </section>

            <section aria-labelledby="privacy-contact">
              <h2 id="privacy-contact">Contact</h2>
              <p>For privacy-related enquiries, contact CardGit at <a href="mailto:info@cardgit.com">info@cardgit.com</a>. CardGit, London, United Kingdom.</p>
            </section>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
