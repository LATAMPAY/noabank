import ProductDetailLayout from "@/components/product-detail-layout"

export const metadata = {
  title: "Tarjeta de Crédito | NOA BANK",
  description: "Múltiples beneficios, cuotas sin interés y programa de puntos.",
}

export default function TarjetaCreditoPage() {
  const features = [
    "Aceptación en millones de comercios en todo el mundo",
    "Cuotas sin interés en comercios adheridos",
    "Programa de puntos NOA Rewards",
    "Seguros y asistencias incluidos",
    "App móvil para control de gastos",
    "Tecnología contactless para pagos rápidos",
  ]

  const benefits = [
    "Descuentos exclusivos en comercios adheridos",
    "Acumulación de puntos canjeables por productos y servicios",
    "Promociones especiales en fechas destacadas",
    "Seguro de protección de compras",
    "Asistencia al viajero sin cargo adicional",
  ]

  const requirements = [
    "Ser mayor de 18 años",
    "DNI argentino o residencia permanente",
    "Ingresos mínimos comprobables según tipo de tarjeta",
    "Buen historial crediticio",
    "Antigüedad laboral mínima de 6 meses",
  ]

  const faqs = [
    {
      question: "¿Cuáles son los límites de la tarjeta?",
      answer:
        "Los límites de compra, financiación y adelanto en efectivo se establecen según tu perfil crediticio e ingresos. Podés consultar tus límites actuales en Home Banking o la App NOA BANK.",
    },
    {
      question: "¿Cómo funciona el programa de puntos NOA Rewards?",
      answer:
        "Por cada peso gastado con tu tarjeta, acumulás puntos que podés canjear por productos, servicios, millas aéreas o donaciones a organizaciones benéficas a través de nuestro catálogo online.",
    },
    {
      question: "¿Puedo solicitar tarjetas adicionales?",
      answer:
        "Sí, podés solicitar hasta 5 tarjetas adicionales para familiares directos mayores de 14 años, sin costo adicional en la mayoría de nuestros planes.",
    },
    {
      question: "¿Qué debo hacer en caso de robo o extravío de mi tarjeta?",
      answer:
        "Debés comunicarte inmediatamente con nuestro centro de atención al cliente al 0800-222-NOA (662) para bloquear la tarjeta. También podés hacerlo a través de Home Banking o la App NOA BANK.",
    },
  ]

  return (
    <ProductDetailLayout
      title="Tarjeta de Crédito"
      description="Múltiples beneficios, cuotas sin interés y programa de puntos."
      category="Tarjetas"
      categoryPath="/productos/tarjetas"
      features={features}
      benefits={benefits}
      requirements={requirements}
      faqs={faqs}
      image="/productos/tarjeta-credito.jpg"
      ctaText="Solicitar ahora"
      ctaLink="/contacto"
    />
  )
}
