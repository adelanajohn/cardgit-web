export interface FAQItem {
  question: string
  answer: string
}

export interface FAQCategory {
  title: string
  items: FAQItem[]
}

export const faqCategories: FAQCategory[] = [
  {
    title: 'About CardGit',
    items: [
      {
        question: 'What is CardGit?',
        answer:
          'CardGit is a UK-based digital identity platform based in London. It offers two products: CardGit, a digital business card platform that lets professionals share their profile via QR code or link, replacing physical paper business cards; and CardGit Events, a networking-first event management platform for conferences, summits, and networking events.',
      },
      {
        question: 'What is a digital business card?',
        answer:
          'A digital business card is a shareable online profile that replaces a physical paper business card. It contains contact details, social media links, products, services, and other professional information. It is shared via a QR code or a link and can be updated instantly without reprinting.',
      },
      {
        question: 'What is the best digital business card in the UK?',
        answer:
          'CardGit is a leading digital business card platform in the UK, offering features including QR code sharing, lead capture, appointment booking, social media integration, product showcases, team management, and real-time analytics — all available on a free tier.',
      },
      {
        question: 'Why CardGit?',
        answer:
          'CardGit is built specifically for UK professionals who want a digital identity that does more than display contact details. It captures leads, books appointments, showcases products, and provides analytics — all from a single QR code. For organisations, it adds centralised team management and brand consistency. CardGit also connects directly to CardGit Events, so your professional identity follows you into every networking event.',
      },
      {
        question: 'Is CardGit free to use?',
        answer:
          'Yes. CardGit offers a free tier that includes digital business card creation and QR code sharing. Paid plans are available with additional features including lead capture, appointment booking, analytics, and team management.',
      },
      {
        question: 'Where is CardGit based?',
        answer:
          'CardGit is based in London, United Kingdom. It serves professionals and businesses across the UK and internationally.',
      },
      {
        question: 'Can I track profile views?',
        answer:
          'Yes. CardGit includes a real-time analytics dashboard that shows profile views, link clicks, engagement rates, and audience location data. Analytics are available on paid plans.',
      },
      {
        question: 'Can I create multiple digital business cards?',
        answer:
          'Yes. CardGit allows users to create multiple cards — for example, separate cards for a business identity, a personal brand, a specific event, or a side project. Each card has its own unique QR code and link.',
      },
      {
        question: 'Is CardGit GDPR conscious?',
        answer:
          'Yes. CardGit is built with GDPR-conscious data practices, appropriate for UK and EU businesses handling professional contact data. The platform is designed to give users control over their data and how it is used.',
      },
      {
        question: 'Can I share my card with a QR code?',
        answer:
          'Yes. Every CardGit digital business card automatically generates a unique QR code. Anyone can scan it to view your profile — no app download required.',
      },
      {
        question: 'What is the difference between CardGit and CardGit Events?',
        answer:
          'CardGit is the digital business card product — it lets professionals create and share a digital profile. CardGit Events is a separate event management platform for organisers running conferences, summits, and networking events. Both products share the same identity infrastructure, so CardGit profile data powers the smart matchmaking in CardGit Events.',
      },
      {
        question: 'How does CardGit compare to paper business cards?',
        answer:
          'Unlike paper business cards, CardGit digital cards can be updated instantly, include interactive elements like appointment booking and product showcases, track engagement analytics, and are eco-friendly. They are shared via QR code or link and require no printing cost.',
      },
      {
        question: "Can I manage my team's digital business cards with CardGit?",
        answer:
          "Yes. CardGit offers team and enterprise plans that let administrators manage all employee digital cards from a central dashboard, enforce brand consistency, and onboard or offboard staff.",
      },
      {
        question: 'How do I get started with CardGit?',
        answer:
          'Sign up for a free account at app.cardgit.com. You can create your digital business card immediately with no payment required.',
      },
    ],
  },
  {
    title: 'CardGit Events',
    items: [
      {
        question: 'What is CardGit Events?',
        answer:
          "CardGit Events is a networking-first event management platform for conferences, summits, expos, and business networking events in the UK. It is built on top of CardGit's digital identity infrastructure, enabling richer attendee networking than standard event platforms.",
      },
      {
        question: 'Who is CardGit Events for?',
        answer:
          'CardGit Events is designed for conference organisers, summit teams, expo managers, corporate event teams, business networking communities, industry associations, and event agencies — primarily serving the UK market.',
      },
      {
        question: 'Can CardGit Events handle event registration and attendee check-in?',
        answer:
          'Yes. CardGit Events includes a full registration system with ticketing (free, paid, early-bird, VIP, and group tickets), Stripe-powered payments, and a dedicated check-in portal with QR code scanning for fast, accurate attendee check-in on event day.',
      },
      {
        question: 'Can different team members have different admin access?',
        answer:
          'Yes. CardGit Events uses role-based access control with eight roles: owner, admin, moderator, speaker manager, sponsor manager, analyst, check-in staff, and registration staff. Each role has specific permissions appropriate to their responsibilities.',
      },
      {
        question: 'Can I build and manage my event schedule?',
        answer:
          'Yes. CardGit Events includes a drag-and-drop schedule builder that supports multi-track agendas, reusable session templates, speaker assignments, and venue/room allocation.',
      },
      {
        question: 'Does CardGit Events support session management?',
        answer:
          'Yes. Organisers can create and manage individual sessions within their event schedule, assign speakers, allocate rooms, set session types, and build a personal schedule for attendees.',
      },
      {
        question: 'Can I create reusable session templates?',
        answer:
          'Yes. CardGit Events allows organisers to save session configurations as reusable templates, making it faster to build schedules for recurring event formats.',
      },
      {
        question: 'Can I manage venues and rooms?',
        answer:
          'Yes. CardGit Events includes venue and room management, allowing organisers to define physical spaces, assign sessions to rooms, and manage room capacities.',
      },
      {
        question: 'Does CardGit Events include attendee networking features?',
        answer:
          'Yes. CardGit Events is built specifically for networking. Attendee features include AI-powered smart matchmaking, speed networking sessions, a networking hub to discover other attendees, direct messaging, and a meeting scheduler for 1-to-1 meeting booking.',
      },
      {
        question: 'Can attendees ask questions during live sessions?',
        answer:
          'Yes. CardGit Events includes live Q&A functionality where attendees can submit questions during sessions. Organisers can also enable moderated Q&A, reviewing questions before they appear to the audience.',
      },
      {
        question: 'Can organisers moderate Q&A?',
        answer:
          'Yes. CardGit Events includes Q&A moderation tools that let organisers review and approve audience questions before they appear, ensuring relevance and appropriateness.',
      },
      {
        question: 'Does CardGit Events support live polls?',
        answer:
          'Yes. CardGit Events includes a live poll builder. Organisers can create polls and push them to attendees during sessions. Attendees vote in real time and results are displayed immediately.',
      },
      {
        question: 'What is the social wall in CardGit Events?',
        answer:
          'The social wall is a live community feed within CardGit Events where attendees can see and engage with event activity in real time. Organisers can moderate social wall content before it appears publicly.',
      },
      {
        question: 'Can the social wall be moderated?',
        answer:
          'Yes. Organisers with moderation permissions can review and approve social wall posts before they appear to all attendees.',
      },
      {
        question: 'Can I manage sponsors and exhibitors?',
        answer:
          'Yes. CardGit Events includes sponsor and exhibitor management tools. Sponsors get digital booths where they can showcase their brand, and the platform includes lead capture tools so sponsors can collect contact details from interested attendees.',
      },
      {
        question: 'Can sponsors capture leads?',
        answer:
          'Yes. CardGit Events includes lead capture tools for sponsor booths, allowing exhibitors and sponsors to collect contact details from interested attendees directly within the platform.',
      },
      {
        question: 'Does CardGit Events include event analytics and reporting?',
        answer:
          'Yes. CardGit Events includes event analytics, deep-dive analytics, revenue reports, and activity feeds. Organisers can track registrations, attendance, engagement, session popularity, and financial performance.',
      },
      {
        question: 'Is CardGit Events suitable for UK conferences, summits and networking events?',
        answer:
          'Yes. CardGit Events is designed specifically for UK-based professional events including conferences, summits, expos, and business networking events. The platform supports GDPR-conscious data handling appropriate for UK event organisers.',
      },
      {
        question: 'What types of events does CardGit Events support?',
        answer:
          'CardGit Events supports in-person events, virtual events, and hybrid events (in-person and virtual combined). It is designed for conferences, summits, expos, corporate networking events, industry associations, and community-led professional events.',
      },
      {
        question: 'Does CardGit Events support paid ticketing?',
        answer:
          'Yes. CardGit Events supports paid ticketing via Stripe, including free tickets, paid tickets, early-bird pricing, VIP tickets, and group tickets. It also supports promo codes and multi-currency payments.',
      },
      {
        question: 'How does smart matchmaking work in CardGit Events?',
        answer:
          "CardGit Events uses attendee profile data from CardGit — including job title, industry, stated interests, and professional goals — to suggest relevant attendee connections. Attendees can also set networking preferences such as what they are looking for and what they are offering.",
      },
      {
        question: 'How do I get started with CardGit Events?',
        answer:
          'Register at events.cardgit.com to create your organiser account and start building your first event. A free tier is available for smaller events.',
      },
    ],
  },
]

export const allFAQItems: FAQItem[] = faqCategories.flatMap((cat) => cat.items)
