import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const productCategories = [
  {
    id: "cuentas",
    label: "Cuentas",
    products: [
      {
        title: "Cuenta Única",
        description: "Cuenta multimoneda con tarjeta de débito y acceso a todos los canales digitales.",
        icon: "/icons/cuenta.svg",
        link: "/productos/cuenta-unica",
      },
      {
        title: "Cuenta Corriente",
        description: "Ideal para empresas con acuerdo de sobregiro y chequera.",
        icon: "/icons/cuenta-corriente.svg",
        link: "/productos/cuenta-corriente",
      },
      {
        title: "Cuenta Sueldo",
        description: "Sin costo de mantenimiento y beneficios exclusivos para empleados.",
        icon: "/icons/cuenta-sueldo.svg",
        link: "/productos/cuenta-sueldo",
      },
      {
        title: "Cuenta Dólar",
        description: "Mantené tus ahorros en dólares con seguridad y disponibilidad inmediata.",
        icon: "/icons/cuenta-dolar.svg",
        link: "/productos/cuenta-dolar",
      },
    ],
  },
  {
    id: "prestamos",
    label: "Préstamos",
    products: [
      {
        title: "Préstamo Personal",
        description: "Financiamiento rápido para tus proyectos personales.",
        icon: "/icons/prestamo-personal.svg",
        link: "/productos/prestamo-personal",
      },
      {
        title: "Préstamo Hipotecario",
        description: "Hacé realidad el sueño de tu casa propia con nuestras opciones de financiamiento.",
        icon: "/icons/prestamo-hipotecario.svg",
        link: "/productos/prestamo-hipotecario",
      },
      {
        title: "Préstamo PyME",
        description: "Capital de trabajo e inversión para el crecimiento de tu negocio.",
        icon: "/icons/prestamo-pyme.svg",
        link: "/productos/prestamo-pyme",
      },
      {
        title: "Préstamo Agro",
        description: "Financiamiento especializado para el sector agropecuario.",
        icon: "/icons/prestamo-agro.svg",
        link: "/productos/prestamo-agro",
      },
    ],
  },
  {
    id: "tarjetas",
    label: "Tarjetas",
    products: [
      {
        title: "Tarjeta de Crédito",
        description: "Múltiples beneficios, cuotas sin interés y programa de puntos.",
        icon: "/icons/tarjeta-credito.svg",
        link: "/productos/tarjeta-credito",
      },
      {
        title: "Tarjeta de Débito",
        description: "Acceso a tu dinero en cualquier momento y lugar.",
        icon: "/icons/tarjeta-debito.svg",
        link: "/productos/tarjeta-debito",
      },
      {
        title: "Tarjeta Corporativa",
        description: "Control de gastos empresariales con reportes detallados.",
        icon: "/icons/tarjeta-corporativa.svg",
        link: "/productos/tarjeta-corporativa",
      },
      {
        title: "Tarjeta Agro",
        description: "Beneficios exclusivos para productores agropecuarios.",
        icon: "/icons/tarjeta-agro.svg",
        link: "/productos/tarjeta-agro",
      },
    ],
  },
  {
    id: "seguros",
    label: "Seguros",
    products: [
      {
        title: "Seguro de Vida",
        description: "Protección para vos y tu familia ante cualquier imprevisto.",
        icon: "/icons/seguro-vida.svg",
        link: "/productos/seguro-vida",
      },
      {
        title: "Seguro de Hogar",
        description: "Cobertura completa para tu casa y tus bienes.",
        icon: "/icons/seguro-hogar.svg",
        link: "/productos/seguro-hogar",
      },
      {
        title: "Seguro Agrícola",
        description: "Protección contra riesgos climáticos para tus cultivos.",
        icon: "/icons/seguro-agricola.svg",
        link: "/productos/seguro-agricola",
      },
      {
        title: "Seguro Empresarial",
        description: "Soluciones integrales para proteger tu negocio.",
        icon: "/icons/seguro-empresarial.svg",
        link: "/productos/seguro-empresarial",
      },
    ],
  },
]

export default function ProductsSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-sky-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-sky-100 px-3 py-1 text-sm text-sky-900">Productos</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Soluciones financieras completas
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Descubrí nuestra amplia gama de productos diseñados para satisfacer todas tus necesidades.
          </p>
        </div>

        <Tabs defaultValue="cuentas" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            {productCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="text-sm md:text-base">
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {productCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.products.map((product, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                        <Image
                          src={product.icon || "/placeholder.svg"}
                          alt={product.title}
                          width={24}
                          height={24}
                          className="h-6 w-6"
                        />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                      <p className="text-muted-foreground mb-4">{product.description}</p>
                      <Link
                        href={product.link}
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 hover:underline"
                      >
                        Más información <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
