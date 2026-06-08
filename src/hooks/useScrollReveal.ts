'use client'

import { useEffect, useRef } from 'react'

interface ScrollRevealOptions {
  threshold?: number
  rootMargin?: string
  once?: boolean
}

export function useScrollReveal(options: ScrollRevealOptions = {}) {
  const ref = useRef<HTMLDivElement>(null)
  const { threshold = 0.1, rootMargin = '0px 0px -50px 0px', once = true } = options

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.style.opacity = '1'
            el.style.transform = 'translateY(0)'
            if (once) observer.unobserve(el)
          } else if (!once) {
            el.style.opacity = '0'
            el.style.transform = 'translateY(60px)'
          }
        })
      },
      { threshold, rootMargin }
    )

    el.style.opacity = '0'
    el.style.transform = 'translateY(60px)'
    el.style.transition = 'opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1), transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)'

    observer.observe(el)

    return () => observer.disconnect()
  }, [threshold, rootMargin, once])

  return ref
}

export function useStaggerReveal(count: number, baseDelay = 0, stagger = 0.15) {
  const refs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = refs.current.indexOf(entry.target as HTMLElement)
            const delay = baseDelay + idx * stagger
            ;(entry.target as HTMLElement).style.transitionDelay = `${delay}s`
            ;(entry.target as HTMLElement).style.opacity = '1'
            ;(entry.target as HTMLElement).style.transform = 'translateY(0)'
          }
        })
      },
      { threshold: 0.1 }
    )

    refs.current.forEach((el) => {
      if (!el) return
      el.style.opacity = '0'
      el.style.transform = 'translateY(60px)'
      el.style.transition = 'opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1), transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)'
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [count, baseDelay, stagger])

  return (idx: number) => (el: HTMLElement | null) => {
    refs.current[idx] = el
  }
}
