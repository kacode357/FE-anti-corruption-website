// components/Content5_Responsibility.tsx
"use client"

import { motion } from "framer-motion"
import TTSBar from "@/components/tts/TTSBar"

interface Content5ResponsibilityProps {
  language: "vi" | "en"
}

export default function Content5_Responsibility({ language }: Content5ResponsibilityProps) {
  const t = translations[language]

  // ===== Text-to-Speech payload (thuần chữ, không JSX) =====
  const getTtsText = () => {
    const title = `${t.titleTop}. ${t.titleBottom}.`
    const bullets = t.plainBullets
      .map((b, i) => `${language === "vi" ? "Ý" : "Point"} ${i + 1}: ${b}.`)
      .join(" ")
    const note = t.note
    return [title, bullets, note].join(" ")
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* TTS Bar */}
      <TTSBar lang={language} getText={getTtsText} className="mb-6" />

      {/* Title banner */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="relative mx-auto mb-8 w-full max-w-4xl rounded-3xl border border-sky-100 bg-gradient-to-br from-sky-50 to-blue-50 p-5 text-center shadow"
      >
        <h2 className="text-2xl md:text-4xl font-extrabold text-sky-800 leading-tight">
          {t.titleTop}
          <br className="hidden md:block" />
          <span className="text-sky-700">{t.titleBottom}</span>
        </h2>
      </motion.div>

      {/* Main row: left img – content – right img */}
      <div className="grid grid-cols-12 items-start gap-6">
        {/* left image */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="col-span-12 md:col-span-3 order-3 md:order-1"
        >
          <Figure
            src="/content5_1.png"
            alt={language === "vi" ? "Minh họa trách nhiệm công dân" : "Citizens’ responsibilities illustration"}
          />
        </motion.div>

        {/* content list */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="col-span-12 md:col-span-6 order-1 md:order-2"
        >
          <ul className="space-y-4 text-lg md:text-xl">
            {t.bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 inline-block h-2.5 w-2.5 flex-none rounded-full bg-sky-600" />
                <p className="text-gray-900 leading-relaxed">{b}</p>
              </li>
            ))}
          </ul>

          <div className="mt-6 rounded-xl border border-sky-100 bg-white/80 p-4 shadow-sm">
            <p className="text-sm md:text-base text-sky-700 font-medium">{t.note}</p>
          </div>
        </motion.div>

        {/* right image */}
        <motion.div
          initial={{ opacity: 0, x: 12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="col-span-12 md:col-span-3 order-2 md:order-3"
        >
          <Figure src="/content5_2.png" alt="" />
        </motion.div>
      </div>
    </section>
  )
}

/** Ảnh tự do (không cố định), viền vàng */
function Figure({ src, alt = "" }: { src: string; alt?: string }) {
  return (
    <div className="mx-auto w-full overflow-hidden rounded-2xl border-2 border-yellow-400 bg-white shadow-sm">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="block w-full h-auto object-contain"
      />
    </div>
  )
}

/* ---------------- i18n ---------------- */
const translations = {
  vi: {
    titleTop: "TRÁCH NHIỆM CỦA CÔNG DÂN",
    titleBottom: "TRONG PHÒNG, CHỐNG THAM NHŨNG",
    // JSX để render đẹp
    bullets: [
      <>
        <strong>Chấp hành</strong> pháp luật về phòng, chống tham nhũng
      </>,
      <>
        <strong>Phát hiện, tố cáo</strong>, báo tin về hành vi tham nhũng{" "}
        <span className="text-sky-700 font-semibold">→ được bảo vệ & khen thưởng</span>
      </>,
      <>
        <strong>Hợp tác, hỗ trợ</strong> cơ quan có thẩm quyền trong điều tra, xử lý
      </>,
      <>
        Khi tố cáo: cung cấp đầy đủ họ tên, địa chỉ, thông tin, tài liệu{" "}
        <span className="text-sky-700 font-semibold">→ được bảo vệ an toàn</span>
      </>,
      <>
        Phản ánh <strong>khách quan, trung thực</strong>, tránh vu khống, bịa đặt
      </>,
      <>
        <strong>Đề xuất, kiến nghị</strong> hoàn thiện pháp luật & giám sát việc thực hiện
      </>,
    ],
    // Bản thuần chữ cho TTS
    plainBullets: [
      "Chấp hành pháp luật về phòng, chống tham nhũng",
      "Phát hiện, tố cáo, báo tin về hành vi tham nhũng, được bảo vệ và khen thưởng",
      "Hợp tác, hỗ trợ cơ quan có thẩm quyền trong điều tra, xử lý",
      "Khi tố cáo, cung cấp đầy đủ họ tên, địa chỉ, thông tin, tài liệu, được bảo vệ an toàn",
      "Phản ánh khách quan, trung thực, tránh vu khống, bịa đặt",
      "Đề xuất, kiến nghị hoàn thiện pháp luật và giám sát việc thực hiện",
    ],
    note:
      "Tip: Người tố cáo, người cung cấp thông tin hợp tác đúng quy định sẽ được giữ bí mật danh tính và hưởng cơ chế bảo vệ phù hợp.",
  },
  en: {
    titleTop: "CITIZENS’ RESPONSIBILITIES",
    titleBottom: "IN ANTI-CORRUPTION",
    bullets: [
      <>
        <strong>Comply</strong> with anti-corruption laws
      </>,
      <>
        <strong>Detect & report</strong> corrupt acts{" "}
        <span className="text-sky-700 font-semibold">→ protected & rewarded</span>
      </>,
      <>
        <strong>Cooperate and support</strong> competent authorities in investigation and handling
      </>,
      <>
        When reporting, provide full name, address, information, documents{" "}
        <span className="text-sky-700 font-semibold">→ protection ensured</span>
      </>,
      <>
        Provide feedback <strong>objectively & truthfully</strong>, avoid defamation or fabrication
      </>,
      <>
        <strong>Propose recommendations</strong> to improve laws & monitor implementation
      </>,
    ],
    plainBullets: [
      "Comply with anti-corruption laws",
      "Detect and report corrupt acts, with protection and rewards",
      "Cooperate and support competent authorities in investigation and handling",
      "When reporting, provide full name, address, information and documents, with protection ensured",
      "Provide feedback objectively and truthfully, avoid defamation or fabrication",
      "Propose recommendations to improve laws and monitor implementation",
    ],
    note:
      "Tip: Whistleblowers who cooperate in line with the law will have their identities protected and receive appropriate safeguards.",
  },
}
