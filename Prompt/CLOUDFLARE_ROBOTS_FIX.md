# CRITICAL: Cloudflare is Blocking AI Crawlers

## The Problem

Your live `robots.txt` at https://cardgit.com/robots.txt contains **Cloudflare-injected rules** that are blocking AI crawlers:

```
User-agent: ClaudeBot
Disallow: /

User-agent: GPTBot
Disallow: /

User-agent: CCBot
Disallow: /

User-agent: Google-Extended
Disallow: /
```

These rules are **NOT in your source code** — Cloudflare is injecting them automatically, likely through:
- **Bot Fight Mode**
- **AI Scraper Protection** feature
- **Content Signal settings**

## Why This Breaks GEO

Even though your static content is perfect and your `robots.txt` source file allows AI crawlers, **Cloudflare's injected rules take precedence** and block them before they can read your content.

## How to Fix

You need to configure Cloudflare to allow AI crawlers. Here's how:

### Option 1: Disable AI Scraper Protection (Recommended)

1. **Log into Cloudflare Dashboard**
   - Go to https://dash.cloudflare.com/
   - Select your `cardgit.com` domain

2. **Navigate to Security → Bots**
   - Look for "AI Scrapers and Crawlers" section
   - Or find "Bot Fight Mode" settings

3. **Configure AI Bot Settings**
   - **Disable** "Block AI scrapers" or set to "Allow"
   - Or add specific exceptions for:
     - GPTBot (OpenAI)
     - ClaudeBot (Anthropic)
     - PerplexityBot (Perplexity)
     - CCBot (Common Crawl - used by many AI trainers)
     - Google-Extended (Google Bard/Gemini)

4. **Save and Wait**
   - Changes can take 5-10 minutes to propagate
   - Verify by checking https://cardgit.com/robots.txt

### Option 2: Use Cloudflare Rules to Override

If you want to keep Bot Fight Mode but allow specific bots:

1. **Go to Security → WAF → Custom Rules**
2. **Create a new rule:**
   - Name: "Allow AI Crawlers"
   - Expression:
     ```
     (http.user_agent contains "GPTBot") or
     (http.user_agent contains "ClaudeBot") or
     (http.user_agent contains "PerplexityBot") or
     (http.user_agent contains "CCBot")
     ```
   - Action: **Skip → All remaining custom rules**
3. **Deploy the rule** and move it to the top of your rule list

### Option 3: Content Signals (Advanced)

Cloudflare's "Content Signals" feature allows fine-grained control:

1. **Security → Bots → Content Signals**
2. Set signal to:
   ```
   search=yes,ai-input=yes,ai-train=no,use=reference
   ```
   This allows AI to **read and reference** your content but not use it for training.

## Verification

After making changes, verify the fix:

### 1. Check robots.txt
```
https://cardgit.com/robots.txt
```
Should no longer have `Disallow: /` for AI bots.

### 2. Test with Google's Robots Testing Tool
- Go to Google Search Console
- Test URL: `https://cardgit.com`
- User-agent: `GPTBot`
- Should show: **Allowed**

### 3. Test with AI
Ask ChatGPT or Claude:
> "What is CardGit? Fetch information from cardgit.com"

They should successfully read your site without errors.

## Current Status

✅ **Static content ready** — Your `index.html` has perfect GEO content  
✅ **Source robots.txt correct** — Your local file allows all AI crawlers  
✅ **Schema.org markup added** — Organization and SoftwareApplication schemas live  
✅ **llms.txt enhanced** — Now includes Q&A format  
❌ **Cloudflare blocking** — Cloudflare settings overriding your robots.txt

## Impact

Until Cloudflare settings are fixed:
- ❌ ChatGPT browsing **cannot** read your site
- ❌ Claude web search **cannot** read your site
- ❌ Perplexity **cannot** index your content
- ✅ Google Search **can** still index (uses different bot)

## Recommended Action

**Priority: HIGH** — This is the only blocker preventing full GEO functionality.

1. Log into Cloudflare Dashboard NOW
2. Navigate to Security → Bots
3. Disable "AI Scraper Protection" or add exceptions
4. Wait 5-10 minutes
5. Verify at https://cardgit.com/robots.txt

---

**Need Help?**
- Cloudflare Docs: https://developers.cloudflare.com/bots/
- Contact Cloudflare Support if you can't find the settings
