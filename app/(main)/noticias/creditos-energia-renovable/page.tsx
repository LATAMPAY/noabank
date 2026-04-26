import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, User, Tag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import PageHeader from "@/components/page-header"

export const metadata = {
  title: "NOA BANK lanza nueva línea de créditos para energías renovables | NOA BANK",
  description: "Financiamiento especial para proyectos sustentables con tasas preferenciales y plazos extendidos.",
}

const relatedNews = [
  {
    title: "Programa de apoyo a emprendedores del NOA",
    excerpt: "Iniciativa para impulsar el desarrollo de startups en la región noroeste del país.",
    date: "25 de Marzo, 2025",
    image: "/news/entrepreneurs.jpg",
    category: "Comunidad",
    link: "/noticias/programa-emprendedores-noa",
  },
  {
    title: "NOA BANK recibe premio a la innovación financiera",
    excerpt: "Reconocimiento por el desarrollo de soluciones digitales que mejoran la experiencia del cliente.",
    date: "15 de Marzo, 2025",
    image: "/news/premio-innovacion.jpg",
    category: "Reconocimientos",
    link: "/noticias/premio-innovacion",
  },
  {
    title: "Alianza estratégica con fintech para potenciar servicios digitales",
    excerpt: "Colaboración que permitirá ampliar la oferta de servicios financieros digitales para nuestros clientes.",
    date: "5 de Marzo, 2025",
    image: "/news/fintech-alliance.jpg",
    category: "Innovación",
    link: "/noticias/alianza-fintech",
  },
]

export default function NoticiaDetalleEnergiasRenovables() {
  return (
    <>
      <PageHeader
        title="NOA BANK lanza nueva línea de créditos para energías renovables"
        breadcrumbs={[
          { label: "Noticias", href: "/noticias" },
          { label: "Créditos para energías renovables", href: "/noticias/creditos-energia-renovable" },
        ]}
      />

      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>10 de Abril, 2025</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>Por: Equipo de Prensa NOA BANK</span>
                </div>
                <div className="flex items-center gap-1">
                  <Tag className="h-4 w-4" />
                  <span>Sustentabilidad</span>
                </div>
              </div>

              <div className="relative h-80 w-full overflow-hidden rounded-xl mb-8">
                <Image src="/news/renewable-energy.jpg" alt="Energías renovables" fill className="object-cover" />
              </div>

              <div className="prose max-w-none">
                <p className="lead">
                  NOA BANK reafirma su compromiso con el desarrollo sostenible lanzando una nueva línea de créditos
                  destinada a financiar proyectos de energías renovables, con condiciones preferenciales y plazos
                  extendidos.
                </p>

                <p>
                  La nueva línea de financiamiento está dirigida tanto a personas como a empresas que deseen invertir en
                  la instalación de sistemas de energía solar, eólica, biomasa o pequeñas centrales hidroeléctricas,
                  contribuyendo así a la transición energética y la reducción de la huella de carbono.
                </p>

                <h2>Características principales del financiamiento</h2>

                <p>
                  Los créditos para energías renovables de NOA BANK ofrecen condiciones especialmente diseñadas para
                  hacer accesible la inversión en tecnologías limpias:
                </p>

                <ul>
                  <li>Tasas de interés preferenciales, hasta 5 puntos por debajo de las líneas tradicionales</li>
                  <li>Plazos extendidos de hasta 10 años para proyectos de gran escala</li>
                  <li>Período de gracia de hasta 12 meses</li>
                  <li>Financiamiento de hasta el 80% del proyecto</li>
                  <li>Asesoramiento técnico especializado sin costo adicional</li>
                </ul>

                <p>
                  "Esta iniciativa forma parte de nuestra estrategia de sustentabilidad y refleja nuestro compromiso con
                  el futuro del planeta y el desarrollo de las economías regionales", explicó María Rodríguez, Gerente
                  de Banca Sustentable de NOA BANK. "Queremos ser un actor clave en la transición hacia una economía
                  baja en carbono, facilitando el acceso a tecnologías limpias tanto para familias como para empresas".
                </p>

                <h2>Impacto esperado</h2>

                <p>
                  Se estima que esta línea de crédito permitirá financiar proyectos que, en conjunto, generarán
                  aproximadamente 50 MW de energía limpia en los próximos tres años, lo que equivale al consumo de unos
                  40.000 hogares. Además, contribuirá a la creación de empleos verdes y al desarrollo de proveedores
                  locales de tecnologías renovables.
                </p>

                <p>
                  Los interesados en acceder a esta línea de financiamiento pueden solicitar más información en
                  cualquier sucursal de NOA BANK o a través de los canales digitales del banco.
                </p>

                <h2>Compromiso con la sustentabilidad</h2>

                <p>
                  Esta iniciativa se suma a otras acciones que NOA BANK viene implementando en el marco de su estrategia
                  de sustentabilidad, como la reducción de su huella de carbono operativa, la digitalización de procesos
                  para disminuir el consumo de papel y el apoyo a proyectos de conservación ambiental en diferentes
                  regiones del país.
                </p>

                <p>
                  "Creemos firmemente que las entidades financieras tenemos un rol fundamental en la canalización de
                  recursos hacia proyectos que generen un impacto positivo en el medio ambiente y la sociedad", concluyó
                  Rodríguez.
                </p>
              </div>

              <div className="mt-8 flex justify-between">
                <Button asChild variant="outline">
                  <Link href="/noticias">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Volver a noticias
                  </Link>
                </Button>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Noticias relacionadas</h3>
              <div className="space-y-6">
                {relatedNews.map((item, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
                    <div className="relative h-40 w-full overflow-hidden">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform hover:scale-105 duration-500"
                      />
                      <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                        {item.category}
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <div className="text-xs text-muted-foreground mb-1">{item.date}</div>
                      <h4 className="font-bold mb-2">{item.title}</h4>
                      <Link
                        href={item.link}
                        className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700 hover:underline"
                      >
                        Leer más <ArrowLeft className="ml-1 h-3 w-3 rotate-180" />
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
