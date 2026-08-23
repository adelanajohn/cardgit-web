import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { CardIllustration, EventsIllustration } from './IllustrationCard'

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
      <div className="relative w-full max-w-sm mx-auto">
        {/* Phone mockup */}
        <div className="relative mx-auto w-44 sm:w-52">
          <div className="bg-slate-900 rounded-[32px] border-4 border-slate-700 shadow-2xl shadow-indigo-900/50 overflow-hidden aspect-[9/19]">
            <div className="bg-gradient-to-b from-indigo-900 to-slate-900 h-full p-3 flex flex-col gap-2">
              {/* Status bar */}
              <div className="flex justify-between text-slate-400 text-[8px] px-1">
                <span>9:41</span><span>●●●</span>
              </div>
              {/* Header */}
              <div className="bg-indigo-600/40 rounded-xl p-2">
                <p className="text-white text-[9px] font-bold">Book a Meeting</p>
                <p className="text-indigo-300 text-[7px]">Alex Chen · UX Designer</p>
              </div>
              {/* Time slots */}
              {['Mon 9:00 AM', 'Mon 11:00 AM', 'Tue 2:00 PM', 'Tue 4:00 PM'].map((t, i) => (
                <div key={t} className={`rounded-lg px-2 py-1.5 text-[8px] flex items-center justify-between ${i === 2 ? 'bg-indigo-500 text-white' : 'bg-slate-800 text-slate-300'}`}>
                  <span>{t}</span>
                  {i === 2 && <span className="text-[7px] bg-white/20 rounded px-1">✓ Selected</span>}
                </div>
              ))}
              {/* CTA */}
              <div className="mt-auto bg-indigo-600 rounded-xl py-2 text-center text-white text-[9px] font-bold">
                Book Appointment
              </div>
              {/* Confirmation chip */}
              <div className="bg-emerald-500/20 border border-emerald-500/40 rounded-lg px-2 py-1.5 text-center">
                <p className="text-emerald-400 text-[8px] font-semibold">✓ Appointment Confirmed</p>
                <p className="text-emerald-300/70 text-[6px]">We look forward to meeting you.</p>
              </div>
            </div>
          </div>
          {/* Glow */}
          <div className="absolute inset-0 -z-10 bg-indigo-500/20 blur-3xl rounded-full scale-75" aria-hidden="true" />
        </div>
        {/* Floating cards */}
        <div className="absolute -left-2 top-8 bg-slate-800/90 backdrop-blur border border-slate-700 rounded-xl p-2 shadow-lg text-left w-28">
          <p className="text-indigo-300 text-[8px] font-semibold">📅 20 Min Meeting</p>
          <p className="text-slate-400 text-[7px] mt-0.5">Consultation Call</p>
          <div className="mt-1 h-1.5 bg-indigo-600 rounded-full w-3/4" />
        </div>
        <div className="absolute -right-4 bottom-16 bg-slate-800/90 backdrop-blur border border-slate-700 rounded-xl p-2 shadow-lg text-left w-32">
          <p className="text-emerald-300 text-[8px] font-semibold">⚡ Instant Booking</p>
          <p className="text-slate-400 text-[7px] mt-0.5">No signup needed</p>
        </div>
      </div>
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
      <div className="relative w-full max-w-sm mx-auto">
        <div className="bg-slate-800/80 backdrop-blur rounded-2xl border border-slate-700 p-5 shadow-2xl shadow-emerald-900/30">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
              <span className="text-emerald-400 text-sm">📩</span>
            </div>
            <div>
              <p className="text-white text-sm font-bold">New Lead Captured</p>
              <p className="text-slate-400 text-xs">Just now · from your card</p>
            </div>
          </div>
          {[
            { label: 'Name', value: 'Sarah Johnson' },
            { label: 'Email', value: 'sarah@acme.co' },
            { label: 'Company', value: 'Acme Ltd, London' },
            { label: 'Message', value: 'Interested in Pro plan' },
          ].map(({ label, value }) => (
            <div key={label} className="mb-3">
              <p className="text-slate-500 text-[10px] uppercase tracking-wider mb-0.5">{label}</p>
              <p className="text-white text-sm font-medium">{value}</p>
            </div>
          ))}
          <div className="flex gap-2 mt-4">
            <div className="flex-1 bg-emerald-600 rounded-lg py-2 text-center text-white text-xs font-semibold">Follow Up</div>
            <div className="flex-1 bg-slate-700 rounded-lg py-2 text-center text-slate-300 text-xs font-semibold">Export</div>
          </div>
        </div>
        {/* Stats floating */}
        <div className="absolute -top-3 -right-3 bg-emerald-500 rounded-xl px-3 py-2 shadow-lg">
          <p className="text-white text-xs font-black">32 leads</p>
          <p className="text-emerald-100 text-[9px]">this month</p>
        </div>
      </div>
    ),
  },
  {
    id: 'analytics',
    badge: 'Digital Business Cards',
    title: 'Real-Time\nAnalytics',
    subtitle: 'Understand who\'s viewing your card, what they click, and where they\'re from.',
    bullets: [
      'Track profile views, link clicks, and engagement in real time.',
      'See audience location data — discover your reach across the UK and beyond.',
      'Identify which content drives the most enquiries and optimise your card.',
      'Weekly and monthly trend graphs to measure networking performance.',
    ],
    gradient: 'from-[#0c0c1e] via-[#1a0a2e] to-[#16213e]',
    accentColor: '#a78bfa',
    visual: (
      <div className="relative w-full max-w-sm mx-auto space-y-3">
        {/* Stats row */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: 'Views', value: '847', change: '+12%', color: 'text-violet-400' },
            { label: 'Clicks', value: '124', change: '+8%', color: 'text-blue-400' },
            { label: 'Leads', value: '32', change: '+24%', color: 'text-emerald-400' },
          ].map(({ label, value, change, color }) => (
            <div key={label} className="bg-slate-800/80 border border-slate-700 rounded-xl p-3 text-center">
              <p className={`text-xl font-black ${color}`}>{value}</p>
              <p className="text-slate-400 text-[9px] mt-0.5">{label}</p>
              <p className="text-emerald-400 text-[8px] mt-1">{change}</p>
            </div>
          ))}
        </div>
        {/* Bar chart */}
        <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-4">
          <p className="text-slate-300 text-xs font-semibold mb-3">Views this week</p>
          <div className="flex items-end gap-2 h-16">
            {[28, 45, 32, 58, 42, 71, 55].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div
                  className="w-full rounded-t-md bg-gradient-to-t from-violet-600 to-indigo-400"
                  style={{ height: `${(h / 71) * 100}%`, opacity: 0.6 + i * 0.06 }}
                />
                <span className="text-slate-500 text-[7px]">{['M','T','W','T','F','S','S'][i]}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Location */}
        <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-3">
          <p className="text-slate-300 text-xs font-semibold mb-2">Top locations</p>
          <div className="space-y-1.5">
            {[['London, UK', 68], ['Manchester, UK', 18], ['Birmingham, UK', 14]].map(([city, pct]) => (
              <div key={city as string} className="flex items-center gap-2">
                <span className="text-slate-400 text-[9px] w-28 truncate">{city}</span>
                <div className="flex-1 bg-slate-700 rounded-full h-1.5">
                  <div className="bg-violet-500 h-1.5 rounded-full" style={{ width: `${pct}%` }} />
                </div>
                <span className="text-slate-400 text-[9px] w-6 text-right">{pct}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
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
      <div className="relative w-full max-w-sm mx-auto space-y-2.5">
        <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-4">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-white text-[9px] font-bold">AI</div>
            <p className="text-purple-300 text-xs font-semibold">Smart Matchmaking</p>
            <span className="ml-auto text-[9px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full">Active</span>
          </div>
          {[
            { initials: 'JD', name: 'James D.', role: 'Senior Engineer · FinTech', pct: 98, color: 'bg-purple-500' },
            { initials: 'SR', name: 'Sarah R.', role: 'Product Lead · SaaS', pct: 94, color: 'bg-blue-500' },
            { initials: 'MT', name: 'Mark T.', role: 'VC Partner · Early-stage', pct: 89, color: 'bg-pink-500' },
          ].map(({ initials, name, role, pct, color }) => (
            <div key={name} className="flex items-center gap-3 py-2 border-t border-slate-700/60 first:border-0 first:pt-0">
              <div className={`w-9 h-9 rounded-full ${color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                {initials}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white text-xs font-semibold truncate">{name}</p>
                <p className="text-slate-400 text-[9px] truncate">{role}</p>
              </div>
              <div className={`text-xs font-black px-2 py-1 rounded-lg ${pct >= 95 ? 'bg-purple-500 text-white' : 'bg-slate-700 text-purple-300'}`}>
                {pct}%
              </div>
            </div>
          ))}
        </div>
        <div className="bg-purple-900/30 border border-purple-700/40 rounded-xl p-3 text-center">
          <p className="text-purple-300 text-xs font-semibold">⚡ 12 new matches found today</p>
          <p className="text-slate-400 text-[9px] mt-0.5">Based on your CardGit profile goals</p>
        </div>
      </div>
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
      'Customisable challenges per event — set goals aligned to your event\'s purpose.',
    ],
    gradient: 'from-[#1a0a00] via-[#2d1a00] to-[#1f1100]',
    accentColor: '#fb923c',
    visual: (
      <div className="relative w-full max-w-sm mx-auto space-y-3">
        {/* Leaderboard */}
        <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-4">
          <div className="flex items-center justify-between mb-3">
            <p className="text-orange-300 text-xs font-bold">🏆 Live Leaderboard</p>
            <span className="text-[9px] text-orange-400 bg-orange-500/10 px-2 py-0.5 rounded-full">UK Tech Summit</span>
          </div>
          {[
            { rank: '🥇', name: 'Jessica M.', pts: 1240, badge: 'Super Connector' },
            { rank: '🥈', name: 'Daniel K.', pts: 980, badge: 'Q&A Champion' },
            { rank: '🥉', name: 'Richard T.', pts: 840, badge: 'Early Bird' },
            { rank: '4', name: 'You', pts: 720, badge: 'Networking Pro', highlight: true },
          ].map(({ rank, name, pts, badge, highlight }) => (
            <div key={name} className={`flex items-center gap-3 py-2 border-t border-slate-700/50 first:border-0 first:pt-0 ${highlight ? 'bg-orange-500/10 -mx-2 px-2 rounded-xl border border-orange-500/30' : ''}`}>
              <span className="text-sm w-5 text-center">{rank}</span>
              <div className="flex-1">
                <p className={`text-xs font-semibold ${highlight ? 'text-orange-300' : 'text-white'}`}>{name}</p>
                <p className="text-[9px] text-slate-400">{badge}</p>
              </div>
              <span className="text-orange-400 text-xs font-black">{pts.toLocaleString()}</span>
            </div>
          ))}
        </div>
        {/* Badges row */}
        <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-3">
          <p className="text-slate-300 text-xs font-semibold mb-2">Your badges</p>
          <div className="flex gap-2">
            {[
              { emoji: '🎯', label: 'Connector', earned: true },
              { emoji: '⚡', label: 'Engaged', earned: true },
              { emoji: '🤝', label: 'Networker', earned: true },
              { emoji: '🏅', label: 'Champion', earned: false },
            ].map(({ emoji, label, earned }) => (
              <div key={label} className={`flex-1 rounded-xl py-2 text-center ${earned ? 'bg-orange-500/20 border border-orange-500/30' : 'bg-slate-700/50 border border-slate-600/30 opacity-40'}`}>
                <div className="text-base">{emoji}</div>
                <p className="text-[8px] text-slate-300 mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
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

  // Auto-advance
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

      {/* Subtle noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJuIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWx0ZXI9InVybCgjbikiIG9wYWNpdHk9IjEiLz48L3N2Zz4=')]" aria-hidden="true" />

      {/* Glow blobs */}
      <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-20 pointer-events-none" style={{ background: slide.accentColor }} aria-hidden="true" />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 rounded-full blur-3xl opacity-10 pointer-events-none" style={{ background: slide.accentColor }} aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center px-6 sm:px-10 lg:px-14 py-10 sm:py-14 min-h-[420px] sm:min-h-[480px]">
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
            {/* Badge */}
            <span
              className="inline-flex items-center text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4 border"
              style={{ color: slide.accentColor, borderColor: `${slide.accentColor}40`, background: `${slide.accentColor}15` }}
            >
              {slide.badge}
            </span>

            {/* Title */}
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.05] mb-3 whitespace-pre-line">
              {slide.title}
            </h3>

            {/* Subtitle */}
            <p className="text-white/60 text-sm sm:text-base mb-6 leading-relaxed max-w-sm">
              {slide.subtitle}
            </p>

            {/* Bullets */}
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

      {/* Prev / Next buttons */}
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

      {/* Dot navigation */}
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
