import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function StepForm({ steps, currentStep, formData, onChange, onNext, onBack, onSubmit }) {
  const step = steps[currentStep]
  const isLast = currentStep === steps.length - 1
  const progress = ((currentStep + 1) / steps.length) * 100

  const handleChange = (value) => {
    onChange(step.id, value)
  }

  const canProceed = formData[step.id]?.trim?.() || formData[step.id]

  return (
    <div className="mx-auto w-full max-w-xl">
      <div className="mb-8">
        <div className="mb-3 flex items-center justify-between text-xs font-medium text-plum-light">
          <span>
            Step {currentStep + 1} of {steps.length}
          </span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-1.5 overflow-hidden rounded-full bg-rose-soft/30">
          <div
            className="h-full rounded-full gradient-gold transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="rounded-2xl border border-rose-soft/30 bg-white/70 p-6 shadow-soft sm:p-8">
        <h2 className="font-display text-2xl font-semibold text-plum-deep">{step.title}</h2>
        <p className="mt-1 text-sm text-plum-light">{step.subtitle}</p>

        <div className="mt-6">
          {step.type === 'select' ? (
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {step.options.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => handleChange(option)}
                  className={`rounded-xl border px-3 py-3 text-sm font-medium transition-all duration-200 ${
                    formData[step.id] === option
                      ? 'border-plum bg-plum/10 text-plum-deep shadow-soft'
                      : 'border-rose-soft/40 bg-cream/50 text-plum-light hover:border-rose-muted hover:bg-rose-soft/20'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          ) : (
            <textarea
              value={formData[step.id] || ''}
              onChange={(e) => handleChange(e.target.value)}
              placeholder={step.placeholder}
              rows={4}
              className="w-full resize-none rounded-xl border border-rose-soft/40 bg-cream/50 px-4 py-3 text-sm text-plum-deep placeholder:text-plum-light/50 focus:border-gold/50 focus:ring-2 focus:ring-gold/20"
            />
          )}
        </div>

        <div className="mt-8 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={onBack}
            disabled={currentStep === 0}
            className="inline-flex items-center gap-1 rounded-full px-4 py-2.5 text-sm font-medium text-plum-light transition-colors hover:text-plum-deep disabled:invisible"
          >
            <ChevronLeft className="h-4 w-4" />
            Back
          </button>

          {isLast ? (
            <button
              type="button"
              onClick={onSubmit}
              disabled={!canProceed}
              className="inline-flex items-center gap-1 rounded-full gradient-plum px-6 py-2.5 text-sm font-medium text-champagne shadow-soft transition-all hover:brightness-110 disabled:opacity-50"
            >
              Find Gifts
              <ChevronRight className="h-4 w-4" />
            </button>
          ) : (
            <button
              type="button"
              onClick={onNext}
              disabled={!canProceed}
              className="inline-flex items-center gap-1 rounded-full gradient-plum px-6 py-2.5 text-sm font-medium text-champagne shadow-soft transition-all hover:brightness-110 disabled:opacity-50"
            >
              Continue
              <ChevronRight className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
