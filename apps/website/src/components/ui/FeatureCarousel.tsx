import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// Real screenshots — each matched to its carousel slide
import imgAppointment from '@/assets/cards/Appointment Booking Landing page (2).png'
import imgLeadCapture from '@/assets/cards/Smart Lead Capture Landing Page.png'
import imgAnalytics from '@/assets/cards/Business Card Analytics Landing Page.png'
import imgMatchmaking from '@/assets/events/Smart Networking Landing Page.png'
import imgGamification from '@/assets/events/Gamification Landing Page (1).png'

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

/** Shared image wrapper — consistent sizing, rounded corners, drop shadow */
function SlideImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
        <img
          src={src}
          alt={alt}
          className="w-full h-auto block"
          loading="eager"
          decoding="async"
        />
        {/* subtle overlay so image sits well on dark bg */}
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
