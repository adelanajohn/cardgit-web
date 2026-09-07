# Contact Form Integration Guide

How the CardGit website contact form is wired up — React + Vite frontend, Cloudflare Pages Function as a server-side proxy, and the CardGit Events backend API.

---

## Architecture

The API key is **never** exposed in the browser bundle. The Pages Function runs at the edge, injects the key from a Cloudflare Secret, and forwards the request to the upstream API.

```
Browser → POST /api/v1/contact (no key, same origin)
               ↓
      Cloudflare Pages Function
      functions/api/v1/contact.ts
      (CONTACT_API_KEY injected from CF Secret at runtime)
               ↓
      https://api2.cardgit.com/api/v1/contact
      (X-API-Key header)
```

---

## Environment variables

### Backend (`cardgit-events`)

The key lives in `apps/backend/.env` and is deployed to Fly.io as a secret.

```env
CONTACT_API_KEY=<strong-random-secret>
CONTACT_RECIPIENT_EMAIL=support@cardgit.com
```

Deploy to Fly.io:
```bash
# Production
flyctl secrets set CONTACT_API_KEY="<new-key>" --app cardgit-events-prod

# UAT
flyctl secrets set CONTACT_API_KEY="<new-key>" --app cardgit-events
```

Generate a new key:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### Website (`apps/website`)

Secrets are stored in Cloudflare — **never** in `.env` files, never committed to git.

```bash
wrangler pages secret put CONTACT_API_KEY --project-name cardgit-website
# optional: override the upstream URL
wrangler pages secret put CONTACT_API_URL --project-name cardgit-website
```

`CONTACT_API_URL` defaults to `https://api2.cardgit.com/api/v1/contact` if not set.

For **local development**, add these to `.env.local` (already gitignored). `wrangler pages dev` reads them as simulated secrets:

```env
# apps/website/.env.local
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
CONTACT_API_KEY=<your-dev-key>
CONTACT_API_URL=https://api2.cardgit.com/api/v1/contact
```

`.env.production` contains only non-secret build-time variables:

```env
# apps/website/.env.production
VITE_GA_MEASUREMENT_ID=G-TZ6T4KGCHL
```

---

## Cloudflare Pages Function

The proxy lives at `functions/api/v1/contact.ts`. It is automatically served at `/api/v1/contact` by Cloudflare Pages.

```ts
// functions/api/v1/contact.ts
interface Env {
  CONTACT_API_KEY: string
  CONTACT_API_URL?: string
}

const UPSTREAM_URL = 'https://api2.cardgit.com/api/v1/contact'

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  const contentType = request.headers.get('content-type') ?? ''
  if (!contentType.includes('application/json')) {
    return new Response(JSON.stringify({ error: 'Content-Type must be application/json' }), {
      status: 415,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON body' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  const upstream = await fetch(env.CONTACT_API_URL ?? UPSTREAM_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-Key': env.CONTACT_API_KEY ?? '',
    },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(15_000),
  })

  return new Response(await upstream.text(), {
    status: upstream.status,
    headers: {
      'Content-Type': upstream.headers.get('content-type') ?? 'application/json',
    },
  })
}

// Reject non-POST methods
export const onRequest: PagesFunction<Env> = async () => {
  return new Response(JSON.stringify({ error: 'Method not allowed' }), {
    status: 405,
    headers: { 'Content-Type': 'application/json', Allow: 'POST' },
  })
}
```

---

## Frontend API client

The browser calls the local proxy at `/api/v1/contact`. No key is sent from the client.

```ts
// src/lib/contactApi.ts
import type { ContactFormData, ContactApiResponse } from '@/types/contact'

// Always routes through the Pages Function proxy — no API key in the bundle
const CONTACT_URL = '/api/v1/contact'

export const contactApi = {
  submit: async (data: ContactFormData): Promise<ContactApiResponse> => {
    const res = await fetch(CONTACT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...data, source: 'cardgit-website' }),
      signal: AbortSignal.timeout(15_000),
    })

    const json = await res.json()

    if (!res.ok) {
      const msg =
        json?.error?.message ??
        json?.message ??
        'Failed to send message. Please try again.'
      throw Object.assign(new Error(msg), { response: { status: res.status, data: json } })
    }

    return json as ContactApiResponse
  },
}
```

---

## TypeScript types

```ts
// src/types/contact.ts
export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export interface ContactApiResponse {
  status: 'success' | 'error'
  message: string
}

export interface ContactApiError {
  success: false
  error: {
    code: string
    message: string
    correlationId?: string
  }
}
```

---

## wrangler.toml

```toml
# apps/website/wrangler.toml
name = "cardgit-website"
pages_build_output_dir = "dist"
compatibility_date = "2024-09-23"

# Secrets are NOT stored here — set via wrangler pages secret put
# or the Cloudflare dashboard:
#   Pages > cardgit-website > Settings > Environment variables > Add secret
```

---

## Deploying

```bash
# From apps/website
npm run deploy
```

This runs `tsc -b && vite build` then `wrangler pages deploy dist --project-name=cardgit-website --branch=main`.

For local development with the Pages Function:
```bash
# Build first, then serve with wrangler (reads .env.local for secrets)
npm run build
npx wrangler pages dev dist --port 8788 --compatibility-date 2024-09-23
```

---

## Key rotation

1. Generate a new key:
   ```bash
   node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
   ```

2. Update Fly.io (do both environments back-to-back to minimise downtime):
   ```bash
   flyctl secrets set CONTACT_API_KEY="<new-key>" --app cardgit-events-prod
   flyctl secrets set CONTACT_API_KEY="<new-key>" --app cardgit-events
   ```

3. Update the Cloudflare Secret immediately after:
   ```bash
   wrangler pages secret put CONTACT_API_KEY --project-name cardgit-website
   # enter the new key at the interactive prompt
   ```

4. Update `.env.local` with the new key for local development.

> The backend does not support dual-key transitions — the old key stops working the moment Fly redeploys. Have the `wrangler` command ready to run immediately after step 2.

---

## Validation rules (matching the backend)

| Field | Required | Max length | Notes |
|---|---|---|---|
| `name` | Yes | 100 | |
| `email` | Yes | — | Must be a valid email |
| `subject` | Yes | 200 | |
| `message` | Yes | 5000 | |

---

## Error handling reference

| HTTP status | Meaning | UI action |
|---|---|---|
| `200` | Message sent | Show success state |
| `400` | Validation error or invalid JSON | Show `error.message` to user |
| `401` | Wrong or missing API key | Log — don't show to user |
| `405` | Wrong HTTP method | Log — shouldn't happen in normal use |
| `415` | Wrong content-type | Log — shouldn't happen in normal use |
| `429` | Rate limit (10/hour per IP) | Show "Too many attempts, please try again later" |
| `500` | Email delivery failed | Show generic retry message |
| `503` | `CONTACT_API_KEY` not set on backend | Log — check environment config |
