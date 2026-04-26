"use client"

import { useState } from "react"
import { Send, Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function ContactForm() {
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
            <h3 className="text-2xl font-bold text-green-800 mb-2">Mensaje Enviado</h3>
            <p className="text-green-700 mb-6">
              Gracias por contactarnos. Un representante se comunicará con usted dentro de las próximas 24 horas hábiles.
            </p>
            <Button onClick={() => setIsSubmitted(false)} variant="outline" className="border-green-500 text-green-700 hover:bg-green-100">
              Enviar otro mensaje
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="grid lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <Card>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="nombre">Nombre completo *</Label>
                  <Input id="nombre" placeholder="Juan Pérez" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Correo electrónico *</Label>
                  <Input id="email" type="email" placeholder="juan@ejemplo.com" required />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="telefono">Teléfono</Label>
                  <Input id="telefono" type="tel" placeholder="+54 11 1234-5678" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="segmento">Segmento</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar segmento" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="personas">Personas</SelectItem>
                      <SelectItem value="pymes">PyMEs y Comercios</SelectItem>
                      <SelectItem value="empresas">Empresas</SelectItem>
                      <SelectItem value="agro">Agro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="asunto">Asunto *</Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar asunto" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="consulta">Consulta general</SelectItem>
                    <SelectItem value="cuentas">Apertura de cuenta</SelectItem>
                    <SelectItem value="prestamos">Préstamos</SelectItem>
                    <SelectItem value="tarjetas">Tarjetas</SelectItem>
                    <SelectItem value="seguros">Seguros</SelectItem>
                    <SelectItem value="inversiones">Inversiones</SelectItem>
                    <SelectItem value="reclamo">Reclamo</SelectItem>
                    <SelectItem value="otro">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="mensaje">Mensaje *</Label>
                <Textarea 
                  id="mensaje" 
                  placeholder="Escriba su consulta aquí..." 
                  rows={5}
                  required
                />
              </div>

              <div className="flex items-center gap-2">
                <input type="checkbox" id="terminos" required className="rounded border-gray-300" />
                <Label htmlFor="terminos" className="text-sm text-muted-foreground">
                  Acepto los términos y condiciones y la política de privacidad
                </Label>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></span>
                    Enviando...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="h-4 w-4" />
                    Enviar Mensaje
                  </span>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        <Card className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
          <CardContent className="pt-6">
            <h3 className="text-xl font-bold mb-4">Información de Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-1" />
                <div>
                  <p className="font-medium">Teléfono</p>
                  <p className="text-blue-100">0800-999-NOA (662)</p>
                  <p className="text-blue-200 text-sm">Lunes a Viernes 8:00 - 20:00</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-1" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-blue-100">contacto@noabank.com.ar</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-1" />
                <div>
                  <p className="font-medium">Casa Central</p>
                  <p className="text-blue-100">Av. 9 de Julio 1500</p>
                  <p className="text-blue-200 text-sm">CABA, Argentina</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 mt-1" />
                <div>
                  <p className="font-medium">Horario de Atención</p>
                  <p className="text-blue-100">Lunes a Viernes</p>
                  <p className="text-blue-200 text-sm">10:00 - 15:00 hs</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-bold mb-3">Atención al Cliente</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Para consultas sobre productos, reclamos o sugerencias, nuestro equipo está disponible para ayudarte.
            </p>
            <Button variant="outline" className="w-full">
              <Phone className="h-4 w-4 mr-2" />
              Solicitar llamada
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
