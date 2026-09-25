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
import image_sacaturno_hero from '@/public/images/sacaturno/01-hero.webp'
import image_sacaturno_reservas_servicio from '@/public/images/sacaturno/02-reservas-servicio.webp'
import image_sacaturno_reservas_fecha from '@/public/images/sacaturno/03-reservas-fecha.webp'
import image_sacaturno_reservas_confirmar from '@/public/images/sacaturno/04-reservas-confirmar.webp'
import image_sacaturno_demo from '@/public/images/sacaturno/05-demo.webp'
import image_sacaturno_panel_inicio from '@/public/images/sacaturno/06-panel-inicio.webp'
import image_sacaturno_agenda from '@/public/images/sacaturno/07-agenda.webp'
import image_sacaturno_automatizar from '@/public/images/sacaturno/08-automatizar-agenda.webp'
import image_sacaturno_empleados from '@/public/images/sacaturno/09-empleados.webp'
import image_sacaturno_sucursales from '@/public/images/sacaturno/10-sucursales.webp'
import image_sacaturno_estadisticas from '@/public/images/sacaturno/11-estadisticas.webp'
import image_sacaturno_mercadopago from '@/public/images/sacaturno/12-mercadopago.webp'
import image_telovendo from '@/public/telovendo.png'
import image_telovendo2 from '@/public/telovendo_2.png'
import image_telovendo3 from '@/public/telovendo_3.png'
import image_telovendo4 from '@/public/telovendo_4.png'
import image_encino from '@/public/encino.png'
import image_cannabica from "@/public/cannabica.png"
import image_emartscreen1 from "@/public/emartscreen1.png"
import image_emartscreen2 from "@/public/emartscreen2.png"
import { IProject } from '@/app/interfaces/IProject'

// Landing → flujo público de reserva → demo → panel de un negocio en Plan Full
// (sucursales, empleados y señas activas)
const sacaturnoImages = [
  image_sacaturno_hero,
  image_sacaturno_reservas_servicio,
  image_sacaturno_reservas_fecha,
  image_sacaturno_reservas_confirmar,
  image_sacaturno_demo,
  image_sacaturno_panel_inicio,
  image_sacaturno_agenda,
  image_sacaturno_automatizar,
  image_sacaturno_empleados,
  image_sacaturno_sucursales,
  image_sacaturno_estadisticas,
  image_sacaturno_mercadopago,
]

// Solo datos estáticos — los textos (label, title, description)
// viven en messages/es.json y messages/en.json bajo Projects.items.{key}
export const projects: IProject[] = [
  {
    key: 'sacaturno',
    projectImages: sacaturnoImages,
    galleryImages: sacaturnoImages,
    link: 'https://sacaturno.com.ar',
    domain: 'sacaturno.com.ar',
    technologies: ['nextjs', 'typescript', 'tailwind', 'mongodb', 'node'],
  },
  {
    key: 'telovendo',
    projectImages: [image_telovendo, image_telovendo2, image_telovendo3, image_telovendo4],
    galleryImages: [image_telovendo, image_telovendo2, image_telovendo3, image_telovendo4],
    link: 'https://telovendosf.com.ar',
    domain: 'telovendo.com.ar',
    technologies: ['nextjs', 'typescript', 'tailwind', 'mongodb', 'node'],
  },
  {
    key: 'app420',
    projectImages: [image_420app1, image_420app2, image_420app3, image_420app8, image_420app8],
    galleryImages: [image_420app1, image_420app2, image_420app3, image_420app4, image_420app5, image_420app6, image_420app7, image_420app8, image_420app9],
    technologies: ['nextjs', 'typescript', 'tailwind', 'node'],
  },
  {
    key: 'altiva',
    projectImages: [image_altiva],
    galleryImages: [image_altiva],
    link: 'https://altivapropiedades.netlify.app/',
    domain: 'altivapropiedades.com.ar',
    technologies: ['nextjs', 'typescript', 'tailwind', 'node'],
  },
  {
    key: 'somacann',
    projectImages: [image_cannabica],
    galleryImages: [image_cannabica],
    link: 'https://somacann.netlify.app/',
    domain: 'cannabicagroup.com.ar',
    technologies: ['vue', 'express', 'node', 'mongodb'],
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
    technologies: ['vue', 'express', 'node', 'mongodb'],
  },
]