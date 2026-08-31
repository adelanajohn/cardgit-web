# CardGit Platform Website — Comprehensive Build Prompt

> **Purpose:** This prompt contains everything an AI agent or developer needs to build the new, modern, polished, SEO-friendly, and AI/LLM-search-optimised marketing website for the CardGit platform — covering both the core **CardGit** product (digital business cards) and **CardGit Events** (networking-first event management platform).

---

## 1. WHAT CARDGIT IS

CardGit is a UK-based digital identity and professional networking platform with two interconnected products:

### CardGit (Core Product) — cardgit.com
A **digital business card and professional identity platform** for individuals, teams, and businesses.

- **Tagline:** "Your Digital Identity, Simplified" / "Interactive Identity for Modern Networking"
- **Value proposition:** Share your professional profile, website, social media, products, and services with a single scan. Build valuable connections and generate leads.
- **Target audience:** Professionals, freelancers, entrepreneurs, business owners, SMEs, enterprise teams, recruiters, creatives, agencies — with explicit UK market focus (London, Manchester, Birmingham mentioned in case studies).
- **Headquarters:** London, UK
- **Email:** info@cardgit.com
- **Social:** Facebook, LinkedIn, Instagram, YouTube

**Core Features:**
- Digital business card creation (free tier available)
- QR code sharing — share profile by scan, no app needed
- Lead capture — capture visitor info directly from your card
- Appointment booking — clients book meetings directly from the card
- Social media integration — LinkedIn, WhatsApp, Instagram, TikTok, Facebook, X, YouTube
- Interactive product & service showcase with CTA buttons (Buy, Enquire, Book Now)
- Real-time analytics — views, clicks, engagement, audience locations
- Team/enterprise management — manage all employee cards from one dashboard
- Multiple cards per user — separate cards for business, personal, events, side projects
- GDPR-conscious design
- Eco-friendly (replaces paper business cards)
- Event networking — connects to CardGit Events for in-person networking

**Use cases / target industries:** Sales teams, recruitment agencies, property firms, consultancies, construction companies, financial services, universities, healthcare organisations, creatives, artists.

---

### CardGit Events — events.cardgit.com
A **networking-first event management platform** for conferences, summits, expos, and business networking events. Built on top of CardGit's digital identity infrastructure.

- **Tagline:** "Networking-First Event Platform" / "Networking Reimagined"
- **Sub-tagline:** "Networking-first event platform powered by CardGit's digital identity infrastructure"
- **Target audience:** Event organisers, conference teams, business communities, brands, agencies, and organisations running live, hybrid, or multi-session events — primarily UK market.
- **URL:** events.cardgit.com (UAT: uat.events.cardgit.com)

**Core Features (Organiser-side):**
- Event creation and management (draft → published → live → completed)
- Event types: in-person, virtual, hybrid
- Registration management with ticketing (free, paid, early-bird, VIP, group)
- Stripe-powered payments with multi-currency support and promo codes
- Custom registration fields
- Role-based team management: owner, admin, moderator, speaker manager, sponsor manager, analyst, check-in staff, registration staff
- Schedule builder — drag-and-drop agenda, tracks, reusable session templates
- Speaker management and directory
- Sponsor and exhibitor management with lead capture
- Q&A moderation (review questions before they appear)
- Social wall moderation
- Venue and room management
- Attendee check-in portal with QR code scanning
- Event analytics, deep-dive analytics, revenue reports, activity feed
- Poll and survey builders
- Email management and announcements
- Data export
- Certificates
- Audit log
- Feature flags per event (enable/disable networking, polls, Q&A, gamification, social wall, sponsors per event)

**Core Features (Attendee-side):**
- Public event discovery and SEO-friendly event landing pages
- Smart matchmaking — AI-powered attendee matching based on CardGit profile, interests, professional goals
- Speed networking sessions
- Live Q&A — submit questions during sessions
- Live polls — vote in real time
- Social wall — live event community feed
- Session schedule with personal schedule builder
- Speaker directory
- Sponsor booths with lead capture
- Gamification — points, leaderboards, challenges, achievements, badges
- Group chat and direct messages
- Meeting scheduler — 1-to-1 meeting booking between attendees
- Photo gallery and event highlights
- Presentation viewer
- Post-event surveys
- Attendee certificates
- Networking hub — discover and connect with other attendees
- Connection summary — view connections made, interaction history
- Incognito mode, Do Not Disturb, networking opt-in/out controls
- PWA (Progressive Web App) with offline support and push notifications

---

## 2. WHAT TO BUILD

Build the **new marketing website for the CardGit platform** at **cardgit.com** — a unified marketing website that covers both CardGit (digital business cards) and CardGit Events.

This is a **standalone marketing/landing site**, NOT the app itself. It must:
- Be visually modern, polished, and premium-quality
- Be fully SEO-optimised for organic search
- Be AI search and LLM-search optimised (structured data, clear entity definitions, comprehensive content)
- Perform fast (Core Web Vitals green)
- Be fully responsive (mobile-first)
- Support dark mode
- Integrate or clearly link to: `app.cardgit.com` (sign up/login), `events.cardgit.com` (events platform)

---

## 3. TECH STACK REQUIREMENTS

Use the same stack as the existing codebase to maintain consistency:

```
Framework:      React 18 + TypeScript + Vite 5
Styling:        Tailwind CSS v3 + PostCSS
Router:         React Router v6
State:          Zustand (minimal use on a marketing site)
Icons:          lucide-react
Animations:     Framer Motion (add this — the marketing site needs richer motion)
Font:           Inter (Google Fonts, weights 400/500/600/700, Latin subset, display=swap)
Package manager: npm
Monorepo:       Turborepo (fits inside the existing monorepo as apps/website)
Deployment:     Cloudflare Pages
SEO:            react-helmet-async for per-page meta, JSON-LD structured data
Sitemap:        vite-plugin-sitemap or manual static sitemap.xml
```

**Design System:** Extend the existing design tokens:
```css
--bg-page:        #f8fafc (light) / #020617 (dark)
--bg-surface:     #ffffff (light) / #0f172a (dark)
--text-primary:   #0f172a (light) / #f8fafc (dark)
--text-secondary: #475569 (light) / #cbd5e1 (dark)
--accent:         #6366f1 (light) / #818cf8 (dark)
Primary color:    Indigo — Tailwind primary-500 (#6366f1)
Gradient:         from-indigo-600 via-violet-600 to-purple-700 (hero/CTAs)
Alt gradient:     from-blue-600 via-purple-600 to-pink-500 (events sections)
Border radius:    rounded-2xl / rounded-3xl for cards, rounded-xl for buttons
Typography:       Inter, font-black for headings, font-semibold for labels
```

---

## 4. SITE STRUCTURE & PAGES

### Site Map

