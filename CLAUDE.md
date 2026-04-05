# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

**Next.js 16 + Tailwind v4 + shadcn v4 모던 웹 스타터킷**

완성된 레이아웃, 다크모드, 20개 shadcn 컴포넌트 + 인터랙티브 showcase 페이지를 포함한 프로덕션 레벨의 스타터 템플릿.

---

## 🚀 개발 명령어

```bash
# Webpack으로 개발 서버 실행 (기본, Turbopack 버그 회피)
npm run dev

# Turbopack으로 개발 서버 실행 (대체)
npm run dev:turbo

# 프로덕션 빌드
npm build

# 프로덕션 서버 시작
npm start

# ESLint 실행
npm run lint
```

**포트:** 기본적으로 `http://localhost:3000` (포트 사용 중이면 3001 사용)

---

## 🏗️ 아키텍처 (5 Layer)

```
Layer 1: Foundation
  ├─ app/globals.css (Tailwind v4 CSS-first, oklch 색상, .dark 클래스)
  └─ lib/utils.ts (cn() 유틸리티)

Layer 2: Primitives (shadcn 기본 UI)
  ├─ Button, Input, Label, Textarea, Checkbox, Switch
  ├─ RadioGroup, Select, Separator, Avatar, Badge, Skeleton
  └─ components/ui/* (자동 생성)

Layer 3: Composites (shadcn 합성 UI)
  ├─ Card, Dialog, DropdownMenu, Tooltip
  ├─ Tabs, Accordion, Table
  └─ components/ui/* (자동 생성)

Layer 4: Layout (커스텀 레이아웃)
  ├─ Header (sticky, Server Component)
  ├─ HeaderNav (mobile menu, Client Component + useToggle)
  ├─ Footer (Server Component)
  └─ Container (max-w 래퍼)

Layer 5: Sections (페이지 섹션)
  ├─ Hero (Badge + gradient title + CTA)
  ├─ Features (3열 card 그리드)
  └─ CTA (action section)

Theme System:
  ├─ ThemeProvider (useTernaryDarkMode + Context)
  └─ ThemeToggle (Sun/Moon 아이콘)

Showcase:
  ├─ /showcase (20개 컴포넌트 목록)
  ├─ /showcase/[slug] (동적 예제 페이지)
  └─ lib/component-registry.ts (메타데이터)
```

---

## 🎯 핵심 기술 스택

| 항목 | 버전 | 용도 |
|------|------|------|
| Next.js | 16.2.2 | App Router (Server/Client Components) |
| React | 19.2.4 | UI 라이브러리 |
| TypeScript | ^5 | 타입 안정성 |
| Tailwind CSS | v4 (CSS-first) | 스타일링 |
| shadcn/ui | v4 (radix-nova) | UI 컴포넌트 라이브러리 |
| radix-ui | ^1.4.3 | 헤드리스 컴포넌트 (통합 패키지) |
| usehooks-ts | ^3.1.1 | 훅 라이브러리 (커스텀 훅 최소화) |
| lucide-react | ^1.7.0 | 아이콘 |
| sonner | ^2.0.7 | 토스트 알림 |

---

## ⚙️ 특별한 설정 & 주의사항

### 1. Webpack 사용 (Turbopack 버그 회피)
```json
{
  "dev": "next dev --webpack",
  "dev:turbo": "next dev --turbopack"
}
```
- **이유:** Next.js 16.2.2 Turbopack에서 "Next.js package not found" 내부 에러 발생
- **해결:** Webpack을 기본으로 사용, Turbopack은 대체 스크립트로 제공
- **영향:** 상관없음 (개발 속도 동일)

### 2. 다크모드 구현 (Tailwind v4 `.dark` 클래스)
**파일:** `components/theme/theme-provider.tsx`

```typescript
// useTernaryDarkMode 사용 (light | system | dark)
// localStorage key: 'usehooks-ts-ternary-dark-mode'
// useEffect로 isDarkMode 변화 시 document.documentElement.classList 토글

// FOUC 방지 inline script in app/layout.tsx
// React 로드 전 localStorage 읽어 html 태그에 .dark 클래스 추가
```

**globals.css:**
```css
@custom-variant dark (&:is(.dark *))
```

**사용법:**
```tsx
import { useTheme } from '@/components/theme/theme-provider'

export function MyComponent() {
  const { isDarkMode, toggle } = useTheme()
  // ...
}
```

### 3. Server vs Client Component 분리

| 컴포넌트 | 타입 | 이유 |
|---------|------|------|
| Header, Footer, Container | Server | 정적 구조 |
| HeaderNav | Client | `useToggle` 상태 관리 |
| ThemeProvider, ThemeToggle | Client | `useTheme` + 상태 |
| Showcase demos | 혼합 | 상호작용 필요한 것은 Client |

**규칙:** Server Component가 Client Component를 import 가능 (반대는 불가)

### 4. 컴포넌트 등록 시스템
**파일:** `lib/component-registry.ts`

```typescript
// 모든 shadcn 컴포넌트 메타데이터를 여기에 등록
const componentRegistry: ComponentItem[] = [
  {
    slug: 'button',
    name: 'Button',
    description: '...',
    category: 'Inputs',
    icon: MousePointer2
  }
  // ...
]
```

**사용 위치:**
- `/showcase` 페이지에서 카테고리별 카드 렌더링
- `/showcase/[slug]` 동적 라우팅으로 상세 페이지 생성
- Demo 컴포넌트 매핑: `demoMap[slug]`

