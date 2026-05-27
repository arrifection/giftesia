const MAX_PREVIEW_MESSAGE = 120

function truncateMessage(text, max = MAX_PREVIEW_MESSAGE) {
  if (!text) return ''
  return text.length > max ? `${text.slice(0, max).trimEnd()}…` : text
}

export default function CardPreview({ recipientName, message, style, className = '' }) {
  const textColor = style?.dark ? 'text-champagne' : 'text-plum-deep'
  const subtextColor = style?.dark ? 'text-champagne/80' : 'text-plum-light'
  const accentColor = style?.dark ? 'text-gold-light' : 'text-gold-muted'

  const displayName = recipientName?.trim() || 'Their Name'
  const displayMessage = message?.trim()
    ? truncateMessage(message)
    : 'Your heartfelt message will appear here…'

  return (
    <div
      className={`preview-card relative rounded-2xl border border-rose-soft/30 shadow-soft-lg ${className}`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${style?.bg || 'from-rose-soft/60 via-champagne to-cream'}`} />

      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute -left-8 top-8 h-32 w-32 rounded-full bg-white/40 blur-2xl" />
        <div className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-gold/20 blur-3xl" />
      </div>

      <div className="absolute left-0 right-0 top-0 h-1 gradient-gold" />

      <div className="preview-card-inner relative text-center">
        <div className="preview-card-header px-8">
          <p className={`font-elegant text-sm uppercase tracking-[0.2em] ${subtextColor}`}>
            With love
          </p>
        </div>

        <div className="flex min-h-0 flex-1 flex-col items-center justify-center px-8">
          <div className="preview-card-name w-full">
            <h2
              className={`font-script w-full truncate px-2 text-5xl leading-none ${textColor}`}
              title={displayName}
            >
              {displayName}
            </h2>
          </div>

          <div className={`my-5 h-px w-16 shrink-0 ${style?.dark ? 'bg-champagne/30' : 'bg-gold/40'}`} />

          <div className="w-full max-w-[260px] shrink-0">
            <p className={`preview-message font-elegant text-base italic ${subtextColor}`}>
              {displayMessage}
            </p>
          </div>
        </div>

        <div className={`preview-card-footer flex items-center justify-center gap-1.5 ${accentColor}`}>
          <span className="text-lg leading-none">✦</span>
          <span className="font-display text-xs font-medium tracking-widest uppercase">Giftesia</span>
          <span className="text-lg leading-none">✦</span>
        </div>
      </div>
    </div>
  )
}

export { MAX_PREVIEW_MESSAGE }
