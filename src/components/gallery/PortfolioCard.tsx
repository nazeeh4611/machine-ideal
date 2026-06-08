'use client'

import Image from 'next/image'
import { RiExternalLinkLine } from 'react-icons/ri'

interface PortfolioCardProps {
  src: string
  title: string
  className?: string
}

export default function PortfolioCard({ src, title, className = '' }: PortfolioCardProps) {
  return (
    <div className={`group relative overflow-hidden rounded-2xl bg-bg-tertiary ${className}`}>
      <Image
        src={src}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        sizes="(max-width: 768px) 100vw, 33vw"
        loading="lazy"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

      {/* Content */}
      <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-2 group-hover:translate-y-0">
        <div className="flex items-center justify-between w-full">
          <div>
            <p className="font-body text-xs text-accent tracking-wider uppercase mb-0.5">Interior Design</p>
            <p className="font-heading text-base font-medium text-white">{title}</p>
          </div>
          <div className="w-8 h-8 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center">
            <RiExternalLinkLine className="w-3.5 h-3.5 text-accent" />
          </div>
        </div>
      </div>
    </div>
  )
}
