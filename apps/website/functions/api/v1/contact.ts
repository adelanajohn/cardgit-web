/**
 * Cloudflare Pages Function: POST /api/v1/contact
 *
 * Acts as a server-side proxy to the upstream contact API.
 * The API key is held in a Cloudflare secret (CONTACT_API_KEY) and
 * never exposed to the browser bundle.
 *
 * Environment bindings (set via `wrangler secret put` or the CF dashboard):
 *   CONTACT_API_KEY  – the API key for api2.cardgit.com
 *   CONTACT_API_URL  – (optional) override the upstream URL
 */

interface Env {
  CONTACT_API_KEY: string
  CONTACT_API_URL?: string
}

const UPSTREAM_URL = 'https://api2.cardgit.com/api/v1/contact'

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  // Reject requests with no body
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

  const upstreamUrl = env.CONTACT_API_URL ?? UPSTREAM_URL

  const upstream = await fetch(upstreamUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // Key injected server-side — never sent to the browser
      'X-API-Key': env.CONTACT_API_KEY ?? '',
    },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(15_000),
  })

  const responseBody = await upstream.text()

  return new Response(responseBody, {
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
