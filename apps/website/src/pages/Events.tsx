import { useSearchParams, Link } from 'react-router-dom'
import {
  ArrowRight,
  Calendar,
  Users,
  Zap,
  Brain,
  Trophy,
  BarChart2,
  Settings,
  QrCode,
  MessageSquare,
  Vote,
  Wifi,
  Star,
  Lock,
  Image,
  MapPin,
  FileText,
  PlayCircle,
} from 'lucide-react'
import SEO from '@/components/SEO'
import AnimatedSection from '@/components/ui/AnimatedSection'
import FeatureCard from '@/components/ui/FeatureCard'
import FAQAccordion from '@/components/ui/FAQAccordion'
import CTABanner from '@/components/ui/CTABanner'
import { faqCategories } from '@/data/faq'
import { pageSEO, SITE_URL } from '@/data/seo'

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'CardGit Events',
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Event Management Software',
  operatingSystem: 'Web Browser, iOS, Android (PWA)',
  url: 'https://events.cardgit.com',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP', description: 'Free tier available for small events.' },
  description:
    'CardGit Events is a networking-first event management platform for conferences, summits, expos, and business networking events in the UK. Supports in-person, virtual, and hybrid events with registration, ticketing, smart matchmaking, live Q&A, polls, gamification, and analytics.',
  featureList: [
    'Event registration and ticketing',
    'Smart attendee matchmaking',
    'Speed networking',
    'Live Q&A with moderation',
    'Live polls',
    'Social wall',
    'Schedule builder with tracks',
    'Speaker management',
    'Sponsor management',
    'Gamification — points, leaderboard, achievements',
    'QR code check-in',
    'Event analytics and revenue reporting',
    'Hybrid and virtual event support',
    'Role-based team management',
  ],
  publisher: { '@type': 'Organization', name: 'CardGit', url: 'https://cardgit.com' },
}

const ORGANISER_FEATURES = [
  { icon: Calendar, title: 'Event Creation & Management', description: 'CardGit Events supports the full event lifecycle from draft through published, live, and completed — with per-event feature flags to customise each event independently.' },
  { icon: Users, title: 'Registration & Ticketing', description: 'Stripe-powered ticketing supports free, paid, early-bird, VIP, and group tickets. Multi-currency payments, promo codes, and custom registration fields are included.' },
  { icon: Settings, title: 'Role-Based Team Management', description: 'Eight roles — owner, admin, moderator, speaker manager, sponsor manager, analyst, check-in staff, and registration staff — give every team member exactly the access they need.' },
  { icon: Calendar, title: 'Schedule Builder', description: 'A drag-and-drop schedule builder supports multi-track agendas with reusable session templates, speaker assignments, and room allocation.' },
  { icon: Star, title: 'Speaker Management', description: 'Manage speaker profiles, session assignments, and a public speaker directory from a central dashboard.' },
  { icon: BarChart2, title: 'Sponsor & Exhibitor Management', description: 'Sponsor booths with lead capture tools give exhibitors measurable return on their event investment.' },
  { icon: MessageSquare, title: 'Q&A Moderation', description: 'Review and approve audience questions before they appear, ensuring relevance and appropriateness throughout sessions.' },
  { icon: QrCode, title: 'Check-in Portal', description: 'QR code check-in enables fast, accurate attendee check-in on event day with minimal staff training required.' },
  { icon: BarChart2, title: 'Analytics & Revenue Reports', description: 'Deep-dive analytics cover registrations, attendance, session engagement, sponsor interactions, and financial performance.' },
  { icon: Vote, title: 'Poll & Survey Builders', description: 'Create and push live polls during sessions. Post-event surveys collect feedback while the experience is fresh.' },
  { icon: Wifi, title: 'Email Management', description: 'Send targeted announcements and automated notifications to all attendees or specific segments.' },
  { icon: MapPin, title: 'Venue & Room Management', description: 'Define physical venues and individual rooms, assign sessions, and manage capacities.' },
  { icon: FileText, title: 'Data Export & Certificates', description: 'Export attendee and event data as CSV. Generate completion certificates for attendees and speakers.' },
  { icon: Lock, title: 'Per-Event Feature Flags', description: 'Enable or disable networking, polls, Q&A, gamification, social wall, and sponsors independently for each event.' },
]

