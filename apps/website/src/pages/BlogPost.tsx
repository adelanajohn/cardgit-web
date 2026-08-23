import { useParams, Link } from 'react-router-dom'
import { Clock, ArrowLeft, ArrowRight } from 'lucide-react'
import { marked } from 'marked'
import SEO from '@/components/SEO'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Badge from '@/components/ui/Badge'
import { blogPosts } from '@/data/blog'
import { SITE_URL } from '@/data/seo'
import NotFound from './NotFound'

// Configure marked: GitHub-flavoured markdown, line breaks, no mangling
marked.setOptions({ gfm: true, breaks: true })

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = blogPosts.find((p) => p.slug === slug)
  const postIndex = blogPosts.findIndex((p) => p.slug === slug)
  const nextPost = postIndex < blogPosts.length - 1 ? blogPosts[postIndex + 1] : null
  const prevPost = postIndex > 0 ? blogPosts[postIndex - 1] : null

  if (!post) return <NotFound />

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: `${SITE_URL}/blog/${post.slug}/og.png`,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    author: { '@type': 'Organization', name: 'CardGit', url: 'https://cardgit.com' },
    publisher: {
      '@type': 'Organization',
      name: 'CardGit',
      logo: { '@type': 'ImageObject', url: 'https://cardgit.com/assets/logo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/${post.slug}` },
  }

  return (
    <>
      <SEO
        title={`${post.title} | CardGit Blog`}
        description={post.excerpt}
        canonical={`${SITE_URL}/blog/${post.slug}`}
        ogType="article"
        jsonLd={articleSchema}
        breadcrumbs={[
          { name: 'Blog', item: `${SITE_URL}/blog` },
          { name: post.title, item: `${SITE_URL}/blog/${post.slug}` },
        ]}
      />

      <article className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <AnimatedSection className="mb-8">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-[var(--text-secondary)] hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-sm font-medium focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none rounded"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              Back to Blog
            </Link>
          </AnimatedSection>

          <header className="mb-10">
            <AnimatedSection>
              <Badge className="mb-4">{post.category}</Badge>
              <h1 className="text-4xl md:text-5xl font-black text-[var(--text-primary)] leading-tight mb-6">
                {post.title}
              </h1>
              <div className="flex items-center gap-4 text-sm text-[var(--text-secondary)]">
                <span>{post.author}</span>
                <span>·</span>
                <time dateTime={post.datePublished}>{new Date(post.datePublished).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</time>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" aria-hidden="true" />
                  {post.readTime} min read
                </span>
              </div>
            </AnimatedSection>
          </header>

          {/* Hero image */}
          <AnimatedSection delay={0.1} className="mb-10">
            <div className="aspect-video overflow-hidden rounded-2xl">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
                loading="eager"
                decoding="async"
              />
            </div>
          </AnimatedSection>

          {/* Content — parsed markdown */}
          <AnimatedSection delay={0.15}>
            <div
              className="prose prose-slate dark:prose-invert max-w-none
                prose-headings:font-black prose-headings:text-[var(--text-primary)]
                prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-3
                prose-p:text-[var(--text-secondary)] prose-p:leading-relaxed
                prose-a:text-indigo-600 dark:prose-a:text-indigo-400 prose-a:no-underline hover:prose-a:underline
                prose-strong:text-[var(--text-primary)] prose-strong:font-semibold
                prose-ul:space-y-1 prose-li:text-[var(--text-secondary)]
                prose-ol:space-y-1
                prose-blockquote:border-indigo-400 prose-blockquote:text-[var(--text-secondary)] prose-blockquote:not-italic
                prose-code:text-indigo-600 dark:prose-code:text-indigo-400 prose-code:bg-indigo-50 dark:prose-code:bg-indigo-950/40 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono"
              dangerouslySetInnerHTML={{ __html: marked.parse(post.content) as string }}
            />
          </AnimatedSection>

          {/* Post navigation */}
          {(prevPost || nextPost) && (
            <AnimatedSection delay={0.2} className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-700/50">
              <div className="flex flex-col sm:flex-row gap-4">
                {prevPost && (
                  <Link
                    to={`/blog/${prevPost.slug}`}
                    className="flex-1 flex items-center gap-3 p-4 bg-[var(--bg-surface)] border border-slate-200 dark:border-slate-700/50 rounded-xl hover:border-indigo-300 dark:hover:border-indigo-600 transition-colors group focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none"
                  >
                    <ArrowLeft className="w-5 h-5 text-[var(--text-secondary)] flex-shrink-0" aria-hidden="true" />
                    <div>
                      <div className="text-xs text-[var(--text-secondary)] mb-1">Previous</div>
                      <div className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2">{prevPost.title}</div>
                    </div>
                  </Link>
                )}
                {nextPost && (
                  <Link
                    to={`/blog/${nextPost.slug}`}
                    className="flex-1 flex items-center justify-end gap-3 p-4 bg-[var(--bg-surface)] border border-slate-200 dark:border-slate-700/50 rounded-xl hover:border-indigo-300 dark:hover:border-indigo-600 transition-colors group focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none text-right"
                  >
                    <div>
                      <div className="text-xs text-[var(--text-secondary)] mb-1">Next</div>
                      <div className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2">{nextPost.title}</div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-[var(--text-secondary)] flex-shrink-0" aria-hidden="true" />
                  </Link>
                )}
              </div>
            </AnimatedSection>
          )}
        </div>
      </article>
    </>
  )
}
