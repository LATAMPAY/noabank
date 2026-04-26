import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-blue-950 to-blue-900 text-white">
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image src="/logo-white.png" alt="NOA BANK" width={150} height={50} className="h-10 w-auto" />
            </Link>
            <p className="text-blue-200 mb-6 max-w-md">
              NOA BANK es una institución financiera comprometida con el desarrollo económico de Argentina, brindando
              soluciones innovadoras para personas, empresas y sectores productivos.
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Button variant="ghost" size="icon" className="text-blue-200 hover:text-white hover:bg-blue-800">
                  <Facebook className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Button variant="ghost" size="icon" className="text-blue-200 hover:text-white hover:bg-blue-800">
                  <Twitter className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Button variant="ghost" size="icon" className="text-blue-200 hover:text-white hover:bg-blue-800">
                  <Instagram className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Button variant="ghost" size="icon" className="text-blue-200 hover:text-white hover:bg-blue-800">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <Button variant="ghost" size="icon" className="text-blue-200 hover:text-white hover:bg-blue-800">
                  <Youtube className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Productos</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/productos/cuentas" className="text-blue-200 hover:text-white">
                  Cuentas
                </Link>
              </li>
              <li>
                <Link href="/productos/prestamos" className="text-blue-200 hover:text-white">
                  Préstamos
                </Link>
              </li>
              <li>
                <Link href="/productos/tarjetas" className="text-blue-200 hover:text-white">
                  Tarjetas
                </Link>
              </li>
              <li>
                <Link href="/productos/seguros" className="text-blue-200 hover:text-white">
                  Seguros
                </Link>
              </li>
              <li>
                <Link href="/productos/inversiones" className="text-blue-200 hover:text-white">
                  Inversiones
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Segmentos</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/personas" className="text-blue-200 hover:text-white">
                  Personas
                </Link>
              </li>
              <li>
                <Link href="/pymes" className="text-blue-200 hover:text-white">
                  PyMEs y Comercios
                </Link>
              </li>
              <li>
                <Link href="/empresas" className="text-blue-200 hover:text-white">
                  Empresas e Industrias
                </Link>
              </li>
              <li>
                <Link href="/agro" className="text-blue-200 hover:text-white">
                  Agro
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Institucional</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/institucional/nosotros" className="text-blue-200 hover:text-white">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/institucional/sucursales" className="text-blue-200 hover:text-white">
                  Sucursales
                </Link>
              </li>
              <li>
                <Link href="/institucional/prensa" className="text-blue-200 hover:text-white">
                  Sala de Prensa
                </Link>
              </li>
              <li>
                <Link href="/institucional/carreras" className="text-blue-200 hover:text-white">
                  Trabaja con Nosotros
                </Link>
              </li>
              <li>
                <Link href="/institucional/contacto" className="text-blue-200 hover:text-white">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-blue-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-bold text-lg mb-4">Suscribite a nuestro newsletter</h3>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Tu email"
                  className="bg-blue-800 border-blue-700 text-white placeholder:text-blue-300 max-w-xs"
                />
                <Button className="bg-white text-blue-900 hover:bg-blue-100">Suscribirse</Button>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 md:justify-end">
              <Image src="/argentina-flag.png" alt="Bandera Argentina" width={32} height={20} className="h-5 w-auto" />
              <Link href="/legal/terminos" className="text-blue-200 hover:text-white text-sm">
                Términos y Condiciones
              </Link>
              <Link href="/legal/privacidad" className="text-blue-200 hover:text-white text-sm">
                Política de Privacidad
              </Link>
              <Link href="/legal/cookies" className="text-blue-200 hover:text-white text-sm">
                Política de Cookies
              </Link>
            </div>
          </div>
          <div className="mt-8 text-center text-blue-300 text-sm">
            <p>© {new Date().getFullYear()} NOA BANK. Todos los derechos reservados.</p>
            <p className="mt-2">Entidad financiera autorizada por el Banco Central de la República Argentina.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
