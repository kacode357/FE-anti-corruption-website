"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface SectionWrapperProps {
  children: ReactNode
  className?: string
}

export default function SectionWrapper({ children, className = "" }: SectionWrapperProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.1,
      }}
      viewport={{ once: true, margin: "-50px" }}
      className={`py-20 px-4 ${className}`}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {children}
        </motion.div>
      </div>
    </motion.section>
  )
}