```
/ ................................ Home (unified CardGit platform overview)
/digital-business-cards .......... Product: Digital Business Cards
/events .......................... Product: CardGit Events
/features ........................ All Features (tabbed: Cards vs Events)
/pricing ......................... Pricing plans
/enterprise ...................... Enterprise / Teams
/use-cases ....................... Use Cases (by industry/role)
  /use-cases/sales-teams
  /use-cases/recruitment
  /use-cases/property
  /use-cases/events-organisers
  /use-cases/freelancers
  /use-cases/healthcare
  /use-cases/consultancies
  /use-cases/universities
/compare ......................... Comparison landing page
  /compare/cardgit-vs-paper-business-cards
  /compare/cardgit-events-vs-eventbrite
  /compare/cardgit-events-vs-hopin
  /compare/cardgit-events-vs-whova
/about ........................... About CardGit
/blog ............................ Blog / Content hub
  /blog/[slug] ................... Individual post
/updates ......................... Product changelog (freshness signal)
/press ........................... Press & media mentions
/faq ............................. FAQ
/privacy ......................... Privacy Policy
/terms ........................... Terms & Conditions
/security ........................ Security
/contact ......................... Contact
/search .......................... Site search (for WebSite SearchAction schema)
/sitemap.xml ..................... XML sitemap
/robots.txt ...................... Robots (with explicit AI crawler rules)
/llms.txt ........................ LLM site summary (see section 7.2)
/llms-full.txt ................... Extended LLM reference document (see section 7.3)
```

---

## 5. PAGE-BY-PAGE SPECIFICATIONS

### 5.1 Home Page `/`

**Goal:** Convert first-time visitors into sign-ups and event platform users. Communicate the full CardGit ecosystem clearly.

**Sections (in order):**

**A. Hero**
- Headline: "Your Digital Identity. Smarter Events. Stronger Connections."
- Sub-headline: "CardGit gives professionals, teams, and event organisers everything they need to network smarter — from digital business cards to networking-first event experiences."
- Two CTAs: "Create Your Free Card" → `https://app.cardgit.com/auth/signup` | "Discover Events" → `https://events.cardgit.com`
- Visual: Split or layered mockup showing both the digital card product and the event platform dashboard
- Background: mesh gradient (indigo → violet → purple), animated blob decorations
- Trust badge row: "GDPR Ready · UK-Based · Used by Professionals"

**B. Platform Overview (2-column feature card row)**
- Card 1 — CardGit Cards: "Digital Business Cards" — icon, short description, "Learn More" link
- Card 2 — CardGit Events: "Networking-First Events" — icon, short description, "Learn More" link
- Visual style: large rounded cards with gradient icon badges, hover lift effect

**C. Social Proof**
- Stat bar: "Used by professionals across industries · UK & International reach · GDPR Conscious"
- Testimonials carousel (3 testimonials from cardgit.com):
  - Jessica Miller, Marketing Consultant: "CardGit transformed the way I network. Clients now contact me directly from my digital card."
  - Daniel Kim, Software Engineer: "The appointment booking feature helped me generate more business opportunities."
  - Richard Thomson, Security Analyst: "Our company now maintains consistent branding across all employee business cards."

**D. Digital Business Card Features (6-grid)**
- Increase Brand Visibility
- Turn Every Interaction Into Revenue
- Never Miss an Opportunity Again
- Make Your Entire Team Your Marketing Force
- Promote Products & Campaigns in Real Time
- Eco-Friendly Networking

**E. CardGit Events Preview**
- Headline: "Run Smarter Events with CardGit Events"
- 3 feature cards: Smart Networking / Real-Time Engagement / Gamification
- CTA: "Explore CardGit Events" → /events

**F. How It Works (3 steps)**
1. Create Your Digital Business Card
2. Share Instantly with QR Code or Link
3. Get Discovered & Grow Your Network

**G. Industries / Use Cases**
- Grid of industry cards: Sales Teams, Recruiters, Property, Consultancies, Events Organisers, Freelancers, Healthcare, Universities
- Each links to `/use-cases/[slug]`

**H. Trusted by UK Teams (Case Studies)**
- London Marketing Consultancy case study
- Manchester Recruitment Agency case study
- Birmingham Property Consultant case study

**I. CTA Section**
- Headline: "Create Your Free Digital Business Card & Explore Networking Events"
- Two CTAs: "Create Free Card" / "Discover Events"

**J. FAQ preview (5 most common questions)**

**K. Footer** (full nav + legal + social)

---

### 5.2 Digital Business Cards Page `/digital-business-cards`

**SEO Title:** "Digital Business Cards | CardGit — Free, Smart & Eco-Friendly"
**Meta Description:** "Create your free digital business card with CardGit. Share your professional profile, products, and services with a single QR code. Used by professionals and businesses across the UK."

**Sections:**
- Hero: "The Smartest Digital Business Card in the UK"
- Feature deep-dives (each as a full-width alternating text+image section):
  1. Smart Lead Capture
  2. Appointment Booking
  3. Social Media Integration
  4. Instant QR Code Sharing
  5. Interactive Product Showcase
  6. Team Management Dashboard
  7. Multiple Cards / Multi-brand
  8. Analytics Dashboard
- Comparison table: Paper Business Cards vs CardGit (columns: Paper / CardGit Free / CardGit Pro / CardGit Teams)
- Pricing teaser → links to /pricing
- FAQ: Digital Business Card specific questions
- CTA: "Create Your Free Card"

---

### 5.3 CardGit Events Page `/events`

**SEO Title:** "CardGit Events — Networking-First Event Management Platform | UK Conferences & Summits"
**Meta Description:** "CardGit Events helps organisers run smarter conferences, summits, and networking events. Registration, attendee engagement, smart matchmaking, live Q&A, polls, gamification, and analytics — all in one platform."

**Sections:**
- Hero: "Run Smarter Events. Create More Meaningful Connections."
- Sub-headline: "The only event management platform built on digital identity infrastructure — so every attendee can network smarter, not just harder."
- CTAs: "Get Started Free" → events.cardgit.com/register | "See It In Action" (link to demo/events list)

**Tabs or toggle:** Organiser View / Attendee View

**Organiser Features (grid):**
- Event Creation & Management
- Registration & Ticketing (Stripe payments, multi-currency, promo codes)
- Role-based Team Management (7 roles)
- Schedule Builder (sessions, tracks, templates)
- Speaker Management
- Sponsor & Exhibitor Management
- Q&A Moderation
- Social Wall Moderation
- Venue & Room Management
- Check-in Portal with QR codes
- Event Analytics & Revenue Reports
- Poll & Survey Builders
- Email Management & Announcements
- Data Export & Certificates
- Per-event Feature Flags

**Attendee Features (grid):**
- Smart Matchmaking (AI-powered)
- Speed Networking
- Live Q&A
- Live Polls
- Social Wall
- Session Schedule & Personal Schedule
- Speaker Directory
- Sponsor Booths
- Gamification (points, leaderboard, challenges, achievements)
- Group Chat & Direct Messages
- Meeting Scheduler
- Photo Gallery & Highlights
- Post-event Surveys & Certificates
- Privacy Controls (incognito, DND)

**Event Types supported:**
- In-Person Events
- Virtual Events
- Hybrid Events

