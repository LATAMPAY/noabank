"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import PageHeader from "@/components/page-header"
import { BranchFinder } from "@/components/branch-finder"

// Datos de ejemplo para las sucursales
const sucursales = [
  {
    id: 1,
    nombre: "Casa Central",
    direccion: "Av. San Martín 1234, San Miguel de Tucumán",
    provincia: "Tucumán",
    telefono: "+54 381 4567-8900",
    horario: "Lunes a Viernes de 10:00 a 15:00",
    imagen: "/sucursales/casa-central.jpg",
    coordenadas: { lat: -26.8241, lng: -65.2226 },
    servicios: ["Atención al Cliente", "Caja", "Préstamos", "Inversiones", "Seguros", "Cajeros Automáticos"],
  },
  {
    id: 2,
    nombre: "Sucursal Córdoba Centro",
    direccion: "Av. Colón 567, Córdoba",
    provincia: "Córdoba",
    telefono: "+54 351 4567-8901",
    horario: "Lunes a Viernes de 10:00 a 15:00",
    imagen: "/sucursales/cordoba-centro.jpg",
    coordenadas: { lat: -31.4135, lng: -64.1811 },
    servicios: ["Atención al Cliente", "Caja", "Préstamos", "Inversiones", "Cajeros Automáticos"],
  },
  {
    id: 3,
    nombre: "Sucursal Buenos Aires",
    direccion: "Av. Corrientes 1234, CABA",
    provincia: "Buenos Aires",
    telefono: "+54 11 4567-8902",
    horario: "Lunes a Viernes de 10:00 a 15:00",
    imagen: "/sucursales/buenos-aires.jpg",
    coordenadas: { lat: -34.6037, lng: -58.3816 },
    servicios: [
      "Atención al Cliente",
      "Caja",
      "Préstamos",
      "Inversiones",
      "Seguros",
      "Cajeros Automáticos",
      "Banca Empresas",
    ],
  },
  {
    id: 4,
    nombre: "Sucursal Salta",
    direccion: "Av. Belgrano 789, Salta",
    provincia: "Salta",
    telefono: "+54 387 4567-8903",
    horario: "Lunes a Viernes de 10:00 a 15:00",
    imagen: "/sucursales/salta.jpg",
    coordenadas: { lat: -24.7859, lng: -65.4117 },
    servicios: ["Atención al Cliente", "Caja", "Préstamos", "Cajeros Automáticos"],
  },
  {
    id: 5,
    nombre: "Sucursal Mendoza",
    direccion: "Av. San Martín 456, Mendoza",
    provincia: "Mendoza",
    telefono: "+54 261 4567-8904",
    horario: "Lunes a Viernes de 10:00 a 15:00",
    imagen: "/sucursales/mendoza.jpg",
    coordenadas: { lat: -32.8908, lng: -68.8272 },
    servicios: ["Atención al Cliente", "Caja", "Préstamos", "Inversiones", "Seguros", "Cajeros Automáticos"],
  },
  {
    id: 6,
    nombre: "Sucursal Rosario",
    direccion: "Av. Córdoba 890, Rosario",
    provincia: "Santa Fe",
    telefono: "+54 341 4567-8905",
    horario: "Lunes a Viernes de 10:00 a 15:00",
    imagen: "/sucursales/rosario.jpg",
    coordenadas: { lat: -32.9468, lng: -60.6393 },
    servicios: ["Atención al Cliente", "Caja", "Préstamos", "Inversiones", "Cajeros Automáticos"],
  },
]

// Provincias disponibles
const provincias = ["Todas", "Buenos Aires", "Córdoba", "Mendoza", "Salta", "Santa Fe", "Tucumán"]

