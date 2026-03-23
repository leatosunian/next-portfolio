import { StaticImageData } from 'next/image';

export interface ICertificate {
  key: string              
  image: StaticImageData;
  imageAlt: string;        
  accentColor: string;
  accentColorRgb: string;
  reverse: boolean;
  link: string;
}