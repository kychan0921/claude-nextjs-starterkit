import { Hero } from '@/components/sections/hero'
import { Features } from '@/components/sections/features'
import { CTA } from '@/components/sections/cta'

/**
 * 메인 랜딩 페이지
 * Hero + Features + CTA 섹션으로 구성
 */
export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Features />
      <CTA />
    </div>
  )
}
