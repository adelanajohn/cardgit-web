import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import type { FAQItem } from '@/data/faq'

interface Props {
  items: FAQItem[]
}

export default function FAQAccordion({ items }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <dl className="space-y-3" role="list">
      {items.map((item, i) => {
        const isOpen = openIndex === i
        const id = `faq-answer-${i}`
        const buttonId = `faq-btn-${i}`

        return (
          <div
            key={i}
            className="border border-slate-200 dark:border-slate-700/50 rounded-xl overflow-hidden"
            role="listitem"
          >
            <dt>
              <button
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={id}
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left bg-[var(--bg-surface)] hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none"
              >
                <span className="font-semibold text-[var(--text-primary)] pr-4">{item.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[var(--text-secondary)] flex-shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>
            </dt>
            <dd
              id={id}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="px-6 pb-5 bg-[var(--bg-surface)]"
            >
              <p className="text-[var(--text-secondary)] leading-relaxed">{item.answer}</p>
            </dd>
          </div>
        )
      })}
    </dl>
  )
}
