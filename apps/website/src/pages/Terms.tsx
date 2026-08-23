import SEO from '@/components/SEO'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { pageSEO, SITE_URL } from '@/data/seo'

const TOC = [
  { id: 'agreement',        label: '1. Agreement to Terms' },
  { id: 'definitions',      label: '2. Definitions' },
  { id: 'eligibility',      label: '3. Eligibility' },
  { id: 'account',          label: '4. Accounts & Registration' },
  { id: 'services',         label: '5. Description of Services' },
  { id: 'acceptable-use',   label: '6. Acceptable Use' },
  { id: 'content',          label: '7. User Content' },
  { id: 'ip',               label: '8. Intellectual Property' },
  { id: 'subscriptions',    label: '9. Subscriptions & Payments' },
  { id: 'cancellation',     label: '10. Cancellation & Refunds' },
  { id: 'disclaimer',       label: '11. Disclaimers' },
  { id: 'liability',        label: '12. Limitation of Liability' },
  { id: 'indemnification',  label: '13. Indemnification' },
  { id: 'third-party',      label: '14. Third-Party Services & Links' },
  { id: 'termination',      label: '15. Suspension & Termination' },
  { id: 'changes',          label: '16. Changes to Terms' },
  { id: 'governing-law',    label: '17. Governing Law & Disputes' },
  { id: 'general',          label: '18. General Provisions' },
  { id: 'contact',          label: '19. Contact' },
]

