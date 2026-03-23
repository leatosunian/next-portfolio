import image_420app1 from '@/public/420app_1.png'
import image_420app2 from '@/public/420app_2.png'
import image_420app3 from '@/public/420app_3.png'
import image_420app4 from '@/public/420app_4.png'
import image_420app5 from '@/public/420app_5.png'
import image_420app6 from '@/public/420app_6.png'
import image_420app7 from '@/public/420app_7.png'
import image_420app8 from '@/public/420app_8.png'
import image_420app9 from '@/public/420app_9.png'
import image_altiva from '@/public/altiva.png'
import image_sacaturnoscreen from '@/public/sacaturnoscreen.png'
import image_telovendo from '@/public/telovendo.png'
import image_telovendo2 from '@/public/telovendo_2.png'
import image_telovendo3 from '@/public/telovendo_3.png'
import image_telovendo4 from '@/public/telovendo_4.png'
import image_encino from '@/public/encino.png'
import image_cannabica from "@/public/cannabica.png"
import image_emartscreen1 from "@/public/emartscreen1.png"
import image_emartscreen2 from "@/public/emartscreen2.png"
import { IProject } from '@/app/interfaces/IProject'

// Solo datos estáticos — los textos (label, title, description)
// viven en messages/es.json y messages/en.json bajo Projects.items.{key}
export const projects: IProject[] = [
  {
    key: 'sacaturno',
    projectImages: [image_sacaturnoscreen],
    galleryImages: [image_sacaturnoscreen],
    link: 'https://sacaturno.com.ar',
    domain: 'sacaturno.com.ar',
    technologies: ['nextjs', 'typescript', 'react', 'tailwind', 'mongodb'],
  },
  {
    key: 'telovendo',
    projectImages: [image_telovendo, image_telovendo2, image_telovendo3, image_telovendo4],
    galleryImages: [image_telovendo, image_telovendo2, image_telovendo3, image_telovendo4],
    link: 'https://telovendosf.com.ar',
    domain: 'telovendo.com.ar',
    technologies: ['nextjs', 'typescript', 'react', 'tailwind', 'mongodb'],
  },
  {
    key: 'app420',
    projectImages: [image_420app1, image_420app2, image_420app3, image_420app8, image_420app8],
    galleryImages: [image_420app1, image_420app2, image_420app3, image_420app4, image_420app5, image_420app6, image_420app7, image_420app8, image_420app9],
    technologies: ['nextjs', 'typescript', 'react', 'tailwind', 'node'],
  },
  {
    key: 'altiva',
    projectImages: [image_altiva],
    galleryImages: [image_altiva],
    link: 'https://altivapropiedades.netlify.app/',
    domain: 'altivapropiedades.com.ar',
    technologies: ['nextjs', 'typescript', 'react', 'tailwind'],
  },
  {
    key: 'somacann',
    projectImages: [image_cannabica],
    galleryImages: [image_cannabica],
    link: 'https://cannabicagroup.com.ar/',
    domain: 'cannabicagroup.com.ar',
    technologies: ['nextjs', 'typescript', 'react', 'tailwind', 'node'],
  },
  {
    key: 'encino',
    projectImages: [image_encino],
    galleryImages: [image_encino],
    link: 'https://encino-carpinteria.netlify.app/',
    domain: 'encinocarpinteria.com.ar',
    technologies: ['nextjs', 'typescript', 'react', 'tailwind', 'mongodb'],
  },
  {
    key: 'emart',
    projectImages: [image_emartscreen1, image_emartscreen2],
    galleryImages: [image_emartscreen1, image_emartscreen2],
    technologies: ['nextjs', 'typescript', 'react', 'tailwind', 'mongodb'],
  },
]