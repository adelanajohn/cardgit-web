import SEO from '@/components/SEO'
import AnimatedSection from '@/components/ui/AnimatedSection'
import FAQAccordion from '@/components/ui/FAQAccordion'
import CTABanner from '@/components/ui/CTABanner'
import { faqCategories, allFAQItems } from '@/data/faq'
import { pageSEO, SITE_URL } from '@/data/seo'

export default function FAQ() {
  const seo = pageSEO['faq']

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allFAQItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }

  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        canonical={seo.canonical}
        jsonLd={faqSchema}
        breadcrumbs={[{ name: 'FAQ', item: `${SITE_URL}/faq` }]}
      />

      <section className="pt-24 pb-16 bg-gradient-to-b from-[var(--bg-page)] to-[var(--bg-surface)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-black text-[var(--text-primary)] mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
              Everything you need to know about CardGit digital business cards and CardGit Events.
            </p>
          </AnimatedSection>

          {faqCategories.map((category, i) => (
            <AnimatedSection key={i} delay={i * 0.1} className="mb-12">
              <h2 className="text-2xl font-black text-[var(--text-primary)] mb-6">{category.title}</h2>
              <FAQAccordion items={category.items} />
            </AnimatedSection>
          ))}

          <AnimatedSection delay={0.2} className="mt-16">
            <CTABanner
              headline="Still have questions?"
              subheadline="Our team is happy to help. Get in touch at info@cardgit.com or create a free account to explore the platform."
              primaryCTA={{ label: 'Create Free Account', href: 'https://app.cardgit.com/auth/signup' }}
              secondaryCTA={{ label: 'Contact Us', href: '/contact' }}
            />
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
