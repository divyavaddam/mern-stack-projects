import { useState } from "react";
import { projects } from "../data/projects";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

const categories = [
  { name: "All", icon: "📁" },
  { name: "Fullstack", icon: "🧩" },
  { name: "Frontend", icon: "🎨" },
  { name: "Backend", icon: "🧠" },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const currentIndex = selectedProject
    ? filteredProjects.findIndex((p) => p.id === selectedProject.id)
    : -1;

  const handlePrev = () => {
    if (currentIndex > 0) {
      setSelectedProject(filteredProjects[currentIndex - 1]);
    } else {
      setSelectedProject(filteredProjects[filteredProjects.length - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < filteredProjects.length - 1) {
      setSelectedProject(filteredProjects[currentIndex + 1]);
    } else {
      setSelectedProject(filteredProjects[0]);
    }
  };

  return (
    <section
      id="projects"
      className="min-h-screen px-4 py-24 flex flex-col items-center justify-center transition-colors duration-500 bg-white text-black dark:bg-black dark:text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-10 text-center"
      >
        Projects
      </motion.h2>

      {/* Filter Tabs with Icons & Animation */}
      <LayoutGroup>
        <div className="flex gap-4 mb-10 flex-wrap justify-center">
          {categories.map((category) => (
           <motion.button
  key={category.name}
  onClick={() => setActiveCategory(category.name)}
  className={`relative px-4 py-2 rounded-full border font-medium transition duration-300 flex items-center gap-2
    ${
      activeCategory === category.name
        ? "text-white shadow-md"
        : "bg-white text-black dark:bg-black dark:text-white border-black/20 dark:border-white/30 hover:bg-teal-100 dark:hover:bg-white/10"
    }`}
  layout
>
  {activeCategory === category.name && (
    <motion.div
      layoutId="highlight"
      className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-400 rounded-full z-[-1]"
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    />
  )}
  <span>{category.icon}</span>
  <span>{category.name}</span>
</motion.button>

          ))}
        </div>
      </LayoutGroup>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => setSelectedProject(project)}
            className="w-72 h-[300px] flex flex-col justify-between cursor-pointer mx-auto rounded-xl overflow-hidden shadow-xl border border-black/10 dark:border-white/20 backdrop-blur-md bg-black/5 dark:bg-white/10 hover:scale-[1.03] transition-all duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-3">
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-black/70 dark:text-white/70 mb-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 rounded-full bg-black/10 dark:bg-white/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white/80 dark:bg-white/10 border border-black/10 dark:border-white/30 backdrop-blur-lg rounded-xl max-w-lg w-full p-6 shadow-lg text-black dark:text-white relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-4 text-xl font-bold hover:text-red-400"
              >
                ✕
              </button>

              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-56 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-sm text-black/80 dark:text-white/80 mb-4">
                {selectedProject.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 rounded-full bg-black/10 dark:bg-white/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center gap-4 mb-6">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-md bg-black/10 dark:bg-white/20 hover:bg-black/20 dark:hover:bg-white/30 transition"
                >
                  GitHub
                </a>
                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-md bg-gradient-to-r from-pink-500 to-indigo-500 hover:brightness-110 transition"
                >
                  Live Demo
                </a>
              </div>

              {/* Prev / Next Buttons */}
              <div className="flex justify-between text-sm text-black/60 dark:text-white/80">
                <button
                  onClick={handlePrev}
                  className="hover:text-pink-400 transition"
                >
                  ⬅ Previous
                </button>
                <button
                  onClick={handleNext}
                  className="hover:text-indigo-400 transition"
                >
                  Next ➡
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
