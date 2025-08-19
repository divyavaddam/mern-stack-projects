import { useState } from "react"
import { motion } from "framer-motion"
import toast, { Toaster } from "react-hot-toast"
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: new FormData(e.target),
    })

    if (response.ok) {
      toast.success("Message sent successfully!")
      setFormData({ name: "", email: "", message: "" })
    } else {
      toast.error("Failed to send message. Try again.")
    }
  }

  return (
    <section
      id="contact"
      className="min-h-screen px-6 py-24 flex items-center justify-center bg-white text-black dark:bg-black dark:text-white transition-colors duration-500"
    >
      <Toaster position="top-right" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl w-full p-8 rounded-xl shadow-xl 
                   backdrop-blur-xl border transition-all duration-500 
                   bg-white/30 dark:bg-white/5 
                   border-black/10 dark:border-white/20 
                   text-black dark:text-white"
      >
        <h2 className="text-4xl font-bold text-center mb-6">
          Let's Connect
        </h2>

        <p className="text-center text-black/70 dark:text-white/70 mb-8">
          I'm open to work! Message me or reach out through social links.
        </p>

        {/* Contact Email */}
        <div className="text-center space-y-2 mb-6 text-sm">
          Email:{" "}
          <a
            href="mailto:your.email@example.com"
            className="text-cyan-500 dark:text-cyan-400 underline"
          >
            divyavaddam@gmail.com
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-8 text-2xl">
          <a
            href="https://github.com/divyavaddam"
            title="GitHub"
            target="_blank"
            rel="noreferrer"
            className="text-orange-500 hover:text-black dark:hover:text-white transform hover:scale-110 transition-all duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/divya-vaddam/"
            title="LinkedIn"
            target="_blank"
            rel="noreferrer"
            className="text-[#0A66C2] hover:text-black dark:hover:text-white transform hover:scale-110 transition-all duration-300"
          >
            <FaLinkedin />
          </a>
          
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Your Name"
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-md bg-black/10 dark:bg-white/10 border border-black/10 dark:border-white/20 text-black dark:text-white placeholder-gray-700 dark:placeholder-gray-300 focus:outline-none transition-all"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Your Email"
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-md bg-black/10 dark:bg-white/10 border border-black/10 dark:border-white/20 text-black dark:text-white placeholder-gray-700 dark:placeholder-gray-300 focus:outline-none transition-all"
          />
          <textarea
            name="message"
            value={formData.message}
            placeholder="Your Message"
            onChange={handleChange}
            rows="5"
            required
            className="w-full px-4 py-2 rounded-md bg-black/10 dark:bg-white/10 border border-black/10 dark:border-white/20 text-black dark:text-white placeholder-gray-700 dark:placeholder-gray-300 focus:outline-none resize-none transition-all"
          ></textarea>

          <button
            type="submit"
            className="w-full py-2 rounded-md font-semibold text-white bg-gradient-to-r from-teal-500 to-cyan hover:opacity-90 hover:shadow-lg transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  )
}
