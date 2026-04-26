import ProductCategoryLayout from "@/components/product-category-layout"

export const metadata = {
  title: "Seguros Agropecuarios | NOA BANK",
  description: "Protección integral para tu producción y actividad agropecuaria.",
}

export default function SegurosAgroPage() {
  const products = [
    {
      title: "Seguro Agrícola",
      description: "Protección contra riesgos climáticos para tus cultivos.",
      icon: "/icons/seguro-agricola.svg",
      link: "/productos/seguro-agricola",
    },
    {
      title: "Seguro Ganadero",
      description: "Cobertura para tu producción ganadera.",
      icon: "/icons/seguro-ganadero.svg",
      link: "/productos/seguro-ganadero",
    },
    {
      title: "Seguro de Maquinaria",
      description: "Protección para tu equipamiento agrícola.",
      icon: "/icons/seguro-maquinaria.svg",
      link: "/productos/seguro-maquinaria",
    },
    {
      title: "Seguro de Transporte",
      description: "Cobertura para el traslado de tu producción.",
      icon: "/icons/seguro-transporte.svg",
      link: "/productos/seguro-transporte",
    },
  ]

  return (
    <ProductCategoryLayout
      title="Seguros Agropecuarios"
      description="Protección integral para tu producción y actividad agropecuaria."
      products={products}
      categoryPath="/agro/seguros"
    />
  )
}
