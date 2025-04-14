"use client"

import { type ReactNode, useEffect } from "react"

interface SmoothScrollProps {
  children: ReactNode
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  useEffect(() => {
    // Handle smooth scrolling for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a[href^="#"]')

      if (anchor) {
        e.preventDefault()
        const targetId = anchor.getAttribute("href")

        if (targetId && targetId !== "#") {
          const targetElement = document.querySelector(targetId)

          if (targetElement) {
            window.scrollTo({
              top: targetElement.getBoundingClientRect().top + window.scrollY - 80, // Offset for navbar
              behavior: "smooth",
            })

            // Update URL without scrolling
            window.history.pushState(null, "", targetId)
          }
        }
      }
    }

    document.addEventListener("click", handleAnchorClick)

    return () => {
      document.removeEventListener("click", handleAnchorClick)
    }
  }, [])

  return <>{children}</>
}
