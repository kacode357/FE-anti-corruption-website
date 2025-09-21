"use client"

import { useMemo, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import TTSBar from "@/components/tts/TTSBar"

interface Content2CausesProps {
  language: "vi" | "en"
}

export default function Content2_Causes({ language }: Content2CausesProps) {
  const t = translations[language]
  const images = ["/content2_1.png", "/content2_2.png", "/content2_3.png"]

  // Chia 12 hành vi → 3 nhóm x 4 item
  const groups = useMemo(() => chunk(t.acts, 4), [t.acts])
  const [active, setActive] = useState(0)

  // Văn bản cho TTS
  const getTtsText = () => {
    const parts: string[] = [t.title, t.lawRef, ...t.acts]
    return parts.join(". ")
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* TTS */}
      <TTSBar lang={language} getText={getTtsText} className="mb-4" />

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center text-3xl md:text-4xl font-extrabold text-sky-700"
      >
        {t.title}
      </motion.h2>

      {/* Law banner */}
      <div className="mx-auto mt-4 w-full max-w-2xl rounded-xl bg-gradient-to-r from-sky-600 to-blue-700 py-3 text-center text-white shadow">
        <p className="px-4 text-sm font-semibold md:text-base">{t.lawRef}</p>
      </div>

      {/* Main */}
      <div className="mt-12 grid gap-10 md:grid-cols-2">
        {/* LEFT — Tabs + Accordions */}
        <div>
          {/* Tabs */}
          <div className="mb-4 grid grid-cols-3 gap-2">
            {groups.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={[
                  "rounded-lg px-3 py-2 text-sm font-semibold transition-all",
                  i === active
                    ? "bg-sky-600 text-white shadow"
                    : "bg-sky-50 text-sky-700 hover:bg-sky-100 border border-sky-100",
                ].join(" ")}
              >
                {language === "vi" ? `Nhóm ${i + 1}` : `Group ${i + 1}`}
              </button>
            ))}
          </div>

          {/* Accordion list */}
          <div className="space-y-4">
            {groups.map((items, gi) => (
              <motion.div
                key={gi}
                layout
                className="overflow-hidden rounded-2xl border border-sky-100 bg-white/90 shadow-sm"
              >
                {/* Header */}
                <button
                  onClick={() => setActive(gi)}
                  className="flex w-full items-center justify-between px-5 py-4"
                  aria-expanded={active === gi}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={[
                        "inline-flex h-8 w-8 items-center justify-center rounded-xl text-sm font-bold",
                        active === gi ? "bg-sky-600 text-white" : "bg-sky-100 text-sky-700",
                      ].join(" ")}
                    >
                      {String(gi + 1).padStart(2, "0")}
                    </span>
                    <p className="text-left font-semibold text-sky-700">
                      {language === "vi" ? `Các hành vi (nhóm ${gi + 1})` : `Acts (group ${gi + 1})`}
                    </p>
                  </div>

                  <span
                    className={[
                      "i-rotate transition-transform",
                      active === gi ? "rotate-180" : "rotate-0",
                    ].join(" ")}
                  >
                    ▼
                  </span>
                </button>

                {/* Content */}
                <AnimatePresence initial={false}>
                  {active === gi && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="px-5 pb-5"
                    >
                      <ul className="grid gap-3">
                        {items.map((text, idx) => {
                          const order = gi * 4 + idx + 1
                          return (
                            <motion.li
                              key={text}
                              initial={{ opacity: 0, x: -12 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: idx * 0.05 }}
                              className="flex items-start gap-3"
                            >
                              {/* Arrow + dashed box */}
                              <div className="mt-2 h-0 w-0 border-y-[8px] border-y-transparent border-l-[14px] border-l-yellow-400" />
                              <div className="flex-1 rounded-lg border-2 border-dashed border-yellow-400 bg-white px-4 py-2 shadow-sm">
                                <p className="text-gray-800">
                                  <span className="mr-2 rounded-full bg-sky-50 px-2 py-0.5 text-xs font-bold text-sky-700">
                                    {String(order).padStart(2, "0")}
                                  </span>
                                  {text}
                                </p>
                              </div>
                            </motion.li>
                          )
                        })}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT — Sticky image that changes with active group */}
        <div className="md:sticky md:top-24">
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 0.98, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="overflow-hidden rounded-3xl border border-sky-100 bg-white/70 p-4 shadow-xl backdrop-blur"
          >
            <img
              src={images[active % images.length]}
              alt={`illustration ${active + 1}`}
              className="mx-auto h-[420px] w-full max-w-md object-cover md:h-[520px]"
            />
          </motion.div>

          {/* caption */}
          <p className="mt-3 text-center text-xs text-gray-500">
            {language === "vi"
              ? "Ảnh minh họa sẽ thay đổi theo nhóm đang xem"
              : "Illustration changes with the active group"}
          </p>
        </div>
      </div>
    </section>
  )
}

/* ====== Helpers & i18n ====== */

const translations = {
  vi: {
    title: "CÁC HÀNH VI THAM NHŨNG",
    lawRef: "Điều 2 Luật Phòng, chống tham nhũng năm 2018",
    acts: [
      "Tham ô tài sản",
      "Nhận hối lộ",
      "Lạm dụng chức vụ, quyền hạn chiếm đoạt tài sản",
      "Lợi dụng chức vụ, quyền hạn trong khi thi hành nhiệm vụ, công vụ vì vụ lợi",
      "Giả mạo trong công tác vì vụ lợi",
      "Lạm quyền trong khi thi hành nhiệm vụ, công vụ vì vụ lợi",
      "Lợi dụng chức vụ, quyền hạn gây ảnh hưởng đối với người khác để trục lợi",
      "Đưa hối lộ, môi giới hối lộ để giải quyết công việc vì vụ lợi",
      "Nhũng nhiễu vì vụ lợi",
      "Lợi dụng chức vụ, quyền hạn sử dụng trái phép tài sản công vì vụ lợi",
      "Không thực hiện hoặc thực hiện không đầy đủ nhiệm vụ, công vụ vì vụ lợi",
      "Lợi dụng chức vụ, quyền hạn để bao che, cản trở, can thiệp trái pháp luật vì vụ lợi",
    ],
  },
  en: {
    title: "ACTS OF CORRUPTION",
    lawRef: "Article 2 of the 2018 Anti-Corruption Law",
    acts: [
      "Embezzlement of assets",
      "Accepting bribes",
      "Abuse of position/power to appropriate property",
      "Abuse of position/power while performing duties for personal gain",
      "Falsification in work for personal gain",
      "Exceeding authority while performing duties for personal gain",
      "Abuse of position/power to influence others for personal gain",
      "Giving or brokering bribes to solve affairs for personal gain",
      "Harassment for personal gain",
      "Illegal use of public property for personal gain",
      "Failure to perform or improperly performing duties for personal gain",
      "Abuse of position/power to cover up or obstruct inspection, investigation, or enforcement",
    ],
  },
}

function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = []
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size))
  return out
}
