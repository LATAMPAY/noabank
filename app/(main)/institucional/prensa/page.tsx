import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Download, FileText, Calendar } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PageHeader from "@/components/page-header"

export const metadata = {
  title: "Sala de Prensa | NOA BANK",
  description: "Noticias, comunicados y material para prensa de NOA BANK.",
}

export default function PrensaPage() {
  return (
    <>
      <PageHeader
        title="Sala de Prensa"
        description="Noticias, comunicados y material para prensa de NOA BANK."
        breadcrumbs={[
          { label: "Institucional", href: "/institucional" },
          { label: "Sala de Prensa", href: "/institucional/prensa" },
        ]}
      />

      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="noticias" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8">
              <TabsTrigger value="noticias">Noticias</TabsTrigger>
              <TabsTrigger value="comunicados">Comunicados de Prensa</TabsTrigger>
              <TabsTrigger value="material">Material para Prensa</TabsTrigger>
            </TabsList>

            <TabsContent value="noticias" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src="/news/renewable-energy.jpg"
                      alt="Energías renovables"
                      fill
                      className="object-cover transition-transform hover:scale-105 duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                      Sustentabilidad
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4" />
                      <span>10 de Abril, 2025</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">
                      NOA BANK lanza nueva línea de créditos para energías renovables
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Financiamiento especial para proyectos sustentables con tasas preferenciales y plazos extendidos.
                    </p>
                    <Link
                      href="/noticias/creditos-energia-renovable"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 hover:underline"
                    >
                      Leer más <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src="/news/digital-branch.jpg"
                      alt="Sucursal digital"
                      fill
                      className="object-cover transition-transform hover:scale-105 duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                      Expansión
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4" />
                      <span>2 de Abril, 2025</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Inauguramos nueva sucursal digital en Córdoba</h3>
                    <p className="text-muted-foreground mb-4">
                      Un espacio innovador que combina tecnología de punta con asesoramiento personalizado.
                    </p>
                    <Link
                      href="/noticias/sucursal-digital-cordoba"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 hover:underline"
                    >
                      Leer más <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src="/news/entrepreneurs.jpg"
                      alt="Emprendedores"
                      fill
                      className="object-cover transition-transform hover:scale-105 duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                      Comunidad
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4" />
                      <span>25 de Marzo, 2025</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Programa de apoyo a emprendedores del NOA</h3>
                    <p className="text-muted-foreground mb-4">
                      Iniciativa para impulsar el desarrollo de startups en la región noroeste del país.
                    </p>
                    <Link
                      href="/noticias/programa-emprendedores-noa"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 hover:underline"
                    >
                      Leer más <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              </div>
              <div className="mt-8 flex justify-center">
                <Button asChild variant="outline">
                  <Link href="/noticias">
                    Ver todas las noticias
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="comunicados" className="mt-0">
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4" />
                      <span>15 de Abril, 2025</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">
                      NOA BANK anuncia resultados financieros del primer trimestre de 2025
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      La entidad reportó un crecimiento del 15% en su cartera de créditos y un aumento del 20% en
                      depósitos respecto al mismo período del año anterior.
                    </p>
                    <div className="flex items-center gap-4">
                      <Button asChild variant="outline" size="sm">
                        <Link href="/institucional/comunicados/resultados-q1-2025">
                          Leer comunicado
                          <FileText className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <Button asChild size="sm">
                        <Link href="/institucional/comunicados/resultados-q1-2025.pdf">
                          Descargar PDF
                          <Download className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4" />
                      <span>5 de Abril, 2025</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">
                      NOA BANK firma acuerdo con fintech para potenciar servicios digitales
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      La alianza estratégica permitirá ampliar la oferta de servicios financieros digitales para
                      nuestros clientes.
                    </p>
                    <div className="flex items-center gap-4">
                      <Button asChild variant="outline" size="sm">
                        <Link href="/institucional/comunicados/alianza-fintech">
                          Leer comunicado
                          <FileText className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <Button asChild size="sm">
                        <Link href="/institucional/comunicados/alianza-fintech.pdf">
                          Descargar PDF
                          <Download className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4" />
                      <span>20 de Marzo, 2025</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">NOA BANK recibe premio a la innovación financiera</h3>
                    <p className="text-muted-foreground mb-4">
                      Reconocimiento por el desarrollo de soluciones digitales que mejoran la experiencia del cliente.
                    </p>
                    <div className="flex items-center gap-4">
                      <Button asChild variant="outline" size="sm">
                        <Link href="/institucional/comunicados/premio-innovacion">
                          Leer comunicado
                          <FileText className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <Button asChild size="sm">
                        <Link href="/institucional/comunicados/premio-innovacion.pdf">
                          Descargar PDF
                          <Download className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="mt-8 flex justify-center">
                <Button asChild variant="outline">
                  <Link href="/institucional/comunicados">
                    Ver todos los comunicados
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="material" className="mt-0">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Logos e Identidad Visual</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Card className="overflow-hidden">
                      <div className="bg-white p-6 flex items-center justify-center h-40 border-b">
                        <Image src="/logo.png" alt="Logo NOA BANK" width={150} height={50} className="h-auto" />
                      </div>
                      <CardContent className="p-4">
                        <h4 className="font-semibold mb-2">Logo Principal</h4>
                        <Button asChild size="sm" className="w-full">
                          <Link href="/institucional/prensa/logo-principal.zip">
                            Descargar
                            <Download className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>

                    <Card className="overflow-hidden">
                      <div className="bg-blue-900 p-6 flex items-center justify-center h-40 border-b">
                        <Image
                          src="/logo-white.png"
                          alt="Logo NOA BANK Blanco"
                          width={150}
                          height={50}
                          className="h-auto"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h4 className="font-semibold mb-2">Logo Invertido</h4>
                        <Button asChild size="sm" className="w-full">
                          <Link href="/institucional/prensa/logo-invertido.zip">
                            Descargar
                            <Download className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>

                    <Card className="overflow-hidden">
                      <div className="bg-white p-6 flex items-center justify-center h-40 border-b">
                        <div className="w-12 h-12 bg-blue-600 rounded-lg"></div>
                      </div>
                      <CardContent className="p-4">
                        <h4 className="font-semibold mb-2">Isotipo</h4>
                        <Button asChild size="sm" className="w-full">
                          <Link href="/institucional/prensa/isotipo.zip">
                            Descargar
                            <Download className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>

                    <Card className="overflow-hidden">
                      <div className="bg-gradient-to-r from-blue-100 to-white p-6 flex items-center justify-center h-40 border-b">
                        <div className="space-y-2">
                          <div className="h-4 w-32 bg-blue-600 rounded"></div>
                          <div className="h-4 w-24 bg-blue-400 rounded"></div>
                          <div className="h-4 w-28 bg-sky-400 rounded"></div>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <h4 className="font-semibold mb-2">Guía de Marca</h4>
                        <Button asChild size="sm" className="w-full">
                          <Link href="/institucional/prensa/guia-marca.pdf">
                            Descargar
                            <Download className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Imágenes Institucionales</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Card className="overflow-hidden">
                      <div className="relative h-48 w-full overflow-hidden">
                        <Image src="/institucional/sede-central.jpg" alt="Sede Central" fill className="object-cover" />
                      </div>
                      <CardContent className="p-4">
                        <h4 className="font-semibold mb-2">Sede Central</h4>
                        <Button asChild size="sm" className="w-full">
                          <Link href="/institucional/prensa/sede-central.zip">
                            Descargar
                            <Download className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>

                    <Card className="overflow-hidden">
                      <div className="relative h-48 w-full overflow-hidden">
                        <Image src="/institucional/sucursales.jpg" alt="Sucursales" fill className="object-cover" />
                      </div>
                      <CardContent className="p-4">
                        <h4 className="font-semibold mb-2">Sucursales</h4>
                        <Button asChild size="sm" className="w-full">
                          <Link href="/institucional/prensa/sucursales.zip">
                            Descargar
                            <Download className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>

                    <Card className="overflow-hidden">
                      <div className="relative h-48 w-full overflow-hidden">
                        <Image src="/institucional/directivos.jpg" alt="Directivos" fill className="object-cover" />
                      </div>
                      <CardContent className="p-4">
                        <h4 className="font-semibold mb-2">Directivos</h4>
                        <Button asChild size="sm" className="w-full">
                          <Link href="/institucional/prensa/directivos.zip">
                            Descargar
                            <Download className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Documentos</h3>
                  <div className="space-y-4">
                    <Card>
                      <CardContent className="p-4 flex justify-between items-center">
                        <div>
                          <h4 className="font-semibold">Memoria Anual 2024</h4>
                          <p className="text-sm text-muted-foreground">PDF - 8.5 MB</p>
                        </div>
                        <Button asChild size="sm">
                          <Link href="/institucional/prensa/memoria-2024.pdf">
                            Descargar
                            <Download className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-4 flex justify-between items-center">
                        <div>
                          <h4 className="font-semibold">Reporte de Sustentabilidad 2024</h4>
                          <p className="text-sm text-muted-foreground">PDF - 6.2 MB</p>
                        </div>
                        <Button asChild size="sm">
                          <Link href="/institucional/prensa/sustentabilidad-2024.pdf">
                            Descargar
                            <Download className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-4 flex justify-between items-center">
                        <div>
                          <h4 className="font-semibold">Presentación Institucional</h4>
                          <p className="text-sm text-muted-foreground">PPTX - 4.8 MB</p>
                        </div>
                        <Button asChild size="sm">
                          <Link href="/institucional/prensa/presentacion.pptx">
                            Descargar
                            <Download className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Contacto para Prensa</h2>
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Departamento de Comunicación</h3>
                    <p className="text-muted-foreground mb-2">
                      Para consultas de prensa, entrevistas o información adicional, contactá a nuestro equipo de
                      comunicación.
                    </p>
                    <div className="space-y-2 mt-4">
                      <p className="flex items-center gap-2">
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
                          className="h-5 w-5 text-blue-600"
                        >
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                        <span>+54 11 4567-8900</span>
                      </p>
                      <p className="flex items-center gap-2">
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
                          className="h-5 w-5 text-blue-600"
                        >
                          <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                        </svg>
                        <span>prensa@noabank.com.ar</span>
                      </p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Voceros Autorizados</h3>
                    <ul className="space-y-4">
                      <li className="flex items-center gap-4">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden">
                          <Image src="/institucional/vocero1.jpg" alt="Laura Fernández" fill className="object-cover" />
                        </div>
                        <div>
                          <h4 className="font-semibold">Laura Fernández</h4>
                          <p className="text-sm text-muted-foreground">CEO</p>
                        </div>
                      </li>
                      <li className="flex items-center gap-4">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden">
                          <Image src="/institucional/vocero2.jpg" alt="Javier Méndez" fill className="object-cover" />
                        </div>
                        <div>
                          <h4 className="font-semibold">Javier Méndez</h4>
                          <p className="text-sm text-muted-foreground">Director de Comunicación</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}
