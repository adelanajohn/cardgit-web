import cardAnalytics from '@/assets/cards/card-analytics.png'
import eventsImg from '@/assets/events/events.png'

/**
 * Shared illustration wrapper.
 * Fixed height matches events.png natural height (495px at full width).
 * Both product cards in the Platform Overview section are identical height.
 * object-top ensures the most important UI content (top of each screenshot) is always visible.
 */
function IllustrationWrapper({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="w-full overflow-hidden h-[220px] sm:h-[280px] md:h-[320px]">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover object-top block"
        loading="lazy"
        decoding="async"
      />
    </div>
  )
}

/**
 * Digital Business Card illustration — real screenshot from card-analytics.png
 */
export function CardIllustration() {
  return (
    <IllustrationWrapper
      src={cardAnalytics}
      alt="CardGit digital business card showing QR code, social links, booking buttons, and analytics with 847 profile views, 124 clicks, and 32 leads"
    />
  )
}

/**
 * CardGit Events illustration — real screenshot from events.png
 */
export function EventsIllustration() {
  return (
    <IllustrationWrapper
      src={eventsImg}
      alt="CardGit Events platform showing live event dashboard with smart matchmaking, attendee networking, and engagement analytics"
    />
  )
}
