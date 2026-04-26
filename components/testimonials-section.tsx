import Image from "next/image"

import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    quote:
      "NOA BANK ha sido fundamental para el crecimiento de mi empresa. Su asesoramiento financiero y soluciones digitales nos permitieron optimizar nuestras operaciones.",
    author: "María Fernández",
    role: "Dueña de PyME",
    company: "Textiles del Norte",
    avatar: "/avatars/maria.jpg",
    rating: 5,
  },
  {
    quote:
      "Como productor agropecuario, valoro enormemente el conocimiento especializado que tiene NOA BANK sobre nuestro sector. Sus líneas de crédito adaptadas a los ciclos productivos son exactamente lo que necesitamos.",
    author: "Carlos Mendoza",
    role: "Productor Agrícola",
    company: "Campos del Sol",
    avatar: "/avatars/carlos.jpg",
    rating: 5,
  },
  {
    quote:
      "La app de NOA BANK es increíblemente intuitiva. Puedo gestionar todas mis finanzas desde el celular sin complicaciones. El soporte al cliente siempre responde rápidamente.",
    author: "Luciana Torres",
    role: "Profesional Independiente",
    company: "",
    avatar: "/avatars/luciana.jpg",
    rating: 4,
  },
  {
    quote:
      "Gracias a NOA BANK pudimos expandir nuestras operaciones a nuevos mercados. Su departamento de comercio exterior nos brindó todo el apoyo necesario para nuestras primeras exportaciones.",
    author: "Roberto Gutiérrez",
    role: "Director Comercial",
    company: "Industrias Argentinas S.A.",
    avatar: "/avatars/roberto.jpg",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-sky-50 to-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-900">Testimonios</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Lo que dicen nuestros clientes
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Historias de éxito de quienes confían en NOA BANK para sus necesidades financieras.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill={i < testimonial.rating ? "currentColor" : "none"}
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-yellow-500"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  ))}
                </div>
                <blockquote className="flex-1 mb-6 italic text-muted-foreground">"{testimonial.quote}"</blockquote>
                <div className="flex items-center">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.author}
                    width={48}
                    height={48}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                      {testimonial.company ? `, ${testimonial.company}` : ""}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
