'use client'

import { useState } from 'react'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

/**
 * Checkbox 컴포넌트 예제
 */
export function CheckboxDemo() {
  const [checked, setChecked] = useState(false)
  const [multiChecked, setMultiChecked] = useState({
    react: false,
    typescript: false,
    tailwind: false,
  })

  return (
    <div className="space-y-8">
      {/* Basic Checkbox */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Basic Checkbox</h3>
        <div className="flex items-center gap-2">
          <Checkbox id="basic" checked={checked} onCheckedChange={setChecked} />
          <Label htmlFor="basic">Accept terms and conditions</Label>
        </div>
        <p className="text-sm text-muted-foreground mt-2">
          Checked: {checked ? 'Yes' : 'No'}
        </p>
      </div>

      {/* Multiple Checkboxes */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Multiple Checkboxes</h3>
        <div className="space-y-2">
          {[
            { id: 'react', label: 'React' },
            { id: 'typescript', label: 'TypeScript' },
            { id: 'tailwind', label: 'Tailwind CSS' },
          ].map((item) => (
            <div key={item.id} className="flex items-center gap-2">
              <Checkbox
                id={item.id}
                checked={multiChecked[item.id as keyof typeof multiChecked]}
                onCheckedChange={(val) =>
                  setMultiChecked({
                    ...multiChecked,
                    [item.id]: val,
                  })
                }
              />
              <Label htmlFor={item.id}>{item.label}</Label>
            </div>
          ))}
        </div>
      </div>

      {/* Disabled Checkbox */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Disabled State</h3>
        <div className="flex items-center gap-2">
          <Checkbox id="disabled" disabled />
          <Label htmlFor="disabled" className="opacity-50">
            Disabled checkbox
          </Label>
        </div>
      </div>
    </div>
  )
}
