import { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '@/components/layout/Layout'
import LoadingSpinner from '@/components/ui/LoadingSpinner'

// Lazy-load all routes for code splitting
const Home = lazy(() => import('@/pages/Home'))
const DigitalBusinessCards = lazy(() => import('@/pages/DigitalBusinessCards'))
const Events = lazy(() => import('@/pages/Events'))
const Features = lazy(() => import('@/pages/Features'))
const Pricing = lazy(() => import('@/pages/Pricing'))
const Enterprise = lazy(() => import('@/pages/Enterprise'))
const UseCases = lazy(() => import('@/pages/UseCases'))
const UseCasePage = lazy(() => import('@/pages/UseCasePage'))
const Compare = lazy(() => import('@/pages/Compare'))
const ComparePage = lazy(() => import('@/pages/ComparePage'))
const About = lazy(() => import('@/pages/About'))
const Blog = lazy(() => import('@/pages/Blog'))
const BlogPost = lazy(() => import('@/pages/BlogPost'))
const Updates = lazy(() => import('@/pages/Updates'))
const Press = lazy(() => import('@/pages/Press'))
const FAQ = lazy(() => import('@/pages/FAQ'))
const Privacy = lazy(() => import('@/pages/Privacy'))
const Terms = lazy(() => import('@/pages/Terms'))
const Security = lazy(() => import('@/pages/Security'))
const Contact = lazy(() => import('@/pages/Contact'))
const Search = lazy(() => import('@/pages/Search'))
const NotFound = lazy(() => import('@/pages/NotFound'))

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/digital-business-cards" element={<DigitalBusinessCards />} />
            <Route path="/events" element={<Events />} />
            <Route path="/features" element={<Features />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/enterprise" element={<Enterprise />} />
            <Route path="/use-cases" element={<UseCases />} />
            <Route path="/use-cases/:slug" element={<UseCasePage />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/compare/:slug" element={<ComparePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/updates" element={<Updates />} />
            <Route path="/press" element={<Press />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/security" element={<Security />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/search" element={<Search />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
