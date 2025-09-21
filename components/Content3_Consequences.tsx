"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import TTSBar from "@/components/tts/TTSBar"

interface Content3Props {
  language: "vi" | "en"
}

export default function Content3_Consequences({ language }: Content3Props) {
  const t = translations[language]
  const [showExample, setShowExample] = useState(false)

  // ===== Text-to-Speech payload =====
  const getTtsText = () => {
    const parts: string[] = [
      t.title,
      t.intro,
      `${t.subjective.title}: ${t.subjective.items.join(". ")}`,
      `${t.objective.title}: ${t.objective.items.join(". ")}`,
      t.sources.title,
      t.example.caseTitle,
      t.example.summary,
      `${t.impacts.title}:`,
      ...t.impacts.groups.flatMap((g) => [`${g.label}: ${g.points.join(". ")}`]),
    ]
    return parts.join(". ")
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-14">
      {/* TTS Bar */}
      <TTSBar lang={language} getText={getTtsText} className="mb-6" />

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-sky-700">
          {t.title}
        </h2>
        <p className="mx-auto mt-3 max-w-3xl text-gray-600">
          {t.intro}
        </p>
      </motion.div>

      {/* Causes: 2 columns */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Subjective */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-sky-100 bg-white/80 shadow-sm"
        >
          <Ribbon>{t.subjective.title}</Ribbon>
          <ul className="space-y-3 p-5">
            {t.subjective.items.map((txt, i) => (
              <li key={i} className="flex items-start gap-3">
                <Triangle />
                <Box>{txt}</Box>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Objective */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl border border-sky-100 bg-white/80 shadow-sm"
        >
          <Ribbon>{t.objective.title}</Ribbon>
          <ul className="space-y-3 p-5">
            {t.objective.items.map((txt, i) => (
              <li key={i} className="flex items-start gap-3">
                <Triangle />
                <Box>{txt}</Box>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* ======= VỤ ÁN: NỔI BẬT NGUỒN THAM KHẢO ======= */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-10 rounded-2xl border border-sky-200 bg-gradient-to-br from-sky-50 to-blue-50 p-5 shadow"
      >
        <div className="mb-3 flex items-center justify-between gap-3">
          <h3 className="text-lg md:text-xl font-extrabold text-sky-700">
            {t.sources.title}
          </h3>
          <span className="hidden md:inline-block rounded-full bg-sky-600/10 px-3 py-1 text-xs font-semibold text-sky-700">
            {t.sources.badge}
          </span>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {t.sources.links.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3 rounded-xl border border-sky-100 bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              aria-label={link.title}
            >
              {/* icon */}
              <div className="mt-0.5 flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-sky-600 text-white">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M10 13a5 5 0 0 1 7 7l-2 2a5 5 0 0 1-7-7l1-1" />
                  <path d="M14 11a5 5 0 0 0-7-7L5 6a5 5 0 0 0 7 7l2-2" />
                </svg>
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-sky-700 group-hover:underline">
                  {link.title}
                </p>
                <p className="truncate text-xs text-gray-500">{link.url}</p>
              </div>
              <span className="ml-auto mt-0.5 text-sky-600">↗</span>
            </a>
          ))}
        </div>
      </motion.div>
      {/* ======= /VỤ ÁN ======= */}

      {/* Example (collapsible) */}
      <div className="mt-6">
        <button
          onClick={() => setShowExample((v) => !v)}
          className="mx-auto flex items-center gap-2 rounded-xl bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-sky-700"
        >
          {showExample ? "−" : "+"} {t.example.toggle}
        </button>

        <AnimatePresence initial={false}>
          {showExample && (
            <motion.div
              key="ex"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="mt-5 grid gap-6 rounded-2xl border border-sky-100 bg-white/80 p-6 shadow-sm">
                <div>
                  <h4 className="text-lg font-bold text-sky-700">{t.example.caseTitle}</h4>
                  <div className="mt-3 grid md:grid-cols-2 gap-4">
                    <div className="rounded-xl border-2 border-dashed border-yellow-400 bg-white px-4 py-3">
                      <p className="text-gray-800">{t.example.summary}</p>
                    </div>
                    <div className="rounded-xl border-2 border-dashed border-yellow-400 bg-white px-4 py-3">
                      <ul className="list-disc pl-5 text-gray-800">
                        {t.example.bullets.map((b, i) => (
                          <li key={i} className="mb-1">{b}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Impacts compact cards */}
                <div>
                  <h5 className="mb-3 text-center text-xl font-extrabold text-sky-700">
                    {t.impacts.title}
                  </h5>
                  <div className="grid md:grid-cols-3 gap-4">
                    {t.impacts.groups.map((g, i) => (
                      <div
                        key={i}
                        className="rounded-xl border border-sky-100 bg-gradient-to-br from-sky-50 to-blue-50 p-4 shadow"
                      >
                        <p className="mb-2 text-sm font-semibold text-sky-700">• {g.label}</p>
                        <ul className="space-y-1 text-sm text-gray-700">
                          {g.points.map((p, j) => (
                            <li key={j}>– {p}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

/* ---------- Small UI pieces ---------- */
function Ribbon({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto mt-4 w-fit rounded-lg bg-sky-100 px-4 py-2 text-sm font-bold text-sky-700 shadow-sm">
      {children}
      <span className="absolute left-[-18px] top-1/2 -translate-y-1/2 h-0 w-0 border-y-8 border-y-transparent border-r-[18px] border-r-sky-100" />
      <span className="absolute right-[-18px] top-1/2 -translate-y-1/2 h-0 w-0 border-y-8 border-y-transparent border-l-[18px] border-l-sky-100" />
    </div>
  )
}
function Triangle() {
  return (
    <div className="mt-2 h-0 w-0 border-y-[10px] border-y-transparent border-l-[16px] border-l-yellow-400" />
  )
}
function Box({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-1 rounded-lg border-2 border-dashed border-yellow-400 bg-white px-4 py-2">
      <p className="text-gray-800">{children}</p>
    </div>
  )
}

/* ---------- i18n ---------- */
const translations = {
  vi: {
    title: "NGUYÊN NHÂN CỦA HÀNH VI THAM NHŨNG",
    intro:
      "Nguyên nhân xuất phát từ cả yếu tố chủ quan (con người, tổ chức) và khách quan (thể chế, cơ chế quản lý, môi trường kinh tế - xã hội). Dưới đây là tóm tắt cô đọng, dễ kiểm tra.",
    subjective: {
      title: "Nguyên nhân chủ quan",
      items: [
        "Tổ chức, hoạt động, phân hoá chức năng trong hệ thống chính trị còn nhiều khiếm khuyết",
        "Chưa phân hoá rõ trách nhiệm của cơ quan chuyên trách phòng, chống tham nhũng",
        "Người đứng đầu chưa nhận thức đầy đủ, thiếu gương mẫu",
        "Cơ chế, chính sách nội bộ và quy trình công vụ chưa hoàn thiện",
        "Pháp luật PCTN chưa đủ mạnh, còn kẽ hở",
        "Tuyên truyền – giáo dục còn hình thức, phong trào",
      ],
    },
    objective: {
      title: "Nguyên nhân khách quan",
      items: [
        "Tác động của mặt trái kinh tế thị trường và hội nhập",
        "Hệ thống chính sách – pháp luật thiếu đồng bộ, nhất quán",
        "Quản lý nhà nước một số lĩnh vực còn lỏng lẻo, hiệu quả thấp",
        "Công tác quản lý cán bộ, đảng viên, công chức, viên chức còn hạn chế",
        "Công tác PCTN ở cấp địa phương, ngành chuyên trách chưa rõ rệt, trách nhiệm người đứng đầu chưa cao",
        "Suy thoái về tư tưởng chính trị, đạo đức, lối sống của một bộ phận cán bộ",
      ],
    },
    sources: {
      title: "Vụ án Việt Á – Nguồn tham khảo chính thống",
      badge: "Link ngoài • mở tab mới",
      links: [
        {
          title: "Nhân Dân: Vụ án Việt Á – nâng khống giá kit test…",
          url: "https://nhandan.vn/vu-an-viet-a-nang-khong-gia-kit-test-gay-thiet-hai-hon-400-ty-dong-cua-nha-nuoc-post790504.html",
        },
        {
          title:
            "Chính phủ: Đại án Việt Á – truy tố 2 cựu Bộ trưởng cùng 36 bị can",
          url: "https://xaydungchinhsach.chinhphu.vn/dai-an-viet-a-truy-to-2-cuu-bo-truong-cung-36-bi-can-119230930184729463.htm",
        },
      ],
    },
    example: {
      toggle: "Ví dụ thực tế (mở/đóng)",
      caseTitle: "Vụ án Việt Á – minh họa điển hình",
      summary:
        "Lợi dụng chính sách ưu tiên trong dịch bệnh để trục lợi; gây thất thoát ngân sách, méo mó thị trường và hệ luỵ xã hội.",
      bullets: [
        "Thiếu kiểm tra, giám sát; buông lỏng quy trình",
        "Cán bộ, lãnh đạo tiếp tay; đưa/nhận hối lộ",
        "Ảnh hưởng xấu đến niềm tin của người dân",
      ],
    },
    impacts: {
      title: "TÁC HẠI CỦA HÀNH VI THAM NHŨNG (TÓM TẮT)",
      groups: [
        {
          label: "Chính trị",
          points: ["Suy giảm uy tín, hiệu lực của Nhà nước", "Xói mòn niềm tin của nhân dân"],
        },
        {
          label: "Kinh tế",
          points: ["Thất thoát tài sản, ngân sách", "Làm méo mó thị trường, kìm hãm phát triển"],
        },
        {
          label: "Đạo đức",
          points: ["Lệch chuẩn giá trị, lối sống", "Gia tăng bất công, suy thoái xã hội"],
        },
      ],
    },
  },
  en: {
    title: "CAUSES OF CORRUPT ACTS",
    intro:
      "Causes stem from both subjective (people, organizations) and objective (institutions, governance, socio-economic context) factors. Below is a concise summary.",
    subjective: {
      title: "Subjective causes",
      items: [
        "Organizational and functional flaws in the political system",
        "Undefined responsibilities of specialized anti-corruption bodies",
        "Leaders’ insufficient awareness and example-setting",
        "Incomplete internal mechanisms, policies and procedures",
        "Anti-corruption laws not strong enough",
        "Awareness/communication remains superficial",
      ],
    },
    objective: {
      title: "Objective causes",
      items: [
        "Downside of market economy & globalization",
        "Policies and laws lack consistency and synchronization",
        "State management in some sectors is loose and ineffective",
        "Cadre/party member/civil servant management is limited",
        "Local AC efforts and accountability of leaders are weak",
        "Moral degradation of a portion of officials",
      ],
    },
    sources: {
      title: "Viet A case – Official references",
      badge: "External links • new tab",
      links: [
        {
          title:
            "Nhan Dan: Viet A case – inflated test-kit prices causing major state losses",
          url: "https://nhandan.vn/vu-an-viet-a-nang-khong-gia-kit-test-gay-thiet-hai-hon-400-ty-dong-cua-nha-nuoc-post790504.html",
        },
        {
          title:
            "Government: Indictment of 2 former ministers and 36 defendants",
          url: "https://xaydungchinhsach.chinhphu.vn/dai-an-viet-a-truy-to-2-cuu-bo-truong-cung-36-bi-can-119230930184729463.htm",
        },
      ],
    },
    example: {
      toggle: "Real-world example (toggle)",
      caseTitle: "Viet A case – a typical illustration",
      summary:
        "Interest groups exploited preferential policies during the pandemic for profit; causing budget losses, market distortion, and social consequences.",
      bullets: [
        "Lack of inspection/supervision; loosened procedures",
        "Officials colluded; bribery and brokerage occurred",
        "Eroded public trust",
      ],
    },
    impacts: {
      title: "HARMS OF CORRUPT ACTS (SUMMARY)",
      groups: [
        {
          label: "Politics",
          points: ["Undermines state legitimacy and effectiveness", "Erodes public trust"],
        },
        {
          label: "Economy",
          points: ["Resource and budget losses", "Distorts markets, stalls development"],
        },
        {
          label: "Morality",
          points: ["Value deviation; social decay", "Increases injustice and inequality"],
        },
      ],
    },
  },
}
