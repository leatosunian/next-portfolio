"use client";

import { motion } from "framer-motion";
import { certificates } from "@/lib/certificates";
import { CertificateCard } from "./CertificateCard";
import Image from "next/image";
import { ArrowRight, GraduationCap, MapPin } from "lucide-react";
import Link from "next/link";
import image_utn from "@/public/utn.png";
import { useTranslations } from "next-intl";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

export default function Certificates() {
  const t = useTranslations("certificates");
  
  return (
    <section
      className="min-h-screen"
      id="certificates"
      style={{ color: "#fffbfe" }}
    >
      <div className="px-6 mx-auto py-26 max-w-7xl">
        {/* Header */}
        <motion.header 
          className="mb-24 space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.div 
            className="flex items-center gap-4"
            variants={fadeInUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="w-8 h-px bg-purple-500" />
            <span
              className="text-purple-500 text-xs font-bold uppercase tracking-[0.2em]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {t("sectionLabel")}
            </span>
          </motion.div>

          <motion.h1
            className="max-w-4xl text-5xl font-extrabold leading-none tracking-tighter md:text-7xl"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {t("title")} <span className="text-purple-500">{t("titleHighlight")}</span>
          </motion.h1>

          <motion.p
            className="max-w-2xl mt-8 text-lg leading-relaxed"
            style={{ color: "#adaaad", fontFamily: "Inter, sans-serif" }}
            variants={fadeInUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {t("description")}
          </motion.p>
        </motion.header>

        {/* Certificates list */}
        <div className="flex flex-col gap-24">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.translationKey}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
            >
              <CertificateCard {...cert} />
            </motion.div>
          ))}

          {/* ── UTN card (hardcoded) ────────────────────────────────────── */}
          <motion.article 
            className="relative group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Decorative glow */}
            <div
              className="absolute -inset-10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
              style={{ backgroundColor: "rgba(199,153,255,0.05)" }}
            />

            <div className="relative z-10 flex flex-col gap-10 md:items-center md:flex-row">
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
                  src={image_utn}
                  alt="UTN Facultad Regional Mar del Plata"
                  fill
                  className="object-cover transition-all duration-700 scale-105 grayscale group-hover:grayscale-0 group-hover:scale-100"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* Graduation cap icon — bottom-left, same as mockup */}
                <div className="absolute text-purple-500 bottom-4 left-4 opacity-80">
                  <GraduationCap size={28} />
                </div>

                {/* Inner ring */}
                <div
                  className="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset"
                  style={{ boxShadow: "inset 0 0 0 1px rgba(72,71,74,0.2)" }}
                />
              </motion.div>

              {/* Content */}
              <motion.div 
                className="flex-1 space-y-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={staggerContainer}
              >
                {/* Top row: badge + location */}
                <motion.div 
                  className="flex flex-wrap items-center justify-between gap-4"
                  variants={fadeInUp}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <span
                    className="inline-block rounded-full border border-purple-500/40 bg-purple-500/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] text-purple-400"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {t("utn.badge")}
                  </span>

                  <span
                    className="flex items-center gap-1.5 text-sm"
                    style={{ color: "#adaaad", fontFamily: "Inter, sans-serif" }}
                  >
                    <MapPin size={16} className="text-purple-500/70" />
                    {t("utn.location")}
                  </span>
                </motion.div>

                {/* Title + issuer */}
                <motion.div 
                  className="space-y-2"
                  variants={fadeInUp}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <h2
                    className="text-3xl font-bold leading-snug"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {t("utn.title")}
                  </h2>
                  <p
                    className="font-medium"
                    style={{ color: "#c799ff", fontFamily: "Inter, sans-serif" }}
                  >
                    {t("utn.issuer")}
                  </p>
                </motion.div>

                {/* Description */}
                <motion.p
                  className="leading-relaxed"
                  style={{ color: "#adaaad", fontFamily: "Inter, sans-serif" }}
                  variants={fadeInUp}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  {t("utn.description")}
                </motion.p>

                {/* CTA + stats row */}
                <motion.div 
                  className="flex flex-wrap items-center gap-6 pt-4"
                  variants={fadeInUp}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href="https://mdp.utn.edu.ar/wp-content/uploads/2021/02/plan-de-estudio-tecnico-universitario-en-programacion-plan-2024.pdf"
                      target="_blank"
                      className="flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 bg-purple-500 rounded-xl hover:bg-purple-600 whitespace-nowrap"
                    >
                      {t("utn.viewPlan")}
                      <ArrowRight size={16} />
                    </Link>
                  </motion.div>

                  {/* Stats */}
                  <div className="flex items-center gap-8">
                    <div className="space-y-0.5">
                      <p
                        className="text-[10px] font-bold uppercase tracking-[0.15em]"
                        style={{ color: "#6b6a6e", fontFamily: "Inter, sans-serif" }}
                      >
                        {t("utn.status")}
                      </p>
                      <p
                        className="text-sm font-semibold"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        {t("utn.statusValue")}
                      </p>
                    </div>

                    <div className="space-y-0.5">
                      <p
                        className="text-[10px] font-bold uppercase tracking-[0.15em]"
                        style={{ color: "#6b6a6e", fontFamily: "Inter, sans-serif" }}
                      >
                        {t("utn.average")}
                      </p>
                      <p
                        className="text-sm font-semibold"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        {t("utn.averageValue")}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.article>
          {/* ── fin UTN card ──────────────────────────────────────────────── */}
        </div>
      </div>
    </section>
  );
}
