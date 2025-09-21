"use client"

import { motion } from "framer-motion"

interface Content5ResponsibilityProps {
  language: "vi" | "en"
}

export default function Content5_Responsibility({ language }: Content5ResponsibilityProps) {
  const translations = {
    vi: {
      title: "Trách nhiệm của Công dân",
      content: "Mỗi công dân đều có trách nhiệm tham gia vào cuộc đấu tranh phòng chống tham nhũng.",
      duties: [
        "Nâng cao ý thức pháp luật và đạo đức xã hội",
        "Tố giác các hành vi tham nhũng",
        "Giám sát hoạt động của cơ quan nhà nước",
        "Tham gia các hoạt động tuyên truyền phòng chống tham nhũng",
      ],
    },
    en: {
      title: "Citizens' Responsibilities",
      content: "Every citizen has the responsibility to participate in the fight against corruption.",
      duties: [
        "Raising legal awareness and social ethics",
        "Reporting corrupt acts",
        "Supervising state agency activities",
        "Participating in anti-corruption propaganda activities",
      ],
    },
  }

  const t = translations[language]

  const icons = [
    // Legal awareness icon
    <svg key="legal" className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>,
    // Report icon
    <svg key="report" className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z" />
    </svg>,
    // Supervision icon
    <svg key="supervision" className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
    </svg>,
    // Propaganda icon
    <svg key="propaganda" className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    </svg>,
  ]

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-sky-700 mb-6">{t.title}</h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">{t.content}</p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {t.duties.map((duty, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-sky-200 hover:shadow-lg hover:border-sky-300 transition-all duration-300 text-center h-full flex flex-col">
              <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-sky-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <div className="text-white">{icons[index]}</div>
              </div>

              <div className="flex-1 flex items-center">
                <p className="text-gray-800 font-medium leading-relaxed">{duty}</p>
              </div>

              <div className="mt-4 pt-4 border-t border-sky-100">
                <div className="w-8 h-1 bg-sky-500 rounded-full mx-auto"></div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
        className="mt-12 bg-sky-600 text-white rounded-2xl p-8 text-center"
      >
        <div className="flex items-center justify-center mb-4">
          <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
            <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H16c-.8 0-1.54.37-2.01.99l-2.54 3.38c-.36.48-.85.63-1.45.63s-1.09-.15-1.45-.63L6.01 8.99C5.54 8.37 4.8 8 4 8H1.46c-.8 0-1.3.63-1.42 1.37L2.5 16H5v6h2v-6h2v6h2v-6h2v6h3z" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-2">
          {language === "vi" ? "Hãy hành động ngay hôm nay!" : "Take action today!"}
        </h3>
        <p className="text-sky-100">
          {language === "vi"
            ? "Mỗi công dân đều có thể góp phần xây dựng một xã hội trong sạch, minh bạch."
            : "Every citizen can contribute to building a clean and transparent society."}
        </p>
      </motion.div>
    </div>
  )
}
