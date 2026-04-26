import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

const segments = [
  {
    id: "personas",
    title: "Personas",
    description: "Soluciones financieras para tu vida diaria y proyectos personales.",
    image: "/segment-personas.jpg",
    color: "from-sky-500 to-blue-700",
    features: [
      "Cuentas de ahorro en pesos y dólares",
      "Préstamos personales y hipotecarios",
      "Tarjetas de crédito y débito",
      "Seguros para vos y tu familia",
      "Inversiones a plazo fijo",
    ],
  },
  {
    id: "pymes",
    title: "PyMEs y Comercios",
    description: "Impulsamos el crecimiento de tu negocio con soluciones a medida.",
    image: "/segment-pymes.jpg",
    color: "from-blue-500 to-indigo-700",
    features: [
      "Cuentas corrientes comerciales",
      "Financiamiento para capital de trabajo",
      "Medios de pago para tu negocio",
      "Pago a proveedores y empleados",
      "Gestión de cheques y cobranzas",
    ],
  },
  {
    id: "empresas",
    title: "Empresas e Industrias",
    description: "Servicios corporativos para optimizar la gestión financiera de tu empresa.",
    image: "/segment-empresas.jpg",
    color: "from-indigo-500 to-purple-700",
    features: [
      "Cash management",
      "Financiamiento estructurado",
      "Comercio exterior",
      "Inversiones corporativas",
      "Banca de inversión",
    ],
  },
  {
    id: "agro",
    title: "Agro",
    description: "Acompañamos al campo argentino con soluciones específicas para el sector.",
    image: "/segment-agro.jpg",
    color: "from-green-500 to-emerald-700",
    features: [
      "Financiamiento para siembra y cosecha",
      "Leasing de maquinaria agrícola",
      "Seguros agrícolas",
      "Tarjeta Agro",
      "Comercio exterior para exportadores",
    ],
  },
]

export default function SegmentSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-900">Segmentos</div>

          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Soluciones específicas para cada perfil
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            En NOA BANK entendemos las necesidades únicas de cada sector y ofrecemos productos financieros
            especializados.
          </p>
        </div>

        <div className="space-y-16">
          {segments.map((segment, index) => (
            <div
              key={segment.id}
              className={`flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-8 md:gap-12`}
            >
              <div className="relative flex-1 overflow-hidden rounded-xl">
                <Image
                  src={segment.image || "/placeholder.svg"}
                  alt={segment.title}
                  width={600}
                  height={400}
                  className="h-full w-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${segment.color} opacity-20`}></div>
              </div>
              <div className="flex-1 space-y-6">
                <h3 className={`text-3xl font-bold bg-gradient-to-r ${segment.color} bg-clip-text text-transparent`}>
                  {segment.title}
                </h3>
                <p className="text-lg text-muted-foreground">{segment.description}</p>
                <ul className="space-y-2">
                  {segment.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
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
                        className="h-5 w-5 text-blue-600 mt-0.5"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className={`bg-gradient-to-r ${segment.color} hover:opacity-90 transition-opacity`}>
                  <Link href={`/${segment.id}`} className="flex items-center gap-2">
                    Conocer más
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
