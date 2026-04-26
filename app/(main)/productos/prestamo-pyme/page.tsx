import { LoanCalculator } from "@/components/loan-calculator"

export default function PrestamoPymePage() {
  return (
    <main className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Préstamo PyME</h1>

      <section className="mb-8">
        <p className="text-gray-700">
          Impulsa el crecimiento de tu pequeña o mediana empresa con nuestro Préstamo PyME. Obtén financiamiento
          flexible y adaptado a tus necesidades.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Características</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Montos desde $1,000,000 hasta $20,000,000</li>
          <li>Plazos de hasta 60 meses</li>
          <li>Tasas de interés competitivas</li>
          <li>Aprobación rápida y sencilla</li>
        </ul>
      </section>

      <section className="mt-12 bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-6">Simulador de Préstamo PyME</h2>
        <LoanCalculator maxAmount={20000000} maxTerm={60} minRate={55} maxRate={75} />
      </section>
    </main>
  )
}
