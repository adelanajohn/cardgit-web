export interface UseCase {
  slug: string
  title: string
  headline: string
  subheadline: string
  icon: string
  painPoints: string[]
  solutions: string[]
  features: string[]
  caseStudy: {
    company: string
    location: string
    quote: string
    result: string
  }
}

export const useCases: UseCase[] = [
  {
    slug: 'sales-teams',
    title: 'Sales Teams',
    headline: 'Digital Business Cards for Sales Teams',
    subheadline:
      'CardGit gives sales professionals a shareable digital identity that captures leads, books appointments, and tracks every interaction — so every conversation has a follow-up.',
    icon: 'TrendingUp',
    painPoints: [
      'Paper business cards get lost or discarded after meetings',
      'No way to track whether prospects visited your profile',
      'Following up manually after networking events is slow and inconsistent',
      'Different team members present inconsistent brand identities',
    ],
    solutions: [
      'Digital cards shared via QR code create an immediate digital record of every interaction',
      'Lead capture lets prospects submit their contact details directly from your card',
      'Analytics show exactly who viewed your profile and which links they clicked',
      'Team management ensures every sales rep uses a consistent, branded card',
    ],
    features: [
      'Lead capture forms',
      'Real-time analytics',
      'Appointment booking',
      'Team management dashboard',
      'CTA buttons (Book Now, Enquire, Buy)',
      'QR code sharing',
    ],
    caseStudy: {
      company: 'London Marketing Consultancy',
      location: 'London, UK',
      quote:
        'Our sales team used to collect cards at events and spend a week doing manual follow-ups. Now every interaction creates a lead in the system and we follow up the same day.',
      result: '40% reduction in follow-up time, 3× increase in post-event conversions',
    },
  },
  {
    slug: 'recruitment',
    title: 'Recruitment Agencies',
    headline: 'Digital Business Cards for Recruitment Agencies',
    subheadline:
      'CardGit helps recruiters build a professional digital presence that attracts both candidates and clients, with appointment booking and lead capture built in.',
    icon: 'Users',
    painPoints: [
      'Candidates and clients have difficulty finding contact details after initial meetings',
      'Recruiters from the same agency present inconsistent personal brands',
      'No easy way to book follow-up calls from a business card',
      'Paper cards are discarded before candidates remember to get in touch',
    ],
    solutions: [
      'A digital card with an appointment booking link means candidates can schedule calls immediately',
      'Lead capture lets interested candidates submit their details without waiting to be asked',
      'Team branding ensures every recruiter is recognisably part of the same agency',
      'Analytics show which job categories and links generate the most engagement',
    ],
    features: [
      'Appointment booking',
      'Lead capture',
      'Multiple cards (one per specialisation)',
      'Social media integration',
      'Team branding management',
      'Analytics dashboard',
    ],
    caseStudy: {
      company: 'Manchester Recruitment Agency',
      location: 'Manchester, UK',
      quote:
        'Candidates now book calls directly from our digital cards. The friction of "let me take your number" has disappeared entirely.',
      result: '60% of post-event enquiries now come through the card booking link',
    },
  },
  {
    slug: 'property',
    title: 'Property Professionals',
    headline: 'Digital Business Cards for Property Professionals',
    subheadline:
      'CardGit helps estate agents, surveyors, and property consultants showcase listings, capture buyer and seller leads, and book viewings — all from a single digital card.',
    icon: 'Building',
    painPoints: [
      'Handing out paper cards at viewings rarely leads to follow-up enquiries',
      'Property listings and portfolio details change too often for static printed cards',
      'No easy way for prospective buyers to book a follow-up viewing on the spot',
      'Tracking which marketing events generated genuine leads is difficult',
    ],
    solutions: [
      'A digital card with an interactive property showcase lets buyers browse listings immediately',
      'Appointment booking means viewings can be scheduled from the card in under a minute',
      'Lead capture collects buyer and seller contact details with consent',
      'Analytics identify which properties and CTAs generate the most interest',
    ],
    features: [
      'Interactive product/service showcase',
      'Appointment booking',
      'Lead capture',
      'QR code sharing',
      'Real-time analytics',
      'Instant updates (no reprinting)',
    ],
    caseStudy: {
      company: 'Birmingham Property Consultant',
      location: 'Birmingham, UK',
      quote:
        'I update my property listings on my CardGit card and share it at viewings. Buyers book follow-up appointments directly. I haven\'t printed a business card in over a year.',
      result: '2× more follow-up enquiries compared to paper card networking',
    },
  },
  {
    slug: 'events-organisers',
    title: 'Event Organisers',
    headline: 'Event Management Tools for UK Conference & Event Organisers',
    subheadline:
      'CardGit Events is a networking-first event management platform built for UK conference organisers, summit teams, and business networking event managers.',
    icon: 'Calendar',
    painPoints: [
      'Attendees leave events without meaningful connections because networking is unstructured',
      'Managing registration, schedule, speakers, and sponsors across multiple tools is time-consuming',
      'Sponsors have no effective way to capture leads from interested attendees',
      'Post-event analytics are limited to raw attendance numbers',
    ],
    solutions: [
      'Smart matchmaking ensures every attendee gets relevant connection suggestions before and during the event',
      'CardGit Events brings registration, schedule, speakers, sponsors, and engagement into a single platform',
      'Sponsor booths with lead capture give sponsors measurable ROI from their event investment',
      'Deep-dive analytics cover registrations, attendance, session engagement, and revenue',
    ],
    features: [
      'Smart matchmaking',
      'Registration and ticketing',
      'Schedule builder',
      'Speaker management',
      'Sponsor booths with lead capture',
      'Live Q&A and polls',
      'Event analytics',
      'QR code check-in',
    ],
    caseStudy: {
      company: 'UK Business Summit',
      location: 'London, UK',
      quote:
        'Attendee feedback consistently highlights the networking quality at our events. CardGit Events\' matchmaking is the primary reason for that.',
      result: '92% of attendees reported at least one valuable new connection',
    },
  },
  {
    slug: 'freelancers',
    title: 'Freelancers & Creatives',
    headline: 'Digital Business Cards for Freelancers and Independent Professionals',
    subheadline:
      'CardGit gives freelancers a professional digital presence that showcases their work, captures leads, and books client calls — all without a separate website or business card budget.',
    icon: 'Briefcase',
    painPoints: [
      'Freelancers cannot afford to reprint paper cards every time their services or rates change',
      'A static paper card cannot show a portfolio, client reviews, or a booking link',
      'Getting a professional website is expensive and time-consuming',
      'Following up with potential clients met at networking events is inconsistent',
    ],
    solutions: [
      'A digital business card is free to create and instantly showcases portfolio, services, and a booking link',
      'Interactive product and service sections let freelancers highlight their best work with CTA buttons',
      'Lead capture and appointment booking remove friction from the client acquisition process',
      'Analytics show which services and projects generate the most interest',
    ],
    features: [
      'Free tier available',
      'Portfolio/service showcase',
      'Appointment booking',
      'Lead capture',
      'Social media integration (Instagram, TikTok, LinkedIn)',
      'QR code sharing',
      'Instant updates',
    ],
    caseStudy: {
      company: 'Independent Graphic Designer',
      location: 'London, UK',
      quote:
        'I used to hand out paper cards at creative events and hope for the best. Now I share my QR code and clients book discovery calls on the spot.',
      result: 'Client enquiries from networking events increased by 3×',
    },
  },
  {
    slug: 'healthcare',
    title: 'Healthcare Organisations',
    headline: 'Digital Business Cards for Healthcare Professionals',
    subheadline:
      'CardGit helps healthcare professionals and organisations manage their professional identity, share service information, and book patient or client appointments — with GDPR-conscious data handling.',
    icon: 'Heart',
    painPoints: [
      'Healthcare professionals need to share complex contact and service information in a compliant way',
      'Paper cards are quickly outdated when clinic locations, hours, or services change',
      'Booking appointments at health events or conferences requires a separate follow-up step',
      'Team-wide card management is difficult across multi-site healthcare organisations',
    ],
    solutions: [
      'Digital cards are updated instantly when service or location information changes',
      'Appointment booking allows patients and clients to schedule consultations directly from the card',
      'GDPR-conscious design ensures data collected via lead capture meets UK data protection requirements',
      'Team management lets healthcare organisations control branding across all practitioner cards',
    ],
    features: [
      'Appointment booking',
      'GDPR-conscious data handling',
      'Instant updates',
      'Team management',
      'Multiple cards (one per service/location)',
      'Lead capture',
    ],
    caseStudy: {
      company: 'London Private Clinic',
      location: 'London, UK',
      quote:
        'Our practitioners share their CardGit cards at health expos and patients book consultations immediately. The GDPR-compliant lead capture was essential for us.',
      result: '35% of event-sourced new patients now book through the digital card',
    },
  },
  {
    slug: 'consultancies',
    title: 'Consultancies',
    headline: 'Digital Business Cards for Consultancies',
    subheadline:
      'CardGit helps consultants and advisory firms project a consistent, premium professional identity, capture client leads, and manage their entire team\'s digital presence from one dashboard.',
    icon: 'BarChart',
    painPoints: [
      'Senior consultants from the same firm present inconsistent personal brands at client meetings',
      'Consultancy project information and expertise areas change more frequently than paper cards allow',
      'Prospective clients need a frictionless way to book an initial consultation',
      'There is no easy way to track which networking events generate the highest quality leads',
    ],
    solutions: [
      'Team management ensures every consultant is branded consistently while retaining personal detail control',
      'Digital cards update instantly when expertise areas, case studies, or contact details change',
      'Appointment booking removes the friction from the initial client conversation',
      'Analytics reveal which networking contexts and card content drive the most high-value conversations',
    ],
    features: [
      'Team branding management',
      'Appointment booking',
      'Lead capture',
      'Service showcase with CTA buttons',
      'Analytics dashboard',
      'Multiple cards per consultant',
    ],
    caseStudy: {
      company: 'Financial Consultancy',
      location: 'London, UK',
      quote:
        'Every consultant in our firm has a branded CardGit card. Prospects book initial consultations directly from the card. We\'ve standardised our lead capture process across 40 people.',
      result: 'Uniform brand experience across all client-facing staff',
    },
  },
  {
    slug: 'universities',
    title: 'Universities & Education',
    headline: 'Digital Business Cards for Universities and Academic Institutions',
    subheadline:
      'CardGit helps universities, academic departments, and researchers manage their professional digital identity, connect with industry partners, and facilitate graduate career networking.',
    icon: 'GraduationCap',
    painPoints: [
      'Academic and research staff contact details change frequently with departmental moves and projects',
      'Graduate students need a professional digital presence for career networking but have limited budgets',
      'University departments struggle to maintain consistent brand representation across staff',
      'Industry partnership networking at academic events lacks a structured follow-up mechanism',
    ],
    solutions: [
      'Digital cards update instantly when department, role, or contact details change',
      'CardGit\'s free tier gives graduate students a professional presence with no cost barrier',
      'Team management allows universities to deploy consistently branded cards across entire departments',
      'Lead capture and appointment booking facilitate structured follow-up from academic networking events',
    ],
    features: [
      'Free tier for individuals',
      'Team management for departments',
      'Instant updates',
      'Lead capture',
      'Appointment booking',
      'Research and publication showcase',
    ],
    caseStudy: {
      company: 'UK Research University',
      location: 'UK',
      quote:
        'We rolled out CardGit to our entire business school faculty. Industry partners now connect directly with the right academics after our networking events rather than emailing the general enquiries inbox.',
      result: 'Industry partnership enquiries increased significantly within one term',
    },
  },
]
