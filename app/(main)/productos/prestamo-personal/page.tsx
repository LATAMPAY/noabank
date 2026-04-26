import ProductDetailLayout from "@/components/product-detail-layout"
import { LoanCalculator } from "@/components/loan-calculator"

export const metadata = {
  title: "Préstamo Personal | NOA BANK",
  description: "Financiamiento rápido para tus proyectos personales.",
}

export default function PrestamoPersonalPage() {
  const features = [
    "Montos desde $50.000 hasta $5.000.000",
    "Plazos de 3 a 60 meses",
    "Tasa fija en pesos",
    "Aprobación en 24 horas",
    "Acreditación inmediata en tu cuenta",
    "Sin gastos de otorgamiento para clientes",
  ]

  const benefits = [
    "Cuotas fijas en pesos",
    "Posibilidad de cancelación anticipada",
    "Simulador online para calcular cuotas",
    "Gestión 100% digital",
    "Descuento por débito automático",
  ]

  const requirements = [
    "Ser mayor de 18 años",
    "DNI argentino o residencia permanente",
    "Antigüedad laboral mínima de 6 meses",
    "Ingresos mínimos de $150.000 mensuales",
    "No estar en situación 2 o superior en el sistema financiero",
  ]

  const faqs = [
    {
      question: "¿Cuál es la tasa de interés del préstamo personal?",
      answer:
        "La tasa de interés depende del plazo y monto solicitado. Podés consultar la tasa vigente en nuestro simulador online o contactando a un asesor.",
    },
    {
      question: "¿Puedo cancelar anticipadamente mi préstamo?",
      answer:
        "Sí, podés cancelar anticipadamente tu préstamo en cualquier momento, abonando el capital adeudado más los intereses devengados hasta la fecha de cancelación.",
    },
    {
      question: "¿En cuánto tiempo se acredita el préstamo?",
      answer:
        "Una vez aprobado, el préstamo se acredita de forma inmediata en tu cuenta NOA BANK. Si no sos cliente, la acreditación puede demorar hasta 24 horas hábiles.",
    },
    {
      question: "¿Necesito ser cliente del banco para solicitar un préstamo?",
      answer:
        "No es necesario ser cliente previo, pero deberás abrir una cuenta para la acreditación del préstamo y el débito de las cuotas.",
    },
  ]

  return (
    <ProductDetailLayout
      title="Préstamo Personal"
      description="Financiamiento rápido para tus proyectos personales."
      category="Préstamos"
      categoryPath="/productos/prestamos"
      features={features}
      benefits={benefits}
      requirements={requirements}
      faqs={faqs}
      image="/productos/prestamo-personal.jpg"
      ctaText="Solicitar ahora"
      ctaLink="/contacto"
    >
      <section className="mt-12 bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-6">Simulador de Préstamo</h2>
        <LoanCalculator maxAmount={5000000} maxTerm={60} minRate={65} maxRate={85} />
      </section>
    </ProductDetailLayout>
  )
}
