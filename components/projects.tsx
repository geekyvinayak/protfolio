"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Eye } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal } from "@/components/animations/reveal";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/animations/stagger-children";
import { ProjectModal } from "@/components/project-modal";
import type { ProjectType } from "@/types/project";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects: ProjectType[] = [
     {
      id: "FreelanceOS",
      title: "FreelanceOS",
      description:
        "FreelanceOS is a comprehensive project management tool designed specifically for freelancers and small agencies. Built with modern web technologies, it provides an intuitive interface for managing projects, tracking time, handling invoices, and maintaining client relationships.",
      image: "/freelanceOs.png",
      bannerImage: "/freelanceOs.png?height=600&width=1200",
      tags: [
  "React",
  "Supabase", 
  "Github Actions",
  "Tailwind CSS",
  "TypeScript"
],
      demoUrl: "https://freelanceos-phi.vercel.app/",
      githubUrl: "https://github.com/geekyvinayak/freelanceos",
      readme: `
# FreelanceOS - Project Management Tool

## 🎯 Overview

FreelanceOS is a comprehensive project management tool designed specifically for freelancers and small agencies. Built with modern web technologies, it provides an intuitive interface for managing projects, tracking time, handling invoices, and maintaining client relationships.

## ✨ Key Features

### 📊 Project Management
- **Project Dashboard** - Visual overview of all active projects
- **Project Status Tracking** - Active, completed, on-hold status management
- **Project Notes** - Detailed note-taking system for each project
- **Timeline Management** - Track project progress and milestones

### 💰 Billing & Invoicing
- **Invoice Generation** - Create professional invoices with custom numbering
- **Payment Tracking** - Monitor paid, pending, and overdue invoices
- **Project-based Billing** - Link invoices directly to specific projects
- **Financial Analytics** - Track earnings and payment patterns

### 🤖 AI-Powered Features
- **Email Assistant** - AI-powered email writing with context awareness
- **Smart Suggestions** - Intelligent recommendations for project management
- **Automated Workflows** - Streamline repetitive tasks

### 📱 User Experience
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Clean Interface** - Modern, minimal design with intuitive navigation
- **Real-time Updates** - Live data synchronization across all devices
- **Dark/Light Mode** - Customizable theme preferences

## 🛠 Technology Stack

### Frontend
- **React** - Modern component-based UI framework
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **ShadCN UI** - High-quality component library

### Backend & Database
- **Supabase** - Backend-as-a-Service with PostgreSQL
- **Row Level Security** - Secure data access policies
- **Real-time Subscriptions** - Live data updates
- **Authentication** - Secure user management

### Deployment & Automation
- **Vercel** - Serverless deployment platform
- **GitHub Actions** - Automated workflows and CI/CD
- **Vercel Cron Jobs** - Scheduled background tasks

## 🚀 Features in Detail

### Project Management
- Create and organize projects with detailed descriptions
- Track project status (active, completed, on-hold)
- Add timestamped notes for project documentation
- Visual project cards with status indicators

### Billing System
- Generate invoices with automatic numbering (DEM-2023-XXXX)
- Track invoice status (paid, pending, overdue)
- Link invoices to specific projects
- Calculate total earnings and pending amounts

### Demo Data Management
- Automated demo data reset system
- Realistic sample projects, notes, and invoices
- Scheduled data refresh for demonstrations
- API endpoints for data management

## 🔧 Architecture

### Database Schema
- **Users** - Authentication and user profiles
- **Projects** - Project information and metadata
- **Notes** - Project-related documentation
- **Bills** - Invoice and payment tracking

### API Endpoints
- RESTful API design with Supabase
- Automated demo data reset functionality
- Secure authentication with JWT tokens
- Real-time data synchronization

### Security
- Row Level Security (RLS) policies
- Service role authentication for admin operations
- Environment variable management
- Secure API key handling

## 🎨 Design Philosophy

### User-Centric Design
- Clean, minimal interface focusing on usability
- Consistent color palette (blues, whites, greys)
- Intuitive navigation and workflow
- Mobile-first responsive design

### Performance Optimization
- Fast loading times with Vite
- Optimized database queries
- Efficient state management
- Lazy loading for better performance

## 🔄 Automation Features

### Demo Data Management
- **Automated Reset** - Scheduled demo data refresh every 5 minutes
- **GitHub Actions** - Workflow automation for data management
- **Vercel Cron Jobs** - Reliable scheduled task execution
- **API Integration** - RESTful endpoints for data operations

### Development Workflow
- **Continuous Deployment** - Automatic deployment on code push
- **Environment Management** - Separate staging and production environments
- **Error Monitoring** - Comprehensive logging and error tracking

## 🎯 Target Audience

### Primary Users
- **Freelancers** - Independent contractors managing multiple clients
- **Small Agencies** - Teams handling various client projects
- **Consultants** - Professional service providers
- **Creative Professionals** - Designers, developers, writers

### Use Cases
- Project timeline management
- Client communication tracking
- Invoice generation and payment tracking
- Time and resource allocation
- Financial reporting and analytics

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- Supabase account and project
- Vercel account for deployment

### Quick Setup
1. Clone the repository
2. Install dependencies with "npm install"
3. Configure environment variables
4. Set up Supabase database schema
5. Deploy to Vercel

### Demo Access
The application includes a comprehensive demo mode with:
- 6 sample projects across different industries
- 15 detailed project notes
- 9 invoices with various payment statuses
- Automated data refresh for consistent demos

## 📈 Future Roadmap

### Planned Features
- **Time Tracking** - Built-in time tracking with project integration
- **Client Portal** - Dedicated client access for project updates
- **Advanced Analytics** - Detailed reporting and insights
- **Mobile App** - Native mobile applications
- **Integration APIs** - Connect with popular tools and services

### Technical Improvements
- **Performance Optimization** - Enhanced loading speeds
- **Offline Support** - Progressive Web App capabilities
- **Advanced Security** - Enhanced authentication options
- **Scalability** - Support for larger teams and projects

---

**FreelanceOS** - Empowering freelancers with professional project management tools. Built for the modern workforce, designed for success.

`,
    },
    {
      id: "Money Tracker",
      title: "Money Tracker",
      description:
        "A full-stack MERN application that helps users manage their finances efficiently. It allows users to track income and expenses across multiple wallets and provides valuable insights through a dynamic dashboard.",
      image: "/MoneyTracker.png",
      bannerImage: "/MoneyTracker.png?height=600&width=1200",
      tags: ["React", "Node.js", "MongoDB","ShadCn Ui"],
      demoUrl: "https://moneytracker-sigma.vercel.app/",
      githubUrl: "https://github.com/geekyvinayak/MoneyTracker",
      readme: `
# 💰 Money Tracker

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
      id: "Chitthi",
      title: "Chitthi",
      description:
        "Chitthi is a secure messaging platform where users can send end-to-end encrypted messages. Its unique feature allows users to set their own encryption keys, ensuring that only they can decrypt their messages—providing absolute privacy, even from site administrators.",
      image: "/Chitthi.png?height=300&width=600",
      bannerImage: "/Chitthi.png?height=600&width=1200",
      tags:  ["React", "Node.js", "MongoDB","ShadCn Ui"],
      demoUrl: "https://chitthi.vercel.app/",
      githubUrl: "https://github.com/geekyvinayak/Chitthi",
      readme: `# 📜 Chitthi: Secure Messaging Platform

**Chitthi** is a secure messaging platform where users can send **end-to-end encrypted messages**. Its unique feature allows users to set their own encryption keys, ensuring that only they can decrypt their messages—providing absolute privacy, even from site administrators.

---

## ✨ Features

- **🔐 User-Defined Encryption:** Users set and control their encryption keys for messages.  
- **💬 Secure Messaging:** Messages are encrypted and can only be decrypted with the correct key.  
- **🛠️ Room-Based Communication:** Create or join rooms for secure individual or group chats.

---

## 📖 User Flow  

### 1️⃣ **Login/Signup**  
![Screenshot 2024-11-20 at 10 43 39 AM 10 50 57 AM](https://github.com/user-attachments/assets/53fed155-740e-439d-9bee-7b6516b7a80e)

- **Login:** Use your email and password to access your account.  
- **Signup:** Create a new account by providing your email and password.  

---

### 2️⃣ **Home Page**  
![Screenshot 2024-11-20 at 10 49 22 AM](https://github.com/user-attachments/assets/98e76f92-9f5a-4f2e-aba0-b18b7923cafb)

- View all the rooms you’ve joined.  
- Use the navigation bar to **create new rooms** or **join existing ones**.  

---

### 3️⃣ **Create/Join Room**  
![Screenshot 2024-11-20 at 10 49 45 AM](https://github.com/user-attachments/assets/96723f5f-8f11-4ad8-ba38-e82956c64c48)


- **Create Room:** Enter a unique Room ID to create a new room.  
- **Join Room:** Enter an existing Room ID to join that room.  

---

### 4️⃣ **Room Interface** 
![Screenshot 2024-11-20 at 10 50 12 AM](https://github.com/user-attachments/assets/a7a4a7fb-9e58-4d21-b0e2-723573e60d25)

- **Send Messages:**  
  - Enter an encryption key and your message.  
  - The message is encrypted and sent securely.  

- **Read Messages:**  
  - Use the correct encryption key to decrypt and read messages.  
![Screenshot 2024-11-20 at 10 50 23 AM](https://github.com/user-attachments/assets/b06d353a-4d43-42ad-accb-ee0c527763f1)
---

## 🛡️ Security  

Chitthi prioritizes **privacy and security** with these safeguards:  
- **Key Ownership:** Encryption keys are managed by users—only you can decrypt your messages.  
- **Administrator Privacy:** Even site admins cannot access your encrypted content.  

---

## 🚀 How to Use  

### 1. Login or Signup  
- **Existing Users:** Log in with your email and password.  
- **New Users:** Sign up to create an account.  

### 2. Navigate to the Home Page  
- View your joined rooms or create/join rooms using the top navigation bar.  

### 3. Create/Join Rooms  
- **Create:** Enter a unique Room ID to create a room.  
- **Join:** Use an existing Room ID to access a room.  

### 4. Securely Chat in Rooms  
- **Send:** Use an encryption key to secure your messages.  
- **Read:** Enter the same key to decrypt and read received messages.  

---

## 🤝 Contributing  

Want to contribute to Chitthi? Follow these steps:  
1. Fork the repository.  
2. Submit a pull request.  
3. For major changes, open an issue to discuss your idea.  

---

## 🖥️ Live Demo  
[Click here to explore Chitthi](https://chitthi.vercel.app/)  

---

### 💡 *Chitthi ensures your privacy, one message at a time!*
`,
    },
    {
      id: "timeLogger",
      title: "Time Logger",
      description:
         "Keka Time Logger is a smart Chrome extension that gives you clear and detailed insights into your daily logs and time usage. It helps you understand how your time is spent across workdays — empowering you to track productivity effortlessly.",
      image: "/Kekalogger.png?height=300&width=600",
      bannerImage: "/TimeLoggerBanner.png?height=600&width=1200",
      tags:  ["Chrome Extension","Js","Html","CSS"],
      demoUrl: "https://chromewebstore.google.com/detail/keka-time-logger/dpdfhijiikhcbpkeciiknfffnapajcid?hl=en",
      readme: `
# ⏱️ Keka Time Logger: Your Time, Decoded

**Keka Time Logger** is a smart Chrome extension that gives you **clear and detailed insights** into your daily logs and time usage. It helps you understand how your time is spent across workdays — empowering you to track productivity effortlessly.

Currently trusted by users with **over 3,500 daily impressions**!

---

## ✨ Features

- **📊 Daily Insights:** Visual breakdowns of your logs and time entries.  
- **📅 Date-wise Filtering:** Easily switch between different days to view specific logs.  
- **📈 Productivity Metrics:** Spot trends and patterns in your workday.  
- **⚙️ Simple Interface:** Clean, intuitive UI for seamless tracking.  
- **🔒 100% Privacy:** Your data stays on your machine — nothing gets sent to servers.

---

## 📖 User Flow

### 1️⃣ **Install the Extension**  
- Add **Keka Time Logger** from the Chrome Web Store.  
- Pin it for quick access.

---

### 2️⃣ **View Logs**  
- Click the extension icon to open your dashboard.  
- Automatically fetches and displays your daily logs.

---

### 3️⃣ **Filter and Analyze**  
- Select a date to view logs for a specific day.  
- Review total hours, time gaps, and log count.

---

### 4️⃣ **Gain Insights**  
- Use your dashboard to monitor work habits.  
- Improve your focus and time management effortlessly.

---

## 📈 Why Use Keka Time Logger?

- Trusted by hundreds of users every day.  
- Crosses **3,500+ daily impressions** and growing!  
- Saves time by summarizing your logs in one click.

---

## 🛠️ Tech Stack

- **Chrome Extensions API**  
- **JavaScript + HTML + CSS**  
- **LocalStorage for persistence**  

---

## 🚀 Installation

1. Download the extension from the [Chrome Web Store](#).  
2. Click “Add to Chrome.”  
3. Pin the extension for quick access.  
4. Start tracking your time with zero setup!

---
### 💡 *Track smarter. Work better. With Keka Time Logger.*
`
    },
    {
      id: "botIntelli",
      title: "BotIntelli",
      description:
         "A Next.js frontend for an enterprise-grade AI assistant platform, delivering a sleek, component-driven UI built with Shadcn UI and Tailwind CSS. It enables businesses to harness advanced Retrieval-Augmented Generation, stateful multi-LLM conversations (GPT-4, Claude, Mistral, etc.), and visual, trigger-based workflow automation—all through intuitive navigation, interactive demos, and secure integrations with third-party apps. Users can explore specialized AI agents (Legal, Financial Analyst, Marketing, Operations, or custom), manage context-aware document processing with vector databases, and orchestrate no-code automations—empowering industry leaders to deploy AI-powered solutions with ease and confidence.",
      image: "/botintelli.png",
      bannerImage: "/botintelli.png",
      tags:  ["Next Js","Tailwind","Framer Motion","Vercel","Axios","CI/CD"],
      demoUrl: "https://www.botintelli.com/",
    },
    {
      id: "maitriassociates",
      title: "Maitri Associates",
      description:
         "A modern React frontend developed for Maitri Associates, an architecture and interior design firm. Built with a focus on showcasing their diverse portfolio, the website offers intuitive navigation to explore their architectural designs, office interiors, and residential projects. Engaging visuals and project details provide a comprehensive overview of their expertise. A user-friendly contact form facilitates seamless connection for potential clients seeking innovative design solutions.",
      image: "/maitriassociates.png",
      bannerImage: "/maitriassociates.png",
      tags:  ["Next Js","Tailwind","Framer Motion","Vercel","Axios","CI/CD"],
      demoUrl: "https://maitriassociates.in/",
    },
  ];

  const openModal = (project: ProjectType) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <Reveal className="mx-auto">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Projects
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              A selection of my recent work and personal projects.
            </p>
          </div>
        </Reveal>
  
        <StaggerChildren className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <StaggerItem key={index}>
              <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                <Card className="overflow-hidden h-full flex flex-col ">
                  <div className="aspect-video relative overflow-hidden">
                    <motion.div>
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
                    <CardDescription className="line-clamp-5 overflow-hidden">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow h-16">
                    <div className="flex flex-wrap gap-2 ">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between gap-2 mt-auto">
                    {project.githubUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="group"
                      >
                        <Link
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
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
                    )}
                    <Button
                      variant="outline"
                      size="sm"
                      className="group"
                      onClick={() => openModal(project)}
                    >
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
                      <Link
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
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
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
}
