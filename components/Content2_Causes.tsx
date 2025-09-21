"use client"

import { motion } from "framer-motion"

interface Content2CausesProps {
  language: "vi" | "en"
}

export default function Content2_Causes({ language }: Content2CausesProps) {
  const translations = {
    vi: {
      title: "Nguyên nhân của Tham nhũng",
      content: "Tham nhũng xuất phát từ nhiều nguyên nhân phức tạp, cần được giải quyết một cách toàn diện.",
      mainCauses: [
        {
          title: "Nguyên nhân chủ quan",
          items: ["Ý thức pháp luật kém", "Đạo đức nghề nghiệp thấp", "Lối sống vật chất"],
        },
        {
          title: "Nguyên nhân khách quan",
          items: [
            "Cơ chế quản lý lỏng lẻo",
            "Thiếu minh bạch trong hoạt động công",
            "Hệ thống kiểm tra giám sát chưa hiệu quả",
          ],
        },
      ],
    },
    en: {
      title: "Causes of Corruption",
      content: "Corruption stems from many complex causes that need to be addressed comprehensively.",
      mainCauses: [
        {
          title: "Subjective causes",
          items: ["Poor legal awareness", "Low professional ethics", "Materialistic lifestyle"],
        },
        {
          title: "Objective causes",
          items: [
            "Loose management mechanisms",
            "Lack of transparency in public activities",
            "Ineffective supervision system",
          ],
        },
      ],
    },
  }

  const t = translations[language]

  return (
    <div className="bg-gray-50 rounded-3xl p-8">
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

      <div className="grid lg:grid-cols-2 gap-8">
        {t.mainCauses.map((cause, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-sky-100"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-sky-600 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  {index === 0 ? (
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  ) : (
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  )}
                </svg>
              </div>
              <h3 className="text-xl font-bold text-sky-700">{cause.title}</h3>
            </div>

            <ul className="space-y-3">
              {cause.items.map((item, itemIndex) => (
                <motion.li
                  key={itemIndex}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.2 + itemIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <div className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">{item}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
