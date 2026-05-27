export default function CardPreview({ recipientName, message, style, className = '' }) {
  const textColor = style?.dark ? 'text-champagne' : 'text-plum-deep'
  const subtextColor = style?.dark ? 'text-champagne/80' : 'text-plum-light'
  const accentColor = style?.dark ? 'text-gold-light' : 'text-gold-muted'

  return (
    <div
      className={`relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border border-rose-soft/30 shadow-soft-lg ${className}`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${style?.bg || 'from-rose-soft/60 via-champagne to-cream'}`} />

      <div className="absolute inset-0 opacity-30">
        <div className="absolute -left-8 top-8 h-32 w-32 rounded-full bg-white/40 blur-2xl" />
        <div className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-gold/20 blur-3xl" />
      </div>

      <div className="absolute left-0 right-0 top-0 h-1 gradient-gold" />

      <div className="relative flex h-full flex-col items-center justify-center p-8 text-center">
        <p className={`font-elegant text-sm uppercase tracking-[0.2em] ${subtextColor}`}>
          With love
        </p>

        <h2
          className={`font-script mt-4 text-5xl leading-tight sm:text-6xl ${textColor}`}
          style={{ minHeight: '4rem' }}
        >
          {recipientName || 'Their Name'}
        </h2>

        <div className={`my-6 h-px w-16 ${style?.dark ? 'bg-champagne/30' : 'bg-gold/40'}`} />

        <p className={`font-elegant max-w-[240px] text-lg italic leading-relaxed ${subtextColor}`}>
          {message || 'Your heartfelt message will appear here…'}
        </p>

        <div className={`absolute bottom-6 flex items-center gap-1.5 ${accentColor}`}>
          <span className="text-lg">✦</span>
          <span className="font-display text-xs font-medium tracking-widest uppercase">Giftesia</span>
          <span className="text-lg">✦</span>
        </div>
      </div>
    </div>
  )
}
