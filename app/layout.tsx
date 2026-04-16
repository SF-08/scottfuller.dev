import type { Metadata } from "next"
import { Nunito } from "next/font/google"
import "./globals.css"
import Navbar from "@/app/components/nav/nav"
import Footer from "@/app/components/footer"
import React from "react"
import { Fragment } from "react"
import { Analytics } from "@vercel/analytics/react"

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
        <div className="max-w-5xl md:px-none px-6 min-h-screen mx-auto flex flex-col justify-center items-center">
          <Navbar />
          <main role="main" className="grow flex flex-col justify-center items-center">{children}</main>
          <Footer />
          <Analytics />
        </div>
      </body>
    </html>
  );
}
