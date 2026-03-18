"use client"
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Link from "next/link";

// ─── Download Button ──────────────────────────────────────────────────────────

export function DownloadButton({
    accentColor,
    accentColorRgb,
    reverse,
}: {
    accentColor: string;
    accentColorRgb: string;
    reverse: boolean;
}) {
    return (
        <div
            onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.backgroundColor = "#1a191d";
                (e.currentTarget as HTMLDivElement).style.borderColor =
                    "rgba(199,153,255,0.2)";
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 0 20px 0 rgba(199,153,255,0.05)";
                (e.currentTarget as HTMLDivElement).style.color = "black";

            }}
            onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.backgroundColor = "#1a191d";
                (e.currentTarget as HTMLDivElement).style.borderColor = "transparent";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                (e.currentTarget as HTMLDivElement).style.color = "white";
            }}
            className={`group/btn flex items-center gap-3 text-sm font-medium cursor-none  bg-[#131316]  w-fit transition-all border duration-300 rounded-lg shadow-sm p-3.5  ${reverse ? "flex-row-reverse" : ""
                }`}
            style={{ fontFamily: "Inter, sans-serif", borderColor: "rgba(72,71,74,0.05)" }}
        >
            <Link
                href="/path/to/certificate.pdf"
                target="_blank"
                className="transition-all rounded-lg shadow-sm "

            >
                <Download color="#a855f7" size={18} />
            </Link>
            <span className="font-medium tracking-wide text-purple-500">Descargar Certificado</span>
        </div>
    );
}
