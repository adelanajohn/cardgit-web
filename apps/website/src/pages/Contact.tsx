import { Mail, MessageSquare, Users, Zap, Facebook, Linkedin, Instagram, Youtube } from 'lucide-react'
import SEO from '@/components/SEO'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { pageSEO, SITE_URL } from '@/data/seo'

const SOCIAL_LINKS = [
  { icon: Facebook, href: 'https://www.facebook.com/share/1BPnySukTD/', label: 'Facebook' },
  { icon: Linkedin, href: 'https://www.linkedin.com/company/cardgit', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://instagram.com/cardgit', label: 'Instagram' },
  { icon: Youtube, href: 'https://youtube.com/@cardgit', label: 'YouTube' },
]

const CONTACT_REASONS = [
  {
    icon: MessageSquare,
    title: 'General Enquiries',
    description: 'Questions about how CardGit works, what\'s included, or anything else — we\'ll get back to you promptly.',
  },
  {
    icon: Users,
    title: 'Enterprise & Teams',
    description: 'Looking to roll out CardGit across your organisation? We can walk you through team plans and custom setup.',
  },
  {
    icon: Zap,
    title: 'Partnerships',
    description: 'Interested in integrating with CardGit or exploring a referral partnership? We\'d love to hear from you.',
  },
  {
    icon: Mail,
    title: 'Press & Media',
    description: 'For press enquiries, quotes, or media assets, reach us directly at info@cardgit.com.',
  },
]

export default function Contact() {
  const seo = pageSEO['contact']

  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        canonical={seo.canonical}
        breadcrumbs={[{ name: 'Contact', item: `${SITE_URL}/contact` }]}
      />

      <div className="pt-24 pb-24">
        {/* Hero */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              <Mail className="w-4 h-4" aria-hidden="true" />
              We typically reply within one business day
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-[var(--text-primary)] mb-5 leading-tight">
              Let's talk
            </h1>
            <p className="text-[var(--text-secondary)] text-lg max-w-lg mx-auto leading-relaxed">
              Whether you have a question, a partnership idea, or just want to see CardGit in action — drop us a message.
            </p>
          </AnimatedSection>

          {/* Reason tiles */}
          <AnimatedSection delay={0.05} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {CONTACT_REASONS.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-[var(--bg-surface)] border border-slate-200 dark:border-slate-700/50 rounded-2xl p-5"
              >
                <div className="w-10 h-10 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-[var(--text-primary)] text-sm mb-1.5">{title}</h3>
                <p className="text-[var(--text-secondary)] text-xs leading-relaxed">{description}</p>
              </div>
            ))}
          </AnimatedSection>

          {/* Main content: form + sidebar */}
          <div className="grid lg:grid-cols-5 gap-10 items-start">

            {/* Form — takes 3 cols */}
            <AnimatedSection delay={0.1} className="lg:col-span-3">
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  window.location.href = 'mailto:info@cardgit.com'
                }}
                className="bg-[var(--bg-surface)] border border-slate-200 dark:border-slate-700/50 rounded-2xl p-8 space-y-5"
                aria-label="Contact form"
              >
                <div>
                  <h2 className="text-2xl font-black text-[var(--text-primary)] mb-1">Send a message</h2>
                  <p className="text-sm text-[var(--text-secondary)]">Fill in the form and we'll be in touch shortly.</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      autoComplete="name"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-[var(--bg-page)] text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      autoComplete="email"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-[var(--bg-page)] text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-[var(--bg-page)] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow"
                  >
                    <option>General Enquiry</option>
                    <option>Business Demo</option>
                    <option>Enterprise Sales</option>
                    <option>Press Enquiry</option>
                    <option>Technical Support</option>
                    <option>Partnership</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-[var(--bg-page)] text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none transition-shadow"
                    placeholder="Tell us how we can help…"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold py-3.5 px-6 rounded-xl hover:from-indigo-700 hover:to-violet-700 transition-all shadow-sm shadow-indigo-500/30 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:outline-none"
                >
                  Send Message
                </button>
              </form>
            </AnimatedSection>

            {/* Sidebar — takes 2 cols */}
            <AnimatedSection delay={0.15} className="lg:col-span-2 space-y-6">

              {/* Direct email card */}
              <div className="bg-[var(--bg-surface)] border border-slate-200 dark:border-slate-700/50 rounded-2xl p-6">
                <div className="w-10 h-10 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center mb-4">
                  <Mail className="w-5 h-5 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-[var(--text-primary)] mb-1">Prefer email?</h3>
                <p className="text-sm text-[var(--text-secondary)] mb-3">Reach us directly — we respond within one business day.</p>
                <a
                  href="mailto:info@cardgit.com"
                  className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:underline focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none rounded"
                >
                  info@cardgit.com
                </a>
              </div>

              {/* Social card */}
              <div className="bg-[var(--bg-surface)] border border-slate-200 dark:border-slate-700/50 rounded-2xl p-6">
                <h3 className="font-bold text-[var(--text-primary)] mb-1">Follow CardGit</h3>
                <p className="text-sm text-[var(--text-secondary)] mb-4">Stay up to date with product updates, networking tips, and more.</p>
                <div className="flex gap-3">
                  {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center text-[var(--text-secondary)] hover:bg-indigo-100 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none"
                    >
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>

              {/* CTA card */}
              <div className="rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-700 p-6 text-white">
                <h3 className="font-black text-lg mb-2">Ready to get started?</h3>
                <p className="text-indigo-100 text-sm mb-4 leading-relaxed">Create your free digital business card in under 2 minutes — no credit card required.</p>
                <a
                  href="https://app.cardgit.com/auth/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full bg-white text-indigo-700 font-bold text-sm px-5 py-3 rounded-xl hover:bg-indigo-50 transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
                >
                  Create your free card
                </a>
              </div>

            </AnimatedSection>
          </div>
        </div>
      </div>
    </>
  )
}
