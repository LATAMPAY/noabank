import ProductCategoryLayout from "@/components/product-category-layout"

export const metadata = {
  title: "Comercio Exterior para Empresas | NOA BANK",
  description: "Soluciones integrales para tus operaciones internacionales.",
}

export default function ComercioExteriorEmpresasPage() {
  const products = [
    {
      title: "Financiamiento de Importaciones",
      description: "Soluciones para financiar tus compras internacionales.",
      icon: "/icons/financiacion-importaciones.svg",
      link: "/productos/financiacion-importaciones-empresas",
    },
    {
      title: "Financiamiento de Exportaciones",
      description: "Optimizá el capital de trabajo para tus ventas al exterior.",
      icon: "/icons/financiacion-exportaciones.svg",
      link: "/productos/financiacion-exportaciones-empresas",
    },
    {
      title: "Garantías Internacionales",
      description: "Respaldo para tus operaciones de comercio exterior.",
      icon: "/icons/garantias-internacionales.svg",
      link: "/productos/garantias-internacionales",
    },
    {
      title: "Cobertura de Riesgo Cambiario",
      description: "Protegé tu negocio ante fluctuaciones del tipo de cambio.",
      icon: "/icons/cobertura-cambiaria.svg",
      link: "/productos/cobertura-cambiaria",
    },
  ]

  return (
    <ProductCategoryLayout
      title="Comercio Exterior para Empresas"
      description="Soluciones integrales para tus operaciones internacionales."
      products={products}
      categoryPath="/empresas/comercio-exterior"
    />
  )
}
