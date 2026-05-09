"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { useMobile } from "@/hooks/use-mobile"

const SECTION_ITEMS = [
  { name: "Home",     hash: "home"     },
  { name: "Projects", hash: "projects" },
  { name: "Skills",   hash: "skills"   },
  { name: "Gallery",  hash: "gallery"  },
  { name: "Resume",   hash: "resume"   },
  { name: "Contact",  hash: "contact"  },
]

export function Navbar() {
  const isMobile = useMobile()
  const pathname = usePathname()
  const isHome = pathname === "/"

  const [isOpen,         setIsOpen]         = React.useState(false)
  const [activeSection,  setActiveSection]  = React.useState<string>("")
  const [isScrolled,     setIsScrolled]     = React.useState(false)

  // Close mobile menu on route change
  React.useEffect(() => { setIsOpen(false) }, [pathname])

  // Sync scroll state whenever the route or scroll position changes
  React.useEffect(() => {
    const update = () => {
      setIsScrolled(window.scrollY > 100)

      if (!isHome) {
        setActiveSection("")
        return
      }

      const reversed = [...SECTION_ITEMS].reverse()
      for (const item of reversed) {
        const el = document.getElementById(item.hash)
        if (el && el.getBoundingClientRect().top <= 100) {
          setActiveSection(item.hash)
          return
        }
      }
      setActiveSection("home")
    }

    update()
    window.addEventListener("scroll", update, { passive: true })
    return () => window.removeEventListener("scroll", update)
  }, [isHome])

  const navItems = [
    ...SECTION_ITEMS.map(({ name, hash }) => ({
      name,
      href: isHome ? `#${hash}` : `/#${hash}`,
      active: isHome && activeSection === hash,
    })),
    {
      name: "Blog",
      href: "/blog",
      active: pathname.startsWith("/blog"),
    },
  ]

  const linkClass = (active: boolean) =>
    `text-sm font-medium transition-colors duration-200 ${
      active ? "text-primary font-semibold" : "hover:text-primary"
    }`

  return (
    <motion.header
      className="sticky mx-auto top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      animate={{
        maxWidth:     isScrolled ? "75%"  : "100%",
        top:          isScrolled ? "20px" : "0px",
        borderRadius: isScrolled ? "12px" : "0px",
        paddingLeft:  isScrolled ? "16px" : "0px",
        paddingRight: isScrolled ? "16px" : "0px",
      }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], type: "tween" }}
    >
      <div className="container mx-auto flex px-2 md:px-0 h-16 items-center justify-between">

        {/* Logo */}
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

        {/* Mobile */}
        {isMobile ? (
          <>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(o => !o)}
                aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={isOpen ? "close" : "open"}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0,   opacity: 1 }}
                    exit={{    rotate:  90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isOpen
                      ? <X    className="h-5 w-5" aria-hidden="true" />
                      : <Menu className="h-5 w-5" aria-hidden="true" />
                    }
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
                  exit={{    opacity: 0, height: 0 }}
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
                            item.active ? "text-primary font-semibold" : "hover:text-primary"
                          }`}
                          onClick={() => setIsOpen(false)}
                          aria-current={item.active ? "page" : undefined}
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
          /* Desktop */
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
                  aria-current={item.active ? "page" : undefined}
                >
                  <span className={linkClass(item.active)}>
                    {item.name}
                  </span>
                  {item.active && (
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
