"use client"

import { Button } from "@/components/ui/button"
import { Download, Briefcase, GraduationCap, Circle } from "lucide-react"
import { motion } from "framer-motion"
import { Reveal } from "@/components/animations/reveal"
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children"

export function Resume() {
  const experiences = [
    {
      title: "Jr. Software Developer",
      company: "Krish Technolabs",
      period: "Sept 2023 - Present",
      description:
        "I've worked as a Junior Software Developer, primarily focused on frontend development for multiple eCommerce projects. My main responsibility was designing and building scalable, reusable components using React, Next.js, and React Native. From crafting pixel-perfect UIs to optimizing performance and ensuring smooth integration with APIs, I’ve contributed to delivering fast, responsive, and user-friendly experiences across web and mobile platforms.",
    },
    {
      title: "Internship Trainee",
      company: "Krish Technolabs",
      period: "Jan 2023 - Sept 2023",
      description:
        "During my training period, I received hands-on experience with the full stack, including JavaScript, React.js, Node.js, Express, and MongoDB. The program covered both frontend and backend fundamentals, project workflows, and real-world development practices.I consistently performed well throughout the training, actively contributed to team projects, and demonstrated strong problem-solving skills. My dedication and performance led to being offered a Pre-Placement Offer (PPO), marking the start of my professional journey as a Junior Software Developer.",
    },
  ]

  const education = [
    {
      degree: "Bachelor of Technology",
      institution: "Parul University",
      period: "2019 - 2023",
      description: "Graduated in Computer Science Engineering",
    },
    {
      degree: "Higher Secondary",
      institution: "Ashok Memorial Public School (CBSE)",
      period: "2018 - 2019",
      description: "Specialized in Science Stream with Physics, Chemistry and Maths as main subjects.",
    },
  ]

  return (
    <section id="resume" className="py-16 bg-muted/50">
      <div className="container px-4 md:px-6">
        <Reveal className="mx-auto">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Resume</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              My professional journey and educational background.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
              <Button className="mt-4" asChild>
                <a href="Vinayak_Pandey_Resume.pdf" download>
                  <motion.div
                    initial={{ y: 0 }}
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatDelay: 1 }}
                    className="mr-2"
                  >
                    <Download className="h-4 w-4" />
                  </motion.div>
                  Download Resume
                </a>
              </Button>
            </motion.div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-12 md:grid-cols-2">
          {/* Experience Timeline */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <motion.div
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 15, scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className="text-primary"
              >
                <Briefcase className="h-6 w-6" />
              </motion.div>
              <h3 className="text-2xl font-bold">Experience</h3>
            </div>

            <StaggerChildren className="relative pl-8 border-l-2 border-border/50 space-y-10">
              {experiences.map((exp, index) => (
                <StaggerItem key={index}>
                  <div className="relative">
                    {/* Timeline dot */}
                    <motion.div
                      className="absolute -left-[25px] p-1 bg-background border-2 border-primary rounded-full"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 300, damping: 20, delay: index * 0.1 }}
                    >
                      <Circle className="h-2 w-2 text-primary fill-primary" />
                    </motion.div>

                    {/* Content */}
                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    >
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                        <h4 className="font-bold text-lg">{exp.title}</h4>
                        <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded-md inline-block sm:ml-2">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-primary font-medium">{exp.company}</p>
                      <p className="text-sm text-muted-foreground">{exp.description}</p>
                    </motion.div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>

          {/* Education Timeline */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <motion.div
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 15, scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className="text-primary"
              >
                <GraduationCap className="h-6 w-6" />
              </motion.div>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>

            <StaggerChildren className="relative pl-8 border-l-2 border-border/50 space-y-10">
              {education.map((edu, index) => (
                <StaggerItem key={index}>
                  <div className="relative">
                    {/* Timeline dot */}
                    <motion.div
                      className="absolute -left-[25px] p-1 bg-background border-2 border-primary rounded-full"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 300, damping: 20, delay: index * 0.1 }}
                    >
                      <Circle className="h-2 w-2 text-primary fill-primary" />
                    </motion.div>

                    {/* Content */}
                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    >
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                        <h4 className="font-bold text-lg">{edu.degree}</h4>
                        <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded-md inline-block sm:ml-2">
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-primary font-medium">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground">{edu.description}</p>
                    </motion.div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </div>
    </section>
  )
}
