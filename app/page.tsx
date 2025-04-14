import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Gallery } from "@/components/gallery"
import { Resume } from "@/components/resume"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-6">
        <Hero />
        <Projects />
        <Skills />
        <Gallery />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
