import ProductCategoryLayout from "@/components/product-category-layout"

export const metadata = {
  title: "Cash Management | NOA BANK",
  description: "Gestión eficiente de la tesorería de tu empresa.",
}

export default function CashManagementPage() {
  const products = [
    {
      title: "Pagos Masivos",
      description: "Automatizá y optimizá los pagos a proveedores y empleados.",
      icon: "/icons/pagos-masivos.svg",
      link: "/productos/pagos-masivos",
    },
    {
      title: "Cobranzas Electrónicas",
      description: "Soluciones integrales para la gestión de cobranzas.",
      icon: "/icons/cobranzas-electronicas.svg",
      link: "/productos/cobranzas-electronicas",
    },
    {
      title: "Conciliación Automática",
      description: "Optimizá la conciliación de tus operaciones bancarias.",
      icon: "/icons/conciliacion.svg",
      link: "/productos/conciliacion",
    },
    {
      title: "Gestión de Liquidez",
      description: "Maximizá el rendimiento de tus excedentes de tesorería.",
      icon: "/icons/gestion-liquidez.svg",
      link: "/productos/gestion-liquidez",
    },
  ]

  return (
    <ProductCategoryLayout
      title="Cash Management"
      description="Gestión eficiente de la tesorería de tu empresa."
      products={products}
      categoryPath="/empresas/cash-management"
    />
  )
}
