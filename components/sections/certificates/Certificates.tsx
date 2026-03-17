import Image from "next/image";
import { Download } from "lucide-react";
import { certificates } from "@/lib/certificates";
import { CertificateCard } from "./CertificateCard";

export default function Certificates() {
  return (
    <section
      className="min-h-screen"
      style={{ backgroundColor: "#0e0e10", color: "#fffbfe" }}
    >
      <div className="px-6 py-24 mx-auto max-w-7xl">
        {/* Header — same style as TechStack */}
        <header className="mb-24 space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-8 h-px bg-purple-500" />
            <span
              className="text-purple-500 text-xs font-bold uppercase tracking-[0.2em]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Certificaciones
            </span>
          </div>

          <h1
            className="max-w-4xl text-5xl font-extrabold leading-none tracking-tighter md:text-7xl"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Mis{" "}
            <span className="text-purple-500">Certificaciones</span>
          </h1>

          <p
            className="max-w-2xl mt-8 text-lg leading-relaxed"
            style={{ color: "#adaaad", fontFamily: "Inter, sans-serif" }}
          >
            A curated selection of certifications that validate my expertise in
            modern full-stack engineering and cloud architecture.
          </p>
        </header>

        {/* Certificates list */}
        <div className="flex flex-col gap-24">
          {certificates.map((cert) => (
            <CertificateCard key={cert.title} {...cert} />
          ))}
        </div>
      </div>
    </section>
  );
}