**Who it's for:**
- Conference organisers
- Summit teams
- Business networking communities
- Corporate event teams
- Industry associations
- Event agencies
- UK-based organisations

**Case study / social proof block**

**FAQ: CardGit Events specific**

**CTA:** "Start Your First Event Free"

---

### 5.4 Features Page `/features`

Tabbed interface switching between "Digital Cards" features and "Events Platform" features.
Full feature matrix with icons, short descriptions, and feature categories.

---

### 5.5 Pricing Page `/pricing`

**Note:** Implement with placeholder pricing tiers that can be updated. Structure:

**CardGit (Digital Cards):**
- Free: basic card, QR sharing
- Pro: analytics, appointment booking, lead capture, unlimited updates
- Teams: team dashboard, brand management, multiple users, SSO

**CardGit Events:**
- Starter: small events, basic features
- Professional: full feature set, analytics, custom branding
- Enterprise: white-label, dedicated support, custom integrations

Include a toggle: Monthly / Annual pricing
Include a feature comparison table
Include an FAQ section about pricing

---

### 5.6 Enterprise Page `/enterprise`

For large organisations and teams:
- Brand consistency across all employee cards
- Central dashboard management
- GDPR compliance & data controls
- Onboarding & off-boarding workflows
- Custom integrations
- Dedicated account support
- Analytics & reporting at team level
- SSO (Single Sign-On)
- CardGit Events multi-event management

CTA: "Book a Business Demo" → email/calendar link

---

### 5.7 Use Cases Pages `/use-cases/[slug]`

Each use-case page follows the same template:
- Hero specific to the industry
- Key pain points (before CardGit)
- How CardGit solves them
- Specific features used
- Relevant case study
- CTA

Pages: sales-teams, recruitment, property, events-organisers, freelancers, healthcare, consultancies, universities

---

### 5.8 About Page `/about`

- Company mission: "Simplifying Professional Identity and Human Connection"
- What CardGit is and why it was built
- Products overview
- UK-based, GDPR-conscious, built for modern professionals
- Team section (placeholder)
- Values
- Contact info: London, UK / info@cardgit.com

---

### 5.9 FAQ Page `/faq`

Categorised accordion FAQ covering:

**About CardGit:**
- What is a Digital Business Card?
- What is the best digital business card in the UK?
- Why CardGit?
- Is CardGit free?
- Can I track profile views?
- Can I create multiple digital business cards?
- Is CardGit GDPR conscious?
- Can I share my card with a QR code?

**CardGit Events:**
- What is CardGit Event?
- Who is CardGit Event for?
- Can CardGit Event handle event registration and attendee check-in?
- Can different team members have different admin access?
- Can I build and manage my event schedule?
- Does CardGit Event support session management?
- Can I create reusable session templates?
- Can I manage venues and rooms?
- Does CardGit Event include attendee networking features?
- Can attendees ask questions during live sessions?
- Can organisers moderate Q&A?
- Does CardGit Event support live polls?
- What is the social wall?
- Can the social wall be moderated?
- Can I manage sponsors and exhibitors?
- Can sponsors capture leads?
- Does CardGit Event include event analytics and reporting?
- Is CardGit Event suitable for UK conferences, summits and networking events?

---

### 5.10 Blog Page `/blog`

- Blog listing page with category filters
- Individual post template `/blog/[slug]`
- Rich JSON-LD `Article` schema on each post
- Placeholder posts for launch categories:
  - Event Management Tips
  - Networking Strategies
  - Digital Business Card Best Practices
  - UK Business Networking
  - Product Updates

---

## 6. SEO REQUIREMENTS

### 6.1 Technical SEO

Every page must have:
```html
<title>{page-specific title} | CardGit</title>
<meta name="description" content="{unique 150-160 char description}" />
<meta name="robots" content="index, follow" />
<link rel="canonical" href="https://cardgit.com/{slug}" />

<!-- Open Graph -->
<meta property="og:type" content="website" />
<meta property="og:title" content="{title}" />
<meta property="og:description" content="{description}" />
<meta property="og:image" content="https://cardgit.com/og/{slug}.png" />
<meta property="og:url" content="https://cardgit.com/{slug}" />
<meta property="og:site_name" content="CardGit" />
<meta property="og:locale" content="en_GB" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@cardgit" />
<meta name="twitter:title" content="{title}" />
<meta name="twitter:description" content="{description}" />
<meta name="twitter:image" content="https://cardgit.com/og/{slug}.png" />
```

Use `react-helmet-async` with a `<HelmetProvider>` at the root and a `<SEO>` component that each page uses.

### 6.2 Structured Data (JSON-LD)

**Home Page:**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "CardGit",
  "url": "https://cardgit.com",
  "logo": "https://cardgit.com/assets/logo.png",
  "description": "CardGit is a UK-based digital identity and professional networking platform offering digital business cards and networking-first event management.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "London",
    "addressCountry": "GB"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "info@cardgit.com",
    "contactType": "customer service"
  },
  "sameAs": [
    "https://www.facebook.com/share/1BPnySukTD/",
    "https://www.linkedin.com/company/cardgit",
    "https://instagram.com/cardgit",
    "https://youtube.com/@cardgit"
  ]
}
```

**Software Product schemas** on product pages (`/digital-business-cards`, `/events`):
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "CardGit Events",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web, iOS, Android",
  "description": "Networking-first event management platform for conferences, summits, and networking events.",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "GBP" },
  "url": "https://events.cardgit.com"
}
```

**FAQ Page** — `FAQPage` schema with all Q&A pairs

**Blog posts** — `Article` schema with author, datePublished, dateModified, headline, image

**Breadcrumbs** (`BreadcrumbList`) on all inner pages

**Use case pages** — `WebPage` + `HowTo` or `Article` schema

### 6.3 Core Web Vitals

- Use `<link rel="preconnect">` for Google Fonts
- Subset Inter font (Latin only, weights 400/500/600/700)
- Lazy-load all images below the fold with `loading="lazy"` and explicit `width`/`height`
- Use `<picture>` with WebP and AVIF sources for hero images
- Preload hero image with `<link rel="preload">`
- Code-split each route with `React.lazy` + `Suspense`
- Keep JS bundle under 200KB gzipped for initial load
- Use `rel="prefetch"` for likely next pages
- Target LCP < 2.5s, CLS < 0.1, FID/INP < 200ms

### 6.4 Sitemap & Robots

Generate `/sitemap.xml` listing all static pages with `lastmod`, `changefreq`, and `priority`.

`/robots.txt`:
```
User-agent: *
Allow: /
Sitemap: https://cardgit.com/sitemap.xml

# Block app routes
Disallow: /app/
```

### 6.5 SEO Content Strategy

- H1 on every page — unique, keyword-rich
- H2s and H3s following logical hierarchy
- All images have descriptive `alt` text
- Internal linking between product pages and use case pages
- UK-specific language throughout (organiser not organizer, licence not license, etc.)
- Target keyword clusters:
  - "digital business card UK", "free digital business card", "best digital business card"
  - "QR code business card", "digital business card app"
  - "event management platform UK", "conference management software UK"
  - "networking events platform", "attendee networking app"
  - "event registration software UK", "hybrid event platform UK"

