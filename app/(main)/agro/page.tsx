import SegmentLayout from "@/components/segment-layout"

export const metadata = {
  title: "Agro | NOA BANK",
  description: "Acompañamos al campo argentino con soluciones específicas para el sector.",
}

export default function AgroPage() {
  const products = [
    {
      title: "Financiamiento para Siembra",
      description: "Préstamos adaptados al ciclo productivo agrícola.",
      icon: "/icons/prestamo-agro.svg",
      link: "/agro/financiamiento",
    },
    {
      title: "Leasing de Maquinaria",
      description: "Adquirí equipamiento agrícola con ventajas impositivas.",
      icon: "/icons/leasing.svg",
      link: "/agro/financiamiento",
    },
    {
      title: "Tarjeta Agro",
      description: "Beneficios exclusivos para productores agropecuarios.",
      icon: "/icons/tarjeta-agro.svg",
      link: "/productos/tarjeta-agro",
    },
    {
      title: "Seguro Agrícola",
      description: "Protección contra riesgos climáticos para tus cultivos.",
      icon: "/icons/seguro-agricola.svg",
      link: "/productos/seguro-agricola",
    },
    {
      title: "Comercio Exterior",
      description: "Soluciones para exportadores de productos agropecuarios.",
      icon: "/icons/comercio-exterior.svg",
      link: "/agro/comercio-exterior",
    },
    {
      title: "Inversiones",
      description: "Opciones para invertir los excedentes de tu producción.",
      icon: "/icons/inversiones.svg",
      link: "/agro/inversiones",
    },
  ]

  const features = [
    "Financiamiento para siembra y cosecha",
    "Leasing de maquinaria agrícola",
    "Seguros agrícolas",
    "Tarjeta Agro",
    "Comercio exterior para exportadores",
    "Inversiones adaptadas al sector",
    "Asesoramiento especializado en el sector agropecuario",
  ]

  return (
    <SegmentLayout
      title="Agro"
      description="Acompañamos al campo argentino con soluciones específicas para el sector."
      features={features}
      products={products}
      image="/segment-agro.jpg"
      color="from-green-500 to-emerald-700"
      ctaText="Hablar con un especialista"
      ctaLink="/contacto"
    />
  )
}
