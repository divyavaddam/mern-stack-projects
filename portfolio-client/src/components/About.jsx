import { motion } from 'framer-motion';

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-4 py-24 pt-32 bg-white text-black dark:bg-black dark:text-white transition-colors duration-500"
    >
      <div
        className="w-full max-w-3xl p-8 rounded-2xl relative  border backdrop-blur-xl transition-all duration-500 
                   bg-white/30 dark:bg-white/5 border-black/10 dark:border-white/15 
                   shadow-[0_0_15px_rgba(255,0,255,0.2),_0_0_30px_rgba(0,200,255,0.15)] dark:shadow-[0_0_15px_rgba(255,0,255,0.5),_0_0_30px_rgba(0,200,255,0.3)]"
      >
        <div className="flex flex-col items-center text-center">
          {/* Profile Image */}
          <motion.img
            src="/about-icon.png"
            alt="Developer Avatar"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-32 h-32 md:w-36 md:h-36 rounded-full object-cover border-4 border-black dark:border-white shadow-lg mb-6"
          />

          {/* Section Heading */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-6"
          >
            About Me
          </motion.h2>

          {/* Intro Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-lg md:text-xl leading-relaxed font-[Poppins]"
          >
            Hi, I'm <span className="font-semibold text-cyan-400 dark:text-cyan-300">Divya Vaddam</span>, a
            self-driven and passionate <strong> MERN Stack Developer</strong> from India. I love turning ideas into
            real-world web applications and continuously improving through hands-on learning and collaboration.
            <br />
            <br />
            I thrive in environments where innovation and learning go hand-in-hand. My goal is to contribute to
            impactful projects, grow with a dynamic team, and keep exploring modern web technologies to build elegant
            and scalable digital solutions.
          </motion.p>

          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-4 mt-10 text-left text-sm w-full"
          >
            {[
              ['Education:', 'B.Tech in Computer Science'],
              ['Currently Exploring:', 'TypeScript, Next.js, Tailwind CSS'],
            ].map(([label, value]) => (
              <div
                key={label}
                className="bg-black/5 dark:bg-white/10 backdrop-blur-sm text-black dark:text-white p-4 rounded-lg shadow-md border border-black/10 dark:border-white/20"
              >
                <strong>{label}</strong> {value}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
