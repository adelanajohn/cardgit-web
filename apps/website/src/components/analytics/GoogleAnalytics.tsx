import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined

// Extend window with gtag
declare global {
  interface Window {
    dataLayer: unknown[]
    gtag: (...args: unknown[]) => void
  }
}

function loadGtag(id: string) {
  if (document.getElementById('gtag-script')) return

  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments)
  }
  window.gtag('js', new Date())
  window.gtag('config', id, { send_page_view: false })

  const script = document.createElement('script')
  script.id = 'gtag-script'
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`
  document.head.appendChild(script)
}

/**
 * Loads GA4 and tracks a page_view on every route change.
 * Rendered once inside <BrowserRouter> in App.tsx.
 */
export default function GoogleAnalytics() {
  const location = useLocation()

  useEffect(() => {
    if (!GA_ID) return
    loadGtag(GA_ID)
    window.gtag('event', 'page_view', {
      page_path: location.pathname + location.search,
      page_location: window.location.href,
    })
  }, [location])

  return null
}
