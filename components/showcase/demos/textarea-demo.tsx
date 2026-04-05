import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

/**
 * Textarea 컴포넌트 예제
 */
export function TextareaDemo() {
  return (
    <div className="space-y-8 max-w-md">
      {/* Basic Textarea */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Basic Textarea</h3>
        <Textarea placeholder="Type your message here..." />
      </div>

      {/* With Label */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Textarea with Label</h3>
        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" placeholder="Enter your message..." />
        </div>
      </div>

      {/* Different Rows */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Size Variations</h3>
        <div className="space-y-3">
          <Textarea placeholder="Small (3 rows)" rows={3} />
          <Textarea placeholder="Medium (6 rows)" rows={6} />
          <Textarea placeholder="Large (9 rows)" rows={9} />
        </div>
      </div>

      {/* Disabled */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Disabled State</h3>
        <Textarea placeholder="Disabled textarea" disabled />
      </div>

      {/* Read-only */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Read-only State</h3>
        <Textarea
          value="This textarea is read-only. You cannot modify this text."
          readOnly
        />
      </div>
    </div>
  )
}
