import { useState } from 'react'
import { contactApi } from '@/lib/contactApi'
import type { ContactFormData } from '@/types/contact'

interface UseContactForm {
  submit: (data: ContactFormData) => Promise<boolean>
  loading: boolean
  error: string | null
}

export function useContactForm(): UseContactForm {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const submit = async (data: ContactFormData): Promise<boolean> => {
    setLoading(true)
    setError(null)

    try {
      await contactApi.submit(data)
      return true
    } catch (err: unknown) {
      const e = err as { response?: { status: number; data?: { error?: { message?: string }; message?: string } }; message?: string }
      const status = e?.response?.status

      // Rate limit
      if (status === 429) {
        setError('Too many attempts. Please try again later.')
        return false
      }

      const msg =
        e?.response?.data?.error?.message ??
        e?.response?.data?.message ??
        e?.message ??
        'Failed to send message. Please try again.'

      setError(msg)
      return false
    } finally {
      setLoading(false)
    }
  }

  return { submit, loading, error }
}
