# Portfolio - next-portfolio

## Stack técnico
- **Framework**: Next.js 16.1.6 (App Router)
- **Lenguaje**: TypeScript strict
- **Estilos**: Tailwind CSS v4 + shadcn/ui
- **Deploy**: Vercel

---

## Estructura de archivos

```
next-portfolio/
├── app/                        # Rutas, layouts y pages (App Router)
│   ├── layout.tsx              # Root layout con metadata global y fuentes
│   ├── page.tsx                # Home page
│   └── api/[recurso]/route.ts  # Rutas API REST
├── components/                 # Componentes reutilizables
│   ├── ui/                     # shadcn/ui — NO editar manualmente
│   ├── layout/                 # Header, Footer, Navbar
│   ├── sections/               # HeroSection, AboutSection, ProjectsSection, etc.
│   └── shared/                 # Componentes atómicos reutilizables (Badge, Tag, etc.)
├── lib/                        # Utilidades, helpers y datos
│   ├── utils.ts                # cn() y helpers generales
│   ├── projects.ts             # Datos / fetch de proyectos
│   ├── experience.ts           # Datos / fetch de experiencia laboral
│   └── constants.ts            # URLs, links sociales, strings reutilizables
├── public/                     # Assets estáticos (imágenes, íconos)
├── global.d.ts                 # Declaraciones de tipos globales
└── next.config.ts              # Configuración de Next.js
```

---

## Convenciones de código

### Componentes
- Todos los componentes son **Server Components** por defecto
- Usar `"use client"` solo cuando sea estrictamente necesario (interactividad, hooks, eventos del navegador)
- Mantener `"use client"` lo más abajo posible en el árbol de componentes
- Nomenclatura: PascalCase para el nombre del componente, kebab-case para el nombre del archivo
- Los componentes van en `/components`, agrupados por sección: `components/sections/`, `components/layout/`, `components/shared/`
- Siempre tipar props con `interface`, nunca con `type` para props de componentes
- Exportar los tipos desde el archivo del componente

```tsx
// ✅ Correcto
interface ProjectCardProps {
  title: string
  description: string
  tech: string[]
  url?: string
}

export function ProjectCard({ title, description, tech, url }: ProjectCardProps) { ... }
```

### TypeScript
- No usar `any`. Usar `unknown` si es necesario y luego hacer type narrowing
- Usar `type` solo para uniones/intersecciones: `type Theme = 'light' | 'dark'`
- Tipos globales van en `global.d.ts`
- Centralizar tipos de datos del portfolio (proyectos, experiencia) en `lib/`

```ts
// lib/projects.ts
export interface Project {
  id: string
  title: string
  description: string
  tech: string[]
  url?: string
  image?: string
}
```

### Server Components y fetching de datos
- Los Server Components pueden usar `async/await` directamente, sin `useEffect`
- Centralizar toda la lógica de fetch en `lib/`
- No importar código del servidor (variables secretas, lógica de DB) en Client Components

```tsx
// ✅ Fetch directo en Server Component
export default async function ProjectsSection() {
  const projects = await getProjects() // función definida en lib/projects.ts
  return <ProjectList projects={projects} />
}
```

### Rutas API
- Usar el patrón `/app/api/[recurso]/route.ts`
- Siempre retornar `NextResponse.json()` con status explícito
- Validar inputs con zod

### Estilos
- Mobile-first siempre: `sm:`, `md:`, `lg:`
- Usar las variables CSS de shadcn/ui para colores: `var(--foreground)`, `var(--background)`, etc.
- No hardcodear colores en hex, usar los tokens del design system
- Usar `cn()` de `lib/utils.ts` para clases condicionales

```tsx
import { cn } from '@/lib/utils'

<div className={cn('base-class', isActive && 'active-class', className)} />
```

### shadcn/ui
- Instalar componentes con el CLI: `npx shadcn@latest add [componente]`
- No editar los archivos dentro de `components/ui/` directamente
- Extender componentes de shadcn envolviéndolos en `components/shared/`

---

## Imágenes
- Siempre usar `next/image` en lugar de `<img>`
- Assets del portfolio van en `public/images/`
- Usar `priority` solo en imágenes above-the-fold (hero / LCP)

```tsx
import Image from 'next/image'

<Image
  src="/images/project-preview.png"
  alt="Preview del proyecto X"
  width={800}
  height={450}
  className="rounded-xl object-cover"
  priority
/>
```

---

## Metadata y SEO
- Metadata estática en `app/layout.tsx`, dinámica con `generateMetadata` en cada `page.tsx`

```tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Leandro Tosunian — Portfolio',
  description: 'Portfolio de desarrollo web — www.tosunian.dev',
  openGraph: {
    url: 'https://tosunian.dev',
    siteName: 'Leandro Tosunian',
    locale: 'es_AR',
    type: 'website',
  },
}
```

---

## Performance
- Preferir Server Components para reducir el JS enviado al cliente
- Usar `dynamic()` para componentes pesados (animaciones, librerías grandes)

```tsx
import dynamic from 'next/dynamic'

const HeavyAnimation = dynamic(() => import('@/components/sections/HeavyAnimation'), {
  ssr: false,
  loading: () => <div className="animate-pulse h-64 bg-muted rounded-xl" />,
})
```

---

## Accesibilidad
- Un solo `<h1>` por página; usar semántica correcta: `<nav>`, `<main>`, `<footer>`
- Todos los elementos interactivos deben tener texto descriptivo o atributos `aria-*`
- Imágenes decorativas con `alt=""`
- Usar `focus-visible` de Tailwind para estilos de foco accesibles
