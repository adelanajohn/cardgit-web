import { useParams } from 'react-router-dom'
import { Check, X } from 'lucide-react'
import SEO from '@/components/SEO'
import AnimatedSection from '@/components/ui/AnimatedSection'
import CTABanner from '@/components/ui/CTABanner'
import { SITE_URL } from '@/data/seo'
import NotFound from './NotFound'

interface ComparisonData {
  title: string
  description: string
  cardgitName: string
  alternativeName: string
  cardgitIntro: string
  alternativeIntro: string
  features: { feature: string; cardgit: boolean | string; alternative: boolean | string }[]
  whoCardgitIsFor: string
  whoAlternativeIsFor: string
}

const COMPARISONS: Record<string, ComparisonData> = {
  'cardgit-vs-paper-business-cards': {
    title: 'CardGit vs Paper Business Cards',
    description: 'A practical comparison of digital business cards versus traditional printed cards — covering cost, functionality, analytics, and environmental impact.',
    cardgitName: 'CardGit',
    alternativeName: 'Paper Business Cards',
    cardgitIntro: 'CardGit is a digital business card platform that replaces physical paper cards with a QR-shareable digital profile. It includes lead capture, appointment booking, analytics, and team management.',
    alternativeIntro: 'Paper business cards are physical printed cards containing name, title, phone, email, and website. They are shared in person and cannot be updated after printing.',
    features: [
      { feature: 'Shareable via QR code', cardgit: true, alternative: false },
      { feature: 'Shareable via link (email, social)', cardgit: true, alternative: false },
      { feature: 'No app required to view', cardgit: true, alternative: 'N/A' },
      { feature: 'Instant updates after creation', cardgit: true, alternative: false },
      { feature: 'Lead capture forms', cardgit: true, alternative: false },
      { feature: 'Appointment booking', cardgit: true, alternative: false },
      { feature: 'Social media links', cardgit: true, alternative: 'Limited (URL only)' },
      { feature: 'Product/service showcase', cardgit: true, alternative: false },
      { feature: 'Analytics (views, clicks)', cardgit: true, alternative: false },
      { feature: 'Multiple cards', cardgit: true, alternative: 'Reprint required' },
      { feature: 'Team management', cardgit: true, alternative: false },
      { feature: 'Eco-friendly', cardgit: true, alternative: false },
      { feature: 'No printing cost', cardgit: true, alternative: false },
      { feature: 'Free tier available', cardgit: true, alternative: false },
    ],
    whoCardgitIsFor: 'Professionals, sales teams, freelancers, and businesses who want a dynamic, trackable, and eco-friendly professional identity that can be updated instantly.',
    whoAlternativeIsFor: 'Situations where physical exchange is preferred, or where recipients are unlikely to have a smartphone to scan a QR code. Paper cards have no ongoing cost for basic use.',
  },
  'cardgit-events-vs-eventbrite': {
    title: 'CardGit Events vs Eventbrite',
    description: 'How CardGit Events compares to Eventbrite for UK conferences and professional networking events.',
    cardgitName: 'CardGit Events',
    alternativeName: 'Eventbrite',
    cardgitIntro: 'CardGit Events is a networking-first event management platform built specifically for conferences, summits, and professional networking events. It includes smart attendee matchmaking, live engagement tools, and deep analytics.',
    alternativeIntro: 'Eventbrite is a general-purpose event ticketing and discovery platform used across a wide range of event types, from concerts to conferences.',
    features: [
      { feature: 'Event registration and ticketing', cardgit: true, alternative: true },
      { feature: 'Stripe payment processing', cardgit: true, alternative: 'Own payment system' },
      { feature: 'Smart attendee matchmaking', cardgit: true, alternative: false },
      { feature: 'Speed networking sessions', cardgit: true, alternative: false },
      { feature: 'Live Q&A with moderation', cardgit: true, alternative: false },
      { feature: 'Live polls', cardgit: true, alternative: false },
      { feature: 'Social wall', cardgit: true, alternative: false },
      { feature: 'Gamification (points, leaderboard)', cardgit: true, alternative: false },
      { feature: 'Schedule builder with tracks', cardgit: true, alternative: 'Basic' },
      { feature: 'Speaker management', cardgit: true, alternative: 'Basic' },
      { feature: 'Sponsor booths with lead capture', cardgit: true, alternative: false },
      { feature: 'QR code check-in', cardgit: true, alternative: true },
      { feature: 'Event analytics', cardgit: true, alternative: true },
      { feature: 'UK-focused platform', cardgit: true, alternative: false },
      { feature: 'GDPR-conscious data handling', cardgit: true, alternative: 'General' },
    ],
    whoCardgitIsFor: 'Conference organisers, summit teams, and professional networking event managers who need robust attendee networking, engagement, and analytics tools built for the UK market.',
    whoAlternativeIsFor: 'General event ticketing across a wide variety of event types, particularly where event discovery and a large existing audience are priorities over attendee networking.',
  },
  'cardgit-events-vs-hopin': {
    title: 'CardGit Events vs Hopin',
    description: 'A feature comparison between CardGit Events and Hopin for hybrid and virtual event management.',
    cardgitName: 'CardGit Events',
    alternativeName: 'Hopin',
    cardgitIntro: 'CardGit Events is built on digital identity infrastructure, enabling AI-powered attendee matchmaking and richer networking outcomes than general event platforms.',
    alternativeIntro: 'Hopin is a virtual and hybrid event platform with a focus on online event experiences, video sessions, and virtual networking.',
    features: [
      { feature: 'Virtual event support', cardgit: true, alternative: true },
      { feature: 'In-person event support', cardgit: true, alternative: 'Limited' },
      { feature: 'Hybrid event support', cardgit: true, alternative: true },
      { feature: 'AI-powered smart matchmaking', cardgit: true, alternative: 'Basic' },
      { feature: 'Speed networking', cardgit: true, alternative: true },
      { feature: 'Live Q&A', cardgit: true, alternative: true },
      { feature: 'Gamification', cardgit: true, alternative: false },
      { feature: 'Digital identity integration', cardgit: true, alternative: false },
      { feature: 'Sponsor booths with lead capture', cardgit: true, alternative: true },
      { feature: 'Schedule builder with tracks', cardgit: true, alternative: true },
      { feature: 'Role-based team management', cardgit: true, alternative: 'Limited' },
      { feature: 'UK market focus', cardgit: true, alternative: false },
    ],
    whoCardgitIsFor: 'Event organisers who want networking to be the primary outcome — where every attendee leaves with meaningful professional connections, not just session replays.',
    whoAlternativeIsFor: 'Organisations primarily running virtual events where video content and online stage experiences are the main focus.',
  },
  'cardgit-events-vs-whova': {
    title: 'CardGit Events vs Whova',
    description: 'How CardGit Events compares to Whova for conference management — covering networking, engagement, and UK market fit.',
    cardgitName: 'CardGit Events',
    alternativeName: 'Whova',
    cardgitIntro: 'CardGit Events combines digital identity infrastructure with event management — enabling matchmaking that is significantly more targeted than profile-browsing alone.',
    alternativeIntro: 'Whova is a conference management platform used primarily in academic and professional conference settings, with a focus on session management and attendee networking.',
    features: [
      { feature: 'Smart matchmaking', cardgit: true, alternative: 'Profile browsing' },
      { feature: 'Speed networking', cardgit: true, alternative: false },
      { feature: 'Live Q&A with moderation', cardgit: true, alternative: true },
      { feature: 'Live polls', cardgit: true, alternative: true },
      { feature: 'Social wall', cardgit: true, alternative: true },
      { feature: 'Gamification', cardgit: true, alternative: true },
      { feature: 'Sponsor booths with lead capture', cardgit: true, alternative: true },
      { feature: 'Stripe ticketing', cardgit: true, alternative: 'Separate system' },
      { feature: 'Role-based team management', cardgit: true, alternative: 'Basic' },
      { feature: 'Feature flags per event', cardgit: true, alternative: false },
      { feature: 'Digital identity integration', cardgit: true, alternative: false },
      { feature: 'UK-focused support', cardgit: true, alternative: false },
    ],
    whoCardgitIsFor: 'UK-based conference organisers who want deep attendee networking outcomes combined with full event lifecycle management — registration through post-event analytics.',
    whoAlternativeIsFor: 'Conference organisers who are familiar with the Whova product and value its established feature set for academic and professional conference formats.',
  },
}

