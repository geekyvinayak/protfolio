"use client"

import * as React from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { Reveal } from "@/components/animations/reveal"
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children"

export function Gallery() {
  const [selectedImage, setSelectedImage] = React.useState<number | null>(null)

  const images = [
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Project screenshot 1",
      caption: "E-commerce dashboard interface",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Project screenshot 2",
      caption: "Mobile app design for task management",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Project screenshot 3",
      caption: "Data visualization dashboard",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Project screenshot 4",
      caption: "Landing page design for SaaS product",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Project screenshot 5",
      caption: "User profile interface",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Project screenshot 6",
      caption: "Authentication flow screens",
    },
  ]

  const openLightbox = (index: number) => {
    setSelectedImage(index)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = "auto"
  }

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return

    if (direction === "prev") {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1)
    } else {
      setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1)
    }
  }

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return

      if (e.key === "Escape") closeLightbox()
      if (e.key === "ArrowLeft") navigateImage("prev")
      if (e.key === "ArrowRight") navigateImage("next")
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedImage])

  return (
    <section id="gallery" className="py-16">
      <div className="container px-4 md:px-6">
        <Reveal className="mx-auto">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Gallery</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Visual showcase of my projects and design work.
            </p>
          </div>
        </Reveal>

        <StaggerChildren className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {images.map((image, index) => (
            <StaggerItem key={index}>
              <motion.div
                className="group relative cursor-pointer overflow-hidden rounded-lg"
                onClick={() => openLightbox(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <motion.div
                  className="absolute inset-0 bg-black/60 flex items-end p-4"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="text-white text-sm">{image.caption}</p>
                </motion.div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
              onClick={closeLightbox}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                onClick={(e) => e.stopPropagation()}
                className="relative"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 text-white hover:bg-white/20 z-10"
                  onClick={closeLightbox}
                >
                  <X className="h-6 w-6" />
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 text-white hover:bg-white/20 z-10"
                  onClick={(e) => {
                    e.stopPropagation()
                    navigateImage("prev")
                  }}
                >
                  <ChevronLeft className="h-8 w-8" />
                </Button>

                <div className="relative max-h-[80vh] max-w-[80vw]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selectedImage}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={images[selectedImage].src || "/placeholder.svg"}
                        alt={images[selectedImage].alt}
                        width={800}
                        height={600}
                        className="max-h-[80vh] w-auto object-contain"
                      />
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="absolute bottom-0 left-0 right-0 bg-black/60 p-4 text-white text-center"
                      >
                        {images[selectedImage].caption}
                      </motion.p>
                    </motion.div>
                  </AnimatePresence>
                </div>

                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 text-white hover:bg-white/20 z-10"
                  onClick={(e) => {
                    e.stopPropagation()
                    navigateImage("next")
                  }}
                >
                  <ChevronRight className="h-8 w-8" />
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
