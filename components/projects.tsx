"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Eye } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Reveal } from "@/components/animations/reveal"
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children"
import { ProjectModal } from "@/components/project-modal"
import type { ProjectType } from "@/types/project"

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const projects: ProjectType[] = [
    {
      id: "Money Tracker",
      title: "Money Tracker",
      description: "A full-stack MERN application that helps users manage their finances efficiently. It allows users to track income and expenses across multiple wallets and provides valuable insights through a dynamic dashboard.",
      image: "/MoneyTracker.png?height=300&width=600",
      bannerImage: "/MoneyTracker.png?height=600&width=1200",
      tags: ["React", "Node.js", "MongoDB"],
      demoUrl: "https://moneytracker-sigma.vercel.app/",
      githubUrl: "https://github.com/geekyvinayak/MoneyTracker",
      readme: `
**Money Tracker** is a React-based application that helps users manage their finances efficiently. It allows users to track income and expenses across multiple wallets and provides valuable insights through a dynamic dashboard.

---

## ✨ Features

- **🔐 Login/Signup:** Secure user authentication to manage personal finance data.  
- **🧾 Multiple Wallets:** Add and manage multiple wallets for better financial tracking.  
- **📊 Dashboard Insights:**  
  - Track income and expenses with detailed stats.  
  - **Today's Expense:** View your daily spending at a glance.  
  - **Today's Budget:** Automatically calculated based on the total wallet balance, remaining days in the month, and user-defined cycle date.  
- **⏱️ Daily Updates:** Automatic recalculation of today's budget at midnight.

---

## 📖 User Flow  

### 1️⃣ **Login/Signup**  
![Login Screenshot](<https://github.com/user-attachments/assets/d3d63ede-0170-4e82-9de9-9d04f051ceeb>)  
![Signup Screenshot](<https://github.com/user-attachments/assets/86f3646f-ccb6-4537-8e48-6289df7e9e40>)

---

### 2️⃣ **Dashboard**  
![Dashboard Screenshot](<https://github.com/user-attachments/assets/d724e697-cb4e-49b6-af2c-db519e2773aa>)

---

### 3️⃣ **Add Wallets and Transactions**  
![Add Wallet Screenshot](<https://github.com/user-attachments/assets/d2643c22-6345-4fc7-b10c-4fbad4f2d7da>)  
![Wallets Screenshot](<https://github.com/user-attachments/assets/edbe4b6c-d587-48a5-ac95-45b55cf647d0>)  
![Add Transaction Screenshot](<https://github.com/user-attachments/assets/7d343960-638a-4025-aa67-3f489e0c7003>)  
![Transactions Screenshot](<https://github.com/user-attachments/assets/c53e7e97-2434-4219-82f0-00ab25fc297e>)

---

## 🛡️ How Budget Calculation Works  

The **Today's Budget** is calculated daily at midnight using the formula:  
\`Total Wallet Balance ÷ Days Remaining in the Month\`

- **Cycle Date:** Defined by the user to reset the monthly budget cycle.  
- Automatically ensures users stay within their financial limits.

---

## 🚀 How to Use  

1. **Login/Signup**  
2. **Add Wallets**  
3. **Log Transactions**  
4. **Monitor Dashboard Stats**

---

### 💡 *Track your money, stay in control!*
`,
    },
    {
      id: "taskmanager",
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates.",
      image: "/placeholder.svg?height=300&width=600",
      bannerImage: "/placeholder.svg?height=600&width=1200",
      tags: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
      demoUrl: "#",
      githubUrl: "#",
      readme: `
# Task Management Application

## Overview
This collaborative task management application helps teams organize and track their work efficiently. It features real-time updates, task assignments, and progress tracking.

## Key Features
- **Real-time Collaboration**: See changes as they happen
- **Task Assignment**: Assign tasks to team members
- **Due Dates & Reminders**: Never miss a deadline
- **Comments & Attachments**: Discuss tasks and share files
- **Kanban Board View**: Visualize workflow
- **Progress Tracking**: Monitor completion status

## Technical Details
The application leverages modern web technologies:

- **Frontend**: Next.js, TypeScript, TailwindCSS
- **Backend**: Next.js API routes
- **Database**: PostgreSQL with Prisma ORM
- **Real-time**: Socket.io
- **Authentication**: NextAuth.js
- **Storage**: AWS S3 for attachments

## Development Challenges
Implementing real-time synchronization across multiple clients was challenging. We used Socket.io to broadcast changes and implemented an optimistic UI update pattern to ensure a smooth user experience.

## Future Improvements
- Add time tracking features
- Implement recurring tasks
- Create mobile applications
- Add integration with calendar services
      `,
    },
    {
      id: "portfolio",
      title: "Portfolio Website",
      description: "A minimalist portfolio website built with modern web technologies.",
      image: "/placeholder.svg?height=300&width=600",
      bannerImage: "/placeholder.svg?height=600&width=1200",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
      demoUrl: "#",
      githubUrl: "#",
      readme: `
# Portfolio Website

## Overview
This minimalist portfolio website showcases my projects and skills using modern web technologies. It features smooth animations, responsive design, and a clean user interface.

## Key Features
- **Responsive Design**: Looks great on all devices
- **Dark/Light Mode**: User preference-based theme
- **Smooth Animations**: Using Framer Motion
- **Project Showcase**: Detailed project information
- **Contact Form**: Easy way to get in touch
- **Performance Optimized**: Fast loading times

## Technical Details
The website is built with:

- **Framework**: Next.js
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Deployment**: Vercel
- **Forms**: React Hook Form with validation
- **Icons**: Lucide React

## Development Challenges
Creating smooth, performant animations that work well across devices was challenging. I used Framer Motion's capabilities to create animations that enhance the user experience without affecting performance.

## Future Improvements
- Add a blog section
- Implement internationalization
- Add more interactive elements
- Create case studies for major projects
      `,
    },
  ]

  const openModal = (project: ProjectType) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <Reveal className="mx-auto">
          <div className="flex flex-col items-center gap-4 text-center ">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Projects</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              A selection of my recent work and personal projects.
            </p>
          </div>
        </Reveal>

        <StaggerChildren className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <StaggerItem key={index}>
              <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                <Card className="overflow-hidden h-full">
                  <div className="aspect-video relative overflow-hidden">
                    <motion.div >
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-all"
                      />
                    </motion.div>
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between gap-2">
                    <Button variant="outline" size="sm" asChild className="group">
                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <motion.div
                          initial={{ rotate: 0 }}
                          whileHover={{ rotate: 15 }}
                          transition={{ duration: 0.2 }}
                          className="mr-2"
                        >
                          <Github className="h-4 w-4" />
                        </motion.div>
                        Code
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" className="group" onClick={() => openModal(project)}>
                      <motion.div
                        initial={{ rotate: 0 }}
                        whileHover={{ rotate: 15 }}
                        transition={{ duration: 0.2 }}
                        className="mr-2"
                      >
                        <Eye className="h-4 w-4" />
                      </motion.div>
                      Details
                    </Button>
                    <Button size="sm" asChild className="group">
                      <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <motion.div
                          initial={{ rotate: 0 }}
                          whileHover={{ rotate: 15 }}
                          transition={{ duration: 0.2 }}
                          className="mr-2"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </motion.div>
                        Demo
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>

      {/* Project Modal */}
      <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={closeModal} />
    </section>
  )
}
