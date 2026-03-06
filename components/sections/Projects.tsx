"use client"
import React from 'react'
import { Globe } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'
import image_420app from '@/public/420app.png'
import image_420app2 from '@/public/420app2.png'
import image_altiva from '@/public/altiva.png'
import image_sacaturnoscreen from '@/public/sacaturnoscreen.png'
import image_telovendo from '@/public/telovendo.png'
import image_encino from '@/public/encino.png'
import image_cannabica from "@/public/cannabica.png"
import image_telovendopanel from "@/public/telovendopanel.png"
import image_emartscreen1 from "@/public/emartscreen1.png"
import image_emartscreen2 from "@/public/emartscreen2.png"
import Link from 'next/link'

// Technology Icons as SVG components
const TechIcons = {
  nextjs: () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.572 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z" />
    </svg>
  ),
  typescript: () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
    </svg>
  ),
  react: () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38a2.167 2.167 0 0 0-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44a23.476 23.476 0 0 0-3.107-.534A23.892 23.892 0 0 0 12.769 4.7c1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442a22.73 22.73 0 0 0-3.113.538 15.02 15.02 0 0 1-.254-1.42c-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87a25.64 25.64 0 0 1-4.412.005 26.64 26.64 0 0 1-1.183-1.86c-.372-.64-.71-1.29-1.018-1.946a25.17 25.17 0 0 1 1.013-1.954c.38-.66.773-1.286 1.18-1.868A25.245 25.245 0 0 1 12 8.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933a25.952 25.952 0 0 0-1.345-2.32zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493a23.966 23.966 0 0 0-1.1-2.98c.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98a23.142 23.142 0 0 0-1.086 2.964c-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39a25.819 25.819 0 0 0 1.341-2.338zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143a22.005 22.005 0 0 1-2.006-.386c.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295a1.185 1.185 0 0 1-.553-.132c-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
    </svg>
  ),
  tailwind: () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
    </svg>
  ),
  figma: () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z" />
    </svg>
  ),
  mongodb: () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z" />
    </svg>
  ),
  node: () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M11.998 24c-.321 0-.641-.084-.922-.247L8.14 22.016c-.438-.245-.224-.332-.08-.383.584-.203.702-.25 1.328-.604.065-.037.151-.023.218.017l2.256 1.339a.29.29 0 00.272 0l8.795-5.076a.277.277 0 00.134-.238V6.921a.283.283 0 00-.137-.242l-8.791-5.072a.278.278 0 00-.271 0L3.075 6.68a.284.284 0 00-.139.241v10.15c0 .099.053.19.139.236l2.409 1.392c1.307.653 2.108-.116 2.108-.89V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.111.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L2.28 18.675a1.857 1.857 0 01-.922-1.604V6.921c0-.659.353-1.275.922-1.603l8.795-5.082c.557-.315 1.296-.315 1.848 0l8.794 5.082c.57.329.924.944.924 1.603v10.15c0 .659-.354 1.273-.924 1.604l-8.794 5.078c-.28.163-.601.247-.925.247zm2.715-6.997c-3.857 0-4.664-1.77-4.664-3.255 0-.142.114-.253.256-.253h1.137c.126 0 .232.091.252.215.172 1.161.683 1.746 3.019 1.746 1.858 0 2.649-.42 2.649-1.404 0-.566-.224-.987-3.112-1.27-2.415-.237-3.91-.772-3.91-2.703 0-1.781 1.502-2.843 4.019-2.843 2.828 0 4.224.981 4.401 3.087a.256.256 0 01-.253.28h-1.142a.253.253 0 01-.245-.195c-.272-1.21-.931-1.597-2.761-1.597-2.034 0-2.271.709-2.271 1.24 0 .644.28.832 3.016 1.196 2.711.36 4.007.87 4.007 2.762 0 1.924-1.602 3.024-4.398 3.024z" />
    </svg>
  ),
}

type TechKey = keyof typeof TechIcons

interface Project {
  label: string
  title: string
  description: string
  imageUrl: StaticImageData
  link?: string
  domain?: string
  technologies: TechKey[]
}

