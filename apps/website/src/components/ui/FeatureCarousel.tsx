import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// Real screenshots — each matched to its carousel slide
import imgAppointment from '@/assets/cards/Appointment Booking Landing page (2).png'
import imgLeadCapture from '@/assets/cards/Smart Lead Capture Landing Page.png'
import imgAnalytics from '@/assets/cards/Business Card Analytics Landing Page.png'
import imgMatchmaking from '@/assets/events/Smart Networking Landing Page.png'
import imgGamification from '@/assets/events/Gamification Landing Page (1).png'

// Additional card screenshots
import imgQRCode from '@/assets/cards/Digital Business Card QR Code Landing page.png'
import imgShowcase from '@/assets/cards/Interactive Product & Service Showcase Landing Page.png'
import imgMultiCard from '@/assets/cards/Multiple Digital Business Cards Landing page.png'
import imgSocialMedia from '@/assets/cards/Social Media Integration Landing page.png'
import imgTeamMgmt from '@/assets/cards/Team Card Management Landing page.png'
import imgBenefit from '@/assets/cards/Benefit Desktop (1).png'

// Additional events screenshots
import imgAttendeeNetworking from '@/assets/events/Attendee Networking Landing Page.png'
import imgChallenges from '@/assets/events/Challenges Landing Page.png'
import imgEventAgenda from '@/assets/events/Event Agenda Landing Page (3).png'
import imgLeaderboard from '@/assets/events/Leaderboard Landing Page.png'
import imgLivePoll from '@/assets/events/Live Poll Landing Page.png'
import imgSocialFeed from '@/assets/events/Social Feed Landing Page.png'
import imgSpeakerLineup from '@/assets/events/Speaker Line-up Landing Page.png'

interface Slide {
  id: string
  badge: string
  title: string
  subtitle: string
  bullets: string[]
  gradient: string
  accentColor: string
  visual: React.ReactNode
}

/** Shared image wrapper — fixed height matches events.png (495px) so all slides are uniform */
function SlideImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 h-[260px] sm:h-[320px] lg:h-[360px]">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover object-top"
          loading="eager"
          decoding="async"
        />
        {/* subtle overlay */}
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 pointer-events-none" aria-hidden="true" />
      </div>
    </div>
  )
}

