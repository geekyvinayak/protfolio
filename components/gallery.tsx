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
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setSelectedGroupIndex(null)
    setSelectedImageIndex(0)
    document.body.style.overflow = "auto"
  }

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedGroupIndex === null) return
    const group = imageGroups[selectedGroupIndex]
    setSelectedImageIndex((prev) => {
      if (direction === "prev") return prev === 0 ? group.images.length - 1 : prev - 1
      return prev === group.images.length - 1 ? 0 : prev + 1
    })
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

                

                <div className="relative max-h-[80vh] max-w-[80vw]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selectedImageIndex}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.3 }}
                    >
                      {imageGroups[selectedGroupIndex].images[selectedImageIndex].type === "image" ? (
                        <Image
                          src={imageGroups[selectedGroupIndex].images[selectedImageIndex].src}
                          alt={imageGroups[selectedGroupIndex].images[selectedImageIndex].alt}
                          width={800}
                          height={600}
                          className="max-h-[80vh] w-auto object-contain"
                        />
                      ) : (
                        <video
                          controls
                          className="max-h-[80vh] w-auto object-contain"
                          autoPlay={true}
                        >
                          <source
                            src={imageGroups[selectedGroupIndex].images[selectedImageIndex].src}
                            type="video/mp4"
                          />
                          Your browser does not support the video tag.
                        </video>
                      )}

                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="absolute bottom-0 left-0 right-0 bg-black/60 p-4 text-white text-center"
                      >
                        {imageGroups[selectedGroupIndex].images[selectedImageIndex].caption}
                      </motion.p>
                    </motion.div>
                  </AnimatePresence>
                </div>
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
