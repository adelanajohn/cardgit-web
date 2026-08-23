/**
 * Digital Business Card illustration — shown in the Platform Overview "Digital Business Cards" card
 */
export function CardIllustration() {
  return (
    <svg
      viewBox="0 0 360 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="ci-bg" x1="0" y1="0" x2="360" y2="200" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#eef2ff" />
          <stop offset="100%" stopColor="#f5f3ff" />
        </linearGradient>
        <linearGradient id="ci-btn" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
        <linearGradient id="ci-avatar" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
      </defs>

      {/* Card background */}
      <rect width="360" height="200" rx="16" fill="url(#ci-bg)" />

      {/* Main card surface */}
      <rect x="20" y="16" width="200" height="168" rx="14" fill="white"
        style={{ filter: 'drop-shadow(0 4px 16px rgba(99,102,241,0.15))' }} />

      {/* Top accent bar */}
      <rect x="20" y="16" width="200" height="5" rx="2.5" fill="url(#ci-btn)" />

      {/* Avatar */}
      <circle cx="62" cy="62" r="22" fill="url(#ci-avatar)" />
      <circle cx="62" cy="55" r="9" fill="white" opacity="0.9" />
      <ellipse cx="62" cy="76" rx="13" ry="8" fill="white" opacity="0.7" />

      {/* Name lines */}
      <rect x="94" y="50" width="88" height="10" rx="5" fill="#e0e7ff" />
      <rect x="94" y="66" width="66" height="8" rx="4" fill="#ede9fe" opacity="0.8" />
      <rect x="94" y="80" width="74" height="7" rx="3.5" fill="#f1f5f9" opacity="0.6" />

      {/* QR code miniature */}
      <rect x="180" y="24" width="32" height="32" rx="6" fill="#f8fafc" stroke="#e0e7ff" strokeWidth="1" />
      {[
        [183,27,7,7], [192,27,4,4], [192,33,4,4], [198,27,7,7],
        [183,38,4,7], [188,43,4,4], [194,38,7,4], [198,38,7,7],
        [183,47,7,7], [192,44,4,4], [198,47,8,7],
      ].map(([x,y,w,h], i) => (
        <rect key={i} x={x} y={y} width={w} height={h} rx="1" fill="#6366f1" />
      ))}

      {/* Divider */}
      <line x1="32" y1="98" x2="208" y2="98" stroke="#f1f5f9" strokeWidth="1.5" />

      {/* Social pills */}
      <rect x="32" y="106" width="44" height="18" rx="9" fill="#eef2ff" />
      <text x="54" y="119" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="8" fontWeight="600" fill="#6366f1">LinkedIn</text>
      <rect x="82" y="106" width="50" height="18" rx="9" fill="#f0fdf4" />
      <text x="107" y="119" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="8" fontWeight="600" fill="#16a34a">WhatsApp</text>
      <rect x="138" y="106" width="40" height="18" rx="9" fill="#fdf4ff" />
      <text x="158" y="119" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="8" fontWeight="600" fill="#9333ea">Insta</text>

      {/* CTA buttons */}
      <rect x="32" y="130" width="86" height="26" rx="8" fill="url(#ci-btn)" />
      <text x="75" y="147" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="9" fontWeight="700" fill="white">Book a Meeting</text>
      <rect x="124" y="130" width="84" height="26" rx="8" fill="#f8fafc" stroke="#e0e7ff" strokeWidth="1" />
      <text x="166" y="147" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="9" fontWeight="600" fill="#475569">Enquire Now</text>

      {/* Analytics mini panel */}
      <rect x="232" y="16" width="112" height="168" rx="14" fill="white"
        style={{ filter: 'drop-shadow(0 4px 16px rgba(99,102,241,0.10))' }} />
      <rect x="232" y="16" width="112" height="5" rx="2.5" fill="#c7d2fe" />

      <text x="244" y="42" fontFamily="Inter,sans-serif" fontSize="9" fontWeight="600" fill="#94a3b8">ANALYTICS</text>

      <rect x="244" y="48" width="88" height="38" rx="8" fill="#f8fafc" stroke="#e0e7ff" strokeWidth="1" />
      <text x="288" y="65" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="18" fontWeight="900" fill="#6366f1">847</text>
      <text x="288" y="80" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="8" fill="#94a3b8">Profile Views</text>

      <rect x="244" y="94" width="40" height="34" rx="8" fill="#f8fafc" stroke="#e0e7ff" strokeWidth="1" />
      <text x="264" y="108" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="13" fontWeight="900" fill="#7c3aed">124</text>
      <text x="264" y="122" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="7" fill="#94a3b8">Clicks</text>

      <rect x="292" y="94" width="40" height="34" rx="8" fill="#f8fafc" stroke="#e0e7ff" strokeWidth="1" />
      <text x="312" y="108" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="13" fontWeight="900" fill="#0891b2">32</text>
      <text x="312" y="122" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="7" fill="#94a3b8">Leads</text>

      {/* Mini bar chart */}
      <text x="244" y="146" fontFamily="Inter,sans-serif" fontSize="9" fontWeight="600" fill="#94a3b8">THIS WEEK</text>
      {[22, 35, 28, 45, 38, 52, 42].map((h, i) => (
        <rect key={i} x={244 + i * 14} y={196 - h} width="10" height={h - 12}
          rx="3" fill="#6366f1" opacity={0.3 + i * 0.1} />
      ))}
    </svg>
  )
}

/**
 * CardGit Events illustration — shown in the Platform Overview "CardGit Events" card
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
        <linearGradient id="ei-match" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
      </defs>

      {/* Background */}
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

      {/* Divider */}
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

      {/* Gamification badge strip */}
      <text x="266" y="172" fontFamily="Inter,sans-serif" fontSize="8" fontWeight="600" fill="#94a3b8">BADGES</text>
      {['🎯','⚡','🤝'].map((e, i) => (
        <text key={i} x={268 + i * 24} y={186} fontFamily="Inter,sans-serif" fontSize="14">{e}</text>
      ))}
    </svg>
  )
}
