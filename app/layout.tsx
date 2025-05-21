import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { SmoothScroll } from "@/components/smooth-scroll"
import type { Metadata } from "next"



export const metadata: Metadata = {
  title: "Vinayak Pandey",
  description:
    "A Full-stack developer specializing in building exceptional digital experiences. Currently focused on building accessible, human-centered products.",
  authors: [{ name: "Vinayak Pandey" }],
  creator: "Vinayak Pandey",
  keywords: [
    "Vinayak Pandey",
    "Full-stack developer",
    "React developer",
    "Node.js",
    "Web development",
    "Portfolio",
  ],
  metadataBase: new URL("https://geekyvinayak.tech"), // Replace with your domain
  openGraph: {
    title: "Vinayak Pandey",
    description:
      "A Full-stack developer specializing in building exceptional digital experiences.",
    url: "https://geekyvinayak.tech",
    siteName: "Vinayak Pandey",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  themeColor: "#ffffff",
  viewport: "width=device-width, initial-scale=1",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'