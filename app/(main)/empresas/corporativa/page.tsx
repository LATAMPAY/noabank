import ProductCategoryLayout from "@/components/product-category-layout"

export const metadata = {
  title: "Banca Corporativa | NOA BANK",
  description: "Soluciones financieras integrales para grandes empresas.",
}

export default function CorporativaPage() {
  const products = [
    {
      title: "Cuenta Corporativa",
      description: "Diseñada para las necesidades específicas de grandes empresas.",
      icon: "/icons/cuenta-corporativa.svg",
      link: "/productos/cuenta-corporativa",
    },
    {
      title: "Financiamiento Estructurado",
      description: "Soluciones de financiamiento adaptadas a proyectos complejos.",
      icon: "/icons/financiamiento.svg",
      link: "/empresas/financiamiento",
    },
    {
      title: "Banca de Inversión",
      description: "Asesoramiento especializado para operaciones de mercado de capitales.",
      icon: "/icons/banca-inversion.svg",
      link: "/productos/banca-inversion",
    },
    {
      title: "Servicios Fiduciarios",
      description: "Administración de fideicomisos y estructuras financieras complejas.",
      icon: "/icons/servicios-fiduciarios.svg",
      link: "/productos/servicios-fiduciarios",
    },
  ]

  return (
    <ProductCategoryLayout
      title="Banca Corporativa"
      description="Soluciones financieras integrales para grandes empresas."
      products={products}
      categoryPath="/empresas/corporativa"
    />
  )
}
