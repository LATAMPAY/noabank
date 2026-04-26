import ProductCategoryLayout from "@/components/product-category-layout"

export const metadata = {
  title: "Comercio Exterior para PyMEs | NOA BANK",
  description: "Soluciones para tus operaciones internacionales.",
}

export default function ComercioExteriorPymesPage() {
  const products = [
    {
      title: "Transferencias Internacionales",
      description: "Enviá y recibí pagos desde y hacia el exterior.",
      icon: "/icons/transferencias-internacionales.svg",
      link: "/productos/transferencias-internacionales",
    },
    {
      title: "Cartas de Crédito",
      description: "Garantizá tus operaciones de comercio exterior.",
      icon: "/icons/cartas-credito.svg",
      link: "/productos/cartas-credito",
    },
    {
      title: "Financiación de Exportaciones",
      description: "Soluciones para financiar tus ventas al exterior.",
      icon: "/icons/financiacion-exportaciones.svg",
      link: "/productos/financiacion-exportaciones",
    },
    {
      title: "Cobranzas Documentarias",
      description: "Gestioná el cobro de tus exportaciones de manera segura.",
      icon: "/icons/cobranzas-documentarias.svg",
      link: "/productos/cobranzas-documentarias",
    },
  ]

  return (
    <ProductCategoryLayout
      title="Comercio Exterior para PyMEs"
      description="Soluciones para tus operaciones internacionales."
      products={products}
      categoryPath="/pymes/comercio-exterior"
    />
  )
}
