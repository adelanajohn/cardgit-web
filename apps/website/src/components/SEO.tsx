import { Helmet } from 'react-helmet-async'
import { SITE_NAME, SITE_URL, DEFAULT_OG_IMAGE } from '@/data/seo'

interface Props {
  title: string
  description: string
  canonical?: string
  ogImage?: string
  ogType?: string
  noIndex?: boolean
  jsonLd?: object | object[]
  breadcrumbs?: { name: string; item: string }[]
  prefetchUrls?: string[]
  preloadImage?: string
}

export default function SEO({
  title,
  description,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  noIndex = false,
  jsonLd,
  breadcrumbs,
  prefetchUrls = [],
  preloadImage,
}: Props) {
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`
  const canonicalUrl = canonical || SITE_URL

  // Build breadcrumb schema if provided
  const breadcrumbSchema = breadcrumbs
    ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          ...breadcrumbs.map((b, i) => ({
            '@type': 'ListItem',
            position: i + 2,
            name: b.name,
            item: b.item,
          })),
        ],
      }
    : null

  // Collect all schemas
  const schemas: object[] = []
  if (breadcrumbSchema) schemas.push(breadcrumbSchema)
  if (jsonLd) {
    if (Array.isArray(jsonLd)) schemas.push(...jsonLd)
    else schemas.push(jsonLd)
  }

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_GB" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@cardgit" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Prefetch likely next pages */}
      {prefetchUrls.map((url) => (
        <link key={url} rel="prefetch" href={url} as="document" />
      ))}

      {/* Preload LCP image if provided */}
      {preloadImage && (
        <link rel="preload" as="image" href={preloadImage} />
      )}

      {/* JSON-LD */}
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  )
}
