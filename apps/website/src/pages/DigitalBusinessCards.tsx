import { Link } from 'react-router-dom'
import {
  QrCode,
  Target,
  Calendar,
  Share2,
  ShoppingBag,
  Users,
  Layers,
  BarChart2,
  Check,
  X,
  ArrowRight,
} from 'lucide-react'
import SEO from '@/components/SEO'
import AnimatedSection from '@/components/ui/AnimatedSection'
import FAQAccordion from '@/components/ui/FAQAccordion'
import CTABanner from '@/components/ui/CTABanner'
import { faqCategories } from '@/data/faq'
import { pageSEO, SITE_URL } from '@/data/seo'

import imgLeadCapture from '@/assets/cards/Smart Lead Capture Landing Page.png'
import imgAppointment from '@/assets/cards/Appointment Booking Landing page (2).png'
import imgSocialMedia from '@/assets/cards/Social Media Integration Landing page.png'
import imgQRCode from '@/assets/cards/Digital Business Card QR Code Landing page.png'
import imgShowcase from '@/assets/cards/Interactive Product & Service Showcase Landing Page.png'
import imgTeamMgmt from '@/assets/cards/Team Card Management Landing page.png'
import imgMultiCard from '@/assets/cards/Multiple Digital Business Cards Landing page.png'
import imgAnalytics from '@/assets/cards/Business Card Analytics Landing Page.png'

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'CardGit',
  alternateName: 'CardGit Digital Business Cards',
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Digital Business Card',
  operatingSystem: 'Web Browser, iOS, Android',
  url: 'https://app.cardgit.com',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'GBP',
    description: 'Free tier available. Paid plans from £X/month.',
  },
  description:
    'CardGit is a digital business card platform that allows professionals to create a shareable digital profile accessible via QR code or link. Features include lead capture, appointment booking, social media integration, team management, and analytics.',
  featureList: [
    'Digital business card creation',
    'QR code profile sharing',
    'Lead capture',
    'Appointment booking',
    'Social media integration',
    'Analytics dashboard',
    'Team management',
    'Multiple cards per user',
    'GDPR-conscious',
  ],
  publisher: { '@type': 'Organization', name: 'CardGit', url: 'https://cardgit.com' },
}

const FEATURES = [
  {
    icon: Target,
    title: 'Smart Lead Capture',
    image: imgLeadCapture,
    imageAlt: 'CardGit smart lead capture form embedded in a digital business card profile',
    description:
      'Lead capture in CardGit allows card viewers to submit their contact information directly from a digital business card profile. Captured leads are stored in your dashboard and can be exported at any time.',
    detail: 'No forms to build. No third-party tools. Lead capture is built directly into every CardGit card.',
  },
  {
    icon: Calendar,
    title: 'Appointment Booking',
    image: imgAppointment,
    imageAlt: 'CardGit appointment booking feature showing a meeting scheduler integrated into a digital business card',
    description:
      'CardGit appointment booking allows clients and prospects to schedule meetings directly from your digital business card — without email back-and-forth or a separate booking tool.',
    detail: 'Clients see your availability and book time slots that work for both parties.',
  },
  {
    icon: Share2,
    title: 'Social Media Integration',
    image: imgSocialMedia,
    imageAlt: 'CardGit social media integration showing LinkedIn, Instagram, TikTok and other social links on a digital card',
    description:
      'CardGit integrates with LinkedIn, WhatsApp, Instagram, TikTok, Facebook, X (Twitter), and YouTube — displaying all your social profiles in a single, scannable digital card.',
    detail: 'Add or remove social links instantly. Changes appear immediately on your card.',
  },
  {
    icon: QrCode,
    title: 'Instant QR Code Sharing',
    image: imgQRCode,
    imageAlt: 'CardGit QR code sharing feature showing a scannable code linked to a professional profile',
    description:
      'Every CardGit digital business card generates a unique QR code and shareable link. Anyone can view your profile by scanning the code — no app installation required.',
    detail: 'Share in person, via email, on slides, or in your email signature.',
  },
  {
    icon: ShoppingBag,
    title: 'Interactive Product Showcase',
    image: imgShowcase,
    imageAlt: 'CardGit interactive product and service showcase showing product cards with CTA buttons',
    description:
      'CardGit product and service showcases allow professionals to display their offerings with images, descriptions, and call-to-action buttons including Buy, Enquire, and Book Now.',
    detail: 'Update your showcase in real time. No reprinting required.',
  },
  {
    icon: Users,
    title: 'Team Management Dashboard',
    image: imgTeamMgmt,
    imageAlt: 'CardGit team management dashboard showing centralised control of all employee digital business cards',
    description:
      'CardGit team management gives administrators centralised control over every employee digital business card — enforcing brand consistency, managing permissions, and handling onboarding and offboarding.',
    detail: 'One dashboard. All team cards. Complete brand control.',
  },
  {
    icon: Layers,
    title: 'Multiple Cards per User',
    image: imgMultiCard,
    imageAlt: 'CardGit multiple digital business cards feature showing several cards for different contexts in one account',
    description:
      'CardGit allows users to create separate digital business cards for different contexts — a primary business card, a personal brand card, an event-specific card, or a side project card — each with its own QR code and link.',
    detail: 'Switch between cards based on context. Share the right identity at the right time.',
  },
  {
    icon: BarChart2,
    title: 'Analytics Dashboard',
    image: imgAnalytics,
    imageAlt: 'CardGit analytics dashboard showing profile views, link clicks, lead captures and engagement trends',
    description:
      'CardGit analytics tracks profile views, link clicks, engagement rates, and audience location data in real time — giving professionals measurable insight into how their digital card is performing.',
    detail: 'Understand which content drives enquiries and adjust your card accordingly.',
  },
]

