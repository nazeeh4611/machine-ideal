'use client'

import { useEffect } from 'react'

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const initLenis = async () => {
      const Lenis = (await import('@studio-freight/lenis')).default

      const lenis = new Lenis({
        duration: 1.4,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 0.8,
        touchMultiplier: 1.5,
      })

      function raf(time: number) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
      requestAnimationFrame(raf)

      // Connect to GSAP ScrollTrigger if available
      try {
        const { ScrollTrigger } = await import('gsap/ScrollTrigger')
        lenis.on('scroll', ScrollTrigger.update)
      } catch {
        // GSAP not available
      }

      return () => {
        lenis.destroy()
      }
    }

    const cleanup = initLenis()
    return () => {
      cleanup.then((fn) => fn && fn())
    }
  }, [])

  return <>{children}</>
}
