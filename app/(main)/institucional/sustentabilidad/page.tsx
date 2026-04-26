import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Leaf, Droplets, Wind, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import PageHeader from "@/components/page-header"

export const metadata = {
  title: "Sustentabilidad | NOA BANK",
  description: "Nuestro compromiso con el desarrollo sostenible y el cuidado del medio ambiente.",
}

export default function SustentabilidadPage() {
  return (
    <>
      <PageHeader
        title="Sustentabilidad"
        description="Nuestro compromiso con el desarrollo sostenible y el cuidado del medio ambiente."
        breadcrumbs={[
          { label: "Institucional", href: "/institucional" },
          { label: "Sustentabilidad", href: "/institucional/sustentabilidad" },
        ]}
        bgColor="bg-gradient-to-r from-green-800 to-emerald-700"
      />

      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-center mb-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Nuestro Compromiso</h2>
              <p className="text-lg text-muted-foreground">
                En NOA BANK entendemos que nuestro rol como entidad financiera va más allá de ofrecer productos y
                servicios. Tenemos la responsabilidad de contribuir al desarrollo sostenible de las comunidades donde
                operamos y de minimizar nuestro impacto ambiental.
              </p>
              <p className="text-lg text-muted-foreground">
                Nuestra estrategia de sustentabilidad se basa en tres pilares fundamentales: cuidado del medio ambiente,
                inclusión financiera y apoyo a las comunidades. A través de estos ejes, buscamos generar un impacto
                positivo y duradero en la sociedad.
              </p>
              <Button
                asChild
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
              >
                <Link href="/noticias/creditos-energia-renovable">
                  Conocer nuestras iniciativas
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative rounded-xl overflow-hidden">
              <Image
                src="/institucional/sustentabilidad.jpg"
                alt="Sustentabilidad en NOA BANK"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Nuestros Pilares de Sustentabilidad</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-br from-green-50 to-white border-green-100">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <Leaf className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Cuidado del Medio Ambiente</h3>
                  <p className="text-muted-foreground mb-4">
                    Implementamos prácticas para reducir nuestra huella ambiental y promovemos el financiamiento de
                    proyectos sostenibles.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">•</span> Reducción de emisiones de CO2
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">•</span> Eficiencia energética
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">•</span> Digitalización de procesos
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">•</span> Financiamiento verde
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-50 to-white border-blue-100">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
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
                      className="h-6 w-6 text-blue-600"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Inclusión Financiera</h3>
                  <p className="text-muted-foreground mb-4">
                    Trabajamos para acercar servicios financieros a todos los sectores de la sociedad, especialmente a
                    los más vulnerables.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span> Educación financiera
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span> Productos accesibles
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span> Atención a sectores vulnerables
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span> Microcréditos
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-50 to-white border-purple-100">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
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
                      className="h-6 w-6 text-purple-600"
                    >
                      <path d="M3 7V5a2 2 0 0 1 2-2h2"></path>
                      <path d="M17 3h2a2 2 0 0 1 2 2v2"></path>
                      <path d="M21 17v2a2 2 0 0 1-2 2h-2"></path>
                      <path d="M7 21H5a2 2 0 0 1-2-2v-2"></path>
                      <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                      <path d="M9 9h.01"></path>
                      <path d="M15 9h.01"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Apoyo a las Comunidades</h3>
                  <p className="text-muted-foreground mb-4">
                    Desarrollamos programas de voluntariado y apoyamos iniciativas sociales que promueven el bienestar
                    de las comunidades.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">•</span> Voluntariado corporativo
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">•</span> Apoyo a emprendedores
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">•</span> Donaciones y patrocinios
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">•</span> Alianzas con ONGs
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Financiamiento Sostenible</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="bg-sky-100 p-6 flex justify-center">
                  <Droplets className="h-12 w-12 text-sky-600" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Proyectos Hídricos</h3>
                  <p className="text-muted-foreground mb-4">
                    Financiamiento para proyectos de gestión eficiente del agua y tratamiento de efluentes.
                  </p>
                  <Link
                    href="/productos/financiamiento-proyectos"
                    className="inline-flex items-center text-sky-600 hover:text-sky-700 hover:underline"
                  >
                    Conocer más <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="bg-green-100 p-6 flex justify-center">
                  <Leaf className="h-12 w-12 text-green-600" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Agricultura Sostenible</h3>
                  <p className="text-muted-foreground mb-4">
                    Líneas de crédito para prácticas agrícolas que preservan los recursos naturales.
                  </p>
                  <Link
                    href="/agro/financiamiento"
                    className="inline-flex items-center text-green-600 hover:text-green-700 hover:underline"
                  >
                    Conocer más <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="bg-blue-100 p-6 flex justify-center">
                  <Wind className="h-12 w-12 text-blue-600" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Energía Eólica</h3>
                  <p className="text-muted-foreground mb-4">
                    Financiamiento para proyectos de generación de energía eólica a diferentes escalas.
                  </p>
                  <Link
                    href="/noticias/creditos-energia-renovable"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 hover:underline"
                  >
                    Conocer más <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="bg-amber-100 p-6 flex justify-center">
                  <Sun className="h-12 w-12 text-amber-600" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Energía Solar</h3>
                  <p className="text-muted-foreground mb-4">
                    Soluciones financieras para la instalación de sistemas de energía solar.
                  </p>
                  <Link
                    href="/noticias/creditos-energia-renovable"
                    className="inline-flex items-center text-amber-600 hover:text-amber-700 hover:underline"
                  >
                    Conocer más <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Reporte de Sustentabilidad</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Conocé en detalle nuestras acciones y resultados en materia de sustentabilidad en nuestro reporte anual.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
            >
              <Link href="/institucional/reporte-sustentabilidad">
                Descargar Reporte 2024
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
