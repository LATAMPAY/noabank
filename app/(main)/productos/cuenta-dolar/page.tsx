import ProductDetailLayout from "@/components/product-detail-layout"

export const metadata = {
  title: "Cuenta Dólar | NOA BANK",
  description: "Mantené tus ahorros en dólares con seguridad y disponibilidad inmediata.",
}

export default function CuentaDolarPage() {
  const features = [
    "Cuenta en dólares estadounidenses",
    "Acceso a Home Banking y App NOA BANK",
    "Transferencias en dólares a otras cuentas",
    "Depósitos y extracciones en efectivo",
    "Compra y venta de dólares online",
    "Resumen digital de movimientos",
  ]

  const benefits = [
    "Protección de tus ahorros contra la inflación",
    "Disponibilidad inmediata de tus fondos",
    "Sin costo de mantenimiento con saldo promedio mínimo",
    "Posibilidad de vincular con inversiones en dólares",
    "Atención prioritaria para operaciones en moneda extranjera",
  ]

  const requirements = [
    "Ser mayor de 18 años",
    "DNI argentino o residencia permanente",
    "Comprobante de domicilio",
    "Comprobante de ingresos (opcional)",
    "Ser titular de una cuenta en pesos en NOA BANK",
  ]

  const faqs = [
    {
      question: "¿Puedo extraer dólares en cualquier sucursal?",
      answer:
        "Sí, podés extraer dólares en cualquier sucursal de NOA BANK, sujeto a disponibilidad. Te recomendamos consultar previamente por montos superiores a USD 1,000.",
    },
    {
      question: "¿Cómo puedo comprar dólares para acreditar en mi cuenta?",
      answer:
        "Podés comprar dólares a través de Home Banking o la App NOA BANK, seleccionando la opción 'Compra/Venta de Moneda Extranjera' y siguiendo los pasos indicados.",
    },
    {
      question: "¿Hay límites para las transferencias en dólares?",
      answer:
        "Las transferencias en dólares están sujetas a los límites establecidos por el Banco Central. Estos límites pueden variar, por lo que te recomendamos consultar la normativa vigente.",
    },
    {
      question: "¿Qué comisiones tiene la Cuenta Dólar?",
      answer:
        "La Cuenta Dólar no tiene costo de mantenimiento si mantenés un saldo promedio mensual superior a USD 500. Para otros costos y comisiones, consultá nuestro tarifario vigente.",
    },
  ]

  return (
    <ProductDetailLayout
      title="Cuenta Dólar"
      description="Mantené tus ahorros en dólares con seguridad y disponibilidad inmediata."
      category="Cuentas"
      categoryPath="/productos/cuentas"
      features={features}
      benefits={benefits}
      requirements={requirements}
      faqs={faqs}
      image="/productos/cuenta-dolar.jpg"
      ctaText="Abrir una cuenta"
      ctaLink="/contacto"
    />
  )
}
