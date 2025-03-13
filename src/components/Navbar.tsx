"use client"

import { useState, useEffect } from "react"
import { Menu, X, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import ThemeSwitch from "./ThemeSwitch"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>("home")

  useEffect(() => {
    const sections = document.querySelectorAll("section")
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  const navItems = [
    { name: "Home", href: "/#Hero" },
    { name: "About", href: "/about" },
    { name: "Compass", href: "/compass" },
    { name: "Programs", href: "/#Programs" },
    { name: "Conference", href: "/conference" },
    { name: "Partners", href: "/#Partners" },
  ]

  return (
    <>
      <header
        className='fixed top-0 left-0 right-0 z-50 transition-colors duration-300 bg-card dark:bg-popover'>
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="-m-1.5 p-1.5">
              <Image className="h-full w-auto" src="/logoR.png" alt="Godly wisdom" width={64} height={64} />
            </Link>
            <span className="ml-2 text-lg font-bold"></span>
          </div>

          {/* Centered nav items */}
          <div className="hidden lg:flex lg:gap-x-12">
            {navItems.map((item) => (
              <motion.div key={item.name} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href={item.href}
                  className={`text-base font-medium ${
                    activeSection === item.href.substring(1) ? "text-blue-500" : "text-foreground hover:text-blue-700 dark:hover:text-blue-400"
                  }`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Get Started and Dark Mode Toggle */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <ThemeSwitch />
            <Link href="/Donate" className="rounded-md bg-blue-700 px-4 py-2 text-white text-sm font-semibold hover:bg-transparent hover:text-foreground hover:border hover:border-blue-500">
              Donate
            </Link>
          </div>
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400 lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </header>


      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "tween", duration: 0.3 }}
          className="fixed inset-y-0 right-0 z-50 w-full bg-background p-6 sm:max-w-sm flex flex-col justify-between "
        >
          {/* Top Section */}
          <div>
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <Image className="h-8 w-auto" src="/globe.svg" alt="Godly wisdom" width={32} height={32} />
              </Link>
              <span className="ml-2 text-lg font-bold ">Godly Wisdom</span>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-400 hover:text-gray-200"
                onClick={() => setMenuOpen(false)}
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="flex mt-6 flex-col">
              <div className="space-y-2 py-6">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block rounded-lg px-3 py-2 text-base font-semibold hover:bg-muted "
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <hr className="border-blue-300 dark:border-blue-700" />
              <Link
                className="inline-flex items-center py-2 px-3 mt-2 text-base font-semibold rounded hover:text-blue-700 hover:bg-muted"
                href="/Donate"
              >
                Donate <ArrowRight className="h-4 ml-2" />
              </Link>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="relative w-full flex items-end justify-end">
            <ThemeSwitch />
          </div>
        </motion.div>
      )}
    </>
  )
}

