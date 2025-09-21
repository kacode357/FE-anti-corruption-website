// components/Header.tsx
"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from 'next/link'; // Import Link từ Next.js

interface HeaderProps {
 language: "vi" | "en"
 setLanguage: (lang: "vi" | "en") => void
}

export default function Header({ language, setLanguage }: HeaderProps) {
 const [isScrolled, setIsScrolled] = useState(false)

 const translations = {
  vi: {
   languageToggle: "Ngôn ngữ",
   title: "Chủ nghĩa Xã hội Khoa học (MLN131)",
  },
  en: {
   languageToggle: "Language",
   title: "Scientific Socialism (MLN131)",
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
     {/* Logo */}
     <Link href="/" className="flex items-center space-x-4 cursor-pointer">
      <div className="w-12 h-12 rounded-lg flex items-center justify-center">
       <img src="/logo_app.png" alt="App Logo" className="w-full h-full object-contain" />
      </div>
     </Link>

     {/* Tiêu đề chính */}
     <Link href="/" className="flex-1 text-center hidden md:block cursor-pointer">
      <h1 className="text-xl font-bold text-sky-700">{t.title}</h1>
     </Link>

     {/* Chuyển đổi ngôn ngữ */}
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