const SLIDES: Slide[] = [
  {
    id: 'appointment',
    badge: 'Digital Business Cards',
    title: 'Appointment\nBooking',
    subtitle: 'Let clients book meetings directly from your card — no back-and-forth required.',
    bullets: [
      'Let clients schedule meetings, consultations, or calls directly from your card.',
      'Remove the need for back-and-forth messaging or external booking tools.',
      'Sync networking directly with your availability and business workflow.',
      'Increase conversion from interest to confirmed meetings.',
    ],
    gradient: 'from-[#0f0c29] via-[#1a1060] to-[#24243e]',
    accentColor: '#818cf8',
    visual: (
      <SlideImage
        src={imgAppointment}
        alt="CardGit appointment booking feature showing meeting scheduler integrated into a digital business card"
      />
    ),
  },
  {
    id: 'lead-capture',
    badge: 'Digital Business Cards',
    title: 'Lead\nCapture',
    subtitle: 'Turn every profile view into a qualified lead — automatically.',
    bullets: [
      'Visitors submit their contact details directly from your digital card.',
      'All leads stored in your dashboard, ready to export or follow up.',
      'Customise capture fields to collect the information you actually need.',
      'No third-party forms or CRM integrations required to get started.',
    ],
    gradient: 'from-[#0d1b2a] via-[#1b2a1b] to-[#0f2027]',
    accentColor: '#34d399',
    visual: (
      <SlideImage
        src={imgLeadCapture}
        alt="CardGit smart lead capture showing contact form embedded in a digital business card profile"
      />
    ),
  },
  {
    id: 'analytics',
    badge: 'Digital Business Cards',
    title: 'Real-Time\nAnalytics',
    subtitle: "Understand who's viewing your card, what they click, and where they're from.",
    bullets: [
      'Track profile views, link clicks, and engagement in real time.',
      'See audience location data — discover your reach across the UK and beyond.',
      'Identify which content drives the most enquiries and optimise your card.',
      'Weekly and monthly trend graphs to measure networking performance.',
    ],
    gradient: 'from-[#0c0c1e] via-[#1a0a2e] to-[#16213e]',
    accentColor: '#a78bfa',
    visual: (
      <SlideImage
        src={imgAnalytics}
        alt="CardGit analytics dashboard showing 847 profile views, 124 clicks, 32 leads, and weekly engagement chart"
      />
    ),
  },
  {
    id: 'matchmaking',
    badge: 'CardGit Events',
    title: 'Smart\nMatchmaking',
    subtitle: 'AI-powered attendee connections based on your CardGit profile and goals.',
    bullets: [
      'Suggest relevant attendee connections based on profile data and interests.',
      'Attendees set what they are looking for and what they can offer.',
      'Matchmaking runs before, during, and after the event.',
      'Results in more meaningful connections and higher attendee satisfaction.',
    ],
    gradient: 'from-[#1a0533] via-[#2d1065] to-[#0f0728]',
    accentColor: '#c084fc',
    visual: (
      <SlideImage
        src={imgMatchmaking}
        alt="CardGit Events smart networking feature showing AI-powered attendee match suggestions with compatibility scores"
      />
    ),
  },
  {
    id: 'gamification',
    badge: 'CardGit Events',
    title: 'Gamification\n& Leaderboard',
    subtitle: 'Points, badges, and challenges that turn passive attendees into active networkers.',
    bullets: [
      'Award points for networking interactions, sessions, Q&A, and challenges.',
      'Live leaderboard displayed throughout the event drives participation.',
      'Achievement badges unlock at milestones — attendees collect and share them.',
      "Customisable challenges per event — set goals aligned to your event's purpose.",
    ],
    gradient: 'from-[#1a0a00] via-[#2d1a00] to-[#1f1100]',
    accentColor: '#fb923c',
    visual: (
      <SlideImage
        src={imgGamification}
        alt="CardGit Events gamification feature showing live leaderboard with points, badges, and achievement challenges"
      />
    ),
  },

  // ── Additional Digital Business Card slides ──────────────

  {
    id: 'qr-code',
    badge: 'Digital Business Cards',
    title: 'QR Code\nSharing',
    subtitle: 'Share your complete professional profile with a single scan — no app required.',
    bullets: [
      'Every card generates a unique QR code and shareable link instantly.',
      'Anyone can view your profile without downloading an app.',
      'Share in person, in email signatures, on slides, or via message.',
      'Works on any device — smartphone, tablet, or desktop browser.',
    ],
    gradient: 'from-[#0a0a1a] via-[#0f1635] to-[#0a1628]',
    accentColor: '#60a5fa',
    visual: (
      <SlideImage
        src={imgQRCode}
        alt="CardGit digital business card QR code sharing feature showing a scannable code linked to a professional profile"
      />
    ),
  },
  {
    id: 'showcase',
    badge: 'Digital Business Cards',
    title: 'Product &\nService Showcase',
    subtitle: 'Turn your card into an interactive catalogue with Buy, Enquire, and Book Now buttons.',
    bullets: [
      'Feature products and services with images, descriptions, and pricing.',
      'Add direct call-to-action buttons — Buy, Enquire, Book Now.',
      'Update your showcase instantly — no reprinting, no app update.',
      'Ideal for freelancers, agencies, consultants, and product businesses.',
    ],
    gradient: 'from-[#0a1a0a] via-[#162816] to-[#0a1f1a]',
    accentColor: '#4ade80',
    visual: (
      <SlideImage
        src={imgShowcase}
        alt="CardGit interactive product and service showcase showing product cards with CTA buttons on a digital business card"
      />
    ),
  },
  {
    id: 'multiple-cards',
    badge: 'Digital Business Cards',
    title: 'Multiple\nCards',
    subtitle: 'Create separate cards for every context — business, personal, events, and more.',
    bullets: [
      'Different cards for different audiences — each with its own QR code.',
      'Switch between cards and share the right identity at the right time.',
      'Separate cards for business, personal brand, events, or side projects.',
      'All cards managed from a single CardGit account.',
    ],
    gradient: 'from-[#1a0a1a] via-[#2a1040] to-[#1a0835]',
    accentColor: '#e879f9',
    visual: (
      <SlideImage
        src={imgMultiCard}
        alt="CardGit multiple digital business cards feature showing several cards for different contexts in one account"
      />
    ),
  },
  {
    id: 'social-media',
    badge: 'Digital Business Cards',
    title: 'Social Media\nIntegration',
    subtitle: 'All your social profiles in one place — LinkedIn, WhatsApp, Instagram, TikTok, and more.',
    bullets: [
      'Link LinkedIn, WhatsApp, Instagram, TikTok, Facebook, X, and YouTube.',
      'All social profiles displayed as tap-to-open buttons on your card.',
      'Add or remove social links instantly — no reprinting required.',
      'Drive traffic to the platforms most relevant to your audience.',
    ],
    gradient: 'from-[#0a0a1a] via-[#1a0a30] to-[#0f0a20]',
    accentColor: '#f472b6',
    visual: (
      <SlideImage
        src={imgSocialMedia}
        alt="CardGit social media integration showing LinkedIn, WhatsApp, Instagram and other social links on a digital card"
      />
    ),
  },
  {
    id: 'team-management',
    badge: 'Digital Business Cards',
    title: 'Team\nManagement',
    subtitle: 'Manage every employee card from one dashboard — consistent branding at scale.',
    bullets: [
      'Define brand templates that all employee cards inherit automatically.',
      'Add, update, or deactivate staff cards from a central admin dashboard.',
      'Lock brand-sensitive fields while allowing personal detail edits.',
      'Aggregate analytics across the entire team in one report.',
    ],
    gradient: 'from-[#0a1020] via-[#101828] to-[#0a1520]',
    accentColor: '#38bdf8',
    visual: (
      <SlideImage
        src={imgTeamMgmt}
        alt="CardGit team card management dashboard showing centralised control of all employee digital business cards"
      />
    ),
  },
  {
    id: 'benefit',
    badge: 'Digital Business Cards',
    title: 'Professional\nIdentity',
    subtitle: 'Your complete professional identity — always up to date, always shareable.',
    bullets: [
      'One link contains your complete professional identity and offerings.',
      'Always current — update once and every QR code and link reflects the change.',
      'GDPR-conscious data collection for UK and EU professionals.',
      'Eco-friendly — replace thousands of printed cards with one digital card.',
    ],
    gradient: 'from-[#080818] via-[#0f1228] to-[#080a1a]',
    accentColor: '#818cf8',
    visual: (
      <SlideImage
        src={imgBenefit}
        alt="CardGit digital business card benefit overview showing a complete professional profile with analytics and lead capture"
      />
    ),
  },

  // ── Additional CardGit Events slides ─────────────────────

  {
    id: 'attendee-networking',
    badge: 'CardGit Events',
    title: 'Attendee\nNetworking Hub',
    subtitle: 'A dedicated space for attendees to discover, connect, and message each other.',
    bullets: [
      'Browse all attendees with filtering by industry, role, and interests.',
      'Send connection requests and direct messages within the event app.',
      'Book 1-to-1 meetings directly from another attendee\'s profile.',
      'View your connection history and interaction summary post-event.',
    ],
    gradient: 'from-[#150530] via-[#200a50] to-[#0f0328]',
    accentColor: '#a78bfa',
    visual: (
      <SlideImage
        src={imgAttendeeNetworking}
        alt="CardGit Events attendee networking hub showing attendee discovery, connection requests, and messaging interface"
      />
    ),
  },
  {
    id: 'challenges',
    badge: 'CardGit Events',
    title: 'Event\nChallenges',
    subtitle: 'Set goals and challenges that motivate attendees to network and engage actively.',
    bullets: [
      'Create custom challenges — meet 5 new people, attend 3 sessions, ask a question.',
      'Attendees earn points and badges when they complete each challenge.',
      'Challenges can be tied to sponsor booths for measurable exhibitor ROI.',
      'Configure challenges independently for each event format and audience.',
    ],
    gradient: 'from-[#1a0800] via-[#2a1200] to-[#1a0c00]',
    accentColor: '#fbbf24',
    visual: (
      <SlideImage
        src={imgChallenges}
        alt="CardGit Events challenges feature showing custom networking challenges with points and completion tracking"
      />
    ),
  },
  {
    id: 'event-agenda',
    badge: 'CardGit Events',
    title: 'Event\nSchedule Builder',
    subtitle: 'Build multi-track agendas with drag-and-drop simplicity and reusable templates.',
    bullets: [
      'Drag-and-drop schedule builder supports sessions, tracks, and rooms.',
      'Reusable session templates speed up agenda creation for recurring formats.',
      'Attendees build personal schedules from the full agenda.',
      'Real-time updates — changes push immediately to all attendee devices.',
    ],
    gradient: 'from-[#001a10] via-[#002818] to-[#001a14]',
    accentColor: '#34d399',
    visual: (
      <SlideImage
        src={imgEventAgenda}
        alt="CardGit Events schedule builder showing a multi-track event agenda with drag-and-drop session management"
      />
    ),
  },
  {
    id: 'leaderboard',
    badge: 'CardGit Events',
    title: 'Live\nLeaderboard',
    subtitle: 'A real-time ranking that keeps every attendee engaged throughout the event.',
    bullets: [
      'Points accumulate in real time as attendees network, attend, and engage.',
      'Leaderboard visible throughout the event — drives friendly competition.',
      'Top performers can be recognised publicly during keynotes and breaks.',
      'Resets per event — every attendee starts fresh each time.',
    ],
    gradient: 'from-[#1a0800] via-[#2d1400] to-[#1a0a00]',
    accentColor: '#f97316',
    visual: (
      <SlideImage
        src={imgLeaderboard}
        alt="CardGit Events live leaderboard showing ranked attendees with points, names, and achievement badges"
      />
    ),
  },
  {
    id: 'live-polls',
    badge: 'CardGit Events',
    title: 'Live\nPolls',
    subtitle: 'Push real-time polls during sessions — get instant audience responses on screen.',
    bullets: [
      'Create polls in advance or spontaneously during any session.',
      'Results display immediately on organiser and attendee screens.',
      'Multiple poll types: single choice, multiple choice, word cloud, rating.',
      'Use polls to drive decisions, gauge sentiment, or energise the room.',
    ],
    gradient: 'from-[#001828] via-[#002035] to-[#001525]',
    accentColor: '#22d3ee',
    visual: (
      <SlideImage
        src={imgLivePoll}
        alt="CardGit Events live poll feature showing an active poll with real-time results displayed to attendees"
      />
    ),
  },
  {
    id: 'social-feed',
    badge: 'CardGit Events',
    title: 'Social\nWall',
    subtitle: 'A live community feed that captures the energy of your event in real time.',
    bullets: [
      'Attendees post updates, photos, and reactions throughout the event.',
      'Social wall visible on the event app and on display screens at the venue.',
      'Organisers moderate content before it appears publicly.',
      'Creates a shared record of event highlights for post-event sharing.',
    ],
    gradient: 'from-[#0a001a] via-[#160528] to-[#0a0020]',
    accentColor: '#c084fc',
    visual: (
      <SlideImage
        src={imgSocialFeed}
        alt="CardGit Events social wall showing a live community feed with attendee posts, photos, and reactions"
      />
    ),
  },
  {
    id: 'speaker-lineup',
    badge: 'CardGit Events',
    title: 'Speaker\nManagement',
    subtitle: 'Showcase your speakers and give attendees a way to connect with them directly.',
    bullets: [
      'Full speaker profiles with bio, headshot, session links, and social profiles.',
      'Attendees browse the speaker directory and send connection requests.',
      'Speakers manage their own profile information via a dedicated portal.',
      'Speaker directory is SEO-friendly and publicly accessible before the event.',
    ],
    gradient: 'from-[#001020] via-[#001830] to-[#000f1e]',
    accentColor: '#7dd3fc',
    visual: (
      <SlideImage
        src={imgSpeakerLineup}
        alt="CardGit Events speaker line-up showing a speaker directory with profiles, session assignments, and networking options"
      />
    ),
  },
]

