import ProductCategoryLayout from "@/components/product-category-layout"

export const metadata = {
  title: "Seguros Personales | NOA BANK",
  description: "Protección integral para vos y tu familia.",
}

export default function SegurosPersonalesPage() {
  const products = [
    {
      title: "Seguro de Vida",
      description: "Protección para vos y tu familia ante cualquier imprevisto.",
      icon: "/icons/seguro-vida.svg",
      link: "/productos/seguro-vida",
    },
    {
      title: "Seguro de Hogar",
      description: "Cobertura completa para tu casa y tus bienes.",
      icon: "/icons/seguro-hogar.svg",
      link: "/productos/seguro-hogar",
    },
    {
      title: "Seguro Automotor",
      description: "Cobertura para tu vehículo con asistencia 24/7.",
      icon: "/icons/seguro-automotor.svg",
      link: "/productos/seguro-automotor",
    },
    {
      title: "Seguro de Accidentes Personales",
      description: "Protección ante accidentes con cobertura médica y económica.",
      icon: "/icons/seguro-accidentes.svg",
      link: "/productos/seguro-accidentes",
    },
  ]

  return (
    <ProductCategoryLayout
      title="Seguros Personales"
      description="Protección integral para vos y tu familia."
      products={products}
      categoryPath="/personas/seguros"
    />
  )
}