---

## 7. GEO — GENERATIVE ENGINE OPTIMISATION

**GEO (Generative Engine Optimisation)** is the practice of structuring content so it gets cited, surfaced, or referenced by AI-powered generative search engines. These are distinct from traditional search engines — they synthesise answers and either cite your content or they don't. A high Google ranking does not guarantee inclusion in an AI answer.

**Target generative engines:**
- Google AI Overviews (SGE)
- Perplexity AI (including Perplexity Pro with web access)
- ChatGPT Search (GPT-4o with browsing)
- Bing Copilot / Microsoft Copilot
- Claude (Anthropic, with web search)
- You.com AI search
- Brave Leo AI

**LLM crawlers to explicitly support:**
- `GPTBot` (OpenAI)
- `ClaudeBot` (Anthropic)
- `PerplexityBot`
- `GoogleOther` (used by Google AI training/indexing alongside Googlebot)
- `OAI-SearchBot` (OpenAI SearchGPT)
- `Applebot-Extended` (Apple Intelligence)
- `CCBot` (Common Crawl — used by many open-source LLMs)
- `Diffbot`

---

### 7.1 robots.txt — Explicitly Allow AI Crawlers

The most critical GEO step. Many sites accidentally block AI crawlers, removing themselves from AI-generated answers entirely.

```
User-agent: *
Allow: /
Sitemap: https://cardgit.com/sitemap.xml

# === AI / LLM CRAWLERS — explicitly allowed ===
User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Applebot
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: GoogleOther
Allow: /

User-agent: CCBot
Allow: /

User-agent: Diffbot
Allow: /

User-agent: YouBot
Allow: /

# Block only internal app routes from all crawlers
User-agent: *
Disallow: /app/
Disallow: /api/
```

---

### 7.2 /llms.txt — LLM Site Summary File

Create `/llms.txt` at the root. This is the emerging standard (analogous to robots.txt) for giving LLMs a structured, plain-text overview of your site. Many LLM crawlers fetch this first.

```
# CardGit

> CardGit is a UK-based digital identity and professional networking platform founded in London. It offers two products: CardGit (digital business cards) and CardGit Events (networking-first event management platform for conferences, summits, and business networking events).

## CardGit — Digital Business Cards

CardGit is a digital business card platform that allows professionals, freelancers, and businesses to create a shareable digital profile accessible via QR code or link. It replaces physical paper business cards with a dynamic, updatable digital identity.

### Key Features
- Digital business card creation (free tier available)
- QR code profile sharing — no app required to view
- Lead capture — collect visitor contact details directly from the card
- Appointment booking — clients book meetings from the card
- Social media integration — LinkedIn, WhatsApp, Instagram, TikTok, Facebook, X, YouTube
- Interactive product and service showcase with call-to-action buttons
- Real-time analytics — views, clicks, engagement, and audience location data
- Team/enterprise management — centralised dashboard for all employee cards
- Multiple cards per user — business, personal, events, side projects
- GDPR-conscious data handling
- Eco-friendly alternative to paper business cards

### Who Uses CardGit
Professionals, freelancers, entrepreneurs, SMEs, sales teams, recruitment agencies, property consultants, financial services firms, healthcare organisations, universities, creatives, and enterprise teams across the United Kingdom and internationally.

### URLs
- Website: https://cardgit.com
- Sign up (free): https://app.cardgit.com/auth/signup
- Features: https://cardgit.com/features
- Pricing: https://cardgit.com/pricing
- Enterprise: https://cardgit.com/enterprise
- FAQ: https://cardgit.com/faq

---

## CardGit Events — Networking-First Event Management Platform

CardGit Events is an event management platform designed for conference organisers, summit teams, expo managers, and business networking event organisers. It is built on top of CardGit's digital identity infrastructure, enabling richer attendee networking than standard event platforms.

### Supported Event Types
- In-person events
- Virtual events
- Hybrid events (in-person + virtual combined)

### Key Organiser Features
- Event creation and full lifecycle management (draft → published → live → completed)
- Attendee registration with ticketing — free, paid, early-bird, VIP, and group ticket types
- Stripe-powered payment processing with multi-currency support and promo codes
- Custom registration fields
- Role-based team management with 7 roles: owner, admin, moderator, speaker manager, sponsor manager, analyst, check-in staff
- Drag-and-drop schedule builder with tracks and reusable session templates
- Speaker management and public speaker directory
- Sponsor and exhibitor management with lead capture tools
- Q&A moderation — review and approve audience questions before they appear
- Social wall moderation
- Venue and room management
- Attendee check-in portal with QR code scanning
- Event analytics, deep-dive analytics, revenue reporting, and activity feeds
- Live poll and survey builders
- Email management, automated notifications, and announcements
- Data export and attendee certificates
- Per-event feature flags — individually enable or disable networking, polls, Q&A, gamification, social wall, and sponsors

### Key Attendee Features
- Smart matchmaking — AI-powered attendee matching based on CardGit profile, interests, and professional goals
- Speed networking sessions
- Live Q&A — submit questions to speakers during sessions
- Live polls — vote in real time during sessions
- Social wall — live community feed throughout the event
- Session schedule with personal schedule builder
- Speaker directory
- Sponsor booths with lead capture
- Gamification — points, leaderboards, challenges, achievements, and badges
- Group chat and direct messaging between attendees
- Meeting scheduler — book 1-to-1 meetings with other attendees
- Photo gallery and event highlights
- Post-event surveys and completion certificates
- Networking hub — discover and connect with all attendees
- Privacy controls — incognito mode, Do Not Disturb, networking opt-in/out

### Who Uses CardGit Events
Conference organisers, summit teams, corporate event teams, business networking communities, industry associations, event agencies, and UK-based organisations running professional events.

### URLs
- Platform: https://events.cardgit.com
- Sign up: https://events.cardgit.com/register
- Discover events: https://events.cardgit.com/events
- FAQ: https://cardgit.com/faq

---

## Company Information
- Name: CardGit
- Headquarters: London, United Kingdom
- Contact: info@cardgit.com
- LinkedIn: https://www.linkedin.com/company/cardgit
- Facebook: https://www.facebook.com/share/1BPnySukTD/
- Instagram: https://instagram.com/cardgit
- YouTube: https://youtube.com/@cardgit
- GDPR: Conscious and compliant
- Market: United Kingdom (primary), International
```

---

### 7.3 /llms-full.txt — Extended LLM Reference Document

Create a second, more detailed file `/llms-full.txt` for LLMs that want deeper context. Include:

- Full FAQ (every question and answer from the FAQ page in plain text)
- Complete feature lists with one-sentence descriptions of each feature
- Use case descriptions for each industry
- Comparison of CardGit vs traditional business cards
- Comparison of CardGit Events vs generic event platforms
- Glossary of terms used in the platform (e.g. "speed networking", "social wall", "matchmaking")
- Pricing tier descriptions
- Company background and mission

