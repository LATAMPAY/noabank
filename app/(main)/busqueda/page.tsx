"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Search, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PageHeader from "@/components/page-header"

// Datos de ejemplo para la búsqueda
const resultados = {
  productos: [
    {
      title: "Cuenta Única",
      description: "Cuenta multimoneda con tarjeta de débito y acceso a todos los canales digitales.",
      link: "/productos/cuenta-unica",
      category: "Cuentas",
    },
    {
      title: "Cuenta Corriente",
      description: "Ideal para empresas con acuerdo de sobregiro y chequera.",
      link: "/productos/cuenta-corriente",
      category: "Cuentas",
    },
    {
      title: "Préstamo Personal",
      description: "Financiamiento rápido para tus proyectos personales.",
      link: "/productos/prestamo-personal",
      category: "Préstamos",
    },
    {
      title: "Préstamo Hipotecario",
      description: "Hacé realidad el sueño de tu casa propia con nuestras opciones de financiamiento.",
      link: "/productos/prestamo-hipotecario",
      category: "Préstamos",
    },
    {
      title: "Tarjeta de Crédito",
      description: "Múltiples beneficios, cuotas sin interés y programa de puntos.",
      link: "/productos/tarjeta-credito",
      category: "Tarjetas",
    },
  ],
  segmentos: [
    {
      title: "Personas",
      description: "Soluciones financieras para tu vida diaria y proyectos personales.",
      link: "/personas",
    },
    {
      title: "PyMEs y Comercios",
      description: "Impulsamos el crecimiento de tu negocio con soluciones a medida.",
      link: "/pymes",
    },
    {
      title: "Empresas e Industrias",
      description: "Servicios corporativos para optimizar la gestión financiera de tu empresa.",
      link: "/empresas",
    },
    {
      title: "Agro",
      description: "Acompañamos al campo argentino con soluciones específicas para el sector.",
      link: "/agro",
    },
  ],
  noticias: [
    {
      title: "NOA BANK lanza nueva línea de créditos para energías renovables",
      description: "Financiamiento especial para proyectos sustentables con tasas preferenciales y plazos extendidos.",
      link: "/noticias/creditos-energia-renovable",
      date: "10 de Abril, 2025",
    },
    {
      title: "Inauguramos nueva sucursal digital en Córdoba",
      description: "Un espacio innovador que combina tecnología de punta con asesoramiento personalizado.",
      link: "/noticias/sucursal-digital-cordoba",
      date: "2 de Abril, 2025",
    },
    {
      title: "Programa de apoyo a emprendedores del NOA",
      description: "Iniciativa para impulsar el desarrollo de startups en la región noroeste del país.",
      link: "/noticias/programa-emprendedores-noa",
      date: "25 de Marzo, 2025",
    },
  ],
  sucursales: [
    {
      title: "Casa Central",
      description: "Av. San Martín 1234, San Miguel de Tucumán",
      link: "/institucional/sucursales",
    },
    {
      title: "Sucursal Córdoba Centro",
      description: "Av. Colón 567, Córdoba",
      link: "/institucional/sucursales",
    },
    {
      title: "Sucursal Buenos Aires",
      description: "Av. Corrientes 1234, CABA",
      link: "/institucional/sucursales",
    },
  ],
}

