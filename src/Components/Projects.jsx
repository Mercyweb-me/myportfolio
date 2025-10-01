import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    description: "A responsive personal portfolio built with React and TailwindCSS.",
    tech: ["React", "TailwindCSS", "Framer Motion"],
    link: "https://yourportfolio.com", 
    github: "https://github.com/yourgithub/portfolio", 
  },
  {
    title: "CONSTRUCTION WEBSITE",
    description: "A Construction website with experienced Engineers.",
    tech: ["HTML", "TailWindCss", "JavaScript"],
    link: "https://mercyweb-me.github.io/HYOSOMAH-NIGERIA-LIMITED/",
    github: "https://github.com/Mercyweb-me/HYOSOMAH-NIGERIA-LIMITED",
  },
  {
    title: "CATERING Website",
    description: "A frontend website and able to intaract with company .",
    tech: ["HTML", "TailWindCss", "JavaScript", "Framer Motion"],
    link: "https://mercyweb-me.github.io/RIICHIE-S-DELIGHT-CATERING/",
    github: "https://github.com/Mercyweb-me/RIICHIE-S-DELIGHT-CATERING",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-white px-6 py-16 flex flex-col items-center"
    >
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-gray-800 mb-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        My <span className="text-blue-600">Projects</span>
      </motion.h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 rounded-xl shadow-md p-6 hover:shadow-xl transition"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-600 mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex space-x-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-semibold hover:underline"
              >
                Live Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 font-semibold hover:underline"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

