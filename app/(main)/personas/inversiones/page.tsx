import ProductCategoryLayout from "@/components/product-category-layout"

export const metadata = {
  title: "Inversiones Personales | NOA BANK",
  description: "Hacé crecer tu dinero con nuestras opciones de inversión.",
}

export default function InversionesPersonalesPage() {
  const products = [
    {
      title: "Plazo Fijo",
      description: "Inversión tradicional con tasa garantizada.",
      icon: "/icons/plazo-fijo.svg",
      link: "/productos/plazo-fijo",
    },
    {
      title: "Fondos Comunes de Inversión",
      description: "Diversificá tu cartera con diferentes perfiles de riesgo.",
      icon: "/icons/fondos-inversion.svg",
      link: "/productos/fondos-inversion",
    },
    {
      title: "Compra de Moneda Extranjera",
      description: "Adquirí dólares de manera simple y segura.",
      icon: "/icons/moneda-extranjera.svg",
      link: "/productos/moneda-extranjera",
    },
    {
      title: "Bonos y Títulos",
      description: "Invertí en instrumentos de renta fija y variable.",
      icon: "/icons/bonos.svg",
      link: "/productos/bonos",
    },
  ]

  return (
    <ProductCategoryLayout
      title="Inversiones Personales"
      description="Hacé crecer tu dinero con nuestras opciones de inversión."
      products={products}
      categoryPath="/personas/inversiones"
    />
  )
}
