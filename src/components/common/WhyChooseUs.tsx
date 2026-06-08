'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { WHY_CHOOSE_US } from '@/constants'

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-bg-primary py-16 sm:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: 3D room image */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=80"
                alt="3D Villa Interior Visualization"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/60 to-transparent" />
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-6 glass px-6 py-4 rounded-2xl border border-accent/20 hidden sm:block">
              <p className="font-heading text-3xl font-bold text-accent">98%</p>
              <p className="font-body text-xs text-text-muted">Client Satisfaction Rate</p>
            </div>

            {/* Decorative accent line */}
            <div className="absolute -left-4 top-1/3 w-px h-1/3 bg-gradient-to-b from-transparent via-accent/40 to-transparent" />
          </motion.div>

          {/* Right: Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-body text-accent text-sm tracking-widest uppercase mb-3">Our Advantage</p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-6">
              Why Villa Owners Choose{' '}
              <span className="text-accent">Ideal Factory</span>
            </h2>
            <p className="font-body text-text-muted text-base mb-10 leading-relaxed">
              We combine Italian craftsmanship with UAE expertise to deliver interiors that define luxury.
            </p>

            {/* Benefits list */}
            <div className="space-y-5">
              {WHY_CHOOSE_US.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.8 }}
                  className="flex items-start gap-4 group cursor-default"
                >
                  <div className="w-12 h-12 rounded-2xl glass border border-white/8 flex items-center justify-center text-xl flex-shrink-0 group-hover:border-accent/40 group-hover:rotate-6 transition-all duration-400">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-medium text-white mb-1 group-hover:text-accent transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="font-body text-sm text-text-muted leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-10">
              <a href="#contact" className="glass-btn px-8 py-4 rounded-full font-body font-medium text-sm inline-block">
                Get a Free Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
