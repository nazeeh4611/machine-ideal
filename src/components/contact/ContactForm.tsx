'use client'

import { useState } from 'react'
import { HiArrowRight } from 'react-icons/hi'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '', service: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputClass = "w-full glass border border-white/10 rounded-xl px-4 py-3 font-body text-sm text-white placeholder-text-muted bg-transparent focus:border-accent focus:outline-none focus:shadow-[0_0_20px_rgba(79,209,217,0.15)] transition-all duration-300"

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center mb-4">
          <span className="text-2xl">✓</span>
        </div>
        <h3 className="font-heading text-2xl font-medium text-white mb-2">Message Received!</h3>
        <p className="font-body text-text-muted text-sm">We'll get back to you within 24 hours.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block font-body text-xs text-text-muted mb-1.5 tracking-wider uppercase">Full Name</label>
          <input
            type="text"
            placeholder="Mohammed Al Ahmed"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={inputClass}
          />
        </div>
        <div>
          <label className="block font-body text-xs text-text-muted mb-1.5 tracking-wider uppercase">Email</label>
          <input
            type="email"
            placeholder="hello@example.com"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className="block font-body text-xs text-text-muted mb-1.5 tracking-wider uppercase">Phone Number</label>
        <input
          type="tel"
          placeholder="+971 50 123 4567"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className={inputClass}
        />
      </div>

      <div>
        <label className="block font-body text-xs text-text-muted mb-1.5 tracking-wider uppercase">Service Needed</label>
        <select
          value={form.service}
          onChange={(e) => setForm({ ...form, service: e.target.value })}
          className={`${inputClass} cursor-pointer`}
        >
          <option value="" className="bg-bg-tertiary">Select a service</option>
          <option value="kitchen" className="bg-bg-tertiary">Kitchen Design</option>
          <option value="wardrobe" className="bg-bg-tertiary">Wardrobes & Closets</option>
          <option value="doors" className="bg-bg-tertiary">Wooden Doors</option>
          <option value="windows" className="bg-bg-tertiary">Window Systems</option>
          <option value="full" className="bg-bg-tertiary">Full Villa Package</option>
        </select>
      </div>

      <div>
        <label className="block font-body text-xs text-text-muted mb-1.5 tracking-wider uppercase">Message</label>
        <textarea
          placeholder="Tell us about your project..."
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="w-full py-4 rounded-xl font-body font-semibold text-sm text-black transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(79,209,217,0.4)] flex items-center justify-center gap-2"
        style={{ background: 'linear-gradient(135deg, #4FD1D9, #3ABBC3)' }}
      >
        Let&apos;s Discuss Your Project
        <HiArrowRight className="w-4 h-4" />
      </button>

      <p className="text-center font-body text-[11px] text-text-muted">
        Free consultation • No commitment • Response within 24hrs
      </p>
    </form>
  )
}