export default function BusquedaPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredResults, setFilteredResults] = useState(resultados)

  // Obtener el término de búsqueda de la URL al cargar la página
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const query = params.get("q")
    if (query) {
      setSearchTerm(query)
    }
  }, [])

  // Filtrar resultados cuando cambia el término de búsqueda
  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredResults(resultados)
      return
    }

    const term = searchTerm.toLowerCase()

    const filteredProductos = resultados.productos.filter(
      (item) => item.title.toLowerCase().includes(term) || item.description.toLowerCase().includes(term),
    )

    const filteredSegmentos = resultados.segmentos.filter(
      (item) => item.title.toLowerCase().includes(term) || item.description.toLowerCase().includes(term),
    )

    const filteredNoticias = resultados.noticias.filter(
      (item) => item.title.toLowerCase().includes(term) || item.description.toLowerCase().includes(term),
    )

    const filteredSucursales = resultados.sucursales.filter(
      (item) => item.title.toLowerCase().includes(term) || item.description.toLowerCase().includes(term),
    )

    setFilteredResults({
      productos: filteredProductos,
      segmentos: filteredSegmentos,
      noticias: filteredNoticias,
      sucursales: filteredSucursales,
    })
  }, [searchTerm])

  // Calcular el total de resultados
  const totalResults =
    filteredResults.productos.length +
    filteredResults.segmentos.length +
    filteredResults.noticias.length +
    filteredResults.sucursales.length

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Actualizar la URL con el término de búsqueda
    const url = new URL(window.location.href)
    url.searchParams.set("q", searchTerm)
    window.history.pushState({}, "", url.toString())
  }

  return (
    <>
      <PageHeader
        title="Resultados de búsqueda"
        description={searchTerm ? `Resultados para "${searchTerm}"` : "Buscá en NOA BANK"}
        breadcrumbs={[{ label: "Búsqueda", href: "/busqueda" }]}
      />

      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="mb-8">
            <form onSubmit={handleSearch} className="flex gap-2 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Buscar productos, servicios o información..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button type="submit">Buscar</Button>
            </form>
          </div>

          {searchTerm ? (
            <div className="mb-4 text-center">
              <p className="text-muted-foreground">
                Se encontraron {totalResults} resultados para "{searchTerm}"
              </p>
            </div>
          ) : null}

          <Tabs defaultValue="todos" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
              <TabsTrigger value="todos">Todos</TabsTrigger>
              <TabsTrigger value="productos">Productos</TabsTrigger>
              <TabsTrigger value="segmentos">Segmentos</TabsTrigger>
              <TabsTrigger value="noticias">Noticias</TabsTrigger>
              <TabsTrigger value="sucursales">Sucursales</TabsTrigger>
            </TabsList>

            <TabsContent value="todos" className="mt-0">
              {totalResults > 0 ? (
                <div className="space-y-8">
                  {filteredResults.productos.length > 0 && (
                    <div>
                      <h2 className="text-2xl font-bold mb-4">Productos</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {filteredResults.productos.slice(0, 3).map((item, index) => (
                          <Card key={index}>
                            <CardContent className="p-4">
                              <div className="text-xs text-muted-foreground mb-1">{item.category}</div>
                              <h3 className="font-bold mb-2">{item.title}</h3>
                              <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                              <Link
                                href={item.link}
                                className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700 hover:underline"
                              >
                                Más información <ArrowRight className="ml-1 h-3 w-3" />
                              </Link>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                      {filteredResults.productos.length > 3 && (
                        <div className="mt-4 text-center">
                          <Button asChild variant="outline">
                            <Link href="#productos">Ver todos los productos</Link>
                          </Button>
                        </div>
                      )}
                    </div>
                  )}

                  {filteredResults.segmentos.length > 0 && (
                    <div>
                      <h2 className="text-2xl font-bold mb-4">Segmentos</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {filteredResults.segmentos.map((item, index) => (
                          <Card key={index}>
                            <CardContent className="p-4">
                              <h3 className="font-bold mb-2">{item.title}</h3>
                              <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                              <Link
                                href={item.link}
                                className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700 hover:underline"
                              >
                                Conocer más <ArrowRight className="ml-1 h-3 w-3" />
                              </Link>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  )}

                  {filteredResults.noticias.length > 0 && (
                    <div>
                      <h2 className="text-2xl font-bold mb-4">Noticias</h2>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {filteredResults.noticias.map((item, index) => (
                          <Card key={index}>
                            <CardContent className="p-4">
                              <div className="text-xs text-muted-foreground mb-1">{item.date}</div>
                              <h3 className="font-bold mb-2">{item.title}</h3>
                              <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                              <Link
                                href={item.link}
                                className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700 hover:underline"
                              >
                                Leer más <ArrowRight className="ml-1 h-3 w-3" />
                              </Link>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  )}

                  {filteredResults.sucursales.length > 0 && (
                    <div>
                      <h2 className="text-2xl font-bold mb-4">Sucursales</h2>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {filteredResults.sucursales.map((item, index) => (
                          <Card key={index}>
                            <CardContent className="p-4">
                              <h3 className="font-bold mb-2">{item.title}</h3>
                              <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                              <Link
                                href={item.link}
                                className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700 hover:underline"
                              >
                                Ver en mapa <ArrowRight className="ml-1 h-3 w-3" />
                              </Link>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-12">
                  <h2 className="text-2xl font-bold mb-2">No se encontraron resultados</h2>
                  <p className="text-muted-foreground mb-6">
                    No hemos encontrado resultados para "{searchTerm}". Por favor, intentá con otros términos.
                  </p>
                  <div className="max-w-md mx-auto">
                    <h3 className="font-semibold mb-2">Sugerencias:</h3>
                    <ul className="text-left text-muted-foreground space-y-1">
                      <li>• Revisá la ortografía de las palabras</li>
                      <li>• Utilizá términos más generales</li>
                      <li>• Probá con sinónimos</li>
                      <li>• Utilizá menos palabras</li>
                    </ul>
                  </div>
                </div>
              )}
            </TabsContent>

            <TabsContent value="productos" className="mt-0" id="productos">
              {filteredResults.productos.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredResults.productos.map((item, index) => (
                    <Card key={index}>
                      <CardContent className="p-4">
                        <div className="text-xs text-muted-foreground mb-1">{item.category}</div>
                        <h3 className="font-bold mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                        <Link
                          href={item.link}
                          className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700 hover:underline"
                        >
                          Más información <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">No se encontraron productos para "{searchTerm}".</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="segmentos" className="mt-0">
              {filteredResults.segmentos.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {filteredResults.segmentos.map((item, index) => (
                    <Card key={index}>
                      <CardContent className="p-4">
                        <h3 className="font-bold mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                        <Link
                          href={item.link}
                          className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700 hover:underline"
                        >
                          Conocer más <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">No se encontraron segmentos para "{searchTerm}".</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="noticias" className="mt-0">
              {filteredResults.noticias.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {filteredResults.noticias.map((item, index) => (
                    <Card key={index}>
                      <CardContent className="p-4">
                        <div className="text-xs text-muted-foreground mb-1">{item.date}</div>
                        <h3 className="font-bold mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                        <Link
                          href={item.link}
                          className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700 hover:underline"
                        >
                          Leer más <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">No se encontraron noticias para "{searchTerm}".</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="sucursales" className="mt-0">
              {filteredResults.sucursales.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {filteredResults.sucursales.map((item, index) => (
                    <Card key={index}>
                      <CardContent className="p-4">
                        <h3 className="font-bold mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                        <Link
                          href={item.link}
                          className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700 hover:underline"
                        >
                          Ver en mapa <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">No se encontraron sucursales para "{searchTerm}".</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  )
}
