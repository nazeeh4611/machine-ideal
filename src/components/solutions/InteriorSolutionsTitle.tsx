'use client'

import { useEffect, useRef } from 'react'

export default function InteriorSolutionsTitle() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const strokeRef = useRef<HTMLHeadingElement>(null)
  const filledRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const init = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      if (!sectionRef.current || !filledRef.current) return

      // Stroke stays visible, filled fades in and scales up on scroll
      gsap.set(filledRef.current, { opacity: 0, scale: 0.8 })

      gsap.to(filledRef.current, {
        opacity: 1,
        scale: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          end: 'center center',
          scrub: 1.5,
        },
      })
    }
    init()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative marble-overlay py-20 sm:py-28 overflow-hidden"
    >
      {/* Decorative grain texture */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
      }} />

      <div className="relative max-w-7xl mx-auto px-4 text-center">
        {/* Stacked heading: stroke + filled */}
        <div className="relative inline-block">
          {/* Stroke version — always visible */}
          <h2
            ref={strokeRef}
            className="font-heading font-bold text-stroke select-none"
            style={{ fontSize: 'clamp(3rem, 10vw, 9rem)', lineHeight: 1.05 }}
            aria-hidden="true"
          >
            OUR<br />INTERIOR<br />SOLUTIONS
          </h2>

          {/* Filled version — fades in on scroll */}
          <h2
            ref={filledRef}
            className="absolute inset-0 font-heading font-bold text-white select-none"
            style={{ fontSize: 'clamp(3rem, 10vw, 9rem)', lineHeight: 1.05 }}
          >
            OUR<br />INTERIOR<br />SOLUTIONS
          </h2>
        </div>
      </div>
    </section>
  )
}
