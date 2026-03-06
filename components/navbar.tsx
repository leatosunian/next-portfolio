"use client"

import { useState, useEffect } from "react"
//import { useLanguage } from "@/contexts/language-context"
import { Globe, Menu, X, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import logo from "@/public/logowhite.png"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  //const { language, setLanguage, t } = useLanguage()
  const pathname = usePathname()

  const isStreamingPage = pathname === "/streaming"
  const isCeloPage = pathname === "/celo"

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50
      setIsScrolled(scrolled)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToSection = (id: string) => {
    if (pathname !== "/") {
      window.location.href = `/#${id}`
      return
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setIsMobileMenuOpen(false)
  }

  //const toggleLanguage = () => {
  //    setLanguage(language === "en" ? "es" : "en")
  //}

  return (
    <nav
      className={`fixed top-0 w-full  z-50 transition-all duration-300 outline-none ${isScrolled ? "px-4 py-2" : ""}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div
        className={`max-w-7xl mx-auto transition-all duration-300 bg-[#0a0a0a]/60 ${isScrolled
          ? "glass backdrop-blur-lg  rounded-2xl px-6 py-3 border border-white/15"
          : "px-4 sm:px-6 py-4 border border-transparent"
          }`}
      >
        <div className="flex items-center justify-between">
          <Link href="/" className="text-lg font-bold text-white cursor-none sm:text-xl md:flex-1">
            <Image src={logo} width={43} height={43} alt="Logo" />
          </Link>


          {!isStreamingPage && !isCeloPage && (
            <div className="items-center hidden mr-6 space-x-8 md:flex">
              <button
                onClick={() => scrollToSection("home")}
                className="relative transition-colors nav-item text-white/75 hover:text-white cursor-none"
                aria-label="Navigate to home section"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="relative transition-colors nav-item text-white/75 hover:text-white cursor-none"
                aria-label="Navigate to about section"
              >
                Proyectos
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="relative transition-colors nav-item text-white/75 hover:text-white cursor-none"
                aria-label="Navigate to portfolio section"
              >
                Sobre mí
              </button>
              <button
                onClick={() => scrollToSection("podcast")}
                className="relative transition-colors nav-item text-white/75 hover:text-white cursor-none"
                aria-label="Navigate to podcast section"
              >
                Contacto
              </button>

            </div>
          )}

          <div className="items-center hidden md:flex">
            <button
              //onClick={toggleLanguage}
              className="flex items-center px-3 py-2 space-x-2 text-white transition-colors rounded-lg cursor-none hover:text-white/80 glass"
            >
              <Globe size={16} />
              <span className="text-sm font-medium">ES</span>
            </button>
          </div>

          <div className="flex items-center space-x-3 md:hidden">

            <button
              //onClick={toggleLanguage}
              className="flex items-center px-2 py-1 ml-2 space-x-1 text-white transition-colors rounded-lg hover:text-white/80 glass"

            >
              <Globe size={14} />
              <span className="text-xs font-medium">ES</span>
            </button>

            {(isStreamingPage || isCeloPage) && (
              <Link
                href="/"
                className="p-2 text-white transition-colors rounded-lg hover:text-white/80 glass"
                aria-label="Back to home"
              >
                <ArrowLeft size={20} />
              </Link>
            )}

            {!isStreamingPage && !isCeloPage && (
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-white transition-colors rounded-lg hover:text-white/80 glass"
                aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            )}
          </div>
        </div>

        {isMobileMenuOpen && !isStreamingPage && !isCeloPage && (
          <div className="p-4 mt-4 rounded-lg md:hidden glass" role="menu">
            <div className="flex flex-col space-y-4 text-center">
              <button
                onClick={() => scrollToSection("home")}
                className="py-2 text-white transition-colors hover:text-white/80"
                role="menuitem"
                aria-label="Navigate to home section"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="py-2 text-white transition-colors hover:text-white/80"
                role="menuitem"
                aria-label="Navigate to about section"
              >
                Proyectos
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="py-2 text-white transition-colors hover:text-white/80"
                role="menuitem"
                aria-label="Navigate to portfolio section"
              >
                Sobre mí
              </button>
              <button
                onClick={() => scrollToSection("podcast")}
                className="py-2 text-white transition-colors hover:text-white/80"
                role="menuitem"
                aria-label="Navigate to podcast section"
              >
                Contacto
              </button>

            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
