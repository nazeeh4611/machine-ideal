'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'
import { RiPlayCircleLine } from 'react-icons/ri'

const words = ['Design', '&', 'Delivery', 'of', 'Your', 'Villa', 'Interiors', 'Made', 'Simple']

export default function HeroSection() {
  const bgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = bgRef.current
    if (!el) return

    const initGSAP = async () => {
      const { gsap } = await import('gsap')
      gsap.fromTo(el, { scale: 1.15 }, { scale: 1, duration: 8, ease: 'power2.out' })
    }
    initGSAP()

    // Mouse parallax
    const onMouse = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20
      const y = (e.clientY / window.innerHeight - 0.5) * 10
      el.style.transform = `scale(1.05) translate(${x}px, ${y}px)`
    }
    window.addEventListener('mousemove', onMouse)
    return () => window.removeEventListener('mousemove', onMouse)
  }, [])

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden flex items-center">
      {/* Background */}
      <div ref={bgRef} className="absolute inset-0 will-change-transform" style={{ transition: 'transform 0.1s ease-out' }}>
        <Image
          src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1920&q=85"
          alt="Luxury Villa Interior"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent" />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 right-16 w-px h-32 bg-gradient-to-b from-transparent via-accent/40 to-transparent hidden lg:block" />
      <div className="absolute bottom-1/3 right-32 w-2 h-2 rounded-full bg-accent animate-pulse hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.4, duration: 0.6 }}
            className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-body text-text-secondary tracking-widest uppercase">Premium Villa Interiors UAE</span>
          </motion.div>

          {/* Headline */}
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light leading-[1.1] mb-6">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.5 + i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`inline-block mr-3 ${
                  word === 'Simple' ? 'text-accent' : 'text-white'
                }`}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.5, duration: 0.8 }}
            className="font-body text-text-secondary text-base sm:text-lg mb-8 leading-relaxed max-w-lg"
          >
            Kitchens, wardrobes, doors, and window systems — all meticulously designed and delivered on time, on budget.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="#contact" className="glass-btn px-8 py-4 rounded-full font-body font-medium flex items-center justify-center gap-2 text-sm sm:text-base">
              Get Your FREE 3D Design Now
              <HiArrowRight className="w-4 h-4" />
            </Link>
            <button className="flex items-center justify-center gap-2 text-text-secondary hover:text-accent transition-colors font-body text-sm">
              <RiPlayCircleLine className="w-6 h-6" />
              Watch Our Process
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4, duration: 0.8 }}
            className="flex gap-8 mt-12 pt-8 border-t border-white/10"
          >
            {[['500+', 'Villas Completed'], ['10+', 'Years Experience'], ['98%', 'Client Satisfaction']].map(([num, label]) => (
              <div key={label}>
                <p className="font-heading text-2xl font-semibold text-accent">{num}</p>
                <p className="text-xs font-body text-text-muted">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <p className="text-[10px] font-body text-text-muted tracking-widest uppercase">Scroll</p>
        <div className="w-px h-12 bg-gradient-to-b from-accent/60 to-transparent" />
      </motion.div>
    </section>
  )
}
