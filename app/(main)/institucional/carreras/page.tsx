import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Briefcase, GraduationCap, Heart, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PageHeader from "@/components/page-header"

export const metadata = {
  title: "Trabaja con Nosotros | NOA BANK",
  description: "Descubrí oportunidades laborales y desarrollá tu carrera profesional en NOA BANK.",
}

export default function CarrerasPage() {
  return (
    <>
      <PageHeader
        title="Trabaja con Nosotros"
        description="Descubrí oportunidades laborales y desarrollá tu carrera profesional en NOA BANK."
        breadcrumbs={[
          { label: "Institucional", href: "/institucional" },
          { label: "Trabaja con Nosotros", href: "/institucional/carreras" },
        ]}
      />

      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-center mb-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Crecé con Nosotros</h2>
              <p className="text-lg text-muted-foreground">
                En NOA BANK valoramos el talento y ofrecemos un ambiente de trabajo dinámico e innovador donde podés
                desarrollar todo tu potencial profesional.
              </p>
              <p className="text-lg text-muted-foreground">
                Buscamos personas comprometidas, con iniciativa y orientación al cliente, que quieran formar parte de
                una entidad financiera líder en innovación y servicio.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
              >
                <Link href="#vacantes">
                  Ver vacantes disponibles
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative rounded-xl overflow-hidden">
              <Image
                src="/institucional/carreras.jpg"
                alt="Equipo NOA BANK"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">¿Por qué trabajar en NOA BANK?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-gradient-to-br from-sky-50 to-white border-sky-100">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-sky-100">
                    <GraduationCap className="h-6 w-6 text-sky-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Desarrollo Profesional</h3>
                  <p className="text-muted-foreground">
                    Ofrecemos programas de capacitación continua y planes de carrera personalizados para potenciar tu
                    crecimiento.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-50 to-white border-blue-100">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                    <Briefcase className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Desafíos Constantes</h3>
                  <p className="text-muted-foreground">
                    Trabajarás en proyectos innovadores que te permitirán aplicar tus conocimientos y desarrollar nuevas
                    habilidades.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-indigo-50 to-white border-indigo-100">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100">
                    <Users className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Excelente Ambiente</h3>
                  <p className="text-muted-foreground">
                    Fomentamos un clima laboral colaborativo, inclusivo y respetuoso, donde cada persona es valorada.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-50 to-white border-purple-100">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                    <Heart className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Beneficios Exclusivos</h3>
                  <p className="text-muted-foreground">
                    Disfrutarás de beneficios competitivos, horario flexible, días adicionales de vacaciones y más.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div id="vacantes" className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Vacantes Disponibles</h2>
            <Tabs defaultValue="todas" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
                <TabsTrigger value="todas">Todas</TabsTrigger>
                <TabsTrigger value="tecnologia">Tecnología</TabsTrigger>
                <TabsTrigger value="comercial">Comercial</TabsTrigger>
                <TabsTrigger value="operaciones">Operaciones</TabsTrigger>
              </TabsList>

              <TabsContent value="todas" className="mt-0">
                <div className="space-y-4">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded mb-2">
                            Tecnología
                          </span>
                          <h3 className="text-xl font-bold mb-1">Desarrollador Full Stack</h3>
                          <p className="text-muted-foreground mb-2">Buenos Aires | Tiempo Completo</p>
                          <p className="text-sm">
                            Buscamos desarrolladores con experiencia en React, Node.js y bases de datos SQL/NoSQL para
                            sumarse a nuestro equipo de desarrollo de aplicaciones.
                          </p>
                        </div>
                        <Button asChild className="whitespace-nowrap">
                          <Link href="/institucional/carreras/desarrollador-full-stack">
                            Ver detalle
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <span className="inline-block px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded mb-2">
                            Comercial
                          </span>
                          <h3 className="text-xl font-bold mb-1">Ejecutivo de Cuentas PyMEs</h3>
                          <p className="text-muted-foreground mb-2">Córdoba | Tiempo Completo</p>
                          <p className="text-sm">
                            Responsable de gestionar y desarrollar una cartera de clientes PyMEs, identificando
                            oportunidades de negocio y brindando asesoramiento financiero.
                          </p>
                        </div>
                        <Button asChild className="whitespace-nowrap">
                          <Link href="/institucional/carreras/ejecutivo-pymes">
                            Ver detalle
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <span className="inline-block px-2 py-1 text-xs font-medium bg-purple-100 text-purple-800 rounded mb-2">
                            Operaciones
                          </span>
                          <h3 className="text-xl font-bold mb-1">Analista de Riesgos</h3>
                          <p className="text-muted-foreground mb-2">Tucumán | Tiempo Completo</p>
                          <p className="text-sm">
                            Encargado de evaluar y analizar solicitudes de crédito, identificando y mitigando riesgos
                            potenciales según las políticas del banco.
                          </p>
                        </div>
                        <Button asChild className="whitespace-nowrap">
                          <Link href="/institucional/carreras/analista-riesgos">
                            Ver detalle
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded mb-2">
                            Tecnología
                          </span>
                          <h3 className="text-xl font-bold mb-1">Especialista en Ciberseguridad</h3>
                          <p className="text-muted-foreground mb-2">Buenos Aires | Tiempo Completo</p>
                          <p className="text-sm">
                            Responsable de implementar y mantener las políticas de seguridad informática, identificando
                            vulnerabilidades y proponiendo soluciones.
                          </p>
                        </div>
                        <Button asChild className="whitespace-nowrap">
                          <Link href="/institucional/carreras/especialista-ciberseguridad">
                            Ver detalle
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="tecnologia" className="mt-0">
                <div className="space-y-4">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded mb-2">
                            Tecnología
                          </span>
                          <h3 className="text-xl font-bold mb-1">Desarrollador Full Stack</h3>
                          <p className="text-muted-foreground mb-2">Buenos Aires | Tiempo Completo</p>
                          <p className="text-sm">
                            Buscamos desarrolladores con experiencia en React, Node.js y bases de datos SQL/NoSQL para
                            sumarse a nuestro equipo de desarrollo de aplicaciones.
                          </p>
                        </div>
                        <Button asChild className="whitespace-nowrap">
                          <Link href="/institucional/carreras/desarrollador-full-stack">
                            Ver detalle
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded mb-2">
                            Tecnología
                          </span>
                          <h3 className="text-xl font-bold mb-1">Especialista en Ciberseguridad</h3>
                          <p className="text-muted-foreground mb-2">Buenos Aires | Tiempo Completo</p>
                          <p className="text-sm">
                            Responsable de implementar y mantener las políticas de seguridad informática, identificando
                            vulnerabilidades y proponiendo soluciones.
                          </p>
                        </div>
                        <Button asChild className="whitespace-nowrap">
                          <Link href="/institucional/carreras/especialista-ciberseguridad">
                            Ver detalle
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="comercial" className="mt-0">
                <div className="space-y-4">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <span className="inline-block px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded mb-2">
                            Comercial
                          </span>
                          <h3 className="text-xl font-bold mb-1">Ejecutivo de Cuentas PyMEs</h3>
                          <p className="text-muted-foreground mb-2">Córdoba | Tiempo Completo</p>
                          <p className="text-sm">
                            Responsable de gestionar y desarrollar una cartera de clientes PyMEs, identificando
                            oportunidades de negocio y brindando asesoramiento financiero.
                          </p>
                        </div>
                        <Button asChild className="whitespace-nowrap">
                          <Link href="/institucional/carreras/ejecutivo-pymes">
                            Ver detalle
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="operaciones" className="mt-0">
                <div className="space-y-4">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <span className="inline-block px-2 py-1 text-xs font-medium bg-purple-100 text-purple-800 rounded mb-2">
                            Operaciones
                          </span>
                          <h3 className="text-xl font-bold mb-1">Analista de Riesgos</h3>
                          <p className="text-muted-foreground mb-2">Tucumán | Tiempo Completo</p>
                          <p className="text-sm">
                            Encargado de evaluar y analizar solicitudes de crédito, identificando y mitigando riesgos
                            potenciales según las políticas del banco.
                          </p>
                        </div>
                        <Button asChild className="whitespace-nowrap">
                          <Link href="/institucional/carreras/analista-riesgos">
                            Ver detalle
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Proceso de Selección</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Postulación</h3>
                <p className="text-muted-foreground">
                  Aplicá a la vacante que más se ajuste a tu perfil a través de nuestro portal de empleo.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Preselección</h3>
                <p className="text-muted-foreground">
                  Nuestro equipo de RRHH evaluará tu perfil y te contactará si cumplís con los requisitos.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Entrevistas</h3>
                <p className="text-muted-foreground">
                  Participarás en entrevistas con RRHH y con el responsable del área donde te sumarías.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <span className="text-2xl font-bold text-blue-600">4</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Incorporación</h3>
                <p className="text-muted-foreground">
                  Si sos seleccionado, te daremos la bienvenida a NOA BANK con un programa de inducción.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">¿No encontraste la vacante ideal?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Envianos tu CV y te tendremos en cuenta para futuras búsquedas que se ajusten a tu perfil.
            </p>
            <Button asChild size="lg">
              <Link href="/institucional/carreras/postulacion-espontanea">
                Postulación espontánea
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