export default function Terms() {
  const seo = pageSEO['terms']

  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        canonical={seo.canonical}
        breadcrumbs={[{ name: 'Terms & Conditions', item: `${SITE_URL}/terms` }]}
      />

      <section className="pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-10">
            <h1 className="text-4xl md:text-5xl font-black text-[var(--text-primary)] mb-3">Terms &amp; Conditions</h1>
            <p className="text-[var(--text-secondary)] text-sm">Last updated: 23 August 2026 &nbsp;·&nbsp; Effective: 23 August 2026</p>
          </AnimatedSection>

          {/* Table of contents */}
          <AnimatedSection delay={0.05} className="mb-10">
            <nav aria-label="Terms and conditions contents" className="bg-[var(--bg-surface)] border border-slate-200 dark:border-slate-700/50 rounded-2xl p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)] mb-3">Contents</p>
              <ol className="space-y-1.5 columns-2">
                {TOC.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none rounded"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="prose prose-slate dark:prose-invert max-w-none
            prose-headings:font-black prose-headings:text-[var(--text-primary)]
            prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-3
            prose-h3:text-base prose-h3:mt-6 prose-h3:mb-2
            prose-p:text-[var(--text-secondary)] prose-p:leading-relaxed
            prose-li:text-[var(--text-secondary)]
            prose-a:text-indigo-600 dark:prose-a:text-indigo-400
            prose-strong:text-[var(--text-primary)]">

            <p>
              Please read these Terms &amp; Conditions ("Terms") carefully before using CardGit's services. By creating an account or accessing any part of our Services, you confirm that you have read, understood, and agree to be bound by these Terms in full.
            </p>

            {/* 1 */}
            <h2 id="agreement">1. Agreement to Terms</h2>
            <p>
              These Terms constitute a legally binding agreement between you ("User", "you") and CardGit ("CardGit", "we", "us", "our"), a digital identity and professional networking company based in London, United Kingdom, governing your access to and use of cardgit.com, app.cardgit.com, and events.cardgit.com (collectively, the "Services").
            </p>
            <p>
              If you are using the Services on behalf of an organisation, you represent and warrant that you have authority to bind that organisation to these Terms, and "you" refers to that organisation.
            </p>

            {/* 2 */}
            <h2 id="definitions">2. Definitions</h2>
            <ul>
              <li><strong>"Services"</strong> means all products, features, and platforms operated by CardGit, including the digital business card platform and CardGit Events.</li>
              <li><strong>"User Content"</strong> means any content you submit, publish, or display on or through the Services, including profile information, images, links, product listings, and event data.</li>
              <li><strong>"Subscription"</strong> means a paid plan granting access to premium features of the Services.</li>
              <li><strong>"CardGit Events"</strong> means the event management and attendee networking platform operated at events.cardgit.com.</li>
              <li><strong>"Digital Business Card"</strong> means the shareable online profile created and managed through the CardGit platform.</li>
            </ul>

            {/* 3 */}
            <h2 id="eligibility">3. Eligibility</h2>
            <p>
              You must be at least <strong>16 years of age</strong> to use the Services. By using the Services, you represent and warrant that you meet this age requirement. If you are under 18, you confirm that you have your parent's or guardian's permission to use the Services.
            </p>
            <p>
              The Services are intended for professional and business use. You must not use the Services for any unlawful purpose or in any way that violates these Terms.
            </p>

            {/* 4 */}
            <h2 id="account">4. Accounts &amp; Registration</h2>
            <h3>4.1 Account Creation</h3>
            <p>
              To access most features of the Services, you must register for a CardGit account. You agree to provide accurate, current, and complete information during registration and to keep your account information up to date.
            </p>
            <h3>4.2 Account Security</h3>
            <p>
              You are solely responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account. You must notify CardGit immediately at <a href="mailto:info@cardgit.com">info@cardgit.com</a> if you become aware of any unauthorised use of your account or any security breach.
            </p>
            <h3>4.3 One Account Per User</h3>
            <p>
              Each individual may maintain one personal CardGit account. Team administrators may create and manage accounts for employees within their organisation's plan. Creating multiple accounts to circumvent restrictions or obtain additional free-tier benefits is prohibited.
            </p>

            {/* 5 */}
            <h2 id="services">5. Description of Services</h2>
            <p>CardGit provides two core products:</p>
            <ul>
              <li>
                <strong>CardGit Digital Business Cards:</strong> A platform for creating, publishing, and sharing digital business cards containing professional information, QR codes, analytics, lead capture, and appointment booking functionality.
              </li>
              <li>
                <strong>CardGit Events:</strong> An event management and attendee networking platform for conference organisers, supporting registration, ticketing, schedule management, smart matchmaking, speed networking, live engagement tools, and post-event analytics.
              </li>
            </ul>
            <p>
              CardGit reserves the right to modify, suspend, or discontinue any feature or aspect of the Services at any time with reasonable notice to users where materially affecting paid functionality.
            </p>

            {/* 6 */}
            <h2 id="acceptable-use">6. Acceptable Use</h2>
            <p>You agree not to use the Services to:</p>
            <ul>
              <li>Violate any applicable law, regulation, or third-party rights</li>
              <li>Post false, misleading, defamatory, or fraudulent content</li>
              <li>Send unsolicited commercial communications (spam) to other users</li>
              <li>Impersonate any person or entity or misrepresent your affiliation</li>
              <li>Harvest, scrape, or collect data from other users' profiles without consent</li>
              <li>Interfere with or disrupt the Services, servers, or networks connected to the Services</li>
              <li>Attempt to gain unauthorised access to any part of the Services or another user's account</li>
              <li>Upload or transmit viruses, malware, or other harmful code</li>
              <li>Use the Services in any way that could bring CardGit into disrepute</li>
              <li>Use automated tools, bots, or scripts to access or interact with the Services without prior written permission</li>
            </ul>
            <p>
              CardGit reserves the right to investigate and take action in respect of any violation of these provisions, including suspending or terminating accounts.
            </p>

            {/* 7 */}
            <h2 id="content">7. User Content</h2>
            <h3>7.1 Ownership</h3>
            <p>
              You retain ownership of all User Content you submit to the Services. By submitting User Content, you grant CardGit a non-exclusive, worldwide, royalty-free licence to host, store, display, and distribute your content solely for the purpose of providing the Services.
            </p>
            <h3>7.2 Your Responsibility</h3>
            <p>
              You are solely responsible for all User Content you post. You represent and warrant that: (a) you own or have the necessary rights to the content; (b) the content does not infringe any third-party intellectual property rights; and (c) the content does not violate any applicable law or these Terms.
            </p>
            <h3>7.3 Removal of Content</h3>
            <p>
              CardGit reserves the right to remove any User Content that violates these Terms or that we determine, in our sole discretion, is harmful, offensive, or otherwise inappropriate, without prior notice.
            </p>

            {/* 8 */}
            <h2 id="ip">8. Intellectual Property</h2>
            <p>
              The Services, including all software, design, text, graphics, logos, and functionality, are owned by CardGit or its licensors and are protected by UK and international copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, sell, or create derivative works from any part of the Services without our prior written consent.
            </p>
            <p>
              "CardGit" and associated logos are trademarks of CardGit. Nothing in these Terms grants you any right to use our trademarks without our written permission.
            </p>

            {/* 9 */}
            <h2 id="subscriptions">9. Subscriptions &amp; Payments</h2>
            <h3>9.1 Free Tier</h3>
            <p>
              CardGit offers a free tier with core digital business card functionality. Free tier features are subject to change. We will provide reasonable notice before reducing features available on the free tier.
            </p>
            <h3>9.2 Paid Subscriptions</h3>
            <p>
              Paid subscriptions are billed on a monthly or annual basis, as selected at checkout. All prices are shown in GBP and are inclusive of VAT where applicable. By subscribing, you authorise CardGit to charge your chosen payment method on a recurring basis.
            </p>
            <h3>9.3 Price Changes</h3>
            <p>
              CardGit may change subscription prices with at least <strong>30 days' notice</strong>. Continued use of the Services after a price change takes effect constitutes acceptance of the new price.
            </p>
            <h3>9.4 Failed Payments</h3>
            <p>
              If a payment fails, we will attempt to notify you. Continued non-payment may result in downgrade to the free tier or suspension of your account until payment is resolved.
            </p>

            {/* 10 */}
            <h2 id="cancellation">10. Cancellation &amp; Refunds</h2>
            <h3>10.1 Cancellation</h3>
            <p>
              You may cancel your subscription at any time from your account settings. Cancellation takes effect at the end of the current billing period. You will retain access to paid features until that date.
            </p>
            <h3>10.2 Refunds</h3>
            <p>
              Monthly subscriptions are non-refundable once the billing period has commenced. Annual subscriptions cancelled within <strong>14 days</strong> of the initial purchase or renewal date are eligible for a pro-rata refund. Refund requests should be submitted to <a href="mailto:info@cardgit.com">info@cardgit.com</a>.
            </p>
            <h3>10.3 Consumer Rights</h3>
            <p>
              If you are a consumer purchasing a digital subscription, you have a statutory right to cancel within 14 days of purchase under the Consumer Contracts (Information, Cancellation and Additional Charges) Regulations 2013, unless you have expressly requested immediate access to the Services, in which case the right to cancel may be lost. Please contact us if you have any questions about your rights.
            </p>

            {/* 11 */}
            <h2 id="disclaimer">11. Disclaimers</h2>
            <p>
              The Services are provided on an "as is" and "as available" basis. To the fullest extent permitted by law, CardGit disclaims all warranties, express or implied, including warranties of merchantability, fitness for a particular purpose, and non-infringement.
            </p>
            <p>
              CardGit does not warrant that the Services will be uninterrupted, error-free, or completely secure. We do not warrant the accuracy, completeness, or reliability of any content provided through the Services.
            </p>
            <p>
              Nothing in these Terms affects any statutory rights you may have as a consumer under UK law that cannot be excluded or limited.
            </p>

            {/* 12 */}
            <h2 id="liability">12. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by applicable UK law, CardGit shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, goodwill, or business opportunity, arising out of or in connection with your use of the Services.
            </p>
            <p>
              CardGit's total aggregate liability to you for any claim arising out of or relating to the Services shall not exceed the greater of: (a) the total amount paid by you to CardGit in the <strong>12 months</strong> preceding the claim; or (b) <strong>£100</strong>.
            </p>
            <p>
              These limitations do not apply to liability for death or personal injury caused by our negligence, fraud or fraudulent misrepresentation, or any liability that cannot be excluded or limited under UK law.
            </p>

            {/* 13 */}
            <h2 id="indemnification">13. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless CardGit and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable legal fees) arising from: (a) your use of the Services; (b) your User Content; (c) your violation of these Terms; or (d) your infringement of any third-party rights.
            </p>

            {/* 14 */}
            <h2 id="third-party">14. Third-Party Services &amp; Links</h2>
            <p>
              The Services may contain links to third-party websites and integrate with third-party services (such as Stripe for payments, and social media platforms for profile linking). CardGit is not responsible for the content, privacy practices, or terms of any third-party services. Accessing third-party services is at your own risk.
            </p>

            {/* 15 */}
            <h2 id="termination">15. Suspension &amp; Termination</h2>
            <h3>15.1 By You</h3>
            <p>
              You may close your account at any time from your account settings. Upon closure, your digital business card will be deactivated and your data will be deleted in accordance with our Privacy Policy.
            </p>
            <h3>15.2 By CardGit</h3>
            <p>
              CardGit reserves the right to suspend or terminate your account immediately, without prior notice, if: (a) you breach these Terms; (b) we are required to do so by law; or (c) your account activity poses a risk to other users or the platform. We will attempt to notify you of the reason where legally permitted.
            </p>
            <h3>15.3 Effect of Termination</h3>
            <p>
              Upon termination, your right to use the Services ceases immediately. Provisions of these Terms that by their nature should survive termination (including intellectual property, limitation of liability, indemnification, and governing law) shall survive.
            </p>

            {/* 16 */}
            <h2 id="changes">16. Changes to Terms</h2>
            <p>
              CardGit may update these Terms from time to time. We will provide at least <strong>14 days' notice</strong> of material changes via email (to registered users) and by posting a notice on the Services. Your continued use of the Services after the effective date of updated Terms constitutes your acceptance of those changes. If you do not agree to the updated Terms, you must stop using the Services before the effective date.
            </p>

            {/* 17 */}
            <h2 id="governing-law">17. Governing Law &amp; Disputes</h2>
            <p>
              These Terms are governed by and construed in accordance with the <strong>laws of England and Wales</strong>. Any dispute arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of England and Wales, except that nothing in this clause prevents CardGit from applying for injunctive or other equitable relief in any jurisdiction.
            </p>
            <p>
              If you are a consumer resident in Scotland or Northern Ireland, you may also bring proceedings in the courts of Scotland or Northern Ireland respectively.
            </p>
            <p>
              We encourage you to contact us at <a href="mailto:info@cardgit.com">info@cardgit.com</a> to resolve any dispute informally before initiating formal proceedings.
            </p>

            {/* 18 */}
            <h2 id="general">18. General Provisions</h2>
            <ul>
              <li><strong>Entire agreement:</strong> These Terms, together with our Privacy Policy, constitute the entire agreement between you and CardGit regarding the Services and supersede all prior agreements.</li>
              <li><strong>Severability:</strong> If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.</li>
              <li><strong>Waiver:</strong> CardGit's failure to enforce any provision of these Terms does not constitute a waiver of our right to enforce it in the future.</li>
              <li><strong>Assignment:</strong> You may not assign or transfer your rights or obligations under these Terms without our prior written consent. CardGit may assign these Terms freely in connection with a merger, acquisition, or sale of assets.</li>
              <li><strong>No partnership:</strong> Nothing in these Terms creates a partnership, joint venture, agency, or employment relationship between you and CardGit.</li>
            </ul>

            {/* 19 */}
            <h2 id="contact">19. Contact</h2>
            <p>
              For questions about these Terms, contact us at:<br />
              <a href="mailto:info@cardgit.com">info@cardgit.com</a><br />
              CardGit, London, United Kingdom
            </p>

          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
