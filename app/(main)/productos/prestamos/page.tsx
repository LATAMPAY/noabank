import ProductCategoryLayout from "@/components/product-category-layout"

export const metadata = {
  title: "Préstamos | NOA BANK",
  description: "Soluciones de financiamiento para tus proyectos personales y profesionales.",
}

export default function PrestamosPage() {
  const products = [
    {
      title: "Préstamo Personal",
      description: "Financiamiento rápido para tus proyectos personales.",
      icon: "/icons/prestamo-personal.svg",
      link: "/productos/prestamo-personal",
    },
    {
      title: "Préstamo Hipotecario",
      description: "Hacé realidad el sueño de tu casa propia con nuestras opciones de financiamiento.",
      icon: "/icons/prestamo-hipotecario.svg",
      link: "/productos/prestamo-hipotecario",
    },
    {
      title: "Préstamo PyME",
      description: "Capital de trabajo e inversión para el crecimiento de tu negocio.",
      icon: "/icons/prestamo-pyme.svg",
      link: "/productos/prestamo-pyme",
    },
    {
      title: "Préstamo Agro",
      description: "Financiamiento especializado para el sector agropecuario.",
      icon: "/icons/prestamo-agro.svg",
      link: "/productos/prestamo-agro",
    },
    {
      title: "Préstamo Automotor",
      description: "Financiá la compra de tu vehículo nuevo o usado.",
      icon: "/icons/prestamo-automotor.svg",
      link: "/productos/prestamo-automotor",
    },
    {
      title: "Leasing",
      description: "Adquirí bienes de capital con ventajas impositivas.",
      icon: "/icons/leasing.svg",
      link: "/productos/leasing",
    },
  ]

  return (
    <ProductCategoryLayout
      title="Préstamos"
      description="Soluciones de financiamiento para tus proyectos personales y profesionales."
      products={products}
      categoryPath="/productos/prestamos"
    />
  )
}
