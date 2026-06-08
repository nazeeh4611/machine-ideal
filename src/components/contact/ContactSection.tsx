'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import ContactForm from './ContactForm'
import { HiOutlinePhone, HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi'

export default function ContactSection() {
  const titleRef = useScrollReveal()
  const formRef = useScrollReveal({ threshold: 0.05 })

  return (
    <section id="contact" className="relative bg-bg-primary py-16 sm:py-24 overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 grid-bg opacity-60" />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-radial-gradient"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(79,209,217,0.04) 0%, transparent 70%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-12 sm:mb-16">
          <p className="font-body text-accent text-sm tracking-widest uppercase mb-3">Get In Touch</p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-4">
            We Love to Hear From You
          </h2>
          <p className="font-body text-text-muted text-base max-w-lg mx-auto">
            Ready to transform your villa? Get your free 3D design consultation today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact info - left */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="font-heading text-2xl font-medium text-white mb-6">
                Let&apos;s discuss your project!
              </h3>
              <p className="font-body text-text-muted text-sm leading-relaxed mb-8">
                Our design consultants are ready to help you create the villa of your dreams. 
                Reach out and we'll respond within 24 hours.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: HiOutlinePhone, label: 'Phone', value: '+971 50 123 4567', href: 'tel:+971501234567' },
                { icon: HiOutlineMail, label: 'Email', value: 'hello@idealfactory.ae', href: 'mailto:hello@idealfactory.ae' },
                { icon: HiOutlineLocationMarker, label: 'Location', value: 'Dubai, UAE', href: '#' },
              ].map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-4 glass rounded-xl p-4 border border-white/8 hover:border-accent/30 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/20 transition-all duration-300">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-body text-[10px] text-text-muted uppercase tracking-wider">{label}</p>
                    <p className="font-body text-sm text-white">{value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social proof */}
            <div className="glass rounded-xl p-6 border border-accent/15">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex -space-x-2">
                  {['A', 'M', 'S', 'L'].map((letter) => (
                    <div key={letter} className="w-8 h-8 rounded-full bg-accent/20 border-2 border-bg-primary flex items-center justify-center">
                      <span className="font-heading text-xs text-accent">{letter}</span>
                    </div>
                  ))}
                </div>
                <div className="ml-2">
                  <p className="font-body text-xs text-white">500+ happy clients</p>
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map(i => <span key={i} className="text-accent text-xs">★</span>)}
                  </div>
                </div>
              </div>
              <p className="font-body text-xs text-text-muted">"Best decision we made for our villa renovation."</p>
            </div>
          </div>

          {/* Form - right */}
          <div ref={formRef} className="lg:col-span-3">
            <div className="glass rounded-3xl p-6 sm:p-8 border border-white/8">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
