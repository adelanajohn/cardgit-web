# Contact Form Integration Guide

How to integrate the CardGit Events contact form API into the cardgit.com website (React + Vite, same stack as this project).

---

## Environment variables

Add to your `.env` (and the equivalent per-environment files):

```env
# .env.local / .env.dev
VITE_CONTACT_API_URL=https://cardgit-events.fly.dev/api/v1/contact
VITE_CONTACT_API_KEY=02e65f9e3d181fe5fbddb5b1f0bd90ce4a8172c3cf143badab1211605d9786c2
```

> **Security note:** In a React/Vite app, `VITE_*` variables are bundled into the client-side JS and are publicly visible. This is acceptable for the contact API key because the endpoint is rate-limited and the key only grants the ability to send a contact message — it cannot read data or perform any other action. If you want stricter control, proxy the request through a server-side function (e.g. a Cloudflare Worker or Next.js API route) and keep the key server-side only.

Per-environment values:

| Environment | `VITE_CONTACT_API_URL` |
|---|---|
| Dev (local) | `http://localhost:3000/api/v1/contact` |
| UAT | `https://uat.api2.cardgit.com/api/v1/contact` |
| Production | `https://api2.cardgit.com/api/v1/contact` |

---

## TypeScript types

```ts
// src/types/contact.ts

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactApiResponse {
  status: 'success' | 'error';
  message: string;
}

export interface ContactApiError {
  success: false;
  error: {
    code: string;
    message: string;
    correlationId?: string;
  };
}
```

---

## API function

Add a `contactApi` entry to your `src/lib/api.ts` (or create a standalone `src/lib/contactApi.ts`):

```ts
// src/lib/contactApi.ts
import axios from 'axios';
import type { ContactFormData, ContactApiResponse } from '../types/contact';

const CONTACT_URL = import.meta.env.VITE_CONTACT_API_URL || 'http://localhost:3000/api/v1/contact';
const CONTACT_KEY = import.meta.env.VITE_CONTACT_API_KEY || '';

const contactClient = axios.create({
  baseURL: CONTACT_URL,
  headers: {
    'Content-Type': 'application/json',
    'X-API-Key': CONTACT_KEY,
  },
  timeout: 15_000,
});

export const contactApi = {
  /**
   * Submit a contact form message.
   * Sends an internal notification to the support team and an auto-reply
   * confirmation to the sender.
   */
  submit: (data: ContactFormData): Promise<ContactApiResponse> =>
    contactClient
      .post<ContactApiResponse>('', {
        ...data,
        source: 'cardgit-website',
      })
      .then(res => res.data),
};
```

---

## Hook

```ts
// src/hooks/useContactForm.ts
import { useState } from 'react';
import { contactApi } from '../lib/contactApi';
import type { ContactFormData } from '../types/contact';

interface UseContactForm {
  submit: (data: ContactFormData) => Promise<boolean>;
  loading: boolean;
  error: string | null;
}

export function useContactForm(): UseContactForm {
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState<string | null>(null);

  const submit = async (data: ContactFormData): Promise<boolean> => {
    setLoading(true);
    setError(null);

    try {
      await contactApi.submit(data);
      return true;
    } catch (err: any) {
      const msg =
        err?.response?.data?.error?.message ??
        err?.response?.data?.message ??
        'Failed to send message. Please try again.';
      setError(msg);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { submit, loading, error };
}
```

---

## Contact form component

```tsx
// src/components/ContactForm.tsx
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useContactForm } from '../hooks/useContactForm';

export default function ContactForm() {
  const { submit, loading } = useContactForm();

  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const ok = await submit(form);
    if (ok) {
      setSubmitted(true);
      toast.success('Message sent! We\'ll be in touch shortly.');
      setForm({ name: '', email: '', subject: '', message: '' });
    } else {
      toast.error('Something went wrong. Please try again.');
    }
  };

  if (submitted) {
    return (
      <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-8 text-center">
        <div className="text-4xl mb-3">✅</div>
        <h3 className="text-lg font-bold text-emerald-800 mb-1">Message received!</h3>
        <p className="text-emerald-700 text-sm">
          We'll get back to you within 1–2 business days. Check your inbox for a confirmation email.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-4 text-sm text-emerald-600 underline hover:text-emerald-800"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1.5">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          maxLength={100}
          value={form.name}
          onChange={handleChange}
          placeholder="Your full name"
          className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          placeholder="you@example.com"
          className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-1.5">
          Subject <span className="text-red-500">*</span>
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          maxLength={200}
          value={form.subject}
          onChange={handleChange}
          placeholder="How can we help?"
          className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1.5">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          maxLength={5000}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us more..."
          className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none"
        />
        <p className="text-xs text-gray-400 mt-1 text-right">
          {form.message.length}/5000
        </p>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3 text-sm transition-colors"
      >
        {loading ? 'Sending…' : 'Send message'}
      </button>
    </form>
  );
}
```

---

## Contact page

```tsx
// src/pages/ContactPage.tsx
import ContactForm from '../components/ContactForm';
import { SEO } from '../components/SEO'; // if your project has one

export default function ContactPage() {
  return (
    <>
      <SEO
        title="Contact — CardGit"
        description="Get in touch with the CardGit team."
      />
      <main className="min-h-screen bg-gray-50 py-16 px-4">
        <div className="max-w-lg mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Get in touch</h1>
          <p className="text-gray-500 mb-8">
            Have a question or want to learn more? Fill in the form and we'll get back to you within 1–2 business days.
          </p>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <ContactForm />
          </div>
        </div>
      </main>
    </>
  );
}
```

---

## Routing

Add the page to your router:

```tsx
// src/App.tsx (or wherever your routes are defined)
import ContactPage from './pages/ContactPage';

// Inside your <Routes>:
<Route path="/contact" element={<ContactPage />} />
```

---

## Validation rules (matching the backend)

| Field | Required | Max length | Notes |
|---|---|---|---|
| `name` | Yes | 100 | |
| `email` | Yes | — | Must be a valid email |
| `subject` | Yes | 200 | |
| `message` | Yes | 5000 | |

The `maxLength` attributes on the inputs enforce these limits client-side. The backend enforces them server-side and returns a `400` with a clear message if violated.

---

## Error handling reference

| HTTP status | Meaning | UI action |
|---|---|---|
| `200` | Message sent | Show success state |
| `400` | Validation error | Show `error.message` to user |
| `401` | Wrong or missing API key | Log — don't show to user |
| `429` | Rate limit (10/hour per IP) | Show "Too many attempts, please try again later" |
| `500` | Email delivery failed | Show generic retry message |
| `503` | `CONTACT_API_KEY` not set on backend | Log — check environment config |
