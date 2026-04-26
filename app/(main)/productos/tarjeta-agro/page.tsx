import ProductDetailLayout from "@/components/product-detail-layout"

export const metadata = {
  title: "Tarjeta Agro | NOA BANK",
  description: "Beneficios exclusivos para productores agropecuarios.",
}

export default function TarjetaAgroPage() {
  const features = [
    "Financiamiento específico para insumos agropecuarios",
    "Plazos de pago adaptados al ciclo productivo",
    "Límites diferenciados para gastos personales y del campo",
    "Aceptación en comercios especializados del sector",
    "Tecnología contactless para pagos rápidos",
    "App móvil para control de gastos",
  ]

  const benefits = [
    "Descuentos exclusivos en comercios del sector agropecuario",
    "Programa de puntos NOA Rewards Agro",
    "Financiamiento en cuotas sin interés para insumos",
    "Seguros específicos para el productor agropecuario",
    "Asistencia técnica y financiera especializada",
  ]

  const requirements = [
    "Ser productor agropecuario (persona física o jurídica)",
    "Documentación legal de la explotación",
    "Título de propiedad o contrato de arrendamiento",
    "Declaraciones juradas de impuestos",
    "Evaluación crediticia favorable",
  ]

  const faqs = [
    {
      question: "¿Cómo se adaptan los vencimientos al ciclo productivo?",
      answer:
        "Los vencimientos pueden programarse según el ciclo de tu producción, permitiéndote pagar después de la cosecha o venta de tu producción.",
    },
    {
      question: "¿Qué comercios están adheridos al programa de descuentos?",
      answer:
        "Contamos con una amplia red de comercios adheridos, incluyendo proveedores de semillas, agroquímicos, combustibles, maquinaria agrícola, veterinarias y otros servicios relacionados con el sector.",
    },
    {
      question: "¿Puedo solicitar tarjetas adicionales para empleados del campo?",
      answer:
        "Sí, podés solicitar tarjetas adicionales con límites específicos para el personal de tu establecimiento, facilitando la gestión de gastos operativos.",
    },
    {
      question: "¿Qué cobertura tienen los seguros incluidos?",
      answer:
        "Los seguros incluyen cobertura por accidentes personales, asistencia médica, protección de compras y seguros específicos para equipamiento agrícola adquirido con la tarjeta.",
    },
  ]

  return (
    <ProductDetailLayout
      title="Tarjeta Agro"
      description="Beneficios exclusivos para productores agropecuarios."
      category="Tarjetas"
      categoryPath="/productos/tarjetas"
      features={features}
      benefits={benefits}
      requirements={requirements}
      faqs={faqs}
      image="/productos/tarjeta-agro.jpg"
      ctaText="Solicitar ahora"
      ctaLink="/contacto"
    />
  )
}
