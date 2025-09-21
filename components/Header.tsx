"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface HeaderProps {
  language: "vi" | "en"
  setLanguage: (lang: "vi" | "en") => void
}

export default function Header({ language, setLanguage }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  const translations = {
    vi: {
      languageToggle: "Ngôn ngữ",
    },
    en: {
      languageToggle: "Language",
    },
  }

  const t = translations[language]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-sky-100" : "bg-white"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-blue-600 rounded-lg flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" />
              </svg>
            </div>
          </div>

          {/* Language Toggle */}
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600 hidden sm:block">{t.languageToggle}:</span>
            <div className="relative bg-gray-100 rounded-full p-1 flex">
              <motion.div
                className="absolute top-1 bottom-1 bg-sky-600 rounded-full"
                initial={false}
                animate={{
                  left: language === "vi" ? "4px" : "50%",
                  width: "40px",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
              <button
                onClick={() => setLanguage("vi")}
                className={`relative z-10 px-3 py-1 text-sm font-medium rounded-full transition-colors ${
                  language === "vi" ? "text-white" : "text-gray-600 hover:text-gray-800"
                }`}
              >
                VI
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`relative z-10 px-3 py-1 text-sm font-medium rounded-full transition-colors ${
                  language === "en" ? "text-white" : "text-gray-600 hover:text-gray-800"
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
