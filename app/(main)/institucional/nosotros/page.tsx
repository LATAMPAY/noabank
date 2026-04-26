import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import PageHeader from "@/components/page-header"

export const metadata = {
  title: "Sobre Nosotros | NOA BANK",
  description: "Conocé más sobre NOA BANK, nuestra historia, valores y compromiso con Argentina.",
}

export default function NosotrosPage() {
  return (
    <>
      <PageHeader
        title="Sobre Nosotros"
        description="Conocé más sobre NOA BANK, nuestra historia, valores y compromiso con Argentina."
        breadcrumbs={[
          { label: "Institucional", href: "/institucional" },
          { label: "Sobre Nosotros", href: "/institucional/nosotros" },
        ]}
      />

      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-center mb-16">
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
              <p className="text-lg text-muted-foreground">
                Hoy, NOA BANK cuenta con más de 100 sucursales distribuidas en todo el país y un equipo de más de 3,000
                colaboradores comprometidos con nuestra misión de brindar soluciones financieras que contribuyan al
                desarrollo económico de nuestros clientes y las comunidades donde operamos.
              </p>
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

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Nuestra Misión, Visión y Valores</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-sky-50 to-white p-8 rounded-xl shadow-sm border border-sky-100">
                <h3 className="text-xl font-bold mb-4 text-sky-800">Misión</h3>
                <p className="text-muted-foreground">
                  Brindar soluciones financieras innovadoras y de calidad que contribuyan al desarrollo económico de
                  nuestros clientes y las comunidades donde operamos, generando valor para todos nuestros grupos de
                  interés.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-sm border border-blue-100">
                <h3 className="text-xl font-bold mb-4 text-blue-800">Visión</h3>
                <p className="text-muted-foreground">
                  Ser reconocidos como el banco líder en innovación y servicio al cliente en Argentina, con un fuerte
                  compromiso con el desarrollo regional y la inclusión financiera.
                </p>
              </div>
              <div className="bg-gradient-to-br from-indigo-50 to-white p-8 rounded-xl shadow-sm border border-indigo-100">
                <h3 className="text-xl font-bold mb-4 text-indigo-800">Valores</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600 font-bold">•</span> Integridad y transparencia
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600 font-bold">•</span> Innovación constante
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600 font-bold">•</span> Compromiso con el cliente
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600 font-bold">•</span> Trabajo en equipo
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600 font-bold">•</span> Responsabilidad social
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Nuestro Equipo Directivo</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image src="/institucional/director1.jpg" alt="Carlos Rodríguez" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold">Carlos Rodríguez</h3>
                <p className="text-blue-600">Presidente</p>
              </div>
              <div className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image src="/institucional/director2.jpg" alt="Laura Fernández" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold">Laura Fernández</h3>
                <p className="text-blue-600">CEO</p>
              </div>
              <div className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image src="/institucional/director3.jpg" alt="Martín López" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold">Martín López</h3>
                <p className="text-blue-600">CFO</p>
              </div>
              <div className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image src="/institucional/director4.jpg" alt="Sofía Martínez" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold">Sofía Martínez</h3>
                <p className="text-blue-600">CTO</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Trabajá con Nosotros</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              En NOA BANK valoramos el talento y ofrecemos oportunidades de desarrollo profesional en un ambiente
              dinámico e innovador.
            </p>
            <Button asChild size="lg">
              <Link href="/institucional/carreras">
                Ver oportunidades laborales
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
