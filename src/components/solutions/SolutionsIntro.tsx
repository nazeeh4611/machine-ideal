'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

export default function SolutionsIntro() {
  const circleRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const init = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      if (!circleRef.current) return

      gsap.fromTo(
        circleRef.current,
        { scale: 0, rotation: 10, opacity: 0 },
        {
          scale: 1,
          rotation: 0,
          opacity: 1,
          duration: 1.4,
          ease: 'back.out(1.2)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            once: true,
          },
        }
      )
    }
    init()
  }, [])

  return (
    <section ref={sectionRef} className="bg-bg-secondary py-16 sm:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro text */}
        <div className="text-center mb-16">
          <p className="font-body text-text-muted text-sm tracking-widest uppercase mb-3">What We Offer</p>
          <h3 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-4">
            Our Solutions
          </h3>
          <p className="font-body text-text-secondary text-base max-w-xl mx-auto">
            We provide all type of modular{' '}
            <span className="text-accent font-medium">Kitchen, Closet, Door Services</span>
          </p>
        </div>

        {/* Large circular image */}
        <div className="flex justify-center">
          <div ref={circleRef} className="relative">
            {/* Outer decorative ring */}
            <div className="absolute -inset-6 rounded-full border border-accent/20 animate-spin-slow" />
            <div className="absolute -inset-12 rounded-full border border-white/5" />

            {/* Main circle */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-accent/30">
              <Image
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
                alt="Our Interior Solutions"
                fill
                className="object-cover"
                sizes="400px"
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* Center floating logo */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="glass w-20 h-20 rounded-2xl flex flex-col items-center justify-center border border-accent/30 animate-float">
                <div className="w-8 h-8 mb-1">
                  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="8" width="12" height="16" rx="1" stroke="#4FD1D9" strokeWidth="1.5"/>
                    <rect x="18" y="8" width="12" height="16" rx="1" stroke="#4FD1D9" strokeWidth="1.5"/>
                    <line x1="14" y1="16" x2="18" y2="16" stroke="#4FD1D9" strokeWidth="1.5"/>
                  </svg>
                </div>
                <span className="text-[9px] font-body text-accent font-medium tracking-wider">IDEAL</span>
              </div>
            </div>

            {/* Stats badges */}
            <div className="absolute -right-4 top-8 glass px-3 py-2 rounded-xl border border-white/10 text-center hidden sm:block">
              <p className="font-heading text-xl font-semibold text-accent">500+</p>
              <p className="text-[9px] font-body text-text-muted">Projects</p>
            </div>
            <div className="absolute -left-4 bottom-8 glass px-3 py-2 rounded-xl border border-white/10 text-center hidden sm:block">
              <p className="font-heading text-xl font-semibold text-accent">10+</p>
              <p className="text-[9px] font-body text-text-muted">Years</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
