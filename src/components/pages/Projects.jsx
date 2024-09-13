import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce solution with real-time inventory management.",
      technologies: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/babure",
      live: "",
    },
  ];

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm"
          >
            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
              {project.title}
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              {project.description}
            </p>
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
                href={project.github}
                target="/"
                className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
              >
                <Github size={16} className="mr-1" />
                GitHub
              </a>
              <a
                href={project.live}
                className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
              >
                <ExternalLink size={16} className="mr-1" />
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
