import { useSearchParams, Link } from 'react-router-dom'
import { Check, X } from 'lucide-react'
import SEO from '@/components/SEO'
import AnimatedSection from '@/components/ui/AnimatedSection'
import PricingCard, { type PricingTier } from '@/components/ui/PricingCard'
import FAQAccordion from '@/components/ui/FAQAccordion'
import { pageSEO, SITE_URL } from '@/data/seo'

/* ── Tier data ──────────────────────────────────────────── */

const CARD_TIERS: Record<'monthly' | 'annual', PricingTier[]> = {
  monthly: [
    {
      name: 'Free',
      price: '£0',
      period: 'month',
      description: 'For individuals getting started with digital networking.',
      features: [
        'Digital business card creation',
        'QR code and link sharing',
        'Social media integration',
        'Product and service showcase',
        'Basic profile customisation',
      ],
      cta: 'Get Started Free',
      ctaHref: 'https://app.cardgit.com/auth/signup',
    },
    {
      name: 'Pro',
      price: '£5',
      period: 'month',
      description: 'For professionals who want to capture leads and grow their network.',
      features: [
        'Everything in Free',
        'Lead capture forms',
        'Appointment booking',
        'Real-time analytics dashboard',
        'Multiple cards per account',
        'Audience location data',
        'Priority support',
      ],
      cta: 'Start Pro Trial',
      ctaHref: 'https://app.cardgit.com/auth/signup',
      highlighted: true,
      badge: 'Most Popular',
    },
    {
      name: 'Teams',
      price: '£.',
      period: 'month',
      description: "For businesses managing a team's digital presence.",
      features: [
        'Everything in Pro',
        'Team management dashboard',
        'Centralised brand management',
        'Employee onboarding & offboarding',
        'Team analytics & reporting',
        'SSO (Single Sign-On)',
        'Dedicated account support',
      ],
      cta: 'Contact Sales',
      ctaHref: 'mailto:info@cardgit.com?subject=CardGit Teams Enquiry',
      comingSoon: true,
    },
  ],
  annual: [
    {
      name: 'Free',
      price: '£0',
      period: 'year',
      description: 'For individuals getting started with digital networking.',
      features: [
        'Digital business card creation',
        'QR code and link sharing',
        'Social media integration',
        'Product and service showcase',
        'Basic profile customisation',
      ],
      cta: 'Get Started Free',
      ctaHref: 'https://app.cardgit.com/auth/signup',
    },
    {
      name: 'Pro',
      price: '£48',
      period: 'year',
      description: 'For professionals who want to capture leads and grow their network.',
      features: [
        'Everything in Free',
        'Lead capture forms',
        'Appointment booking',
        'Real-time analytics dashboard',
        'Multiple cards per account',
        'Audience location data',
        'Priority support',
      ],
      cta: 'Start Pro Trial',
      ctaHref: 'https://app.cardgit.com/auth/signup',
      highlighted: true,
      badge: 'Save 20%',
    },
    {
      name: 'Teams',
      price: '£.',
      period: 'year',
      description: "For businesses managing a team's digital presence.",
      features: [
        'Everything in Pro',
        'Team management dashboard',
        'Centralised brand management',
        'Employee onboarding & offboarding',
        'Team analytics & reporting',
        'SSO (Single Sign-On)',
        'Dedicated account support',
      ],
      cta: 'Contact Sales',
      ctaHref: 'mailto:info@cardgit.com?subject=CardGit Teams Enquiry',
      comingSoon: true,
    },
  ],
}

const EVENTS_TIERS: Record<'monthly' | 'annual', PricingTier[]> = {
  monthly: [
    {
      name: 'Starter',
      price: '£0',
      period: 'month',
      description: 'For small events and organisations getting started.',
      features: [
        'Up to 100 attendees per event',
        'Basic registration and ticketing',
        'QR code check-in',
        'Event schedule',
        'Basic analytics',
      ],
      cta: 'Get Started Free',
      ctaHref: 'https://events.cardgit.com/register',
    },
    {
      name: 'Professional',
      price: '£99',
      period: 'month',
      description: 'For professional events requiring the full feature set.',
      features: [
        'Unlimited attendees',
        'Smart matchmaking',
        'Live Q&A and polls',
        'Social wall',
        'Gamification',
        'Speaker and sponsor management',
        'Revenue reporting',
        'Custom branding',
        'Email management',
        'Priority support',
      ],
      cta: 'Start Free Trial',
      ctaHref: 'https://events.cardgit.com/register',
      highlighted: true,
      badge: 'Most Popular',
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organisations running multiple events at scale.',
      features: [
        'Everything in Professional',
        'White-label platform',
        'Multi-event management',
        'Custom integrations',
        'Dedicated account manager',
        'SLA-backed support',
        'Custom analytics dashboards',
        'On-site support options',
      ],
      cta: 'Book a Demo',
      ctaHref: 'mailto:info@cardgit.com?subject=CardGit Events Enterprise Enquiry',
    },
  ],
  annual: [
    {
      name: 'Starter',
      price: '£0',
      period: 'year',
      description: 'For small events and organisations getting started.',
      features: [
        'Up to 100 attendees per event',
        'Basic registration and ticketing',
        'QR code check-in',
        'Event schedule',
        'Basic analytics',
      ],
      cta: 'Get Started Free',
      ctaHref: 'https://events.cardgit.com/register',
    },
    {
      name: 'Professional',
      price: '£950',
      period: 'year',
      description: 'For professional events requiring the full feature set.',
      features: [
        'Unlimited attendees',
        'Smart matchmaking',
        'Live Q&A and polls',
        'Social wall',
        'Gamification',
        'Speaker and sponsor management',
        'Revenue reporting',
        'Custom branding',
        'Email management',
        'Priority support',
      ],
      cta: 'Start Free Trial',
      ctaHref: 'https://events.cardgit.com/register',
      highlighted: true,
      badge: 'Save 20%',
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organisations running multiple events at scale.',
      features: [
        'Everything in Professional',
        'White-label platform',
        'Multi-event management',
        'Custom integrations',
        'Dedicated account manager',
        'SLA-backed support',
        'Custom analytics dashboards',
        'On-site support options',
      ],
      cta: 'Book a Demo',
      ctaHref: 'mailto:info@cardgit.com?subject=CardGit Events Enterprise Enquiry',
    },
  ],
}

