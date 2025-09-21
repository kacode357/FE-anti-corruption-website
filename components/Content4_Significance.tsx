"use client"

import { motion } from "framer-motion"
import TTSBar from "@/components/tts/TTSBar"

interface Props {
  language: "vi" | "en"
}

export default function Content4_Significance({ language }: Props) {
  const t = translations[language]

  // Text-to-Speech payload
  const getTtsText = () => {
    const title = `${t.titleTop}. ${t.titleBottom}.`
    const items = t.items
      .map((it, idx) => `${language === "vi" ? "Mục" : "Item"} ${idx + 1}: ${it.heading}. ${it.quote}${it.cite ? `. ${it.cite}` : ""}`)
      .join(". ")
    return [title, items].join(" ")
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-10 md:py-14">
      {/* TTS Bar */}
      <TTSBar lang={language} getText={getTtsText} className="mb-6" />

      {/* Banner image */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-md"
      >
        <img
          src="/content4.jpg"
          alt={t.bannerAlt}
          className="w-full h-[220px] md:h-[320px] object-cover"
        />
      </motion.div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.1 }}
        className="mt-8 text-center text-2xl md:text-3xl font-extrabold leading-snug text-sky-800"
      >
        {t.titleTop} <br className="hidden sm:block" />
        <span className="text-sky-700">{t.titleBottom}</span>
      </motion.h2>

      {/* Items */}
      <div className="mt-8 space-y-6">
        {t.items.map((it, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 * idx }}
            className="rounded-2xl bg-white/90 border border-sky-100 shadow-sm p-4 md:p-5"
          >
            <div className="flex items-start gap-4">
              {/* Number badge */}
              <div className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-sky-600 text-white font-bold">
                {idx + 1}
              </div>

              {/* Content */}
              <div className="min-w-0">
                <h3 className="text-base md:text-lg font-bold text-sky-800 mb-2">
                  {it.heading}
                </h3>

                <blockquote className="rounded-xl border-2 border-dashed border-yellow-400 bg-white px-4 py-3">
                  <p className="text-gray-800/95 leading-relaxed italic">
                    “{it.quote}”
                  </p>
                  {it.cite && (
                    <p className="mt-1.5 text-sm text-gray-500">({it.cite})</p>
                  )}
                </blockquote>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

/* ---------------- i18n ---------------- */
const translations = {
  vi: {
    bannerAlt:
      "Họp bàn công tác phòng, chống tham nhũng và xây dựng Nhà nước pháp quyền",
    titleTop:
      "Ý NGHĨA CỦA PHÒNG, CHỐNG THAM NHŨNG TRONG BẢO VỆ CHẾ ĐỘ",
    titleBottom: "VÀ XÂY DỰNG NHÀ NƯỚC PHÁP QUYỀN",
    items: [
      {
        heading:
          "Phòng, chống tham nhũng có ý nghĩa sống còn trong việc bảo vệ sự tồn vong của chế độ.",
        quote:
          "Tham nhũng, tiêu cực là nguy cơ trực tiếp đe doạ sự tồn vong của chế độ ta. Vì vậy, phòng, chống tham nhũng, tiêu cực là yêu cầu đặc biệt quan trọng, có ý nghĩa sống còn đối với Đảng và chế độ.",
        cite:
          "Kiên quyết, kiên trì đấu tranh phòng, chống tham nhũng, tiêu cực, tr. 5",
      },
      {
        heading:
          "Đấu tranh phòng, chống tham nhũng gắn liền với việc xây dựng và hoàn thiện Nhà nước pháp quyền xã hội chủ nghĩa.",
        quote:
          "Đấu tranh phòng, chống tham nhũng, tiêu cực gắn liền với xây dựng, hoàn thiện Nhà nước pháp quyền xã hội chủ nghĩa Việt Nam của Nhân dân, do Nhân dân, vì Nhân dân; mọi quyền lực nhà nước được kiểm soát chặt chẽ, pháp luật giữ vị trí tối thượng, bảo đảm công khai, minh bạch.",
        cite:
          "Kiên quyết, kiên trì đấu tranh phòng, chống tham nhũng, tiêu cực, tr. 12",
      },
      {
        heading:
          "Công tác này có vai trò to lớn trong phát triển kinh tế – xã hội. Nếu để tham nhũng hoành hành, nó sẽ gây ra những tổn thất nặng nề.",
        quote:
          "Tham nhũng gây thất thoát, lãng phí lớn tài sản, ngân sách nhà nước, làm méo mó cơ chế thị trường, cản trở sự phát triển đất nước. Kiên quyết đấu tranh phòng, chống tham nhũng góp phần tạo lập môi trường đầu tư, kinh doanh minh bạch, bền vững, thúc đẩy phát triển kinh tế – xã hội nhanh, bền vững.",
        cite:
          "Kiên quyết, kiên trì đấu tranh phòng, chống tham nhũng, tiêu cực, tr. 20",
      },
    ],
  },
  en: {
    bannerAlt:
      "Meeting on anti-corruption and building a rule-of-law socialist state",
    titleTop:
      "SIGNIFICANCE OF ANTI-CORRUPTION IN SAFEGUARDING THE REGIME",
    titleBottom: "AND BUILDING A RULE-OF-LAW STATE",
    items: [
      {
        heading:
          "Anti-corruption is vital to the survival of the regime.",
        quote:
          "Corruption and negativity directly threaten the existence of our regime. Therefore, fighting corruption is of paramount importance and vital to the Party and the regime.",
        cite: "From official Party documents on anti-corruption",
      },
      {
        heading:
          "The fight against corruption is tied to building and perfecting the socialist rule-of-law state.",
        quote:
          "Anti-corruption goes hand-in-hand with building a socialist rule-of-law state where all state power is tightly controlled, the law is supreme, and transparency is ensured.",
        cite: "From official Party documents on anti-corruption",
      },
      {
        heading:
          "It plays a major role in socio-economic development; rampant corruption causes severe losses.",
        quote:
          "Corruption causes major losses of assets and the state budget, distorts markets, and hinders development. Resolute anti-corruption helps create a transparent business environment and promotes sustainable growth.",
        cite: "From official Party documents on anti-corruption",
      },
    ],
  },
}
