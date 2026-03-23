import { ICertificate } from "@/app/interfaces/ICertificate";
import image_ucip from "@/public/ucip_certificate.png";
import image_udemy from "@/public/udemy_certificate.png";
import image_udemy2 from "@/public/udemy_certificate_2.png";

// Solo datos estáticos — title, issuer y description
// viven en messages/es.json y en.json bajo Certificates.items.{key}
export const certificates: ICertificate[] = [
  {
    key: "ucip",
    image: image_ucip,
    imageAlt: "UCIP - HTML, CSS y JavaScript",
    accentColor: "#c799ff",
    accentColorRgb: "199,153,255",
    reverse: true,
    link: "https://drive.google.com/file/d/10MVpqmaJ5-_z1ne3Ow-sxpSc3nrNCQoY/view",
  },
  {
    key: "udemy1",
    image: image_udemy,
    imageAlt: "Udemy - JavaScript Full Stack MERN/MEVN",
    accentColor: "#ea9bff",
    accentColorRgb: "234,155,255",
    reverse: false,
    link: "https://drive.google.com/file/d/1ZtkcU0WsRbd0nC97-q_SQXn1U8NzpafT/view",
  },
  {
    key: "udemy2",
    image: image_udemy2,
    imageAlt: "Udemy - Full Stack React, Next.js y Node.js con TypeScript",
    accentColor: "#ea9bff",
    accentColorRgb: "234,155,255",
    reverse: true,
    link: "https://udemy-certificate.s3.amazonaws.com/image/UC-acdcb876-9d14-4e16-84a0-b29528e910a9.jpg",
  },
];