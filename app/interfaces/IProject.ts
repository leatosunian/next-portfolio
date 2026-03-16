import { TechIcons } from '@/components/ui/tech-icons'
import { StaticImageData } from 'next/image'
type TechKey = keyof typeof TechIcons

export interface Project {
    label: string
    title: string
    description: string
    projectImages: StaticImageData[]
    galleryImages: StaticImageData[]
    link?: string
    domain?: string
    technologies: TechKey[]
}