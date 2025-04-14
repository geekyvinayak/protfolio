"use client"

import Link from "next/link"
import { Github, Linkedin, Twitter, Instagram } from "lucide-react"
import { motion } from "framer-motion"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: "https://github.com", label: "GitHub" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <Twitter className="h-5 w-5" />, href: "https://twitter.com", label: "Twitter" },
    { icon: <Instagram className="h-5 w-5" />, href: "https://instagram.com", label: "Instagram" },
  ]

  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left"
        >
          <p className="text-sm text-muted-foreground">&copy; {currentYear} Vinayak Pandey. All rights reserved.</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-4"
        >
          {socialLinks.map((link, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={link.label}
              >
                {link.icon}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </footer>
  )
}
