// app/(site)/home/page.tsx  — Home (đã thay mục “Thống kê quan trọng” có nguồn)
"use client"

import { useEffect, useMemo, useState } from "react"
import { motion } from "framer-motion"
import { useRouter, useSearchParams } from "next/navigation"
import Header from "@/components/Header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { homeTranslations, HomeLanguage } from "@/lib/translations/home"

export default function Home() {
  const router = useRouter()
  const searchParams = useSearchParams()

  // 1) init từ URL hoặc localStorage
  const initialLang = useMemo<HomeLanguage>(() => {
    const q =
      (searchParams.get("lang") as HomeLanguage) ||
      (typeof window !== "undefined" ? (localStorage.getItem("lang") as HomeLanguage) : undefined)
    return q === "en" || q === "vi" ? q : "vi"
  }, [searchParams])

  const [language, setLanguage] = useState<HomeLanguage>(initialLang)

  // 2) đồng bộ khi URL đổi (VD user gõ tay ?lang=en)
  useEffect(() => {
    const q = searchParams.get("lang") as HomeLanguage | null
    if (q && (q === "en" || q === "vi") && q !== language) {
      setLanguage(q)
      if (typeof window !== "undefined") localStorage.setItem("lang", q)
    }
  }, [searchParams, language])

  // 3) hàm đổi ngôn ngữ: update state + URL + localStorage
  const handleLanguageChange = (lang: HomeLanguage) => {
    if (lang === language) return
    setLanguage(lang)
    if (typeof window !== "undefined") localStorage.setItem("lang", lang)

    const params = new URLSearchParams(searchParams.toString())
    params.set("lang", lang)
    router.replace(`/?${params.toString()}`, { scroll: false })
  }

  const t = homeTranslations[language]

  const contentItems = [
    { id: 1, ...t.content1, icon: "📚", color: "from-sky-400 to-sky-600", image: "/legal-books-and-justice-scales-representing-corrup.jpg" },
    { id: 2, ...t.content2, icon: "🔍", color: "from-blue-400 to-blue-600", image: "/magnifying-glass-examining-documents-representing-.jpg" },
    { id: 3, ...t.content3, icon: "⚠️", color: "from-cyan-400 to-cyan-600", image: "/warning-signs-and-broken-chains-representing-corru.jpg" },
    { id: 4, ...t.content4, icon: "⚖️", color: "from-sky-500 to-sky-700", image: "/scales-of-justice-and-government-building-represen.jpg" },
    { id: 5, ...t.content5, icon: "👥", color: "from-blue-500 to-blue-700", image: "/diverse-group-of-citizens-raising-hands-representi.jpg" },
    { id: 6, ...t.content6, icon: "🎯", color: "from-cyan-500 to-sky-700", image: "/target-with-arrows-and-action-plan-representing-pr.jpg" },
  ]

  const handleLearnMore = (contentId: number) => {
    router.push(`/content/${contentId}?lang=${language}`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-50">
      {/* truyền hàm đã wrap để update URL */}
      <Header language={language} setLanguage={handleLanguageChange} />

      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="max-w-6xl mx-auto px-4 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-sky-700 mb-6 text-balance">
              {t.mainTitle}
            </h1>
            <p className="text-xl md:text-2xl text-sky-600 max-w-4xl mx-auto text-pretty mb-8">
              {t.subtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-sky-100"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img
                  src="/vietnamese-government-building-with-scales-of-just.jpg"
                  alt="Anti-corruption illustration"
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-sky-700 mb-4">
                  {t.whyImportant}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {t.heroDescription}
                </p>
                <p className="text-sky-600 font-medium">{t.importanceText}</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Stats (đã thay số liệu + nguồn) */}
        <section className="max-w-6xl mx-auto px-4 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-sky-700 text-center mb-12">
              {t.statistics.title}
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* 1) Thi hành án đã xong */}
              <div className="bg-gradient-to-r from-sky-500 to-blue-600 text-white p-8 rounded-2xl text-center shadow-xl">
                <div className="text-3xl md:text-4xl font-bold mb-2">9,211</div>
                <div className="text-sky-100">
                  {language === "vi"
                    ? "Việc thi hành án tham nhũng/kinh tế đã xong (2024)"
                    : "Completed enforcement tasks on corruption/economic cases (2024)"}
                </div>
                <div className="mt-2 text-sky-100/90 text-sm">
                  {language === "vi" ? "Tương ứng &gt; 22.177 tỷ đồng" : "Over VND 22.177 trillion recovered"}
                </div>
                <a
                  href="https://thanhtra.com.vn/tin-trong-nuoc-A7403F0EC/ket-qua-thu-hoi-tai-san-ve-tham-nhung-kinh-te-nam-2024-dat-cao-nhat-tu-truoc-den-nay-1a256d1fb.html"
                  target="_blank"
                  rel="noreferrer"
                  className="block mt-3 text-xs underline text-sky-100/90 hover:text-white"
                >
                  {language === "vi" ? "Nguồn: Báo Thanh tra (2024)" : "Source: Thanh Tra (2024)"}
                </a>
              </div>

              {/* 2) Tài sản thu hồi */}
              <div className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white p-8 rounded-2xl text-center shadow-xl">
                <div className="text-3xl md:text-4xl font-bold mb-2">26.21 nghìn tỷ ₫</div>
                <div className="text-blue-100">
                  {language === "vi"
                    ? "Tài sản thu hồi trong các vụ án kinh tế, tham nhũng (2024)"
                    : "Recovered assets in economic/corruption cases (2024)"}
                </div>
                <a
                  href="https://vietnamlawmagazine.vn/courts-show-strong-performance-in-handling-economic-corruption-cases-chief-justice-73079.html"
                  target="_blank"
                  rel="noreferrer"
                  className="block mt-3 text-xs underline text-blue-100/90 hover:text-white"
                >
                  {language === "vi" ? "Nguồn: Vietnam Law Magazine (VNA)" : "Source: Vietnam Law Magazine (VNA)"}
                </a>
              </div>

              {/* 3) Công dân tham gia giám sát (PAPI) */}
              <div className="bg-gradient-to-r from-cyan-500 to-sky-600 text-white p-8 rounded-2xl text-center shadow-xl">
                <div className="text-3xl md:text-4xl font-bold mb-2">19,536</div>
                <div className="text-cyan-100">
                  {language === "vi"
                    ? "Công dân tham gia khảo sát PAPI 2023"
                    : "Citizens surveyed in PAPI 2023"}
                </div>
                <div className="mt-2 text-cyan-100/90 text-xs">
                  {language === "vi" ? "Tổng cộng 197.779 người (2009–2023)" : "197,779 total (2009–2023)"}
                </div>
                <a
                  href="https://www.undp.org/vietnam/press-releases/2023-papi-shows-progress-citizen-perceptions-local-anti-corruption-efforts-and-e-governance-amid-concerns-transparency-and"
                  target="_blank"
                  rel="noreferrer"
                  className="block mt-3 text-xs underline text-cyan-100/90 hover:text-white"
                >
                  {language === "vi" ? "Nguồn: UNDP / PAPI 2023" : "Source: UNDP / PAPI 2023"}
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Topics */}
        <section className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-sky-700 mb-4">{t.exploreTopics}</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {language === "vi"
                ? "Khám phá sâu hơn về các khía cạnh quan trọng của công tác phòng chống tham nhũng và trách nhiệm công dân"
                : "Explore deeper into important aspects of anti-corruption work and civic responsibility"}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-white/90 backdrop-blur-sm hover:-translate-y-2 flex flex-col">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className={`bg-gradient-to-r ${item.color} text-white border-0`}>
                        {item.icon}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-bold text-sky-700">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 flex flex-col justify-between flex-grow">
                    <div>
                      <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                        {item.description}
                      </CardDescription>
                      <div className="text-sm text-sky-600 font-medium mb-6 bg-sky-50 p-3 rounded-lg">
                        {item.details}
                      </div>
                    </div>
                    <Button
                      onClick={() => handleLearnMore(item.id)}
                      className="w-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-medium py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl mt-auto"
                    >
                      {t.learnMore} →
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
