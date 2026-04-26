import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import PageHeader from "@/components/page-header"

export const metadata = {
  title: "Noticias | NOA BANK",
  description: "Mantente al día con las últimas novedades y anuncios de NOA BANK.",
}

const news = [
  {
    id: "creditos-energia-renovable",
    title: "NOA BANK lanza línea de créditos para proyectos de energía renovable",
    date: "15 de Abril, 2023",
    excerpt: "Nueva línea de financiamiento para proyectos sustentables con condiciones preferenciales.",
    image: "/news/renewable-energy.jpg",
  },
  {
    id: "sucursal-digital",
    title: "Inauguramos nuestra primera sucursal 100% digital",
    date: "28 de Marzo, 2023",
    excerpt: "Un espacio innovador donde la tecnología y la atención personalizada se combinan.",
    image: "/news/digital-branch.jpg",
  },
  {
    id: "programa-emprendedores",
    title: "Lanzamos programa de apoyo a emprendedores del NOA",
    date: "10 de Marzo, 2023",
    excerpt: "Iniciativa para impulsar el desarrollo de nuevos negocios en la región.",
    image: "/news/entrepreneurs.jpg",
  },
  {
    id: "premio-innovacion",
    title: "NOA BANK recibe premio a la innovación financiera 2023",
    date: "22 de Febrero, 2023",
    excerpt: "Reconocimiento a nuestras soluciones digitales y compromiso con la experiencia del cliente.",
    image: "/news/premio-innovacion.jpg",
  },
  {
    id: "alianza-fintech",
    title: "Alianza estratégica con importantes fintechs argentinas",
    date: "15 de Febrero, 2023",
    excerpt: "Colaboración para desarrollar nuevas soluciones financieras digitales.",
    image: "/news/fintech-alliance.jpg",
  },
  {
    id: "educacion-financiera",
    title: "Lanzamos programa de educación financiera para jóvenes",
    date: "5 de Febrero, 2023",
    excerpt: "Iniciativa para promover la cultura financiera entre estudiantes secundarios.",
    image: "/news/educacion-financiera.jpg",
  },
  {
    id: "nuevos-cajeros",
    title: "Ampliamos nuestra red de cajeros automáticos en el NOA",
    date: "28 de Enero, 2023",
    excerpt: "Instalación de 50 nuevos cajeros en localidades del interior.",
    image: "/news/cajeros-automaticos.jpg",
  },
  {
    id: "resultados-financieros",
    title: "Presentamos resultados financieros del último trimestre",
    date: "15 de Enero, 2023",
    excerpt: "Crecimiento sostenido y ampliación de nuestra base de clientes.",
    image: "/news/resultados-financieros.jpg",
  },
  {
    id: "nueva-funcionalidad-app",
    title: "Nuevas funcionalidades en nuestra app móvil",
    date: "5 de Enero, 2023",
    excerpt: "Mejoras en la experiencia de usuario y nuevas opciones de gestión.",
    image: "/news/app-funcionalidad.jpg",
  },
]

export default function NoticiasPage() {
  return (
    <>
      <PageHeader
        title="Noticias"
        description="Mantente al día con las últimas novedades y anuncios de NOA BANK."
        breadcrumbs={[{ label: "Noticias", href: "/noticias" }]}
      />

      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform hover:scale-105 duration-500"
                  />
                  {/* <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                    {item.category}
                  </div> */}
                </div>
                <CardContent className="p-6">
                  <div className="text-sm text-muted-foreground mb-2">{item.date}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground mb-4">{item.excerpt}</p>
                  <Link
                    href={`/noticias/${item.id}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 hover:underline"
                  >
                    Leer más <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Button variant="outline" className="gap-2">
              Cargar más noticias
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
