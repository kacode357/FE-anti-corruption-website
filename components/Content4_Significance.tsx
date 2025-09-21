"use client"

import { motion } from "framer-motion"

interface Content4SignificanceProps {
  language: "vi" | "en"
}

export default function Content4_Significance({ language }: Content4SignificanceProps) {
  const translations = {
    vi: {
      title: "Ý nghĩa của việc Phòng chống Tham nhũng",
      content: "Phòng chống tham nhũng có ý nghĩa quan trọng trong việc xây dựng nhà nước pháp quyền xã hội chủ nghĩa.",
      importance: [
        "Bảo vệ tài sản của Nhà nước và nhân dân",
        "Nâng cao hiệu quả hoạt động của bộ máy nhà nước",
        "Tăng cường lòng tin của nhân dân đối với Đảng và Nhà nước",
        "Tạo môi trường thuận lợi cho phát triển kinh tế - xã hội",
      ],
    },
    en: {
      title: "Significance of Anti-Corruption",
      content: "Anti-corruption has important significance in building a socialist rule of law state.",
      importance: [
        "Protecting state and people's property",
        "Improving the efficiency of state apparatus operations",
        "Strengthening people's trust in the Party and State",
        "Creating favorable environment for socio-economic development",
      ],
    },
  }

  const t = translations[language]

  const icons = [
    // Protection icon
    <svg key="protection" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 1L3 5v6c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V5l-9-4z" />
    </svg>,
    // Efficiency icon
    <svg key="efficiency" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
    </svg>,
    // Trust icon
    <svg key="trust" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>,
    // Development icon
    <svg key="development" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
    </svg>,
  ]

  return (
    <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-3xl p-8">
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

      <div className="grid md:grid-cols-2 gap-6">
        {t.importance.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="bg-white rounded-xl p-6 shadow-sm border border-sky-200 hover:shadow-md hover:border-sky-300 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-sky-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">{icons[index]}</div>
                </div>
                <div className="flex-1">
                  <p className="text-gray-800 font-medium leading-relaxed">{item}</p>
                </div>
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
        className="mt-12 text-center"
      >
        <div className="inline-flex items-center space-x-3 bg-sky-600 text-white px-8 py-4 rounded-full">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="font-semibold text-lg">
            {language === "vi"
              ? "Phòng chống tham nhũng - Trách nhiệm của toàn xã hội"
              : "Anti-corruption - Responsibility of the whole society"}
          </span>
        </div>
      </motion.div>
    </div>
  )
}
