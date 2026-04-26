import ProductDetailLayout from "@/components/product-detail-layout"

export const metadata = {
  title: "Tarjeta de Débito | NOA BANK",
  description: "Acceso a tu dinero en cualquier momento y lugar.",
}

export default function TarjetaDebitoPage() {
  const features = [
    "Acceso inmediato a tus fondos",
    "Aceptación en millones de comercios en todo el mundo",
    "Retiros de efectivo en cajeros automáticos",
    "Tecnología contactless para pagos rápidos",
    "Compras online seguras",
    "Control de gastos en tiempo real",
  ]

  const benefits = [
    "Sin costo de emisión para clientes NOA BANK",
    "Descuentos exclusivos en comercios adheridos",
    "Programa de cashback en compras seleccionadas",
    "Seguridad avanzada con chip y código de seguridad dinámico",
    "Notificaciones instantáneas de operaciones",
  ]

  const requirements = [
    "Ser titular de una cuenta en NOA BANK",
    "Ser mayor de 18 años",
    "DNI argentino o residencia permanente",
  ]

  const faqs = [
    {
      question: "¿Cuál es el límite diario para extracciones y compras?",
      answer:
        "El límite estándar para extracciones es de $50,000 diarios y para compras de $150,000 diarios. Estos límites pueden modificarse a través de Home Banking o la App NOA BANK según tus necesidades.",
    },
    {
      question: "¿Puedo usar mi tarjeta de débito en el exterior?",
      answer:
        "Sí, podés usar tu tarjeta de débito en comercios y cajeros automáticos de todo el mundo. Para evitar inconvenientes, te recomendamos informar previamente tu viaje a través de Home Banking o la App NOA BANK.",
    },
    {
      question: "¿Qué debo hacer si mi tarjeta es retenida por un cajero automático?",
      answer:
        "Si tu tarjeta es retenida, debés comunicarte inmediatamente con nuestro centro de atención al cliente al 0800-222-NOA (662) para bloquearla y solicitar una nueva.",
    },
    {
      question: "¿Cómo puedo cambiar el PIN de mi tarjeta de débito?",
      answer:
        "Podés cambiar el PIN de tu tarjeta de débito en cualquier cajero automático de nuestra red, o a través de Home Banking en la sección 'Tarjetas'.",
    },
  ]

  return (
    <ProductDetailLayout
      title="Tarjeta de Débito"
      description="Acceso a tu dinero en cualquier momento y lugar."
      category="Tarjetas"
      categoryPath="/productos/tarjetas"
      features={features}
      benefits={benefits}
      requirements={requirements}
      faqs={faqs}
      image="/productos/tarjeta-debito.jpg"
      ctaText="Solicitar ahora"
      ctaLink="/contacto"
    />
  )
}
