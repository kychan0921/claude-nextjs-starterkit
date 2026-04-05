import { Zap, Palette, Smartphone, Shield, Gauge, Code } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Container } from '@/components/layout/container'
import { FeatureItem } from '@/types'

const featureItems: FeatureItem[] = [
  {
    icon: Zap,
    title: '빠른 개발',
    description: 'Next.js 16의 최신 기능과 App Router로 빠르게 개발합니다.',
  },
  {
    icon: Palette,
    title: '아름다운 디자인',
    description: 'Tailwind CSS와 shadcn/ui로 모던하고 일관성 있는 UI를 구성합니다.',
  },
  {
    icon: Smartphone,
    title: '반응형 디자인',
    description: '모든 기기에서 완벽하게 동작하는 반응형 레이아웃.',
  },
  {
    icon: Shield,
    title: '타입 안정성',
    description: 'TypeScript로 컴파일 타임에 버그를 잡고 안전한 코드를 작성합니다.',
  },
  {
    icon: Gauge,
    title: '최적화',
    description: 'Next.js의 자동 최적화로 빠르고 효율적인 성능을 제공합니다.',
  },
  {
    icon: Code,
    title: '개발자 경험',
    description: '깔끔한 코드 구조와 문서로 즐거운 개발 경험을 제공합니다.',
  },
]

/**
 * Features 섹션 (기능 그리드)
 */
export function Features() {
  return (
    <section id="features" className="py-20 md:py-32">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            주요 특징
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            현대적인 웹 개발에 필요한 모든 것을 갖춘 스타터킷
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featureItems.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="border border-border/40 hover:border-border transition-colors">
                <CardHeader>
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
