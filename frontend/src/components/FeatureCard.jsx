import { Sparkles, Calendar, Heart, Link2 } from 'lucide-react'

const iconMap = {
  sparkles: Sparkles,
  calendar: Calendar,
  heart: Heart,
  link: Link2,
}

export default function FeatureCard({ title, description, icon, gradient, index = 0 }) {
  const Icon = iconMap[icon] || Sparkles

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-rose-soft/30 bg-gradient-to-br ${gradient} p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg animate-fade-in-up opacity-0`}
      style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
    >
      <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-white/20 blur-2xl transition-transform group-hover:scale-150" />

      <div className="relative">
        <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/70 shadow-soft">
          <Icon className="h-5 w-5 text-plum" strokeWidth={1.75} />
        </div>

        <h3 className="font-display text-lg font-semibold text-plum-deep">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-plum-light">{description}</p>
      </div>
    </div>
  )
}
