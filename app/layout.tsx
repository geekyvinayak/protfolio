import type React from "react"
import "@/app/globals.css"
import { Poppins } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { SmoothScroll } from "@/components/smooth-scroll"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from '@vercel/speed-insights/next';
import { personSchema, websiteSchema, portfolioSchema, breadcrumbSchema } from "@/lib/structured-data"

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  preload: true,
  fallback: ['Arial', 'Helvetica', 'sans-serif'],
})

export const metadata: Metadata = {
  title: {
    default: "Vinayak Pandey - Full-stack Developer | React,, Next.js, Node.js, TypeScript Expert",
    template: "%s | Vinayak Pandey"
  },
  description:
    "Full-stack developer specializing in React, Next.js, Node.js, and TypeScript. Building exceptional digital experiences with modern web technologies. Based in Ahmedabad, Gujarat, India. Expert in MERN stack, MongoDB, PostgreSQL, Tailwind CSS, and responsive web design.",
  authors: [{ name: "Vinayak Pandey", url: "https://geekyvinayak.tech" }],
  creator: "Vinayak Pandey",
  publisher: "Vinayak Pandey",
  keywords: [
    "Vinayak Pandey",
    "geekyvinayak",
    "Full-stack developer",
    "React developer",
    "Next.js developer",
    "Node.js developer",
    "TypeScript developer",
    "JavaScript developer",
    "MERN stack developer",
    "Web development",
    "Frontend developer",
    "Backend developer",
    "MongoDB",
    "PostgreSQL",
    "Tailwind CSS",
    "React Native",
    "Portfolio",
    "Ahmedabad developer",
    "Gujarat developer",
    "India developer",
    "Freelance developer",
    "Full-stack engineer",
    "Software developer",
    "Web designer",
    "UI/UX developer",
    "Responsive design",
    "SEO optimization",
    "Performance optimization",
  ],
  metadataBase: new URL("https://geekyvinayak.tech"),
  alternates: {
    canonical: "https://geekyvinayak.tech",
  },
  openGraph: {
    title: "Vinayak Pandey - Full-stack Developer | React, Node.js Expert",
    description:
      "Full-stack developer specializing in building exceptional digital experiences with React, Next.js, Node.js, and modern web technologies.",
    url: "https://geekyvinayak.tech",
    siteName: "Vinayak Pandey Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Vinayak Pandey - Full-stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vinayak Pandey - Full-stack Developer",
    description:
      "Full-stack developer specializing in React, Next.js, Node.js, and modern web technologies.",
    images: ["/opengraph-image.jpeg"],
    creator: "@geekyvinayak",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.json",
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
  },
  category: "technology",
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={poppins.variable}>
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://vercel.live" />
      </head>
      <body className={poppins.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SmoothScroll>{children}</SmoothScroll>
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  )
}