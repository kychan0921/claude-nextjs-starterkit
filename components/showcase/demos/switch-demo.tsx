'use client'

import { useState } from 'react'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'

/**
 * Switch 컴포넌트 예제
 */
export function SwitchDemo() {
  const [notifications, setNotifications] = useState(false)
  const [marketing, setMarketing] = useState(true)
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className="space-y-8">
      {/* Basic Switch */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Basic Switch</h3>
        <div className="flex items-center gap-2">
          <Switch
            id="notifications"
            checked={notifications}
            onCheckedChange={setNotifications}
          />
          <Label htmlFor="notifications">Enable notifications</Label>
        </div>
        <p className="text-sm text-muted-foreground mt-2">
          Status: {notifications ? 'On' : 'Off'}
        </p>
      </div>

      {/* Settings Switches */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Settings</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 border rounded-lg">
            <Label htmlFor="marketing">Marketing emails</Label>
            <Switch
              id="marketing"
              checked={marketing}
              onCheckedChange={setMarketing}
            />
          </div>
          <div className="flex items-center justify-between p-3 border rounded-lg">
            <Label htmlFor="darkmode">Dark mode</Label>
            <Switch
              id="darkmode"
              checked={darkMode}
              onCheckedChange={setDarkMode}
            />
          </div>
        </div>
      </div>

      {/* Disabled Switch */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Disabled State</h3>
        <div className="flex items-center gap-2">
          <Switch id="disabled" disabled />
          <Label htmlFor="disabled" className="opacity-50">
            Disabled switch
          </Label>
        </div>
      </div>
    </div>
  )
}
