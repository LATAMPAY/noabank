import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import PageHeader from "@/components/page-header"

interface Product {
  title: string
  description: string
  icon: string
  link: string
}

interface SegmentLayoutProps {
  title: string
  description: string
  features: string[]
  products: Product[]
  image: string
  color: string
  ctaText?: string
  ctaLink?: string
}

export default function SegmentLayout({
  title,
  description,
  features,
  products,
  image,
  color,
  ctaText = "Conocer más",
  ctaLink = "/contacto",
}: SegmentLayoutProps) {
  return (
    <>
      <PageHeader
        title={title}
        description={description}
        breadcrumbs={[
          { label: "Segmentos", href: "/segmentos" },
          { label: title, href: "#" },
        ]}
        bgColor={`bg-gradient-to-r ${color}`}
      />

      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Soluciones diseñadas para vos</h2>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-blue-600 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-6">
                <Button asChild size="lg" className={`bg-gradient-to-r ${color} hover:opacity-90`}>
                  <Link href={ctaLink}>
                    {ctaText}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden">
              <Image
                src={image || "/placeholder.svg"}
                alt={title}
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-xl"
              />
              <div className={`absolute inset-0 bg-gradient-to-r ${color} opacity-20`}></div>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8">Productos y servicios destacados</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product, index) => (
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
          </div>
        </div>
      </section>
    </>
  )
}