const projects: Project[] = [
  {
    label: "SaaS",
    title: "SacaTurno - Turnos Online",
    description: "Servicio de software para gestionar turnos de forma online. Cuenta con 15 días de prueba gratuita. Luego, se paga una suscripción mensual a través de Mercado Pago, con activación automática. Solo tenés que crear tu cuenta, configurar tu negocio y servicios, y ya podés empezar a cargar turnos.",
    imageUrl: image_sacaturnoscreen,
    link: "https://sacaturno.com.ar",
    domain: "sacaturno.com.ar",
    technologies: ["nextjs", "typescript", "react", "tailwind", "mongodb"]
  },
  {
    label: "Catálogo Online",
    title: "Telovendo - Página Web con Catálogo",
    description: "Página web para Telovendo Santa Fé, dedicados a la venta de vehículos. El sitio cuenta con un diseño moderno y responsivo, con su página principal, un apartado de catálogo de vehículos y un formulario de contacto para enviar una solicitud de cotización. Todo el stock y el envío de consultas se gestionan desde un panel de administración privado, donde además cuenta con un CRM para gestión de clientes y un presupuestador digital, que genera un archivo PDF con un diseño profesional para descargar y enviar al cliente.",
    imageUrl: image_telovendo,
    link: "https://telovendo.com.ar",
    domain: "telovendo.com.ar",
    technologies: ["nextjs", "typescript", "react", "tailwind", "mongodb"]
  },
  {
    label: "CRM a medida",
    title: "Telovendo - CRM / Presupuestador Digital",
    description: "A comprehensive admin dashboard for managing the vehicle marketplace. Includes user management, vehicle listings moderation, analytics, and content management with a clean, intuitive interface.",
    imageUrl: image_telovendopanel,
    technologies: ["nextjs", "typescript", "react", "tailwind", "mongodb"]
  },
  {
    label: "Desarrollo a medida",
    title: "420app - Inventario y Pedidos",
    description: "420App es una aplicación web desarrollada para optimizar la administración de productos y pedidos. Permite aplicar ajustes de precios por porcentaje, definir márgenes de ganancia individuales y gestionar pedidos ágil y eficientemente. Es una herramienta para simplificar su gestión comercial diaria.",
    imageUrl: image_420app2,
    link: "https://420app.com",
    domain: "420app.com",
    technologies: ["nextjs", "typescript", "react", "tailwind", "node"]
  },
  {
    label: "Featured Project",
    title: "Altiva – Corporate Website",
    description: "A sleek corporate website showcasing professional services with modern design aesthetics. Features smooth animations, responsive layouts, and optimized performance for an exceptional user experience.",
    imageUrl: image_altiva,
    link: "https://altiva.com",
    domain: "altiva.com",
    technologies: ["nextjs", "typescript", "react", "tailwind"]
  },

  {
    label: "Featured Project",
    title: "Encino – Real Estate Platform",
    description: "A modern real estate platform featuring property listings, virtual tours, and agent management. Designed with an elegant interface that makes property search intuitive and engaging.",
    imageUrl: image_encino,
    link: "https://encino.com",
    domain: "encino.com",
    technologies: ["nextjs", "typescript", "react", "tailwind", "mongodb"]
  },
  {
    label: "Featured Project",
    title: "Cannabica – Cannabis E-commerce",
    description: "An e-commerce platform specialized for the cannabis industry with age verification, product categorization, and secure payment processing. Features a clean, modern design with intuitive navigation.",
    imageUrl: image_cannabica,
    link: "https://cannabica.com",
    domain: "cannabica.com",
    technologies: ["nextjs", "typescript", "react", "tailwind", "node"]
  },
  {
    label: "Featured Project",
    title: "E-Mart – Online Marketplace",
    description: "A versatile online marketplace platform with multi-vendor support, product reviews, and advanced filtering. Built for scalability with a focus on conversion optimization and user engagement.",
    imageUrl: image_emartscreen1,
    link: "https://e-mart.com",
    domain: "e-mart.com",
    technologies: ["nextjs", "typescript", "react", "tailwind", "mongodb"]
  },
  {
    label: "Featured Project",
    title: "E-Mart – Product Showcase",
    description: "The detailed product view and checkout experience for E-Mart, featuring high-quality imagery, customer reviews, and a streamlined purchasing process.",
    imageUrl: image_emartscreen2,
    link: "https://e-mart.com",
    domain: "e-mart.com",
    technologies: ["nextjs", "typescript", "react", "tailwind", "mongodb"]
  }
]

// Component for individual project card
const ProjectCard = ({ project, reverse = false }: { project: Project; reverse?: boolean }) => {
  return (
    <div className={`flex flex-col gap-8 lg:gap-16 min-w-0 w-full ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-start lg:items-center`}>
      {/* Text Content */}
      <div className="flex flex-col gap-6 lg:w-1/2">
        {/* Label */}
        <span className="text-sm font-medium tracking-wide text-purple-500 uppercase">
          {project.label}
        </span>

        {/* Title */}
        <h3 className="text-3xl font-bold leading-tight text-white lg:text-4xl xl:text-5xl text-balance">
          {project.title}
        </h3>

        {/* Description Card */}
        <div className="p-6 border rounded-2xl bg-zinc-900/80 border-zinc-800">
          <p className="leading-relaxed text-zinc-300">
            {project.description}
          </p>
        </div>

        {/* Domain Button and Tech Stack */}
        <div className="flex flex-wrap items-center gap-3">
          {project.link && project.domain && (
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors border rounded-full border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 bg-zinc-900/50"
            >
              <Globe className="w-4 h-4" />
              {project.domain}
            </Link>
          )}

          {/* Technology Icons */}
          <div className="flex items-center gap-2">
            {project.technologies.map((tech) => {
              const IconComponent = TechIcons[tech]
              return (
                <div
                  key={tech}
                  className="flex items-center justify-center w-10 h-10 transition-colors border rounded-full border-zinc-700 bg-zinc-900/50 text-zinc-400 hover:text-white hover:border-zinc-500"
                  title={tech.charAt(0).toUpperCase() + tech.slice(1)}
                >
                  <IconComponent />
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="relative w-full min-w-0 lg:w-1/2">
        <div className="relative overflow-hidden shadow-2xl rounded-xl aspect-video shadow-purple-500/10">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </div>
  )
}

// Main component to render featured projects
const Projects = () => {
  return (
    <section className="relative w-full px-6 py-20 overflow-x-hidden bg-background lg:px-12 xl:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-24 lg:gap-32">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
