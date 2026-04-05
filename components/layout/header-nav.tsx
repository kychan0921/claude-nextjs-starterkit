'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useToggle } from 'usehooks-ts'
import { Button } from '@/components/ui/button'
import { NavLink } from '@/types'

interface HeaderNavProps {
  navLinks: NavLink[]
}

/**
 * 헤더 네비게이션 (모바일 메뉴 포함)
 * useToggle로 모바일 메뉴 상태 관리
 */
export function HeaderNav({ navLinks }: HeaderNavProps) {
  const [isMenuOpen, toggleMenu] = useToggle(false)

  return (
    <>
      {/* 데스크탑 네비게이션 */}
      <nav className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm font-medium text-foreground/60 hover:text-foreground transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* 모바일 메뉴 버튼 */}
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleMenu}
        className="md:hidden"
        aria-label="메뉴"
      >
        {isMenuOpen ? (
          <X className="h-5 w-5" />
        ) : (
          <Menu className="h-5 w-5" />
        )}
      </Button>

      {/* 모바일 드롭다운 메뉴 */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-background border-b border-border p-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/60 hover:text-foreground transition-colors"
                onClick={() => toggleMenu()}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}
