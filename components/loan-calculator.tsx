"use client"

import { useState, useEffect } from "react"
import { Calculator, TrendingUp, Calendar, DollarSign, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface LoanCalculatorProps {
  minAmount?: number
  maxAmount?: number
  minTerm?: number
  maxTerm?: number
  interestRate?: number
  title?: string
}

export function LoanCalculator({
  minAmount = 50000,
  maxAmount = 5000000,
  minTerm = 6,
  maxTerm = 60,
  interestRate = 85,
  title = "Simulador de Préstamo"
}: LoanCalculatorProps) {
  const [amount, setAmount] = useState(500000)
  const [term, setTerm] = useState(24)
  const [monthlyPayment, setMonthlyPayment] = useState(0)
  const [totalPayment, setTotalPayment] = useState(0)
  const [totalInterest, setTotalInterest] = useState(0)

  useEffect(() => {
    // Cálculo de cuota usando sistema francés
    const monthlyRate = interestRate / 100 / 12
    const payment = amount * (monthlyRate * Math.pow(1 + monthlyRate, term)) / (Math.pow(1 + monthlyRate, term) - 1)
    const total = payment * term
    const interest = total - amount

    setMonthlyPayment(payment)
    setTotalPayment(total)
    setTotalInterest(interest)
  }, [amount, term, interestRate])

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <CardTitle className="flex items-center gap-2">
          <Calculator className="h-5 w-5" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label className="text-base font-medium flex items-center gap-2">
                <DollarSign className="h-4 w-4 text-blue-600" />
                Monto del préstamo
              </Label>
              <span className="text-2xl font-bold text-blue-600">
                {formatCurrency(amount)}
              </span>
            </div>
            <Slider
              value={[amount]}
              onValueChange={(value) => setAmount(value[0])}
              min={minAmount}
              max={maxAmount}
              step={10000}
              className="py-4"
            />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>{formatCurrency(minAmount)}</span>
              <span>{formatCurrency(maxAmount)}</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label className="text-base font-medium flex items-center gap-2">
                <Calendar className="h-4 w-4 text-blue-600" />
                Plazo en meses
              </Label>
              <span className="text-2xl font-bold text-blue-600">
                {term} meses
              </span>
            </div>
            <Slider
              value={[term]}
              onValueChange={(value) => setTerm(value[0])}
              min={minTerm}
              max={maxTerm}
              step={6}
              className="py-4"
            />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>{minTerm} meses</span>
              <span>{maxTerm} meses</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 space-y-4">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-1">Tu cuota mensual sería de</p>
              <p className="text-4xl font-bold text-blue-600">
                {formatCurrency(monthlyPayment)}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-blue-200">
              <div className="text-center">
                <p className="text-sm text-muted-foreground">Total a pagar</p>
                <p className="text-lg font-semibold">{formatCurrency(totalPayment)}</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground">Total intereses</p>
                <p className="text-lg font-semibold">{formatCurrency(totalInterest)}</p>
              </div>
            </div>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground cursor-help">
                    <Info className="h-3 w-3" />
                    <span>TNA: {interestRate}% - Sistema Francés</span>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Tasa Nominal Anual. Los valores son estimativos y pueden variar según tu perfil crediticio.</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          <div className="space-y-3">
            <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 h-12 text-lg">
              <TrendingUp className="h-5 w-5 mr-2" />
              Solicitar Préstamo
            </Button>
            <p className="text-xs text-center text-muted-foreground">
              Al solicitar, un asesor se comunicará contigo en menos de 24 horas.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
