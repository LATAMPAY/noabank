import Link from "next/link"
import { ArrowRight, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import HeroSection from "@/components/hero-section"
import SegmentSection from "@/components/segment-section"
import ProductsSection from "@/components/products-section"
import TestimonialsSection from "@/components/testimonials-section"
import NewsSection from "@/components/news-section"
import AppPromotion from "@/components/app-promotion"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />

        <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-sky-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block rounded-lg bg-sky-100 px-3 py-1 text-sm text-sky-900">
                Banca Multiservicios
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Soluciones financieras para cada necesidad
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Descubrí cómo NOA BANK puede ayudarte a alcanzar tus metas financieras con productos y servicios
                diseñados para cada perfil.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-br from-sky-50 to-white border-sky-100 hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-sky-900">
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
                      className="h-6 w-6"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Banca Personal</h3>
                  <p className="mt-2 text-muted-foreground">
                    Cuentas, préstamos y tarjetas diseñadas para tu vida diaria.
                  </p>
                  <div className="mt-4">
                    <Link
                      href="/personal"
                      className="inline-flex items-center text-sky-600 hover:text-sky-700 group-hover:translate-x-1 transition-transform"
                    >
                      Conocer más <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-50 to-white border-blue-100 hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-900">
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
                      className="h-6 w-6"
                    >
                      <path d="M3 3v18h18"></path>
                      <path d="M18 9l-6-6-6 6"></path>
                      <path d="M6 9v9"></path>
                      <path d="M12 3v9"></path>
                      <path d="M18 9v9"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">PyMEs y Comercios</h3>
                  <p className="mt-2 text-muted-foreground">Soluciones para impulsar el crecimiento de tu negocio.</p>
                  <div className="mt-4">
                    <Link
                      href="/pymes"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 group-hover:translate-x-1 transition-transform"
                    >
                      Conocer más <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-indigo-50 to-white border-indigo-100 hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-indigo-900">
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
                      className="h-6 w-6"
                    >
                      <rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect>
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Empresas e Industrias</h3>
                  <p className="mt-2 text-muted-foreground">Servicios corporativos para optimizar tu operación.</p>
                  <div className="mt-4">
                    <Link
                      href="/empresas"
                      className="inline-flex items-center text-indigo-600 hover:text-indigo-700 group-hover:translate-x-1 transition-transform"
                    >
                      Conocer más <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-10 flex justify-center">
              <Button asChild variant="outline" className="gap-2">
                <Link href="/segmentos">
                  Ver todos los segmentos
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <SegmentSection />
        <ProductsSection />
        <TestimonialsSection />
        <AppPromotion />
        <NewsSection />
      </main>
      <Footer />
    </div>
  )
}
