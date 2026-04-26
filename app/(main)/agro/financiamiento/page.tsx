import ProductCategoryLayout from "@/components/product-category-layout"

export const metadata = {
  title: "Financiamiento Agropecuario | NOA BANK",
  description: "Soluciones financieras específicas para el sector agropecuario.",
}

export default function FinanciamientoAgroPage() {
  const products = [
    {
      title: "Préstamo Agro",
      description: "Financiamiento especializado para el sector agropecuario.",
      icon: "/icons/prestamo-agro.svg",
      link: "/productos/prestamo-agro",
    },
    {
      title: "Financiamiento para Siembra",
      description: "Préstamos adaptados al ciclo productivo agrícola.",
      icon: "/icons/financiamiento-siembra.svg",
      link: "/productos/financiamiento-siembra",
    },
    {
      title: "Leasing de Maquinaria",
      description: "Adquirí equipamiento agrícola con ventajas impositivas.",
      icon: "/icons/leasing.svg",
      link: "/productos/leasing-maquinaria",
    },
    {
      title: "Financiamiento para Inversiones",
      description: "Soluciones para proyectos de infraestructura y tecnología agrícola.",
      icon: "/icons/financiamiento-inversiones.svg",
      link: "/productos/financiamiento-inversiones-agro",
    },
  ]

  return (
    <ProductCategoryLayout
      title="Financiamiento Agropecuario"
      description="Soluciones financieras específicas para el sector agropecuario."
      products={products}
      categoryPath="/agro/financiamiento"
    />
  )
}
