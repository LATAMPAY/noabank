"use client"

import { useState } from "react"
import { Send, CheckCircle, User, Phone, Mail, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface ProductRequestFormProps {
  productName?: string
  productType?: string
}

export function ProductRequestForm({ productName, productType }: ProductRequestFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simular envío
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsLoading(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <Card className="border-green-200 bg-green-50">
        <CardContent className="pt-6">
          <div className="text-center py-8">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-green-800 mb-2">Solicitud Enviada</h3>
            <p className="text-green-700 mb-6">
              Gracias por tu interés en {productName || "nuestro producto"}. Un asesor se comunicará 
              contigo dentro de las próximas 24 horas hábiles para continuar con el proceso.
            </p>
            <Button 
              onClick={() => setIsSubmitted(false)} 
              variant="outline" 
              className="border-green-500 text-green-700 hover:bg-green-100"
            >
              Enviar otra solicitud
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-t-lg">
        <CardTitle className="flex items-center gap-2">
          <FileText className="h-5 w-5" />
          Solicitar {productName || "Producto"}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="nombre" className="flex items-center gap-2">
                <User className="h-4 w-4 text-blue-600" />
                Nombre completo *
              </Label>
              <Input id="nombre" placeholder="Juan Pérez" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="dni">DNI / CUIT *</Label>
              <Input id="dni" placeholder="12.345.678" required />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-blue-600" />
                Correo electrónico *
              </Label>
              <Input id="email" type="email" placeholder="juan@ejemplo.com" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="telefono" className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-blue-600" />
                Teléfono *
              </Label>
              <Input id="telefono" type="tel" placeholder="+54 11 1234-5678" required />
            </div>
          </div>

          {productType === "prestamo" && (
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="monto">Monto solicitado</Label>
                <Input id="monto" type="number" placeholder="500000" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="plazo">Plazo deseado</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar plazo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="12">12 meses</SelectItem>
                    <SelectItem value="24">24 meses</SelectItem>
                    <SelectItem value="36">36 meses</SelectItem>
                    <SelectItem value="48">48 meses</SelectItem>
                    <SelectItem value="60">60 meses</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="horario">Horario de contacto preferido</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Seleccionar horario" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="manana">Mañana (9:00 - 12:00)</SelectItem>
                <SelectItem value="mediodia">Mediodía (12:00 - 14:00)</SelectItem>
                <SelectItem value="tarde">Tarde (14:00 - 18:00)</SelectItem>
                <SelectItem value="cualquiera">Cualquier horario</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="comentarios">Comentarios adicionales</Label>
            <Textarea 
              id="comentarios" 
              placeholder="¿Hay algo más que debamos saber sobre tu solicitud?" 
              rows={3}
            />
          </div>

          <div className="flex items-start gap-2">
            <input type="checkbox" id="terminos" required className="mt-1 rounded border-gray-300" />
            <Label htmlFor="terminos" className="text-sm text-muted-foreground font-normal">
              Acepto los términos y condiciones, autorizo a NOA BANK a contactarme y confirmo que 
              los datos proporcionados son correctos.
            </Label>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 h-12 text-lg"
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></span>
                Enviando solicitud...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Send className="h-5 w-5" />
                Enviar Solicitud
              </span>
            )}
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            Un asesor se comunicará contigo dentro de las próximas 24 horas hábiles.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
