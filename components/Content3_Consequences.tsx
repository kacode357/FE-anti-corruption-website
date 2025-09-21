"use client"

import { motion } from "framer-motion"

interface Content3ConsequencesProps {
  language: "vi" | "en"
}

export default function Content3_Consequences({ language }: Content3ConsequencesProps) {
  const translations = {
    vi: {
      title: "Tác hại của Tham nhũng",
      content: "Tham nhũng gây ra những hậu quả nghiêm trọng cho xã hội và nhà nước.",
      impacts: [
        {
          title: "Tác hại đối với kinh tế",
          description: "Làm méo mó cơ chế thị trường, cản trở đầu tư và phát triển kinh tế",
        },
        {
          title: "Tác hại đối với chính trị",
          description: "Làm suy giảm uy tín của Đảng và Nhà nước, mất lòng tin của nhân dân",
        },
        {
          title: "Tác hại đối với xã hội",
          description: "Gia tăng bất bình đẳng xã hội, làm suy thoái đạo đức xã hội",
        },
      ],
    },
    en: {
      title: "Consequences of Corruption",
      content: "Corruption causes serious consequences for society and the state.",
      impacts: [
        {
          title: "Economic impact",
          description: "Distorts market mechanisms, hinders investment and economic development",
        },
        {
          title: "Political impact",
          description: "Reduces the prestige of the Party and State, loses people's trust",
        },
        {
          title: "Social impact",
          description: "Increases social inequality, causes moral degradation in society",
        },
      ],
    },
  }

  const t = translations[language]

  const icons = [
    // Economic impact icon
    <svg key="economic" className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z" />
    </svg>,
    // Political impact icon
    <svg key="political" className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>,
    // Social impact icon
    <svg key="social" className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H16c-.8 0-1.54.37-2.01.99l-2.54 3.38c-.36.48-.85.63-1.45.63s-1.09-.15-1.45-.63L6.01 8.99C5.54 8.37 4.8 8 4 8H1.46c-.8 0-1.3.63-1.42 1.37L2.5 16H5v6h2v-6h2v6h2v-6h2v6h3z" />
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

      <div className="grid lg:grid-cols-3 gap-8">
        {t.impacts.map((impact, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-orange-100 hover:shadow-lg hover:border-orange-200 transition-all duration-300 h-full">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <div className="text-white">{icons[index]}</div>
              </div>

              <h3 className="text-xl font-bold text-orange-700 mb-4 text-center">{impact.title}</h3>
              <p className="text-gray-700 leading-relaxed text-center">{impact.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
        className="mt-12 bg-orange-50 border border-orange-200 rounded-2xl p-8 text-center"
      >
        <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
          </svg>
        </div>
        <p className="text-orange-800 font-semibold text-lg">
          {language === "vi"
            ? "Tham nhũng là mối đe dọa nghiêm trọng đối với sự phát triển bền vững của đất nước!"
            : "Corruption is a serious threat to the sustainable development of the country!"}
        </p>
      </motion.div>
    </div>
  )
}
