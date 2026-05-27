import { Calendar, Trash2, Gift } from 'lucide-react'

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

export default function ReminderCard({ reminder, onDelete, upcoming = false }) {
  return (
    <div
      className={`group flex items-center gap-4 rounded-2xl border p-4 transition-all duration-300 sm:p-5 ${
        upcoming
          ? 'border-gold/30 bg-gradient-to-r from-gold/10 via-champagne/30 to-cream shadow-soft'
          : 'border-rose-soft/30 bg-white/60 shadow-soft hover:shadow-soft-lg'
      }`}
    >
      <div
        className={`flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-xl ${
          upcoming ? 'gradient-gold text-plum-deep' : 'bg-rose-soft/40 text-plum'
        }`}
      >
        <Calendar className="h-5 w-5" strokeWidth={1.75} />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="font-display text-base font-semibold text-plum-deep">{reminder.name}</h3>
          <span className="rounded-full bg-plum/8 px-2 py-0.5 text-xs font-medium text-plum-light">
            {reminder.occasion}
          </span>
        </div>
        <p className="mt-1 text-sm text-plum-light">{formatDate(reminder.date)}</p>
      </div>

      <div className="flex shrink-0 items-center gap-3">
        {upcoming && reminder.daysUntil <= 7 && (
          <span className="hidden rounded-full bg-plum/10 px-2.5 py-1 text-xs font-semibold text-plum sm:inline-flex">
            {reminder.daysUntil === 0
              ? 'Today!'
              : reminder.daysUntil === 1
                ? 'Tomorrow'
                : `${reminder.daysUntil} days`}
          </span>
        )}
        {!upcoming && onDelete && (
          <button
            type="button"
            onClick={() => onDelete(reminder.id)}
            className="rounded-lg p-2 text-plum-light/50 opacity-0 transition-all hover:bg-rose-soft/30 hover:text-plum group-hover:opacity-100"
            aria-label="Delete reminder"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        )}
        {upcoming && (
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/50">
            <Gift className="h-4 w-4 text-gold-muted" />
          </div>
        )}
      </div>
    </div>
  )
}