const COMPARISON = [
  { feature: 'Shareable via QR code', paper: false, free: true, pro: true, teams: true },
  { feature: 'Shareable via link (email, signature)', paper: false, free: true, pro: true, teams: true },
  { feature: 'No app needed to view', paper: false, free: true, pro: true, teams: true },
  { feature: 'Instant updates', paper: false, free: true, pro: true, teams: true },
  { feature: 'Clickable social media links', paper: false, free: true, pro: true, teams: true },
  { feature: 'Lead capture forms', paper: false, free: false, pro: true, teams: true },
  { feature: 'Appointment booking', paper: false, free: false, pro: true, teams: true },
  { feature: 'Analytics dashboard', paper: false, free: false, pro: true, teams: true },
  { feature: 'Product/service showcase', paper: false, free: true, pro: true, teams: true },
  { feature: 'Multiple cards', paper: false, free: false, pro: true, teams: true },
  { feature: 'Team management', paper: false, free: false, pro: false, teams: true },
  { feature: 'Brand management', paper: false, free: false, pro: false, teams: true },
  { feature: 'Eco-friendly', paper: false, free: true, pro: true, teams: true },
  { feature: 'No printing cost', paper: false, free: true, pro: true, teams: true },
]

export default function DigitalBusinessCards() {
  const seo = pageSEO['digital-business-cards']
  const cardFAQItems = faqCategories[0].items.slice(0, 6)

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: cardFAQItems.map((item) => ({
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
        jsonLd={[softwareSchema, faqSchema]}
        breadcrumbs={[{ name: 'Digital Business Cards', item: `${SITE_URL}/digital-business-cards` }]}
        prefetchUrls={['/pricing', '/features', '/use-cases']}
      />

      {/* Hero */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-indigo-50 via-white to-violet-50 dark:from-indigo-950/30 dark:via-slate-950 dark:to-violet-950/20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-indigo-400/10 to-violet-400/10 rounded-full blur-3xl" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              🇬🇧 UK's Leading Digital Business Card Platform
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-[var(--text-primary)] mb-6 leading-tight">
              The Smartest Digital Business Card in the UK
            </h1>
            <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto mb-10 leading-relaxed">
              CardGit is a digital business card platform that replaces physical paper cards with a QR-shareable digital profile — including lead capture, appointment booking, analytics, and team management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://app.cardgit.com/auth/signup"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold px-8 py-4 rounded-xl hover:from-indigo-700 hover:to-violet-700 transition-all shadow-lg shadow-indigo-500/30 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:outline-none text-lg"
              >
                Create Your Free Card
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </a>
              <Link
                to="/pricing"
                className="inline-flex items-center justify-center gap-2 border-2 border-indigo-200 dark:border-indigo-700 text-indigo-700 dark:text-indigo-300 font-semibold px-8 py-4 rounded-xl hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none text-lg"
              >
                View Pricing
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Definition list — for AI parse-ability (Section 7.8) */}
      <section className="py-10 bg-[var(--bg-surface)] border-b border-slate-200 dark:border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <dl className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { term: 'QR Code Sharing', desc: 'Every CardGit card generates a unique QR code. Anyone can view your profile by scanning — no app required.' },
              { term: 'Lead Capture', desc: 'Card viewers submit their contact details directly from your digital business card profile.' },
              { term: 'Appointment Booking', desc: 'Clients schedule meetings directly from your card without email back-and-forth.' },
              { term: 'Team Management', desc: 'Administrators manage all employee digital cards from a central dashboard, enforcing brand consistency.' },
            ].map(({ term, desc }) => (
              <div key={term} className="flex flex-col">
                <dt className="font-semibold text-[var(--text-primary)] mb-1 text-sm">{term}</dt>
                <dd className="text-[var(--text-secondary)] text-sm leading-relaxed">{desc}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Feature Deep-dives */}
      <section className="py-24 bg-[var(--bg-page)]" aria-labelledby="features-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 id="features-heading" className="text-3xl md:text-4xl font-black text-[var(--text-primary)] mb-4">
              Everything Your Digital Business Card Needs
            </h2>
          </AnimatedSection>

          <div className="space-y-20">
            {FEATURES.map((feature, i) => (
              <AnimatedSection key={i} delay={0.1}>
                <div className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? 'md:[&>*:first-child]:order-last' : ''}`}>
                  <div>
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-xl mb-6">
                      <feature.icon className="w-6 h-6 text-white" aria-hidden="true" />
                    </div>
                    <h3 className="text-2xl font-black text-[var(--text-primary)] mb-4">{feature.title}</h3>
                    <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-4">{feature.description}</p>
                    <p className="text-indigo-600 dark:text-indigo-400 font-medium">{feature.detail}</p>
                  </div>
                  <div className="overflow-hidden rounded-3xl shadow-xl ring-1 ring-slate-200 dark:ring-slate-700/50 bg-slate-50 dark:bg-slate-900 flex items-center justify-center max-h-96">
                    <img
                      src={feature.image}
                      alt={feature.imageAlt}
                      className="w-full h-auto max-h-96 object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-[var(--bg-surface)]" aria-labelledby="comparison-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 id="comparison-heading" className="text-3xl md:text-4xl font-black text-[var(--text-primary)] mb-4">
              CardGit vs Paper Business Cards
            </h2>
            <p className="text-[var(--text-secondary)] text-lg">
              See exactly how CardGit compares to traditional paper business cards.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-700/50">
              <table className="w-full" role="table">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800/50">
                    <th className="text-left px-6 py-4 text-sm font-semibold text-[var(--text-secondary)]" scope="col">Feature</th>
                    <th className="text-center px-6 py-4 text-sm font-semibold text-[var(--text-secondary)]" scope="col">Paper Card</th>
                    <th className="text-center px-6 py-4 text-sm font-semibold text-[var(--text-secondary)]" scope="col">CardGit Free</th>
                    <th className="text-center px-6 py-4 text-sm font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20" scope="col">CardGit Pro</th>
                    <th className="text-center px-6 py-4 text-sm font-semibold text-[var(--text-secondary)]" scope="col">CardGit Teams</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map((row, i) => (
                    <tr
                      key={i}
                      className={`border-t border-slate-200 dark:border-slate-700/50 ${i % 2 === 0 ? '' : 'bg-slate-50/50 dark:bg-slate-800/20'}`}
                    >
                      <td className="px-6 py-4 text-sm text-[var(--text-primary)] font-medium">{row.feature}</td>
                      {(['paper', 'free', 'pro', 'teams'] as const).map((col) => (
                        <td
                          key={col}
                          className={`text-center px-6 py-4 ${col === 'pro' ? 'bg-indigo-50/50 dark:bg-indigo-900/10' : ''}`}
                        >
                          {row[col] ? (
                            <Check className="w-5 h-5 text-emerald-500 mx-auto" aria-label="Yes" />
                          ) : (
                            <X className="w-5 h-5 text-slate-300 dark:text-slate-600 mx-auto" aria-label="No" />
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="text-center mt-8">
            <Link to="/pricing" className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold hover:gap-3 transition-all">
              View full pricing details <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[var(--bg-page)]" aria-labelledby="card-faq-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 id="card-faq-heading" className="text-3xl md:text-4xl font-black text-[var(--text-primary)] mb-4">
              Digital Business Card FAQs
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <FAQAccordion items={cardFAQItems} />
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[var(--bg-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <CTABanner
              headline="Create Your Free Digital Business Card"
              subheadline="Join professionals across the UK. No credit card required."
              primaryCTA={{ label: 'Get Started Free', href: 'https://app.cardgit.com/auth/signup' }}
              secondaryCTA={{ label: 'View Pricing', href: '/pricing' }}
            />
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
