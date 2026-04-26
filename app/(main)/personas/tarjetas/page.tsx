import ProductCategoryLayout from "@/components/product-category-layout"

export const metadata = {
  title: "Tarjetas Personales | NOA BANK",
  description: "Descubrí nuestras tarjetas con beneficios exclusivos para vos.",
}

export default function TarjetasPersonalesPage() {
  const products = [
    {
      title: "Tarjeta de Crédito",
      description: "Múltiples beneficios, cuotas sin interés y programa de puntos.",
      icon: "/icons/tarjeta-credito.svg",
      link: "/productos/tarjeta-credito",
    },
    {
      title: "Tarjeta de Débito",
      description: "Acceso a tu dinero en cualquier momento y lugar.",
      icon: "/icons/tarjeta-debito.svg",
      link: "/productos/tarjeta-debito",
    },
    {
      title: "Tarjeta Premium",
      description: "Servicios exclusivos y atención preferencial para clientes premium.",
      icon: "/icons/tarjeta-premium.svg",
      link: "/productos/tarjeta-premium",
    },
    {
      title: "Tarjeta Prepaga",
      description: "Cargá saldo y usala sin necesidad de tener una cuenta bancaria.",
      icon: "/icons/tarjeta-prepaga.svg",
      link: "/productos/tarjeta-prepaga",
    },
  ]

  return (
    <ProductCategoryLayout
      title="Tarjetas Personales"
      description="Descubrí nuestras tarjetas con beneficios exclusivos para vos."
      products={products}
      categoryPath="/personas/tarjetas"
    />
  )
}
