import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

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
]

export default function NewsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-900">Novedades</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Últimas noticias</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Mantente al día con las últimas novedades y anuncios de NOA BANK.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
          <Button asChild variant="outline" className="gap-2">
            <Link href="/noticias">
              Ver todas las noticias
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
