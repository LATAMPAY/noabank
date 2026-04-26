import ProductCategoryLayout from "@/components/product-category-layout"
import { CardComparison } from "@/components/card-comparison"

export const metadata = {
  title: "Tarjetas | NOA BANK",
  description: "Descubrí nuestras tarjetas de crédito y débito con beneficios exclusivos.",
}

export default function TarjetasPage() {
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
      title: "Tarjeta Corporativa",
      description: "Control de gastos empresariales con reportes detallados.",
      icon: "/icons/tarjeta-corporativa.svg",
      link: "/productos/tarjeta-corporativa",
    },
    {
      title: "Tarjeta Agro",
      description: "Beneficios exclusivos para productores agropecuarios.",
      icon: "/icons/tarjeta-agro.svg",
      link: "/productos/tarjeta-agro",
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
    <>
      <ProductCategoryLayout
        title="Tarjetas"
        description="Descubrí nuestras tarjetas de crédito y débito con beneficios exclusivos."
        products={products}
        categoryPath="/productos/tarjetas"
      />
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Comparador de Tarjetas</h2>
        <CardComparison />
      </section>
    </>
  )
}
