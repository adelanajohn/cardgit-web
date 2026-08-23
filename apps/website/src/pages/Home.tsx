import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  CreditCard,
  Calendar,
  BarChart2,
  Users,
  TrendingUp,
  Building,
  Heart,
  GraduationCap,
  Briefcase,
  CheckCircle,
  Star,
  Quote,
} from 'lucide-react'
import SEO from '@/components/SEO'
import AnimatedSection from '@/components/ui/AnimatedSection'
import FeatureCard from '@/components/ui/FeatureCard'
import FAQAccordion from '@/components/ui/FAQAccordion'
import CTABanner from '@/components/ui/CTABanner'
import ProductDiagram from '@/components/ui/ProductDiagram'
import FeatureCarousel from '@/components/ui/FeatureCarousel'
import cardgitHeroImg from '@/assets/cards/card-image.png'
import { CardIllustration, EventsIllustration } from '@/components/ui/IllustrationCard'
import { faqCategories } from '@/data/faq'
import { pageSEO } from '@/data/seo'

/* ── JSON-LD schemas ─────────────────────────────────────── */
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'CardGit',
  alternateName: ['CardGit Events', 'CardGit Digital Business Cards'],
  url: 'https://cardgit.com',
  logo: { '@type': 'ImageObject', url: 'https://cardgit.com/assets/logo.png', width: 200, height: 60 },
  description: 'CardGit is a UK-based digital identity platform offering digital business cards and a networking-first event management platform called CardGit Events.',
  foundingLocation: 'London, United Kingdom',
  address: { '@type': 'PostalAddress', addressLocality: 'London', addressCountry: 'GB' },
  contactPoint: [{ '@type': 'ContactPoint', email: 'info@cardgit.com', contactType: 'customer service', areaServed: ['GB', 'US', 'IE'], availableLanguage: 'English' }],
  sameAs: ['https://www.facebook.com/share/1BPnySukTD/', 'https://www.linkedin.com/company/cardgit', 'https://instagram.com/cardgit', 'https://youtube.com/@cardgit'],
}
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'CardGit',
  url: 'https://cardgit.com',
  potentialAction: { '@type': 'SearchAction', target: { '@type': 'EntryPoint', urlTemplate: 'https://cardgit.com/search?q={search_term_string}' }, 'query-input': 'required name=search_term_string' },
}
const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Create a Digital Business Card with CardGit',
  description: 'Create and share a professional digital business card in minutes using CardGit.',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Create Your Digital Business Card', text: 'Sign up at app.cardgit.com and fill in your professional details, add your social links, and customise your card.' },
    { '@type': 'HowToStep', position: 2, name: 'Share Instantly with QR Code or Link', text: 'Your card generates a unique QR code and shareable link. Anyone can view your profile without installing an app.' },
    { '@type': 'HowToStep', position: 3, name: 'Get Discovered and Grow Your Network', text: 'Receive leads, booking requests, and connection requests directly from your digital card.' },
  ],
}

/* ── Data ────────────────────────────────────────────────── */
const INDUSTRIES = [
  { label: 'Sales Teams', to: '/use-cases/sales-teams', icon: TrendingUp },
  { label: 'Recruiters', to: '/use-cases/recruitment', icon: Users },
  { label: 'Property', to: '/use-cases/property', icon: Building },
  { label: 'Consultancies', to: '/use-cases/consultancies', icon: BarChart2 },
  { label: 'Event Organisers', to: '/use-cases/events-organisers', icon: Calendar },
  { label: 'Freelancers', to: '/use-cases/freelancers', icon: Briefcase },
  { label: 'Healthcare', to: '/use-cases/healthcare', icon: Heart },
  { label: 'Universities', to: '/use-cases/universities', icon: GraduationCap },
]

const TESTIMONIALS = [
  { name: 'Jessica Miller', role: 'Marketing Consultant', quote: 'Clients now contact me directly from my digital card — the lead capture feature has been a game-changer.', stars: 5 },
  { name: 'Daniel Kim', role: 'Software Engineer', quote: 'I share my QR code at meetups and people book calls on the spot. Appointment booking changed how I network.', stars: 5 },
  { name: 'Richard Thomson', role: 'Security Analyst', quote: 'Consistent branding across all employee cards. The team dashboard makes onboarding effortless.', stars: 5 },
]

const STEPS = [
  { number: '01', title: 'Create Your Card', description: 'Sign up free. Add your details, social links, and services. Live instantly.' },
  { number: '02', title: 'Share via QR or Link', description: 'A unique QR code and shareable link — anyone can view without an app.' },
  { number: '03', title: 'Grow Your Network', description: 'Receive leads, bookings, and connections. Track everything with analytics.' },
]

