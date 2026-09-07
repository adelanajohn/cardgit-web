# Google Analytics 4 Setup

## Overview

GA4 is integrated via direct gtag — no third-party library. This was a deliberate decision after `react-ga4` caused a runtime crash in production due to a CJS/ESM interop bug in Vite's rolldown bundler.

## How it works

Two files handle the entire integration:

**`src/components/analytics/GoogleAnalytics.tsx`**
Injects the gtag script into `<head>` on first render and fires a `page_view` event on every route change. Rendered once inside `<BrowserRouter>` in `App.tsx`.

**`src/App.tsx`**
Mounts `<GoogleAnalytics />` at the top of the router tree so it has access to `useLocation`.

## Configuration

The GA4 Measurement ID is set via environment variable:

```
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

Set in `.env.local` for development and `.env.production` for production builds. If the variable is not set, analytics silently does nothing — no errors thrown.

## Why not react-ga4

`react-ga4` is a CommonJS package with no ESM build. Vite's rolldown bundler (v8+) resolves the default import as the module namespace object rather than the exported singleton instance. This means `ReactGA.initialize` resolves to `undefined` at runtime, causing:

```
TypeError: $n.default.initialize is not a function
```

The fix was to drop the library entirely. The gtag API is stable, well-documented, and doing it directly removes the dependency and ~12 kB from the bundle.

## Page view tracking

Page views are tracked on every `location` change via `useEffect`:

```ts
window.gtag('event', 'page_view', {
  page_path: location.pathname + location.search,
  page_location: window.location.href,
})
```

`send_page_view: false` is passed to the initial `gtag('config', ...)` call to prevent GA4 from firing a duplicate page view on load before the React router is ready.

## Adding custom events

Import nothing — just call `window.gtag` directly anywhere in the app:

```ts
window.gtag('event', 'sign_up', { method: 'email' })
window.gtag('event', 'share', { content_type: 'card', item_id: cardId })
```

For TypeScript, `window.gtag` is typed in `GoogleAnalytics.tsx`:

```ts
interface Window {
  dataLayer: unknown[]
  gtag: (...args: unknown[]) => void
}
```

## Deployment notes

- The Measurement ID is committed in `.env.production` — do not commit real secrets here, but GA Measurement IDs are public-facing and safe to include.
- Wrangler will warn `"working directory has uncommitted changes"` if you run `npm run deploy` before committing. This is cosmetic — the deployed build is always the compiled `dist/` output regardless of git state.
