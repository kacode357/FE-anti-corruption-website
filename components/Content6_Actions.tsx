"use client"

import { motion } from "framer-motion"
import TTSBar from "@/components/tts/TTSBar"

interface Content6ActionsProps {
  language: "vi" | "en"
}

export default function Content6_Actions({ language }: Content6ActionsProps) {
  const t = translations[language]

  // dữ liệu 3 khối (xen kẽ ảnh – nội dung)
  const blocks = [
    {
      title: t.blocks[0].title,
      quote: t.blocks[0].quote,
      cite: t.blocks[0].cite,
      icon: PartyIcon,
      image: "/content6_1.png",
    },
    {
      title: t.blocks[1].title,
      quote: t.blocks[1].quote,
      cite: t.blocks[1].cite,
      icon: PeopleIcon,
      image: "/content6_2.png",
    },
    {
      title: t.blocks[2].title,
      quote: t.blocks[2].quote,
      cite: t.blocks[2].cite,
      icon: GradIcon,
      image: "/content6_3.png",
    },
  ]

  // ===== Text-to-Speech payload =====
  const getTtsText = () => {
    const title = `${t.titleTop}. ${t.titleBottom}.`
    const content = blocks
      .map((b, i) => {
        const label = language === "vi" ? `Khối ${i + 1}` : `Block ${i + 1}`
        return `${label}: ${b.title}. ${b.quote}${b.cite ? `. ${b.cite}` : ""}`
      })
      .join(" ")
    return [title, content].join(" ")
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* TTS Bar */}
      <TTSBar lang={language} getText={getTtsText} className="mb-6" />

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center text-2xl md:text-3xl font-extrabold text-sky-800"
      >
        {t.titleTop}{" "}
        <span className="text-sky-700">{t.titleBottom}</span>
      </motion.h2>

      {/* 3 rows */}
      <div className="mt-8 space-y-10">
        {blocks.map((b, i) => {
          const Icon = b.icon
          const reverse = i % 2 === 1 // hàng 2 đảo cột như ảnh
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`grid items-center gap-6 md:gap-10 md:grid-cols-2`}
            >
              {/* Text box */}
              <div className={`${reverse ? "md:order-2" : ""}`}>
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-600 text-white">
                    <Icon />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-sky-800">
                    {b.title}
                  </h3>
                </div>

                <blockquote className="rounded-2xl border-2 border-dashed border-yellow-400 bg-white/90 p-4 md:p-5 shadow-sm">
                  <p className="text-gray-800 leading-relaxed italic">“{b.quote}”</p>
                  {b.cite && (
                    <p className="mt-2 text-sm text-gray-500">{b.cite}</p>
                  )}
                </blockquote>
              </div>

              {/* Image */}
              <div className={`${reverse ? "md:order-1" : ""}`}>
                <div className="overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-sm">
                  <img
                    src={b.image}
                    alt=""
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

/* ---------- Icons ---------- */
function PartyIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M12 2 3 6v6c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V6l-9-4z" />
    </svg>
  )
}
function PeopleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M16 11c1.66 0 3-1.57 3-3.5S17.66 4 16 4s-3 1.57-3 3.5S14.34 11 16 11zM8 11c1.66 0 3-1.57 3-3.5S9.66 4 8 4 5 5.57 5 7.5 6.34 11 8 11zm0 2c-2.33 0-7 1.17-7 3.5V20h14v-3.5C15 14.17 10.33 13 8 13zm8 0c-.29 0-.62.02-.97.06 1.16.84 1.97 1.97 1.97 3.44V20h6v-3.5c0-2.33-4.67-3.5-7-3.5z" />
    </svg>
  )
}
function GradIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M12 3 2 8l10 5 8.5-4.25V17H22V8L12 3zm0 7.75L5 7.5V12c0 2 3.5 3.5 7 3.5s7-1.5 7-3.5V7.5l-7 3.25z" />
    </svg>
  )
}

/* ---------- i18n ---------- */
const translations = {
  vi: {
    titleTop: "LIÊN HỆ: HÀNH ĐỘNG THIẾT THỰC ĐỂ NUÔI DƯỠNG NIỀM TIN",
    titleBottom: "XÃ HỘI VÀ PHÁT TRIỂN BỀN VỮNG",
    blocks: [
      {
        title: "Về phía Đảng và Nhà nước",
        quote:
          "Phải kiên quyết, kiên trì với quyết tâm chính trị rất cao, nỗ lực rất lớn, hành động quyết liệt, đồng bộ, hiệu quả; xử lý nghiêm minh cán bộ sai phạm, 'không có vùng cấm, không có ngoại lệ'.",
        cite:
          "(Kiên quyết, kiên trì đấu tranh phòng, chống tham nhũng, tiêu cực, tr. 8)",
      },
      {
        title: "Về phía nhân dân",
        quote:
          "Mỗi người dân có quyền và trách nhiệm phát hiện, tố giác tham nhũng, tiêu cực; tích cực tham gia xây dựng Đảng, chính quyền trong sạch, vững mạnh.",
        cite:
          "(Kiên quyết, kiên trì đấu tranh phòng, chống tham nhũng, tiêu cực, tr. 15)",
      },
      {
        title: "Về thế hệ trẻ và sinh viên",
        quote:
          "Thế hệ trẻ cần phát huy vai trò xung kích, đi đầu trong học tập, rèn luyện đạo đức, sống trung thực, liêm chính; góp phần xây dựng xã hội văn minh, tiến bộ.",
        cite:
          "(Kiên quyết, kiên trì đấu tranh phòng, chống tham nhũng, tiêu cực, tr. 25)",
      },
    ],
  },
  en: {
    titleTop: "CALL TO ACTION: PRACTICAL STEPS TO BUILD TRUST",
    titleBottom: "AND SUSTAINABLE DEVELOPMENT",
    blocks: [
      {
        title: "From the Party and the State",
        quote:
          "Be resolute and persistent with very high political determination; act decisively, synchronously and effectively; strictly handle violations with 'no forbidden zones, no exceptions'.",
        cite:
          "(From Party documents on anti-corruption)",
      },
      {
        title: "From the people",
        quote:
          "Every citizen has the right and responsibility to detect and report corruption and negativity; actively participate in building a clean and strong Party and government.",
        cite:
          "(From Party documents on anti-corruption)",
      },
      {
        title: "From the youth and students",
        quote:
          "Young people should take the lead in study and moral cultivation, live honestly and with integrity; contribute to building a civilized, progressive society.",
        cite:
          "(From Party documents on anti-corruption)",
      },
    ],
  },
}
