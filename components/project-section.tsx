import { a, span } from "motion/react-client";
import { GithubIcon } from "./ui/github";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with real-time inventory management secure payments, and an intuitive admin dashboard.",
    tech: ["Next.js", "TypeScript", "SQL", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, team workspaces, and productivity analytics",
    tech: ["Next.js", "TypeScript", "SQL", "Node.js"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "Weather Dashboard",
    description:
      "A beautiful weather application with location-based forecasts, interactive maps, and severe weather alerts.",
    tech: ["Next.js", "JavaScript", "Node.js"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
  {
    title: "Blog Platform",
    description:
      "A modern blogging platform with markdown support, SEO optimization, and a clean reading experience.",
    tech: ["Next.js", "TypeScript", "SQL", "Node.js"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
];

export function ProjectSection() {
  return (
    <section className="py-16">
      <div className="mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          Featured projects
        </h2>
        <p className="text-muted-foreground">Some of my recent work</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                {project.featured && (
                  <span className="inline-block px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-md mb-2">
                    Featured
                  </span>
                )}
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
              </div>
              <div className="flex items-center gap-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <GithubIcon className="w-5 h-5" />
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors"
                    aria-label={`View ${project.title} live`}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
      <div className="mt-8 text-center">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
        >
          <GithubIcon className="w-5 h-5 " />
          View All Projects on GitHub
        </a>
      </div>
    </section>
  );
}