This file is specifically designed for LLMs that scrape and index full documents for retrieval-augmented generation (RAG).

---

### 7.4 Entity Definition — The "Who Is CardGit" Paragraph

Every page must contain a short, factual entity definition block in the `<main>` content — visible to crawlers, visually subtle for users. This is the paragraph an LLM will pull when asked "what is CardGit?".

**Canonical entity paragraph (include verbatim on homepage, about page, and as a hidden `<p>` in the site footer):**

> "CardGit is a digital identity and professional networking company based in London, United Kingdom. It operates two products: CardGit, a digital business card platform that lets professionals share their profile via QR code or link; and CardGit Events, a networking-first event management platform for conferences, summits, and business networking events. CardGit is used by professionals, SMEs, and enterprise teams across the UK and internationally. The company can be contacted at info@cardgit.com."

Place this inside a `<p>` with class `sr-only` in the footer so it's accessible to crawlers without disrupting the visual design.

---

### 7.5 Definition-First Writing Rule

Every feature, product, and section must open with a factual declarative sentence — not a marketing claim. This is the sentence an AI engine will extract and cite.

| ❌ Marketing-first (bad for GEO) | ✅ Definition-first (good for GEO) |
|---|---|
| "Transform the way you network forever!" | "CardGit is a digital business card platform that replaces physical cards with a QR-shareable digital profile." |
| "Our AI magic connects the right people!" | "Smart matchmaking in CardGit Events uses attendee profile data, stated interests, and professional goals to suggest relevant connections." |
| "Never miss a beat at your event!" | "The CardGit Events schedule builder allows organisers to create multi-track event agendas with drag-and-drop session management and reusable session templates." |
| "Revolutionary lead gen at your fingertips!" | "Lead capture in CardGit allows card viewers to submit their contact information directly from a digital business card profile." |

Apply this rule to: hero sub-headlines, feature card descriptions, FAQ answers, use case page intros, and blog post opening paragraphs.

---

### 7.6 Comprehensive FAQ Coverage for AI Queries

The FAQ page must answer every query a person would type into Perplexity, ChatGPT, or Google AI Overviews about CardGit. Structure each Q&A to be self-contained and citable.

**Add these AI-query-optimised questions** (in addition to existing FAQ content):

```
Q: What is CardGit?
A: CardGit is a UK-based digital business card and professional networking platform. 
   It allows individuals and businesses to create a digital profile shared via QR code 
   or link, replacing physical business cards. CardGit also offers CardGit Events, an 
   event management platform for conferences and networking events.

Q: What is the difference between CardGit and CardGit Events?
A: CardGit is the digital business card product — it lets professionals create and share 
   a digital profile. CardGit Events is a separate event management platform for 
   organisers running conferences, summits, and networking events. Both products share 
   the same identity infrastructure, so CardGit profile data powers the smart matchmaking 
   in CardGit Events.

Q: Is CardGit free to use?
A: Yes. CardGit offers a free tier that includes digital business card creation and QR 
   code sharing. Paid plans add features such as lead capture, appointment booking, 
   analytics, and team management.

Q: Where is CardGit based?
A: CardGit is based in London, United Kingdom. It serves professionals and businesses 
   across the UK and internationally.

Q: Is CardGit GDPR compliant?
A: CardGit is built with GDPR-conscious data practices, appropriate for UK and EU 
   businesses handling professional contact data.

Q: What types of events does CardGit Events support?
A: CardGit Events supports in-person events, virtual events, and hybrid events. It is 
   designed for conferences, summits, expos, corporate networking events, industry 
   associations, and community-led professional events.

Q: How does smart matchmaking work in CardGit Events?
A: CardGit Events uses attendee profile data from CardGit — including job title, 
   industry, stated interests, and professional goals — to suggest relevant attendee 
   connections. Attendees can also set networking preferences such as what they are 
   looking for and what they are offering.

Q: Does CardGit Events support paid ticketing?
A: Yes. CardGit Events supports paid ticketing via Stripe, including free tickets, paid 
   tickets, early-bird pricing, VIP tickets, and group tickets. It also supports promo 
   codes and multi-currency payments.

Q: Can I manage my team's digital business cards with CardGit?
A: Yes. CardGit offers team and enterprise plans that let administrators manage all 
   employee digital cards from a central dashboard, enforce brand consistency, and 
   onboard or offboard staff.

Q: What is a digital business card?
A: A digital business card is a shareable online profile that replaces a physical paper 
   business card. It contains contact details, social media links, products, services, 
   and other professional information. It is shared via a QR code or a link and can be 
   updated instantly without reprinting.

Q: How does CardGit compare to paper business cards?
A: Unlike paper business cards, CardGit digital cards can be updated instantly, include 
   interactive elements like appointment booking and product showcases, track engagement 
   analytics, and are eco-friendly. They are shared via QR code or link and require no 
   printing cost.

Q: What is the social wall in CardGit Events?
A: The social wall is a live community feed within CardGit Events where attendees can 
   see and engage with event activity in real time. Organisers can moderate social wall 
   content before it appears publicly.

Q: How do I get started with CardGit?
A: Sign up for a free account at app.cardgit.com. You can create your digital business 
   card immediately with no payment required.

Q: How do I get started with CardGit Events?
A: Register at events.cardgit.com to create your organiser account and start building 
   your first event. A free tier is available for smaller events.
```

Implement all FAQ answers using `FAQPage` JSON-LD schema.

---

### 7.7 Structured Data — Full GEO-Optimised Schema Set

Implement all of these on the appropriate pages:

**Organization (homepage + all pages via global component):**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "CardGit",
  "alternateName": ["CardGit Events", "CardGit Digital Business Cards"],
  "url": "https://cardgit.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://cardgit.com/assets/logo.png",
    "width": 200,
    "height": 60
  },
  "description": "CardGit is a UK-based digital identity platform offering digital business cards and a networking-first event management platform called CardGit Events.",
  "foundingLocation": "London, United Kingdom",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "London",
    "addressCountry": "GB"
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "email": "info@cardgit.com",
      "contactType": "customer service",
      "areaServed": ["GB", "US", "IE"],
      "availableLanguage": "English"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/share/1BPnySukTD/",
    "https://www.linkedin.com/company/cardgit",
    "https://instagram.com/cardgit",
    "https://youtube.com/@cardgit"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "CardGit Products",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "SoftwareApplication",
          "name": "CardGit",
          "description": "Digital business card platform"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "SoftwareApplication",
          "name": "CardGit Events",
          "description": "Networking-first event management platform"
        }
      }
    ]
  }
}
```

**SoftwareApplication — CardGit (/digital-business-cards):**
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "CardGit",
  "alternateName": "CardGit Digital Business Cards",
  "applicationCategory": "BusinessApplication",
  "applicationSubCategory": "Digital Business Card",
  "operatingSystem": "Web Browser, iOS, Android",
  "url": "https://app.cardgit.com",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "GBP",
    "description": "Free tier available. Paid plans from £X/month."
  },
  "description": "CardGit is a digital business card platform that allows professionals to create a shareable digital profile accessible via QR code or link. Features include lead capture, appointment booking, social media integration, team management, and analytics.",
  "featureList": [
    "Digital business card creation",
    "QR code profile sharing",
    "Lead capture",
    "Appointment booking",
    "Social media integration",
    "Analytics dashboard",
    "Team management",
    "Multiple cards per user",
    "GDPR-conscious"
  ],
  "screenshot": "https://cardgit.com/og/digital-business-cards.png",
  "publisher": {
    "@type": "Organization",
    "name": "CardGit",
    "url": "https://cardgit.com"
  }
}
```

