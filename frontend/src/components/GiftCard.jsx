import { ExternalLink, Bookmark, BookmarkCheck } from 'lucide-react'

export default function GiftCard({
  gift,
  onSave,
  isSaved = false,
  compact = false,
  showActions = true,
}) {
  return (
    <article
      className={`group gradient-card overflow-hidden rounded-2xl border border-rose-soft/40 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg ${
        compact ? 'p-4' : 'p-5 sm:p-6'
      }`}
    >
      <div className="flex items-start gap-4">
        <div
          className={`flex shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-champagne to-rose-soft/40 ${
            compact ? 'h-12 w-12 text-xl' : 'h-14 w-14 text-2xl'
          }`}
        >
          {gift.emoji || '🎁'}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <h3 className={`font-display font-semibold text-plum-deep ${compact ? 'text-base' : 'text-lg'}`}>
              {gift.name}
            </h3>
            <span className="shrink-0 rounded-full bg-gold/15 px-2.5 py-0.5 text-xs font-medium text-gold-muted">
              {gift.category}
            </span>
          </div>

          <p className={`mt-2 leading-relaxed text-plum-light ${compact ? 'text-xs' : 'text-sm'}`}>
            {gift.why}
          </p>

          <div className="mt-3 flex flex-wrap items-center gap-3">
            <span className="font-elegant text-base font-semibold text-plum">{gift.price}</span>
          </div>

          {showActions && (
            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href={gift.link || '#'}
                className="inline-flex items-center gap-1.5 rounded-full gradient-plum px-4 py-2 text-xs font-medium text-champagne transition-all hover:brightness-110 sm:text-sm"
                onClick={(e) => e.preventDefault()}
              >
                View Product
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
              {onSave && (
                <button
                  type="button"
                  onClick={() => onSave(gift)}
                  className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-xs font-medium transition-all sm:text-sm ${
                    isSaved
                      ? 'border-gold/40 bg-gold/10 text-gold-muted'
                      : 'border-rose-soft bg-white/60 text-plum hover:border-gold/40 hover:bg-gold/5'
                  }`}
                >
                  {isSaved ? (
                    <>
                      <BookmarkCheck className="h-3.5 w-3.5" />
                      Saved
                    </>
                  ) : (
                    <>
                      <Bookmark className="h-3.5 w-3.5" />
                      Save Gift
                    </>
                  )}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  )
}
