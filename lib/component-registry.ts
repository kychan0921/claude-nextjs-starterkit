import {
  MousePointer2,
  Type,
  Square,
  Tag,
  Minus,
  User,
  Image as ImageIcon,
  AlertCircle,
  MessageCircle,
  Settings,
  ChevronDown,
  LayoutDashboard,
  Table as TableIcon,
  Zap,
} from 'lucide-react'
import { ComponentItem } from '@/types'

/**
 * 설치된 shadcn/ui 컴포넌트 레지스트리
 */
export const componentRegistry: ComponentItem[] = [
  // ============ Inputs (입력) ============
  {
    slug: 'button',
    name: 'Button',
    description: '클릭 가능한 버튼 컴포넌트',
    category: 'Inputs',
    icon: MousePointer2,
  },
  {
    slug: 'input',
    name: 'Input',
    description: '텍스트 입력 필드',
    category: 'Inputs',
    icon: Type,
  },
  {
    slug: 'textarea',
    name: 'Textarea',
    description: '멀티라인 텍스트 입력',
    category: 'Inputs',
    icon: Type,
  },
  {
    slug: 'checkbox',
    name: 'Checkbox',
    description: '선택 체크박스',
    category: 'Inputs',
    icon: Square,
  },
  {
    slug: 'switch',
    name: 'Switch',
    description: '토글 스위치',
    category: 'Inputs',
    icon: Zap,
  },
  {
    slug: 'radio-group',
    name: 'Radio Group',
    description: '라디오 버튼 그룹',
    category: 'Inputs',
    icon: Square,
  },
  {
    slug: 'select',
    name: 'Select',
    description: '드롭다운 선택 메뉴',
    category: 'Inputs',
    icon: ChevronDown,
  },

  // ============ Display (표시) ============
  {
    slug: 'card',
    name: 'Card',
    description: '콘텐츠 컨테이너',
    category: 'Display',
    icon: Square,
  },
  {
    slug: 'badge',
    name: 'Badge',
    description: '상태 표시 배지',
    category: 'Display',
    icon: Tag,
  },
  {
    slug: 'avatar',
    name: 'Avatar',
    description: '사용자 프로필 이미지',
    category: 'Display',
    icon: User,
  },
  {
    slug: 'separator',
    name: 'Separator',
    description: '콘텐츠 구분선',
    category: 'Display',
    icon: Minus,
  },
  {
    slug: 'skeleton',
    name: 'Skeleton',
    description: '로딩 상태 플레이스홀더',
    category: 'Display',
    icon: ImageIcon,
  },

  // ============ Feedback (피드백) ============
  {
    slug: 'dialog',
    name: 'Dialog',
    description: '모달 다이얼로그',
    category: 'Feedback',
    icon: AlertCircle,
  },
  {
    slug: 'sonner',
    name: 'Sonner',
    description: '토스트 알림 메시지',
    category: 'Feedback',
    icon: MessageCircle,
  },
  {
    slug: 'tooltip',
    name: 'Tooltip',
    description: '도움말 툴팁',
    category: 'Feedback',
    icon: MessageCircle,
  },

  // ============ Navigation (탐색) ============
  {
    slug: 'tabs',
    name: 'Tabs',
    description: '탭 네비게이션',
    category: 'Navigation',
    icon: LayoutDashboard,
  },
  {
    slug: 'dropdown-menu',
    name: 'Dropdown Menu',
    description: '드롭다운 메뉴',
    category: 'Navigation',
    icon: ChevronDown,
  },
  {
    slug: 'accordion',
    name: 'Accordion',
    description: '아코디언 토글',
    category: 'Navigation',
    icon: ChevronDown,
  },

  // ============ Data (데이터) ============
  {
    slug: 'table',
    name: 'Table',
    description: '데이터 테이블',
    category: 'Data',
    icon: TableIcon,
  },
]

/**
 * 카테고리별로 정렬된 컴포넌트 목록
 */
export function getComponentsByCategory(category: ComponentItem['category']) {
  return componentRegistry.filter((item) => item.category === category)
}

/**
 * slug로 컴포넌트 찾기
 */
export function getComponentBySlug(slug: string) {
  return componentRegistry.find((item) => item.slug === slug)
}
