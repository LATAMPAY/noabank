import ProductCategoryLayout from "@/components/product-category-layout"

export const metadata = {
  title: "Financiamiento para PyMEs | NOA BANK",
  description: "Soluciones de financiamiento para el crecimiento de tu negocio.",
}

export default function FinanciamientoPymesPage() {
  const products = [
    {
      title: "Préstamo PyME",
      description: "Capital de trabajo e inversión para el crecimiento de tu negocio.",
      icon: "/icons/prestamo-pyme.svg",
      link: "/productos/prestamo-pyme",
    },
    {
      title: "Descuento de Cheques",
      description: "Adelantá el cobro de tus cheques y mejorá tu flujo de caja.",
      icon: "/icons/descuento-cheques.svg",
      link: "/productos/descuento-cheques",
    },
    {
      title: "Leasing",
      description: "Adquirí bienes de capital con ventajas impositivas.",
      icon: "/icons/leasing.svg",
      link: "/productos/leasing",
    },
    {
      title: "Financiación de Importaciones",
      description: "Soluciones para financiar tus operaciones de comercio exterior.",
      icon: "/icons/financiacion-importaciones.svg",
      link: "/productos/financiacion-importaciones",
    },
  ]

  return (
    <ProductCategoryLayout
      title="Financiamiento para PyMEs"
      description="Soluciones de financiamiento para el crecimiento de tu negocio."
      products={products}
      categoryPath="/pymes/financiamiento"
    />
  )
}