/* ── Feature comparison tables ──────────────────────────── */

const CARD_COMPARISON = [
  { feature: 'Digital business card creation', free: true, pro: true, teams: true },
  { feature: 'QR code and link sharing', free: true, pro: true, teams: true },
  { feature: 'Social media integration', free: true, pro: true, teams: true },
  { feature: 'Product & service showcase', free: true, pro: true, teams: true },
  { feature: 'Instant card updates', free: true, pro: true, teams: true },
  { feature: 'Lead capture forms', free: false, pro: true, teams: true },
  { feature: 'Appointment booking', free: false, pro: true, teams: true },
  { feature: 'Analytics dashboard', free: false, pro: true, teams: true },
  { feature: 'Audience location data', free: false, pro: true, teams: true },
  { feature: 'Multiple cards per account', free: false, pro: true, teams: true },
  { feature: 'Team management dashboard', free: false, pro: false, teams: true },
  { feature: 'Centralised brand management', free: false, pro: false, teams: true },
  { feature: 'Employee onboarding & offboarding', free: false, pro: false, teams: true },
  { feature: 'Team-level analytics', free: false, pro: false, teams: true },
  { feature: 'SSO (Single Sign-On)', free: false, pro: false, teams: true },
  { feature: 'Dedicated account support', free: false, pro: false, teams: true },
]

const EVENTS_COMPARISON = [
  { feature: 'Event registration', free: true, pro: true, enterprise: true },
  { feature: 'Free ticket types', free: true, pro: true, enterprise: true },
  { feature: 'Paid ticketing (Stripe)', free: false, pro: true, enterprise: true },
  { feature: 'QR code check-in', free: true, pro: true, enterprise: true },
  { feature: 'Basic analytics', free: true, pro: true, enterprise: true },
  { feature: 'Up to 100 attendees/event', free: true, pro: false, enterprise: false },
  { feature: 'Unlimited attendees', free: false, pro: true, enterprise: true },
  { feature: 'Smart matchmaking', free: false, pro: true, enterprise: true },
  { feature: 'Speed networking', free: false, pro: true, enterprise: true },
  { feature: 'Live Q&A & polls', free: false, pro: true, enterprise: true },
  { feature: 'Social wall', free: false, pro: true, enterprise: true },
  { feature: 'Gamification', free: false, pro: true, enterprise: true },
  { feature: 'Speaker management', free: false, pro: true, enterprise: true },
  { feature: 'Sponsor booths & lead capture', free: false, pro: true, enterprise: true },
  { feature: 'Revenue reporting', free: false, pro: true, enterprise: true },
  { feature: 'Custom branding', free: false, pro: true, enterprise: true },
  { feature: 'Email management', free: false, pro: true, enterprise: true },
  { feature: 'White-label platform', free: false, pro: false, enterprise: true },
  { feature: 'Multi-event management', free: false, pro: false, enterprise: true },
  { feature: 'Custom integrations', free: false, pro: false, enterprise: true },
  { feature: 'Dedicated account manager', free: false, pro: false, enterprise: true },
  { feature: 'SLA-backed support', free: false, pro: false, enterprise: true },
]

/* ── FAQ data ────────────────────────────────────────────── */

