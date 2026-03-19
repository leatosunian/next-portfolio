import { ICertificate } from "@/app/interfaces/ICertificate";
import image_ucip from "@/public/ucip_certificate.png";
import image_udemy from "@/public/udemy_certificate.png";
import image_udemy2 from "@/public/udemy_certificate_2.png";

export const certificates: ICertificate[] = [
    {
        title: "HTML, CSS y JavaScript",
        issuer: "UCIP - Mar del Plata, Argentina",
        description:
            "Curso de 4 meses enfocado en los fundamentos del desarrollo web: estructura, estilos e interactividad desde cero.",
        image: image_ucip,
        imageAlt: "HTML, CSS y JavaScript",
        accentColor: "#c799ff",
        accentColorRgb: "199,153,255",
        reverse: true,
        link: "https://drive.google.com/file/d/10MVpqmaJ5-_z1ne3Ow-sxpSc3nrNCQoY/view",
    },
    {
        title: "JavaScript Full Stack MERN/MEVN",
        issuer: "Udemy",
        description:
            "Desarrollo web full stack con JavaScript, abarcando tanto el frontend como el backend. En el frontend, se utilizan React y Vue.js para crear interfaces de usuario dinámicas y responsivas. En el backend, se emplea Node.js con Express para construir APIs robustas y eficientes. Además, se integra MongoDB como base de datos NoSQL para almacenar y gestionar datos de manera flexible. El curso también cubre temas esenciales como autenticación, despliegue y mejores prácticas en el desarrollo web moderno.",
        image: image_udemy,
        imageAlt: "JavaScript Full Stack MERN/MEVN",
        accentColor: "#ea9bff",
        accentColorRgb: "234,155,255",
        reverse: false,
        link: "https://drive.google.com/file/d/1ZtkcU0WsRbd0nC97-q_SQXn1U8NzpafT/view",

    },
    {
        title: "Full Stack React, Next.js y Node.js con TypeScript ",
        issuer: "Udemy",
        description:
            "Formación integral en desarrollo Full Stack con React y TypeScript, cubriendo desde los fundamentos (useState, hooks esenciales) hasta arquitecturas modernas con Next.js 14 y Server Actions. Incluye manejo de estado global con Context API y Zustand, consumo de APIs, validación con Zod y formularios con React Hook Form. En el backend, desarrollo de APIs con Node.js, Express y bases de datos MongoDB (Mongoose) y PostgreSQL (Prisma), implementando autenticación, autorización y gestión de roles. Además, se trabajan herramientas clave como React Query, Tailwind CSS y Headless UI para construir aplicaciones escalables, performantes y listas para producción.",
        image: image_udemy2,
        imageAlt: "React con TypeScript Full Stack MERN",
        accentColor: "#ea9bff",
        accentColorRgb: "234,155,255",
        reverse: true,
        link: "https://udemy-certificate.s3.amazonaws.com/image/UC-acdcb876-9d14-4e16-84a0-b29528e910a9.jpg",

    },

];