"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { useMobile } from "@/hooks/use-mobile"

export function Navbar() {
  const isMobile = useMobile()
  const [isOpen, setIsOpen] = React.useState(false)
  const [activeSection, setActiveSection] = React.useState("home")
  const [isScrolled, setIsScrolled] = React.useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Gallery", href: "#gallery" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" },
  ]

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.substring(1))
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 100)
      
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [navItems])

  return (
    <motion.header
      className="sticky mx-auto top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      animate={{
        maxWidth: isScrolled ? "75%" : "100%",
        top: isScrolled ? "20px" : "0px",
        borderRadius: isScrolled ? "12px" : "0px",
        paddingLeft: isScrolled ? "16px" : "0px",
        paddingRight: isScrolled ? "16px" : "0px",
      }}
      transition={{
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1], // Custom easing for smooth animation
        type: "tween"
      }}
      style={{
        willChange: "transform, max-width, top, border-radius, background-color, padding"
      }}
    >
      <div className="container mx-auto flex px-2 md:px-0 h-16 items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <Link href="/" className="font-bold text-xl">
            geekyVinayak
          </Link>
        </motion.div>

        {isMobile ? (
          <>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMenu}
                aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={isOpen ? "close" : "open"}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
                  </motion.div>
                </AnimatePresence>
              </Button>
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  id="mobile-menu"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-16 left-0 right-0 bg-background border-b z-50 overflow-hidden"
                >
                  <nav className="container flex flex-col py-4" aria-label="Mobile navigation">
                    {navItems.map((item, i) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Link
                          href={item.href}
                          className={`px-4 py-2 text-sm font-medium block transition-colors ${
                            activeSection === item.href.substring(1)
                              ? "text-primary font-semibold"
                              : "hover:text-primary"
                          }`}
                          onClick={() => setIsOpen(false)}
                          aria-current={activeSection === item.href.substring(1) ? "page" : undefined}
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}
                  </nav>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        ) : (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, staggerChildren: 0.1, delayChildren: 0.2 }}
            className="flex items-center gap-6"
            aria-label="Main navigation"
          >
            {navItems.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="text-sm font-medium relative group"
                  aria-current={activeSection === item.href.substring(1) ? "page" : undefined}
                >
                  <span
                    className={`transition-colors duration-200 ${
                      activeSection === item.href.substring(1)
                        ? "text-primary font-semibold"
                        : "group-hover:text-primary"
                    }`}
                  >
                    {item.name}
                  </span>
                  {activeSection === item.href.substring(1) && (
                    <motion.span
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      aria-hidden="true"
                    />
                  )}
                </Link>
              </motion.div>
            ))}
            <ThemeToggle />
          </motion.nav>
        )}
      </div>
    </motion.header>
  )
}