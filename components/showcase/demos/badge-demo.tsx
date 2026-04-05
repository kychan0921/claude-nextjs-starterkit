import { Badge } from '@/components/ui/badge'

/**
 * Badge 컴포넌트 예제
 */
export function BadgeDemo() {
  return (
    <div className="space-y-8">
      {/* Variants */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Variants</h3>
        <div className="flex flex-wrap gap-2">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
        </div>
      </div>

      {/* Badge with Text Content */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Badge Examples</h3>
        <div className="flex flex-wrap gap-2">
          <Badge>New</Badge>
          <Badge variant="secondary">Featured</Badge>
          <Badge variant="outline">Popular</Badge>
          <Badge variant="destructive">Deprecated</Badge>
        </div>
      </div>

      {/* Badge in Context */}
      <div>
        <h3 className="text-lg font-semibold mb-4">In Context</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span>Status:</span>
            <Badge>Active</Badge>
          </div>
          <div className="flex items-center gap-2">
            <span>Version:</span>
            <Badge variant="outline">v2.0.0</Badge>
          </div>
          <div className="flex items-center gap-2">
            <span>Alert:</span>
            <Badge variant="destructive">Error</Badge>
          </div>
        </div>
      </div>

      {/* Multiple Badges */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Multiple Tags</h3>
        <div className="flex flex-wrap gap-2">
          <Badge>React</Badge>
          <Badge variant="secondary">TypeScript</Badge>
          <Badge variant="outline">Next.js</Badge>
          <Badge variant="secondary">Tailwind</Badge>
        </div>
      </div>
    </div>
  )
}
