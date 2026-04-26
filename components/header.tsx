"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
// Eliminar esta línea
// import { LanguageSelector } from "./language-selector"

const mainNav = [
  {
    title: "Personas",
    href: "/personas",
    submenu: [
      { title: "Cuentas", href: "/personas/cuentas" },
      { title: "Préstamos", href: "/personas/prestamos" },
      { title: "Tarjetas", href: "/personas/tarjetas" },
      { title: "Seguros", href: "/personas/seguros" },
      { title: "Inversiones", href: "/personas/inversiones" },
    ],
  },
  {
    title: "PyMEs",
    href: "/pymes",
    submenu: [
      { title: "Cuentas Comerciales", href: "/pymes/cuentas" },
      { title: "Financiamiento", href: "/pymes/financiamiento" },
      { title: "Medios de Pago", href: "/pymes/pagos" },
      { title: "Comercio Exterior", href: "/pymes/comercio-exterior" },
    ],
  },
  {
    title: "Empresas",
    href: "/empresas",
    submenu: [
      { title: "Banca Corporativa", href: "/empresas/corporativa" },
      { title: "Cash Management", href: "/empresas/cash-management" },
      { title: "Financiamiento", href: "/empresas/financiamiento" },
      { title: "Comercio Exterior", href: "/empresas/comercio-exterior" },
    ],
  },
  {
    title: "Agro",
    href: "/agro",
    submenu: [
      { title: "Financiamiento", href: "/agro/financiamiento" },
      { title: "Seguros", href: "/agro/seguros" },
      { title: "Inversiones", href: "/agro/inversiones" },
    ],
  },
  {
    title: "Institucional",
    href: "/institucional",
    submenu: [
      { title: "Sobre Nosotros", href: "/institucional/nosotros" },
      { title: "Sustentabilidad", href: "/institucional/sustentabilidad" },
      { title: "Prensa", href: "/institucional/prensa" },
      { title: "Trabaja con Nosotros", href: "/institucional/carreras" },
    ],
  },
]

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-6 lg:gap-10">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full max-w-xs">
              <nav className="grid gap-6 text-lg font-medium">
                <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
                  <Image src="/logo.png" alt="NOA BANK" width={120} height={40} className="h-8 w-auto" />
                </Link>
                {mainNav.map((item, index) => (
                  <Collapsible key={index}>
                    <div className="flex items-center justify-between">
                      <Link href={item.href} className="py-2">
                        {item.title}
                      </Link>
                      <CollapsibleTrigger asChild>
                        <Button variant="ghost" size="sm" className="p-0 h-8 w-8">
                          <ChevronDown className="h-4 w-4" />
                          <span className="sr-only">Toggle {item.title} submenu</span>
                        </Button>
                      </CollapsibleTrigger>
                    </div>
                    <CollapsibleContent>
                      <div className="grid gap-1 pl-4 pt-2">
                        {item.submenu?.map((subitem, subindex) => (
                          <Link
                            key={subindex}
                            href={subitem.href}
                            className="py-1 text-muted-foreground hover:text-foreground"
                          >
                            {subitem.title}
                          </Link>
                        ))}
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/" className="hidden items-center gap-2 lg:flex">
            <Image src="/logo.png" alt="NOA BANK" width={150} height={50} className="h-10 w-auto" />
          </Link>
          <Link href="/" className="flex items-center gap-2 lg:hidden">
            <Image src="/logo.png" alt="NOA BANK" width={120} height={40} className="h-8 w-auto" />
          </Link>
        </div>
        <nav className="hidden gap-6 lg:flex">
          {mainNav.map((item, index) => (
            <div key={index} className="relative group">
              <Link
                href={item.href}
                className="inline-flex items-center px-3 py-2 text-sm font-medium hover:text-blue-600"
              >
                {item.title}
                <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              <div className="absolute left-0 top-full z-50 hidden group-hover:block">
                <div className="pt-2">
                  <div className="rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="py-1 w-48">
                      {item.submenu?.map((subitem, subindex) => (
                        <Link
                          key={subindex}
                          href={subitem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {subitem.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="text-blue-600 hover:text-blue-800 hover:bg-blue-50 transition-colors"
            aria-label="Search"
          >
            {isSearchOpen ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
          </Button>
          <div className="hidden md:flex items-center gap-4">
            <select
              className="bg-transparent border border-gray-200 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              defaultValue="es"
            >
              <option value="es">ES</option>
              <option value="en">EN</option>
              <option value="pt">PT</option>
            </select>
            <Link
              href="https://online.noabank.com"
              className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 py-2 rounded-md hover:from-blue-700 hover:to-blue-900 transition-colors shadow-md"
            >
              Acceso Clientes
            </Link>
          </div>
        </div>
      </div>
      {isSearchOpen && (
        <div className="border-t py-3 px-4 md:px-6 bg-white/90 backdrop-blur-md">
          <div className="container">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                placeholder="Buscar productos, servicios o información..."
                className="w-full rounded-md border border-input bg-background py-2 pl-10 pr-4 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
