import { LoanCalculator } from "@/components/loan-calculator"

export default function PrestamoHipotecarioPage() {
  return (
    <main className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Préstamo Hipotecario</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">¿Qué es un Préstamo Hipotecario?</h2>
        <p>
          Un préstamo hipotecario es un producto financiero que te permite adquirir una vivienda a cambio de un pago
          mensual durante un período de tiempo determinado.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Características</h2>
        <ul>
          <li>Montos desde $10,000 hasta $50,000,000</li>
          <li>Plazos desde 5 hasta 30 años</li>
          <li>Tasas de interés fijas o variables</li>
          <li>Financiamiento de hasta el 90% del valor de la vivienda</li>
        </ul>
      </section>

      <section className="mt-12 bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-6">Simulador de Préstamo Hipotecario</h2>
        <LoanCalculator 
          minAmount={5000000}
          maxAmount={50000000} 
          minTerm={60}
          maxTerm={360} 
          interestRate={55}
          title="Simulador Préstamo Hipotecario"
        />
      </section>
    </main>
  )
}
