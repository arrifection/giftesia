import { useState } from 'react'
import { Send, Sparkles } from 'lucide-react'
import GiftCard from './GiftCard'
import { aiExamplePrompts, aiDummyResponses } from '../data/dummyData'

export default function AIGiftAssistant({ compact = false }) {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(false)

  const handleSubmit = (promptText) => {
    const text = promptText || input.trim()
    if (!text || loading) return

    setInput('')
    setMessages((prev) => [...prev, { type: 'user', text }])
    setLoading(true)

    setTimeout(() => {
      const gifts =
        aiDummyResponses[text] || aiDummyResponses.default
      setMessages((prev) => [
        ...prev,
        { type: 'assistant', text: `Here are thoughtful gift ideas based on "${text}":`, gifts },
      ])
      setLoading(false)
    }, 1800)
  }

  const handleChipClick = (prompt) => {
    setInput(prompt)
    handleSubmit(prompt)
  }

  return (
    <div className={`flex flex-col ${compact ? 'gap-4' : 'gap-6'}`}>
      <div
        className={`overflow-hidden rounded-2xl border border-rose-soft/30 bg-white/60 shadow-soft ${
          compact ? 'max-h-[480px]' : 'min-h-[400px] max-h-[600px]'
        }`}
      >
        <div className="flex items-center gap-3 border-b border-rose-soft/20 bg-gradient-to-r from-rose-soft/20 to-champagne/30 px-5 py-4">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl gradient-plum">
            <Sparkles className="h-4 w-4 text-champagne" />
          </div>
          <div>
            <h3 className="font-display text-sm font-semibold text-plum-deep">Giftesia AI</h3>
            <p className="text-xs text-plum-light">Your thoughtful gift assistant</p>
          </div>
        </div>

        <div className="flex flex-col gap-4 overflow-y-auto p-5" style={{ maxHeight: compact ? '320px' : '440px' }}>
          {messages.length === 0 && !loading && (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-soft/30">
                <Sparkles className="h-6 w-6 text-plum" />
              </div>
              <p className="font-display text-lg font-medium text-plum-deep">
                Describe who you&apos;re shopping for
              </p>
              <p className="mt-1 max-w-sm text-sm text-plum-light">
                Tell me about their personality, your relationship, or the occasion — I&apos;ll suggest gifts that feel personal.
              </p>
            </div>
          )}

          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              {msg.type === 'user' ? (
                <div className="max-w-[85%] rounded-2xl rounded-br-md gradient-plum px-4 py-3 text-sm text-champagne shadow-soft">
                  {msg.text}
                </div>
              ) : (
                <div className="w-full max-w-full space-y-3">
                  <div className="max-w-[90%] rounded-2xl rounded-bl-md border border-rose-soft/30 bg-cream/80 px-4 py-3 text-sm text-plum-deep">
                    {msg.text}
                  </div>
                  <div className="grid gap-3 sm:grid-cols-1">
                    {msg.gifts?.map((gift) => (
                      <GiftCard key={gift.id} gift={gift} compact showActions={false} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          {loading && (
            <div className="flex justify-start">
              <div className="flex items-center gap-3 rounded-2xl border border-rose-soft/30 bg-cream/80 px-5 py-4">
                <div className="flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="h-2 w-2 rounded-full bg-gold animate-pulse-soft"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  ))}
                </div>
                <span className="text-sm font-medium text-plum-light animate-pulse-soft">
                  Giftesia is thinking…
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {aiExamplePrompts.map((prompt) => (
          <button
            key={prompt}
            type="button"
            onClick={() => handleChipClick(prompt)}
            disabled={loading}
            className="rounded-full border border-rose-soft/50 bg-white/60 px-3.5 py-1.5 text-xs font-medium text-plum-light transition-all hover:border-gold/40 hover:bg-gold/5 hover:text-plum-deep disabled:opacity-50"
          >
            {prompt}
          </button>
        ))}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleSubmit()
        }}
        className="flex gap-2"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Describe the person…"
          disabled={loading}
          className="flex-1 rounded-full border border-rose-soft/40 bg-white/70 px-5 py-3 text-sm text-plum-deep placeholder:text-plum-light/50 focus:border-gold/50 focus:ring-2 focus:ring-gold/20 disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={!input.trim() || loading}
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full gradient-plum text-champagne shadow-soft transition-all hover:brightness-110 disabled:opacity-50"
          aria-label="Send message"
        >
          <Send className="h-4 w-4" />
        </button>
      </form>
    </div>
  )
}