const ATTENDEE_FEATURES = [
  { icon: Brain, title: 'Smart Matchmaking', description: 'Smart matchmaking automatically suggests relevant attendee connections based on CardGit profile data, stated interests, and professional goals.' },
  { icon: Zap, title: 'Speed Networking', description: 'Structured speed networking sessions give attendees brief, focused introductions with multiple other attendees in a short time window.' },
  { icon: MessageSquare, title: 'Live Q&A', description: 'Attendees submit questions to speakers during sessions. Organisers can choose open or moderated Q&A mode.' },
  { icon: Vote, title: 'Live Polls', description: 'Vote in real time during sessions. Results are displayed immediately to create shared engagement moments.' },
  { icon: Wifi, title: 'Social Wall', description: 'The social wall is a live community feed where attendees see and engage with event activity in real time.' },
  { icon: Calendar, title: 'Personal Schedule Builder', description: 'Attendees save sessions to a personal schedule and receive reminders as their chosen sessions approach.' },
  { icon: Trophy, title: 'Gamification', description: 'Points, leaderboards, challenges, achievement badges, and rewards give attendees tangible motivation to network and engage.' },
  { icon: MessageSquare, title: 'Group Chat & Direct Messages', description: 'Event-wide group chat keeps all attendees connected. Direct messaging enables private conversations between individuals.' },
  { icon: Calendar, title: 'Meeting Scheduler', description: 'Attendees request and book 1-to-1 meetings with other attendees directly within the event platform.' },
  { icon: Star, title: 'Speaker Directory', description: 'Browse speaker profiles and connect directly with speakers during and after the event.' },
  { icon: Users, title: 'Sponsor Booths', description: 'Visit sponsor digital booths, discover products and services, and submit your contact details for follow-up.' },
  { icon: Image, title: 'Photo Gallery & Highlights', description: 'Browse event photos and highlights throughout and after the event.' },
  { icon: PlayCircle, title: 'Presentation Viewer', description: 'Access session slides and presentation materials directly within the event platform.' },
  { icon: Users, title: 'Networking Hub & Connection Summary', description: 'Discover and connect with all attendees via the networking hub. Review connections made and interaction history in your connection summary.' },
  { icon: Lock, title: 'Privacy Controls', description: 'Incognito mode, Do Not Disturb, and networking opt-in/out controls give attendees full agency over their networking participation.' },
]

const EVENT_TYPES = [
  { title: 'In-Person Events', description: 'Full-featured physical event management with QR check-in, venue management, and on-site networking tools.', icon: Users },
  { title: 'Virtual Events', description: 'Remote event management with virtual networking hub and real-time engagement features for online attendees.', icon: Wifi },
  { title: 'Hybrid Events', description: 'Combine in-person and virtual attendee experiences in a single event with unified networking and analytics.', icon: Zap },
]

const TESTIMONIAL = {
  quote:
    'Attendee feedback consistently highlights the networking quality at our events. CardGit Events\' smart matchmaking means attendees spend time with the right people — not just anyone who happens to be standing nearby.',
  name: 'UK Business Summit Organiser',
  location: 'London, UK',
  result: '92% of attendees reported at least one valuable new connection',
}

