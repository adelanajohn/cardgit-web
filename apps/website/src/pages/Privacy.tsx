import SEO from '@/components/SEO'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { pageSEO, SITE_URL } from '@/data/seo'

const TOC = [
  { id: 'who-we-are',          label: '1. Who We Are' },
  { id: 'data-we-collect',     label: '2. Data We Collect' },
  { id: 'how-we-use',          label: '3. How We Use Your Data' },
  { id: 'legal-basis',         label: '4. Legal Basis for Processing' },
  { id: 'data-sharing',        label: '5. Data Sharing & Third Parties' },
  { id: 'international',       label: '6. International Transfers' },
  { id: 'retention',           label: '7. Data Retention' },
  { id: 'cookies',             label: '8. Cookies & Tracking' },
  { id: 'your-rights',         label: '9. Your Rights Under UK GDPR' },
  { id: 'children',            label: '10. Children\'s Privacy' },
  { id: 'security',            label: '11. Security' },
  { id: 'changes',             label: '12. Changes to This Policy' },
  { id: 'contact',             label: '13. Contact & Complaints' },
]

export default function Privacy() {
  const seo = pageSEO['privacy']

  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        canonical={seo.canonical}
        breadcrumbs={[{ name: 'Privacy Policy', item: `${SITE_URL}/privacy` }]}
      />

      <section className="pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-10">
            <h1 className="text-4xl md:text-5xl font-black text-[var(--text-primary)] mb-3">Privacy Policy</h1>
            <p className="text-[var(--text-secondary)] text-sm">Last updated: 23 August 2026 &nbsp;·&nbsp; Effective: 23 August 2026</p>
          </AnimatedSection>

          {/* Table of contents */}
          <AnimatedSection delay={0.05} className="mb-10">
            <nav aria-label="Privacy policy contents" className="bg-[var(--bg-surface)] border border-slate-200 dark:border-slate-700/50 rounded-2xl p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)] mb-3">Contents</p>
              <ol className="space-y-1.5">
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
              CardGit ("we", "us", "our") is committed to protecting your personal data and respecting your privacy. This Privacy Policy explains what personal data we collect, why we collect it, how we use it, and what rights you have in relation to it.
            </p>
            <p>
              This policy applies to all services operated by CardGit, including <strong>cardgit.com</strong>, <strong>app.cardgit.com</strong>, and <strong>events.cardgit.com</strong> (collectively, the "Services"). Please read it carefully before using our Services.
            </p>

            {/* 1 */}
            <h2 id="who-we-are">1. Who We Are</h2>
            <p>
              CardGit is a digital identity and professional networking company based in London, United Kingdom. For the purposes of UK GDPR, CardGit acts as the <strong>data controller</strong> for personal data collected through the Services.
            </p>
            <p>
              You can contact our data controller at:<br />
              <strong>Email:</strong> <a href="mailto:info@cardgit.com">info@cardgit.com</a><br />
              <strong>Address:</strong> CardGit, London, United Kingdom
            </p>

            {/* 2 */}
            <h2 id="data-we-collect">2. Data We Collect</h2>
            <p>We collect personal data in the following categories:</p>

            <h3>2.1 Account & Profile Data</h3>
            <p>When you create a CardGit account or digital business card, we collect:</p>
            <ul>
              <li>Full name and professional title</li>
              <li>Email address and password (stored as a hashed credential)</li>
              <li>Company name, website, and professional social media links</li>
              <li>Phone number(s) you choose to include on your card</li>
              <li>Profile photo, cover image, and any other content you add to your profile</li>
              <li>Bio, product or service descriptions, and any custom links you publish</li>
            </ul>

            <h3>2.2 Event & Registration Data</h3>
            <p>If you use CardGit Events (as an organiser or attendee), we collect:</p>
            <ul>
              <li>Event registration details (name, email, ticket type, payment confirmation)</li>
              <li>Attendance and session engagement data</li>
              <li>Networking activity within an event (connections made, meetings scheduled)</li>
              <li>Responses to polls, Q&A, and feedback surveys</li>
              <li>Lead capture form submissions where you have submitted information to another user's card</li>
            </ul>

            <h3>2.3 Usage & Analytics Data</h3>
            <p>We automatically collect data about how you use the Services:</p>
            <ul>
              <li>Pages visited, features used, and time spent on the platform</li>
              <li>Device type, browser, operating system, and IP address</li>
              <li>Referring URL and search terms used to reach our site</li>
              <li>Profile view and link-click analytics (for cardholders viewing their own analytics)</li>
            </ul>

            <h3>2.4 Profile View Data (Third-Party Visitors)</h3>
            <p>
              When a third party views a CardGit digital business card — for example by scanning a QR code — we record the view event and, where available, approximate geographic location (derived from IP address, at city or country level). We do not require third-party visitors to create an account or provide personal data to view a card. Any data collected from third-party visitors is subject to this policy.
            </p>

            <h3>2.5 Payment Data</h3>
            <p>
              CardGit uses Stripe as its payment processor. We do not store full payment card details. Stripe processes payment information on our behalf and is subject to its own privacy policy. We receive limited payment confirmation data (transaction ID, last 4 digits, billing name) for record-keeping.
            </p>

            <h3>2.6 Communications Data</h3>
            <p>
              If you contact us by email, via the contact form, or through any support channel, we retain the content of your communications to resolve your enquiry and improve our services.
            </p>

            {/* 3 */}
            <h2 id="how-we-use">3. How We Use Your Data</h2>
            <p>We use your personal data for the following purposes:</p>
            <ul>
              <li><strong>Providing the Services:</strong> Creating and maintaining your account, generating your digital business card, and facilitating event management and networking features.</li>
              <li><strong>Analytics for cardholders:</strong> Providing you with insights about who views your card and how they engage with it.</li>
              <li><strong>Communications:</strong> Sending transactional emails (account confirmation, password reset, event registration confirmation) and, where you have opted in, marketing communications about CardGit features and updates.</li>
              <li><strong>Product improvement:</strong> Analysing aggregated, anonymised usage data to understand how features are used and where improvements can be made.</li>
              <li><strong>Customer support:</strong> Responding to enquiries, resolving issues, and improving our support processes.</li>
              <li><strong>Legal compliance:</strong> Meeting obligations under UK law, including data retention requirements, fraud prevention, and responding to lawful requests from authorities.</li>
              <li><strong>Security:</strong> Detecting, investigating, and preventing fraudulent activity, abuse, and security incidents.</li>
            </ul>
            <p>
              We do <strong>not</strong> sell your personal data to third parties. We do not use your personal data for automated decision-making that produces significant legal effects.
            </p>

            {/* 4 */}
            <h2 id="legal-basis">4. Legal Basis for Processing</h2>
            <p>Under UK GDPR, we rely on the following legal bases for processing your personal data:</p>
            <ul>
              <li><strong>Contract performance:</strong> Processing necessary to provide the Services you have signed up for (account creation, card publishing, event management).</li>
              <li><strong>Legitimate interests:</strong> Processing for purposes such as platform security, fraud prevention, product improvement, and analytics — where these interests are not overridden by your rights.</li>
              <li><strong>Consent:</strong> Marketing communications and non-essential cookies — where we rely on your explicit opt-in consent. You may withdraw consent at any time.</li>
              <li><strong>Legal obligation:</strong> Processing required to comply with applicable UK law.</li>
            </ul>

            {/* 5 */}
            <h2 id="data-sharing">5. Data Sharing & Third Parties</h2>
            <p>We share personal data only in the following circumstances:</p>

            <h3>5.1 Service Providers</h3>
            <p>
              We use trusted third-party service providers to operate our platform. These providers act as data processors on our behalf and are contractually required to handle data only as instructed by us. They include:
            </p>
            <ul>
              <li><strong>Stripe</strong> — payment processing</li>
              <li><strong>Cloud infrastructure providers</strong> — hosting and data storage</li>
              <li><strong>Email delivery providers</strong> — transactional and marketing emails</li>
              <li><strong>Analytics providers</strong> — aggregated usage analytics</li>
            </ul>

            <h3>5.2 Other CardGit Users</h3>
            <p>
              Information you publish on your digital business card (name, title, contact details, links) is visible to anyone who views your card. You control what information appears on your card at all times. Within CardGit Events, your profile may be visible to other registered attendees of the same event, subject to the privacy settings you have configured.
            </p>

            <h3>5.3 Legal Requirements</h3>
            <p>
              We may disclose personal data where required by law, court order, or to protect the rights, property, or safety of CardGit, our users, or the public.
            </p>

            <h3>5.4 Business Transfers</h3>
            <p>
              In the event of a merger, acquisition, or sale of all or part of CardGit's business, personal data may be transferred as part of that transaction. We will notify affected users in advance where required by law.
            </p>

            {/* 6 */}
            <h2 id="international">6. International Transfers</h2>
            <p>
              CardGit is based in the United Kingdom. Where we transfer personal data to countries outside the UK or European Economic Area, we ensure appropriate safeguards are in place — such as the UK International Data Transfer Agreement (IDTA), Standard Contractual Clauses, or transfers to countries with an adequacy decision from the UK Secretary of State.
            </p>

            {/* 7 */}
            <h2 id="retention">7. Data Retention</h2>
            <p>
              We retain personal data for as long as your account is active and as necessary to provide the Services. When you delete your account, we will delete or anonymise your personal data within <strong>30 days</strong>, except where we are required to retain it by law (for example, financial records, which are retained for 7 years under UK tax law) or where a shorter retention period is required under applicable regulations.
            </p>
            <p>
              Analytics data derived from profile views is retained in anonymised, aggregated form. Event attendance data may be retained for up to 24 months after an event concludes.
            </p>

            {/* 8 */}
            <h2 id="cookies" >8. Cookies & Tracking</h2>
            <p>CardGit uses the following categories of cookies:</p>
            <ul>
              <li><strong>Strictly necessary cookies:</strong> Required for the Services to function (session authentication, security tokens). These cannot be disabled.</li>
              <li><strong>Preference cookies:</strong> Remember your settings, including dark mode preference and language.</li>
              <li><strong>Analytics cookies:</strong> Collect anonymised data about how visitors use the site to help us improve the platform. We use these only with your consent.</li>
              <li><strong>Marketing cookies:</strong> Used to deliver relevant advertising and track campaign performance. We use these only with your explicit consent.</li>
            </ul>
            <p>
              You can manage or withdraw consent for non-essential cookies at any time via your browser settings or the cookie preferences control on the site. Note that disabling certain cookies may affect the functionality of the Services.
            </p>

            {/* 9 */}
            <h2 id="your-rights">9. Your Rights Under UK GDPR</h2>
            <p>You have the following rights in relation to your personal data:</p>
            <ul>
              <li><strong>Right of access:</strong> Request a copy of the personal data we hold about you.</li>
              <li><strong>Right to rectification:</strong> Ask us to correct inaccurate or incomplete data.</li>
              <li><strong>Right to erasure:</strong> Request deletion of your personal data, subject to legal retention requirements.</li>
              <li><strong>Right to restrict processing:</strong> Ask us to pause processing of your data in certain circumstances.</li>
              <li><strong>Right to data portability:</strong> Receive your data in a structured, machine-readable format for transfer to another service.</li>
              <li><strong>Right to object:</strong> Object to processing based on legitimate interests, including direct marketing.</li>
              <li><strong>Right to withdraw consent:</strong> Where processing is based on consent, withdraw it at any time without affecting the lawfulness of prior processing.</li>
            </ul>
            <p>
              To exercise any of these rights, email <a href="mailto:info@cardgit.com">info@cardgit.com</a>. We will respond within <strong>30 days</strong>. We may ask you to verify your identity before fulfilling a request.
            </p>

            {/* 10 */}
            <h2 id="children">10. Children's Privacy</h2>
            <p>
              CardGit's Services are intended for users aged <strong>16 and over</strong>. We do not knowingly collect personal data from children under 16. If you believe a child has provided us with personal data, please contact us at <a href="mailto:info@cardgit.com">info@cardgit.com</a> and we will delete it promptly.
            </p>

            {/* 11 */}
            <h2 id="security">11. Security</h2>
            <p>
              We take the security of your personal data seriously. We implement appropriate technical and organisational measures including encryption of data in transit (TLS), hashed credential storage, access controls, and regular security reviews. However, no method of transmission over the internet is completely secure. We encourage you to use a strong, unique password for your CardGit account and to notify us immediately if you suspect unauthorised access.
            </p>

            {/* 12 */}
            <h2 id="changes">12. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes to our practices or applicable law. When we make material changes, we will notify you by email (if you have an account) and update the "Last updated" date at the top of this page. Your continued use of the Services after the effective date of any update constitutes acceptance of the revised policy.
            </p>

            {/* 13 */}
            <h2 id="contact">13. Contact & Complaints</h2>
            <p>
              For any privacy-related questions or to exercise your rights, contact us at:<br />
              <a href="mailto:info@cardgit.com">info@cardgit.com</a><br />
              CardGit, London, United Kingdom
            </p>
            <p>
              If you are not satisfied with how we handle your request, you have the right to lodge a complaint with the <strong>Information Commissioner's Office (ICO)</strong>, the UK's data protection supervisory authority, at <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">ico.org.uk</a> or by calling 0303 123 1113.
            </p>

          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
