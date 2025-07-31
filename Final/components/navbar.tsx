"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "#", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    // Initial checks
    checkIfMobile()
    handleScroll()

    // Add event listeners
    window.addEventListener("resize", checkIfMobile)
    window.addEventListener("scroll", handleScroll)

    // Clean up
    return () => {
      window.removeEventListener("resize", checkIfMobile)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? "bg-black/80 backdrop-blur-md py-2 shadow-lg" : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-12">
            <Link href="/" className="text-white font-bold text-xl z-50 relative">
              <span className="text-primary">N</span>aushad
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Button
                  key={link.label}
                  variant="ghost"
                  asChild
                  className="text-white hover:text-primary hover:bg-white/10 transition-colors duration-200"
                >
                  <a href={link.href}>{link.label}</a>
                </Button>
              ))}
            </nav>

            {/* Mobile Navigation Toggle */}
            <div className="flex items-center md:hidden z-50 relative">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMobileMenu}
                className="text-white hover:bg-white/10 transition-colors duration-200"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md md:hidden"
          >
            {/* Close button */}
            <div className="absolute top-4 right-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={closeMobileMenu}
                className="text-white hover:bg-white/10"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col items-center justify-center h-full space-y-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  <Button
                    variant="ghost"
                    asChild
                    className="text-white text-2xl py-3 px-6 hover:text-primary hover:bg-white/10 transition-colors duration-200"
                    onClick={closeMobileMenu}
                  >
                    <a href={link.href}>{link.label}</a>
                  </Button>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
