"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Facebook, Instagram, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const navItems = [
    { name: "Home", href: "/#Hero" },
    { name: "About", href: "/about" },
    { name: "Compass", href: "/compass" },
    { name: "Programs", href: "/#Programs" },
    { name: "Conference", href: "/conference" },
    { name: "Partners", href: "/#Partners" },
  ];

  const socialLinks = [
    { name: "Twitter", href: "#", icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-6 h-6"
        fill="currentColor"
      >
        <path d="M7.55 7.05l4.1 4.94-4.1 5.02h2.57l2.6-3.22 2.56 3.22h2.67L14 12l4.2-4.95h-2.5l-2.45 2.96-2.5-2.96H7.55z"></path>
      </svg>
    ) },
    { name: "Facebook", href: "#", icon: <Facebook className="h-5 w-5" /> },
    { name: "Instagram", href: "#", icon: <Instagram className="h-5 w-5" /> },
    { name: "YouTube", href: "#", icon: <Youtube className="h-5 w-5" /> },
  ];

  return (
    <>
      {/* Social Media Section - Visible only on md screens and up */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 bg-blue-600 hidden md:block transition-colors duration-300`}
      >
        <div className="mx-auto max-w-7xl flex items-center justify-end p-1 lg:px-8"> {/* Reduced padding */}
          <div className="flex gap-2"> {/* Reduced gap between icons */}
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                className="flex items-center justify-center p-1 w-7 h-7 rounded-full bg-blue-600 border border-white text-white hover:text-blue-300 transition-colors duration-300"
                aria-label={social.name}
              >
               {social.icon instanceof Function ? social.icon() : social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navbar - Adjusted top spacing */}
      <header
        className={`fixed left-0 right-0 z-50 transition-colors duration-300 ${scrolled ? "bg-white" : "bg-transparent"
          } ${menuOpen ? "top-0" : "md:top-9 top-0"}`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="-m-1.5 p-1.5">
              <Image className="h-full w-auto" src="/globe.svg" alt="Godly wisdom" width={64} height={64} />
            </Link>
            <span className="ml-2 text-lg font-bold"></span>
          </div>

          {/* Centered nav items */}
          <div className="hidden lg:flex lg:gap-x-12">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className={`text-base font-medium ${activeSection === item.href.substring(1)
                      ? "text-blue-500"
                      : scrolled
                        ? "text-foreground"
                        : "text-white"
                    }`}
                >
                  {item.name}
                </Link>
                <div
                  className={`absolute -bottom-1 left-0 h-0.5 bg-blue-500 transition-all duration-300 ${activeSection === item.href.substring(1) || "group-hover:w-full"
                    } w-0`}
                />
              </div>
            ))}
          </div>

          {/* Get Started */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <Link
              href="/Donate"
              className="rounded-md bg-blue-700 px-4 py-2 text-white text-sm font-semibold hover:bg-transparent hover:text-blue-700 hover:border hover:border-blue-500"
            >
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
        <div className="fixed inset-y-0 right-0 z-50 w-full bg-white p-6 sm:max-w-sm flex flex-col justify-between animate-fade-in">
          {/* Top Section */}
          <div>
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <Image className="h-8 w-auto" src="/globe.svg" alt="Godly wisdom" width={32} height={32} />
              </Link>
              <span className="ml-2 text-lg font-bold">Godly Wisdom</span>
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
                    className="block rounded-lg px-3 py-2 text-base font-semibold hover:bg-gray-100"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <hr className="border-blue-300" />
              <Link
                className="inline-flex items-center py-2 px-3 mt-2 text-base font-semibold rounded hover:text-blue-700 hover:bg-gray-100"
                href="/Donate"
                onClick={() => setMenuOpen(false)}
              >
                Donate <ArrowRight className="h-4 ml-2" />
              </Link>
            </div>
          </div>

          {/* Social Icons at Bottom in Mobile Menu */}
          <div className="flex justify-center gap-4 py-4">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 border-2 border-white text-white text-thin hover:text-black transition-colors duration-300"
                aria-label={social.name}
              >
                {social.icon instanceof Function ? social.icon() : social.icon}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}