import ProductDetailLayout from "@/components/product-detail-layout"

export const metadata = {
  title: "Tarjeta Corporativa | NOA BANK",
  description: "Control de gastos empresariales con reportes detallados.",
}

export default function TarjetaCorporativaPage() {
  const features = [
    "Tarjetas para directivos y empleados con límites diferenciados",
    "Consolidación de gastos empresariales",
    "Reportes detallados por centro de costos",
    "Integración con sistemas contables",
    "Aceptación internacional",
    "Tecnología contactless para pagos rápidos",
  ]

  const benefits = [
    "Optimización de la gestión de gastos corporativos",
    "Reducción de manejo de efectivo",
    "Descuentos especiales en rubros de interés empresarial",
    "Programa de puntos NOA Rewards Empresas",
    "Seguros y asistencias especializados para viajes de negocios",
  ]

  const requirements = [
    "Empresa legalmente constituida",
    "Antigüedad mínima de 2 años en el mercado",
    "Documentación legal y contable actualizada",
    "Cuenta corriente en NOA BANK",
    "Evaluación crediticia favorable",
  ]

  const faqs = [
    {
      question: "¿Cómo se establecen los límites para cada tarjeta?",
      answer:
        "La empresa define los límites para cada tarjeta según las necesidades y jerarquía de cada colaborador, dentro del límite global asignado a la empresa.",
    },
    {
      question: "¿Qué tipo de reportes puedo obtener?",
      answer:
        "A través de la plataforma de administración, podés obtener reportes de gastos por empleado, centro de costos, rubro, período, y otros filtros personalizables. Los reportes pueden exportarse en diversos formatos.",
    },
    {
      question: "¿Cómo funciona la integración con sistemas contables?",
      answer:
        "Ofrecemos APIs y formatos de exportación compatibles con los principales sistemas contables del mercado, facilitando la conciliación y registro de gastos.",
    },
    {
      question: "¿Qué cobertura tienen los seguros incluidos?",
      answer:
        "Los seguros incluyen cobertura médica internacional, pérdida de equipaje, demora o cancelación de vuelos, y protección de compras, entre otros. El alcance varía según el plan contratado.",
    },
  ]

  return (
    <ProductDetailLayout
      title="Tarjeta Corporativa"
      description="Control de gastos empresariales con reportes detallados."
      category="Tarjetas"
      categoryPath="/productos/tarjetas"
      features={features}
      benefits={benefits}
      requirements={requirements}
      faqs={faqs}
      image="/productos/tarjeta-corporativa.jpg"
      ctaText="Solicitar ahora"
      ctaLink="/contacto"
    />
  )
}
