import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const educationTimeline = [
  {
    degree: "Graduation - B.Tech in Computer Science and Engineering",
    institution: "Priyadarshini Institute of Science and Technology for Women",
    logo: "https://img.icons8.com/color/48/000000/graduation-cap.png",
    year: "Expected July 2023",
    details:
      "CGPA: 7.04 — Participated in multiple academic and project-based activities.",
  },
  {
    degree: "Intermediate - MPC",
    institution: "Sri Chaitanya Junior College, Khammam",
    logo: "https://img.icons8.com/color/48/000000/school.png",
    year: "2019",
    details: "Percentage: 93.7% under Telangana State Board.",
  },
  {
    degree: "Secondary School Certificate",
    institution: "Saint Agnes High School, Dornakal",
    logo: "https://img.icons8.com/color/48/000000/school-building.png",
    year: "2017",
    details:
      "GPA: 8.8 — Completed secondary education with strong academic performance.",
  },
];

const certificationCards = [
  {
    title: "Build Your Own Static Website",
    provider: "Nxtwave CCBP",
    date: "May 11, 2022",
    image: "/static.png",
    link: "/static-pdf.pdf",
  },
  {
    title: "Build Your Own Responsive Website",
    provider: "NxtWave CCBP",
    date: "October 14, 2022",
    image: "/responsive.png",
    link: "/responsive-pdf.pdf",
  },
  {
    title: "Programming Foundations With Python",
    provider: "NxtWave CCBP",
    date: "December 09, 2022",
    image: "/python-certificate.png",
    link: "python-pdf.pdf",
  },
  {
    title: "Build Your Own Dynamic Web Application",
    provider: "NxtWave CCBP",
    date: "April 10, 2023",
    image: "/dynamic.png",
    link: "/dynamic-pdf.pdf",
  },
  {
    title: "Introduction To Databases",
    provider: "NxtWave CCBP",
    date: "April 29, 2023",
    image: "/databases.png",
    link: "/databases-pdf.pdf",
  },
  {
    title: "Javascript Essentials",
    provider: "NxtWave CCBP",
    date: "February 22, 2025",
    image: "/js-essentials.png",
    link: "/js-essentials-pdf.pdf",
  },
  {
    title: "Developer Foundations",
    provider: "NxtWave CCBP",
    date: "November 15, 2023",
    image: "/developer-foundations.png",
    link: "/developer-foundations-pdf.pdf",
  },
];

export default function Resume() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(theme);
  }, [theme]);

  const groupedSlides = [];
  for (let i = 0; i < certificationCards.length; i += 3) {
    groupedSlides.push(certificationCards.slice(i, i + 3));
  }

  return (
    <section
      id="resume"
      className="min-h-screen bg-white text-black dark:bg-black dark:text-white px-4 py-24 flex flex-col items-center justify-center transition-colors duration-500"
    >
      {/* 🎓 Education Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl w-full mb-20"
      >
        <h3 className="text-3xl font-bold mb-6 text-center">
          Education
        </h3>
        <div className="relative border-l-2 border-cyan-500 pl-6">
          {educationTimeline.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative flex gap-4 mb-10"
            >
              <div className="relative group w-8 h-8 flex-shrink-0 mt-1">
                <div className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center">
                  <img src={edu.logo} alt="logo" className="w-4 h-4" />
                </div>
                <div className="absolute left-10 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition bg-white text-black text-xs rounded px-2 py-1 z-10">
                  {edu.institution}
                </div>
              </div>
              <div className="pl-1">
                <h4 className="text-xl font-semibold">{edu.degree}</h4>
                <p className="text-sm text-gray-600 dark:text-white/70">
                  {edu.institution}
                </p>
                <p className="text-xs text-gray-400 dark:text-white/50 mb-1">
                  {edu.year}
                </p>
                <p className="text-sm text-gray-700 dark:text-white/60">
                  {edu.details}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* 🏆 Certificate Gallery */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-10 text-center"
      >
        Certifications
      </motion.h2>

      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="w-full max-w-6xl"
      >
        {groupedSlides.map((group, i) => (
          <SwiperSlide key={i}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-10">
              {group.map((cert, j) => (
                <motion.div
                  key={j}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: j * 0.1 }}
                  className="w-72 rounded-xl backdrop-blur-md bg-gray-100 dark:bg-white/10 border border-gray-300 dark:border-white/20 text-black dark:text-white text-center shadow-md overflow-hidden mx-auto"
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-3">
                    <h4 className="text-base font-semibold">{cert.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-white/70">
                      {cert.provider}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-white/50 mb-2">
                      {cert.date}
                    </p>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-medium text-cyan-600 dark:text-cyan-400 
             relative after:content-[''] after:block after:w-0 after:h-[2px] 
             after:bg-cyan-500 after:transition-all after:duration-300 
             hover:after:w-full"
                    >
                      View Certificate →
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
