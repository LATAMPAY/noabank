import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import PageHeader from "@/components/page-header"

interface Product {
  title: string
  description: string
  icon: string
  link: string
}

interface ProductCategoryLayoutProps {
  title: string
  description: string
  products: Product[]
  categoryPath: string
}

export default function ProductCategoryLayout({
  title,
  description,
  products,
  categoryPath,
}: ProductCategoryLayoutProps) {
  return (
    <>
      <PageHeader
        title={title}
        description={description}
        breadcrumbs={[
          { label: "Productos", href: "/productos" },
          { label: title, href: categoryPath },
        ]}
      />

      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
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
      </section>
    </>
  )
}
