import { LucideIcon } from 'lucide-react'

/**
 * 네비게이션 링크 정보
 */
export interface NavLink {
  href: string
  label: string
}

/**
 * 기능 항목 (Hero 섹션의 Features 그리드)
 */
export interface FeatureItem {
  icon: LucideIcon
  title: string
  description: string
}

/**
 * 컴포넌트 쇼케이스 항목
 */
export interface ComponentItem {
  slug: string
  name: string
  description: string
  category: 'Inputs' | 'Display' | 'Feedback' | 'Navigation' | 'Data'
  icon: LucideIcon
}
