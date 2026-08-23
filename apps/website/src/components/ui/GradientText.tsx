import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  variant?: 'default' | 'events'
  className?: string
  as?: 'span' | 'h1' | 'h2' | 'h3'
}

export default function GradientText({
  children,
  variant = 'default',
  className = '',
  as: Tag = 'span',
}: Props) {
  const gradientClass = variant === 'events' ? 'text-gradient-events' : 'text-gradient'

  return <Tag className={`${gradientClass} ${className}`}>{children}</Tag>
}
