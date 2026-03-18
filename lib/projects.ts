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

export const projects: IProject[] = [
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
        galleryImages: [image_420app1, image_420app2, image_420app3, image_420app4, image_420app5, image_420app6, image_420app7, image_420app8, image_420app9],
        technologies: ["nextjs", "typescript", "react", "tailwind", "node"]
    },
    {
        label: "Catálogo Corporativo",
        title: "Altiva Propiedades",
        description: "Aplicación web para Altiva Propiedades con interfaz responsive, landing institucional y módulo de listado de propiedades con filtros avanzados. Incluye gestión de formularios para captura de leads y un panel de administración privado con CRM inmobiliario para administrar propiedades, clientes y consultas, optimizando el seguimiento comercial.",
        projectImages: [image_altiva],
        galleryImages: [image_altiva],
        link: "https://altivapropiedades.netlify.app/",
        domain: "altivapropiedades.com.ar",
        technologies: ["nextjs", "typescript", "react", "tailwind"]
    },
    {
        label: "E-commerce",
        title: "Somacann",
        description: "E-commerce desarrollado sobre la plataforma propia E-Mart, con catálogo de productos, carrito de compras y checkout integrado con Mercado Pago. Implementa gestión de pedidos y flujo de compra optimizado, orientado a soluciones escalables para ventas online.",
        projectImages: [image_cannabica],
        galleryImages: [image_cannabica],
        link: "https://cannabicagroup.com.ar/",
        domain: "cannabicagroup.com.ar",
        technologies: ["nextjs", "typescript", "react", "tailwind", "node"]
    },
    {
        label: "Landing Page",
        title: "Encino Carpintería",
        description: "Landing page desarrollada a medida para Encino Carpintería, con foco en performance y experiencia de usuario. Implementa diseño responsive, optimización de assets, buenas prácticas de SEO y estructura orientada a métricas de rendimiento (Core Web Vitals). Incluye secciones dinámicas (galería, reseñas) y formularios de contacto para conversión.",
        projectImages: [image_encino],
        galleryImages: [image_encino],
        link: "https://encino-carpinteria.netlify.app/",
        domain: "encinocarpinteria.com.ar",
        technologies: ["nextjs", "typescript", "react", "tailwind", "mongodb"]
    },
    {
        label: "Plataforma e-commerce",
        title: "E-Mart ",
        description: "Plataforma e-commerce completa (eMart) con frontend de tienda y panel de administración. El storefront incluye catálogo con filtros avanzados (categorías, variantes, precio), carrito y checkout integrado con Mercado Pago, junto con autenticación de usuarios, historial de compras y seguimiento de pedidos. El backoffice permite la gestión integral del negocio: ABM de productos, manejo de categorías, configuración de envíos, administración de órdenes y automatización de notificaciones con tracking. Diseñada con arquitectura modular, manejo de estado y persistencia de datos para garantizar escalabilidad y consistencia operativa.",
        projectImages: [image_emartscreen1, image_emartscreen2],
        galleryImages: [image_emartscreen1, image_emartscreen2],
        technologies: ["nextjs", "typescript", "react", "tailwind", "mongodb"]
    }
]