const STATS = [
  { value: '847+', label: 'Avg. monthly views' },
  { value: '32%', label: 'Lead conversion rate' },
  { value: '0', label: 'Printing cost' },
  { value: '100%', label: 'Instant updates' },
]

const homeFAQItems = [
  faqCategories[0].items[0],
  faqCategories[0].items[4],
  faqCategories[0].items[9],
  faqCategories[1].items[0],
  faqCategories[1].items[2],
]

/* ── Component ───────────────────────────────────────────── */
export default function Home() {
  const seo = pageSEO['home']
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: homeFAQItems.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
  }

  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        canonical={seo.canonical}
        jsonLd={[organizationSchema, websiteSchema, howToSchema, faqSchema]}
        prefetchUrls={['/digital-business-cards', '/events', '/pricing', '/features']}
      />

      {/* ══ HERO — fills viewport ════════════════════════════ */}
      <section className="relative min-h-[calc(100vh-64px)] flex items-center bg-[var(--bg-page)] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/80 via-white to-violet-50/60 dark:from-indigo-950/50 dark:via-slate-950 dark:to-violet-950/30" aria-hidden="true" />
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-indigo-400/15 dark:bg-indigo-600/10 rounded-full blur-3xl animate-blob" aria-hidden="true" />
        <div className="absolute top-1/2 -right-32 w-[500px] h-[500px] bg-violet-400/15 dark:bg-violet-600/10 rounded-full blur-3xl animate-blob animate-delay-400" aria-hidden="true" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-center">

            {/* Copy */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 bg-white/90 dark:bg-slate-800/90 backdrop-blur border border-indigo-200/60 dark:border-indigo-700/40 rounded-full px-4 py-1.5 mb-6 text-xs font-semibold text-indigo-700 dark:text-indigo-300 shadow-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
                GDPR Ready · UK-Based · Used by Professionals
              </motion.div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[var(--text-primary)] leading-[1.08] mb-5">
                {[['Your', 'Digital', 'Identity.', 'default'], ['Smarter', 'Events.', '', 'gradient'], ['Stronger', 'Connections.', '', 'default']].map((group, gi) => (
                  <span key={gi} className="block">
                    {group.slice(0, -1).filter(Boolean).map((word, wi) => (
                      <motion.span
                        key={word + wi}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.08 + gi * 0.12 + wi * 0.06 }}
                        className={`inline-block mr-2 ${group[group.length - 1] === 'gradient' ? 'text-gradient' : ''}`}
                      >
                        {word}
                      </motion.span>
                    ))}
                  </span>
                ))}
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.38 }}
                className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed mb-8 max-w-lg"
              >
                CardGit gives professionals, teams, and event organisers everything they need to network smarter — from digital business cards to networking-first event experiences.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-3"
              >
                <a
                  href="https://app.cardgit.com/auth/signup"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold px-6 py-3.5 rounded-xl hover:from-indigo-700 hover:to-violet-700 active:scale-[0.98] transition-all shadow-lg shadow-indigo-500/25 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:outline-none text-sm"
                >
                  Create Your Free Card
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
                <a
                  href="https://events.cardgit.com"
                  className="inline-flex items-center justify-center gap-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[var(--text-primary)] font-semibold px-6 py-3.5 rounded-xl hover:border-indigo-300 dark:hover:border-indigo-600 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/30 active:scale-[0.98] transition-all shadow-sm focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none text-sm"
                >
                  <Calendar className="w-4 h-4 text-purple-500" aria-hidden="true" />
                  Discover Events
                </a>
              </motion.div>

              {/* Mini social proof */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="mt-8 flex items-center gap-4"
              >
                <div className="flex -space-x-2">
                  {['bg-indigo-500','bg-violet-500','bg-pink-500','bg-blue-500','bg-emerald-500'].map((c, i) => (
                    <div key={i} className={`w-7 h-7 rounded-full ${c} border-2 border-white dark:border-slate-900 flex items-center justify-center`}>
                      <Users className="w-3 h-3 text-white" aria-hidden="true" />
                    </div>
                  ))}
                </div>
                <p className="text-xs text-[var(--text-secondary)]">
                  <span className="font-semibold text-[var(--text-primary)]">Professionals across the UK</span> use CardGit
                </p>
              </motion.div>
            </div>

            {/* Hero image — card-image.png with tilt, glow, floating chips */}
            <motion.div
              initial={{ opacity: 0, x: 30, scale: 0.97 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.65, delay: 0.25, ease: [0.4, 0, 0.2, 1] }}
              className="relative hidden lg:flex items-center justify-center"
            >
              {/* Ambient glow */}
              <div
                className="absolute w-[400px] h-[400px] rounded-full blur-[72px] opacity-25 dark:opacity-20 pointer-events-none"
                style={{ background: 'radial-gradient(circle, #7c3aed 0%, #6366f1 50%, transparent 75%)' }}
                aria-hidden="true"
              />
              {/* Decorative rings */}
              <div className="absolute w-[460px] h-[460px] rounded-full border border-indigo-300/20 dark:border-indigo-700/20 pointer-events-none" aria-hidden="true" />
              <div className="absolute w-[530px] h-[530px] rounded-full border border-violet-200/10 dark:border-violet-700/10 pointer-events-none" aria-hidden="true" />

              {/* Main card — tilted 4° + floating animation */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                style={{ transform: 'rotate(4deg)' }}
                className="relative"
              >
                <img
                  src={cardgitHeroImg}
                  alt="CardGit digital business card profile showing QR code, social links, analytics, and booking features"
                  width="745"
                  height="727"
                  className="w-[340px] sm:w-[380px] lg:w-[400px] h-auto rounded-3xl"
                  style={{
                    filter: 'drop-shadow(0 32px 64px rgba(99,102,241,0.4)) drop-shadow(0 8px 20px rgba(124,58,237,0.3))',
                  }}
                  loading="eager"
                  decoding="sync"
                />
              </motion.div>

              {/* Floating stat chip — top left */}
              <motion.div
                initial={{ opacity: 0, x: -16, y: 8 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="absolute -left-6 top-[22%] bg-white dark:bg-slate-800 rounded-2xl px-4 py-3 shadow-xl shadow-indigo-500/15 border border-indigo-100/60 dark:border-slate-700/60"
              >
                <p className="text-lg font-black text-indigo-600 dark:text-indigo-400 leading-none">847</p>
                <p className="text-[10px] text-slate-500 mt-0.5 font-medium">Profile views</p>
              </motion.div>

              {/* Floating stat chip — right */}
              <motion.div
                initial={{ opacity: 0, x: 16, y: 8 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1.05, duration: 0.5 }}
                className="absolute -right-4 top-[45%] bg-white dark:bg-slate-800 rounded-2xl px-4 py-3 shadow-xl shadow-purple-500/15 border border-purple-100/60 dark:border-slate-700/60"
              >
                <p className="text-lg font-black text-purple-600 dark:text-purple-400 leading-none">32</p>
                <p className="text-[10px] text-slate-500 mt-0.5 font-medium">New leads</p>
              </motion.div>

              {/* Floating booking chip — bottom */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute bottom-[8%] left-[15%] bg-emerald-500 rounded-xl px-3 py-2 shadow-lg shadow-emerald-500/30"
              >
                <p className="text-white text-xs font-bold">✓ Booked · Today 2pm</p>
              </motion.div>
            </motion.div>
          </div>

          {/* Stats bar — bottom of hero */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {STATS.map(({ value, label }) => (
              <div key={label} className="bg-white/70 dark:bg-slate-800/70 backdrop-blur rounded-2xl px-5 py-4 border border-white/80 dark:border-slate-700/50 text-center">
                <div className="text-2xl font-black text-gradient">{value}</div>
                <div className="text-xs text-[var(--text-secondary)] mt-0.5">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ PLATFORM OVERVIEW ════════════════════════════════ */}
      <section className="py-16 bg-[var(--bg-surface)]" aria-labelledby="platform-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10">
            <h2 id="platform-heading" className="text-2xl sm:text-3xl md:text-4xl font-black text-[var(--text-primary)] mb-3">
              Two Powerful Products, One Platform
            </h2>
            <p className="text-[var(--text-secondary)] max-w-xl mx-auto text-sm sm:text-base">
              CardGit is a digital identity and professional networking company based in London, United Kingdom — offering digital business cards and networking-first event management.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Cards product */}
            <AnimatedSection delay={0.1}>
              <div className="group bg-gradient-to-br from-indigo-50 to-violet-50/80 dark:from-indigo-950/50 dark:to-violet-950/40 border border-indigo-200/60 dark:border-indigo-800/40 rounded-3xl p-6 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-xl flex items-center justify-center shadow-md shadow-indigo-500/25 flex-shrink-0">
                    <CreditCard className="w-5 h-5 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-black text-[var(--text-primary)] text-lg leading-tight">Digital Business Cards</h3>
                    <p className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">cardgit.com</p>
                  </div>
                </div>

                <div className="rounded-xl overflow-hidden mb-4 border border-indigo-100/70 dark:border-indigo-800/30">
                  <CardIllustration />
                </div>

                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                  Replace paper cards with a QR-shareable digital profile featuring lead capture, appointment booking, product showcases, and analytics.
                </p>

                <div className="grid grid-cols-2 gap-2 mb-5">
                  {['QR code sharing', 'Lead capture', 'Analytics', 'Team mgmt'].map((f) => (
                    <div key={f} className="flex items-center gap-1.5 text-xs text-[var(--text-secondary)]">
                      <CheckCircle className="w-3.5 h-3.5 text-indigo-500 flex-shrink-0" aria-hidden="true" />
                      {f}
                    </div>
                  ))}
                </div>

                <Link to="/digital-business-cards" className="inline-flex items-center gap-1.5 text-sm text-indigo-600 dark:text-indigo-400 font-semibold hover:gap-2.5 transition-all group-hover:text-indigo-700 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none rounded">
                  Learn more <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </div>
            </AnimatedSection>

            {/* Events product */}
            <AnimatedSection delay={0.15}>
              <div className="group bg-gradient-to-br from-blue-50 to-pink-50/80 dark:from-blue-950/50 dark:to-pink-950/30 border border-purple-200/60 dark:border-purple-800/40 rounded-3xl p-6 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 rounded-xl flex items-center justify-center shadow-md shadow-purple-500/25 flex-shrink-0">
                    <Calendar className="w-5 h-5 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-black text-[var(--text-primary)] text-lg leading-tight">CardGit Events</h3>
                    <p className="text-xs text-purple-600 dark:text-purple-400 font-medium">events.cardgit.com</p>
                  </div>
                </div>

                <div className="rounded-xl overflow-hidden mb-4 border border-purple-100/70 dark:border-purple-800/30">
                  <EventsIllustration />
                </div>

                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                  Networking-first event platform for conferences, summits, and expos — with smart matchmaking, live Q&A, gamification, and deep analytics.
                </p>

                <div className="grid grid-cols-2 gap-2 mb-5">
                  {['Smart matchmaking', 'Registration', 'Live Q&A & polls', 'Gamification'].map((f) => (
                    <div key={f} className="flex items-center gap-1.5 text-xs text-[var(--text-secondary)]">
                      <CheckCircle className="w-3.5 h-3.5 text-purple-500 flex-shrink-0" aria-hidden="true" />
                      {f}
                    </div>
                  ))}
                </div>

                <Link to="/events" className="inline-flex items-center gap-1.5 text-sm text-purple-600 dark:text-purple-400 font-semibold hover:gap-2.5 transition-all group-hover:text-purple-700 focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:outline-none rounded">
                  Learn more <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ══ FEATURE CAROUSEL ════════════════════════════════ */}
      <section className="py-16 bg-[var(--bg-page)]" aria-labelledby="features-carousel-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-8">
            <h2 id="features-carousel-heading" className="text-2xl sm:text-3xl md:text-4xl font-black text-[var(--text-primary)] mb-3">
              Everything You Need to Network Smarter
            </h2>
            <p className="text-[var(--text-secondary)] text-sm sm:text-base max-w-xl mx-auto">
              From digital cards to full event management — explore the features that set CardGit apart.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <FeatureCarousel />
          </AnimatedSection>
        </div>
      </section>

      {/* ══ HOW IT WORKS ═════════════════════════════════════ */}
      <section className="py-16 bg-[var(--bg-surface)]" aria-labelledby="how-it-works-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10">
            <h2 id="how-it-works-heading" className="text-2xl sm:text-3xl md:text-4xl font-black text-[var(--text-primary)] mb-3">
              Up and Running in Minutes
            </h2>
            <p className="text-[var(--text-secondary)] text-sm sm:text-base">Creating a CardGit digital business card takes less than five minutes.</p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-3 gap-6">
            {STEPS.map((step, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="relative text-center">
                  {/* connector line on desktop */}
                  {i < STEPS.length - 1 && (
                    <div className="hidden sm:block absolute top-6 left-1/2 w-full h-px bg-gradient-to-r from-indigo-300 to-transparent dark:from-indigo-700" aria-hidden="true" />
                  )}
                  <div className="relative inline-flex w-12 h-12 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-2xl items-center justify-center mx-auto mb-4 shadow-lg shadow-indigo-500/20 z-10">
                    <span className="text-white font-black text-sm">{step.number}</span>
                  </div>
                  <h3 className="font-bold text-[var(--text-primary)] text-base mb-2">{step.title}</h3>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ═════════════════════════════════════ */}
      <section className="py-16 bg-[var(--bg-page)]" aria-labelledby="testimonials-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10">
            <h2 id="testimonials-heading" className="text-2xl sm:text-3xl font-black text-[var(--text-primary)] mb-2">
              Trusted by UK Professionals
            </h2>
            <p className="text-xs text-[var(--text-secondary)]">Used by professionals across industries · UK & International reach · GDPR Conscious</p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <blockquote className="bg-[var(--bg-surface)] border border-slate-200/80 dark:border-slate-700/40 rounded-2xl p-5 h-full flex flex-col shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: t.stars }).map((_, si) => (
                      <Star key={si} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" aria-hidden="true" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-indigo-200 dark:text-indigo-800 mb-2 flex-shrink-0" aria-hidden="true" />
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed flex-1 mb-4">{t.quote}</p>
                  <footer className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">{t.name.charAt(0)}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-[var(--text-primary)] text-sm">{t.name}</div>
                      <div className="text-xs text-[var(--text-secondary)]">{t.role}</div>
                    </div>
                  </footer>
                </blockquote>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PLATFORM DIAGRAM ═════════════════════════════════ */}
      <section className="py-16 bg-[var(--bg-surface)]" aria-labelledby="diagram-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-8">
            <h2 id="diagram-heading" className="text-2xl sm:text-3xl font-black text-[var(--text-primary)] mb-3">
              One Shared Identity Infrastructure
            </h2>
            <p className="text-[var(--text-secondary)] text-sm sm:text-base max-w-lg mx-auto">
              Your CardGit profile powers both products — business card networking and event matchmaking in one identity.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <ProductDiagram />
          </AnimatedSection>
        </div>
      </section>

      {/* ══ INDUSTRIES ═══════════════════════════════════════ */}
      <section className="py-16 bg-[var(--bg-page)]" aria-labelledby="industries-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-8">
            <h2 id="industries-heading" className="text-2xl sm:text-3xl font-black text-[var(--text-primary)] mb-2">
              Built for Every Industry
            </h2>
            <p className="text-[var(--text-secondary)] text-sm">CardGit is used across UK industries and professional roles.</p>
          </AnimatedSection>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {INDUSTRIES.map(({ label, to, icon: Icon }, i) => (
              <AnimatedSection key={to} delay={i * 0.04}>
                <Link
                  to={to}
                  className="group flex flex-col items-center gap-2 bg-[var(--bg-surface)] border border-slate-200/80 dark:border-slate-700/40 rounded-2xl p-4 hover:border-indigo-300 dark:hover:border-indigo-600 hover:bg-indigo-50/80 dark:hover:bg-indigo-950/30 hover:-translate-y-0.5 transition-all duration-200 text-center focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none shadow-sm hover:shadow-md"
                >
                  <Icon className="w-6 h-6 text-indigo-500 group-hover:text-indigo-600 transition-colors" aria-hidden="true" />
                  <span className="font-semibold text-xs text-[var(--text-primary)] leading-tight">{label}</span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ══════════════════════════════════════════════ */}
      <section className="py-16 bg-[var(--bg-surface)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <CTABanner
              headline="Create Your Free Card & Explore Networking Events"
              subheadline="Join professionals and businesses across the UK using CardGit to network smarter."
              primaryCTA={{ label: 'Create Free Card', href: 'https://app.cardgit.com/auth/signup' }}
              secondaryCTA={{ label: 'Discover Events', href: 'https://events.cardgit.com' }}
            />
          </AnimatedSection>
        </div>
      </section>

      {/* ══ FAQ PREVIEW ══════════════════════════════════════ */}
      <section className="py-16 bg-[var(--bg-page)]" aria-labelledby="faq-preview-heading">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-8">
            <h2 id="faq-preview-heading" className="text-2xl sm:text-3xl font-black text-[var(--text-primary)] mb-2">
              Common Questions
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.08}>
            <FAQAccordion items={homeFAQItems} />
          </AnimatedSection>
          <AnimatedSection delay={0.15} className="text-center mt-7">
            <Link to="/faq" className="inline-flex items-center gap-2 text-sm text-indigo-600 dark:text-indigo-400 font-semibold hover:gap-3 transition-all focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none rounded">
              View all FAQs <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
