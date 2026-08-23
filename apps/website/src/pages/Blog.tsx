import { useState } from 'react'
import SEO from '@/components/SEO'
import AnimatedSection from '@/components/ui/AnimatedSection'
import BlogCard from '@/components/ui/BlogCard'
import { blogPosts, blogCategories } from '@/data/blog'
import { pageSEO, SITE_URL } from '@/data/seo'

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All')
  const seo = pageSEO['blog']

  const filtered = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter((p) => p.category === activeCategory)

  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        canonical={seo.canonical}
        breadcrumbs={[{ name: 'Blog', item: `${SITE_URL}/blog` }]}
      />

      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-black text-[var(--text-primary)] mb-4">
              CardGit Blog
            </h1>
            <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
              Tips, guides, and insights on professional networking, event management, digital business cards, and the future of professional identity.
            </p>
          </AnimatedSection>

          {/* Category filter */}
          <AnimatedSection delay={0.1} className="mb-10">
            <div className="flex flex-wrap gap-2 justify-center" role="list" aria-label="Blog categories">
              {blogCategories.map((cat) => (
                <button
                  key={cat}
                  role="listitem"
                  onClick={() => setActiveCategory(cat)}
                  aria-pressed={activeCategory === cat}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none ${
                    activeCategory === cat
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'bg-slate-100 dark:bg-slate-800 text-[var(--text-secondary)] hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((post, i) => (
              <AnimatedSection key={post.slug} delay={i * 0.07}>
                <BlogCard post={post} />
              </AnimatedSection>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-[var(--text-secondary)] py-16">No posts in this category yet.</p>
          )}
        </div>
      </section>
    </>
  )
}