**SoftwareApplication — CardGit Events (/events):**
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "CardGit Events",
  "applicationCategory": "BusinessApplication",
  "applicationSubCategory": "Event Management Software",
  "operatingSystem": "Web Browser, iOS, Android (PWA)",
  "url": "https://events.cardgit.com",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "GBP",
    "description": "Free tier available for small events."
  },
  "description": "CardGit Events is a networking-first event management platform for conferences, summits, expos, and business networking events in the UK. Supports in-person, virtual, and hybrid events with registration, ticketing, smart matchmaking, live Q&A, polls, gamification, and analytics.",
  "featureList": [
    "Event registration and ticketing",
    "Smart attendee matchmaking",
    "Speed networking",
    "Live Q&A with moderation",
    "Live polls",
    "Social wall",
    "Schedule builder with tracks",
    "Speaker management",
    "Sponsor management",
    "Gamification — points, leaderboard, achievements",
    "QR code check-in",
    "Event analytics and revenue reporting",
    "Hybrid and virtual event support",
    "Role-based team management"
  ],
  "screenshot": "https://cardgit.com/og/events.png",
  "publisher": {
    "@type": "Organization",
    "name": "CardGit",
    "url": "https://cardgit.com"
  }
}
```

**WebSite with SearchAction (for Sitelinks Search Box in Google):**
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "CardGit",
  "url": "https://cardgit.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://cardgit.com/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}
```

**FAQPage (homepage FAQ preview + /faq page):**
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is CardGit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CardGit is a UK-based digital identity platform based in London. It offers two products: CardGit, a digital business card platform, and CardGit Events, a networking-first event management platform for conferences and summits."
      }
    },
    {
      "@type": "Question",
      "name": "Is CardGit free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. CardGit offers a free tier that includes digital business card creation and QR code sharing. Paid plans are available with additional features including lead capture, appointment booking, analytics, and team management."
      }
    }
    /* ... all FAQ pairs ... */
  ]
}
```

**BreadcrumbList (all inner pages):**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://cardgit.com" },
    { "@type": "ListItem", "position": 2, "name": "Events", "item": "https://cardgit.com/events" }
  ]
}
```

**Article (blog posts):**
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "{Post title}",
  "description": "{Post meta description}",
  "image": "https://cardgit.com/blog/{slug}/og.png",
  "datePublished": "{ISO 8601 date}",
  "dateModified": "{ISO 8601 date}",
  "author": {
    "@type": "Organization",
    "name": "CardGit",
    "url": "https://cardgit.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "CardGit",
    "logo": { "@type": "ImageObject", "url": "https://cardgit.com/assets/logo.png" }
  },
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://cardgit.com/blog/{slug}" }
}
```

**HowTo (How It Works section on homepage):**
```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Create a Digital Business Card with CardGit",
  "description": "Create and share a professional digital business card in minutes using CardGit.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Create Your Digital Business Card",
      "text": "Sign up at app.cardgit.com and fill in your professional details, add your social links, and customise your card."
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Share Instantly with QR Code or Link",
      "text": "Your card generates a unique QR code and shareable link. Anyone can view your profile without installing an app."
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Get Discovered and Grow Your Network",
      "text": "Receive leads, booking requests, and connection requests directly from your digital card."
    }
  ]
}
```

---

### 7.8 Semantic HTML for AI Parse-Ability

Structure every page with correct semantic HTML — AI crawlers parse semantic structure to understand content hierarchy:

```html
<main>
  <article> <!-- product page or blog post -->
    <header>
      <h1>...</h1>
      <p class="lead">...</p> <!-- entity definition paragraph -->
    </header>

    <section aria-labelledby="features-heading">
      <h2 id="features-heading">Features</h2>
      <dl> <!-- feature definitions -->
        <dt>Smart Matchmaking</dt>
        <dd>Smart matchmaking automatically connects attendees based on their CardGit profile, stated interests, and professional goals.</dd>
      </dl>
    </section>

    <section aria-labelledby="faq-heading">
      <h2 id="faq-heading">Frequently Asked Questions</h2>
      <!-- FAQAccordion with role="list", role="listitem", aria-expanded -->
    </section>
  </article>
</main>
```

Rules:
- One `<h1>` per page — never skip heading levels
- `<section>` elements have `aria-labelledby` pointing to their heading
- Feature lists use `<dl>/<dt>/<dd>` for definition-pair parsing
- Navigation uses `<nav aria-label="Main navigation">`
- Footer uses `<footer>` with `<nav aria-label="Footer navigation">`
- No `<div>` where a semantic element exists

---

### 7.9 Content Freshness Signals

AI engines (especially Perplexity and ChatGPT Search) weight recency. Build these freshness mechanisms in:

- **Blog** — publish at minimum 2 articles per month. Topics should target AI-searchable queries (e.g. "best event management platform UK 2026", "how to network at conferences", "digital business card vs paper business card").
- **Changelog / Updates page** — `/updates` listing new features and improvements with ISO dates. Each entry has `datePublished` in JSON-LD.
- **`<meta name="lastmod">` equivalent** — ensure sitemap.xml `<lastmod>` entries are updated on every deploy.
- **News/Press page** — `/press` with any media mentions, awards, or announcements. Even self-authored press releases count as freshness signals.

---

### 7.10 Citability — Writing for AI Quotation

AI engines quote pages that contain short, self-contained, factual statements. Every feature description, FAQ answer, and product description must be writable as a standalone citation.

**Test:** Read any paragraph out loud. If it makes sense without the surrounding context and contains a factual claim, it is citable.

**Paragraph structure for maximum citability:**
1. Topic sentence (factual definition)
2. Elaboration (how it works)
3. Why it matters (context or use case)
4. Optional: specific detail (number, example, platform name)

**Example — Smart Matchmaking:**
> "Smart matchmaking in CardGit Events automatically suggests relevant attendee connections based on profile data. The system analyses each attendee's CardGit profile, including job title, industry, stated interests, and what they are looking for at the event. This is particularly useful for conferences and summits where attendees want to meet specific types of professionals. Matchmaking suggestions are delivered through the in-app networking hub before and during the event."

This paragraph is citable by any AI engine answering "how does event matchmaking work?".

---

### 7.11 Competitive Comparison Content

AI engines frequently answer "X vs Y" queries. Create content that positions CardGit directly in comparative searches:

**Pages to add:**
- `/compare/cardgit-vs-paper-business-cards`
- `/compare/cardgit-events-vs-eventbrite`
- `/compare/cardgit-events-vs-hopin`
- `/compare/cardgit-events-vs-whova`

Each comparison page uses a factual, balanced structure (not attack content):
- Feature comparison table
- Use case differences
- Pricing differences
- Who each is best for

These pages capture high-intent AI queries like "what is better than Eventbrite for UK conferences?" and "Hopin alternative UK".

---

### 7.12 Authority Signals for AI Citation

AI engines prefer citing pages with external authority signals:

- **Get listed in directories:** Capterra, G2, GetApp, Product Hunt, AlternativeTo — these are frequently scraped by AI training data
- **Press page:** `/press` with any coverage, awards, or mentions
- **LinkedIn Company Page:** Keep updated — AI engines treat LinkedIn as an authoritative entity source
- **Wikipedia / Wikidata:** If CardGit grows sufficiently, a Wikidata entry creates a strong entity signal for Google's Knowledge Graph, which feeds AI Overviews
- **Schema `sameAs` links:** The Organization schema's `sameAs` array (already included) signals to AI engines which profiles belong to the same entity

---

### 7.13 Server-Side Rendering / Pre-Rendering

AI crawlers (especially GPTBot and ClaudeBot) do not reliably execute JavaScript. A React SPA that renders client-side will return an empty `<div id="root">` to most AI crawlers — meaning your content is invisible to AI search.

**Required:** Pre-render all marketing pages to static HTML.

Use `vite-ssg` (Vue/Vite static site generation, React-compatible fork available) or `react-snap` or configure Cloudflare Pages with a pre-rendering step:

```bash
npm install vite-plugin-prerender
```

```ts
// vite.config.ts
import prerender from 'vite-plugin-prerender'

