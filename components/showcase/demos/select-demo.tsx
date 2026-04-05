'use client'

import { useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Label } from '@/components/ui/label'

/**
 * Select 컴포넌트 예제
 */
export function SelectDemo() {
  const [country, setCountry] = useState('')
  const [language, setLanguage] = useState('en')

  return (
    <div className="space-y-8 max-w-md">
      {/* Basic Select */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Country Selection</h3>
        <Select value={country} onValueChange={setCountry}>
          <SelectTrigger>
            <SelectValue placeholder="Select a country" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="korea">South Korea</SelectItem>
            <SelectItem value="usa">United States</SelectItem>
            <SelectItem value="japan">Japan</SelectItem>
            <SelectItem value="canada">Canada</SelectItem>
            <SelectItem value="uk">United Kingdom</SelectItem>
          </SelectContent>
        </Select>
        {country && <p className="text-sm text-muted-foreground mt-2">Selected: {country}</p>}
      </div>

      {/* Select with Label */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Language Selection</h3>
        <div className="space-y-2">
          <Label htmlFor="language">Language</Label>
          <Select value={language} onValueChange={setLanguage}>
            <SelectTrigger id="language">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="ko">한국어</SelectItem>
              <SelectItem value="ja">日本語</SelectItem>
              <SelectItem value="zh">中文</SelectItem>
              <SelectItem value="es">Español</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Disabled Select */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Disabled State</h3>
        <Select disabled>
          <SelectTrigger>
            <SelectValue placeholder="Disabled select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Option 1</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
