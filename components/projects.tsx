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
    }
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
                <Card className="overflow-hidden h-full flex flex-col">
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
                    <CardDescription className="h-28 line-clamp-8 overflow-hidden">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex flex-wrap gap-2">
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
