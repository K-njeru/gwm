"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight, Calendar, MapPin, BookOpen, HandCoins, Users, PersonStanding } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const SLIDE_INTERVAL = 15000 // 15 seconds
const SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=2070",
    title: "Biblical Teaching",
    description: "Discipling believers through Christ-centered teachings, transforming them from new Christians to mature fruit-bearing disciples in God's Kingdom.",
    cta: "Donate",
    color: "from-purple-600 to-purple-800",
    textColor: "text-purple-600",
    icon: BookOpen,
    lightColor: "bg-purple-100",
    overlayColor: "bg-purple-600/20"
  },
  {
    image: "/empower.jpg",
    title: "Economic Empowerment",
    description: "Developing God-given talents and resources within our community to create profitable stewards in God's Kingdom.",
    cta: "Donate",
    color: "from-emerald-600 to-emerald-800",
    textColor: "text-emerald-600",
    icon: HandCoins,
    lightColor: "bg-emerald-100",
    overlayColor: "bg-emerald-600/20"
  },
  {
    image: "/leader.jpg",
    title: "Equipping Ministry Leaders",
    description: "Supporting church workers and pastoral teams in organizational development, administration, and governance.",
    cta: "Donate",
    color: "from-blue-600 to-blue-800",
    textColor: "text-blue-600",
    icon: Users,
    lightColor: "bg-blue-100",
    overlayColor: "bg-blue-600/20"
  },
  {
    image: "/child.jpg",
    title: "Discipleship",
    description: "Partnering with Christ-centered organizations to fulfill the Great Commission through training and equipping disciples.",
    cta: "",
    color: "from-orange-600 to-orange-800",
    textColor: "text-orange-600",
    icon: PersonStanding,
    lightColor: "bg-orange-100",
    overlayColor: "bg-orange-600/20"
  }
]

const ConferenceBanner = () => (
  <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-3 rounded-lg mb-6 md:mb-8">
    <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
      <div className="flex items-center space-x-3">
        <Calendar className="h-4 w-4 text-blue-200" />
        <div>
          <p className="text-sm font-medium text-blue-100">Transforming Faith Conference 2025</p>
        </div>
        <div className="hidden sm:flex items-center space-x-2">
          <MapPin className="h-4 w-4 text-blue-200" />
          <span className="text-sm text-blue-100">Nairobi, Kenya</span>
        </div>
      </div>
      <Link
        href="#Conference"
        className="px-4 py-1 bg-white text-blue-600 rounded-full text-sm font-semibold hover:bg-blue-50 transition-colors"
      >
        Learn More
      </Link>
    </div>
  </div>
)

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length)
  }, [])

  const previousSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length)
  }, [])

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(nextSlide, SLIDE_INTERVAL)
    return () => clearInterval(interval)
  }, [autoplay, nextSlide])

  const CurrentIcon = SLIDES[currentSlide].icon

  return (
    <main>
      <section className="relative w-full min-h-[95vh] bg-background overflow-hidden" id="Hero">
        {/* Mobile Background Images */}
        <div className="md:hidden absolute inset-0">
          <div
            className="absolute inset-0 transition-transform duration-500 ease-in-out flex"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {SLIDES.map((slide, index) => (
              <div key={index} className="relative w-full h-full min-w-full">
                <div className={`absolute inset-0 bg-gradient-to-b ${slide.color} opacity-40 z-10`} />
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex md:flex-row min-h-[95vh]">
          {/* Content Section */}
          <div className="relative z-10 w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center md:bg-background">
            <div className="max-w-xl mx-auto md:ml-auto md:mr-0 md:pr-8">
              {/* Conference Banner */}
              <div className="mb-8 md:mb-12">
                <ConferenceBanner />
              </div>

              {/* Static Content */}
              <h1 className="hidden md:block text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
                Godly Wisdom Ministry
              </h1>
              <div className={`md:hidden flex items-center gap-3 p-3 rounded-lg mb-3 ${SLIDES[currentSlide].lightColor}`}>
                <h2 className={`text-2xl font-bold ${SLIDES[currentSlide].textColor}`}>
                  Godly Wisdom Ministry
                </h2>
              </div>
              <p className="text-base md:text-lg text-white md:text-muted-foreground mb-8">
                Growing in faith, talent, and service through Christ-centered education
              </p>

              {/* Dynamic Content */}
              <div>
                <div className="transition-opacity duration-300">
                  {/* Title with icon - different styles for mobile and desktop */}
                  <h2 className={`hidden md:block text-2xl md:text-3xl font-bold mb-3 ${SLIDES[currentSlide].textColor}`}>
                    {SLIDES[currentSlide].title}
                  </h2>
                  <div className={`md:hidden flex items-center gap-3 p-3 rounded-lg mb-3 ${SLIDES[currentSlide].lightColor}`}>
                    <CurrentIcon className={`h-6 w-6 ${SLIDES[currentSlide].textColor}`} />
                    <h2 className={`text-2xl font-bold ${SLIDES[currentSlide].textColor}`}>
                      {SLIDES[currentSlide].title}
                    </h2>
                  </div>
                  <p className="text-base md:text-lg text-white md:text-muted-foreground mb-6">
                    {SLIDES[currentSlide].description}
                  </p>
                  <div className="flex flex-row gap-4">
                    <Link
                      href="/Donate"
                      className={`w-[140px] h-[45px] flex items-center justify-center rounded-md bg-gradient-to-r ${SLIDES[currentSlide].color} px-4 py-2 text-sm text-white font-bold hover:opacity-90 transition-opacity`}
                    >
                      {SLIDES[currentSlide].cta}
                    </Link>
                    <Link
                      href="#Programs"
                      className={`w-[140px] h-[45px] flex items-center justify-center rounded-md border md:${SLIDES[currentSlide].textColor} text-white md:text-current border-current text-sm font-bold hover:bg-gradient-to-r ${SLIDES[currentSlide].color} hover:text-white hover:border-transparent transition-colors`}
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Images Section */}
          <div className="hidden md:block relative w-1/2 mt-[100px] mx-6 mb-6 bg-background rounded-lg overflow-hidden group">
            <div
              className="absolute inset-0 transition-transform duration-500 ease-in-out flex"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {SLIDES.map((slide, index) => (
                <div key={index} className="relative w-full h-full min-w-full">
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r ${slide.color}`} style={{ clipPath: 'polygon(0 0, 30% 0, 0 100%, 0% 100%)' }} />
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover rounded-lg"
                    sizes="50vw"
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute bottom-6 left-6 z-20 flex items-center gap-4">
            <button
              onClick={() => {
                previousSlide()
                setAutoplay(false)
              }}
              className={`p-2 rounded-full bg-white/10 backdrop-blur-sm border ${SLIDES[currentSlide].textColor} border-current hover:bg-gradient-to-r ${SLIDES[currentSlide].color} hover:border-transparent hover:text-white transition-colors`}
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => {
                nextSlide()
                setAutoplay(false)
              }}
              className={`p-2 rounded-full bg-white/10 backdrop-blur-sm border ${SLIDES[currentSlide].textColor} border-current hover:bg-gradient-to-r ${SLIDES[currentSlide].color} hover:border-transparent hover:text-white transition-colors`}
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}