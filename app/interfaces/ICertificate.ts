import { StaticImageData } from 'next/image'

export interface ICertificate {
    title: string;
    issuer: string;
    description: string;
    image: StaticImageData;
    imageAlt: string;
    accentColor: string;
    accentColorRgb: string;
    reverse: boolean;
    link?: string;
}