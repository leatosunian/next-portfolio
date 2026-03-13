"use client"
import { ProjectCard } from './ProjectCard'
import { projects } from '@/lib/projects'

// Main component to render featured projects
export const Projects = () => {
  return (
    <section className="relative w-full px-6 py-20 overflow-x-hidden bg-background lg:px-12 xl:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-10 ">
          {/* title */}
          <div className="relative mb-4 lg:mb-12">
            <div className="flex items-stretch">
              {/* Vertical gradient line */}
              <div
                className="w-1 mr-4 rounded-full shrink-0"
                style={{
                  background: 'linear-gradient(to bottom, #a855f7, #7c3aed, #6d28d9)',
                  minHeight: '100%'
                }}
              />
              {/* Title with gradient */}
              <h1
                className="text-5xl font-bold lg:text-5xl"
                style={{
                  background: 'linear-gradient(to right, #ffffff 0%, #ffffff 40%, #a855f7 70%, #7c3aed 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Proyectos
              </h1>
            </div>
          </div>

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
  )
}

export default Projects
