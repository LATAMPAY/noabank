import ProductCategoryLayout from "@/components/product-category-layout"

export const metadata = {
  title: "Inversiones Agropecuarias | NOA BANK",
  description: "Opciones para invertir los excedentes de tu producción.",
}

export default function InversionesAgroPage() {
  const products = [
    {
      title: "Plazo Fijo Agro",
      description: "Inversión tradicional con tasa preferencial para productores.",
      icon: "/icons/plazo-fijo.svg",
      link: "/productos/plazo-fijo-agro",
    },
    {
      title: "Fondos Agropecuarios",
      description: "Fondos comunes de inversión especializados en el sector.",
      icon: "/icons/fondos-inversion.svg",
      link: "/productos/fondos-agropecuarios",
    },
    {
      title: "Compra de Moneda Extranjera",
      description: "Adquirí dólares de manera simple y segura.",
      icon: "/icons/moneda-extranjera.svg",
      link: "/productos/moneda-extranjera-agro",
    },
    {
      title: "Inversiones en Commodities",
      description: "Opciones para invertir en mercados de futuros agrícolas.",
      icon: "/icons/commodities.svg",
      link: "/productos/commodities",
    },
  ]

  return (
    <ProductCategoryLayout
      title="Inversiones Agropecuarias"
      description="Opciones para invertir los excedentes de tu producción."
      products={products}
      categoryPath="/agro/inversiones"
    />
  )
}
