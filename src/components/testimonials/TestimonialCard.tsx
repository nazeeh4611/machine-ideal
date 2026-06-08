'use client'

interface TestimonialCardProps {
  name: string
  role: string
  quote: string
  rating: number
  avatar: string
  isActive?: boolean
}

export default function TestimonialCard({ name, role, quote, rating, avatar, isActive }: TestimonialCardProps) {
  return (
    <div
      className={`glass rounded-2xl p-6 sm:p-8 border transition-all duration-500 h-full ${
        isActive
          ? 'border-accent/30 shadow-[0_0_40px_rgba(79,209,217,0.1)]'
          : 'border-white/8'
      }`}
    >
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <span key={i} className="text-accent text-sm">★</span>
        ))}
      </div>

      {/* Quote */}
      <p className="font-body text-text-secondary text-sm sm:text-base leading-relaxed mb-6 italic">
        &ldquo;{quote}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-white/8">
        <div className="w-10 h-10 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center flex-shrink-0">
          <span className="font-heading text-base font-semibold text-accent">{avatar}</span>
        </div>
        <div>
          <p className="font-heading text-sm font-semibold text-white">{name}</p>
          <p className="font-body text-xs text-text-muted">{role}</p>
        </div>
      </div>
    </div>
  )
}
