import cardAnalytics from '@/assets/cards/card-analytics.png'
import eventsImg from '@/assets/events/events.png'

/**
 * Shared illustration wrapper.
 *
 * Uses aspect-ratio 789/495 (events.png natural ratio = 1.594:1) so both
 * containers are exactly the same height at any width.
 * object-contain shows the full image without any cropping — letterboxed if needed.
 * Background matches the card bg so letterbox gaps are invisible.
 */
function IllustrationWrapper({
  src,
  alt,
  bg = '#f8fafc',
}: {
  src: string
  alt: string
  bg?: string
}) {
  return (
    <div
      className="w-full overflow-hidden"
      style={{ aspectRatio: '789 / 495', background: bg }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-contain block"
        loading="lazy"
        decoding="async"
      />
    </div>
  )
}

export function CardIllustration() {
  return (
    <IllustrationWrapper
      src={cardAnalytics}
      alt="CardGit digital business card showing QR code, social links, booking buttons, and analytics with 847 profile views, 124 clicks, and 32 leads"
      bg="#0a0a1f"   /* matches card-analytics dark background */
    />
  )
}

export function EventsIllustration() {
  return (
    <IllustrationWrapper
      src={eventsImg}
      alt="CardGit Events platform showing live event dashboard with smart matchmaking, attendee networking, and engagement analytics"
      bg="#1a0a2e"   /* matches events.png dark purple background */
    />
  )
}
