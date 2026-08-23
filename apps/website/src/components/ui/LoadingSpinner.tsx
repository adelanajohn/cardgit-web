export default function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--bg-page)]">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin" />
        <p className="text-[var(--text-secondary)] text-sm">Loading…</p>
      </div>
    </div>
  )
}
