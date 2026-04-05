'use client'

import { useState } from 'react'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'

/**
 * RadioGroup 컴포넌트 예제
 */
export function RadioGroupDemo() {
  const [plan, setPlan] = useState('free')
  const [theme, setTheme] = useState('light')

  return (
    <div className="space-y-8">
      {/* Basic Radio Group */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Select Plan</h3>
        <RadioGroup value={plan} onValueChange={setPlan}>
          {[
            { value: 'free', label: 'Free', description: '₩0/month' },
            { value: 'pro', label: 'Pro', description: '₩99/month' },
            { value: 'enterprise', label: 'Enterprise', description: 'Custom' },
          ].map((item) => (
            <div key={item.value} className="flex items-center gap-2 mb-3">
              <RadioGroupItem value={item.value} id={item.value} />
              <Label htmlFor={item.value} className="cursor-pointer">
                <span className="font-semibold">{item.label}</span>
                <span className="text-sm text-muted-foreground ml-2">
                  {item.description}
                </span>
              </Label>
            </div>
          ))}
        </RadioGroup>
        <p className="text-sm text-muted-foreground mt-4">
          Selected: {plan}
        </p>
      </div>

      {/* Theme Selection */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Theme</h3>
        <RadioGroup value={theme} onValueChange={setTheme}>
          <div className="flex items-center gap-2 mb-3">
            <RadioGroupItem value="light" id="light" />
            <Label htmlFor="light">Light</Label>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <RadioGroupItem value="dark" id="dark" />
            <Label htmlFor="dark">Dark</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="system" id="system" />
            <Label htmlFor="system">System</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  )
}
