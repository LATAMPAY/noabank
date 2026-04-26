import ProductDetailLayout from "@/components/product-detail-layout"

export const metadata = {
  title: "Cuenta Corriente | NOA BANK",
  description: "Ideal para empresas con acuerdo de sobregiro y chequera.",
}

export default function CuentaCorrientePage() {
  const features = [
    "Cuenta en pesos con acuerdo de sobregiro",
    "Chequera sin costo de emisión",
    "Acceso a Home Banking y App NOA BANK",
    "Transferencias inmediatas 24/7",
    "Pago a proveedores y empleados",
    "Gestión de cobranzas",
  ]

  const benefits = [
    "Flexibilidad para manejar el flujo de caja de tu negocio",
    "Descuentos en comisiones por volumen de operaciones",
    "Programa de beneficios NOA Rewards para empresas",
    "Atención prioritaria en sucursales",
    "Ejecutivo de cuenta asignado",
  ]

  const requirements = [
    "Ser persona jurídica o física con actividad comercial",
    "Documentación legal de la empresa o actividad",
    "Declaraciones juradas de impuestos",
    "Comprobante de domicilio comercial",
    "Facturación mínima según segmento",
  ]

  const faqs = [
    {
      question: "¿Cuál es el costo de mantenimiento de la Cuenta Corriente?",
      answer:
        "El costo de mantenimiento varía según el segmento de cliente y el volumen de operaciones. Consultá con un ejecutivo para conocer las condiciones específicas para tu empresa.",
    },
    {
      question: "¿Cómo se determina el límite de sobregiro?",
      answer:
        "El límite de sobregiro se establece en función de la facturación, historial crediticio y antigüedad de la empresa. Se evalúa caso por caso y puede revisarse periódicamente.",
    },
    {
      question: "¿Puedo solicitar chequeras adicionales?",
      answer:
        "Sí, podés solicitar chequeras adicionales a través de Home Banking, la App NOA BANK o en cualquier sucursal.",
    },
    {
      question: "¿La cuenta permite realizar operaciones en moneda extranjera?",
      answer:
        "La Cuenta Corriente opera en pesos. Para operaciones en moneda extranjera, te recomendamos complementarla con nuestra Cuenta Dólar Comercial.",
    },
  ]

  return (
    <ProductDetailLayout
      title="Cuenta Corriente"
      description="Ideal para empresas con acuerdo de sobregiro y chequera."
      category="Cuentas"
      categoryPath="/productos/cuentas"
      features={features}
      benefits={benefits}
      requirements={requirements}
      faqs={faqs}
      image="/productos/cuenta-corriente.jpg"
      ctaText="Abrir una cuenta"
      ctaLink="/contacto"
    />
  )
}
