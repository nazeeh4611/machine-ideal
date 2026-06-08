'use client'

import { useStaggerReveal } from '@/hooks/useScrollReveal'
import { SOLUTIONS } from '@/constants'
import SolutionCard from './SolutionCard'

export default function SolutionsGrid() {
  const getRef = useStaggerReveal(SOLUTIONS.length)

  return (
    <section id="solutions" className="bg-bg-primary py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="font-body text-accent text-sm tracking-widest uppercase mb-3">What We Build</p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-4">
            Our Solutions
          </h2>
          <p className="font-body text-text-secondary text-base max-w-lg mx-auto">
            We provide all type of modular{' '}
            <span className="text-accent">Kitchen, Closet, Door Services</span>
          </p>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {SOLUTIONS.map((solution, i) => (
            <div key={solution.id} ref={getRef(i)}>
              <SolutionCard
                title={solution.title}
                description={solution.description}
                image={solution.image}
                index={i}
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 glass-btn px-8 py-4 rounded-full font-body font-medium text-sm"
          >
            View All Solutions
          </a>
        </div>
      </div>
    </section>
  )
}
