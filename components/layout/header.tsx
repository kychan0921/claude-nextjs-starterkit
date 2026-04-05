import Link from 'next/link'
import { Container } from './container'
import { HeaderNav } from './header-nav'
import { ThemeToggle } from '@/components/theme/theme-toggle'
import { NavLink } from '@/types'

const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '#features', label: 'Features' },
  { href: '/showcase', label: 'Components' },
  { href: '#docs', label: 'Docs' },
]

/**
 * 헤더 (로고 + 네비게이션 + 테마 토글)
 */
export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* 로고 */}
          <Link href="/" className="font-bold text-lg text-foreground">
            Starter Kit
          </Link>

          {/* 네비게이션 + 테마 토글 */}
          <div className="flex items-center gap-4">
            <HeaderNav navLinks={navLinks} />
            <ThemeToggle />
          </div>
        </div>
      </Container>
    </header>
  )
}
