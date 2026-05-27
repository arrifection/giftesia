import { useState } from 'react'
import { Download, Heart } from 'lucide-react'
import CardPreview from '../components/CardPreview'
import { cardStyles } from '../data/dummyData'

export default function CardGeneratorPage() {
  const [recipientName, setRecipientName] = useState('')
  const [message, setMessage] = useState('')
  const [selectedStyle, setSelectedStyle] = useState(cardStyles[0])

  const handleDownload = () => {
    alert('Card download will be available when backend is connected. Your preview looks beautiful!')
  }

  return (
    <div className="px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-rose-soft/30 px-3 py-1 text-xs font-medium text-plum">
            <Heart className="h-3.5 w-3.5" />
            Card Generator
          </div>
          <h1 className="font-display text-3xl font-semibold text-plum-deep sm:text-4xl">
            Create a personalized card
          </h1>
          <p className="mt-2 text-sm text-plum-light sm:text-base">
            Add their name in elegant cursive and a message from the heart.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-6">
            <div>
              <label htmlFor="recipient" className="mb-2 block text-sm font-medium text-plum-deep">
                Recipient name
              </label>
              <input
                id="recipient"
                type="text"
                value={recipientName}
                onChange={(e) => setRecipientName(e.target.value)}
                placeholder="e.g. Sophia"
                className="w-full rounded-xl border border-rose-soft/40 bg-white/70 px-4 py-3 text-sm text-plum-deep placeholder:text-plum-light/50 focus:border-gold/50 focus:ring-2 focus:ring-gold/20"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-plum-deep">
                Your message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write something heartfelt…"
                rows={4}
                className="w-full resize-none rounded-xl border border-rose-soft/40 bg-white/70 px-4 py-3 text-sm text-plum-deep placeholder:text-plum-light/50 focus:border-gold/50 focus:ring-2 focus:ring-gold/20"
              />
            </div>

            <div>
              <label className="mb-3 block text-sm font-medium text-plum-deep">Card style</label>
              <div className="grid grid-cols-2 gap-2">
                {cardStyles.map((style) => (
                  <button
                    key={style.id}
                    type="button"
                    onClick={() => setSelectedStyle(style)}
                    className={`rounded-xl border p-3 text-left text-sm font-medium transition-all ${
                      selectedStyle.id === style.id
                        ? 'border-plum bg-plum/10 text-plum-deep shadow-soft'
                        : 'border-rose-soft/40 bg-white/50 text-plum-light hover:border-rose-muted'
                    }`}
                  >
                    <div className={`mb-2 h-8 rounded-lg bg-gradient-to-r ${style.bg}`} />
                    {style.name}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={handleDownload}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full gradient-plum py-3.5 text-sm font-medium text-champagne shadow-soft transition-all hover:brightness-110 sm:w-auto sm:px-8"
            >
              <Download className="h-4 w-4" />
              Download Card
            </button>
          </div>

          <div className="flex items-start justify-center lg:sticky lg:top-24">
            <div>
              <p className="mb-4 text-center text-xs font-medium uppercase tracking-wider text-plum-light">
                Live preview
              </p>
              <CardPreview
                recipientName={recipientName}
                message={message}
                style={selectedStyle}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
