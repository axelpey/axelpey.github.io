import "./globals.css"
import { Poppins } from "next/font/google"
import type React from "react" // Import React

const poppins = Poppins({
  weight: ["300", "400", "600"],
  subsets: ["latin"],
  display: "swap",
})

export const metadata = {
  title: "John Doe - HCI, Generative Agents & Robotics",
  description:
    "Personal landing page of John Doe, a founder and researcher in Human-Computer Interaction, Generative Agents, and Robotics.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}



import './globals.css'