import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PageHeader from "@/components/page-header"
import { ProductRequestForm } from "@/components/product-request-form"

interface ProductDetailProps {
  title: string
  description: string
  category: string
  categoryPath: string
  features: string[]
  benefits: string[]
  requirements?: string[]
  faqs?: Array<{
    question: string
    answer: string
  }>
  image: string
  ctaText?: string
  ctaLink?: string
}

export default function ProductDetailLayout({
  title,
  description,
  category,
  categoryPath,
  features,
  benefits,
  requirements = [],
  faqs = [],
  image,
  ctaText = "Solicitar ahora",
  ctaLink = "/contacto",
}: ProductDetailProps) {
  return (
    <>
      <PageHeader
        title={title}
        description={description}
        breadcrumbs={[
          { label: category, href: categoryPath },
          { label: title, href: "#" },
        ]}
      />

      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Características principales</h2>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-blue-600 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold pt-4">Beneficios</h2>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-6">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                >
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
            </div>
          </div>

          <div className="mt-16">
            <Tabs defaultValue="requirements">
              <TabsList className="grid w-full grid-cols-2 md:w-auto">
                <TabsTrigger value="requirements">Requisitos</TabsTrigger>
                <TabsTrigger value="faqs">Preguntas frecuentes</TabsTrigger>
              </TabsList>
              <TabsContent value="requirements" className="mt-6">
                {requirements.length > 0 ? (
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Requisitos para solicitar</h3>
                      <ul className="space-y-3">
                        {requirements.map((requirement, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-blue-600 mt-0.5" />
                            <span>{requirement}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ) : (
                  <p>No hay requisitos específicos para este producto. Consultá con un asesor para más información.</p>
                )}
              </TabsContent>
              <TabsContent value="faqs" className="mt-6">
                {faqs.length > 0 ? (
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Preguntas frecuentes</h3>
                      <div className="space-y-6">
                        {faqs.map((faq, index) => (
                          <div key={index}>
                            <h4 className="text-lg font-semibold mb-2">{faq.question}</h4>
                            <p className="text-muted-foreground">{faq.answer}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ) : (
                  <p>No hay preguntas frecuentes disponibles para este producto.</p>
                )}
              </TabsContent>
            </Tabs>
          </div>

          <div className="mt-12 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Solicitar este Producto</h2>
            <ProductRequestForm productName={title} />
          </div>
        </div>
      </section>
    </>
  )
}
