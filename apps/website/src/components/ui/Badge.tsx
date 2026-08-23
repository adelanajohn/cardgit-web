import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  variant?: 'default' | 'success' | 'warning' | 'events'
  className?: string
}

export default function Badge({ children, variant = 'default', className = '' }: Props) {
  const variants = {
    default: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300',
    success: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300',
    warning: 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
    events: 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300',
  }

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
