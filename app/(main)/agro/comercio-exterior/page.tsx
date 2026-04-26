import ProductCategoryLayout from "@/components/product-category-layout"

export const metadata = {
  title: "Comercio Exterior Agropecuario | NOA BANK",
  description: "Soluciones para exportadores de productos agropecuarios.",
}

export default function ComercioExteriorAgroPage() {
  const products = [
    {
      title: "Financiamiento de Exportaciones",
      description: "Soluciones para financiar tus ventas al exterior.",
      icon: "/icons/financiacion-exportaciones.svg",
      link: "/productos/financiacion-exportaciones-agro",
    },
    {
      title: "Cobertura de Riesgo Cambiario",
      description: "Protegé tu negocio ante fluctuaciones del tipo de cambio.",
      icon: "/icons/cobertura-cambiaria.svg",
      link: "/productos/cobertura-cambiaria-agro",
    },
    {
      title: "Cartas de Crédito",
      description: "Garantizá tus operaciones de comercio exterior.",
      icon: "/icons/cartas-credito.svg",
      link: "/productos/cartas-credito-agro",
    },
    {
      title: "Asesoramiento en Comercio Exterior",
      description: "Consultoría especializada para tus operaciones internacionales.",
      icon: "/icons/asesoramiento-comercio.svg",
      link: "/productos/asesoramiento-comercio-agro",
    },
  ]

  return (
    <ProductCategoryLayout
      title="Comercio Exterior Agropecuario"
      description="Soluciones para exportadores de productos agropecuarios."
      products={products}
      categoryPath="/agro/comercio-exterior"
    />
  )
}