const PRICING_FAQS = [
  { question: 'Is there a free plan for CardGit digital business cards?', answer: 'Yes. CardGit offers a free plan that includes digital business card creation, QR code sharing, and social media integration — with no time limit and no credit card required.' },
  { question: 'Can I switch between plans at any time?', answer: 'Yes. You can upgrade or downgrade your CardGit plan at any time. Changes take effect at the start of your next billing period.' },
  { question: 'Is there a free trial for paid plans?', answer: 'Yes. Paid plans include a free trial period so you can evaluate all premium features before committing.' },
  { question: 'How does annual billing work?', answer: 'Annual billing is charged once per year and saves 20% compared to monthly billing. The annual price is shown when you toggle to annual on this page.' },
  { question: 'Does CardGit Events charge per attendee?', answer: 'CardGit Events pricing is based on a monthly or annual subscription. The Starter plan supports up to 100 attendees per event. The Professional and Enterprise plans support unlimited attendees.' },
  { question: 'Are payment processing fees included?', answer: 'CardGit Events uses Stripe for payment processing. Standard Stripe transaction fees apply to paid ticket sales. These are separate from the CardGit Events subscription cost.' },
]

/* ── Component ───────────────────────────────────────────── */

export default function Pricing() {
  const [searchParams] = useSearchParams()
  // ?billing=monthly (default) or ?billing=annual
  const rawBilling = searchParams.get('billing')
  const billing: 'monthly' | 'annual' = rawBilling === 'annual' ? 'annual' : 'monthly'

  const seo = pageSEO['pricing']

  const tiers = CARD_TIERS[billing]
  const comparison = CARD_COMPARISON
  const compHeaders = ['Free', 'Pro', 'Teams']
  const compKeys = ['free', 'pro', 'teams'] as const

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: PRICING_FAQS.map((item) => ({
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
        breadcrumbs={[{ name: 'Pricing', item: `${SITE_URL}/pricing` }]}
      />

      <section className="pt-24 pb-20 bg-gradient-to-b from-[var(--bg-page)] to-[var(--bg-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <AnimatedSection className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-black text-[var(--text-primary)] mb-4">
              Simple, Transparent Pricing
            </h1>
            <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto mb-8">
              Start free. Upgrade when you need more. No hidden fees.
            </p>

            {/* URL-driven billing toggle */}
            <div className="flex items-center justify-center gap-3">
              <Link
                to="/pricing?billing=monthly"
                className={`text-sm font-medium transition-colors ${billing === 'monthly' ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`}
              >
                Monthly
              </Link>
              <Link
                to={`/pricing?billing=${billing === 'monthly' ? 'annual' : 'monthly'}`}
                aria-label={`Switch to ${billing === 'monthly' ? 'annual' : 'monthly'} billing`}
                className={`relative w-12 h-6 rounded-full transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none ${
                  billing === 'annual' ? 'bg-indigo-600' : 'bg-slate-300 dark:bg-slate-600'
                }`}
              >
                <span
                  className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 ${
                    billing === 'annual' ? 'translate-x-6' : ''
                  }`}
                />
              </Link>
              <Link
                to="/pricing?billing=annual"
                className={`text-sm font-medium transition-colors ${billing === 'annual' ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`}
              >
                Annual{' '}
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">(Save 20%)</span>
              </Link>
            </div>
          </AnimatedSection>

          {/* Pricing cards */}
          <div className="grid md:grid-cols-3 gap-8 items-start mb-20">
            {tiers.map((tier, i) => (
              <AnimatedSection key={tier.name} delay={i * 0.1}>
                <PricingCard tier={tier} />
              </AnimatedSection>
            ))}
          </div>

          {/* Feature comparison table */}
          <AnimatedSection className="mb-6 text-center">
            <h2 className="text-2xl md:text-3xl font-black text-[var(--text-primary)]">
              Full Feature Comparison
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="mb-16 overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-700/50">
            <table className="w-full" role="table">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/50">
                  <th className="text-left px-6 py-4 text-sm font-semibold text-[var(--text-secondary)] w-1/2" scope="col">
                    Feature
                  </th>
                  {compHeaders.map((h, i) => (
                    <th
                      key={h}
                      className={`text-center px-6 py-4 text-sm font-semibold ${
                        i === 1
                          ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20'
                          : 'text-[var(--text-secondary)]'
                      }`}
                      scope="col"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr
                    key={i}
                    className={`border-t border-slate-200 dark:border-slate-700/50 ${
                      i % 2 !== 0 ? 'bg-slate-50/50 dark:bg-slate-800/20' : ''
                    }`}
                  >
                    <td className="px-6 py-3.5 text-sm text-[var(--text-primary)] font-medium">
                      {row.feature}
                    </td>
                    {compKeys.map((key, ci) => (
                      <td
                        key={key}
                        className={`text-center px-6 py-3.5 ${
                          ci === 1 ? 'bg-indigo-50/40 dark:bg-indigo-900/10' : ''
                        }`}
                      >
                        {(row as unknown as Record<string, boolean>)[key] ? (
                          <Check className="w-4 h-4 text-emerald-500 mx-auto" aria-label="Included" />
                        ) : (
                          <X className="w-4 h-4 text-slate-300 dark:text-slate-600 mx-auto" aria-label="Not included" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </AnimatedSection>

          {/* Pricing FAQ */}
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-black text-[var(--text-primary)]">Pricing FAQs</h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1} className="max-w-3xl mx-auto">
            <FAQAccordion items={PRICING_FAQS} />
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
