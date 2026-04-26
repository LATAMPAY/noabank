import ProductCategoryLayout from "@/components/product-category-layout"

export const metadata = {
  title: "Financiamiento Empresarial | NOA BANK",
  description: "Soluciones de financiamiento para grandes empresas e industrias.",
}

export default function FinanciamientoEmpresasPage() {
  const products = [
    {
      title: "Préstamos Corporativos",
      description: "Financiamiento a medida para grandes empresas.",
      icon: "/icons/prestamos-corporativos.svg",
      link: "/productos/prestamos-corporativos",
    },
    {
      title: "Financiamiento de Proyectos",
      description: "Soluciones para el desarrollo de proyectos de infraestructura y energía.",
      icon: "/icons/financiamiento-proyectos.svg",
      link: "/productos/financiamiento-proyectos",
    },
    {
      title: "Leasing Corporativo",
      description: "Adquisición de bienes de capital con ventajas fiscales.",
      icon: "/icons/leasing-corporativo.svg",
      link: "/productos/leasing-corporativo",
    },
    {
      title: "Líneas de Crédito Sindicadas",
      description: "Financiamiento estructurado para grandes operaciones.",
      icon: "/icons/credito-sindicado.svg",
      link: "/productos/credito-sindicado",
    },
  ]

  return (
    <ProductCategoryLayout
      title="Financiamiento Empresarial"
      description="Soluciones de financiamiento para grandes empresas e industrias."
      products={products}
      categoryPath="/empresas/financiamiento"
    />
  )
}
