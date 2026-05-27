import { useState, useMemo } from 'react'
import { Calendar, Plus } from 'lucide-react'
import ReminderCard from '../components/ReminderCard'
import { initialReminders } from '../data/dummyData'

export default function RemindersPage() {
  const [reminders, setReminders] = useState(initialReminders)
  const [name, setName] = useState('')
  const [occasion, setOccasion] = useState('Birthday')
  const [date, setDate] = useState('')

  const upcoming = useMemo(() => {
    return [...reminders]
      .sort((a, b) => new Date(a.date) - new Date(b.date))
      .slice(0, 3)
  }, [reminders])

  const handleAdd = (e) => {
    e.preventDefault()
    if (!name.trim() || !date) return

    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const reminderDate = new Date(date)
    const daysUntil = Math.ceil((reminderDate - today) / (1000 * 60 * 60 * 24))

    setReminders((prev) => [
      ...prev,
      {
        id: Date.now(),
        name: name.trim(),
        occasion,
        date,
        daysUntil: Math.max(0, daysUntil),
      },
    ])
    setName('')
    setDate('')
    setOccasion('Birthday')
  }

  const handleDelete = (id) => {
    setReminders((prev) => prev.filter((r) => r.id !== id))
  }

  return (
    <div className="px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-rose-soft/30 px-3 py-1 text-xs font-medium text-plum">
            <Calendar className="h-3.5 w-3.5" />
            Reminders
          </div>
          <h1 className="font-display text-3xl font-semibold text-plum-deep sm:text-4xl">
            Never miss a special day
          </h1>
          <p className="mt-2 text-sm text-plum-light sm:text-base">
            Set gentle reminders for birthdays and occasions that matter.
          </p>
        </div>

        {upcoming.length > 0 && (
          <div className="mb-10">
            <h2 className="mb-4 font-display text-lg font-semibold text-plum-deep">
              Coming up soon
            </h2>
            <div className="space-y-3">
              {upcoming.map((reminder) => (
                <ReminderCard key={reminder.id} reminder={reminder} upcoming />
              ))}
            </div>
          </div>
        )}

        <div className="mb-10 rounded-2xl border border-rose-soft/30 bg-white/70 p-6 shadow-soft sm:p-8">
          <h2 className="mb-5 font-display text-lg font-semibold text-plum-deep">
            Add a reminder
          </h2>
          <form onSubmit={handleAdd} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-plum-light">
                  Person&apos;s name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Alex"
                  className="w-full rounded-xl border border-rose-soft/40 bg-cream/50 px-4 py-2.5 text-sm focus:border-gold/50 focus:ring-2 focus:ring-gold/20"
                />
              </div>
              <div>
                <label htmlFor="occasion" className="mb-1.5 block text-xs font-medium text-plum-light">
                  Occasion
                </label>
                <select
                  id="occasion"
                  value={occasion}
                  onChange={(e) => setOccasion(e.target.value)}
                  className="w-full rounded-xl border border-rose-soft/40 bg-cream/50 px-4 py-2.5 text-sm focus:border-gold/50 focus:ring-2 focus:ring-gold/20"
                >
                  {['Birthday', 'Anniversary', 'Holiday', 'Graduation', 'Other'].map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="date" className="mb-1.5 block text-xs font-medium text-plum-light">
                Date
              </label>
              <input
                id="date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full rounded-xl border border-rose-soft/40 bg-cream/50 px-4 py-2.5 text-sm focus:border-gold/50 focus:ring-2 focus:ring-gold/20"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full gradient-plum px-5 py-2.5 text-sm font-medium text-champagne shadow-soft transition-all hover:brightness-110"
            >
              <Plus className="h-4 w-4" />
              Add Reminder
            </button>
          </form>
        </div>

        <div>
          <h2 className="mb-4 font-display text-lg font-semibold text-plum-deep">
            All reminders
          </h2>
          {reminders.length === 0 ? (
            <p className="rounded-2xl border border-dashed border-rose-soft/50 bg-cream/30 py-12 text-center text-sm text-plum-light">
              No reminders yet. Add one above!
            </p>
          ) : (
            <div className="space-y-3">
              {[...reminders]
                .sort((a, b) => new Date(a.date) - new Date(b.date))
                .map((reminder) => (
                  <ReminderCard
                    key={reminder.id}
                    reminder={reminder}
                    onDelete={handleDelete}
                  />
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
