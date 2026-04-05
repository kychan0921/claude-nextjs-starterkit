import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

/**
 * Input 컴포넌트 예제
 */
export function InputDemo() {
  return (
    <div className="space-y-8 max-w-md">
      {/* Basic Input */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Basic Input</h3>
        <Input placeholder="텍스트를 입력하세요" />
      </div>

      {/* With Label */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Input with Label</h3>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="example@email.com" />
        </div>
      </div>

      {/* Types */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Input Types</h3>
        <div className="space-y-3">
          <Input type="text" placeholder="Text" />
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Input type="number" placeholder="Number" />
          <Input type="date" />
          <Input type="time" />
        </div>
      </div>

      {/* Disabled */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Disabled State</h3>
        <Input placeholder="Disabled input" disabled />
      </div>

      {/* Size Variations */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Different Sizes</h3>
        <div className="space-y-3">
          <Input placeholder="Normal size input" />
          <Input className="text-sm" placeholder="Small input" />
          <Input className="text-lg h-12" placeholder="Large input" />
        </div>
      </div>
    </div>
  )
}
