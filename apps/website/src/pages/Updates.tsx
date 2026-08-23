import SEO from '@/components/SEO'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Badge from '@/components/ui/Badge'
import { pageSEO, SITE_URL } from '@/data/seo'

const UPDATES = [
  {
    date: '2026-08-15',
    version: '2.4.0',
    title: 'Smart Matchmaking Improvements',
    category: 'CardGit Events',
    changes: [
      'Improved AI matching algorithm with better industry-based weighting',
      'Added "What I\'m offering" and "What I\'m looking for" profile fields',
      'Speed networking sessions now support up to 50 simultaneous pairs',
    ],
  },
  {
    date: '2026-07-30',
    version: '2.3.2',
    title: 'Analytics Dashboard Update',
    category: 'CardGit Cards',
    changes: [
      'New audience location map visualisation',
      'Weekly and monthly trend graphs on the analytics dashboard',
      'Export analytics data as CSV',
    ],
  },
  {
    date: '2026-07-10',
    version: '2.3.0',
    title: 'Hybrid Event Support',
    category: 'CardGit Events',
    changes: [
      'Full hybrid event mode — manage in-person and virtual attendees in a single event',
      'Unified networking hub for in-person and virtual attendees',
      'Virtual attendee check-in via unique event link',
    ],
  },
  {
    date: '2026-06-20',
    version: '2.2.1',
    title: 'Team Management Enhancements',
    category: 'CardGit Cards',
    changes: [
      'Bulk onboarding — add multiple team members via CSV upload',
      'Custom brand templates with locked and editable fields',
      'Team-level analytics aggregation dashboard',
    ],
  },
  {
    date: '2026-06-01',
    version: '2.2.0',
    title: 'Gamification Launch',
    category: 'CardGit Events',
    changes: [
      'Points system for networking interactions, session attendance, and Q&A participation',
      'Leaderboard displayed in the event app throughout the event',
      'Configurable challenges and achievements per event',
      'Digital achievement badges for attendee profiles',
    ],
  },
  {
    date: '2026-05-15',
    version: '2.1.0',
    title: 'Appointment Booking Upgrade',
    category: 'CardGit Cards',
    changes: [
      'Calendar integration with Google Calendar and Outlook',
      'Custom availability windows per card',
      'Automated confirmation and reminder emails',
      'Buffer time settings between appointments',
    ],
  },
]

export default function Updates() {
  const seo = pageSEO['updates']

  // JSON-LD ItemList — one entry per changelog item with datePublished (section 7.9)
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'CardGit Product Updates',
    description: 'Changelog of new features, improvements, and fixes from the CardGit platform.',
    url: `${SITE_URL}/updates`,
    itemListElement: UPDATES.map((update, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'TechArticle',
        headline: `${update.title} (v${update.version})`,
        datePublished: update.date,
        dateModified: update.date,
        url: `${SITE_URL}/updates`,
        author: { '@type': 'Organization', name: 'CardGit', url: SITE_URL },
        publisher: { '@type': 'Organization', name: 'CardGit', url: SITE_URL },
        description: update.changes[0],
      },
    })),
  }

  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        canonical={seo.canonical}
        breadcrumbs={[{ name: 'Updates', item: `${SITE_URL}/updates` }]}
        jsonLd={itemListSchema}
      />

      <section className="pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-black text-[var(--text-primary)] mb-4">
              Product Updates
            </h1>
            <p className="text-[var(--text-secondary)] text-lg">
              New features, improvements, and fixes from the CardGit team.
            </p>
          </AnimatedSection>

          <div className="space-y-10">
            {UPDATES.map((update, i) => (
              <AnimatedSection key={i} delay={i * 0.07}>
                <article className="bg-[var(--bg-surface)] border border-slate-200 dark:border-slate-700/50 rounded-2xl p-6">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <Badge variant={update.category === 'CardGit Events' ? 'events' : 'default'}>
                      {update.category}
                    </Badge>
                    <span className="text-xs font-mono bg-slate-100 dark:bg-slate-800 text-[var(--text-secondary)] px-2 py-1 rounded">
                      v{update.version}
                    </span>
                    <time
                      dateTime={update.date}
                      className="text-sm text-[var(--text-secondary)]"
                    >
                      {new Date(update.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </time>
                  </div>

                  <h2 className="font-black text-[var(--text-primary)] text-xl mb-4">{update.title}</h2>

                  <ul className="space-y-2" role="list">
                    {update.changes.map((change, j) => (
                      <li key={j} role="listitem" className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0 mt-1.5" aria-hidden="true" />
                        {change}
                      </li>
                    ))}
                  </ul>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
