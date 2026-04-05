'use client'

import { Moon, Sun } from 'lucide-react'
import { useIsClient } from 'usehooks-ts'
import { Button } from '@/components/ui/button'
import { useTheme } from './theme-provider'

/**
 * 다크모드 토글 버튼
 * useIsClient로 SSR hydration mismatch 방지
 */
export function ThemeToggle() {
  const { isDarkMode, toggle } = useTheme()
  const isClient = useIsClient()

  if (!isClient) {
    return <Button variant="ghost" size="icon" disabled />
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggle}
      aria-label="다크모드 토글"
    >
      {isDarkMode ? (
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      )}
    </Button>
  )
}
