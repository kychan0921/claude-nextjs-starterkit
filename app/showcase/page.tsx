import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Container } from '@/components/layout/container'
import { componentRegistry } from '@/lib/component-registry'

/**
 * 컴포넌트 쇼케이스 목록 페이지
 */
export default function ShowcasePage() {
  // 카테고리 순서 정의
  const CATEGORY_ORDER = ['Inputs', 'Display', 'Feedback', 'Navigation', 'Data'] as const
  // 카테고리별로 그룹화 (명시적 순서 유지)
  const categories = CATEGORY_ORDER.filter((cat) =>
    componentRegistry.some((item) => item.category === cat)
  )

  return (
    <div className="min-h-screen bg-background">
      <Container className="py-12">
        {/* 페이지 헤더 */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            shadcn/ui Components
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            모든 설치된 shadcn/ui 컴포넌트를 한 곳에서 확인하고 테스트해보세요.
            각 카드를 클릭하면 상세 예제 페이지로 이동합니다.
          </p>
        </div>

        {/* 카테고리별 컴포넌트 섹션 */}
        {categories.map((category) => {
          const items = componentRegistry.filter(
            (item) => item.category === category
          )

          return (
            <div key={category} className="mb-12">
              <h2 className="text-2xl font-bold mb-6">{category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.map((component) => {
                  const Icon = component.icon

                  return (
                    <Link
                      key={component.slug}
                      href={`/showcase/${component.slug}`}
                    >
                      <Card className="h-full cursor-pointer transition-all duration-200 hover:border-primary hover:shadow-md">
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <div>
                              <CardTitle className="text-lg">
                                {component.name}
                              </CardTitle>
                              <CardDescription>
                                {component.description}
                              </CardDescription>
                            </div>
                            <Icon className="h-5 w-5 text-muted-foreground" />
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-xs text-muted-foreground/60">
                            클릭하여 예제 보기 →
                          </p>
                        </CardContent>
                      </Card>
                    </Link>
                  )
                })}
              </div>
            </div>
          )
        })}

        {/* 전체 컴포넌트 수 */}
        <div className="mt-16 p-6 border rounded-lg bg-muted/30 text-center">
          <p className="text-lg font-semibold">
            총 {componentRegistry.length}개의 컴포넌트
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            모든 컴포넌트는 실제 프로젝트에서 바로 사용할 수 있습니다.
          </p>
        </div>
      </Container>
    </div>
  )
}
