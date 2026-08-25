import { Check } from 'lucide-react'

interface PricingTier {
  name: string
  price: string
  period?: string
  description: string
  features: string[]
  cta: string
  ctaHref: string
  highlighted?: boolean
  badge?: string
  comingSoon?: boolean
}

interface Props {
  tier: PricingTier
}

export default function PricingCard({ tier }: Props) {
  return (
    <div
      className={`relative flex flex-col rounded-3xl p-8 ${
        tier.highlighted
          ? 'bg-gradient-to-b from-indigo-600 to-violet-700 text-white shadow-2xl shadow-indigo-500/30 scale-[1.02]'
          : 'bg-[var(--bg-surface)] border border-slate-200 dark:border-slate-700/50'
      }`}
    >
      {tier.badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-amber-400 text-amber-900 font-bold text-xs px-4 py-1.5 rounded-full shadow-md">
            {tier.badge}
          </span>
        </div>
      )}

      {tier.comingSoon && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-slate-700 dark:bg-slate-600 text-white font-bold text-xs px-4 py-1.5 rounded-full shadow-md whitespace-nowrap">
            🚧 Coming Soon
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3
          className={`font-bold text-xl mb-2 ${tier.highlighted ? 'text-white' : 'text-[var(--text-primary)]'}`}
        >
          {tier.name}
        </h3>
        <p className={`text-sm mb-4 ${tier.highlighted ? 'text-white/80' : 'text-[var(--text-secondary)]'}`}>
          {tier.description}
        </p>
        <div className="flex items-end gap-1">
          <span className={`text-4xl font-black ${tier.highlighted ? 'text-white' : 'text-[var(--text-primary)]'}`}>
            {tier.price}
          </span>
          {tier.period && (
            <span className={`text-sm mb-1 ${tier.highlighted ? 'text-white/70' : 'text-[var(--text-secondary)]'}`}>
              /{tier.period}
            </span>
          )}
        </div>
      </div>

      <ul className="space-y-3 mb-8 flex-1" role="list">
        {tier.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3" role="listitem">
            <Check
              className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                tier.highlighted ? 'text-white' : 'text-indigo-500'
              }`}
              aria-hidden="true"
            />
            <span
              className={`text-sm ${tier.highlighted ? 'text-white/90' : 'text-[var(--text-secondary)]'}`}
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <a
        href={tier.ctaHref}
        className={`block text-center font-semibold py-3 px-6 rounded-xl transition-colors focus-visible:ring-2 focus-visible:outline-none ${
          tier.highlighted
            ? 'bg-white text-indigo-700 hover:bg-indigo-50 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-indigo-600'
            : 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:from-indigo-700 hover:to-violet-700 focus-visible:ring-indigo-500'
        }`}
      >
        {tier.cta}
      </a>
    </div>
  )
}

export type { PricingTier }
