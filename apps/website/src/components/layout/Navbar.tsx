import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Moon, Sun, Calendar, ChevronDown } from 'lucide-react'
import cardgitIcon from '@/assets/icon.png'

function useDarkMode() {
  const [dark, setDark] = useState(() =>
    document.documentElement.classList.contains('dark')
  )

  const toggle = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  return { dark, toggle }
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { dark, toggle } = useDarkMode()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setProductsOpen(false)
  }, [location])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[var(--bg-surface)]/95 backdrop-blur-md shadow-sm border-b border-slate-200/50 dark:border-slate-700/50'
          : 'bg-transparent'
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-16 gap-8"
      >
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2.5 flex-shrink-0 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none rounded"
          aria-label="CardGit home"
        >
          <img src={cardgitIcon} alt="" aria-hidden="true" className="w-8 h-8 rounded-lg object-contain" />
          <span className="font-black text-xl text-[var(--text-primary)]">CardGit</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1 flex-1">
          {/* Products dropdown */}
          <div className="relative">
            <button
              aria-expanded={productsOpen}
              aria-haspopup="true"
              onClick={() => setProductsOpen(!productsOpen)}
              onBlur={(e) => {
                if (!e.currentTarget.parentElement?.contains(e.relatedTarget as Node)) {
                  setProductsOpen(false)
                }
              }}
              className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none"
            >
              Products
              <ChevronDown
                className={`w-4 h-4 transition-transform ${productsOpen ? 'rotate-180' : ''}`}
                aria-hidden="true"
              />
            </button>

            {productsOpen && (
              <div className="absolute top-full left-0 mt-2 w-72 bg-[var(--bg-surface)] border border-slate-200 dark:border-slate-700 rounded-2xl shadow-xl p-3 z-50">
                <Link
                  to="/digital-business-cards"
                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none"
                >
                  <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0">
                    <img src={cardgitIcon} alt="" aria-hidden="true" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <div className="font-semibold text-[var(--text-primary)] text-sm">Digital Business Cards</div>
                    <div className="text-xs text-[var(--text-secondary)] mt-0.5">Share your identity with a QR code</div>
                  </div>
                </Link>
                <Link
                  to="/events"
                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="font-semibold text-[var(--text-primary)] text-sm">CardGit Events</div>
                    <div className="text-xs text-[var(--text-secondary)] mt-0.5">Networking-first event management</div>
                  </div>
                </Link>
              </div>
            )}
          </div>

          {[
            { label: 'Features', to: '/features' },
            { label: 'Pricing', to: '/pricing' },
            { label: 'Use Cases', to: '/use-cases' },
            { label: 'Contact', to: '/contact' },
            { label: 'Blog', to: '/blog' },
          ].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none ${
                location.pathname === link.to
                  ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop right actions */}
        <div className="hidden md:flex items-center gap-3 ml-auto">
          <button
            onClick={toggle}
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="p-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none"
          >
            {dark ? <Sun className="w-5 h-5" aria-hidden="true" /> : <Moon className="w-5 h-5" aria-hidden="true" />}
          </button>
          <a
            href="https://app.cardgit.com/auth/login"
            className="px-4 py-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-slate-200 dark:border-slate-700 rounded-xl hover:border-slate-300 dark:hover:border-slate-600 transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none"
          >
            Login
          </a>
          <a
            href="https://app.cardgit.com/auth/signup"
            className="px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-violet-600 rounded-xl hover:from-indigo-700 hover:to-violet-700 transition-all shadow-sm shadow-indigo-500/30 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:outline-none"
          >
            Get Started Free
          </a>
        </div>

        {/* Mobile: theme + hamburger */}
        <div className="md:hidden flex items-center gap-2 ml-auto">
          <button
            onClick={toggle}
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="p-2 rounded-lg text-[var(--text-secondary)] focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none"
          >
            {dark ? <Sun className="w-5 h-5" aria-hidden="true" /> : <Moon className="w-5 h-5" aria-hidden="true" />}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="p-2 rounded-lg text-[var(--text-secondary)] focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none"
          >
            {menuOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-[var(--bg-surface)] border-t border-slate-200 dark:border-slate-700 px-4 py-4 space-y-1 shadow-lg"
        >
          <Link
            to="/digital-business-cards"
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800"
          >
            <img src={cardgitIcon} alt="" aria-hidden="true" className="w-5 h-5 rounded object-contain" />
            <span className="font-medium text-[var(--text-primary)]">Digital Business Cards</span>
          </Link>
          <Link
            to="/events"
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800"
          >
            <Calendar className="w-5 h-5 text-purple-500" aria-hidden="true" />
            <span className="font-medium text-[var(--text-primary)]">CardGit Events</span>
          </Link>
          {[
            { label: 'Features', to: '/features' },
            { label: 'Pricing', to: '/pricing' },
            { label: 'Use Cases', to: '/use-cases' },
            { label: 'Contact', to: '/contact' },
            { label: 'Blog', to: '/blog' },
            { label: 'About', to: '/about' },
          ].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="block px-4 py-3 rounded-xl text-[var(--text-secondary)] hover:bg-slate-50 dark:hover:bg-slate-800 font-medium"
            >
              {link.label}
            </Link>
          ))}

          <div className="pt-3 border-t border-slate-200 dark:border-slate-700 flex flex-col gap-3">
            <a
              href="https://app.cardgit.com/auth/login"
              className="block text-center px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 font-medium text-[var(--text-primary)]"
            >
              Login
            </a>
            <a
              href="https://app.cardgit.com/auth/signup"
              className="block text-center px-4 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold"
            >
              Get Started Free
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
