// src/components/ThemeToggle.jsx
import { useTheme } from '../context/ThemeContext'
import { motion } from 'framer-motion'
import { SunIcon, MoonIcon } from 'lucide-react'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <motion.button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      whileHover={{ scale: 1.1, y: -2 }}
      className="p-2  rounded-full dark:border-pink-500 transition-all duration-300 
        bg-white/10 dark:bg-white/5 backdrop-blur-md shadow-[0_0_10px_rgba(0,255,255,0.5)] 
        dark:shadow-[0_0_10px_rgba(255,0,255,0.5)] fixed top-4 right-4 z-50"
    >
      {theme === 'dark' ? (
        <MoonIcon className="w-5 h-5 text-purple-500" /> // ✅ visible in dark mode
      ) : (
        <SunIcon className="w-5 h-5 text-rose-500" /> // ✅ visible in light mode
      )}
    </motion.button>
  )
}
