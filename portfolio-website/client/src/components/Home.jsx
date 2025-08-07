

import bgImage from '../assets/herobg.jpg'
import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
import { FiDownload } from 'react-icons/fi'

export default function Home() {
  const typewriterWords = [
    'MERN Stack Developer',
    'Full Stack Enthusiast',
    'Problem Solver',
    
  ]

  return (
    <section className="w-full h-screen flex items-center justify-center text-white relative" id="home">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-center max-w-xl px-6 py-8 relative z-10"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-[Poppins]">
          Hi, I'm <span className="text-white">Divya Vaddam</span>
        </h1>

        <p className="text-xl md:text-2xl mb-6 font-[Poppins] font-bold">
          <span className="text-emerald-500">A</span>{' '}
          <span className="bg-gradient-to-r from-lime-500 to-orange-500 text-transparent bg-clip-text">
            <Typewriter
              words={typewriterWords}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </span>
        </p>

        {/* ✅ Buttons */}
        <div className="flex justify-center gap-3 flex-wrap mt-4">
          <a
            href="#projects"
            className="px-4 py-1.5 text-sm bg-[linear-gradient(to_right,_#ff6ec4,_#7873f5)] text-white rounded-full font-medium hover:bg-[#218838] transition-colors duration-300 font-[Poppins]"
          >
            View My Work
          </a>

          <a
            href="/resume.pdf" // Replace with your actual resume path
            download
            className="flex items-center gap-1.5 px-4 py-1.5 text-sm border border-white text-white rounded-full font-medium hover:bg-white hover:text-black transition-all duration-300 font-[Poppins]"
          >
            <FiDownload size={14} />
            Download Resume
          </a>
        </div>
      </motion.div>
    </section>
  )
}
