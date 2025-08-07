# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# 💼 Divya's Developer Portfolio

Welcome to my **personal developer portfolio** — a fully responsive, modern, and animated website built using the **MERN stack frontend (React + Tailwind CSS + Framer Motion)**. This portfolio showcases my skills, projects, certifications, and experience in a beautiful and interactive way.

---

## 🚀 Live Demo

🌐 [View Portfolio Live](https://your-live-site-link.com)

---

## 📸 Preview

![Portfolio Preview](./preview-image.png)

---

## 📌 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Folder Structure](#-folder-structure)
- [Challenges & Learnings](#-challenges--learnings)
- [Credits](#-credits)
- [License](#-license)

---

## ✨ Features

- 📱 Fully Responsive across all devices
- 🌙 Dark/Light Theme Switcher
- 🧭 Sticky Transparent Navbar with Smooth Scroll
- 👋 Hero Section with Animated Intro
- 👩‍💼 About Me Section with Glassmorphism Design
- 🧠 Skills Section with Animated Cards and Progress Bars
- 💻 Projects Section:
  - Category Filtering (Frontend / Backend / Fullstack)
  - Modal Popup with Project Preview, GitHub & Live Links
  - Embedded Swiper Carousel inside modal
  - Next/Prev Navigation with Fancy Hover Effects
- 📜 Resume Timeline: Education, Experience, Certifications
- 🏆 Certifications Section with:
  - Swiper Carousel + Grid View Toggle
  - Modal with Preview and Navigation
- 📬 Contact Form with Formspree and Toast Notifications
- 🎨 Beautiful Animations using Framer Motion
- 🔥 Glass Effects, Animated Borders, Lazy Load Images
- 🌍 Deployed with Vercel

---

## 🛠 Tech Stack

| Frontend       | Animation       | UI/UX           | Forms           | Carousel        |
|----------------|-----------------|------------------|------------------|------------------|
| React          | Framer Motion   | Tailwind CSS     | Formspree        | Swiper.js        |
| React Router   | AnimatePresence | Glassmorphism    | react-hot-toast  | Swiper inside modal |

---

## 📦 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/mern-portfolio.git
cd mern-portfolio
2. Install Dependencies

npm install
3. Start the Dev Server

npm run dev
4. Build for Production

npm run build
📁 Folder Structure

mern-portfolio/
│
├── public/                # Static assets
├── src/
│   ├── components/        # Navbar, Hero, About, Projects, etc.
│   ├── data/              # Projects, Skills, Certifications
│   ├── styles/            # Custom styles & tailwind config
│   ├── App.jsx            # Main app component with routing
│   └── main.jsx           # React entry point
│
├── tailwind.config.js     # Tailwind config
├── README.md
├── package.json
└── vite.config.js
🧠 Challenges & Learnings
Building this portfolio from scratch was an amazing and challenging experience. Here's a breakdown of what I faced and how I solved it:

🧩 Tailwind CSS Crash
Issue: Accidentally deleted tailwind.config.js, which caused styles to break completely.

Solution: Reconstructed the config from scratch, restored theme customizations and animations.

🖼 Projects Modal with Swiper Carousel
Issue: Implementing modal-based project previews with embedded Swiper and category filtering.

Solution: Used Framer Motion + AnimatePresence for modal transitions and Swiper for project previews, with responsive navigation and smooth animations.

🌑 Dark/Light Theme
Issue: Tailwind does not handle theme switching natively out of the box.

Solution: Built a custom theme switcher using useState, localStorage, and Tailwind's dark: class strategy.

🌀 Animations Everywhere!
Issue: Managing many animations without overloading performance or making UI jittery.

Solution: Carefully scoped Framer Motion effects using variants and staggerChildren to animate smoothly on load and scroll.

📬 Contact Form Setup
Issue: Wanted form functionality without a custom backend.

Solution: Used Formspree to handle email sending, with validation and toast notifications for feedback.

🎖 Certification Section
Issue: Needed both a grid and slider view with modal preview for each certificate.

Solution: Implemented a dual-mode view toggle and modal with Swiper inside, using fancy animations and navigation.

🙏 Credits
Framer Motion

Tailwind CSS

Swiper.js

Formspree

Heroicons & Lucide Icons

Inspiration from David Hckh Portfolio

📝 License
This project is open-source and free to use under the MIT License.

💬 Contact Me
Feel free to connect with me on:

🌐 LinkedIn

💻 GitHub

📧 Email: your-email@example.com

Designed & Built with ❤️ by Divya Vaddam


---








