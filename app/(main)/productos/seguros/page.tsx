import ProductCategoryLayout from "@/components/product-category-layout"

export const metadata = {
  title: "Seguros | NOA BANK",
  description: "Protección integral para vos, tu familia y tu patrimonio.",
}

export default function SegurosPage() {
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
      title: "Seguro Agrícola",
      description: "Protección contra riesgos climáticos para tus cultivos.",
      icon: "/icons/seguro-agricola.svg",
      link: "/productos/seguro-agricola",
    },
    {
      title: "Seguro Empresarial",
      description: "Soluciones integrales para proteger tu negocio.",
      icon: "/icons/seguro-empresarial.svg",
      link: "/productos/seguro-empresarial",
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
      title="Seguros"
      description="Protección integral para vos, tu familia y tu patrimonio."
      products={products}
      categoryPath="/productos/seguros"
    />
  )
}
