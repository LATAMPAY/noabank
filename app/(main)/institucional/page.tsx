import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import PageHeader from "@/components/page-header"

export const metadata = {
  title: "Institucional | NOA BANK",
  description: "Conocé más sobre NOA BANK, nuestra historia, valores y compromiso con Argentina.",
}

export default function InstitucionalPage() {
  return (
    <>
      <PageHeader
        title="Institucional"
        description="Conocé más sobre NOA BANK, nuestra historia, valores y compromiso con Argentina."
        breadcrumbs={[{ label: "Institucional", href: "/institucional" }]}
      />

      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Nuestra Historia</h2>
              <p className="text-lg text-muted-foreground">
                NOA BANK nació en 1985 con el objetivo de impulsar el desarrollo económico del noroeste argentino. Desde
                entonces, hemos crecido hasta convertirnos en una institución financiera de referencia a nivel nacional,
                manteniendo siempre nuestro compromiso con las economías regionales y el progreso del país.
              </p>
              <p className="text-lg text-muted-foreground">
                A lo largo de nuestra trayectoria, hemos acompañado a miles de familias, emprendedores y empresas en el
                camino hacia el crecimiento, adaptándonos a los cambios y desafíos de la economía argentina con
                soluciones innovadoras y un servicio de excelencia.
              </p>
              <Button asChild>
                <Link href="/institucional/nosotros">
                  Conocer más sobre nuestra historia
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative rounded-xl overflow-hidden">
              <Image
                src="/institucional/historia.jpg"
                alt="Historia de NOA BANK"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Misión</h3>
                <p className="text-muted-foreground">
                  Brindar soluciones financieras innovadoras y de calidad que contribuyan al desarrollo económico de
                  nuestros clientes y las comunidades donde operamos, generando valor para todos nuestros grupos de
                  interés.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Visión</h3>
                <p className="text-muted-foreground">
                  Ser reconocidos como el banco líder en innovación y servicio al cliente en Argentina, con un fuerte
                  compromiso con el desarrollo regional y la inclusión financiera.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Valores</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Integridad y transparencia</li>
                  <li>• Innovación constante</li>
                  <li>• Compromiso con el cliente</li>
                  <li>• Trabajo en equipo</li>
                  <li>• Responsabilidad social</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Compromiso</h3>
                <p className="text-muted-foreground">
                  Nos comprometemos con el desarrollo sostenible de Argentina, promoviendo la inclusión financiera, el
                  cuidado del medio ambiente y el apoyo a las economías regionales.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Descubrí más sobre NOA BANK</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src="/institucional/nosotros.jpg"
                    alt="Sobre Nosotros"
                    fill
                    className="object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Sobre Nosotros</h3>
                  <p className="text-muted-foreground mb-4">
                    Conocé nuestra historia, misión, visión y valores que nos guían día a día.
                  </p>
                  <Link
                    href="/institucional/nosotros"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 hover:underline"
                  >
                    Conocer más <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src="/institucional/sustentabilidad.jpg"
                    alt="Sustentabilidad"
                    fill
                    className="object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Sustentabilidad</h3>
                  <p className="text-muted-foreground mb-4">
                    Descubrí nuestras iniciativas para contribuir al desarrollo sostenible.
                  </p>
                  <Link
                    href="/institucional/sustentabilidad"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 hover:underline"
                  >
                    Conocer más <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src="/institucional/carreras.jpg"
                    alt="Trabaja con Nosotros"
                    fill
                    className="object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Trabaja con Nosotros</h3>
                  <p className="text-muted-foreground mb-4">
                    Sumate a nuestro equipo y desarrollá tu carrera profesional en NOA BANK.
                  </p>
                  <Link
                    href="/institucional/carreras"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 hover:underline"
                  >
                    Ver oportunidades <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