---

## 📁 파일 구조

```
app/
  layout.tsx              # RootLayout (ThemeProvider, Header, Footer, Toaster)
  page.tsx                # 랜딩 페이지 (Hero + Features + CTA)
  globals.css             # Tailwind v4 CSS-first (유지 관리 금지 ⚠️)
  showcase/
    page.tsx              # 컴포넌트 목록 페이지
    [slug]/
      page.tsx            # 동적 예제 페이지

components/
  ui/                     # shadcn 컴포넌트 (npx shadcn@latest add)
  layout/
    header.tsx            # sticky header + logo + nav + theme toggle
    header-nav.tsx        # mobile menu (useToggle)
    footer.tsx            # 3열 링크 + 저작권
    container.tsx         # max-w 래퍼
  sections/
    hero.tsx              # Badge + h1 + CTA
    features.tsx          # 6개 기능 카드
    cta.tsx               # 배경 강조 섹션
  theme/
    theme-provider.tsx    # ThemeContext + useTernaryDarkMode
    theme-toggle.tsx      # Sun/Moon 버튼
  showcase/
    demos/                # 20개 컴포넌트 demo (interactive)

lib/
  utils.ts                # cn() 유틸리티 (유지)
  component-registry.ts   # 컴포넌트 메타데이터 + 동적 라우팅

types/
  index.ts                # NavLink, FeatureItem, ComponentItem

hooks/                    # usehooks-ts 직접 사용 (커스텀 훅 금지)
```

---

## 🎨 스타일링 규칙

### Tailwind v4 특이사항

1. **`tailwind.config.js` 없음** — `app/globals.css`에 `@theme inline` 블록으로 설정
2. **시맨틱 토큰 사용** — 하드코딩 색상 금지
   ```tsx
   // ❌ 틀림
   className="bg-zinc-50 text-blue-600"
   
   // ✅ 맞음
   className="bg-background text-foreground"
   ```
3. **사용 가능한 색상:**
   - `background`, `foreground`, `card`, `muted`, `primary`, `secondary`, `destructive`, `border`, `input` 등

### shadcn 컴포넌트 추가

```bash
npx shadcn@latest add [component-name]
```

**주의:** `radix-ui`는 단일 통합 패키지 (`@radix-ui/react-*` 분리 패키지 아님)

---

## 🔄 주요 패턴

### Context + Custom Hook (Theme 예시)
```tsx
// theme-provider.tsx (exports both)
const ThemeContext = createContext(undefined)

export function ThemeProvider({ children }) {
  const { isDarkMode, toggleTernaryDarkMode } = useTernaryDarkMode()
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode)
  }, [isDarkMode])
  return <ThemeContext.Provider value={{ isDarkMode, toggle }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  return useContext(ThemeContext) // Error if outside provider
}

// client-component.tsx
const { isDarkMode, toggle } = useTheme()
```

### Server Component에서 Client Component Import
```tsx
// header.tsx (Server)
import { HeaderNav } from './header-nav' // Client Component (useToggle 사용)
import { ThemeToggle } from '@/components/theme/theme-toggle' // Client

export function Header() {
  return (
    <HeaderNav navLinks={navLinks} />
    <ThemeToggle />
  )
}
```

### Dynamic Routing + Static Generation
```tsx
// app/showcase/[slug]/page.tsx
export function generateStaticParams() {
  return componentRegistry.map(item => ({ slug: item.slug }))
}

export default function ComponentPage({ params }) {
  const component = getComponentBySlug(params.slug)
  const Demo = demoMap[params.slug]
  // ...
}
```

---

## ⚠️ 금지 사항 & 주의

| 항목 | 이유 |
|------|------|
| `globals.css` 직접 수정 | 설정된 토큰 손상 위험 |
| 커스텀 훅 작성 | `usehooks-ts` 라이브러리 우선 사용 |
| `@radix-ui/react-*` 설치 | `radix-ui` 통합 패키지 사용 중 |
| 하드코딩 색상 (예: `bg-blue-500`) | 시맨틱 토큰 사용 |
| `/hooks` 폴더 사용 | 필요시 `theme-provider.tsx`에서 export |

---

## 📚 추가 리소스

- **Next.js 16 Docs:** `node_modules/next/dist/docs/`
- **shadcn Components:** https://ui.shadcn.com
- **Tailwind v4:** https://tailwindcss.com/docs (CSS-first 섹션)
- **usehooks-ts:** https://github.com/juliencrn/usehooks-ts

---

## 🚨 문제 해결

### Turbopack 에러 발생
→ `npm run dev` (Webpack 사용) 또는 `.next` 폴더 삭제 후 재실행

### 다크모드 토글 안 됨
→ `ThemeProvider`가 layout.tsx에서 감싸고 있는지 확인
→ 컴포넌트가 Client Component여야 함 (`'use client'` 필수)

### 컴포넌트 추가 후 showcase에 안 나타남
→ `lib/component-registry.ts`에 항목 등록해야 함

---

## 코딩 컨벤션 (Compliance)

전역 CLAUDE.md 준수:
- 변수명: `camelCase`
- 함수명: 동사 시작 (`getData`, `toggleMenu`)
- 들여쓰기: 스페이스 2칸
- 폼 요소: `useForm` + `react-hook-form` (설치되어 있음)
- JSDoc: 모든 export 함수/컴포넌트
