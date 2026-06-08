'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { PROBLEMS } from '@/constants'
import { RiCheckLine, RiPlayFill } from 'react-icons/ri'

export default function ProblemsSection() {
  const ref = useScrollReveal()
  const [playing, setPlaying] = useState(false)

  return (
    <section className="bg-bg-secondary py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="font-body text-text-muted text-sm tracking-widest uppercase mb-3">The Challenge</p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-light text-white">
            Why Villa Interior Projects<br />
            <span className="text-accent">Often Become Difficult?</span>
          </h2>
        </div>

        {/* Main dark card */}
        <div ref={ref} className="glass rounded-3xl border border-white/8 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left: Problems */}
            <div className="p-8 sm:p-12 border-b lg:border-b-0 lg:border-r border-white/8">
              <h3 className="font-heading text-xl font-medium text-text-secondary mb-8">
                Most clients face multiple issues from{' '}
                <span className="text-white">different suppliers</span>. This makes it hard to coordinate.
              </h3>

              <div className="space-y-4 mb-10">
                {PROBLEMS.map((problem, i) => (
                  <motion.div
                    key={problem}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12, duration: 0.6 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center flex-shrink-0">
                      <RiCheckLine className="w-3 h-3 text-accent" />
                    </div>
                    <span className="font-body text-text-secondary text-sm">{problem}</span>
                  </motion.div>
                ))}
              </div>

              {/* The Ideal Factory Approach */}
              <div className="border-t border-white/8 pt-8">
                <p className="font-body text-xs text-accent tracking-widest uppercase mb-4">The Ideal Factory Approach</p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    ['Single Supplier', 'One company handles everything'],
                    ['Fixed Timeline', 'Committed delivery schedule'],
                    ['After Sales', '5-year support guarantee'],
                    ['Custom Design', 'Tailored to your vision'],
                  ].map(([title, desc]) => (
                    <div key={title} className="glass rounded-xl p-4 border border-white/5">
                      <p className="font-heading text-sm font-semibold text-white mb-1">{title}</p>
                      <p className="font-body text-[11px] text-text-muted">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Video thumbnail */}
            <div className="relative flex items-center justify-center p-8 sm:p-12">
              <div className="relative w-full max-w-md aspect-video rounded-2xl overflow-hidden">
                {!playing ? (
                  <>
                    <Image
                      src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                      alt="Our Process Video"
                      fill
                      className="object-cover"
                      sizes="500px"
                    />
                    <div className="absolute inset-0 bg-black/50" />

                    {/* Play button with pulse */}
                    <button
                      onClick={() => setPlaying(true)}
                      className="absolute inset-0 flex items-center justify-center group"
                    >
                      <div className="relative">
                        {/* Pulse rings */}
                        <div className="absolute inset-0 rounded-full bg-accent/20 animate-ping scale-125" />
                        <div className="absolute inset-0 rounded-full bg-accent/10 animate-pulse scale-150" />
                        {/* Button */}
                        <div className="relative w-16 h-16 rounded-full bg-accent/90 group-hover:bg-accent flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                          <RiPlayFill className="w-6 h-6 text-black ml-1" />
                        </div>
                      </div>
                    </button>

                    {/* Label */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="font-body text-xs text-white/80">Watch: How Ideal Factory Works</p>
                      <p className="font-body text-[10px] text-white/40">2:45 min</p>
                    </div>
                  </>
                ) : (
                  <div className="w-full h-full bg-black flex items-center justify-center">
                    <p className="text-text-muted font-body text-sm">Video Player Placeholder</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
