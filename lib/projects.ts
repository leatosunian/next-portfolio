import Image, { StaticImageData } from 'next/image'
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
import { Project } from '@/app/interfaces/IProject'

export const projects: Project[] = [
    {
        label: "SaaS Turnos Online",
        title: "SacaTurno",
        description: "Servicio de software para gestionar turnos de forma online. Cuenta con 15 días de prueba gratuita. Luego, se paga una suscripción mensual a través de Mercado Pago, con activación automática. Solo tenés que crear tu cuenta, configurar tu negocio y servicios, y ya podés empezar a cargar turnos.",
        projectImages: [image_sacaturnoscreen],
        galleryImages: [image_sacaturnoscreen],
        link: "https://sacaturno.com.ar",
        domain: "sacaturno.com.ar",
        technologies: ["nextjs", "typescript", "react", "tailwind", "mongodb"]
    },
    {
        label: "Catálogo Online",
        title: "Telovendo Santa Fé",
        description: "Página web para Telovendo Santa Fé, dedicados a la venta de vehículos. El sitio cuenta con un diseño moderno y responsivo, con su página principal, un apartado de catálogo de vehículos y un formulario de contacto para enviar una solicitud de cotización. Todo el stock y el envío de consultas se gestionan desde un panel de administración privado, donde además cuenta con un CRM para gestión de clientes y un presupuestador digital, que genera un archivo PDF con un diseño profesional para descargar y enviar al cliente.",
        projectImages: [image_telovendo, image_telovendo2, image_telovendo3, image_telovendo4],
        galleryImages: [image_telovendo, image_telovendo2, image_telovendo3, image_telovendo4],
        link: "https://telovendosf.com.ar",
        domain: "telovendo.com.ar",
        technologies: ["nextjs", "typescript", "react", "tailwind", "mongodb"]
    },
    {
        label: "Desarrollo a medida",
        title: "420app - Inventario y Pedidos",
        description: "420App es una aplicación web desarrollada a medida para optimizar la administración de productos y pedidos. Gracias al relevamiento de las necesidades del negocio, es una herramienta para simplificar su gestión comercial diaria. Permite aplicar ajustes de precios por porcentaje, definir márgenes de ganancia individuales y gestionar pedidos ágil y eficientemente.",
        projectImages: [image_420app1, image_420app2, image_420app3, image_420app8, image_420app8],
        galleryImages: [image_420app1, image_420app2, image_420app3, image_420app8, image_420app8],
        technologies: ["nextjs", "typescript", "react", "tailwind", "node"]
    },
    {
        label: "Catálogo Corporativo",
        title: "Altiva Propiedades",
        description: "A sleek corporate website showcasing professional services with modern design aesthetics. Features smooth animations, responsive layouts, and optimized performance for an exceptional user experience.",
        projectImages: [image_altiva],
        galleryImages: [image_altiva],
        link: "https://altivapropiedades.netlify.app/",
        domain: "altivapropiedades.com.ar",
        technologies: ["nextjs", "typescript", "react", "tailwind"]
    },
    {
        label: "E-commerce",
        title: "Somacann",
        description: "An e-commerce platform specialized for the cannabis industry with age verification, product categorization, and secure payment processing. Features a clean, modern design with intuitive navigation.",
        projectImages: [image_cannabica],
        galleryImages: [image_cannabica],
        link: "https://cannabicagroup.com.ar/",
        domain: "cannabicagroup.com.ar",
        technologies: ["nextjs", "typescript", "react", "tailwind", "node"]
    },
    {
        label: "Landing Page",
        title: "Encino Carpintería",
        description: "Página web corporativa para un taller de carpintería, con un diseño moderno y minimalista desarrollada para convertir las visitas a la web a nuevos clientes.",
        projectImages: [image_encino],
        galleryImages: [image_encino],
        link: "https://encino-carpinteria.netlify.app/",
        domain: "encinocarpinteria.com.ar",
        technologies: ["nextjs", "typescript", "react", "tailwind", "mongodb"]
    },
    {
        label: "Plataforma e-commerce",
        title: "E-Mart ",
        description: "A versatile online marketplace platform with multi-vendor support, product reviews, and advanced filtering. Built for scalability with a focus on conversion optimization and user engagement.",
        projectImages: [image_emartscreen1, image_emartscreen2],
        galleryImages: [image_emartscreen1, image_emartscreen2],
        technologies: ["nextjs", "typescript", "react", "tailwind", "mongodb"]
    }
]
