"use client"

import { motion } from "framer-motion"
import TTSBar from "@/components/tts/TTSBar"

interface Content7HarmsProps {
  language: "vi" | "en"
}

export default function Content7_Harms({ language }: Content7HarmsProps) {
  const translations = {
    vi: {
      overline: "Chủ đề 7",
      title: "TÁC HẠI CỦA HÀNH VI THAM NHŨNG",
      harms: [
        {
          title: "Về phương diện chính trị",
          description:
            "Bất cứ người công chức, viên chức hay người đảng viên nào có hành vi tham nhũng thì cũng đều vi phạm Hiến pháp, vi phạm Điều lệ Đảng và gây thiệt hại cho xã hội.",
        },
        {
          title: "Về phương diện kinh tế",
          description:
            "Bất cứ một hành vi tham nhũng nào cũng đều trực tiếp hoặc gián tiếp gây khó khăn, trở ngại cho các hoạt động quản lý và sự phát triển của các ngành nghề sản xuất, kinh doanh, dịch vụ ở khu vực nhà nước hay khu vực tư nhân, ở tầm vĩ mô hay vi mô.",
        },
        {
          title: "Về phương diện đạo đức",
          description:
            "Tham nhũng không chỉ là hành vi phạm pháp, mà còn là một hành vi bất nhân, bất nghĩa, bất tín, bất hiếu, bất trung, hoàn toàn trái ngược với đạo đức cách mạng của người cán bộ, đảng viên, công chức, viên chức trong một Nhà nước của nhân dân, do nhân dân, vì nhân dân dưới sự lãnh đạo của Đảng Cộng sản Việt Nam.",
        },
      ],
      tip: "Hiểu rõ các tác hại sẽ giúp bạn nhận thức được trách nhiệm của mình trong việc đấu tranh chống tham nhũng.",
    },
    en: {
      overline: "Topic 7",
      title: "HARMS OF CORRUPTION",
      harms: [
        {
          title: "In terms of politics",
          description:
            "Any civil servant, public employee, or party member who commits acts of corruption violates the Constitution, the Party's Charter, and harms society.",
        },
        {
          title: "In terms of economics",
          description:
            "Any act of corruption, whether directly or indirectly, creates difficulties and obstacles for management activities and the development of production, business, and service sectors in both the state and private sectors, at both the macro and micro levels.",
        },
        {
          title: "In terms of ethics",
          description:
            "Corruption is not only a criminal act but also an inhumane, unrighteous, disloyal, and unfilial act, completely contrary to the revolutionary ethics of cadres, party members, and public servants in a State of the people, by the people, and for the people, under the leadership of the Communist Party of Vietnam.",
        },
      ],
      tip: "Understanding these harms helps you recognize your responsibility in the fight against corruption.",
    },
  } as const

  const t = translations[language]

  // Văn bản để TTS đọc
  const getTtsText = () => {
    const parts = [
      t.title,
      ...t.harms.map((h) => `${h.title}. ${h.description}`),
      `${language === "vi" ? "Gợi ý" : "Tip"}. ${t.tip}`,
    ]
    return parts.join(". ")
  }

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        {/* Thanh đọc văn bản */}
        <TTSBar lang={language} getText={getTtsText} className="mb-6" />

        {/* Tiêu đề */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700">
            <span className="h-2 w-2 rounded-full bg-sky-500"></span>
            {t.overline}
          </div>
          <h2 className="text-balance bg-gradient-to-r from-sky-700 to-blue-700 bg-clip-text text-3xl font-extrabold text-transparent md:text-4xl">
            {t.title}
          </h2>
        </motion.div>

        {/* Các mục tác hại */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {t.harms.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-xl border border-sky-100 bg-white/70 p-5 shadow-sm"
            >
              <h3 className="font-bold text-lg text-sky-700">{item.title}</h3>
              <p className="mt-2 text-gray-700 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Tip cuối */}
        <div className="mt-12 rounded-xl border border-blue-100 bg-gradient-to-br from-sky-50 to-blue-50 p-5 shadow-sm">
          <p className="text-sm text-blue-800">
            <span className="mr-2 font-semibold">💡 {language === "vi" ? "Gợi ý:" : "Tip:"}</span>
            {t.tip}
          </p>
        </div>
      </div>
    </section>
  )
}