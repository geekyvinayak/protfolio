"use client"

import { type ReactNode, useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

interface RevealProps {
  children: ReactNode
  width?: "fit-content" | "100%"
  delay?: number
  duration?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  className?: string
}

export function Reveal({
  children,
  width = "fit-content",
  delay = 0,
  duration = 0.5,
  direction = "up",
  className = "",
}: RevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const controls = useAnimation()

  // Set initial and animate values based on direction
  const getDirectionValues = () => {
    switch (direction) {
      case "up":
        return { initial: { y: 75 }, animate: { y: 0 } }
      case "down":
        return { initial: { y: -75 }, animate: { y: 0 } }
      case "left":
        return { initial: { x: 75 }, animate: { x: 0 } }
      case "right":
        return { initial: { x: -75 }, animate: { x: 0 } }
      case "none":
        return { initial: { y: 0 }, animate: { y: 0 } }
      default:
        return { initial: { y: 75 }, animate: { y: 0 } }
    }
  }

  const { initial, animate } = getDirectionValues()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <div ref={ref} className={className} style={{ width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, ...initial },
          visible: { opacity: 1, ...animate },
        }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration, delay, ease: [0.25, 0.25, 0.25, 0.75] }}
      >
        {children}
      </motion.div>
    </div>
  )
}
