"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { ProfileImage } from "@/components/profile-image"
import { motion } from "framer-motion"
import { TextReveal } from "@/components/animations/text-reveal"
import { FadeIn } from "@/components/animations/fade-in"

export function Hero() {
  return (
    <section id="home" className="py-24 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col gap-4 text-center md:text-left order-2 md:order-1">
            <TextReveal
              text={`Hi, I'm Vinayak`}
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl"
              highlightWords={["Vinayak", "Pandey"]}
              delay={0.5}
            />

            <FadeIn delay={1.2} direction="up">
              <p className="text-muted-foreground md:text-xl">
                Full-stack developer specializing in building exceptional digital experiences. Currently focused on
                building accessible, human-centered products.
              </p>
            </FadeIn>

            <FadeIn delay={1.5} direction="up">
              <div className="flex flex-col gap-2 min-[400px]:flex-row md:justify-start justify-center">
                <Button asChild className="group">
                  <Link href="#projects">
                    <span>View My Work</span>
                    <motion.div initial={{ x: 0 }} whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </motion.div>
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#contact">Contact Me</Link>
                </Button>
              </div>
            </FadeIn>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              type: "spring",
              stiffness: 100,
            }}
            className="flex justify-center order-1 md:order-2"
          >
            <ProfileImage
              src="/profilephoto.jpeg"
              alt="Vinayak Pandey"
              className="w-[280px] md:w-[320px] lg:w-[380px]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
