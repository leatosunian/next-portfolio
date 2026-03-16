---
applyTo: "components/**"
---

# Convenciones de Componentes

Cuando crees un componente en este proyecto:

1. **Estructura del archivo**:
```tsx
// Primero los imports de Next/React
import { ... } from 'next/...'

// Luego los imports de shadcn/ui
import { ... } from '@/components/ui/...'

// Luego imports propios
import { ... } from '@/components/...'

// Interface de props al inicio
interface Props {
  ...
}

// Export nombrado, no default
export function NombreComponente({ ...props }: Props) {
  ...
}
```

2. **Si el componente necesita animación**, usar Framer Motion con `motion.div`
3. **Si el componente tiene datos**, recibirlos por props, no fetchear dentro del componente
4. **Accesibilidad**: siempre incluir `aria-label` en elementos interactivos