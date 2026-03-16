"use client";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/lib/projects";

// Main component to render featured projects
export const Projects = () => {
  return (
    <section className="relative w-full px-6 py-20 overflow-x-hidden bg-background lg:px-12 xl:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-10 ">
          {/* title */}
          {/*  <div className="relative mb-4 lg:mb-12">
            <div className="flex items-stretch">
              <div
                className="w-1 mr-4 rounded-full shrink-0"
                style={{
                  background:
                    "linear-gradient(to bottom, #a855f7, #7c3aed, #6d28d9)",
                  minHeight: "100%",
                }}
              />
              <h1
                className="text-5xl font-bold lg:text-5xl"
                style={{
                  background:
                    "linear-gradient(to right, #ffffff 0%, #ffffff 40%, #a855f7 70%, #7c3aed 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Proyectos destacados
              </h1>
            </div>
          </div> */}

          <header className="space-y-4 mb-15">
            <div className="flex items-center gap-4">
              <div
                className="w-8 h-px bg-purple-500"
              />
              <span
                className="text-xs font-bold uppercase tracking-[0.2em] text-purple-500"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Experiencia
              </span>
            </div>

            <h1
              className="max-w-4xl text-5xl font-extrabold leading-none tracking-tighter text-white md:text-7xl"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              Proyectos <span className="text-purple-500">Destacados</span>
            </h1>

            <p
              className="max-w-2xl mt-8 text-lg leading-relaxed"
              style={{ color: "#adaaad", fontFamily: "Inter, sans-serif" }}
            >
              Conjunto de proyectos que muestran mis habilidades y experiencia
              en desarrollo web, destacando la diversidad de tecnologías y
              enfoques utilizados para resolver problemas reales.
            </p>
          </header>

          {/* Project Cards */}
          <div className="flex flex-col gap-24 lg:gap-32">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                reverse={index % 2 !== 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