export default function ComparePage() {
  const { slug } = useParams<{ slug: string }>()
  const data = slug ? COMPARISONS[slug] : undefined

  if (!data) return <NotFound />

  return (
    <>
      <SEO
        title={`${data.title} | CardGit`}
        description={data.description}
        canonical={`${SITE_URL}/compare/${slug}`}
        breadcrumbs={[
          { name: 'Compare', item: `${SITE_URL}/compare` },
          { name: data.title, item: `${SITE_URL}/compare/${slug}` },
        ]}
      />

      <section className="pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-[var(--text-primary)] mb-4">{data.title}</h1>
            <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">{data.description}</p>
          </AnimatedSection>

          {/* Product intros */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <AnimatedSection delay={0.1}>
              <div className="bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-700/50 rounded-2xl p-6">
                <div className="text-xs font-bold text-indigo-500 uppercase tracking-wider mb-2">CardGit</div>
                <h2 className="font-bold text-[var(--text-primary)] mb-3">{data.cardgitName}</h2>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{data.cardgitIntro}</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 rounded-2xl p-6">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Alternative</div>
                <h2 className="font-bold text-[var(--text-primary)] mb-3">{data.alternativeName}</h2>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{data.alternativeIntro}</p>
              </div>
            </AnimatedSection>
          </div>

          {/* Feature comparison table */}
          <AnimatedSection delay={0.2} className="mb-12">
            <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-700/50">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800/50">
                    <th className="text-left px-6 py-4 text-sm font-semibold text-[var(--text-secondary)]" scope="col">Feature</th>
                    <th className="text-center px-6 py-4 text-sm font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20" scope="col">{data.cardgitName}</th>
                    <th className="text-center px-6 py-4 text-sm font-semibold text-[var(--text-secondary)]" scope="col">{data.alternativeName}</th>
                  </tr>
                </thead>
                <tbody>
                  {data.features.map((row, i) => (
                    <tr key={i} className={`border-t border-slate-200 dark:border-slate-700/50 ${i % 2 !== 0 ? 'bg-slate-50/50 dark:bg-slate-800/20' : ''}`}>
                      <td className="px-6 py-4 text-sm text-[var(--text-primary)] font-medium">{row.feature}</td>
                      <td className="text-center px-6 py-4 bg-indigo-50/50 dark:bg-indigo-900/10">
                        {row.cardgit === true ? <Check className="w-5 h-5 text-emerald-500 mx-auto" aria-label="Yes" /> :
                          row.cardgit === false ? <X className="w-5 h-5 text-slate-300 dark:text-slate-600 mx-auto" aria-label="No" /> :
                          <span className="text-xs text-[var(--text-secondary)]">{row.cardgit}</span>}
                      </td>
                      <td className="text-center px-6 py-4">
                        {row.alternative === true ? <Check className="w-5 h-5 text-emerald-500 mx-auto" aria-label="Yes" /> :
                          row.alternative === false ? <X className="w-5 h-5 text-slate-300 dark:text-slate-600 mx-auto" aria-label="No" /> :
                          <span className="text-xs text-[var(--text-secondary)]">{row.alternative}</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>

          {/* Who it's for */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <AnimatedSection delay={0.25}>
              <div className="bg-[var(--bg-surface)] border border-slate-200 dark:border-slate-700/50 rounded-2xl p-6">
                <h3 className="font-bold text-indigo-600 dark:text-indigo-400 mb-3">Who {data.cardgitName} is best for</h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{data.whoCardgitIsFor}</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <div className="bg-[var(--bg-surface)] border border-slate-200 dark:border-slate-700/50 rounded-2xl p-6">
                <h3 className="font-bold text-[var(--text-secondary)] mb-3">Who {data.alternativeName} is best for</h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{data.whoAlternativeIsFor}</p>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.35}>
            <CTABanner
              headline={`Try CardGit Free Today`}
              subheadline="No credit card required. Create your digital business card or start your first event in minutes."
              primaryCTA={{ label: 'Create Free Card', href: 'https://app.cardgit.com/auth/signup' }}
              secondaryCTA={{ label: 'Explore Events', href: 'https://events.cardgit.com/register' }}
            />
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
