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

  // Track active section based on scroll position
  React.useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.substring(1))

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
    <header className="sticky mx-auto top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between">
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
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle Menu">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isOpen ? "close" : "open"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </motion.div>
              </AnimatePresence>
            </Button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-16 left-0 right-0 bg-background border-b z-50 overflow-hidden"
                >
                  <nav className="container flex flex-col py-4">
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
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: navItems.length * 0.1 }}
                      className="px-4 py-2"
                    >
                      <ThemeToggle />
                    </motion.div>
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
          >
            {navItems.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={item.href} className="text-sm font-medium relative group">
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
                    />
                  )}
                </Link>
              </motion.div>
            ))}
            <ThemeToggle />
          </motion.nav>
        )}
      </div>
    </header>
  )
}
