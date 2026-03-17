import { ICertificate } from "@/app/interfaces/ICertificate";
import image_ucip from "@/public/ucip_certificate.png";
import image_udemy from "@/public/udemy_certificate.png";

export const certificates: ICertificate[] = [
    {
        title: "HTML, CSS y JavaScript",
        issuer: "UCIP - Mar del Plata, Argentina",
        description:
            "Validated technical expertise in designing and deploying scalable, highly available, and fault-tolerant systems on AWS. Mastery of VPC, EC2, S3, and Serverless architectures.",
        image: image_ucip,
        imageAlt: "HTML, CSS y JavaScript",
        accentColor: "#c799ff",
        accentColorRgb: "199,153,255",
        reverse: false,
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
        reverse: true,
        link: "https://drive.google.com/file/d/1ZtkcU0WsRbd0nC97-q_SQXn1U8NzpafT/view",

    },
];