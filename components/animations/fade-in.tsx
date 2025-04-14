"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface FadeInProps {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
  direction?: "up" | "down" | "left" | "right" | "none"
  distance?: number
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.5,
  className = "",
  direction = "up",
  distance = 20,
}: FadeInProps) {
  // Set initial and animate values based on direction
  const getDirectionValues = () => {
    switch (direction) {
      case "up":
        return { initial: { y: distance }, animate: { y: 0 } }
      case "down":
        return { initial: { y: -distance }, animate: { y: 0 } }
      case "left":
        return { initial: { x: distance }, animate: { x: 0 } }
      case "right":
        return { initial: { x: -distance }, animate: { x: 0 } }
      case "none":
        return { initial: { y: 0 }, animate: { y: 0 } }
      default:
        return { initial: { y: distance }, animate: { y: 0 } }
    }
  }

  const { initial, animate } = getDirectionValues()

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...initial }}
      animate={{ opacity: 1, ...animate }}
      transition={{ duration, delay, ease: [0.25, 0.25, 0.25, 0.75] }}
    >
      {children}
    </motion.div>
  )
}
