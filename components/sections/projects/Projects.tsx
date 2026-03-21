"use client";
import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/lib/projects";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

// Main component to render featured projects
export const Projects = () => {
  return (
    <section className="relative  bg-[#0e0e10] w-full px-6 py-26 overflow-x-hidden lg:px-12 xl:px-20" id="projects">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-10 ">
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
                className="text-xs font-bold uppercase tracking-[0.2em] text-purple-500"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Experiencia
              </span>
            </motion.div>

            <motion.h1
              className="max-w-4xl text-5xl font-extrabold leading-none tracking-tighter text-white md:text-7xl"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              variants={fadeInUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Proyectos <span className="text-purple-500">Destacados</span>
            </motion.h1>

            <motion.p
              className="max-w-2xl mt-8 text-lg leading-relaxed"
              style={{ color: "#adaaad", fontFamily: "Inter, sans-serif" }}
              variants={fadeInUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              Conjunto de proyectos que muestran mis habilidades y experiencia
              en desarrollo web, destacando la diversidad de tecnologías y
              enfoques utilizados para resolver problemas reales.
            </motion.p>
          </motion.header>

          {/* Project Cards */}
          <div className="flex flex-col gap-24 lg:gap-32">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
              >
                <ProjectCard
                  project={project}
                  reverse={index % 2 !== 0}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
