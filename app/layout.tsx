import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { TooltipProvider } from '@/components/ui/tooltip'
import { Toaster } from 'sonner'
import { ThemeProvider } from '@/components/theme/theme-provider'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Next.js Starter Kit',
  description: 'Next.js 16, Tailwind CSS, shadcn/ui로 만든 모던 웹 스타터킷',
}

/**
 * FOUC(Flash of Unstyled Content) 방지 스크립트
 * React 로드 전에 실행되어 html 태그에 .dark 클래스 추가
 * useTernaryDarkMode의 localStorage key: 'usehooks-ts-ternary-dark-mode'
 * 저장 형식: '"dark"' | '"system"' | '"light"' (JSON stringify 형태)
 */
const themeInitScript = `(function(){var t=localStorage.getItem('usehooks-ts-ternary-dark-mode');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;if(t==='"dark"'||(t==='"system"'&&d)||(!t&&d))document.documentElement.classList.add('dark');})()`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ko"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider>
          <TooltipProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <Toaster />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
