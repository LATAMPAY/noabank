"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const slides = [
  {
    id: 1,
    title: "Banca digital del futuro",
    subtitle: "Innovación financiera para la Argentina que crece",
    description:
      "Descubrí una nueva forma de gestionar tus finanzas con tecnología de vanguardia y soluciones personalizadas.",
    image: "/hero-1.jpg",
    cta: "Conocer más",
    ctaLink: "/digital",
    bgGradient: "from-sky-400/70 to-blue-900/70",
  },
  {
    id: 2,
    title: "Impulsamos el desarrollo del país",
    subtitle: "Financiamiento para cada sector productivo",
    description:
      "Soluciones financieras adaptadas a las necesidades de cada región y actividad económica de Argentina.",
    image: "/hero-2.jpg",
    cta: "Ver soluciones",
    ctaLink: "/soluciones",
    bgGradient: "from-blue-500/70 to-indigo-900/70",
  },
  {
    id: 3,
    title: "Crecé con nosotros",
    subtitle: "Acompañamos a emprendedores y PyMEs",
    description: "Productos y servicios diseñados para potenciar el crecimiento de tu negocio en cada etapa.",
    image: "/hero-3.jpg",
    cta: "Empezar ahora",
    ctaLink: "/pymes",
    bgGradient: "from-indigo-400/70 to-purple-900/70",
  },
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[70vh] min-h-[600px] w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              fill
              priority={index === 0}
              className="object-cover"
            />
            <div className={`absolute inset-0 bg-gradient-to-r ${slide.bgGradient}`} />
            <div className="container relative z-10 flex h-full flex-col items-start justify-center px-4 md:px-6">
              <div className="max-w-xl animate-fade-in-up">
                <p className="mb-2 text-lg font-medium text-white/90 md:text-xl">{slide.subtitle}</p>
                <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                  {slide.title}
                </h1>
                <p className="mb-6 max-w-md text-lg text-white/90 md:text-xl">{slide.description}</p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-white/90">
                    <Link href={slide.ctaLink}>
                      {slide.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                    <Link href="/contacto">Contactanos</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 w-8 rounded-full transition-all ${index === currentSlide ? "bg-white" : "bg-white/40"}`}
            aria-label={`Ir a slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="container relative -mt-20 z-20 px-4 md:px-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <Card className="bg-white/95 backdrop-blur-sm shadow-lg border-sky-100">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-sky-700"
                  >
                    <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path>
                    <path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path>
                    <path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold">Home Banking</h3>
                  <p className="text-sm text-muted-foreground">Accedé a tus cuentas online</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/95 backdrop-blur-sm shadow-lg border-blue-100">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-blue-700"
                  >
                    <rect width="7" height="9" x="3" y="3" rx="1"></rect>
                    <rect width="7" height="5" x="14" y="3" rx="1"></rect>
                    <rect width="7" height="9" x="14" y="12" rx="1"></rect>
                    <rect width="7" height="5" x="3" y="16" rx="1"></rect>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold">App NOA BANK</h3>
                  <p className="text-sm text-muted-foreground">Descargá nuestra aplicación</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/95 backdrop-blur-sm shadow-lg border-indigo-100">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-indigo-700"
                  >
                    <path d="M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z"></path>
                    <path d="M12 13v8"></path>
                    <path d="M12 3v3"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold">Sucursales</h3>
                  <p className="text-sm text-muted-foreground">Encontrá la más cercana</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
