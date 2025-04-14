"use client"

import { type ReactNode, useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

interface StaggerChildrenProps {
  children: ReactNode
  delay?: number
  staggerDelay?: number
  className?: string
}

export function StaggerChildren({ children, delay = 0.1, staggerDelay = 0.1, className = "" }: StaggerChildrenProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delay,
          },
        },
        hidden: {},
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 20 },
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}
