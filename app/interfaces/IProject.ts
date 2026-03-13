import { TechIcons } from '@/components/ui/tech-icons'
import Image, { StaticImageData } from 'next/image'
type TechKey = keyof typeof TechIcons

export interface Project {
    label: string
    title: string
    description: string
    imageUrl: StaticImageData
    link?: string
    domain?: string
    technologies: TechKey[]
}
