import ProductDetailLayout from "@/components/product-detail-layout"

export const metadata = {
  title: "Cuenta Sueldo | NOA BANK",
  description: "Sin costo de mantenimiento y beneficios exclusivos para empleados.",
}

export default function CuentaSueldoPage() {
  const features = [
    "Cuenta en pesos sin costo de mantenimiento",
    "Tarjeta de débito sin costo de emisión",
    "Acceso a Home Banking y App NOA BANK",
    "Transferencias inmediatas 24/7",
    "Extracciones sin costo en cajeros de la red",
    "Pago de servicios y recargas",
  ]

  const benefits = [
    "Sin costo de mantenimiento de por vida",
    "Descuentos exclusivos en comercios adheridos",
    "Programa de beneficios NOA Rewards",
    "Acceso a préstamos personales con tasa preferencial",
    "Promociones especiales en fechas destacadas",
  ]

  const requirements = [
    "Ser mayor de 18 años",
    "DNI argentino o residencia permanente",
    "Estar en relación de dependencia",
    "Empleador adherido al sistema de pago de haberes de NOA BANK",
  ]

  const faqs = [
    {
      question: "¿Qué pasa si dejo de cobrar mi sueldo en esta cuenta?",
      answer:
        "Si dejás de percibir tu sueldo en la cuenta por más de 60 días, la misma se convertirá automáticamente en una Cuenta Única con los costos asociados a ese producto.",
    },
    {
      question: "¿Puedo tener una tarjeta adicional para un familiar?",
      answer:
        "Sí, podés solicitar una tarjeta de débito adicional para tu cónyuge o conviviente presentando la documentación correspondiente.",
    },
    {
      question: "¿Cómo accedo a los descuentos y beneficios?",
      answer:
        "Los descuentos se aplican automáticamente al pagar con tu tarjeta de débito en los comercios adheridos. Podés consultar todos los beneficios disponibles en la sección 'Beneficios' de nuestra app.",
    },
    {
      question: "¿Puedo abrir una Cuenta Sueldo si soy monotributista?",
      answer:
        "La Cuenta Sueldo está diseñada específicamente para trabajadores en relación de dependencia. Si sos monotributista, te recomendamos nuestra Cuenta Única que se adapta mejor a tus necesidades.",
    },
  ]

  return (
    <ProductDetailLayout
      title="Cuenta Sueldo"
      description="Sin costo de mantenimiento y beneficios exclusivos para empleados."
      category="Cuentas"
      categoryPath="/productos/cuentas"
      features={features}
      benefits={benefits}
      requirements={requirements}
      faqs={faqs}
      image="/productos/cuenta-sueldo.jpg"
      ctaText="Abrir una cuenta"
      ctaLink="/contacto"
    />
  )
}
