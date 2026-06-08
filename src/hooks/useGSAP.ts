'use client'

import { useEffect, useRef } from 'react'

export function useGSAPReveal() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const initGSAP = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      const el = ref.current
      if (!el) return

      gsap.fromTo(
        el,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            once: true,
          },
        }
      )
    }

    initGSAP()
  }, [])

  return ref
}

export function useGSAPTextReveal() {
  const ref = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const initGSAP = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      const el = ref.current
      if (!el) return

      const text = el.innerText
      el.innerHTML = ''
      const words = text.split(' ')

      words.forEach((word, i) => {
        const span = document.createElement('span')
        span.innerText = word + (i < words.length - 1 ? ' ' : '')
        span.style.display = 'inline-block'
        span.style.overflow = 'hidden'

        const inner = document.createElement('span')
        inner.innerText = word + (i < words.length - 1 ? ' ' : '')
        inner.style.display = 'inline-block'
        span.appendChild(inner)
        el.appendChild(span)

        gsap.fromTo(
          inner,
          { y: '100%', opacity: 0 },
          {
            y: '0%',
            opacity: 1,
            duration: 1,
            ease: 'power4.out',
            delay: i * 0.08,
            scrollTrigger: {
              trigger: el,
              start: 'top 80%',
              once: true,
            },
          }
        )
      })
    }

    initGSAP()
  }, [])

  return ref
}

export function useGSAPParallax(speed = 0.3) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const initGSAP = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      const el = ref.current
      if (!el) return

      gsap.to(el, {
        y: () => el.offsetHeight * speed * -1,
        ease: 'none',
        scrollTrigger: {
          trigger: el.parentElement,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
    }

    initGSAP()
  }, [speed])

  return ref
}
