"use client"

import { Clock, Facebook, Instagram, Linkedin, Twitter, Youtube, MapPin, Phone, Mail } from "lucide-react"

import { ContactForm } from "@/components/contact-form"
import PageHeader from "@/components/page-header"

export default function ContactoPage() {
  return (
    <>
      <PageHeader
        title="Contacto"
        description="Estamos para ayudarte. Contactanos por cualquiera de nuestros canales de atención."
        breadcrumbs={[{ label: "Contacto", href: "/contacto" }]}
      />

      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Información de Contacto</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Casa Central</p>
                    <p>Av. San Martín 850, San Miguel de Tucumán</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Teléfono</p>
                    <p>0800-222-NOA (662)</p>
                    <p>+54 381 4500000</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p>contacto@noabank.com.ar</p>
                    <p>atencionalcliente@noabank.com.ar</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Horario de Atención</p>
                    <p>Lunes a Viernes: 8:30 a 16:00</p>
                    <p>Sábados: 9:00 a 13:00 (solo centros comerciales)</p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold mt-8 mb-4">Redes Sociales</h2>
              <div className="flex gap-4">
                <a
                  href="https://facebook.com/noabank"
                  className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </a>
                <a
                  href="https://twitter.com/noabank"
                  className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </a>
                <a
                  href="https://instagram.com/noabank"
                  className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a
                  href="https://linkedin.com/company/noabank"
                  className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a
                  href="https://youtube.com/noabank"
                  className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors"
                >
                  <Youtube className="h-5 w-5" />
                  <span className="sr-only">YouTube</span>
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Envíanos un Mensaje</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
