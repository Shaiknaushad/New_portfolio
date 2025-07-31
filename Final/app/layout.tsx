import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import Navbar from "@/components/navbar"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Naushad Shaik | Software Engineer",
  description:
    "Portfolio website of Naushad Shaik, a Software Engineer specializing in backend systems, machine learning applications, and smart contracts.",
  viewport: "width=device-width, initial-scale=1",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body className={`${inter.className} dark`}>
        <Navbar />
        <main className="relative">{children}</main>
        <Toaster />
      </body>
    </html>
  )
}