export default function FeatureCarousel() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const go = useCallback((idx: number) => {
    setDirection(idx > current ? 1 : -1)
    setCurrent(idx)
  }, [current])

  const next = useCallback(() => {
    setDirection(1)
    setCurrent((c) => (c + 1) % SLIDES.length)
  }, [])

  const prev = useCallback(() => {
    setDirection(-1)
    setCurrent((c) => (c - 1 + SLIDES.length) % SLIDES.length)
  }, [])

  useEffect(() => {
    if (paused) return
    timerRef.current = setInterval(next, 5000)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [paused, next])

  const slide = SLIDES[current]

  const variants = {
    enter: (d: number) => ({ opacity: 0, x: d > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, x: d > 0 ? -60 : 60 }),
  }

  return (
    <div
      className="relative w-full rounded-3xl overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
    >
      {/* Background gradient */}
      <AnimatePresence initial={false}>
        <motion.div
          key={`bg-${current}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className={`absolute inset-0 bg-gradient-to-br ${slide.gradient}`}
          aria-hidden="true"
        />
      </AnimatePresence>

      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJuIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWx0ZXI9InVybCgjbikiIG9wYWNpdHk9IjEiLz48L3N2Zz4=')]" aria-hidden="true" />

      {/* Glow blobs */}
      <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-20 pointer-events-none" style={{ background: slide.accentColor }} aria-hidden="true" />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 rounded-full blur-3xl opacity-10 pointer-events-none" style={{ background: slide.accentColor }} aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center px-6 sm:px-10 lg:px-14 py-10 sm:py-14 min-h-[420px] sm:min-h-[480px]">

        {/* Copy */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={`copy-${current}`}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            <span
              className="inline-flex items-center text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4 border"
              style={{ color: slide.accentColor, borderColor: `${slide.accentColor}40`, background: `${slide.accentColor}15` }}
            >
              {slide.badge}
            </span>

            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.05] mb-3 whitespace-pre-line">
              {slide.title}
            </h3>

            <p className="text-white/60 text-sm sm:text-base mb-6 leading-relaxed max-w-sm">
              {slide.subtitle}
            </p>

            <ul className="space-y-2.5">
              {slide.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5" style={{ background: slide.accentColor }} aria-hidden="true" />
                  <span className="text-white/75 text-sm leading-snug">{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>

        {/* Visual */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={`visual-${current}`}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, delay: 0.05, ease: [0.4, 0, 0.2, 1] }}
            className="flex items-center justify-center"
          >
            {slide.visual}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Prev / Next */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur flex items-center justify-center text-white transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
      >
        <ChevronLeft className="w-5 h-5" aria-hidden="true" />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur flex items-center justify-center text-white transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
      >
        <ChevronRight className="w-5 h-5" aria-hidden="true" />
      </button>

      {/* Dot nav */}
      <div className="relative z-10 flex items-center justify-center gap-2 pb-5">
        {SLIDES.map((s, i) => (
          <button
            key={s.id}
            onClick={() => go(i)}
            aria-label={`Go to slide ${i + 1}: ${s.id}`}
            aria-current={i === current ? 'true' : undefined}
            className="focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none rounded-full transition-all duration-300"
          >
            <span
              className="block rounded-full transition-all duration-300"
              style={{
                width: i === current ? 24 : 6,
                height: 6,
                background: i === current ? slide.accentColor : 'rgba(255,255,255,0.3)',
              }}
            />
          </button>
        ))}
      </div>

      {/* Progress bar */}
      {!paused && (
        <motion.div
          key={`progress-${current}`}
          className="absolute bottom-0 left-0 h-0.5 z-20"
          style={{ background: slide.accentColor }}
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 5, ease: 'linear' }}
          aria-hidden="true"
        />
      )}
    </div>
  )
}
