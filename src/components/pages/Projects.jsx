import { ExternalLink } from "lucide-react";
import AnimatedCodingIcon from "./AnimatedCodingIcon";

export default function Projects({ isDarkMode }) {
  const projects = [
    {
      title: "Zenovia",
      description:
        "A multi-tenant AI mock interview platform for individuals, universities, and companies — voice interviews, ATS scoring, and automated reports.",
      live: "https://zenovia.co.in",
      technologies: ["React", "FastAPI", "LiveKit", "PostgreSQL", "Docker"],
      preview: "/zenovia-preview.png",
      logo: isDarkMode ? "/icon-zenovia-dark.webp" : "/icon-zenovia-light.webp",
    },
    // {
    //   title: "Swimyatra",
    //   description:
    //     "A landing Page for SwimYatra, a platform for booking community-based swimming classes.",
    //   live: "https://swimyatra.vercel.app",
    //   technologies: ["React", "TailwindCSS", "Vercel"],
    //   preview: "https://swimyatra.vercel.app/og-image.jpg",
    // },
  ];

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
        Projects
        <AnimatedCodingIcon />
      </h2>
      {projects.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-400 flex items-center">
          No public repo projects except this portfolio, currently working on
          it.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <article
              key={index}
              className="project-card bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 flex items-center gap-2">
                {project.logo && (
                  <img
                    src={project.logo}
                    alt=""
                    className="project-card-logo h-8 w-8 object-contain shrink-0"
                  />
                )}
                {project.title}
              </h3>
              <div className="flex flex-col gap-4 mt-2">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block overflow-hidden rounded border border-gray-200 dark:border-gray-700"
                >
                  <img
                    src={project.preview}
                    alt={`${project.title} preview`}
                    className="project-card-preview w-full h-40 object-cover"
                  />
                </a>
                <p className="text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex space-x-4">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card-link flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                >
                  <ExternalLink
                    size={16}
                    className="project-card-link-icon mr-1"
                  />
                  Visit product
                </a>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
