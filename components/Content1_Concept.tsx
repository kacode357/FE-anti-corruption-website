"use client"

import { motion } from "framer-motion"

interface Content1ConceptProps {
  language: "vi" | "en"
}

export default function Content1_Concept({ language }: Content1ConceptProps) {
  const translations = {
    vi: {
      title: "Khái niệm về Tham nhũng",
      content:
        "Tham nhũng là việc lạm dụng quyền lực được giao phó để trục lợi cá nhân. Đây là một trong những vấn đề nghiêm trọng nhất đối với sự phát triển bền vững của xã hội và nhà nước pháp quyền.",
      definition:
        "Theo pháp luật Việt Nam, tham nhũng bao gồm các hành vi như tham ô, nhận hối lộ, lạm dụng chức vụ quyền hạn để trục lợi.",
      types: [
        "Tham ô tài sản công",
        "Nhận hối lộ",
        "Lạm dụng chức vụ quyền hạn",
        "Thiếu trách nhiệm gây hậu quả nghiêm trọng",
      ],
      mainFormsTitle: "Các hình thức tham nhũng chính:",
    },
    en: {
      title: "Concept of Corruption",
      content:
        "Corruption is the abuse of entrusted power for private gain. It is one of the most serious issues for the sustainable development of society and the rule of law state.",
      definition:
        "According to Vietnamese law, corruption includes acts such as embezzlement, bribery, abuse of position and power for personal gain.",
      types: [
        "Embezzlement of public property",
        "Accepting bribes",
        "Abuse of position and power",
        "Irresponsibility causing serious consequences",
      ],
      mainFormsTitle: "Main forms of corruption:",
    },
  }

  const t = translations[language]

  return (
    <div className="text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-sky-700 mb-6">{t.title}</h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">{t.content}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="bg-sky-50 rounded-2xl p-8 mb-8"
      >
        <p className="text-gray-800 text-base leading-relaxed">{t.definition}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-semibold text-sky-600 mb-6">{t.mainFormsTitle}</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {t.types.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-sky-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-sky-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{index + 1}</span>
                </div>
                <p className="text-gray-800 font-medium">{type}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
