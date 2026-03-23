import { TechIcons } from '@/components/ui/tech-icons'
import { StaticImageData } from 'next/image'

type TechKey = keyof typeof TechIcons

export interface IProject {
  key: string // clave única para cada proyecto, usada para traducciones y como id
  projectImages: StaticImageData[]
  galleryImages: StaticImageData[]
  link?: string
  domain?: string
  technologies: TechKey[]
}