# CardGit Website — Deployment Guide

## Overview

The website deploys directly to **Cloudflare Pages** using Wrangler from your local machine.
There is no GitHub Actions CI/CD pipeline — deployment is triggered manually.

---

## Prerequisites

### 1. Install Wrangler globally (one-time)
```bash
npm install -g wrangler
```

### 2. Authenticate with Cloudflare (one-time)
Run from anywhere:
```bash
npx wrangler login
```
This opens a browser window. Log in with your Cloudflare account. Credentials are saved locally — you will not need to do this again unless you log out or switch machines.

---

## Deploying

Navigate to the website app directory and run the deploy script:

```bash
cd apps/website
npm run deploy
```

This single command:
1. Runs TypeScript compilation (`tsc -b`)
2. Builds the Vite project (`vite build`) — output goes to `apps/website/dist`
3. Deploys `dist` to Cloudflare Pages under the project `cardgit-website` on the `main` branch

Expected output:
```
✨ Compiled successfully
✨ Uploading... (X files)
✅ Success! Deployed to https://cardgit-website.pages.dev
```

---

## Project Details

| Setting | Value |
|---|---|
| Cloudflare Pages project | `cardgit-website` |
| Production URL | `https://cardgit-website.pages.dev` |
| Deploy branch | `main` |
| Build output directory | `apps/website/dist` |
| Functions directory | `apps/website/functions` |

---

## Environment Configuration

Vite loads environment files automatically based on the command — there is no manual switch.

| File | Loaded when | Contact API target |
|---|---|---|
| `.env.local` | `npm run dev` (local only, not committed) | `/api/v1/contact` → proxied to UAT via Vite dev server |
| `.env.production` | `npm run build` / `npm run deploy` | `https://api2.cardgit.com/api/v1/contact` (prod) |

### Contact API endpoints

| Environment | URL |
|---|---|
| UAT | `https://uat.api2.cardgit.com/api/v1/contact` |
| Production | `https://api2.cardgit.com/api/v1/contact` |

### How the dev proxy works

Running `npm run dev` sends contact form requests to the relative path `/api/v1/contact`.
Vite intercepts that and forwards it to `https://uat.api2.cardgit.com`, adding the correct headers server-side.
This avoids CORS errors in the browser during local development.

### Switching environments locally

The environment is determined by the command you run — not a toggle:

- **To use UAT** (default for dev): `npm run dev`
- **To use production**: `npm run build && npm run preview` — or just deploy

If you need to point local dev at production temporarily, edit `VITE_CONTACT_API_URL` in `.env.local` to the full prod URL and update the Vite proxy target in `vite.config.ts` to match.

---

## Cloudflare Pages Functions

No Pages Functions are currently in use. The `functions/` directory can be left empty or removed.

Previously the contact form used a ZeptoMail-based function at `functions/api/contact.ts` — this has been deleted. The Cloudflare Pages dashboard secrets `ZEPTO_API_KEY`, `CONTACT_TO`, and `CONTACT_FROM` are now unused and can be removed from **Cloudflare Dashboard → Workers & Pages → cardgit-website → Settings → Environment Variables**.

---

## Workflow Summary

```
Make changes locally
       ↓
git add / commit / push   ← keeps GitHub in sync
       ↓
cd apps/website
npm run deploy            ← builds with .env.production → deploys to Cloudflare Pages
```

---

## Troubleshooting

**`wrangler: command not found`**
Run `npm install -g wrangler` then try again.

**`You must be logged in`**
Run `npx wrangler login` to re-authenticate.

**`Project not found`**
Ensure the project name in `package.json` deploy script matches exactly: `cardgit-website`.

**Build fails (TypeScript errors)**
Run `npm run build` separately first to see the error before deploying.

**Contact form CORS error in local dev**
Make sure `VITE_CONTACT_API_URL=/api/v1/contact` (relative path) in `.env.local` and the Vite proxy is configured in `vite.config.ts`. Do not use the full URL in `.env.local` — that bypasses the proxy and triggers CORS.

**Contact form not sending in production**
Check that `VITE_CONTACT_API_URL` and `VITE_CONTACT_API_KEY` in `.env.production` are correct, and that the `cardgit-events` backend is healthy at `https://api2.cardgit.com`.
