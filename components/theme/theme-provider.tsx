'use client'

import { createContext, useContext, useEffect, ReactNode } from 'react'
import { useTernaryDarkMode } from 'usehooks-ts'

/**
 * 테마 컨텍스트 타입
 */
interface ThemeContextType {
  isDarkMode: boolean
  toggle: () => void
}

/**
 * 테마 컨텍스트
 */
const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

/**
 * 테마 공급자 컴포넌트
 * useTernaryDarkMode: light | system | dark 세 상태를 지원하고 OS 설정 덮어쓰기 이슈 없음
 * useEffect로 isDarkMode 변화 시 html.dark 클래스를 직접 조작
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  const { isDarkMode, toggleTernaryDarkMode } = useTernaryDarkMode()

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode)
  }, [isDarkMode])

  const value: ThemeContextType = {
    isDarkMode,
    toggle: toggleTernaryDarkMode,
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

/**
 * 테마 컨텍스트 훅
 * ThemeProvider 내부에서만 사용 가능
 */
export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}
