"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function HeroSection() {
  const [typedText, setTypedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const textArray = ["Software Engineer", "Full Stack Developer", "ML Enthusiast", "Blockchain Developer"]

  useEffect(() => {
    const handleType = () => {
      const current = loopNum % textArray.length
      const fullText = textArray[current]

      setTypedText(
        isDeleting ? fullText.substring(0, typedText.length - 1) : fullText.substring(0, typedText.length + 1),
      )

      setTypingSpeed(isDeleting ? 75 : 150)

      if (!isDeleting && typedText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && typedText === "") {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      }
    }

    const timer = setTimeout(handleType, typingSpeed)
    return () => clearTimeout(timer)
  }, [typedText, isDeleting, loopNum, typingSpeed, textArray])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black to-slate-900 text-white">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]" />
        <div className="absolute h-full w-full bg-black [mask-image:radial-gradient(transparent,white)] opacity-90" />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-20 pt-24 md:pt-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          {/* Profile Picture */}
          <div className="relative mx-auto mb-6 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48">
            <div className="relative w-full h-full overflow-hidden rounded-full border-4 border-primary shadow-2xl">
              <Image
                src="/images/profile.png"
                alt="Naushad Shaik"
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, 192px"
              />
            </div>
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl -z-10 animate-pulse"></div>
          </div>

          {/* Name */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">Naushad Shaik</h1>

          {/* Continuous Typing Animation */}
          <div className="h-8 mb-6">
            <span className="text-lg sm:text-xl md:text-2xl font-light text-primary">
              {typedText}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          {/* Description */}
          <p className="mx-auto max-w-2xl text-base sm:text-lg text-gray-300 px-4">
            Software Engineer with a strong foundation in backend systems, machine learning applications, and smart
            contracts. Passionate about clean code, systems thinking, and solving real-world problems.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-8 px-4"
        >
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 transition-all duration-200">
            <a href="#projects">View My Work</a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white/20 text-white hover:bg-white/10 transition-all duration-200 bg-transparent"
          >
            <a href="#contact">Get In Touch</a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
