"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ICertificate } from "@/app/interfaces/ICertificate";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export function CertificateCard({
  image,
  imageAlt,
  accentColor,
  link,
  accentColorRgb,
  reverse,
  title,
  issuer,
  description,
}: Omit<ICertificate, 'key'> & {
  title: string;
  issuer: string;
  description: string;
}) {
  const t = useTranslations("Certificates");

  return (
    <article className="relative group">
      {/* Decorative glow */}
      <div
        className="absolute -inset-10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{ backgroundColor: `rgba(${accentColorRgb},0.05)` }}
      />

      <div
        className={`relative z-10 flex flex-col gap-10 md:items-center ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        {/* Image */}
        <motion.div
          className="relative flex-1 overflow-hidden rounded-xl aspect-4/3"
          style={{
            backgroundColor: "#1f1f22",
            boxShadow: "0px 0px 40px 0px rgba(199,153,255,0.08)",
          }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4 }}
        >
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover transition-all duration-700 scale-105 grayscale group-hover:grayscale-0 group-hover:scale-100"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Inner ring */}
          <div
            className="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset"
            style={{ boxShadow: "inset 0 0 0 1px rgba(72,71,74,0.2)" }}
          />
        </motion.div>

        {/* Content */}
        <motion.div
          className={`flex-1 space-y-6 ${reverse ? "md:text-right" : ""}`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.div
            className="space-y-2"
            variants={fadeInUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
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
          </motion.div>

          <motion.p
            className="leading-relaxed"
            style={{ color: "#adaaad", fontFamily: "Inter, sans-serif" }}
            variants={fadeInUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {description}
          </motion.p>

          <motion.div
            className={`pt-4 ${reverse ? "flex md:justify-end" : ""}`}
            variants={fadeInUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Link
              href={link}
              target="_blank"
              className="group flex cursor-none items-center w-fit gap-2 rounded-xl border border-purple-500/20 bg-[#1f1f22] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-purple-500/30 hover:bg-purple-500 hover:text-white whitespace-nowrap"
            >
              <Download size={18} />
              {t("downloadButton")}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </article>
  );
}