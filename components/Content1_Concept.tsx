"use client"

import { motion } from "framer-motion"
import TTSBar from "@/components/tts/TTSBar"

interface Content1ConceptProps {
  language: "vi" | "en"
}

export default function Content1_Concept({ language }: Content1ConceptProps) {
  const translations = {
    vi: {
      overline: "Chủ đề 1",
      title: "KHÁI NIỆM VỀ THAM NHŨNG",
      // Bản hiển thị (JSX)
      lawText: (
        <>
          Theo khoản 1 Điều 3 Luật Phòng, chống tham nhũng 2018,{" "}
          <span className="font-semibold text-sky-700">tham nhũng</span> là hành vi của người có{" "}
          <span className="font-semibold text-sky-700">chức vụ, quyền hạn</span> đã{" "}
          <span className="font-semibold text-sky-700">lợi dụng</span> chức vụ, quyền hạn đó{" "}
          <span className="font-semibold text-sky-700">vì vụ lợi</span>.
        </>
      ),
      // Bản text thuần để TTS đọc
      lawTextPlain:
        "Theo khoản 1 Điều 3 Luật Phòng, chống tham nhũng 2018, tham nhũng là hành vi của người có chức vụ, quyền hạn đã lợi dụng chức vụ, quyền hạn đó vì vụ lợi.",
      roleTitle: "Người có chức vụ, quyền hạn",
      roleDesc:
        "Là người do bổ nhiệm, bầu cử, tuyển dụng, hợp đồng… được giao thực hiện nhiệm vụ, công vụ nhất định.",
      benefitTitle: "Vụ lợi",
      benefitDesc: "Nhằm đạt được lợi ích vật chất hoặc phi vật chất không chính đáng.",
      bullets: [
        "Nhận hối lộ, tham ô tài sản",
        "Lạm dụng chức vụ, quyền hạn để trục lợi",
        "Thiếu trách nhiệm gây hậu quả nghiêm trọng",
      ],
      tip: "Hãy chú ý tới các dấu hiệu bất thường trong quy trình, lợi ích nhóm, phong bì — đó thường là chỉ báo của tham nhũng.",
    },
    en: {
      overline: "Topic 1",
      title: "CONCEPT OF CORRUPTION",
      lawText: (
        <>
          According to Article 3, Clause 1 of the 2018 Anti-Corruption Law,{" "}
          <span className="font-semibold text-sky-700">corruption</span> is the act of a person with{" "}
          <span className="font-semibold text-sky-700">position or power</span> who{" "}
          <span className="font-semibold text-sky-700">abuses</span> that position or power{" "}
          <span className="font-semibold text-sky-700">for personal gain</span>.
        </>
      ),
      lawTextPlain:
        "According to Article 3, Clause 1 of the 2018 Anti-Corruption Law, corruption is the act of a person with position or power who abuses that position or power for personal gain.",
      roleTitle: "Person with position or power",
      roleDesc:
        "A person appointed, elected, recruited, or contracted to perform specific duties or public service.",
      benefitTitle: "Personal gain",
      benefitDesc: "Obtaining unjustified material or non-material benefits.",
      bullets: [
        "Bribery, embezzlement of public property",
        "Abuse of office or power for profit",
        "Irresponsibility causing serious consequences",
      ],
      tip: "Watch for unusual procedures, interest groups, and envelopes — common indicators of corruption.",
    },
  } as const

  const t = translations[language]

  // Văn bản để TTS đọc
  const getTtsText = () => {
    const parts: string[] = [
      t.title,
      t.lawTextPlain,
      `${t.roleTitle}. ${t.roleDesc}`,
      `${t.benefitTitle}. ${t.benefitDesc}`,
      ...t.bullets,
      `${language === "vi" ? "Gợi ý" : "Tip"}. ${t.tip}`,
    ]
    return parts.join(". ")
  }

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        {/* Thanh đọc văn bản */}
        <TTSBar lang={language} getText={getTtsText} className="mb-6" />

        {/* Hàng đầu: Tiêu đề + luật + ảnh */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid items-center gap-10 md:grid-cols-5"
        >
          {/* Text trái */}
          <div className="md:col-span-3">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700">
              <span className="h-2 w-2 rounded-full bg-sky-500"></span>
              {t.overline}
            </div>

            <h2 className="text-balance bg-gradient-to-r from-sky-700 to-blue-700 bg-clip-text text-3xl font-extrabold text-transparent md:text-4xl">
              {t.title}
            </h2>

            <div className="mt-6 rounded-2xl border border-sky-100 bg-white/70 p-5 shadow-sm backdrop-blur">
              <p className="text-lg leading-relaxed text-gray-800">{t.lawText}</p>
            </div>
          </div>

          {/* Ảnh phải */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2"
          >
            <div className="overflow-hidden rounded-3xl border border-sky-100 bg-white/60 p-4 shadow-xl backdrop-blur">
              <img
                src="/content1.png"
                alt={language === "vi" ? "Minh hoạ khái niệm tham nhũng" : "Corruption concept illustration"}
                className="mx-auto h-auto w-full object-contain"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Hàng dưới: Role + Benefit + Bullets + Tip */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-sky-100 bg-white/70 p-5 shadow-sm">
            <p className="font-semibold text-gray-900">{t.roleTitle}</p>
            <p className="mt-1 text-gray-700">{t.roleDesc}</p>
          </div>

          <div className="rounded-xl border border-sky-100 bg-white/70 p-5 shadow-sm">
            <p className="font-semibold text-gray-900">{t.benefitTitle}</p>
            <p className="mt-1 text-gray-700">{t.benefitDesc}</p>
          </div>

          <div className="rounded-xl border border-sky-100 bg-white/70 p-5 shadow-sm">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-sky-700">
              {language === "vi" ? "Các hình thức thường gặp" : "Common forms"}
            </p>
            <ul className="space-y-2">
              {t.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-sky-600 text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  <span className="text-gray-800">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-blue-100 bg-gradient-to-br from-sky-50 to-blue-50 p-5 shadow-sm">
            <p className="text-sm text-blue-800">
              <span className="mr-2 font-semibold">💡 {language === "vi" ? "Gợi ý:" : "Tip:"}</span>
              {t.tip}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
