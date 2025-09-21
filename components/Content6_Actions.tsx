"use client"

import { motion } from "framer-motion"

interface Content6ActionsProps {
  language: "vi" | "en"
}

export default function Content6_Actions({ language }: Content6ActionsProps) {
  const translations = {
    vi: {
      title: "Hành động Thiết thực",
      content: "Để góp phần vào cuộc đấu tranh chống tham nhũng, mỗi công dân cần có những hành động cụ thể.",
      practicalActions: [
        "Báo cáo các hành vi tham nhũng qua đường dây nóng",
        "Tham gia giám sát cộng đồng",
        "Tuyên truyền nâng cao nhận thức cho người xung quanh",
        "Không đưa hối lộ và không nhận hối lộ",
      ],
      hotline: "Đường dây nóng: 1900-1234",
      email: "Email: phongchongtamnhung@gov.vn",
    },
    en: {
      title: "Practical Actions",
      content: "To contribute to the fight against corruption, every citizen needs to take specific actions.",
      practicalActions: [
        "Report corrupt acts through hotlines",
        "Participate in community supervision",
        "Promote awareness among people around",
        "Do not give bribes and do not accept bribes",
      ],
      hotline: "Hotline: 1900-1234",
      email: "Email: anticorruption@gov.vn",
    },
  }

  const t = translations[language]

  const actionIcons = [
    // Hotline icon
    <svg key="hotline" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>,
    // Community icon
    <svg key="community" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H16c-.8 0-1.54.37-2.01.99l-2.54 3.38c-.36.48-.85.63-1.45.63s-1.09-.15-1.45-.63L6.01 8.99C5.54 8.37 4.8 8 4 8H1.46c-.8 0-1.3.63-1.42 1.37L2.5 16H5v6h2v-6h2v6h2v-6h2v6h3z" />
    </svg>,
    // Education icon
    <svg key="education" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
    </svg>,
    // Ethics icon
    <svg key="ethics" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 1L3 5v6c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V5l-9-4z" />
    </svg>,
  ]

  return (
    <div className="bg-gradient-to-br from-sky-900 to-sky-800 text-white rounded-3xl p-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-6">{t.title}</h2>
        <p className="text-lg text-sky-100 leading-relaxed max-w-3xl mx-auto">{t.content}</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {t.practicalActions.map((action, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">{actionIcons[index]}</div>
                </div>
                <div className="flex-1">
                  <p className="text-white font-medium leading-relaxed">{action}</p>
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
        className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
      >
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold mb-2">{language === "vi" ? "Liên hệ và Báo cáo" : "Contact and Report"}</h3>
          <p className="text-sky-100">
            {language === "vi"
              ? "Hãy liên hệ với chúng tôi khi phát hiện hành vi tham nhũng"
              : "Contact us when you discover corrupt behavior"}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            viewport={{ once: true }}
            className="bg-white/10 rounded-xl p-6 text-center"
          >
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
            </div>
            <p className="font-semibold text-lg">{t.hotline}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            viewport={{ once: true }}
            className="bg-white/10 rounded-xl p-6 text-center"
          >
            <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </div>
            <p className="font-semibold text-lg">{t.email}</p>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        viewport={{ once: true }}
        className="mt-8 text-center"
      >
        <p className="text-sky-200 text-lg font-medium">
          {language === "vi"
            ? "Cùng nhau xây dựng một Việt Nam trong sạch, minh bạch và phát triển bền vững!"
            : "Together, let's build a clean, transparent and sustainably developing Vietnam!"}
        </p>
      </motion.div>
    </div>
  )
}