export default defineConfig({
  plugins: [
    react(),
    prerender({
      routes: [
        '/',
        '/digital-business-cards',
        '/events',
        '/features',
        '/pricing',
        '/enterprise',
        '/about',
        '/faq',
        '/blog',
        '/contact',
        '/use-cases/sales-teams',
        '/use-cases/recruitment',
        '/use-cases/property',
        '/use-cases/events-organisers',
        '/use-cases/freelancers',
        '/use-cases/healthcare',
        '/compare/cardgit-vs-paper-business-cards',
        '/compare/cardgit-events-vs-eventbrite',
      ],
    }),
  ],
})
```

All pre-rendered HTML must include:
- Complete visible text content (not just a loading spinner)
- All JSON-LD structured data in `<head>`
- All meta tags
- Navigation links for crawl discovery

---

### 7.14 GEO Checklist

Before launch, verify all GEO requirements:

- [ ] `robots.txt` explicitly allows: GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, GoogleOther, Applebot-Extended, CCBot
- [ ] `/llms.txt` accessible, accurate, and complete
- [ ] `/llms-full.txt` accessible with full FAQ and feature detail
- [ ] Entity definition paragraph present on homepage, about page, and as `sr-only` in footer
- [ ] Every feature description opens with a definition-first sentence
- [ ] FAQ covers all AI-query questions (minimum 25 Q&A pairs with full answers)
- [ ] All FAQ Q&A pairs implemented as `FAQPage` JSON-LD schema
- [ ] `Organization` schema with `alternateName`, `sameAs`, `foundingLocation`
- [ ] `SoftwareApplication` schema on both product pages
- [ ] `HowTo` schema on homepage How It Works section
- [ ] `Article` schema on all blog posts
- [ ] `BreadcrumbList` schema on all inner pages
- [ ] `WebSite` schema with `SearchAction` on homepage
- [ ] All pages pre-rendered to static HTML (no JS-only content)
- [ ] Blog publishing schedule established (minimum 2 posts/month)
- [ ] `/updates` changelog page exists with dated entries
- [ ] Comparison pages created for at least 2 competitors
- [ ] Product listed on Capterra, G2, Product Hunt, AlternativeTo
- [ ] LinkedIn company page URL in `sameAs`
- [ ] sitemap.xml `<lastmod>` updated on every deploy
- [ ] All paragraphs pass the "standalone citation" test

---

## 8. DESIGN & COMPONENT SPECIFICATIONS

### 8.1 Design Principles

- **Premium, not flashy.** Clean white space, clear type hierarchy, purposeful colour use.
- **Motion-enhanced, not motion-heavy.** Framer Motion for scroll-triggered section reveals, not autoplay carousels.
- **Accessibility-first.** WCAG 2.1 AA. Focus rings, skip-to-content link, `aria-label` on all icon-only buttons, colour contrast ≥ 4.5:1.
- **Dark mode.** Class-based (`html.dark`), consistent with existing app. FOUC prevention script in `<head>`.
- **Mobile-first.** Every section designed for 375px first, then scaled up.

### 8.2 Component Library

Build these shared components:

```
<SEO />           — Helmet-based per-page meta + JSON-LD
<Navbar />        — Sticky top nav with mega-menu for Products
<Footer />        — Full footer with 4 columns + social links
<Hero />          — Flexible hero with headline, sub, CTAs, visual
<FeatureCard />   — Icon + title + description card with hover effect
<TestimonialCard />— Avatar + quote + name + role
<PricingCard />   — Tier card with feature list + CTA
<FAQAccordion />  — Accessible accordion with ARIA
<CTABanner />     — Full-width CTA section
<Badge />         — Pill badge (e.g. "Free", "UK", "GDPR")
<GradientText />  — Headline text with gradient clip
<AnimatedSection />— Framer Motion scroll-reveal wrapper
<BlogCard />      — Blog post preview card
<UseCaseCard />   — Industry use case card
<LogoCloud />     — Row of trust/partner logos
```

### 8.3 Navbar

Desktop:
- Logo (CardGit logotype + icon)
- Products mega-menu dropdown: "Digital Business Cards" | "CardGit Events"
- Nav links: Features, Pricing, Use Cases, Blog
- Right: "Login" (ghost) | "Get Started Free" (primary gradient button) | Dark mode toggle

Mobile:
- Logo + hamburger menu
- Full-screen slide-in drawer
- Same links + CTAs

### 8.4 Footer

4 columns:
1. Brand: Logo, short description, social icons (Facebook, LinkedIn, Instagram, YouTube), "London, UK · info@cardgit.com"
2. Products: Digital Business Cards, CardGit Events, Features, Pricing, Enterprise
3. Company: About, Blog, Careers, Contact, Press
4. Legal: Privacy Policy, Terms & Conditions, Security, Cookie Policy

Bottom bar: "© 2026 CardGit. All rights reserved." + GDPR badge

### 8.5 Hero Animation

Use Framer Motion for:
- Staggered headline word reveal (left → right)
- CTA buttons fade-in-up with delay
- Hero visual floating animation
- Blob background: CSS keyframe animation (matching existing `animate-blob`)

### 8.6 Scroll Animations

Every major section uses `<AnimatedSection>` which wraps with:
```tsx
<motion.div
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
>
```

### 8.7 Colour Usage

- Primary actions / CTAs: `bg-gradient-to-r from-indigo-600 to-violet-600`
- Secondary/ghost: `border border-indigo-200 text-indigo-700`
- Section backgrounds alternate: `--bg-page` → `--bg-surface` → `--bg-page`
- Events sections: use `from-blue-600 via-purple-600 to-pink-500` gradient for differentiation
- Danger/negative: red-500
- Success: emerald-500

---

## 9. ACCESSIBILITY

- `<html lang="en-GB">`
- Skip-to-content link as first focusable element
- All interactive elements keyboard-navigable
- Focus-visible outline on all focusable elements (`focus-visible:ring-2 focus-visible:ring-indigo-500`)
- No colour-only information conveyance
- All icons: either `aria-hidden="true"` (decorative) or `aria-label` (functional)
- Images: meaningful `alt` text, decorative images `alt=""`
- `<button>` not `<div onClick>` for all clickable non-link elements
- Accordion items: `aria-expanded`, `aria-controls` pattern
- Contrast: minimum 4.5:1 for body text, 3:1 for large text

---

## 10. PERFORMANCE

- `React.lazy` + `Suspense` for all non-critical routes
- `<img loading="lazy" decoding="async">` for all below-fold images
- Preload LCP image: `<link rel="preload" as="image" href="/hero.webp">`
- Font: `font-display: swap`, subset Latin only, preconnect to fonts.googleapis.com
- CSS: Tailwind purges unused classes in production (PurgeCSS via Tailwind)
- Compression: Brotli/gzip via Cloudflare
- Cache headers: immutable for hashed assets, `max-age=3600` for HTML
- No render-blocking third-party scripts

---

## 11. DEPLOYMENT & CI/CD

Fits into the existing monorepo as `apps/website`:

```yaml
# .github/workflows/deploy-website.yml
name: Deploy Website
on:
  push:
    branches: [main]
    paths:
      - 'apps/website/**'
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: '20' }
      - run: npm ci
      - run: npx turbo build --filter=@cardgit-events/website
      - uses: cloudflare/pages-action@v1
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          projectName: cardgit-website
          directory: apps/website/dist
