import type { LucideIcon } from 'lucide-react'

interface Props {
  icon: LucideIcon
  title: string
  description: string
  variant?: 'default' | 'events'
  className?: string
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  variant = 'default',
  className = '',
}: Props) {
  const iconBg =
    variant === 'events'
      ? 'bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500'
      : 'bg-gradient-to-br from-indigo-600 to-violet-600'

  return (
    <div
      className={`group bg-[var(--bg-surface)] border border-slate-200/80 dark:border-slate-700/40 rounded-2xl p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 shadow-sm ${className}`}
    >
      <div
        className={`inline-flex items-center justify-center w-10 h-10 rounded-xl ${iconBg} mb-3 shadow-sm`}
        aria-hidden="true"
      >
        <Icon className="w-5 h-5 text-white" />
      </div>
      <h3 className="font-semibold text-[var(--text-primary)] mb-1.5 text-sm leading-snug">{title}</h3>
      <p className="text-[var(--text-secondary)] text-xs leading-relaxed">{description}</p>
    </div>
  )
}
