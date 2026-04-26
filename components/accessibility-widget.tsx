"use client"

import { useState, useEffect } from "react"
import { Accessibility, ZoomIn, ZoomOut, Type, Moon, Sun, RotateCcw, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { cn } from "@/lib/utils"

export function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [fontSize, setFontSize] = useState(100)
  const [highContrast, setHighContrast] = useState(false)

  useEffect(() => {
    // Apply font size to document
    document.documentElement.style.fontSize = `${fontSize}%`
  }, [fontSize])

  useEffect(() => {
    // Apply high contrast mode
    if (highContrast) {
      document.documentElement.classList.add("high-contrast")
    } else {
      document.documentElement.classList.remove("high-contrast")
    }
  }, [highContrast])

  const resetSettings = () => {
    setFontSize(100)
    setHighContrast(false)
  }

  const increaseFontSize = () => {
    setFontSize(prev => Math.min(prev + 10, 150))
  }

  const decreaseFontSize = () => {
    setFontSize(prev => Math.max(prev - 10, 80))
  }

  return (
    <>
      {/* Accessibility Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className={cn(
          "fixed bottom-24 right-6 z-40 h-12 w-12 rounded-full shadow-lg",
          "bg-gray-800 hover:bg-gray-700 text-white",
          "transition-all duration-300",
          isOpen && "scale-0 opacity-0"
        )}
        aria-label="Opciones de accesibilidad"
      >
        <Accessibility className="h-5 w-5" />
      </Button>

      {/* Accessibility Panel */}
      <div
        className={cn(
          "fixed bottom-24 right-6 z-50 w-80",
          "rounded-xl bg-white shadow-2xl border",
          "transition-all duration-300 transform origin-bottom-right",
          isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0 pointer-events-none"
        )}
      >
        {/* Header */}
        <div className="bg-gray-800 text-white p-4 rounded-t-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Accessibility className="h-5 w-5" />
              <h3 className="font-semibold">Accesibilidad</h3>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 h-8 w-8"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 space-y-6">
          {/* Font Size */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium flex items-center gap-2">
                <Type className="h-4 w-4" />
                Tamaño de texto
              </span>
              <span className="text-sm text-muted-foreground">{fontSize}%</span>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={decreaseFontSize}
                disabled={fontSize <= 80}
                className="h-8 w-8"
              >
                <ZoomOut className="h-4 w-4" />
              </Button>
              <Slider
                value={[fontSize]}
                onValueChange={(value) => setFontSize(value[0])}
                min={80}
                max={150}
                step={10}
                className="flex-1"
              />
              <Button
                variant="outline"
                size="icon"
                onClick={increaseFontSize}
                disabled={fontSize >= 150}
                className="h-8 w-8"
              >
                <ZoomIn className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* High Contrast */}
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium flex items-center gap-2">
              {highContrast ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
              Alto contraste
            </span>
            <Button
              variant={highContrast ? "default" : "outline"}
              size="sm"
              onClick={() => setHighContrast(!highContrast)}
              className={cn(highContrast && "bg-gray-800 hover:bg-gray-700")}
            >
              {highContrast ? "Activado" : "Desactivado"}
            </Button>
          </div>

          {/* Reset */}
          <Button
            variant="outline"
            className="w-full"
            onClick={resetSettings}
          >
            <RotateCcw className="h-4 w-4 mr-2" />
            Restablecer configuración
          </Button>
        </div>

        {/* Footer */}
        <div className="px-4 pb-4">
          <p className="text-xs text-muted-foreground text-center">
            Ajustá la configuración según tus necesidades de accesibilidad.
          </p>
        </div>
      </div>
    </>
  )
}
