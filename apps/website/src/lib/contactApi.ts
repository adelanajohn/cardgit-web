import type { ContactFormData, ContactApiResponse } from '@/types/contact'

const CONTACT_URL =
  import.meta.env.VITE_CONTACT_API_URL || 'http://localhost:3000/api/v1/contact'
const CONTACT_KEY = import.meta.env.VITE_CONTACT_API_KEY || ''

export const contactApi = {
  /**
   * Submit a contact form message.
   * Sends an internal notification to the support team and an auto-reply
   * confirmation to the sender.
   */
  submit: async (data: ContactFormData): Promise<ContactApiResponse> => {
    const res = await fetch(CONTACT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': CONTACT_KEY,
      },
      body: JSON.stringify({
        ...data,
        source: 'cardgit-website',
      }),
      signal: AbortSignal.timeout(15_000),
    })

    const json = await res.json()

    if (!res.ok) {
      // Surface the backend error message if present
      const msg =
        json?.error?.message ??
        json?.message ??
        'Failed to send message. Please try again.'
      throw Object.assign(new Error(msg), { response: { status: res.status, data: json } })
    }

    return json as ContactApiResponse
  },
}
