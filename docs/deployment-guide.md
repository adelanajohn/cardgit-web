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

## Cloudflare Pages Functions

The contact form uses a Cloudflare Pages Function at `/api/contact`.

The function file is at:
```
apps/website/functions/api/contact.ts
```

Cloudflare automatically serves any file under `functions/` as a serverless function endpoint. No separate deployment step is needed — it deploys alongside the static site.

### Environment Variables

The contact function requires these environment variables set in the **Cloudflare Pages dashboard**:

1. Go to **Cloudflare Dashboard → Workers & Pages → cardgit-website → Settings → Environment Variables**
2. Add the following under **Production**:

| Variable | Description |
|---|---|
| `ZEPTO_API_KEY` | ZeptoMail Send Mail token |
| `CONTACT_TO` | Recipient email (e.g. `info@cardgit.com`) |
| `CONTACT_FROM` | Verified sender address in ZeptoMail (e.g. `noreply@cardgit.com`) |

---

## Workflow Summary

```
Make changes locally
       ↓
git add / commit / push   ← keeps GitHub in sync
       ↓
cd apps/website
npm run deploy            ← deploys to Cloudflare Pages
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

**Contact form not sending email**
Check that `ZEPTO_API_KEY`, `CONTACT_TO`, and `CONTACT_FROM` are set in the Cloudflare Pages environment variables dashboard.
