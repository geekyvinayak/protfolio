"use client"

import * as React from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { Reveal } from "@/components/animations/reveal"
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children"

type MediaItem = {
  src: string
  alt: string
  caption: string
  type: "image" | "video"
}

type ImageGroup = {
  cover: string
  alt: string
  caption: string
  images: MediaItem[]
}

export function Gallery() {
  const [selectedGroupIndex, setSelectedGroupIndex] = React.useState<number | null>(null)
  const [selectedImageIndex, setSelectedImageIndex] = React.useState(0)
  const [isLoading, setIsLoading] = React.useState(true)

  const imageGroups: ImageGroup[] = [
    {
      cover: "/React_Native/uber clone/uberCloneThumbnaiol.png?height=400&width=600",
      alt: "Uber App Clone",
      caption: "Uber App Clone Screens",
      images: [
        {
          src: "/React_Native/uber clone/enterOrigin.jpeg?height=400&width=600",
          alt: "Home screen",
          caption: "Home screen Uber App Clone",
          type: "image",
        },
        {
          src: "/React_Native/uber clone/enterDestination.jpeg?height=400&width=600",
          alt: "Destination Selection",
          caption: "Destination Selection Screen",
          type: "image",
        },
        {
          src: "/React_Native/uber clone/selectRide.jpeg?height=400&width=600",
          alt: "Ride Selection video",
          caption: "Ride Selection Screen",
          type: "image",
        },
        {
          src: "/React_Native/uber clone/mapScreen.jpeg?height=400&width=600",
          alt: "On-Going Ride",
          caption: "On-Going Ride Screen",
          type: "image",
        }, 
        {
          src: "/React_Native/uber clone/ScreenRecording.mp4?height=400&width=600",
          alt: "APP Over View",
          caption: "APP Over View",
          type: "video",
        },
      ],
    },
    {
      cover: "/React_Native/fruitsShop/fruitsShopThumbnail.png?height=400&width=600",
      alt: "Fruits Shop",
      caption: "Fruits Shop",
      images: [
        {
          src: "/React_Native/fruitsShop/homeScreen.jpeg?height=400&width=600",
          alt: "Home Screen",
          caption: "Home Screen",
          type: "image",
        },
        {
          src: "/React_Native/fruitsShop/productScreen.jpeg?height=400&width=600",
          alt: "Product Details Screen",
          caption: "Product Details Screen",
          type: "image",
        },
        {
          src: "/React_Native/fruitsShop/productDescription.jpeg?height=400&width=600",
          alt: "Product in cart  Screen",
          caption: "Product Added to Cart Details Screen",
          type: "image",
        },
        {
          src: "/React_Native/fruitsShop/cartPage.jpeg?height=400&width=600",
          alt: "Cart Screen",
          caption: "Cart Screen",
          type: "image",
        },
        {
          src: "/React_Native/fruitsShop/pushNotification.mp4",
          alt: "Push Notification",
          caption: "Push Notification",
          type: "video",
        },
      ],
    },
  ]

  const openGroup = (groupIndex: number) => {
    setSelectedGroupIndex(groupIndex)
    setSelectedImageIndex(0)
    setIsLoading(true)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setSelectedGroupIndex(null)
    setSelectedImageIndex(0)
    document.body.style.overflow = "auto"
  }

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedGroupIndex === null) return
    setIsLoading(true)
    const group = imageGroups[selectedGroupIndex]
    setSelectedImageIndex((prev) => {
      if (direction === "prev") return prev === 0 ? group.images.length - 1 : prev - 1
      return prev === group.images.length - 1 ? 0 : prev + 1
    })
  }

  const handleImageLoad = () => {
    setIsLoading(false)
  }

  return (
    <section id="gallery" className="py-16">
      <div className="container px-4 md:px-6">
        <Reveal className="mx-auto">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Gallery</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Visual showcase of my mobile app project shots including videos.
            </p>
          </div>
        </Reveal>

        <StaggerChildren className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {imageGroups.map((group, groupIndex) => (
            <StaggerItem key={groupIndex}>
              <motion.div
                className="group relative cursor-pointer overflow-hidden rounded-lg"
                onClick={() => openGroup(groupIndex)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <div className="aspect-[4/4] relative">
                  <Image
                    src={group.cover}
                    alt={group.alt}
                    fill
                    priority
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <motion.div
                  className="absolute inset-0 bg-black/60 flex items-end p-4"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="text-white text-sm">{group.caption}</p>
                </motion.div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedGroupIndex !== null && (
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
                className="relative w-full max-w-[80vw] h-[80vh] flex items-center justify-center"
              >
                {/* Always visible container with fixed position for the close button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 text-white hover:bg-white/20 z-10"
                  onClick={closeLightbox}
                >
                  <X className="h-6 w-6" />
                </Button>

                {/* Navigation buttons with fixed positions */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10"
                  onClick={(e) => {
                    e.stopPropagation()
                    navigateImage("prev")
                  }}
                >
                  <ChevronLeft className="h-8 w-8" />
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10"
                  onClick={(e) => {
                    e.stopPropagation()
                    navigateImage("next")
                  }}
                >
                  <ChevronRight className="h-8 w-8" />
                </Button>

                {/* Loading indicator */}
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                  </div>
                )}

                {/* Media container with fixed height for content area */}
                <div className="relative max-h-[80vh] max-w-full flex flex-col">
                  <div className="relative flex-grow flex items-center justify-center" style={{ minHeight: "70vh" }}>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={selectedImageIndex}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.3 }}
                        className="h-full w-full flex items-center justify-center"
                      >
                        {selectedGroupIndex !== null && imageGroups[selectedGroupIndex].images[selectedImageIndex].type === "image" ? (
                          <div className="relative flex items-center justify-center">
                            <Image
                              src={imageGroups[selectedGroupIndex].images[selectedImageIndex].src}
                              alt={imageGroups[selectedGroupIndex].images[selectedImageIndex].alt}
                              width={800}
                              height={600}
                              priority
                              className="max-h-[70vh] w-auto object-contain opacity-0 transition-opacity duration-300"
                              style={{ opacity: isLoading ? 0 : 1 }}
                              onLoadingComplete={handleImageLoad}
                            />
                          </div>
                        ) : (
                          <video
                            controls
                            className="max-h-[70vh] w-auto object-contain"
                            autoPlay={true}
                            onLoadedData={handleImageLoad}
                          >
                            <source
                              src={selectedGroupIndex !== null ? imageGroups[selectedGroupIndex].images[selectedImageIndex].src : ""}
                              type="video/mp4"
                            />
                            Your browser does not support the video tag.
                          </video>
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                  
                  {/* Caption - now in a fixed position at the bottom */}
                  <div className="w-full mt-auto">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={selectedImageIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                        className="w-full bg-black/60 p-4"
                      >
                        <p className="text-white text-center">
                          {selectedGroupIndex !== null ? imageGroups[selectedGroupIndex].images[selectedImageIndex].caption : ""}
                        </p>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}