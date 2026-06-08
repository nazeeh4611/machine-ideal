import dynamic from 'next/dynamic'
import Navbar from '@/components/layout/Navbar'
import HeroSection from '@/components/hero/HeroSection'

// Dynamic imports for performance
const InteriorSolutionsTitle = dynamic(() => import('@/components/solutions/InteriorSolutionsTitle'))
const SolutionsIntro = dynamic(() => import('@/components/solutions/SolutionsIntro'))
const SolutionsGrid = dynamic(() => import('@/components/solutions/SolutionsGrid'))
const ProblemsSection = dynamic(() => import('@/components/solutions/ProblemsSection'))
const ProcessTimeline = dynamic(() => import('@/components/process/ProcessTimeline'))
const PortfolioGallery = dynamic(() => import('@/components/gallery/PortfolioGallery'))
const WhyChooseUs = dynamic(() => import('@/components/common/WhyChooseUs'))
const TestimonialsSection = dynamic(() => import('@/components/testimonials/TestimonialsSection'))
const ContactSection = dynamic(() => import('@/components/contact/ContactSection'))
const Footer = dynamic(() => import('@/components/layout/Footer'))

// Client-only effects
import CursorGlow from '@/components/animations/CursorGlow'
import ScrollProgress from '@/components/animations/ScrollProgress'
import PageLoader from '@/components/animations/PageLoader'
import SmoothScrollProvider from '@/components/animations/SmoothScrollProvider'

export default function Home() {
  return (
    <>
      <PageLoader />
      <CursorGlow />
      <ScrollProgress />
      <SmoothScrollProvider>
        <main className="bg-bg-primary overflow-hidden">
          <Navbar />
          <HeroSection />
          <InteriorSolutionsTitle />
          <SolutionsIntro />
          <SolutionsGrid />
          <ProblemsSection />
          <ProcessTimeline />
          <PortfolioGallery />
          <WhyChooseUs />
          <TestimonialsSection />
          <ContactSection />
          <Footer />
        </main>
      </SmoothScrollProvider>
    </>
  )
}
