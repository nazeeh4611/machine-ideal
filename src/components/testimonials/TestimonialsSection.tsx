'use client'

import { useEffect, useRef } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { TESTIMONIALS } from '@/constants'
import TestimonialCard from './TestimonialCard'

export default function TestimonialsSection() {
  const titleRef = useScrollReveal()
  const swiperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let swiper: unknown = null

    const init = async () => {
      const { Swiper } = await import('swiper')
      const { Autoplay, Pagination } = await import('swiper/modules')

      // @ts-expect-error dynamic import
      await import('swiper/css')
      // @ts-expect-error dynamic import
      await import('swiper/css/pagination')

      if (!swiperRef.current) return

      swiper = new Swiper(swiperRef.current, {
        modules: [Autoplay, Pagination],
        slidesPerView: 1,
        spaceBetween: 24,
        autoplay: { delay: 4000, disableOnInteraction: false },
        pagination: { el: '.swiper-pagination', clickable: true },
        breakpoints: {
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        },
        loop: true,
      })
    }

    init()

    return () => {
      if (swiper && typeof (swiper as { destroy?: () => void }).destroy === 'function') {
        (swiper as { destroy: () => void }).destroy()
      }
    }
  }, [])

  return (
    <section className="bg-bg-secondary py-16 sm:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-12 sm:mb-16">
          <p className="font-body text-accent text-sm tracking-widest uppercase mb-3">Social Proof</p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-4">
            What They&apos;re Talking About
          </h2>
          <p className="font-body text-text-muted text-base">
            Trusted by hundreds of villa owners across the UAE
          </p>
        </div>

        {/* Swiper */}
        <div ref={swiperRef} className="swiper overflow-hidden">
          <div className="swiper-wrapper">
            {TESTIMONIALS.map((testimonial, i) => (
              <div key={testimonial.id} className="swiper-slide h-auto">
                <TestimonialCard
                  {...testimonial}
                  isActive={i === 0}
                />
              </div>
            ))}
          </div>
          <div className="swiper-pagination mt-8 flex justify-center gap-2" />
        </div>
      </div>
    </section>
  )
}
