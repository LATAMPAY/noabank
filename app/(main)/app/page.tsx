import Image from "next/image"
import Link from "next/link"
import { Smartphone, Shield, Zap, Repeat, CreditCard, PieChart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import PageHeader from "@/components/page-header"

export const metadata = {
  title: "App NOA BANK | NOA BANK",
  description: "Gestioná tus finanzas desde cualquier lugar con nuestra aplicación móvil intuitiva y segura.",
}

export default function AppPage() {
  return (
    <>
      <PageHeader
        title="App NOA BANK"
        description="Gestioná tus finanzas desde cualquier lugar con nuestra aplicación móvil intuitiva y segura."
        breadcrumbs={[{ label: "App", href: "/app" }]}
        bgColor="bg-gradient-to-r from-blue-900 to-indigo-900"
      />

      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Todo tu banco en la palma de tu mano</h2>
              <p className="text-lg text-muted-foreground">
                La App NOA BANK te permite gestionar tus finanzas de manera rápida, segura y sencilla desde cualquier
                lugar y en cualquier momento.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                    <Smartphone className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Acceso rápido y seguro</h3>
                    <p className="text-muted-foreground">
                      Ingresá con tu huella digital, reconocimiento facial o clave personal.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                    <Zap className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Transferencias inmediatas</h3>
                    <p className="text-muted-foreground">
                      Enviá dinero a cualquier cuenta en segundos, las 24 horas del día.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                    <Repeat className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Pago de servicios</h3>
                    <p className="text-muted-foreground">
                      Pagá tus facturas escaneando el código de barras o desde tus servicios guardados.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                    <CreditCard className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Control de tarjetas</h3>
                    <p className="text-muted-foreground">
                      Gestioná tus tarjetas, consultá movimientos y pagá el resumen desde la app.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                    <PieChart className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Análisis de gastos</h3>
                    <p className="text-muted-foreground">
                      Visualizá tus ingresos y gastos categorizados para un mejor control de tus finanzas.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                    <Shield className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Máxima seguridad</h3>
                    <p className="text-muted-foreground">
                      Tecnología de encriptación avanzada para proteger tus datos y operaciones.
                    </p>
                  </div>
                </li>
              </ul>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex gap-4">
                  <Link href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
                    <Image
                      src="/app-store-badge.png"
                      alt="Descargar en App Store"
                      width={140}
                      height={42}
                      className="h-12 w-auto"
                    />
                  </Link>
                  <Link href="https://play.google.com" target="_blank" rel="noopener noreferrer">
                    <Image
                      src="/google-play-badge.png"
                      alt="Descargar en Google Play"
                      width={140}
                      height={42}
                      className="h-12 w-auto"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-600 rounded-full filter blur-3xl opacity-10"></div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-indigo-600 rounded-full filter blur-3xl opacity-10"></div>
              <div className="relative z-10 flex justify-center">
                <Image
                  src="/app-mockup.png"
                  alt="NOA BANK App"
                  width={300}
                  height={600}
                  className="h-auto max-w-full"
                />
              </div>
            </div>
          </div>

          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center mb-12">Funcionalidades destacadas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
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
                      className="h-6 w-6 text-blue-600"
                    >
                      <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path>
                      <path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path>
                      <path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Consulta de saldos y movimientos</h3>
                  <p className="text-muted-foreground">
                    Accedé a los saldos y movimientos de todas tus cuentas en tiempo real, con filtros por fecha y tipo
                    de operación.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
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
                      className="h-6 w-6 text-blue-600"
                    >
                      <path d="m19 5-7 7-7-7"></path>
                      <path d="M19 12H5"></path>
                      <path d="m19 19-7-7-7 7"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Transferencias y pagos</h3>
                  <p className="text-muted-foreground">
                    Realizá transferencias inmediatas a cualquier banco, pagá servicios y recargá tu celular en pocos
                    pasos.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
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
                      className="h-6 w-6 text-blue-600"
                    >
                      <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                      <line x1="2" x2="22" y1="10" y2="10"></line>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Gestión de tarjetas</h3>
                  <p className="text-muted-foreground">
                    Consultá los consumos de tus tarjetas, pagá el resumen y configurá alertas de seguridad.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
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
                      className="h-6 w-6 text-blue-600"
                    >
                      <path d="M12 2v20"></path>
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Préstamos online</h3>
                  <p className="text-muted-foreground">
                    Simulá y solicitá préstamos personales con acreditación inmediata en tu cuenta.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
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
                      className="h-6 w-6 text-blue-600"
                    >
                      <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
                      <path d="M13 5v2"></path>
                      <path d="M13 17v2"></path>
                      <path d="M13 11v2"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Inversiones</h3>
                  <p className="text-muted-foreground">
                    Constituí plazos fijos, comprá y vendé moneda extranjera y accedé a otras opciones de inversión.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
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
                      className="h-6 w-6 text-blue-600"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Seguridad avanzada</h3>
                  <p className="text-muted-foreground">
                    Configurá tus preferencias de seguridad, activá notificaciones y gestioná los límites de
                    operaciones.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold mb-6">¿Listo para empezar?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Descargá ahora la App NOA BANK y experimentá una nueva forma de gestionar tus finanzas.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/app-store-badge.png"
                  alt="Descargar en App Store"
                  width={140}
                  height={42}
                  className="h-12 w-auto"
                />
              </Link>
              <Link href="https://play.google.com" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/google-play-badge.png"
                  alt="Descargar en Google Play"
                  width={140}
                  height={42}
                  className="h-12 w-auto"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
