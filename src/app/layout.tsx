import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ideal Factory | Luxury Villa Interior Design UAE',
  description: 'Design & Delivery of Your Villa Interiors Made Simple. Premium kitchen, wardrobe, door, and window solutions.',
  keywords: 'villa interior design, UAE, luxury interiors, kitchen design, wardrobe, Dubai',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
