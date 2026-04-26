import ProductDetailLayout from "@/components/product-detail-layout"

export const metadata = {
  title: "Cuenta Única | NOA BANK",
  description: "Cuenta multimoneda con tarjeta de débito y acceso a todos los canales digitales.",
}

export default function CuentaUnicaPage() {
  const features = [
    "Cuenta multimoneda en pesos y dólares",
    "Tarjeta de débito sin costo de emisión",
    "Acceso a Home Banking y App NOA BANK",
    "Transferencias inmediatas 24/7",
    "Extracciones sin costo en cajeros de la red",
    "Pago de servicios y recargas",
  ]

  const benefits = [
    "Sin costo de mantenimiento con acreditación de haberes",
    "Descuentos exclusivos en comercios adheridos",
    "Programa de beneficios NOA Rewards",
    "Atención prioritaria en sucursales",
    "Alertas y notificaciones de movimientos",
  ]

  const requirements = [
    "Ser mayor de 18 años",
    "DNI argentino o residencia permanente",
    "Comprobante de domicilio",
    "Comprobante de ingresos (opcional)",
  ]

  const faqs = [
    {
      question: "¿Cuál es el costo de mantenimiento de la Cuenta Única?",
      answer:
        "La Cuenta Única no tiene costo de mantenimiento si acreditás tus haberes o tenés un saldo promedio mensual superior a $50.000.",
    },
    {
      question: "¿Puedo abrir una Cuenta Única siendo extranjero?",
      answer:
        "Sí, podés abrir una Cuenta Única si tenés residencia permanente en Argentina y presentás la documentación requerida.",
    },
    {
      question: "¿Cuántas tarjetas de débito puedo solicitar?",
      answer: "Podés solicitar una tarjeta titular y hasta 3 tarjetas adicionales para familiares directos.",
    },
    {
      question: "¿Cómo puedo realizar extracciones en el exterior?",
      answer:
        "Podés realizar extracciones en el exterior con tu tarjeta de débito en cajeros de las redes Cirrus y Maestro.",
    },
  ]

  return (
    <ProductDetailLayout
      title="Cuenta Única"
      description="Cuenta multimoneda con tarjeta de débito y acceso a todos los canales digitales."
      category="Cuentas"
      categoryPath="/productos/cuentas"
      features={features}
      benefits={benefits}
      requirements={requirements}
      faqs={faqs}
      image="/productos/cuenta-unica.jpg"
      ctaText="Abrir una cuenta"
      ctaLink="/contacto"
    />
  )
}
