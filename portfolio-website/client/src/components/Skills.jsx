import { motion } from "framer-motion"

export default function Skills() {
  const skills = [
    { name: 'HTML', icon: '/html.png', level: 95 },
    { name: 'CSS', icon: '/css.png', level: 90 },
    { name: 'JavaScript', icon: '/javascript.png', level: 88 },
    { name: 'SQL', icon: '/sql.png', level: 80 },
    { name: 'React', icon: '/react.png', level: 85 },
    { name: 'Node.js', icon: '/nodejs.png', level: 80 },
    { name: 'MongoDB', icon: '/mongodb.png', level: 75 },
    { name: 'Express', icon: '/express.png', level: 78 },
    { name: 'Tailwind CSS', icon: '/tailwindcss.png', level: 85 },
    { name: 'Git', icon: '/git.png', level: 90 },
    { name: 'GitHub', icon: '/github.png', level: 88 },
    { name: 'Bootstrap', icon: '/bootstrap.png', level: 90 },
    { name: 'Python', icon: '/python.png', level: 88 },
  ]

  // split into 2 rows
  const mid = Math.ceil(skills.length / 2)
  const row1 = skills.slice(0, mid)
  const row2 = skills.slice(mid)

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-white dark:bg-black text-black dark:text-white"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center mb-12"
      >
        Skills
      </motion.h2>

      <div className="flex flex-col gap-10 w-full overflow-hidden">
        {/* Row 1 */}
        <motion.div
          className="flex gap-12"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          }}
        >
          {[...row1, ...row1].map((skill, idx) => (
            <div
              key={"row1-" + idx}
              className="flex flex-col items-center justify-center min-w-[140px] p-4 bg-white/10 dark:bg-white/5 rounded-xl shadow-md hover:scale-105 transition-transform"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-12 h-12 mb-2 object-contain"
              />
              <span className="text-sm font-semibold">{skill.name}</span>
            </div>
          ))}
        </motion.div>

        {/* Row 2 (opposite direction) */}
        <motion.div
          className="flex gap-12"
          animate={{ x: ["-100%", "0%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 22, // slightly different speed
            ease: "linear",
          }}
        >
          {[...row2, ...row2].map((skill, idx) => (
            <div
              key={"row2-" + idx}
              className="flex flex-col items-center justify-center min-w-[140px] p-4 bg-white/10 dark:bg-white/5 rounded-xl shadow-md hover:scale-105 transition-transform"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-12 h-12 mb-2 object-contain"
              />
              <span className="text-sm font-semibold">{skill.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
