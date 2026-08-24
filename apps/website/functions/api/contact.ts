/**
 * Cloudflare Pages Function: POST /api/contact
 *
 * Receives the contact form submission and forwards it via ZeptoMail.
 *
 * Required environment variables (set in Cloudflare Pages → Settings → Environment variables):
 *   ZEPTO_API_KEY   — ZeptoMail Send Mail token (starts with "PHtE6R0..." or similar)
 *   CONTACT_TO      — email address to deliver messages to (e.g. info@cardgit.com)
 *   CONTACT_FROM    — verified sender address in ZeptoMail (e.g. noreply@cardgit.com)
 */

interface Env {
  ZEPTO_API_KEY: string
  CONTACT_TO: string
  CONTACT_FROM: string
}

interface FormBody {
  name?: string
  email?: string
  subject?: string
  message?: string
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  // ── CORS pre-flight (not needed for same-origin, but defensive) ──
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  }

  // Validate env vars are configured
  if (!env.ZEPTO_API_KEY || !env.CONTACT_TO || !env.CONTACT_FROM) {
    return new Response(
      JSON.stringify({ error: 'Server email configuration is incomplete.' }),
      { status: 500, headers },
    )
  }

  // Parse body
  let body: FormBody
  try {
    body = await request.json()
  } catch {
    return new Response(
      JSON.stringify({ error: 'Invalid request body.' }),
      { status: 400, headers },
    )
  }

  const { name, email, subject, message } = body

  // Basic validation
  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return new Response(
      JSON.stringify({ error: 'Name, email, and message are required.' }),
      { status: 400, headers },
    )
  }

  // Simple email format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return new Response(
      JSON.stringify({ error: 'Please provide a valid email address.' }),
      { status: 400, headers },
    )
  }

  const subjectLine = subject
    ? `CardGit Contact: ${subject}`
    : 'CardGit Contact Form Submission'

  const htmlBody = `
    <div style="font-family: Inter, Arial, sans-serif; max-width: 600px; color: #0f172a;">
      <h2 style="color: #6366f1; margin-bottom: 4px;">New Contact Form Submission</h2>
      <p style="color: #64748b; margin-top: 0; font-size: 14px;">Submitted via cardgit.com/contact</p>
      <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
      <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
        <tr>
          <td style="padding: 8px 0; color: #64748b; width: 100px; vertical-align: top;"><strong>Name</strong></td>
          <td style="padding: 8px 0; color: #0f172a;">${escapeHtml(name)}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #64748b; vertical-align: top;"><strong>Email</strong></td>
          <td style="padding: 8px 0;">
            <a href="mailto:${escapeHtml(email)}" style="color: #6366f1;">${escapeHtml(email)}</a>
          </td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #64748b; vertical-align: top;"><strong>Subject</strong></td>
          <td style="padding: 8px 0; color: #0f172a;">${escapeHtml(subject ?? 'General Enquiry')}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #64748b; vertical-align: top;"><strong>Message</strong></td>
          <td style="padding: 8px 0; color: #0f172a; white-space: pre-wrap;">${escapeHtml(message)}</td>
        </tr>
      </table>
      <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
      <p style="font-size: 12px; color: #94a3b8;">
        Reply directly to this email to respond to ${escapeHtml(name)}.
      </p>
    </div>
  `

  // Send via ZeptoMail
  const zepto = await fetch('https://api.zeptomail.com/v1.1/email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Zoho-enczapikey ${env.ZEPTO_API_KEY}`,
    },
    body: JSON.stringify({
      from: { address: env.CONTACT_FROM, name: 'CardGit Website' },
      to: [{ email_address: { address: env.CONTACT_TO, name: 'CardGit Team' } }],
      reply_to: [{ address: email, name }],
      subject: subjectLine,
      htmlbody: htmlBody,
    }),
  })

  if (!zepto.ok) {
    const errorText = await zepto.text()
    console.error('ZeptoMail error:', zepto.status, errorText)
    return new Response(
      JSON.stringify({ error: 'Failed to send message. Please try again or email us directly.' }),
      { status: 502, headers },
    )
  }

  return new Response(
    JSON.stringify({ success: true }),
    { status: 200, headers },
  )
}

// OPTIONS pre-flight
export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}
