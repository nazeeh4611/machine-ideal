'use client'

import dynamic from 'next/dynamic'

const CursorGlow = dynamic(
  () => import('@/components/animations/CursorGlow'),
  { ssr: false }
)

const ScrollProgress = dynamic(
  () => import('@/components/animations/ScrollProgress'),
  { ssr: false }
)

const PageLoader = dynamic(
  () => import('@/components/animations/PageLoader'),
  { ssr: false }
)



export default function ClientEffects() {
  return (
    <>
      <PageLoader />
      <ScrollProgress />
      <CursorGlow />
    </>
  )
}