"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import Header from "@/components/Header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  const [language, setLanguage] = useState<"vi" | "en">("vi")
  const router = useRouter()

  const translations = {
    vi: {
      mainTitle: "Chủ nghĩa Xã hội Khoa học",
      subtitle:
        "Xây dựng Nhà nước pháp quyền xã hội chủ nghĩa gắn với công tác phòng, chống tham nhũng và phát huy trách nhiệm công dân",
      heroDescription:
        "Tham nhũng là một trong những thách thức lớn nhất đối với sự phát triển bền vững của đất nước. Việc xây dựng nhà nước pháp quyền xã hội chủ nghĩa gắn liền với công tác phòng chống tham nhũng không chỉ là nhiệm vụ của cơ quan nhà nước mà còn là trách nhiệm của toàn thể nhân dân. Mỗi công dân đều có vai trò quan trọng trong việc giám sát, tố giác và ngăn chặn các hành vi tham nhũng, góp phần xây dựng một xã hội trong sạch, minh bạch và công bằng.",
      learnMore: "Tìm hiểu thêm",
      exploreTopics: "Khám phá các chủ đề chính",
      whyImportant: "Tại sao điều này quan trọng?",
      importanceText:
        "Phòng chống tham nhũng không chỉ bảo vệ tài sản công mà còn tạo dựng lòng tin của nhân dân đối với Đảng và Nhà nước, tạo môi trường thuận lợi cho phát triển kinh tế - xã hội bền vững.",
      statistics: {
        title: "Thống kê quan trọng",
        cases: "Vụ việc được xử lý",
        recovered: "Tài sản thu hồi",
        citizens: "Công dân tham gia giám sát",
      },
      content1: {
        title: "Khái niệm về Tham nhũng",
        description:
          "Tìm hiểu về định nghĩa, bản chất và các hình thức biểu hiện của tham nhũng trong xã hội hiện đại. Phân tích các loại hình tham nhũng phổ biến và cách nhận biết.",
        details: "Bao gồm: Tham ô tài sản, nhận hối lộ, lạm dụng chức vụ quyền hạn",
      },
      content2: {
        title: "Nguyên nhân của Tham nhũng",
        description:
          "Phân tích các nguyên nhân sâu xa dẫn đến tình trạng tham nhũng trong hệ thống chính trị và xã hội. Tìm hiểu về các yếu tố chủ quan và khách quan.",
        details: "Nguyên nhân chủ quan, khách quan và các yếu tố môi trường",
      },
      content3: {
        title: "Hậu quả của Tham nhũng",
        description:
          "Đánh giá tác động tiêu cực của tham nhũng đối với phát triển kinh tế, xã hội và đời sống nhân dân. Phân tích thiệt hại về kinh tế và xã hội.",
        details: "Tác động đến kinh tế, chính trị, xã hội và đạo đức",
      },
      content4: {
        title: "Ý nghĩa Phòng chống Tham nhũng",
        description:
          "Làm rõ tầm quan trọng của việc phòng chống tham nhũng trong xây dựng nhà nước pháp quyền xã hội chủ nghĩa và phát triển đất nước.",
        details: "Bảo vệ tài sản công, nâng cao hiệu quả quản lý nhà nước",
      },
      content5: {
        title: "Trách nhiệm của Công dân",
        description:
          "Vai trò và trách nhiệm của mỗi công dân trong cuộc đấu tranh phòng chống tham nhũng. Quyền và nghĩa vụ của người dân trong giám sát.",
        details: "Giám sát, tố giác, tuyên truyền và nâng cao nhận thức",
      },
      content6: {
        title: "Hành động Thiết thực",
        description:
          "Các biện pháp và hành động thiết thực để góp phần xây dựng xã hội trong sạch, minh bạch. Hướng dẫn cụ thể cho công dân.",
        details: "Báo cáo vi phạm, tham gia giám sát cộng đồng",
      },
    },
    en: {
      mainTitle: "Scientific Socialism",
      subtitle:
        "Building a Socialist Rule of Law State linked with Anti-Corruption Work and Promoting Citizens' Responsibilities",
      heroDescription:
        "Corruption is one of the greatest challenges to the sustainable development of the country. Building a socialist rule of law state linked with anti-corruption work is not only the task of state agencies but also the responsibility of all people. Every citizen has an important role in monitoring, reporting and preventing corrupt acts, contributing to building a clean, transparent and fair society.",
      learnMore: "Learn More",
      exploreTopics: "Explore Main Topics",
      whyImportant: "Why is this important?",
      importanceText:
        "Anti-corruption not only protects public property but also builds people's trust in the Party and State, creating a favorable environment for sustainable socio-economic development.",
      statistics: {
        title: "Important Statistics",
        cases: "Cases handled",
        recovered: "Assets recovered",
        citizens: "Citizens participating in monitoring",
      },
      content1: {
        title: "Concept of Corruption",
        description:
          "Understanding the definition, nature and forms of corruption in modern society. Analyzing common types of corruption and how to identify them.",
        details: "Including: Embezzlement, bribery, abuse of position and power",
      },
      content2: {
        title: "Causes of Corruption",
        description:
          "Analyzing the root causes leading to corruption in political and social systems. Understanding subjective and objective factors.",
        details: "Subjective, objective causes and environmental factors",
      },
      content3: {
        title: "Consequences of Corruption",
        description:
          "Assessing the negative impact of corruption on economic, social development and people's lives. Analyzing economic and social damages.",
        details: "Impact on economy, politics, society and morality",
      },
      content4: {
        title: "Significance of Anti-Corruption",
        description:
          "Clarifying the importance of anti-corruption in building a socialist rule of law state and national development.",
        details: "Protecting public property, improving state management efficiency",
      },
      content5: {
        title: "Citizens' Responsibility",
        description:
          "The role and responsibility of each citizen in the fight against corruption. Rights and obligations of people in monitoring.",
        details: "Monitoring, reporting, promoting and raising awareness",
      },
      content6: {
        title: "Practical Actions",
        description:
          "Practical measures and actions to contribute to building a clean, transparent society. Specific guidance for citizens.",
        details: "Reporting violations, participating in community monitoring",
      },
    },
  }

  const t = translations[language]

  const contentItems = [
    { id: 1, ...t.content1, icon: "📚", color: "from-sky-400 to-sky-600", image: "/legal-books-and-justice-scales-representing-corrup.jpg" },
    { id: 2, ...t.content2, icon: "🔍", color: "from-blue-400 to-blue-600", image: "/magnifying-glass-examining-documents-representing-.jpg" },
    { id: 3, ...t.content3, icon: "⚠️", color: "from-cyan-400 to-cyan-600", image: "/warning-signs-and-broken-chains-representing-corru.jpg" },
    { id: 4, ...t.content4, icon: "⚖️", color: "from-sky-500 to-sky-700", image: "/scales-of-justice-and-government-building-represen.jpg" },
    { id: 5, ...t.content5, icon: "👥", color: "from-blue-500 to-blue-700", image: "/diverse-group-of-citizens-raising-hands-representi.jpg" },
    { id: 6, ...t.content6, icon: "🎯", color: "from-cyan-500 to-cyan-700", image: "/target-with-arrows-and-action-plan-representing-pr.jpg" },
  ]

  const handleLearnMore = (contentId: number) => {
    router.push(`/content/${contentId}?lang=${language}`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-50">
      <Header language={language} setLanguage={setLanguage} />

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-4 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-sky-700 mb-6 text-balance">{t.mainTitle}</h1>
            <p className="text-xl md:text-2xl text-sky-600 max-w-4xl mx-auto text-pretty mb-8">{t.subtitle}</p>
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
                <h2 className="text-2xl font-bold text-sky-700 mb-4">{t.whyImportant}</h2>
                <p className="text-gray-700 leading-relaxed mb-6">{t.heroDescription}</p>
                <p className="text-sky-600 font-medium">{t.importanceText}</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Statistics Section */}
        <section className="max-w-6xl mx-auto px-4 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-sky-700 text-center mb-12">{t.statistics.title}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-r from-sky-500 to-blue-600 text-white p-8 rounded-2xl text-center shadow-xl">
                <div className="text-4xl font-bold mb-2">1,247</div>
                <div className="text-sky-100">{t.statistics.cases}</div>
              </div>
              <div className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white p-8 rounded-2xl text-center shadow-xl">
                <div className="text-4xl font-bold mb-2">₫2.8T</div>
                <div className="text-blue-100">{t.statistics.recovered}</div>
              </div>
              <div className="bg-gradient-to-r from-cyan-500 to-sky-600 text-white p-8 rounded-2xl text-center shadow-xl">
                <div className="text-4xl font-bold mb-2">45,000+</div>
                <div className="text-cyan-100">{t.statistics.citizens}</div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Content Topics Section */}
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
                <Card className="h-full hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-white/90 backdrop-blur-sm hover:-translate-y-2">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className={`bg-gradient-to-r ${item.color} text-white border-0`}>{item.icon}</Badge>
                    </div>
                  </div>
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-bold text-sky-700">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-gray-600 mb-4 leading-relaxed">{item.description}</CardDescription>
                    <div className="text-sm text-sky-600 font-medium mb-6 bg-sky-50 p-3 rounded-lg">{item.details}</div>
                    <Button
                      onClick={() => handleLearnMore(item.id)}
                      className="w-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-medium py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      {t.learnMore} →
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="max-w-4xl mx-auto px-4 mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="bg-gradient-to-r from-sky-600 to-blue-700 text-white p-12 rounded-2xl text-center shadow-2xl"
          >
            <h2 className="text-3xl font-bold mb-4">
              {language === "vi" ? "Hãy cùng hành động!" : "Let's take action together!"}
            </h2>
            <p className="text-sky-100 text-lg mb-8 max-w-2xl mx-auto">
              {language === "vi"
                ? "Mỗi hành động nhỏ của bạn đều góp phần xây dựng một xã hội trong sạch, minh bạch và công bằng hơn."
                : "Every small action you take contributes to building a cleaner, more transparent and fairer society."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-sky-700 hover:bg-sky-50 font-semibold px-8 py-3"
              >
                {language === "vi" ? "Báo cáo vi phạm" : "Report Violations"}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-sky-700 font-semibold px-8 py-3 bg-transparent"
              >
                {language === "vi" ? "Tham gia giám sát" : "Join Monitoring"}
              </Button>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  )
}
