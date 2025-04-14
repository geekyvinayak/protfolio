"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Globe, Layout, Server, Smartphone } from "lucide-react"
import { motion } from "framer-motion"
import { Reveal } from "@/components/animations/reveal"
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children"

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Layout className="h-8 w-8 mb-2" />,
      skills: ["HTML/CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
    },
    {
      title: "Backend Development",
      icon: <Server className="h-8 w-8 mb-2" />,
      skills: ["Node.js", "Express", "GraphQL", "REST APIs"],
    },
    {
      title: "Database",
      icon: <Database className="h-8 w-8 mb-2" />,
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Mongoose"],
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="h-8 w-8 mb-2" />,
      skills: ["React Native", "Expo"],
    },
    {
      title: "DevOps & Tools",
      icon: <Code className="h-8 w-8 mb-2" />,
      skills: ["Git", "Docker", "CI/CD", "AWS", "Vercel", "Netlify", "GitHub Actions"],
    },
    {
      title: "Other Skills",
      icon: <Globe className="h-8 w-8 mb-2" />,
      skills: ["Figma", "Responsive Design", "SEO", "Performance Optimization", "Accessibility"],
    },
  ]

  return (
    <section id="skills" className="py-16 bg-muted/50">
      <div className="container px-4 md:px-6">
        <Reveal className="mx-auto">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Technologies and tools I work with on a regular basis.
            </p>
          </div>
        </Reveal>

        <StaggerChildren className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <StaggerItem key={index}>
              <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                <Card className="min-h-52">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <motion.div
                        initial={{ rotate: 0 }}
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                        className="text-primary"
                      >
                        {category.icon}
                      </motion.div>
                      <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                      <motion.div className="flex flex-wrap justify-center gap-2">
                        {category.skills.map((skill, skillIndex) => (
                          <motion.span
                            key={skillIndex}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                            whileHover={{
                              scale: 1.05,
                              backgroundColor: "hsl(var(--primary))",
                              color: "hsl(var(--primary-foreground))",
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
