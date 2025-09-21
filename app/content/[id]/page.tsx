// app/content/[id]/page.tsx
"use client"

import { useParams, useSearchParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { useState, useEffect } from "react"
import Header from "@/components/Header"

import Content1_Concept from "@/components/Content1_Concept"
import Content2_Causes from "@/components/Content2_Causes"
import Content3_Consequences from "@/components/Content3_Consequences"
import Content4_Significance from "@/components/Content4_Significance"
import Content5_Responsibility from "@/components/Content5_Responsibility"
import Content6_Actions from "@/components/Content6_Actions"

export default function ContentDetail() {
  const params = useParams()
  const searchParams = useSearchParams()
  const router = useRouter()

  const initialLang = (searchParams.get("lang") as "vi" | "en") || "vi"
  const [lang, setLang] = useState<"vi" | "en">(initialLang)

  useEffect(() => {
    const urlLang = searchParams.get("lang") as "vi" | "en" | null
    if (urlLang && (urlLang === "vi" || urlLang === "en") && urlLang !== lang) {
      setLang(urlLang)
    }
  }, [searchParams, lang])

  const handleLanguageChange = (newLang: "vi" | "en") => {
    if (newLang === lang) return
    setLang(newLang)
    if (typeof window !== "undefined") {
      localStorage.setItem("lang", newLang)
    }
    const params = new URLSearchParams(searchParams.toString())
    params.set("lang", newLang)
    router.replace(`?${params.toString()}`, { scroll: false })
  }

  const id = Number(params.id)

  let ContentComponent: React.ReactNode = (
    <div className="text-center text-gray-500">Content not found</div>
  )

  switch (id) {
    case 1:
      ContentComponent = <Content1_Concept language={lang} />
      break
    case 2:
      ContentComponent = <Content2_Causes language={lang} />
      break
    case 3:
      ContentComponent = <Content3_Consequences language={lang} />
      break
    case 4:
      ContentComponent = <Content4_Significance language={lang} />
      break
    case 5:
      ContentComponent = <Content5_Responsibility language={lang} />
      break
    case 6:
      ContentComponent = <Content6_Actions language={lang} />
      break
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-50">
      {/* Header fixed */}
      <Header language={lang} setLanguage={handleLanguageChange} />

      {/* THÊM padding-top để tránh bị Header đè */}
      <div className="max-w-6xl mx-auto px-4 pt-28 pb-12">
        {/* Nút quay lại */}
        <div>
          <Button
            onClick={() => router.back()}
            variant="outline"
            className="flex items-center space-x-2 hover:bg-sky-50 border-sky-200"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{lang === "vi" ? "Quay lại" : "Back"}</span>
          </Button>
        </div>

        {/* Nội dung động */}
        {ContentComponent}
      </div>
    </div>
  )
}
