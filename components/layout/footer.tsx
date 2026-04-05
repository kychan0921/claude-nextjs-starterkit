import Link from 'next/link'
import { Container } from './container'

/**
 * 푸터 (링크 그룹 + 저작권)
 */
export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <Container className="py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mb-8">
          {/* 로고 + 설명 */}
          <div>
            <h3 className="font-bold text-lg text-foreground mb-2">Starter Kit</h3>
            <p className="text-sm text-muted-foreground">
              빠른 웹 개발을 위한 Next.js 스타터킷
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Security
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* 저작권 */}
        <div className="border-t border-border/40 pt-8">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Starter Kit. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
