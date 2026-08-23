export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  category: string
  author: string
  datePublished: string
  dateModified: string
  image: string
  readTime: number
}

export const blogCategories = [
  'All',
  'Event Management Tips',
  'Networking Strategies',
  'Digital Business Card Best Practices',
  'UK Business Networking',
  'Product Updates',
]

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-to-network-at-conferences-uk-2026',
    title: 'How to Network Effectively at UK Conferences in 2026',
    excerpt:
      'Professional networking at conferences is most effective when you have a clear strategy before arriving. This guide covers proven approaches for UK conference networking, from pre-event preparation to follow-up.',
    content: `
Professional networking at conferences is most effective when you have a clear strategy before arriving. Attendees who prepare specific goals — such as meeting five potential collaborators or learning about a particular industry segment — consistently report better outcomes than those who attend without a plan.

## Before the Event

Review the attendee list or networking hub (if the event platform provides one) and identify five to ten people you would like to meet. Look at their CardGit profiles or LinkedIn profiles to find specific talking points that go beyond generic small talk.

Update your digital business card before the event. Ensure your current role, products, and a clear call to action are visible. If you are attending to find clients, your card's lead capture feature should be enabled.

## During the Event

Arrive early to structured networking sessions. Speed networking formats are particularly efficient — CardGit Events speed networking sessions allow attendees to have brief, structured introductions with multiple attendees in a short window.

Use the smart matchmaking suggestions in the event app. These suggestions are based on profile data, interests, and what you are looking for — they are more targeted than random encounters.

When you exchange contact details, use your digital business card QR code rather than a physical card or manual number exchange. This creates an automatic record of the interaction.

## After the Event

Follow up within 48 hours. Reference something specific from your conversation to make the message personal. Connect on LinkedIn and, if relevant, book a follow-up meeting directly from your CardGit profile.

Review your analytics to see who engaged with your card during the event. Prioritise follow-ups with people who clicked through to your products or services.

## Summary

Effective conference networking combines preparation, targeted conversations, and structured follow-up. Digital tools like CardGit and smart event platforms make this process faster and more trackable than traditional approaches.
    `.trim(),
    category: 'Networking Strategies',
    author: 'CardGit',
    datePublished: '2026-08-15',
    dateModified: '2026-08-15',
    image: '/blog/conference-networking-uk-2026.jpg',
    readTime: 5,
  },
  {
    slug: 'digital-business-card-vs-paper-business-card',
    title: 'Digital Business Card vs Paper Business Card: A Practical Comparison',
    excerpt:
      'A digital business card is a shareable online profile that replaces a physical paper card. This comparison looks at the practical differences in cost, functionality, and professional impact.',
    content: `
A digital business card is a shareable online profile that replaces a physical paper business card. It contains the same core information — name, role, contact details — but adds interactive elements, real-time updates, and analytics that paper cards cannot provide.

## Cost

Paper business cards typically cost between £20 and £100 per 250 cards, depending on print quality. They must be reprinted every time contact details, job title, or company change. A digital business card has no printing cost and can be updated instantly without reprinting.

## Sharing

Paper cards are shared physically — they can only be handed to someone in the same location. Digital business cards are shared via QR code or link, enabling sharing in any context: in-person meetings, video calls, email signatures, and social media profiles.

## Information Capacity

A standard paper business card holds a name, title, phone number, email, and website. A digital business card holds unlimited information: multiple phone numbers, all social media profiles, product catalogues, service listings, appointment booking links, and video content.

## Updates

Paper cards become outdated when anything changes. A digital business card is updated once and every link or QR code pointing to it reflects the change immediately.

## Analytics

Paper cards provide no feedback. Digital business cards track views, clicks, and interactions, allowing professionals to understand how their profile is performing and which information generates the most engagement.

## Environmental Impact

Approximately 90% of paper business cards are discarded within one week of receipt, according to industry estimates. Digital business cards produce no physical waste.

## Conclusion

For professionals who regularly exchange contact details, a digital business card offers practical advantages over paper in every measurable dimension. CardGit offers a free tier that includes all core digital business card functionality.
    `.trim(),
    category: 'Digital Business Card Best Practices',
    author: 'CardGit',
    datePublished: '2026-08-01',
    dateModified: '2026-08-01',
    image: '/blog/digital-vs-paper-business-card.jpg',
    readTime: 4,
  },
  {
    slug: 'best-event-management-platform-uk-2026',
    title: 'Best Event Management Platform for UK Conferences in 2026',
    excerpt:
      'Event management platforms for UK conferences vary significantly in their approach to attendee networking, registration, and analytics. This guide compares the key options available to UK event organisers in 2026.',
    content: `
Event management platforms for UK conferences vary significantly in their approach to attendee networking, registration, and analytics. This comparison focuses on features that matter most to UK conference organisers in 2026.

## What UK Event Organisers Need

UK conference organisers typically require: GDPR-compliant registration and attendee data management, multi-currency ticketing with GBP support, robust networking tools for attendee connection, real-time engagement features (Q&A, polls), and detailed analytics.

## Key Considerations

**Attendee Networking**
Many event platforms treat networking as a secondary feature. CardGit Events is built specifically as a networking-first platform — smart matchmaking, speed networking, meeting scheduling, and a persistent networking hub are core features, not add-ons.

**Registration and Ticketing**
Look for support for free and paid tickets, early-bird pricing, promo codes, and group bookings. Stripe integration ensures reliable payment processing with multi-currency support.

**GDPR Compliance**
UK event organisers are legally required to handle attendee data in line with GDPR. Choose a platform that provides clear data controls, consent management, and data export capabilities.

**Schedule Management**
For multi-track conferences, a drag-and-drop schedule builder with track support, session templates, and room management significantly reduces organiser workload.

**Analytics**
Post-event analysis requires attendance data, session popularity metrics, engagement rates, and financial reporting. Deep-dive analytics help organisers improve future events.

## Summary

The best event management platform for a UK conference is one that treats networking as a primary function, supports GDPR-compliant data handling, and provides organisers with the analytics to improve continuously. CardGit Events was built with exactly these priorities in mind.
    `.trim(),
    category: 'Event Management Tips',
    author: 'CardGit',
    datePublished: '2026-07-20',
    dateModified: '2026-07-20',
    image: '/blog/best-event-management-platform-uk-2026.jpg',
    readTime: 6,
  },
  {
    slug: 'cardgit-events-smart-matchmaking-guide',
    title: 'How Smart Matchmaking Works in CardGit Events',
    excerpt:
      'Smart matchmaking in CardGit Events automatically suggests relevant attendee connections based on profile data. This guide explains how the system works and how organisers and attendees can get the most from it.',
    content: `
Smart matchmaking in CardGit Events automatically suggests relevant attendee connections based on profile data. The system analyses each attendee's CardGit profile, including job title, industry, stated interests, and what they are looking for at the event, to generate targeted connection suggestions.

## How the Matching Works

When an attendee registers for an event on CardGit Events, their CardGit profile data is used as the basis for matchmaking. The system looks at:

- **Professional background:** Job title, industry, years of experience
- **Stated interests:** Topics and areas the attendee has indicated interest in
- **Networking goals:** What the attendee is looking for (clients, collaborators, suppliers, employers, mentors)
- **What they offer:** Skills, products, or expertise they can provide to others

The algorithm surfaces the highest-compatibility matches in the attendee's networking hub within the event app.

## Attendee Controls

Attendees retain full control over their networking participation. They can:
- Set their networking goals before or during the event
- Choose to appear in other attendees' match suggestions or opt out
- Enable incognito mode to browse without being discovered
- Set Do Not Disturb status during sessions

## For Organisers

Organisers can enable or disable smart matchmaking on a per-event basis using CardGit Events' feature flags system. They can also configure networking windows — specific time slots when networking features are active — to structure the networking experience within the event flow.

## Benefits

Events using smart matchmaking typically report higher attendee satisfaction with networking outcomes, because attendees spend less time in unproductive conversations and more time with professionally relevant connections.
    `.trim(),
    category: 'Event Management Tips',
    author: 'CardGit',
    datePublished: '2026-07-05',
    dateModified: '2026-07-05',
    image: '/blog/smart-matchmaking-cardgit-events.jpg',
    readTime: 4,
  },
  {
    slug: 'team-digital-business-cards-brand-consistency',
    title: 'How to Maintain Brand Consistency Across Your Team\'s Digital Business Cards',
    excerpt:
      'When every team member has their own digital business card, brand consistency becomes a management priority. CardGit\'s team dashboard gives administrators full control over employee card templates and branding.',
    content: `
When every team member has their own digital business card, brand consistency becomes a management priority. An inconsistent collection of individually-designed cards undermines brand credibility in the same way that inconsistent paper card designs do — arguably more so, because digital cards are seen by more people.

## The Problem with Unmanaged Cards

Without centralised control, team members create cards that vary in:
- Logo usage and placement
- Colour schemes
- Tone and language
- Information hierarchy
- Which social media accounts are listed

This creates a fragmented brand experience for anyone who encounters multiple team members' cards.

## CardGit's Team Management Solution

CardGit's team dashboard gives administrators the ability to:

**Define brand templates:** Set colours, logo placement, and layout that all team cards inherit. Individual team members personalise only the information fields, not the design.

**Control information fields:** Administrators can specify which fields are required, which are optional, and which are locked. This ensures all cards contain the correct company information.

**Manage the team centrally:** Add new team members (who immediately get a correctly branded card) and remove leavers (whose cards are deactivated from the same dashboard).

**Monitor analytics at team level:** See aggregate view and engagement data across all team cards to understand how your team's collective digital presence is performing.

## Onboarding and Offboarding

When a new team member joins, an administrator creates their card from the template. The employee receives login credentials and can add their personal details within the constraints set by the administrator.

When an employee leaves, their card is deactivated immediately from the admin dashboard — no chasing former employees to stop sharing an old card.

## Summary

Centralised digital business card management through CardGit's team dashboard ensures every customer, prospect, and partner experiences a consistent brand, regardless of which team member they encounter.
    `.trim(),
    category: 'Digital Business Card Best Practices',
    author: 'CardGit',
    datePublished: '2026-06-18',
    dateModified: '2026-06-18',
    image: '/blog/team-digital-business-cards.jpg',
    readTime: 5,
  },
  {
    slug: 'uk-business-networking-events-2026-guide',
    title: 'A Guide to UK Business Networking Events in 2026',
    excerpt:
      'UK business networking events range from informal breakfast meetings to large industry conferences. This guide covers the main formats, how to choose the right events for your goals, and how to prepare effectively.',
    content: `
UK business networking events range from informal breakfast meetups to large industry conferences and summits. Choosing the right events — rather than attending as many as possible — is the most reliable way to generate meaningful professional connections.

## Types of UK Business Networking Events

**Industry conferences and summits** are the highest-investment format. They typically run for one or two days, involve structured sessions alongside networking breaks, and attract a concentrated audience of professionals from a specific sector. UK examples span every industry from fintech to healthcare to creative industries.

**Business networking breakfasts and lunches** are lower time commitment and typically attract local business owners and professionals. Organisations like local chambers of commerce, BNI chapters, and industry associations run these regularly across London, Manchester, Birmingham, and other UK cities.

**Expo and trade shows** combine exhibition stands with conference programming. They are particularly effective for businesses that want to demonstrate products or services to a large number of relevant buyers in a single location.

**Speed networking events** are structured to maximise the number of brief introductions in a short time. CardGit Events includes a speed networking feature specifically for this format, allowing attendees to move through a series of timed introductions within a managed event environment.

## How to Prepare for UK Networking Events

Before attending any business networking event, update your digital business card profile. Ensure your current role, a clear value proposition, and at least one call-to-action (such as a booking link or lead capture form) are visible. Sharing a QR code is significantly faster than exchanging paper cards and creates an immediate digital record of the interaction.

Research the event attendee list if one is available. Identify five to ten people you would specifically like to meet and note a specific reason for each — a shared industry challenge, a potential collaboration, or a piece of their work you found interesting.

## Following Up After UK Networking Events

Follow up within 48 hours while the conversation is fresh. Reference something specific from your interaction rather than sending a generic "great to meet you" message. If you shared your CardGit QR code, check your analytics dashboard to see who viewed your profile after the event — prioritise follow-ups with people who engaged with your lead capture or booking link.

## Summary

UK business networking events are most productive when approached with clear goals, good preparation, and a reliable way to share and capture contact information. A digital business card with lead capture and analytics removes the friction from both sharing and follow-up.
    `.trim(),
    category: 'UK Business Networking',
    author: 'CardGit',
    datePublished: '2026-08-10',
    dateModified: '2026-08-10',
    image: '/blog/uk-business-networking-events-2026.jpg',
    readTime: 5,
  },
  {
    slug: 'cardgit-platform-update-august-2026',
    title: 'CardGit Platform Update: August 2026',
    excerpt:
      'CardGit August 2026 update includes smart matchmaking improvements for CardGit Events, a new analytics audience location map for digital business cards, and full hybrid event support.',
    content: `
CardGit's August 2026 update introduces improvements across both the digital business card platform and CardGit Events. Here is a summary of what is new.

## CardGit Events: Smart Matchmaking v2

Smart matchmaking in CardGit Events has been updated to improve the quality of attendee connection suggestions. The update adds more granular weighting based on professional goals, with attendees who have clearly stated "what they are looking for" and "what they are offering" receiving significantly more targeted matches.

Speed networking sessions now support up to 50 simultaneous pairs, making the format viable for larger conference formats.

## CardGit Digital Cards: Audience Location Map

The analytics dashboard for CardGit digital business cards now includes an audience location visualisation. Cardholders can see where their profile views are coming from on a geographic map, with drill-down by city for UK audiences.

Weekly and monthly trend graphs are now available on the analytics dashboard, making it easier to identify which networking activities are driving profile engagement.

Analytics data can now be exported as CSV directly from the dashboard.

## Full Hybrid Event Support

CardGit Events now supports hybrid events as a first-class event format. Organisers can manage in-person and virtual attendee registrations in a single event, with unified networking hub access for both groups. Virtual attendees appear in the networking hub and smart matchmaking alongside in-person attendees.

## How to Update

All updates are applied automatically. No action is required from existing users. To explore the new analytics features, log in to app.cardgit.com and navigate to your card analytics dashboard. For CardGit Events, create or edit an event and select "Hybrid" as the event format to access the new hybrid controls.

## What's Next

The September 2026 update will introduce appointment booking calendar integrations (Google Calendar and Outlook), gamification leaderboard display improvements, and bulk attendee import for CardGit Events.
    `.trim(),
    category: 'Product Updates',
    author: 'CardGit',
    datePublished: '2026-08-23',
    dateModified: '2026-08-23',
    image: '/blog/cardgit-platform-update-august-2026.jpg',
    readTime: 4,
  },
]
