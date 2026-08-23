import { useSearchParams, Link } from 'react-router-dom'
import { QrCode, Target, Calendar, Share2, ShoppingBag, Users, Layers, BarChart2, Brain, Zap, Trophy, MessageSquare, Vote, Wifi, Star, Lock, Settings } from 'lucide-react'
import SEO from '@/components/SEO'
import AnimatedSection from '@/components/ui/AnimatedSection'
import FeatureCard from '@/components/ui/FeatureCard'
import CTABanner from '@/components/ui/CTABanner'
import { pageSEO, SITE_URL } from '@/data/seo'

const CARD_FEATURES = [
  { icon: QrCode, title: 'QR Code Sharing', description: 'Every card generates a unique QR code. Anyone can view your profile by scanning — no app required.' },
  { icon: Target, title: 'Lead Capture', description: 'Card viewers submit their contact details directly from your digital card, creating an instant lead record.' },
  { icon: Calendar, title: 'Appointment Booking', description: 'Clients schedule meetings directly from your card. No email back-and-forth required.' },
  { icon: Share2, title: 'Social Media Integration', description: 'Link LinkedIn, WhatsApp, Instagram, TikTok, Facebook, X, and YouTube in a single card.' },
  { icon: ShoppingBag, title: 'Product & Service Showcase', description: 'Display products and services with images, descriptions, and Buy, Enquire, Book Now buttons.' },
  { icon: BarChart2, title: 'Analytics Dashboard', description: 'Real-time analytics track views, clicks, engagement, and audience location data.' },
  { icon: Users, title: 'Team Management', description: 'Centrally manage all employee cards, enforce brand consistency, and handle onboarding.' },
  { icon: Layers, title: 'Multiple Cards', description: 'Create separate cards for different contexts — business, personal, events, side projects.' },
]

const EVENTS_FEATURES = [
  { icon: Brain, title: 'Smart Matchmaking', description: 'AI-powered attendee matching based on CardGit profile data, interests, and professional goals.' },
  { icon: Zap, title: 'Speed Networking', description: 'Structured sessions with brief, focused introductions between multiple attendees.' },
  { icon: MessageSquare, title: 'Live Q&A', description: 'Attendees submit questions during sessions with optional organiser moderation.' },
  { icon: Vote, title: 'Live Polls', description: 'Create and push polls during sessions. Results display in real time.' },
  { icon: Wifi, title: 'Social Wall', description: 'Live community feed throughout the event, with moderation controls for organisers.' },
  { icon: Trophy, title: 'Gamification', description: 'Points, leaderboards, challenges, achievements, and badges drive engagement.' },
  { icon: Calendar, title: 'Schedule Builder', description: 'Drag-and-drop multi-track agenda builder with reusable session templates.' },
  { icon: Users, title: 'Role-Based Access', description: 'Seven team roles give every team member exactly the access they need.' },
  { icon: Settings, title: 'Stripe Ticketing', description: 'Free, paid, early-bird, VIP, and group tickets with promo codes and multi-currency support.' },
  { icon: Star, title: 'Speaker Management', description: 'Speaker profiles, session assignments, and a public speaker directory.' },
  { icon: ShoppingBag, title: 'Sponsor Booths', description: 'Digital sponsor booths with lead capture for measurable exhibitor ROI.' },
  { icon: Lock, title: 'Feature Flags', description: 'Enable or disable networking, polls, Q&A, gamification, and social wall per event.' },
]

type Tab = 'cards' | 'events'

export default function Features() {
  const [searchParams] = useSearchParams()
  // ?tab=cards (default) or ?tab=events
  const raw = searchParams.get('tab')
  const activeTab: Tab = raw === 'events' ? 'events' : 'cards'

  const seo = pageSEO['features']

  // Per-tab canonical so each URL is distinct
  const canonical = activeTab === 'events'
    ? `${SITE_URL}/features?tab=events`
    : `${SITE_URL}/features?tab=cards`

  return (
    <>
      <SEO
        title={activeTab === 'events'
          ? 'Events Platform Features | CardGit'
          : 'Digital Card Features | CardGit'}
        description={activeTab === 'events'
          ? 'Explore all CardGit Events features: smart matchmaking, registration, ticketing, schedule builder, speaker management, gamification, live Q&A, polls, and analytics.'
          : 'Explore all CardGit digital business card features: QR code sharing, lead capture, appointment booking, analytics, team management, and more.'}
        canonical={canonical}
        breadcrumbs={[{ name: 'Features', item: `${SITE_URL}/features` }]}
      />

      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-black text-[var(--text-primary)] mb-4">
              Platform Features
            </h1>
            <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto mb-8">
              CardGit is a digital identity and professional networking platform with two products. Explore all features below.
            </p>

            {/* URL-driven tabs — use <Link> so the URL updates and browser history works */}
            <div className="inline-flex bg-slate-100 dark:bg-slate-800 rounded-xl p-1 gap-1" role="tablist" aria-label="Feature tabs">
              <Link
                to="/features?tab=cards"
                role="tab"
                aria-selected={activeTab === 'cards'}
                aria-controls="cards-panel"
                id="tab-cards"
                className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none ${
                  activeTab === 'cards'
                    ? 'bg-white dark:bg-slate-700 text-[var(--text-primary)] shadow-sm'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                Digital Cards
              </Link>
              <Link
                to="/features?tab=events"
                role="tab"
                aria-selected={activeTab === 'events'}
                aria-controls="events-panel"
                id="tab-events"
                className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none ${
                  activeTab === 'events'
                    ? 'bg-white dark:bg-slate-700 text-[var(--text-primary)] shadow-sm'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                Events Platform
              </Link>
            </div>
          </AnimatedSection>

          <div
            id="cards-panel"
            role="tabpanel"
            aria-labelledby="tab-cards"
            hidden={activeTab !== 'cards'}
          >
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {CARD_FEATURES.map((f, i) => (
                <AnimatedSection key={i} delay={i * 0.05}>
                  <FeatureCard icon={f.icon} title={f.title} description={f.description} />
                </AnimatedSection>
              ))}
            </div>
          </div>

          <div
            id="events-panel"
            role="tabpanel"
            aria-labelledby="tab-events"
            hidden={activeTab !== 'events'}
          >
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {EVENTS_FEATURES.map((f, i) => (
                <AnimatedSection key={i} delay={i * 0.05}>
                  <FeatureCard icon={f.icon} title={f.title} description={f.description} variant="events" />
                </AnimatedSection>
              ))}
            </div>
          </div>

          <AnimatedSection>
            <CTABanner
              headline="Ready to Get Started?"
              subheadline="Create your free digital business card or start your first event today."
              primaryCTA={{ label: 'Create Free Card', href: 'https://app.cardgit.com/auth/signup' }}
              secondaryCTA={{ label: 'Explore Events', href: 'https://events.cardgit.com/register' }}
            />
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
