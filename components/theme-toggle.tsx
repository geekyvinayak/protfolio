"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function ThemeToggle() {
  const { setTheme ,theme} = useTheme()

  const handleThemeChange = () => {  
    let nextTheme =  theme == 'light'?  'dark' :  'light'
    setTheme(nextTheme)
  }

  return (
    <DropdownMenu>
        <Button variant="ghost" size="icon" aria-label="Toggle theme" onClick={handleThemeChange}>
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="relative h-[1.2rem] w-[1.2rem]"
          >
            <Sun className="absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </motion.div>
          <span className="sr-only">Toggle theme</span>
        </Button>
    </DropdownMenu>
  )
}
