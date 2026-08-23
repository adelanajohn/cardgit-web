import { Link } from 'react-router-dom'
import { ArrowLeft, Home } from 'lucide-react'
import SEO from '@/components/SEO'

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found | CardGit"
        description="The page you're looking for doesn't exist."
        noIndex
      />

      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
        <div className="text-center px-4">
          <div className="text-8xl font-black text-gradient mb-6" aria-hidden="true">404</div>
          <h1 className="text-3xl font-black text-[var(--text-primary)] mb-4">Page not found</h1>
          <p className="text-[var(--text-secondary)] text-lg mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or may have been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-2 border border-slate-200 dark:border-slate-700 text-[var(--text-primary)] font-semibold px-6 py-3 rounded-xl hover:border-indigo-300 dark:hover:border-indigo-600 transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              Go back
            </button>
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold px-6 py-3 rounded-xl hover:from-indigo-700 hover:to-violet-700 transition-all focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              <Home className="w-4 h-4" aria-hidden="true" />
              Go home
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
