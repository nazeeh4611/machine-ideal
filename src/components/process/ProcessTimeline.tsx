'use client'

import { useEffect, useRef } from 'react'
import { PROCESS_STEPS } from '@/constants'
import { RiUpload2Line, RiMagicLine, RiEditLine, RiCheckDoubleLine } from 'react-icons/ri'

const ICONS = [RiUpload2Line, RiMagicLine, RiEditLine, RiCheckDoubleLine]

export default function ProcessTimeline() {
  const lineRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const init = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      if (!lineRef.current) return

      gsap.fromTo(
        lineRef.current,
        { width: '0%' },
        {
          width: '100%',
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 65%',
            end: 'bottom 80%',
            scrub: 2,
          },
        }
      )
    }
    init()
  }, [])

  return (
    <section ref={sectionRef} className="bg-bg-primary py-16 sm:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <p className="font-body text-accent text-sm tracking-widest uppercase mb-3">How It Works</p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-4">
            Design Your Villa Interiors<br />
            <span className="text-accent">Before Spending a Dirham</span>
          </h2>
          <p className="font-body text-text-muted text-base max-w-lg mx-auto">
            Our streamlined 4-step process ensures you see exactly what you're getting before we begin production.
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:block relative">
          {/* Connector line background */}
          <div className="absolute top-12 left-[12%] right-[12%] h-px bg-white/10" />

          {/* Animated fill line */}
          <div className="absolute top-12 left-[12%] h-px overflow-hidden" style={{ right: '12%' }}>
            <div
              ref={lineRef}
              className="h-full bg-gradient-to-r from-accent via-accent to-accent/50"
              style={{ width: '0%' }}
            />
          </div>

          {/* Steps */}
          <div className="grid grid-cols-4 gap-4 relative">
            {PROCESS_STEPS.map((step, i) => {
              const Icon = ICONS[i]
              return (
                <div key={step.step} className="flex flex-col items-center text-center group">
                  {/* Icon circle */}
                  <div className="relative mb-6">
                    {/* Glow ring */}
                    <div className="absolute inset-0 rounded-full bg-accent/20 scale-0 group-hover:scale-125 transition-transform duration-500 opacity-0 group-hover:opacity-100" />

                    <div className="relative w-24 h-24 rounded-full glass border border-accent/30 flex flex-col items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-all duration-400">
                      <Icon className="w-7 h-7 text-accent mb-1 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-[10px] font-body text-text-muted">Step {step.step}</span>
                    </div>

                    {/* Step number overlay */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                      <span className="text-[10px] font-bold text-black">{step.step}</span>
                    </div>
                  </div>

                  <h3 className="font-heading text-lg font-medium text-white mb-2 group-hover:text-accent transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="font-body text-sm text-text-muted leading-relaxed">{step.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Mobile Timeline - vertical */}
        <div className="md:hidden space-y-0">
          {PROCESS_STEPS.map((step, i) => {
            const Icon = ICONS[i]
            return (
              <div key={step.step} className="flex gap-6">
                {/* Line + circle */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full glass border border-accent/30 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  {i < PROCESS_STEPS.length - 1 && (
                    <div className="w-px flex-1 min-h-[60px] bg-gradient-to-b from-accent/40 to-white/5 my-2" />
                  )}
                </div>

                {/* Content */}
                <div className="pb-8 pt-1">
                  <p className="font-body text-xs text-accent tracking-wider mb-1">Step {step.step}</p>
                  <h3 className="font-heading text-lg font-medium text-white mb-1">{step.title}</h3>
                  <p className="font-body text-sm text-text-muted">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a href="#contact" className="glass-btn px-8 py-4 rounded-full font-body font-medium text-sm inline-block">
            Start Your Design Journey
          </a>
        </div>
      </div>
    </section>
  )
}
