import { Button } from '@/components/ui/button'

/**
 * Button 컴포넌트 예제
 */
export function ButtonDemo() {
  return (
    <div className="space-y-8">
      {/* Variants */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Variants</h3>
        <div className="flex flex-wrap gap-3">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
        </div>
      </div>

      {/* Sizes */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Sizes</h3>
        <div className="flex flex-wrap items-center gap-3">
          <Button size="xs">Extra Small</Button>
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
        </div>
      </div>

      {/* Icon Buttons */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Icon Buttons</h3>
        <div className="flex flex-wrap gap-3">
          <Button size="icon">🔍</Button>
          <Button variant="outline" size="icon">
            ⭐
          </Button>
          <Button variant="ghost" size="icon">
            ❤️
          </Button>
        </div>
      </div>

      {/* Disabled State */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Disabled State</h3>
        <div className="flex flex-wrap gap-3">
          <Button disabled>Disabled</Button>
          <Button variant="outline" disabled>
            Outline Disabled
          </Button>
        </div>
      </div>
    </div>
  )
}
