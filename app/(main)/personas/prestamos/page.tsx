import ProductCategoryLayout from "@/components/product-category-layout"

export const metadata = {
  title: "Préstamos Personales | NOA BANK",
  description: "Soluciones de financiamiento para tus proyectos personales.",
}

export default function PrestamosPersonalesPage() {
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
      title: "Préstamo Automotor",
      description: "Financiá la compra de tu vehículo nuevo o usado.",
      icon: "/icons/prestamo-automotor.svg",
      link: "/productos/prestamo-automotor",
    },
    {
      title: "Préstamo Educativo",
      description: "Invertí en tu futuro con financiamiento para estudios.",
      icon: "/icons/prestamo-educativo.svg",
      link: "/productos/prestamo-educativo",
    },
  ]

  return (
    <ProductCategoryLayout
      title="Préstamos Personales"
      description="Soluciones de financiamiento para tus proyectos personales."
      products={products}
      categoryPath="/personas/prestamos"
    />
  )
}
