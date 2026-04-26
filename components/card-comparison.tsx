"use client"

import { useState } from "react"
import { Check, X, Star, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const cards = [
  {
    id: "classic",
    name: "NOA Classic",
    type: "Débito",
    color: "from-gray-600 to-gray-800",
    annualFee: 0,
    cashback: 0,
    features: {
      internationalUse: true,
      contactless: true,
      virtualCard: true,
      travelInsurance: false,
      airportLounge: false,
      concierge: false,
      cashbackProgram: false,
      installments: false,
    },
    benefits: ["Sin costo de mantenimiento", "Retiros en cajeros de la red", "Compras online seguras"],
    recommended: false,
  },
  {
    id: "gold",
    name: "NOA Gold",
    type: "Crédito",
    color: "from-yellow-500 to-yellow-700",
    annualFee: 15000,
    cashback: 1,
    features: {
      internationalUse: true,
      contactless: true,
      virtualCard: true,
      travelInsurance: true,
      airportLounge: false,
      concierge: false,
      cashbackProgram: true,
      installments: true,
    },
    benefits: ["1% de cashback en compras", "Seguro de viaje incluido", "Hasta 12 cuotas sin interés"],
    recommended: false,
  },
  {
    id: "platinum",
    name: "NOA Platinum",
    type: "Crédito",
    color: "from-blue-600 to-blue-800",
    annualFee: 35000,
    cashback: 2,
    features: {
      internationalUse: true,
      contactless: true,
      virtualCard: true,
      travelInsurance: true,
      airportLounge: true,
      concierge: false,
      cashbackProgram: true,
      installments: true,
    },
    benefits: ["2% de cashback en compras", "Acceso a salas VIP", "Seguro de viaje premium", "Hasta 18 cuotas sin interés"],
    recommended: true,
  },
  {
    id: "black",
    name: "NOA Black",
    type: "Crédito",
    color: "from-gray-900 to-black",
    annualFee: 75000,
    cashback: 3,
    features: {
      internationalUse: true,
      contactless: true,
      virtualCard: true,
      travelInsurance: true,
      airportLounge: true,
      concierge: true,
      cashbackProgram: true,
      installments: true,
    },
    benefits: ["3% de cashback en compras", "Concierge 24/7", "Acceso ilimitado a salas VIP", "Seguro de viaje premium plus", "Hasta 24 cuotas sin interés"],
    recommended: false,
  },
]

const featureLabels: Record<string, string> = {
  internationalUse: "Uso internacional",
  contactless: "Pago sin contacto",
  virtualCard: "Tarjeta virtual",
  travelInsurance: "Seguro de viaje",
  airportLounge: "Salas VIP aeropuerto",
  concierge: "Servicio Concierge",
  cashbackProgram: "Programa de cashback",
  installments: "Cuotas sin interés",
}

export function CardComparison() {
  const [selectedCards, setSelectedCards] = useState<string[]>(["gold", "platinum"])

  const toggleCard = (cardId: string) => {
    if (selectedCards.includes(cardId)) {
      if (selectedCards.length > 1) {
        setSelectedCards(selectedCards.filter(id => id !== cardId))
      }
    } else {
      if (selectedCards.length < 3) {
        setSelectedCards([...selectedCards, cardId])
      }
    }
  }

  const selectedCardData = cards.filter(card => selectedCards.includes(card.id))

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-3 justify-center">
        {cards.map(card => (
          <Button
            key={card.id}
            variant={selectedCards.includes(card.id) ? "default" : "outline"}
            onClick={() => toggleCard(card.id)}
            className={cn(
              "relative",
              selectedCards.includes(card.id) && "bg-gradient-to-r from-blue-600 to-blue-800"
            )}
          >
            {card.name}
            {card.recommended && (
              <Badge className="absolute -top-2 -right-2 bg-yellow-500 text-yellow-900 text-[10px] px-1">
                <Star className="h-3 w-3" />
              </Badge>
            )}
          </Button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {selectedCardData.map(card => (
          <Card key={card.id} className={cn("relative overflow-hidden", card.recommended && "ring-2 ring-yellow-500")}>
            {card.recommended && (
              <div className="absolute top-0 right-0 bg-yellow-500 text-yellow-900 px-3 py-1 text-xs font-bold rounded-bl-lg">
                Recomendada
              </div>
            )}
            <CardHeader className={cn("text-white bg-gradient-to-r", card.color)}>
              <div className="flex justify-between items-start">
                <div>
                  <Badge variant="secondary" className="mb-2 bg-white/20 text-white border-0">
                    {card.type}
                  </Badge>
                  <CardTitle className="text-2xl">{card.name}</CardTitle>
                </div>
                <CreditCard className="h-10 w-10 opacity-50" />
              </div>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              <div className="text-center pb-4 border-b">
                <p className="text-sm text-muted-foreground">Costo anual</p>
                <p className="text-3xl font-bold">
                  {card.annualFee === 0 ? "Gratis" : `$${card.annualFee.toLocaleString()}`}
                </p>
                {card.cashback > 0 && (
                  <Badge className="mt-2 bg-green-100 text-green-800">
                    {card.cashback}% Cashback
                  </Badge>
                )}
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-sm">Beneficios destacados</h4>
                <ul className="space-y-2">
                  {card.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3 pt-4 border-t">
                <h4 className="font-semibold text-sm">Características</h4>
                <div className="grid grid-cols-2 gap-2">
                  {Object.entries(card.features).map(([key, value]) => (
                    <div key={key} className="flex items-center gap-1 text-xs">
                      {value ? (
                        <Check className="h-3 w-3 text-green-500" />
                      ) : (
                        <X className="h-3 w-3 text-gray-300" />
                      )}
                      <span className={cn(!value && "text-muted-foreground")}>
                        {featureLabels[key]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <Button className={cn("w-full bg-gradient-to-r", card.color)}>
                Solicitar {card.name}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-blue-50 rounded-lg p-6">
        <h3 className="font-semibold mb-4">Comparativa de características</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 pr-4">Característica</th>
                {selectedCardData.map(card => (
                  <th key={card.id} className="text-center py-2 px-4">{card.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Object.entries(featureLabels).map(([key, label]) => (
                <tr key={key} className="border-b">
                  <td className="py-2 pr-4">{label}</td>
                  {selectedCardData.map(card => (
                    <td key={card.id} className="text-center py-2 px-4">
                      {card.features[key as keyof typeof card.features] ? (
                        <Check className="h-4 w-4 text-green-500 mx-auto" />
                      ) : (
                        <X className="h-4 w-4 text-gray-300 mx-auto" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
