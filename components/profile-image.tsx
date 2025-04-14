"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ProfileImageProps {
  src: string
  alt: string
  className?: string
}

export function ProfileImage({ src, alt, className }: ProfileImageProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className={cn(
        "relative mx-auto overflow-hidden rounded-full border-4 border-primary/20 transition-all duration-300",
        isHovered ? "border-primary shadow-lg" : "",
        className,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: isHovered ? 1.05 : 1, rotate: isHovered ? 2 : 0 }}
        transition={{ duration: 0.4 }}
        className="relative aspect-square w-full"
      >
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 300px"
          priority
        />
      </motion.div>

      {isHovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-primary/10 flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <span className="sr-only">Profile image of {alt}</span>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  )
}
