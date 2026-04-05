import { Button } from '@/components/ui/button'
import { Container } from '@/components/layout/container'

/**
 * CTA 섹션 (행동 유도)
 */
export function CTA() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-r from-primary/80 to-purple-600/80 text-primary-foreground">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            지금 바로 시작하세요
          </h2>
          <p className="text-base md:text-lg opacity-90 mb-8">
            이 스타터킷으로 다음 프로젝트를 시작하고 개발 시간을 단축하세요.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-background text-foreground hover:bg-background/90"
          >
            GitHub에서 Clone 하기
          </Button>
        </div>
      </Container>
    </section>
  )
}
