"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Cookie, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem("cookies-accepted")
    if (!hasAccepted) {
      // Small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookies-accepted", "true")
    setIsVisible(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookies-accepted", "false")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6",
        "bg-white border-t shadow-lg",
        "animate-in slide-in-from-bottom-5 duration-500"
      )}
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="flex items-start gap-3 flex-1">
            <div className="bg-blue-100 p-2 rounded-full flex-shrink-0">
              <Cookie className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Utilizamos cookies</h3>
              <p className="text-sm text-gray-600">
                Utilizamos cookies propias y de terceros para mejorar tu experiencia de navegación, 
                analizar el tráfico del sitio y personalizar el contenido. Al hacer clic en &quot;Aceptar&quot;, 
                aceptás el uso de todas las cookies.{" "}
                <Link href="/legal/cookies" className="text-blue-600 hover:underline">
                  Más información
                </Link>
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 w-full md:w-auto">
            <Button
              variant="outline"
              onClick={declineCookies}
              className="flex-1 md:flex-none"
            >
              Rechazar
            </Button>
            <Button
              onClick={acceptCookies}
              className="flex-1 md:flex-none bg-blue-600 hover:bg-blue-700"
            >
              Aceptar
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={declineCookies}
              className="hidden md:flex"
              aria-label="Cerrar"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
