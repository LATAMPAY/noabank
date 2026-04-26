import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function AppPromotion() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-blue-900 to-indigo-900 text-white overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block rounded-lg bg-white/10 px-3 py-1 text-sm">App NOA BANK</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Tu banco en la palma de tu mano
            </h2>
            <p className="text-xl text-blue-100">
              Gestioná tus finanzas desde cualquier lugar con nuestra aplicación móvil intuitiva y segura.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
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
                  className="h-5 w-5 text-blue-300 mt-0.5"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Transferencias inmediatas 24/7</span>
              </li>
              <li className="flex items-start gap-2">
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
                  className="h-5 w-5 text-blue-300 mt-0.5"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Pago de servicios y recargas</span>
              </li>
              <li className="flex items-start gap-2">
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
                  className="h-5 w-5 text-blue-300 mt-0.5"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Control de tus tarjetas y préstamos</span>
              </li>
              <li className="flex items-start gap-2">
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
                  className="h-5 w-5 text-blue-300 mt-0.5"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Inversiones y seguimiento de gastos</span>
              </li>
            </ul>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild className="bg-white text-blue-900 hover:bg-white/90">
                <Link href="/app">
                  Descargar App
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
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
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-600 rounded-full filter blur-3xl opacity-20"></div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-indigo-600 rounded-full filter blur-3xl opacity-20"></div>
            <div className="relative z-10 flex justify-center">
              <Image src="/app-mockup.png" alt="NOA BANK App" width={300} height={600} className="h-auto max-w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
