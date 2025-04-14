"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

interface TextRevealProps {
  text: string
  className?: string
  delay?: number
  duration?: number
  highlightClassName?: string
  highlightWords?: string[]
}

export function TextReveal({
  text,
  className = "",
  delay = 0,
  duration = 0.05,
  highlightClassName = "text-primary",
  highlightWords = [],
}: TextRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  // Split text into words
  const words = text.split(" ")

  return (
    <motion.p
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={{
        visible: {},
        hidden: {},
      }}
    >
      {words.map((word, i) => {
        const isHighlighted = highlightWords.includes(word)

        return (
          <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
            <motion.span
              className={`inline-block ${isHighlighted ? highlightClassName : ""}`}
              variants={{
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.5,
                    ease: [0.2, 0.65, 0.3, 0.9],
                    delay: delay + i * duration,
                  },
                },
                hidden: {
                  y: 30,
                  opacity: 0,
                },
              }}
            >
              {word}
            </motion.span>
          </span>
        )
      })}
    </motion.p>
  )
}
