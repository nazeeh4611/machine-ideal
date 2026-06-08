'use client'

import Image from 'next/image'
import { HiArrowRight } from 'react-icons/hi'

interface SolutionCardProps {
  title: string
  description: string
  image: string
  index: number
}

export default function SolutionCard({ title, description, image, index }: SolutionCardProps) {
  return (
    <div className="solution-card group relative overflow-hidden rounded-2xl bg-bg-tertiary border border-white/5 cursor-pointer">
      {/* Image */}
      <div className="relative h-56 sm:h-64 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 50vw"
          loading={index < 2 ? 'eager' : 'lazy'}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg-tertiary via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-80" />

        {/* Number badge */}
        <div className="absolute top-4 left-4 w-8 h-8 rounded-full border border-accent/40 flex items-center justify-center">
          <span className="text-accent text-xs font-body font-medium">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-heading text-xl font-medium text-white mb-2 group-hover:text-accent transition-colors duration-300">
              {title}
            </h3>
            <p className="font-body text-sm text-text-muted leading-relaxed">{description}</p>
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-all duration-300">
            <HiArrowRight className="w-4 h-4 text-text-muted group-hover:text-accent group-hover:translate-x-0.5 transition-all duration-300" />
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="mt-4 h-px bg-white/5 relative overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-0 group-hover:w-full bg-accent/40 transition-all duration-500" />
        </div>
      </div>
    </div>
  )
}
