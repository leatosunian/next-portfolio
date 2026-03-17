import Image from "next/image";
import { DownloadButton } from "./DownloadButton";
import { ICertificate } from "@/app/interfaces/ICertificate";

export function CertificateCard({
  title,
  issuer,
  description,
  image,
  imageAlt,
  accentColor,
  accentColorRgb,
  reverse,
}: ICertificate) {
  return (
    <article className="relative group">
      {/* Decorative glow */}
      <div
        className="absolute -inset-10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{ backgroundColor: `rgba(${accentColorRgb},0.05)` }}
      />

      <div
        className={`relative z-10 flex flex-col gap-10 md:items-center ${reverse ? "md:flex-row-reverse" : "md:flex-row"
          }`}
      >
        {/* Image */}
        <div
          className="relative flex-1 overflow-hidden rounded-xl aspect-4/3"
          style={{
            backgroundColor: "#1f1f22",
            boxShadow: "0px 0px 40px 0px rgba(199,153,255,0.08)",
          }}
        >
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover transition-all duration-700 scale-105 grayscale group-hover:grayscale-0 group-hover:scale-100"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* inner ring */}
          <div
            className="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset"
            style={{ boxShadow: "inset 0 0 0 1px rgba(72,71,74,0.2)" }}
          />
        </div>

        {/* Content */}
        <div
          className={`flex-1 space-y-6 ${reverse ? "md:text-right" : ""}`}
        >
          <div className="space-y-2">
            <h2
              className="text-3xl font-bold leading-snug"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              {title}
            </h2>
            <p
              className="font-medium"
              style={{ color: accentColor, fontFamily: "Inter, sans-serif" }}
            >
              {issuer}
            </p>
          </div>

          <p
            className="leading-relaxed"
            style={{ color: "#adaaad", fontFamily: "Inter, sans-serif" }}
          >
            {description}
          </p>

          <div className={`pt-4 ${reverse ? "flex md:justify-end" : ""}`}>
            <DownloadButton
              accentColor={accentColor}
              accentColorRgb={accentColorRgb}
              reverse={reverse}
            />
          </div>
        </div>
      </div>
    </article>
  );
}