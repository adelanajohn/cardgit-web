import cardAnalytics from '@/assets/cards/card-analytics.png'

/**
 * Digital Business Card illustration — real screenshot from card-analytics.png
 */
export function CardIllustration() {
  return (
    <img
      src={cardAnalytics}
      alt="CardGit digital business card showing QR code, social links, booking buttons, and analytics with 847 profile views, 124 clicks, and 32 leads"
      className="w-full h-auto block"
      loading="lazy"
      decoding="async"
    />
  )
}

/**
 * CardGit Events illustration — SVG mockup showing live event dashboard
 */
export function EventsIllustration() {
  return (
    <svg
      viewBox="0 0 360 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="ei-bg" x1="0" y1="0" x2="360" y2="200" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#eff6ff" />
          <stop offset="100%" stopColor="#fdf4ff" />
        </linearGradient>
        <linearGradient id="ei-btn" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="50%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
      </defs>

      <rect width="360" height="200" rx="16" fill="url(#ei-bg)" />

      {/* Main panel */}
      <rect x="20" y="16" width="225" height="168" rx="14" fill="white"
        style={{ filter: 'drop-shadow(0 4px 16px rgba(124,58,237,0.13))' }} />
      <rect x="20" y="16" width="225" height="5" rx="2.5" fill="url(#ei-btn)" />

      {/* Live badge */}
      <rect x="32" y="30" width="58" height="18" rx="9" fill="#dcfce7" />
      <circle cx="44" cy="39" r="4" fill="#16a34a" />
      <text x="68" y="43" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="8" fontWeight="700" fill="#16a34a">● LIVE</text>
      <text x="118" y="43" fontFamily="Inter,sans-serif" fontSize="9" fontWeight="700" fill="#0f172a">UK Tech Summit</text>

      {/* Attendee avatars */}
      <text x="32" y="62" fontFamily="Inter,sans-serif" fontSize="8" fill="#94a3b8" fontWeight="500">247 ATTENDEES</text>
      {['#818cf8','#34d399','#fb923c','#60a5fa','#f472b6'].map((c,i) => (
        <circle key={i} cx={32 + i*16} cy={78} r={10} fill={c} />
      ))}
      <rect x="112" y="68" width="28" height="20" rx="10" fill="#f1f5f9" />
      <text x="126" y="82" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="8" fontWeight="700" fill="#475569">+242</text>

      <line x1="32" y1="100" x2="233" y2="100" stroke="#f1f5f9" strokeWidth="1.5" />

      {/* Matchmaking */}
      <text x="32" y="116" fontFamily="Inter,sans-serif" fontSize="8" fill="#94a3b8" fontWeight="500">SMART MATCHMAKING</text>

      <rect x="32" y="122" width="210" height="30" rx="10" fill="#faf5ff" stroke="#e9d5ff" strokeWidth="1" />
      <circle cx="50" cy="137" r="10" fill="#7c3aed" />
      <text x="50" y="141" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="8" fontWeight="700" fill="white">JD</text>
      <text x="68" y="134" fontFamily="Inter,sans-serif" fontSize="9" fontWeight="700" fill="#0f172a">James D. · FinTech</text>
      <text x="68" y="146" fontFamily="Inter,sans-serif" fontSize="8" fill="#6b7280">Senior Engineer</text>
      <rect x="195" y="129" width="40" height="16" rx="8" fill="#7c3aed" />
      <text x="215" y="141" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="8" fontWeight="700" fill="white">98% ✓</text>

      <rect x="32" y="158" width="210" height="20" rx="10" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="1" />
      <circle cx="50" cy="168" r="10" fill="#2563eb" />
      <text x="50" y="172" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="8" fontWeight="700" fill="white">SR</text>
      <text x="68" y="165" fontFamily="Inter,sans-serif" fontSize="9" fontWeight="700" fill="#0f172a">Sarah R. · SaaS</text>
      <text x="68" y="174" fontFamily="Inter,sans-serif" fontSize="8" fill="#6b7280">Product Lead</text>
      <rect x="195" y="161" width="40" height="14" rx="7" fill="#2563eb" />
      <text x="215" y="172" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="8" fontWeight="700" fill="white">94% ✓</text>

      {/* Right stats panel */}
      <rect x="256" y="16" width="88" height="168" rx="14" fill="white"
        style={{ filter: 'drop-shadow(0 4px 16px rgba(124,58,237,0.10))' }} />
      <rect x="256" y="16" width="88" height="5" rx="2.5" fill="#c4b5fd" />

      <text x="266" y="40" fontFamily="Inter,sans-serif" fontSize="8" fontWeight="600" fill="#94a3b8">ENGAGEMENT</text>

      <rect x="266" y="46" width="68" height="34" rx="8" fill="#f0fdf4" stroke="#bbf7d0" strokeWidth="1" />
      <text x="300" y="62" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="15" fontWeight="900" fill="#16a34a">142</text>
      <text x="300" y="74" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="7" fill="#94a3b8">Q&amp;A votes</text>

      <rect x="266" y="86" width="68" height="34" rx="8" fill="#fdf4ff" stroke="#e9d5ff" strokeWidth="1" />
      <text x="300" y="102" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="15" fontWeight="900" fill="#9333ea">89%</text>
      <text x="300" y="114" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="7" fill="#94a3b8">Engaged</text>

      <rect x="266" y="126" width="68" height="34" rx="8" fill="#fff7ed" stroke="#fed7aa" strokeWidth="1" />
      <text x="300" y="142" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="13" fontWeight="900" fill="#ea580c">🏆 32</text>
      <text x="300" y="154" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="7" fill="#94a3b8">Leaderboard</text>

      <text x="266" y="172" fontFamily="Inter,sans-serif" fontSize="8" fontWeight="600" fill="#94a3b8">BADGES</text>
      {['🎯','⚡','🤝'].map((e, i) => (
        <text key={i} x={268 + i * 24} y={186} fontFamily="Inter,sans-serif" fontSize="14">{e}</text>
      ))}
    </svg>
  )
}
