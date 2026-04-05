import { Separator } from '@/components/ui/separator'

/**
 * Separator 컴포넌트 예제
 */
export function SeparatorDemo() {
  return (
    <div className="space-y-8">
      {/* Horizontal Separator */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Horizontal Separator</h3>
        <div>
          <p>Content above separator</p>
          <Separator className="my-4" />
          <p>Content below separator</p>
        </div>
      </div>

      {/* Separators between sections */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Section Divider</h3>
        <div>
          <div>
            <h4 className="font-semibold">Section 1</h4>
            <p className="text-sm text-muted-foreground">Content for section 1</p>
          </div>
          <Separator className="my-4" />
          <div>
            <h4 className="font-semibold">Section 2</h4>
            <p className="text-sm text-muted-foreground">Content for section 2</p>
          </div>
          <Separator className="my-4" />
          <div>
            <h4 className="font-semibold">Section 3</h4>
            <p className="text-sm text-muted-foreground">Content for section 3</p>
          </div>
        </div>
      </div>

      {/* List with separators */}
      <div>
        <h3 className="text-lg font-semibold mb-4">List with Separators</h3>
        <div>
          <div className="py-2">Item 1</div>
          <Separator />
          <div className="py-2">Item 2</div>
          <Separator />
          <div className="py-2">Item 3</div>
          <Separator />
          <div className="py-2">Item 4</div>
        </div>
      </div>

      {/* Vertical Separator */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Vertical Separator</h3>
        <div className="flex items-center gap-4">
          <span>Left</span>
          <Separator orientation="vertical" className="h-6" />
          <span>Right</span>
        </div>
      </div>
    </div>
  )
}
