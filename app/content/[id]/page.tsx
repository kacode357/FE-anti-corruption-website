"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter, useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function ContentDetail() {
  const params = useParams()
  const router = useRouter()
  const searchParams = useSearchParams()
  const [language, setLanguage] = useState<"vi" | "en">("vi")

  useEffect(() => {
    const lang = searchParams.get("lang") as "vi" | "en"
    if (lang) setLanguage(lang)
  }, [searchParams])

  const contentData = {
    vi: {
      1: {
        title: "Khái niệm Tham nhũng",
        content: [
          "Tham nhũng là việc lạm dụng quyền lực được giao phó để trục lợi cá nhân. Đây là một hiện tượng xã hội tiêu cực, có tính chất phổ biến và tồn tại ở nhiều quốc gia trên thế giới.",
          "Theo quan điểm của chủ nghĩa Mác-Lênin, tham nhũng là sản phẩm của chế độ tư hữu, của sự phân chia giai cấp trong xã hội. Tuy nhiên, trong điều kiện xây dựng chủ nghĩa xã hội, tham nhũng vẫn có thể tồn tại do nhiều nguyên nhân khác nhau.",
          "Các hình thức tham nhũng phổ biến bao gồm: nhận hối lộ, tham ô, lạm dụng chức vụ quyền hạn, nepotism (chủ nghĩa thân hữu), và các hành vi trục lợi bất chính khác.",
        ],
      },
      2: {
        title: "Nguyên nhân Tham nhũng",
        content: [
          "Nguyên nhân khách quan: Cơ chế thị trường chưa hoàn thiện, thể chế pháp luật còn có kẽ hở, sự giám sát của nhân dân chưa được phát huy đầy đủ.",
          "Nguyên nhân chủ quan: Ý thức trách nhiệm của một bộ phận cán bộ, công chức còn hạn chế; lối sống cá nhân chủ nghĩa, thực dụng; sự suy thoái về đạo đức, lối sống.",
          "Nguyên nhân từ môi trường xã hội: Tàn dư của chế độ cũ, ảnh hưởng tiêu cực của nền kinh tế thị trường, sự tác động của văn hóa ngoại lai không phù hợp.",
        ],
      },
      3: {
        title: "Hậu quả Tham nhũng",
        content: [
          "Về kinh tế: Làm méo mó cơ chế thị trường, cản trở sự phát triển kinh tế, gây lãng phí tài nguyên, làm giảm hiệu quả đầu tư công.",
          "Về chính trị: Làm suy giảm uy tín của Đảng và Nhà nước, gây mất lòng tin của nhân dân, ảnh hưởng đến sự ổn định chính trị xã hội.",
          "Về xã hội: Gia tăng bất bình đẳng xã hội, làm suy thoái đạo đức xã hội, tạo ra những chuẩn mực sai lệch trong xã hội.",
        ],
      },
      4: {
        title: "Ý nghĩa Phòng chống Tham nhũng",
        content: [
          "Phòng chống tham nhũng là yêu cầu khách quan, cấp thiết trong quá trình xây dựng và hoàn thiện nhà nước pháp quyền xã hội chủ nghĩa Việt Nam.",
          "Đây là nhiệm vụ quan trọng để bảo vệ chế độ xã hội chủ nghĩa, duy trì sự lãnh đạo của Đảng, củng cố niềm tin của nhân dân đối với Đảng và Nhà nước.",
          "Phòng chống tham nhũng góp phần tạo môi trường kinh doanh lành mạnh, thúc đẩy phát triển kinh tế - xã hội bền vững, xây dựng xã hội công bằng, dân chủ, văn minh.",
        ],
      },
      5: {
        title: "Trách nhiệm Công dân",
        content: [
          "Mỗi công dân có trách nhiệm tham gia giám sát hoạt động của các cơ quan nhà nước, cán bộ, công chức trong việc thực thi pháp luật và chính sách.",
          "Tích cực tham gia các hoạt động phòng chống tham nhũng thông qua việc tố giác, phản ánh, kiến nghị về các hành vi tham nhũng, tiêu cực.",
          "Nâng cao ý thức pháp luật, không tham gia vào các hành vi tham nhũng, không đưa hối lộ, không tiếp tay cho các hành vi tham nhũng.",
        ],
      },
      6: {
        title: "Hành động Cụ thể",
        content: [
          "Tăng cường giáo dục, tuyên truyền nâng cao nhận thức về tác hại của tham nhũng và ý nghĩa của việc phòng chống tham nhũng.",
          "Xây dựng và hoàn thiện hệ thống pháp luật về phòng chống tham nhũng, đảm bảo tính đồng bộ, thống nhất và hiệu lực.",
          "Tăng cường công tác thanh tra, kiểm tra, giám sát; xử lý nghiêm minh, kịp thời các vụ việc tham nhũng theo đúng quy định của pháp luật.",
        ],
      },
    },
    en: {
      1: {
        title: "Concept of Corruption",
        content: [
          "Corruption is the abuse of entrusted power for private gain. It is a negative social phenomenon that is widespread and exists in many countries around the world.",
          "According to Marxist-Leninist viewpoint, corruption is a product of private ownership and class division in society. However, in the context of socialist construction, corruption can still exist due to various reasons.",
          "Common forms of corruption include: bribery, embezzlement, abuse of office and power, nepotism, and other forms of illicit profit-making.",
        ],
      },
      2: {
        title: "Causes of Corruption",
        content: [
          "Objective causes: Imperfect market mechanisms, legal loopholes, insufficient people's supervision.",
          "Subjective causes: Limited sense of responsibility among some officials and civil servants; individualistic and pragmatic lifestyle; moral degradation and lifestyle deterioration.",
          "Social environment causes: Remnants of the old regime, negative impacts of market economy, influence of inappropriate foreign culture.",
        ],
      },
      3: {
        title: "Consequences of Corruption",
        content: [
          "Economic impact: Distorts market mechanisms, hinders economic development, causes resource waste, reduces public investment efficiency.",
          "Political impact: Undermines the prestige of the Party and State, causes loss of people's trust, affects political and social stability.",
          "Social impact: Increases social inequality, causes moral degradation, creates wrong social standards.",
        ],
      },
      4: {
        title: "Significance of Anti-Corruption",
        content: [
          "Anti-corruption is an objective and urgent requirement in the process of building and perfecting the socialist rule of law state in Vietnam.",
          "This is an important task to protect the socialist regime, maintain Party leadership, and strengthen people's trust in the Party and State.",
          "Anti-corruption contributes to creating a healthy business environment, promoting sustainable socio-economic development, building a fair, democratic, and civilized society.",
        ],
      },
      5: {
        title: "Citizens' Responsibility",
        content: [
          "Every citizen has the responsibility to participate in supervising the activities of state agencies, officials, and civil servants in law enforcement and policy implementation.",
          "Actively participate in anti-corruption activities through reporting, reflecting, and proposing about corrupt and negative behaviors.",
          "Raise legal awareness, do not participate in corrupt acts, do not give bribes, do not assist corrupt behaviors.",
        ],
      },
      6: {
        title: "Concrete Actions",
        content: [
          "Strengthen education and propaganda to raise awareness about the harm of corruption and the significance of anti-corruption.",
          "Build and perfect the legal system on anti-corruption, ensuring synchronization, unity and effectiveness.",
          "Strengthen inspection, examination, and supervision; handle corruption cases strictly and promptly according to legal regulations.",
        ],
      },
    },
  }

  const contentId = params.id as string
  const currentContent =
    contentData[language][Number.parseInt(contentId) as keyof (typeof contentData)[typeof language]]

  if (!currentContent) {
    return <div>Content not found</div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Button
            onClick={() => router.back()}
            variant="outline"
            className="flex items-center space-x-2 hover:bg-sky-50 border-sky-200"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{language === "vi" ? "Quay lại" : "Back"}</span>
          </Button>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-sky-700 mb-8 text-balance">{currentContent.title}</h1>

          <div className="space-y-6">
            {currentContent.content.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-gray-700 leading-relaxed text-lg"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </motion.article>
      </div>
    </div>
  )
}