export default function Events() {
  const [searchParams] = useSearchParams()
  // ?view=organiser (default) or ?view=attendee
  const rawView = searchParams.get('view')
  const activeTab: 'organiser' | 'attendee' = rawView === 'attendee' ? 'attendee' : 'organiser'

  const seo = pageSEO['events']
  const eventsFAQItems = faqCategories[1].items.slice(0, 10)

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: eventsFAQItems.map((item) => ({
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
        breadcrumbs={[{ name: 'CardGit Events', item: `${SITE_URL}/events` }]}
        prefetchUrls={['/pricing', '/features', '/use-cases/events-organisers']}
      />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950/30 dark:via-purple-950/30 dark:to-pink-950/20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              <Calendar className="w-4 h-4" aria-hidden="true" /> Networking-First Event Platform
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-[var(--text-primary)] mb-6 leading-tight">
              Run Smarter Events.{' '}
              <span className="text-gradient-events">Create More Meaningful Connections.</span>
            </h1>
            <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto mb-3 leading-relaxed">
              CardGit Events is the only event management platform built on digital identity infrastructure — so every attendee can network smarter, not just harder.
            </p>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto mb-10">
              Networking-first event platform powered by CardGit's digital identity infrastructure. Built for UK conferences, summits, and business networking events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://events.cardgit.com/register"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/30 focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:outline-none text-lg"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href="https://events.cardgit.com/events"
                className="inline-flex items-center justify-center gap-2 border-2 border-purple-200 dark:border-purple-700 text-purple-700 dark:text-purple-300 font-semibold px-8 py-4 rounded-xl hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:outline-none text-lg"
              >
                See It In Action
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Definition list — for AI parse-ability (Section 7.8) */}
      <section className="py-10 bg-[var(--bg-surface)] border-b border-slate-200 dark:border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <dl className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { term: 'Smart Matchmaking', desc: 'Smart matchmaking automatically suggests relevant attendee connections based on CardGit profile data, stated interests, and professional goals.' },
              { term: 'Speed Networking', desc: 'Structured sessions where attendees have brief, focused introductions with multiple other attendees in a short time window.' },
              { term: 'Live Q&A', desc: 'Attendees submit questions to speakers during sessions with optional organiser moderation before questions appear.' },
              { term: 'Gamification', desc: 'Points, leaderboards, challenges, and achievement badges drive attendee engagement and networking participation.' },
            ].map(({ term, desc }) => (
              <div key={term} className="flex flex-col">
                <dt className="font-semibold text-[var(--text-primary)] mb-1 text-sm">{term}</dt>
                <dd className="text-[var(--text-secondary)] text-sm leading-relaxed">{desc}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── EVENT TYPES ─────────────────────────────────────── */}
      <section className="py-16 bg-[var(--bg-surface)]" aria-labelledby="event-types-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10">
            <h2 id="event-types-heading" className="text-2xl md:text-3xl font-black text-[var(--text-primary)]">
              Supports Every Event Format
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            {EVENT_TYPES.map((et, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <FeatureCard icon={et.icon} title={et.title} description={et.description} variant="events" />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── ORGANISER / ATTENDEE TABS ────────────────────────── */}
      <section className="py-20 bg-[var(--bg-page)]" aria-labelledby="platform-features-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10">
            <h2 id="platform-features-heading" className="text-3xl md:text-4xl font-black text-[var(--text-primary)] mb-8">
              Platform Features
            </h2>

            <div className="inline-flex bg-slate-100 dark:bg-slate-800 rounded-xl p-1 gap-1" role="tablist" aria-label="View features by role">
              <Link
                to="/events?view=organiser"
                role="tab"
                aria-selected={activeTab === 'organiser'}
                aria-controls="organiser-panel"
                id="organiser-tab"
                className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:outline-none ${
                  activeTab === 'organiser'
                    ? 'bg-white dark:bg-slate-700 text-[var(--text-primary)] shadow-sm'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                Organiser View
              </Link>
              <Link
                to="/events?view=attendee"
                role="tab"
                aria-selected={activeTab === 'attendee'}
                aria-controls="attendee-panel"
                id="attendee-tab"
                className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:outline-none ${
                  activeTab === 'attendee'
                    ? 'bg-white dark:bg-slate-700 text-[var(--text-primary)] shadow-sm'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                Attendee View
              </Link>
            </div>
          </AnimatedSection>

          <div id="organiser-panel" role="tabpanel" aria-labelledby="organiser-tab" hidden={activeTab !== 'organiser'}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {ORGANISER_FEATURES.map((f, i) => (
                <AnimatedSection key={i} delay={i * 0.04}>
                  <FeatureCard icon={f.icon} title={f.title} description={f.description} variant="events" />
                </AnimatedSection>
              ))}
            </div>
          </div>

          <div id="attendee-panel" role="tabpanel" aria-labelledby="attendee-tab" hidden={activeTab !== 'attendee'}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {ATTENDEE_FEATURES.map((f, i) => (
                <AnimatedSection key={i} delay={i * 0.04}>
                  <FeatureCard icon={f.icon} title={f.title} description={f.description} variant="events" />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ─────────────────────────────────────── */}
      <section className="py-16 bg-[var(--bg-surface)]" aria-labelledby="who-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10">
            <h2 id="who-heading" className="text-2xl md:text-3xl font-black text-[var(--text-primary)] mb-4">
              Who Uses CardGit Events
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Conference Organisers',
                'Summit Teams',
                'Corporate Event Teams',
                'Business Networking Communities',
                'Industry Associations',
                'Event Agencies',
                'UK-Based Organisations',
              ].map((who) => (
                <span
                  key={who}
                  className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium"
                >
                  {who}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── SOCIAL PROOF / CASE STUDY ────────────────────────── */}
      <section className="py-16 bg-[var(--bg-page)]" aria-labelledby="social-proof-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950/40 dark:via-purple-950/40 dark:to-pink-950/30 border border-purple-200/50 dark:border-purple-700/30 rounded-3xl p-10 text-center">
              <Trophy className="w-10 h-10 text-purple-500 mx-auto mb-6" aria-hidden="true" />
              <blockquote className="text-xl text-[var(--text-secondary)] italic leading-relaxed mb-6 max-w-2xl mx-auto">
                "{TESTIMONIAL.quote}"
              </blockquote>
              <div className="font-semibold text-[var(--text-primary)] mb-1">{TESTIMONIAL.name}</div>
              <div className="text-sm text-[var(--text-secondary)] mb-4">{TESTIMONIAL.location}</div>
              <div className="inline-flex items-center gap-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-sm font-semibold px-4 py-2 rounded-full">
                ✓ {TESTIMONIAL.result}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="py-20 bg-[var(--bg-surface)]" aria-labelledby="events-faq-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 id="events-faq-heading" className="text-3xl md:text-4xl font-black text-[var(--text-primary)] mb-4">
              CardGit Events FAQs
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <FAQAccordion items={eventsFAQItems} />
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-20 bg-[var(--bg-page)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <CTABanner
              headline="Start Your First Event Free"
              subheadline="Create smarter, more connected events with CardGit Events."
              primaryCTA={{ label: 'Get Started Free', href: 'https://events.cardgit.com/register' }}
              secondaryCTA={{ label: 'Discover Events', href: 'https://events.cardgit.com/events' }}
              variant="events"
            />
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
