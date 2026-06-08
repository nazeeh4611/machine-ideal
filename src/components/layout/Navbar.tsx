'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { NAV_LINKS } from '@/constants'
import { HiOutlinePhone } from 'react-icons/hi'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-500 ${
        scrolled
          ? 'glass border-b border-white/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-full border-2 border-accent flex items-center justify-center group-hover:bg-accent/20 transition-all duration-300">
              <span className="text-accent font-heading font-bold text-xs">IF</span>
            </div>
            <div>
              <p className="font-heading text-base font-semibold text-white leading-none">Ideal Factory</p>
              <p className="text-[9px] text-text-muted tracking-widest uppercase">Luxury Interiors</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-body text-text-secondary hover:text-accent transition-colors duration-300 tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+971501234567" className="flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors">
              <HiOutlinePhone className="w-4 h-4" />
              <span className="font-body">+971 50 123 4567</span>
            </a>
            <Link
              href="#contact"
              className="glass-btn px-5 py-2 rounded-full text-sm font-body font-medium"
            >
              Get Free Design
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-1"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <RiCloseLine className="w-6 h-6" /> : <RiMenu3Line className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/10">
            <div className="flex flex-col gap-4 pt-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-body text-text-secondary hover:text-accent transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#contact"
                className="glass-btn px-5 py-2 rounded-full text-sm font-body font-medium text-center mt-2"
                onClick={() => setMenuOpen(false)}
              >
                Get Free Design
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
