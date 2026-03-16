---
agent: 'agent'  
description: 'Hace un code review del archivo actual'
---

Revisá el archivo actual: ${file}

Checklist de review:
- [ ] TypeScript correcto, sin `any`
- [ ] Convenciones de nomenclatura del proyecto
- [ ] Accesibilidad básica (aria, semántica HTML)
- [ ] Performance (¿debería ser Server Component?)
- [ ] Estilos con Tailwind bien estructurados
- [ ] Manejo de errores