import SegmentLayout from "@/components/segment-layout"

export const metadata = {
  title: "Empresas e Industrias | NOA BANK",
  description: "Servicios corporativos para optimizar la gestión financiera de tu empresa.",
}

export default function EmpresasPage() {
  const products = [
    {
      title: "Banca Corporativa",
      description: "Soluciones financieras integrales para grandes empresas.",
      icon: "/icons/banca-corporativa.svg",
      link: "/empresas/corporativa",
    },
    {
      title: "Cash Management",
      description: "Gestión eficiente de la tesorería de tu empresa.",
      icon: "/icons/cash-management.svg",
      link: "/empresas/cash-management",
    },
    {
      title: "Financiamiento Estructurado",
      description: "Soluciones de financiamiento adaptadas a proyectos complejos.",
      icon: "/icons/financiamiento.svg",
      link: "/empresas/financiamiento",
    },
    {
      title: "Comercio Exterior",
      description: "Apoyo integral para tus operaciones internacionales.",
      icon: "/icons/comercio-exterior.svg",
      link: "/empresas/comercio-exterior",
    },
    {
      title: "Tarjeta Corporativa",
      description: "Control de gastos empresariales con reportes detallados.",
      icon: "/icons/tarjeta-corporativa.svg",
      link: "/productos/tarjeta-corporativa",
    },
    {
      title: "Inversiones Corporativas",
      description: "Opciones de inversión para optimizar los excedentes de liquidez.",
      icon: "/icons/inversiones-corporativas.svg",
      link: "/empresas/financiamiento",
    },
  ]

  const features = [
    "Cash management",
    "Financiamiento estructurado",
    "Comercio exterior",
    "Inversiones corporativas",
    "Banca de inversión",
    "Gestión de pagos y cobranzas",
    "Soluciones para la cadena de valor",
  ]

  return (
    <SegmentLayout
      title="Empresas e Industrias"
      description="Servicios corporativos para optimizar la gestión financiera de tu empresa."
      features={features}
      products={products}
      image="/segment-empresas.jpg"
      color="from-indigo-500 to-purple-700"
      ctaText="Solicitar asesoramiento"
      ctaLink="/contacto"
    />
  )
}
