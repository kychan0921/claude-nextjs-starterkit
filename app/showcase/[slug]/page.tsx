import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Container } from '@/components/layout/container'
import { componentRegistry, getComponentBySlug } from '@/lib/component-registry'

// Demo 컴포넌트들 import
import { ButtonDemo } from '@/components/showcase/demos/button-demo'
import { InputDemo } from '@/components/showcase/demos/input-demo'
import { TextareaDemo } from '@/components/showcase/demos/textarea-demo'
import { CheckboxDemo } from '@/components/showcase/demos/checkbox-demo'
import { SwitchDemo } from '@/components/showcase/demos/switch-demo'
import { RadioGroupDemo } from '@/components/showcase/demos/radio-group-demo'
import { SelectDemo } from '@/components/showcase/demos/select-demo'
import { CardDemo } from '@/components/showcase/demos/card-demo'
import { BadgeDemo } from '@/components/showcase/demos/badge-demo'
import { AvatarDemo } from '@/components/showcase/demos/avatar-demo'
import { SeparatorDemo } from '@/components/showcase/demos/separator-demo'
import { SkeletonDemo } from '@/components/showcase/demos/skeleton-demo'
import { DialogDemo } from '@/components/showcase/demos/dialog-demo'
import { SonnerDemo } from '@/components/showcase/demos/sonner-demo'
import { TooltipDemo } from '@/components/showcase/demos/tooltip-demo'
import { TabsDemo } from '@/components/showcase/demos/tabs-demo'
import { DropdownMenuDemo } from '@/components/showcase/demos/dropdown-menu-demo'
import { AccordionDemo } from '@/components/showcase/demos/accordion-demo'
import { TableDemo } from '@/components/showcase/demos/table-demo'

/**
 * Demo 컴포넌트 매핑
 */
const demoMap: Record<string, React.ComponentType> = {
  button: ButtonDemo,
  input: InputDemo,
  textarea: TextareaDemo,
  checkbox: CheckboxDemo,
  switch: SwitchDemo,
  'radio-group': RadioGroupDemo,
  select: SelectDemo,
  card: CardDemo,
  badge: BadgeDemo,
  avatar: AvatarDemo,
  separator: SeparatorDemo,
  skeleton: SkeletonDemo,
  dialog: DialogDemo,
  sonner: SonnerDemo,
  tooltip: TooltipDemo,
  tabs: TabsDemo,
  'dropdown-menu': DropdownMenuDemo,
  accordion: AccordionDemo,
  table: TableDemo,
}

/**
 * Static params 생성 (정적 생성용)
 */
export function generateStaticParams() {
  return componentRegistry.map((item) => ({
    slug: item.slug,
  }))
}

/**
 * 컴포넌트 예제 페이지
 */
export default async function ComponentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const component = getComponentBySlug(slug)
  const Demo = demoMap[slug]

  // 컴포넌트가 없거나 demo가 없으면 404
  if (!component || !Demo) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Container className="py-12">
        {/* 뒤로가기 버튼 */}
        <Link href="/showcase" className="inline-block mb-8">
          <Button variant="ghost" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Components
          </Button>
        </Link>

        {/* 헤더 */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            {component.name}
          </h1>
          <p className="text-xl text-muted-foreground mb-4">
            {component.description}
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              {component.category}
            </span>
          </div>
        </div>

        <Separator className="my-8" />

        {/* 예제 섹션 */}
        <Card className="border-border/50 bg-card/50">
          <CardHeader>
            <CardTitle>Examples & Interactive Demo</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              <Demo />
            </div>
          </CardContent>
        </Card>

        {/* 네비게이션 */}
        <div className="mt-12 flex items-center justify-between border-t pt-8">
          {/* 이전 컴포넌트 */}
          {(() => {
            const currentIndex = componentRegistry.findIndex(
              (item) => item.slug === slug
            )
            const prevComponent =
              currentIndex > 0 ? componentRegistry[currentIndex - 1] : null

            return prevComponent ? (
              <Link
                href={`/showcase/${prevComponent.slug}`}
                className="group"
              >
                <Button variant="outline" className="gap-2">
                  ← {prevComponent.name}
                </Button>
              </Link>
            ) : (
              <div />
            )
          })()}

          {/* 다음 컴포넌트 */}
          {(() => {
            const currentIndex = componentRegistry.findIndex(
              (item) => item.slug === slug
            )
            const nextComponent =
              currentIndex < componentRegistry.length - 1
                ? componentRegistry[currentIndex + 1]
                : null

            return nextComponent ? (
              <Link
                href={`/showcase/${nextComponent.slug}`}
                className="group"
              >
                <Button variant="outline" className="gap-2">
                  {nextComponent.name} →
                </Button>
              </Link>
            ) : (
              <div />
            )
          })()}
        </div>
      </Container>
    </div>
  )
}
