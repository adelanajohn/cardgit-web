import { Mail, MapPin, Facebook, Linkedin, Instagram, Youtube } from 'lucide-react'
import SEO from '@/components/SEO'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { pageSEO, SITE_URL } from '@/data/seo'

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

      <section className="pt-24 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-black text-[var(--text-primary)] mb-4">
              Contact CardGit
            </h1>
            <p className="text-[var(--text-secondary)] text-lg max-w-xl mx-auto">
              Have a question, partnership enquiry, or want to book a business demo? We're here to help.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact info */}
            <AnimatedSection delay={0.1}>
              <div className="space-y-8">
                <div>
                  <h2 className="text-xl font-black text-[var(--text-primary)] mb-4">Get in Touch</h2>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center">
                        <Mail className="w-5 h-5 text-indigo-600" aria-hidden="true" />
                      </div>
                      <div>
                        <div className="text-xs text-[var(--text-secondary)] mb-0.5">Email</div>
                        <a href="mailto:info@cardgit.com" className="font-semibold text-[var(--text-primary)] hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none rounded">
                          info@cardgit.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-indigo-600" aria-hidden="true" />
                      </div>
                      <div>
                        <div className="text-xs text-[var(--text-secondary)] mb-0.5">Location</div>
                        <span className="font-semibold text-[var(--text-primary)]">London, United Kingdom</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-black text-[var(--text-primary)] mb-4">Follow Us</h2>
                  <div className="flex gap-3">
                    {[
                      { icon: Facebook, href: 'https://www.facebook.com/share/1BPnySukTD/', label: 'Facebook' },
                      { icon: Linkedin, href: 'https://www.linkedin.com/company/cardgit', label: 'LinkedIn' },
                      { icon: Instagram, href: 'https://instagram.com/cardgit', label: 'Instagram' },
                      { icon: Youtube, href: 'https://youtube.com/@cardgit', label: 'YouTube' },
                    ].map(({ icon: Icon, href, label }) => (
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

                <div>
                  <h2 className="text-xl font-black text-[var(--text-primary)] mb-4">Business Demo</h2>
                  <p className="text-[var(--text-secondary)] text-sm mb-4">
                    For enterprise enquiries and business demos, email us at info@cardgit.com with the subject line "Business Demo" and we'll be in touch.
                  </p>
                  <a
                    href="mailto:info@cardgit.com?subject=Business Demo Request"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold px-6 py-3 rounded-xl hover:from-indigo-700 hover:to-violet-700 transition-all shadow-sm focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:outline-none"
                  >
                    Book a Business Demo
                  </a>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact form */}
            <AnimatedSection delay={0.2}>
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  window.location.href = 'mailto:info@cardgit.com'
                }}
                className="bg-[var(--bg-surface)] border border-slate-200 dark:border-slate-700/50 rounded-2xl p-8 space-y-5"
                aria-label="Contact form"
              >
                <h2 className="text-xl font-black text-[var(--text-primary)]">Send a Message</h2>

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
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-[var(--bg-page)] text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
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
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-[var(--bg-page)] text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-[var(--bg-page)] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
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
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-[var(--bg-page)] text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                    placeholder="How can we help?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-indigo-700 hover:to-violet-700 transition-all shadow-sm focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:outline-none"
                >
                  Send Message
                </button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
