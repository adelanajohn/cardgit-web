import { CreditCard, Calendar, ChevronDown, QrCode, Target, Users, BarChart2, Brain, Zap, Trophy, CheckCircle } from 'lucide-react'

const INFRA_PILLS = ['Profile Data', 'QR Identity', 'Lead Capture', 'Analytics', 'Team Mgmt', 'GDPR Controls', 'Auth / SSO']

const CARD_FEATURES = ['QR code profile sharing', 'Lead capture & appointment booking', 'Social media integration', 'Team management dashboard', 'Real-time analytics']

const EVENTS_FEATURES = ['Smart attendee matchmaking', 'Registration, ticketing & check-in', 'Live Q&A, polls & social wall', 'Gamification & leaderboards', 'Event analytics & revenue reports']

export default function ProductDiagram() {
  return (
    <div className="w-full select-none" role="img" aria-label="CardGit platform architecture: shared identity infrastructure powers Digital Business Cards and CardGit Events">

      {/* ── Row 1: User types ─────────────────────────────── */}
      <div className="flex justify-between gap-4 mb-0">
        {/* Professional */}
        <div className="flex items-center gap-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60 rounded-2xl px-5 py-3.5 shadow-sm flex-1 max-w-[260px]">
          <div className="w-9 h-9 rounded-xl bg-indigo-50 dark:bg-indigo-900/40 flex items-center justify-center flex-shrink-0">
            <Users className="w-4.5 h-4.5 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
          </div>
          <div>
            <p className="font-bold text-sm text-[var(--text-primary)] leading-tight">Professional</p>
            <p className="text-xs text-[var(--text-secondary)]">Freelancer · SME · Enterprise</p>
          </div>
        </div>

        <div className="flex-1" />

        {/* Event Organiser */}
        <div className="flex items-center gap-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60 rounded-2xl px-5 py-3.5 shadow-sm flex-1 max-w-[260px] justify-end ml-auto">
          <div className="w-9 h-9 rounded-xl bg-purple-50 dark:bg-purple-900/40 flex items-center justify-center flex-shrink-0">
            <Calendar className="w-4.5 h-4.5 text-purple-600 dark:text-purple-400" aria-hidden="true" />
          </div>
          <div>
            <p className="font-bold text-sm text-[var(--text-primary)] leading-tight">Event Organiser</p>
            <p className="text-xs text-[var(--text-secondary)]">Conference · Summit · Expo</p>
          </div>
        </div>
      </div>

      {/* ── Arrows down ───────────────────────────────────── */}
      <div className="flex justify-between px-[116px] my-0">
        <ChevronDown className="w-5 h-5 text-indigo-400/60 dark:text-indigo-600/60" aria-hidden="true" />
        <ChevronDown className="w-5 h-5 text-purple-400/60 dark:text-purple-600/60" aria-hidden="true" />
      </div>

      {/* ── Row 2: Infrastructure ─────────────────────────── */}
      <div className="relative rounded-2xl overflow-hidden mb-0 border border-indigo-200/60 dark:border-indigo-700/40 bg-gradient-to-r from-indigo-50 via-violet-50 to-purple-50 dark:from-indigo-950/50 dark:via-violet-950/40 dark:to-purple-950/40 px-6 py-4">
        {/* Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-violet-500/8 to-purple-500/5 pointer-events-none" aria-hidden="true" />

        <div className="relative text-center mb-3">
          <p className="text-sm font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600">
            Digital Identity Infrastructure
          </p>
          <p className="text-xs text-violet-500/80 dark:text-violet-400/70 mt-0.5">
            Unified profile · GDPR-conscious data · QR identity · Shared authentication
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-1.5">
          {INFRA_PILLS.map((pill) => (
            <span
              key={pill}
              className="px-2.5 py-1 rounded-full text-xs font-semibold bg-white/70 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-700/50 backdrop-blur-sm"
            >
              {pill}
            </span>
          ))}
        </div>
      </div>

      {/* ── Arrows down ───────────────────────────────────── */}
      <div className="flex justify-around my-0">
        <ChevronDown className="w-5 h-5 text-indigo-400/60 dark:text-indigo-600/60" aria-hidden="true" />
        <ChevronDown className="w-5 h-5 text-purple-400/60 dark:text-purple-600/60" aria-hidden="true" />
      </div>

      {/* ── Row 3: Products ───────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

        {/* Digital Business Cards */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200/80 dark:border-slate-700/50 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          {/* gradient top bar */}
          <div className="h-1 bg-gradient-to-r from-indigo-500 to-violet-600" />
          <div className="p-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center shadow-sm flex-shrink-0">
                <CreditCard className="w-5 h-5 text-white" aria-hidden="true" />
              </div>
              <div>
                <p className="font-black text-sm text-[var(--text-primary)]">Digital Business Cards</p>
              </div>
            </div>
            <ul className="space-y-2">
              {CARD_FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-indigo-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-xs text-[var(--text-secondary)] leading-snug">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CardGit Events */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200/80 dark:border-slate-700/50 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          {/* gradient top bar */}
          <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500" />
          <div className="p-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 flex items-center justify-center shadow-sm flex-shrink-0">
                <Calendar className="w-5 h-5 text-white" aria-hidden="true" />
              </div>
              <div>
                <p className="font-black text-sm text-[var(--text-primary)]">CardGit Events</p>
              </div>
            </div>
            <ul className="space-y-2">
              {EVENTS_FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-purple-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-xs text-[var(--text-secondary)] leading-snug">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── Caption ───────────────────────────────────────── */}
      <p className="text-center text-xs text-[var(--text-secondary)] mt-4 opacity-70">
        Both products run on the same identity infrastructure — your CardGit profile powers matchmaking in CardGit Events
      </p>
    </div>
  )
}
