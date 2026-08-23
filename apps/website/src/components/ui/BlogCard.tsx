import { Link } from 'react-router-dom'
import { Clock, ArrowRight } from 'lucide-react'
import type { BlogPost } from '@/data/blog'
import Badge from './Badge'

interface Props {
  post: BlogPost
}

export default function BlogCard({ post }: Props) {
  return (
    <article className="group bg-[var(--bg-surface)] border border-slate-200 dark:border-slate-700/50 rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <div className="aspect-video bg-gradient-to-br from-indigo-100 to-violet-100 dark:from-indigo-900/30 dark:to-violet-900/30 flex items-center justify-center">
        <span className="text-indigo-400 text-sm">CardGit Blog</span>
      </div>
      <div className="p-6">
        <Badge className="mb-3">{post.category}</Badge>
        <h3 className="font-bold text-[var(--text-primary)] text-lg mb-2 leading-snug group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs text-[var(--text-secondary)]">
            <Clock className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{post.readTime} min read</span>
          </div>
          <Link
            to={`/blog/${post.slug}`}
            className="inline-flex items-center gap-1 text-indigo-600 dark:text-indigo-400 text-sm font-semibold hover:gap-2 transition-all focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none rounded"
            aria-label={`Read ${post.title}`}
          >
            Read more
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  )
}
