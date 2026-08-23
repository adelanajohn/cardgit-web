import { ArrowRight } from 'lucide-react'

interface Props {
  headline: string
  subheadline?: string
  primaryCTA: { label: string; href: string }
  secondaryCTA?: { label: string; href: string }
  variant?: 'default' | 'events'
}

export default function CTABanner({
  headline,
  subheadline,
  primaryCTA,
  secondaryCTA,
  variant = 'default',
}: Props) {
  const gradient =
    variant === 'events'
      ? 'from-blue-600 via-purple-600 to-pink-600'
      : 'from-indigo-600 via-violet-600 to-purple-700'

  return (
    <section
      className={`relative overflow-hidden bg-gradient-to-r ${gradient} rounded-3xl p-10 md:p-16 text-white text-center`}
    >
      {/* background blobs */}
      <div
        className="absolute -top-20 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-20 -right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black mb-4">{headline}</h2>
        {subheadline && <p className="text-white/80 text-lg mb-8">{subheadline}</p>}

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={primaryCTA.href}
            className="inline-flex items-center justify-center gap-2 bg-white text-indigo-700 font-semibold px-8 py-4 rounded-xl hover:bg-indigo-50 transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-indigo-600 focus-visible:outline-none"
          >
            {primaryCTA.label}
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </a>
          {secondaryCTA && (
            <a
              href={secondaryCTA.href}
              className="inline-flex items-center justify-center gap-2 border-2 border-white/60 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
            >
              {secondaryCTA.label}
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
