'use client'

import { useRef } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { PORTFOLIO_IMAGES } from '@/constants'
import PortfolioCard from './PortfolioCard'

export default function PortfolioGallery() {
  const titleRef = useScrollReveal()

  return (
    <section id="portfolio" className="bg-bg-secondary py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-12 sm:mb-16">
          <p className="font-body text-accent text-sm tracking-widest uppercase mb-3">Our Work</p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-4">
            Designed. Built. Delivered.
          </h2>
          <p className="font-body text-text-muted text-base max-w-lg mx-auto">
            Every project tells a story of craftsmanship, precision, and unwavering attention to detail.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[200px]">
          {/* Row 1 */}
          <PortfolioCard
            src={PORTFOLIO_IMAGES[0].src}
            title={PORTFOLIO_IMAGES[0].title}
            className="row-span-2"
          />
          <PortfolioCard
            src={PORTFOLIO_IMAGES[1].src}
            title={PORTFOLIO_IMAGES[1].title}
            className="col-span-1 sm:col-span-1"
          />
          <PortfolioCard
            src={PORTFOLIO_IMAGES[2].src}
            title={PORTFOLIO_IMAGES[2].title}
          />

          {/* Row 2 */}
          <PortfolioCard
            src={PORTFOLIO_IMAGES[3].src}
            title={PORTFOLIO_IMAGES[3].title}
          />
          <PortfolioCard
            src={PORTFOLIO_IMAGES[4].src}
            title={PORTFOLIO_IMAGES[4].title}
            className="row-span-2 lg:col-start-3 lg:row-start-1"
          />

          {/* Row 3 */}
          <PortfolioCard
            src={PORTFOLIO_IMAGES[5].src}
            title={PORTFOLIO_IMAGES[5].title}
            className="sm:col-span-2 lg:col-span-1"
          />
          <PortfolioCard
            src={PORTFOLIO_IMAGES[6].src}
            title={PORTFOLIO_IMAGES[6].title}
          />

          {/* Row 4 */}
          <PortfolioCard
            src={PORTFOLIO_IMAGES[7].src}
            title={PORTFOLIO_IMAGES[7].title}
            className="sm:col-span-1 lg:col-span-2"
          />
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a href="#contact" className="glass-btn px-8 py-4 rounded-full font-body font-medium text-sm inline-block">
            View Full Portfolio
          </a>
        </div>
      </div>
    </section>
  )
}
