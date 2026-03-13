"use client"
import React from 'react'
import { Globe } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'
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
import { Project } from '@/app/interfaces/IProject'
import { ProjectCard } from './ProjectCard'






const projects: Project[] = [
  {
    label: "SaaS",
    title: "SacaTurno - Turnos Online",
    description: "Servicio de software para gestionar turnos de forma online. Cuenta con 15 días de prueba gratuita. Luego, se paga una suscripción mensual a través de Mercado Pago, con activación automática. Solo tenés que crear tu cuenta, configurar tu negocio y servicios, y ya podés empezar a cargar turnos.",
    images: [image_sacaturnoscreen],
    link: "https://sacaturno.com.ar",
    domain: "sacaturno.com.ar",
    technologies: ["nextjs", "typescript", "react", "tailwind", "mongodb"]
  },
  {
    label: "Catálogo Online",
    title: "Telovendo - Página Web con Catálogo",
    description: "Página web para Telovendo Santa Fé, dedicados a la venta de vehículos. El sitio cuenta con un diseño moderno y responsivo, con su página principal, un apartado de catálogo de vehículos y un formulario de contacto para enviar una solicitud de cotización. Todo el stock y el envío de consultas se gestionan desde un panel de administración privado, donde además cuenta con un CRM para gestión de clientes y un presupuestador digital, que genera un archivo PDF con un diseño profesional para descargar y enviar al cliente.",
    images: [image_telovendo, image_telovendopanel],
    link: "https://telovendo.com.ar",
    domain: "telovendo.com.ar",
    technologies: ["nextjs", "typescript", "react", "tailwind", "mongodb"]
  },
  {
    label: "Desarrollo a medida",
    title: "420app - Inventario y Pedidos",
    description: "420App es una aplicación web desarrollada para optimizar la administración de productos y pedidos. Permite aplicar ajustes de precios por porcentaje, definir márgenes de ganancia individuales y gestionar pedidos ágil y eficientemente. Es una herramienta para simplificar su gestión comercial diaria.",
    images: [image_420app2],
    link: "https://420app.com",
    domain: "420app.com",
    technologies: ["nextjs", "typescript", "react", "tailwind", "node"]
  },
  {
    label: "Página Corporativa",
    title: "Altiva - Sitio Web Corporativo",
    description: "A sleek corporate website showcasing professional services with modern design aesthetics. Features smooth animations, responsive layouts, and optimized performance for an exceptional user experience.",
    images: [image_altiva],
    link: "https://altiva.com",
    domain: "altiva.com",
    technologies: ["nextjs", "typescript", "react", "tailwind"]
  },
  {
    label: "Real Estate",
    title: "Encino - Plataforma Inmobiliaria",
    description: "A modern real estate platform featuring property listings, virtual tours, and agent management. Designed with an elegant interface that makes property search intuitive and engaging.",
    images: [image_encino],
    link: "https://encino.com",
    domain: "encino.com",
    technologies: ["nextjs", "typescript", "react", "tailwind", "mongodb"]
  },
  {
    label: "E-commerce",
    title: "Cannabica - E-commerce",
    description: "An e-commerce platform specialized for the cannabis industry with age verification, product categorization, and secure payment processing. Features a clean, modern design with intuitive navigation.",
    images: [image_cannabica],
    link: "https://cannabica.com",
    domain: "cannabica.com",
    technologies: ["nextjs", "typescript", "react", "tailwind", "node"]
  },
  {
    label: "Marketplace",
    title: "E-Mart - Marketplace Online",
    description: "A versatile online marketplace platform with multi-vendor support, product reviews, and advanced filtering. Built for scalability with a focus on conversion optimization and user engagement.",
    images: [image_emartscreen1, image_emartscreen2],
    link: "https://e-mart.com",
    domain: "e-mart.com",
    technologies: ["nextjs", "typescript", "react", "tailwind", "mongodb"]
  }
]



// Main component to render featured projects
const Projects = () => {
  return (
    <section className="relative w-full px-6 py-20 overflow-x-hidden bg-background lg:px-12 xl:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-10 ">
          {/* title */}
          <div className="relative mb-16 lg:mb-24">
            <div className="flex items-stretch">
              {/* Vertical gradient line */}
              <div
                className="w-1 mr-4 rounded-full shrink-0"
                style={{
                  background: 'linear-gradient(to bottom, #a855f7, #7c3aed, #6d28d9)',
                  minHeight: '100%'
                }}
              />
              {/* Title with gradient */}
              <h1
                className="text-5xl font-bold sm:text-8xl lg:text-7xl"
                style={{
                  background: 'linear-gradient(to right, #ffffff 0%, #ffffff 40%, #a855f7 70%, #7c3aed 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Proyectos
              </h1>
            </div>
          </div>

          {/* Project Cards */}
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
      </div>
    </section>
  )
}

export default Projects
