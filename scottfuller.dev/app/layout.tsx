import type { Metadata } from "next"
import { Nunito } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/nav/Navbar"
import Footer from "@/components/Footer"
import React from "react"

const nunito = Nunito({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Scott Fuller - Web & App Developer",
    description: "Welcome to my personal website! I'm Scott Fuller, a passionate web and app developer based in Kent. Explore my projects, skills, and experience in web and app development. Let's connect and create something amazing together!",
};

export default function RootLayout({
    children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <div className="max-w-screen-lg md:px-none px-6 min-h-screen mx-auto flex flex-col justify-center items-center">
          <Navbar />
          <main className="flex-grow flex flex-col justify-center items-center">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
