import Link from 'next/link'
import { NAV_LINKS } from '@/constants'
import { RiInstagramLine, RiFacebookCircleLine, RiLinkedinBoxLine, RiWhatsappLine } from 'react-icons/ri'

const SERVICES = ['Kitchen Design', 'Wardrobes & Closets', 'Wooden Doors', 'Window Systems', 'Full Villa Package']

export default function Footer() {
  return (
    <footer className="bg-bg-secondary border-t border-white/5">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-full border-2 border-accent flex items-center justify-center">
                <span className="text-accent font-heading font-bold text-xs">IF</span>
              </div>
              <div>
                <p className="font-heading text-base font-semibold text-white leading-none">Ideal Factory</p>
                <p className="text-[9px] text-text-muted tracking-widest uppercase">Luxury Interiors</p>
              </div>
            </div>
            <p className="font-body text-sm text-text-muted leading-relaxed mb-6">
              Premium villa interior solutions delivered with precision, passion, and uncompromising quality.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {[
                { Icon: RiInstagramLine, href: '#' },
                { Icon: RiFacebookCircleLine, href: '#' },
                { Icon: RiLinkedinBoxLine, href: '#' },
                { Icon: RiWhatsappLine, href: '#' },
              ].map(({ Icon, href }) => (
                <a
                  key={href + Icon.name}
                  href={href}
                  className="w-9 h-9 rounded-full glass border border-white/10 flex items-center justify-center hover:border-accent hover:text-accent text-text-muted transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-white mb-4 tracking-wider uppercase">Quick Links</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="font-body text-sm text-text-muted hover:text-accent transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-white mb-4 tracking-wider uppercase">Services</h4>
            <ul className="space-y-3">
              {SERVICES.map((service) => (
                <li key={service}>
                  <span className="font-body text-sm text-text-muted hover:text-accent transition-colors duration-300 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-white mb-4 tracking-wider uppercase">Contact</h4>
            <div className="space-y-3 font-body text-sm text-text-muted">
              <p>+971 50 123 4567</p>
              <p>hello@idealfactory.ae</p>
              <p>Dubai, United Arab Emirates</p>
              <div className="mt-4 pt-4 border-t border-white/8">
                <p className="text-xs">Business Hours</p>
                <p className="text-xs text-text-muted mt-1">Mon–Sat: 9AM – 7PM</p>
                <p className="text-xs text-text-muted">Sun: By Appointment</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-text-muted">
            © {new Date().getFullYear()} Ideal Factory. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Sitemap'].map((item) => (
              <span key={item} className="font-body text-xs text-text-muted hover:text-accent transition-colors cursor-pointer">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
