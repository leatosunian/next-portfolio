"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Wrench,
  FileCode,
  Palette,
  Braces,
  Coffee,
  Globe,
  Compass,
  GitBranch,
  Database,
  Pen,
  Code,
  Network,
  Monitor,
  Layers,
  LayoutGrid,
  HardDrive,
  Shield,
  ArrowLeftRight,
  Brush,
  Box,
  Share2,
} from "lucide-react";

// ─── Animation Variants ──────────────────────────────────────────────────────

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

const cardStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.15
    }
  }
};

// ─── Data ────────────────────────────────────────────────────────────────────

const languages = [
  { icon: <FileCode size={32} />, label: "HTML5" },
  { icon: <Palette size={32} />, label: "CSS3" },
  { icon: <Braces size={32} />, label: "TypeScript" },
  { icon: <Coffee size={32} />, label: "Java" },
];

const tools = [
  { icon: <Globe size={20} />, label: "Postman" },
  { icon: <Compass size={20} />, label: "MongoDB Compass" },
  { icon: <GitBranch size={20} />, label: "GitHub" },
  { icon: <Database size={20} />, label: "SQL Workbench" },
  { icon: <Pen size={20} />, label: "Figma" },
];

const frameworks = [
  { icon: <Code size={32} />, label: "Node.js" },
  { icon: <Network size={32} />, label: "Express.js" },
  { icon: <Monitor size={32} />, label: "React.js" },
  { icon: <Layers size={32} />, label: "Next.js" },
  { icon: <LayoutGrid size={32} />, label: "Vue.js" },
  { icon: <HardDrive size={32} />, label: "MongoDB" },
  { icon: <Database size={32} />, label: "MySQL" },
  { icon: <Brush size={32} />, label: "Tailwind" },
  { icon: <Box size={32} />, label: "Shadcn" },
  { icon: <Shield size={32} />, label: "JWT" },
  { icon: <ArrowLeftRight size={32} />, label: "Socket.io" },
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function TechStack() {
  return (
    <section
      className="min-h-screen"
      id="tech-stack"
      style={{ backgroundColor: "#0e0e10", color: "#fffbfe" }}
    >
      <div className="px-6 py-24 mx-auto max-w-7xl">
        {/* Header */}
        <motion.header 
          className="space-y-4 mb-15"
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
              className="text-xs font-bold uppercase text-purple-500 tracking-[0.2em]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Concimientos
            </span>
          </motion.div>

          <motion.h1
            className="max-w-4xl text-5xl font-extrabold leading-none tracking-tighter md:text-7xl"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Tech <span className="text-purple-500">Stack</span>
          </motion.h1>

          <motion.p
            className="max-w-2xl mt-8 text-lg leading-relaxed"
            style={{ color: "#adaaad", fontFamily: "Inter, sans-serif" }}
            variants={fadeInUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            Conjunto de tecnologías que utilizo para construir aplicaciones web
            escalables y de alto rendimiento
          </motion.p>
        </motion.header>

        {/* Bento Grid */}
        <div className="grid items-start grid-cols-1 gap-6 md:grid-cols-12">
          {/* ── Lenguajes ── */}
          <motion.section
            className="h-full p-8 border md:col-span-4 rounded-xl"
            style={{
              backgroundColor: "#131316",
              borderColor: "rgba(72,71,74,0.1)",
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="flex items-center justify-between mb-10">
              <h2
                className="text-2xl font-bold"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Lenguajes
              </h2>
              <Code2 style={{ color: "#c799ff" }} size={22} />
            </div>

            <motion.div 
              className="grid grid-cols-2 gap-4"
              variants={cardStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {languages.map(({ icon, label }, index) => (
                <motion.div
                  key={label}
                  variants={fadeInUp}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <LanguageCard icon={icon} label={label} />
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* ── Herramientas ── */}
          <motion.section
            className="relative h-full p-8 overflow-hidden border md:col-span-8 rounded-xl"
            style={{
              backgroundColor: "#1f1f22",
              borderColor: "rgba(72,71,74,0.1)",
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          >
            {/* decorative blur */}
            <div
              className="absolute top-0 right-0 w-32 h-32 translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
              style={{ backgroundColor: "rgba(234,155,255,0.05)" }}
            />

            <div className="flex items-center justify-between mb-10">
              <h2
                className="text-2xl font-bold"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Herramientas
              </h2>
              <Wrench style={{ color: "#ea9bff" }} size={22} />
            </div>

            <motion.div 
              className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5"
              variants={cardStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {tools.map(({ icon, label }) => (
                <motion.div
                  key={label}
                  variants={fadeInUp}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <ToolCard icon={icon} label={label} />
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* ── Technologies & Frameworks ── */}
          <motion.section
            className="relative p-10 mt-6 overflow-hidden border md:col-span-12 rounded-xl"
            style={{
              backgroundColor: "#19191c",
              borderColor: "rgba(72,71,74,0.1)",
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeInUp}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          >
            {/* decorative blur */}
            <div
              className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full blur-[100px]"
              style={{ backgroundColor: "rgba(199,153,255,0.1)" }}
            />

            <div className="flex flex-col items-start justify-between gap-8 mb-12 md:flex-row md:items-center">
              <div>
                <h2
                  className="text-3xl font-bold"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Frameworks
                </h2>
                <p
                  className="max-w-lg mt-2 text-sm"
                  style={{ color: "#adaaad" }}
                >
                  Tecnologías que utilizo para construir desde la interfaz hasta el servidor.
                </p>
              </div>

              <div className="flex gap-2">
                {[
                  <Layers key="layers" size={18} />,
                  <Share2 key="hub" size={18} />,
                ].map((icon, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-center w-10 h-10 rounded-full"
                    style={{
                      backgroundColor: "#262529",
                      color: "#c799ff",
                    }}
                  >
                    {icon}
                  </div>
                ))}
              </div>
            </div>

            <motion.div 
              className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
              variants={cardStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {frameworks.map(({ icon, label }) => (
                <motion.div
                  key={label}
                  variants={fadeInUp}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <FrameworkCard icon={icon} label={label} />
                </motion.div>
              ))}
            </motion.div>
          </motion.section>
        </div>
      </div>
    </section>
  );
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function LanguageCard({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <motion.div
      className="p-6 transition-all duration-300 border border-transparent rounded-lg cursor-none group"
      style={{ backgroundColor: "#262529" }}
      whileHover={{ 
        scale: 1.03, 
        backgroundColor: "#2c2c2f",
        borderColor: "rgba(199,153,255,0.2)",
        boxShadow: "0 0 20px 0 rgba(199,153,255,0.2)"
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col items-center gap-4">
        <span
          className="transition-colors duration-300 group-hover:text-[#c799ff]"
          style={{ color: "#adaaad" }}
        >
          {icon}
        </span>
        <span
          className="text-[10px] uppercase tracking-widest transition-colors duration-300"
          style={{ color: "#adaaad", fontFamily: "Inter, sans-serif" }}
        >
          {label}
        </span>
      </div>
    </motion.div>
  );
}

function ToolCard({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <motion.div
      className="flex flex-col items-center gap-3 p-4 transition-all border border-transparent rounded-lg cursor-none"
      style={{ backgroundColor: "#262529" }}
      whileHover={{ 
        scale: 1.05,
        backgroundColor: "#2c2c2f",
        borderColor: "rgba(234,155,255,0.2)"
      }}
      transition={{ duration: 0.3 }}
    >
      <span style={{ color: "#ea9bff" }}>{icon}</span>
      <span
        className="text-[10px] uppercase tracking-wider text-center"
        style={{ color: "#adaaad", fontFamily: "Inter, sans-serif" }}
      >
        {label}
      </span>
    </motion.div>
  );
}

function FrameworkCard({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <motion.div
      className="p-6 text-center transition-all border cursor-none group rounded-xl"
      style={{
        backgroundColor: "#131316",
        borderColor: "rgba(72,71,74,0.05)",
      }}
      whileHover={{ 
        scale: 1.05,
        borderColor: "rgba(199,153,255,0.2)"
      }}
      transition={{ duration: 0.3 }}
    >
      <span
        className="block mb-4 transition-colors duration-300 cursor-none group-hover:text-[#c799ff]"
        style={{ color: "#adaaad" }}
      >
        {icon}
      </span>
      <h3
        className="text-[11px] uppercase tracking-[0.15em] font-semibold transition-colors duration-300"
        style={{ color: "#adaaad", fontFamily: "Inter, sans-serif" }}
      >
        {label}
      </h3>
    </motion.div>
  );
}