```

---

## 12. CONTENT GUIDELINES

### Voice & Tone
- **Professional but human.** Not corporate jargon.
- **Direct and factual.** Leads with what the product IS, then what it DOES.
- **UK English throughout.** organiser (not organizer), licence (noun), practise (verb), programme (not program for events), recognise.
- **Active voice.** "CardGit connects you" not "connections are made".
- **No hyperbole.** Avoid "revolutionary", "world-class", "cutting-edge", "game-changing".

### Content Priorities
1. **Clarity over cleverness.** A confused visitor doesn't convert.
2. **Evidence over claims.** Show features, not adjectives.
3. **Specific over generic.** "UK conferences, summits, and networking events" not just "events".

---

## 13. INTEGRATION POINTS

| Link | Destination |
|------|-------------|
| "Create Free Card" CTA | `https://app.cardgit.com/auth/signup` |
| "Login" | `https://app.cardgit.com` |
| "Book a Demo" | email `info@cardgit.com` or Calendly/booking link |
| "Discover Events" | `https://events.cardgit.com/events` |
| "Start Your Event" | `https://events.cardgit.com/register` |
| "App Dashboard" | `https://app.cardgit.com/dashboard` |
| "Explore Profiles" | `https://app.cardgit.com/dashboard/explore` |

All external links: `target="_blank" rel="noopener noreferrer"`

---

## 14. LAUNCH CHECKLIST

### SEO
- [ ] All pages have unique `<title>` and `<meta name="description">`
- [ ] All pages have canonical URL
- [ ] Open Graph tags on all pages with correct OG image
- [ ] `hreflang="en-GB"` on all pages
- [ ] JSON-LD structured data validates at schema.org/validator
- [ ] `sitemap.xml` lists all pages, accessible at cardgit.com/sitemap.xml
- [ ] `sitemap.xml` `<lastmod>` dates are current
- [ ] `robots.txt` accessible and correct
- [ ] Google Search Console: sitemap submitted and indexed
- [ ] Core Web Vitals green on PageSpeed Insights (mobile + desktop)
- [ ] All images have descriptive `alt` text
- [ ] No broken internal links (run a crawler check)
- [ ] H1 present and unique on every page
- [ ] Internal links use descriptive anchor text

### GEO
- [ ] `robots.txt` explicitly allows: GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, GoogleOther, Applebot-Extended, CCBot, YouBot
- [ ] `/llms.txt` accessible, returns plain text, content is accurate
- [ ] `/llms-full.txt` accessible with complete FAQ and feature detail
- [ ] Entity definition paragraph on homepage, about page, and as `sr-only` in footer
- [ ] Every feature section opens with a definition-first sentence
- [ ] FAQ covers minimum 25 Q&A pairs with full self-contained answers
- [ ] All FAQ Q&A pairs in `FAQPage` JSON-LD schema
- [ ] `Organization` schema includes `alternateName`, `sameAs`, `foundingLocation`
- [ ] `SoftwareApplication` schema on `/digital-business-cards` and `/events`
- [ ] `HowTo` schema on homepage How It Works section
- [ ] `WebSite` schema with `SearchAction` on homepage
- [ ] `Article` schema on all blog posts
- [ ] `BreadcrumbList` schema on all inner pages
- [ ] All marketing pages pre-rendered to static HTML (verified by fetching with `curl --user-agent GPTBot`)
- [ ] Blog publishing schedule established (minimum 2 posts/month)
- [ ] `/updates` changelog page live with dated entries
- [ ] At least 2 comparison pages live (`/compare/...`)
- [ ] Product listed on Capterra, G2, Product Hunt, AlternativeTo
- [ ] LinkedIn company page URL in Organization `sameAs`

### Quality
- [ ] Keyboard navigation works across all pages
- [ ] Dark mode renders correctly on all pages
- [ ] All CTAs link to correct destinations
- [ ] HTTPS enforced, no mixed content
- [ ] Analytics (Plausible or GA4) installed and firing
- [ ] GDPR cookie consent in place if analytics tracking is used
- [ ] Cloudflare Pages deployment succeeds with correct build output
- [ ] All pages render correctly on mobile (375px), tablet (768px), desktop (1280px)

---

## 15. REFERENCE MATERIAL

| Resource | URL |
|----------|-----|
| Current main site | https://cardgit.com |
| Events platform (UAT) | https://uat.events.cardgit.com |
| Events platform (prod) | https://events.cardgit.com |
| Events app source | `apps/frontend/` in this monorepo |
| Admin app source | `apps/admin/` in this monorepo |
| Shared design tokens | `apps/frontend/src/index.css` |
| Tailwind config | `apps/frontend/tailwind.config.js` |
| Database schema | `packages/database/src/schema/` |
| FAQ content source | `apps/frontend/src/pages/FAQPage.tsx` |
| Existing brand assets | `apps/frontend/public/` |

---

*This prompt was generated on 23 August 2026. Update the company description, features list, and pricing tiers if the product changes before implementation.*
