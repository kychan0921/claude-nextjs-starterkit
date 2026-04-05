import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Container } from '@/components/layout/container'

/**
 * Hero 섹션 (메인 배너)
 */
export function Hero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* 배경 장식 */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/10 to-transparent" />

      <Container>
        <div className="flex flex-col items-center gap-6 text-center max-w-3xl mx-auto">
          {/* 배지 */}
          <Badge variant="outline">새로운 스타터킷</Badge>

          {/* 제목 */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            빠르게 시작하는{' '}
            <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              웹 개발
            </span>
          </h1>

          {/* 설명 */}
          <p className="text-lg text-muted-foreground max-w-2xl">
            Next.js 16, Tailwind CSS, shadcn/ui로 구성된 현대적인 스타터킷.
            즉시 프로젝트를 시작하고 빠르게 성장시키세요.
          </p>

          {/* CTA 버튼 */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              시작하기
            </Button>
            <Button variant="outline" size="lg">
              문서 보기
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
