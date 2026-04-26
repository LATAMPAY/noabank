import { LoanCalculator } from "@/components/loan-calculator"

export default function PrestamoAgroPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Préstamo Agro</h1>

      <section className="mb-8">
        <p>
          Nuestro Préstamo Agro está diseñado para impulsar el crecimiento y la productividad de tu negocio agrícola.
          Ofrecemos financiamiento flexible y adaptado a tus necesidades específicas.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Características</h2>
        <ul>
          <li>Montos de financiamiento desde $1,000,000 hasta $30,000,000.</li>
          <li>Plazos de hasta 72 meses.</li>
          <li>Tasas de interés competitivas.</li>
          <li>Asesoría personalizada.</li>
        </ul>
      </section>

      <section className="mt-12 bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-6">Simulador de Préstamo Agro</h2>
        <LoanCalculator maxAmount={30000000} maxTerm={72} minRate={50} maxRate={70} />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Requisitos</h2>
        <p>Para solicitar el Préstamo Agro, necesitarás presentar la siguiente documentación:</p>
        <ul>
          <li>Identificación oficial.</li>
          <li>Comprobante de domicilio.</li>
          <li>Estados financieros.</li>
          <li>Plan de negocios.</li>
        </ul>
      </section>
    </div>
  )
}
