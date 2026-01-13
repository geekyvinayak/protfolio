"use client"

import { useEffect, useRef, useState } from "react"

interface LazySectionProps {
  children: React.ReactNode
  className?: string
}

export function LazySection({ children, className }: LazySectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        rootMargin: "100px", // Load 100px before entering viewport
        threshold: 0.01,
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={sectionRef} className={className}>
      {isVisible ? children : <div className="min-h-[200px]" />}
    </div>
  )
}

