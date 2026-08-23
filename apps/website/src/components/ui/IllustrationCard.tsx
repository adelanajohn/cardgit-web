import cardAnalytics from '@/assets/cards/card-analytics.png'
import eventsImg from '@/assets/events/events.png'

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
 * CardGit Events illustration — real screenshot from events.png
 */
export function EventsIllustration() {
  return (
    <img
      src={eventsImg}
      alt="CardGit Events platform showing live event dashboard with smart matchmaking, attendee networking, and engagement analytics"
      className="w-full h-auto block"
      loading="lazy"
      decoding="async"
    />
  )
}