const SucursalesPage = () => {
  const [filtroNombre, setFiltroNombre] = useState("")
  const [filtroProvincia, setFiltroProvincia] = useState("Todas")
  const [sucursalSeleccionada, setSucursalSeleccionada] = useState<number | null>(null)

  // Filtrar sucursales según los criterios
  const sucursalesFiltradas = sucursales.filter((sucursal) => {
    const coincideNombre = sucursal.nombre.toLowerCase().includes(filtroNombre.toLowerCase())
    const coincideProvincia = filtroProvincia === "Todas" || sucursal.provincia === filtroProvincia
    return coincideNombre && coincideProvincia
  })

  return (
    <>
      <PageHeader
        title="Sucursales"
        description="Encontrá la sucursal más cercana y conocé nuestros horarios de atención."
        breadcrumbs={[
          { label: "Institucional", href: "/institucional" },
          { label: "Sucursales", href: "/institucional/sucursales" },
        ]}
      />

      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Buscador de Sucursales</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/*<div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Buscar por nombre de sucursal"
                  className="pl-10"
                  value={filtroNombre}
                  onChange={(e) => setFiltroNombre(e.target.value)}
                />
              </div>
              <Select value={filtroProvincia} onValueChange={setFiltroProvincia}>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar provincia" />
                </SelectTrigger>
                <SelectContent>
                  {provincias.map((provincia) => (
                    <SelectItem key={provincia} value={provincia}>
                      {provincia}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button
                onClick={() => {
                  setFiltroNombre("")
                  setFiltroProvincia("Todas")
                }}
                variant="outline"
              >
                Limpiar filtros
              </Button>*/}
              <BranchFinder />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/*<div className="lg:col-span-1 space-y-4">
              <h3 className="text-xl font-bold">Resultados ({sucursalesFiltradas.length})</h3>
              <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                {sucursalesFiltradas.length > 0 ? (
                  sucursalesFiltradas.map((sucursal) => (
                    <Card
                      key={sucursal.id}
                      className={`hover:shadow-md transition-shadow cursor-pointer ${
                        sucursalSeleccionada === sucursal.id ? "border-blue-500 shadow-md" : ""
                      }`}
                      onClick={() => setSucursalSeleccionada(sucursal.id)}
                    >
                      <CardContent className="p-4">
                        <h4 className="font-bold">{sucursal.nombre}</h4>
                        <p className="text-sm text-muted-foreground flex items-start gap-2 mt-2">
                          <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                          <span>{sucursal.direccion}</span>
                        </p>
                        <p className="text-sm text-muted-foreground flex items-start gap-2 mt-1">
                          <Clock className="h-4 w-4 mt-0.5 flex-shrink-0" />
                          <span>{sucursal.horario}</span>
                        </p>
                        <p className="text-sm text-muted-foreground flex items-start gap-2 mt-1">
                          <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                          <span>{sucursal.telefono}</span>
                        </p>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">No se encontraron sucursales con los criterios seleccionados.</p>
                  </div>
                )}
              </div>
            </div>

            <div className="lg:col-span-2">
              {sucursalSeleccionada ? (
                <div>
                  <div className="relative h-[300px] w-full rounded-xl overflow-hidden mb-6">
                    <Image
                      src={sucursales.find((s) => s.id === sucursalSeleccionada)?.imagen || "/placeholder.svg"}
                      alt="Mapa de la sucursal"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold">
                        {sucursales.find((s) => s.id === sucursalSeleccionada)?.nombre}
                      </h3>
                      <p className="text-sm">
                        {sucursales.find((s) => s.id === sucursalSeleccionada)?.direccion}
                      </p>
                    </div>
                  </div>

                  <Tabs defaultValue="info">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="info">Información</TabsTrigger>
                      <TabsTrigger value="servicios">Servicios</TabsTrigger>
                    </TabsList>
                    <TabsContent value="info" className="mt-4">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold">Dirección</h4>
                          <p className="text-muted-foreground">
                            {sucursales.find((s) => s.id === sucursalSeleccionada)?.direccion}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold">Horario de atención</h4>
                          <p className="text-muted-foreground">
                            {sucursales.find((s) => s.id === sucursalSeleccionada)?.horario}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold">Teléfono</h4>
                          <p className="text-muted-foreground">
                            {sucursales.find((s) => s.id === sucursalSeleccionada)?.telefono}
                          </p>
                        </div>
                        <div>
                          <Button className="mt-2">Cómo llegar</Button>
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="servicios" className="mt-4">
                      <div>
                        <h4 className="font-semibold mb-2">Servicios disponibles</h4>
                        <ul className="grid grid-cols-2 gap-2">
                          {sucursales
                            .find((s) => s.id === sucursalSeleccionada)
                            ?.servicios.map((servicio, index) => (
                              <li key={index} className="flex items-center gap-2">
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
                                  <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                                <span>{servicio}</span>
                              </li>
                            ))}
                        </ul>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              ) : (
                <div className="h-full flex items-center justify-center bg-gray-50 rounded-xl p-8">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Seleccioná una sucursal</h3>
                    <p className="text-muted-foreground">
                      Hacé clic en una sucursal de la lista para ver más información.
                    </p>
                  </div>
                </div>
              )}
            </div>*/}
            <div className="lg:col-span-2">
              <div className="h-96 bg-gray-200 rounded-lg">
                <p className="text-center py-48">Mapa de sucursales</p>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Preguntas frecuentes</h2>
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <button className="flex w-full items-center justify-between font-semibold">
                  <span>¿Cuál es el horario de atención de las sucursales?</span>
                  <ChevronDown className="h-5 w-5" />
                </button>
                <div className="mt-2 text-muted-foreground">
                  <p>
                    El horario general de atención al público es de lunes a viernes de 10:00 a 15:00 horas. Algunas
                    sucursales pueden tener horarios especiales, te recomendamos verificar en el detalle de cada una.
                  </p>
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <button className="flex w-full items-center justify-between font-semibold">
                  <span>¿Necesito turno para realizar operaciones en la sucursal?</span>
                  <ChevronDown className="h-5 w-5" />
                </button>
                <div className="mt-2 text-muted-foreground">
                  <p>
                    Para operaciones de caja no es necesario turno previo. Para asesoramiento personalizado, te
                    recomendamos solicitar un turno a través de nuestra app o home banking para evitar esperas.
                  </p>
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <button className="flex w-full items-center justify-between font-semibold">
                  <span>¿Qué documentación necesito para realizar operaciones en la sucursal?</span>
                  <ChevronDown className="h-5 w-5" />
                </button>
                <div className="mt-2 text-muted-foreground">
                  <p>
                    Para cualquier operación es necesario presentar tu DNI. Dependiendo del trámite, podrían solicitarte
                    documentación adicional. Te recomendamos consultar previamente los requisitos específicos para el
                    trámite que deseas realizar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SucursalesPage
