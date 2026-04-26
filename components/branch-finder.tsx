"use client"

import { useState } from "react"
import { Search, MapPin, Clock, Phone, Navigation, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const branches = [
  {
    id: 1,
    name: "Casa Central",
    address: "Av. 9 de Julio 1500",
    city: "Buenos Aires",
    province: "CABA",
    phone: "011-4555-0001",
    hours: "Lun a Vie 10:00 - 15:00",
    services: ["Caja", "Atención personalizada", "Empresas", "Cofres"],
    hasATM: true,
    coordinates: { lat: -34.6037, lng: -58.3816 },
  },
  {
    id: 2,
    name: "Sucursal Microcentro",
    address: "Florida 234",
    city: "Buenos Aires",
    province: "CABA",
    phone: "011-4555-0002",
    hours: "Lun a Vie 10:00 - 15:00",
    services: ["Caja", "Atención personalizada", "PyMEs"],
    hasATM: true,
    coordinates: { lat: -34.6037, lng: -58.3816 },
  },
  {
    id: 3,
    name: "Sucursal Córdoba Centro",
    address: "Av. Colón 500",
    city: "Córdoba",
    province: "Córdoba",
    phone: "0351-422-0003",
    hours: "Lun a Vie 10:00 - 15:00",
    services: ["Caja", "Atención personalizada", "Agro"],
    hasATM: true,
    coordinates: { lat: -31.4201, lng: -64.1888 },
  },
  {
    id: 4,
    name: "Sucursal Rosario",
    address: "Córdoba 1234",
    city: "Rosario",
    province: "Santa Fe",
    phone: "0341-421-0004",
    hours: "Lun a Vie 10:00 - 15:00",
    services: ["Caja", "Atención personalizada", "Empresas"],
    hasATM: true,
    coordinates: { lat: -32.9468, lng: -60.6393 },
  },
  {
    id: 5,
    name: "Sucursal Mendoza",
    address: "Av. San Martín 800",
    city: "Mendoza",
    province: "Mendoza",
    phone: "0261-420-0005",
    hours: "Lun a Vie 10:00 - 15:00",
    services: ["Caja", "Atención personalizada", "Agro"],
    hasATM: true,
    coordinates: { lat: -32.8895, lng: -68.8458 },
  },
  {
    id: 6,
    name: "Sucursal Tucumán",
    address: "San Martín 500",
    city: "San Miguel de Tucumán",
    province: "Tucumán",
    phone: "0381-422-0006",
    hours: "Lun a Vie 10:00 - 15:00",
    services: ["Caja", "Atención personalizada", "Agro", "PyMEs"],
    hasATM: true,
    coordinates: { lat: -26.8083, lng: -65.2176 },
  },
  {
    id: 7,
    name: "Sucursal Salta",
    address: "España 450",
    city: "Salta",
    province: "Salta",
    phone: "0387-421-0007",
    hours: "Lun a Vie 10:00 - 15:00",
    services: ["Caja", "Atención personalizada"],
    hasATM: true,
    coordinates: { lat: -24.7821, lng: -65.4232 },
  },
  {
    id: 8,
    name: "Sucursal Mar del Plata",
    address: "San Martín 2500",
    city: "Mar del Plata",
    province: "Buenos Aires",
    phone: "0223-493-0008",
    hours: "Lun a Vie 10:00 - 15:00",
    services: ["Caja", "Atención personalizada", "PyMEs"],
    hasATM: true,
    coordinates: { lat: -38.0023, lng: -57.5575 },
  },
]

const provinces = [...new Set(branches.map(b => b.province))].sort()

export function BranchFinder() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedProvince, setSelectedProvince] = useState<string>("all")
  const [selectedBranch, setSelectedBranch] = useState<typeof branches[0] | null>(null)

  const filteredBranches = branches.filter(branch => {
    const matchesSearch = 
      branch.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      branch.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      branch.city.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesProvince = selectedProvince === "all" || branch.province === selectedProvince
    
    return matchesSearch && matchesProvince
  })

  return (
    <div className="grid lg:grid-cols-3 gap-6">
      <div className="lg:col-span-1 space-y-4">
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Buscar por ciudad o dirección..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <Select value={selectedProvince} onValueChange={setSelectedProvince}>
                  <SelectTrigger className="flex-1">
                    <SelectValue placeholder="Todas las provincias" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas las provincias</SelectItem>
                    {provinces.map(province => (
                      <SelectItem key={province} value={province}>{province}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <p className="text-sm text-muted-foreground">
                {filteredBranches.length} sucursales encontradas
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2">
          {filteredBranches.map(branch => (
            <Card 
              key={branch.id} 
              className={`cursor-pointer transition-all hover:shadow-md ${selectedBranch?.id === branch.id ? 'ring-2 ring-blue-500 bg-blue-50' : ''}`}
              onClick={() => setSelectedBranch(branch)}
            >
              <CardContent className="pt-4 pb-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-sm">{branch.name}</h3>
                  {branch.hasATM && (
                    <Badge variant="secondary" className="text-xs">ATM 24h</Badge>
                  )}
                </div>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-3 w-3" />
                    <span>{branch.address}, {branch.city}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-3 w-3" />
                    <span>{branch.hours}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="lg:col-span-2">
        <Card className="h-full min-h-[500px]">
          <CardContent className="pt-6 h-full">
            {selectedBranch ? (
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 rounded-lg">
                  <h2 className="text-2xl font-bold mb-2">{selectedBranch.name}</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{selectedBranch.address}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Navigation className="h-4 w-4" />
                        <span>{selectedBranch.city}, {selectedBranch.province}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        <span>{selectedBranch.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{selectedBranch.hours}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Servicios disponibles</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedBranch.services.map((service, index) => (
                      <Badge key={index} variant="outline">{service}</Badge>
                    ))}
                    {selectedBranch.hasATM && (
                      <Badge className="bg-green-100 text-green-800">Cajero Automático 24h</Badge>
                    )}
                  </div>
                </div>

                <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="h-12 w-12 mx-auto mb-2 opacity-50" />
                    <p>Mapa de ubicación</p>
                    <p className="text-sm">Lat: {selectedBranch.coordinates.lat}, Lng: {selectedBranch.coordinates.lng}</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button className="flex-1 bg-gradient-to-r from-blue-600 to-blue-800">
                    <Navigation className="h-4 w-4 mr-2" />
                    Cómo llegar
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Phone className="h-4 w-4 mr-2" />
                    Llamar
                  </Button>
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center text-muted-foreground">
                <MapPin className="h-16 w-16 mb-4 opacity-30" />
                <h3 className="text-lg font-medium mb-2">Selecciona una sucursal</h3>
                <p className="text-sm max-w-xs">
                  Haz clic en una sucursal de la lista para ver su información detallada y ubicación en el mapa.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
