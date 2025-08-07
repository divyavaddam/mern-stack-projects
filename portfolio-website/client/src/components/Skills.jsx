import { motion } from 'framer-motion'

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

  return (
    <section
      id="skills"
      className="min-h-screen bg-white text-black dark:bg-black dark:text-white flex items-center justify-center px-4 pt-32 pb-24 transition-colors duration-500"
    >
      <div
        className="w-full max-w-5xl p-6 rounded-2xl shadow-xl transition-all duration-500"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '2px solid rgba(255, 255, 255, 0.15)',
          boxShadow:
            '0 0 15px rgba(255, 0, 255, 0.3), 0 0 30px rgba(0, 200, 255, 0.2)',
        }}
      >
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-8"
        >
          Skills
        </motion.h2>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center"
        >
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="w-full max-w-[220px] bg-white/20 dark:bg-white/10 p-4 rounded-lg shadow-md border border-white/30 hover:scale-[1.03] hover:shadow-[0_0_20px_#ff6ec4] transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-8 h-8 object-contain"
                />
                <span className="text-base font-semibold">{skill.name}</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-white/30 dark:bg-white/20 h-1.5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1 }}
                  className="h-full bg-gradient-to-r from-[teal] to-[cyan] rounded-full"
                />
              </div>

              <div className="text-right text-xs mt-1 text-black/60 dark:text-white/60">
                {skill.level}%
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
