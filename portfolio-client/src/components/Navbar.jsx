import { useState } from 'react'
import { Link } from 'react-scroll'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Navbar() {
  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Resume', 'Contact']
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md text-white transition-all duration-300">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3 md:py-4">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer group">
          <img
            src="/code-icon.svg"
            alt="Logo"
            className="h-10 w-10 transition-transform duration-300 group-hover:scale-110"
          />
          <span className="text-xl font-bold transition group-hover:text-[cyan]">
            &lt;Divya.dev /&gt;
          </span>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 font-medium">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer text-white hover:text-[cyan] transition"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mr-12 text-white text-l md:hidden focus:outline-none"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 text-white px-6 py-4">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item}>
                <Link
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="block text-lg hover:text-[cyan] transition"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
