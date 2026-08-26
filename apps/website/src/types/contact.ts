export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export interface ContactApiResponse {
  status: 'success' | 'error'
  message: string
}

export interface ContactApiError {
  success: false
  error: {
    code: string
    message: string
    correlationId?: string
  }
}
