'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function PageLoader() {
  const [count, setCount] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const duration = 2200
    const interval = 20
    const steps = duration / interval
    let current = 0

    const timer = setInterval(() => {
      current++
      setCount(Math.round((current / steps) * 100))
      if (current >= steps) {
        clearInterval(timer)
        setTimeout(() => setVisible(false), 300)
      }
    }, interval)

    return () => clearInterval(timer)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[99999] bg-bg-primary flex flex-col items-center justify-center"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mb-12 text-center"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full border-2 border-accent flex items-center justify-center">
                <span className="text-accent font-heading font-bold text-sm">IF</span>
              </div>
              <div>
                <p className="font-heading text-xl font-semibold text-white tracking-wide">Ideal Factory</p>
                <p className="text-xs text-text-muted tracking-widest uppercase">Luxury Interiors UAE</p>
              </div>
            </div>
          </motion.div>

          {/* Counter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-8"
          >
            <span className="font-heading text-7xl font-light text-white">{count}</span>
            <span className="font-heading text-3xl text-accent">%</span>
          </motion.div>

          {/* Progress bar */}
          <div className="w-48 h-[1px] bg-white/10 relative overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-accent"
              initial={{ width: '0%' }}
              animate={{ width: `${count}%` }}
              transition={{ ease: 'linear' }}
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-4 text-xs text-text-muted tracking-widest uppercase"
          >
            Loading Experience
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
