"use client"

import { Button } from "@/components/ui/button"
import { Download, Briefcase, GraduationCap, Circle } from "lucide-react"
import { motion } from "framer-motion"
import { Reveal } from "@/components/animations/reveal"
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children"

export function Resume() {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      period: "2021 - Present",
      description:
        "Led the development of the company's flagship SaaS product, improving performance by 40%. Mentored junior developers and implemented best practices for code quality.",
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      period: "2018 - 2021",
      description:
        "Developed and maintained multiple client projects using React, Node.js, and MongoDB. Implemented CI/CD pipelines and improved deployment processes.",
    },
    {
      title: "Junior Web Developer",
      company: "Creative Agency",
      period: "2016 - 2018",
      description:
        "Created responsive websites for clients across various industries. Collaborated with designers to implement pixel-perfect UIs.",
    },
  ]

  const education = [
    {
      degree: "Master of Computer Science",
      institution: "Tech University",
      period: "2014 - 2016",
      description: "Specialized in Human-Computer Interaction and Web Technologies.",
    },
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "State University",
      period: "2010 - 2014",
      description: "Graduated with honors. Participated in multiple hackathons and coding competitions.",
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
                <a href="/resume.pdf" download>
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
