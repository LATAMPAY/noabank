import SegmentLayout from "@/components/segment-layout"

export const metadata = {
  title: "Banca Personal | NOA BANK",
  description: "Soluciones financieras para tu vida diaria y proyectos personales.",
}

export default function PersonasPage() {
  const products = [
    {
      title: "Cuenta Única",
      description: "Cuenta multimoneda con tarjeta de débito y acceso a todos los canales digitales.",
      icon: "/icons/cuenta.svg",
      link: "/productos/cuenta-unica",
    },
    {
      title: "Préstamo Personal",
      description: "Financiamiento rápido para tus proyectos personales.",
      icon: "/icons/prestamo-personal.svg",
      link: "/productos/prestamo-personal",
    },
    {
      title: "Tarjeta de Crédito",
      description: "Múltiples beneficios, cuotas sin interés y programa de puntos.",
      icon: "/icons/tarjeta-credito.svg",
      link: "/productos/tarjeta-credito",
    },
    {
      title: "Seguro de Vida",
      description: "Protección para vos y tu familia ante cualquier imprevisto.",
      icon: "/icons/seguro-vida.svg",
      link: "/productos/seguro-vida",
    },
    {
      title: "Inversiones",
      description: "Hacé crecer tu dinero con nuestras opciones de inversión.",
      icon: "/icons/inversiones.svg",
      link: "/personas/inversiones",
    },
    {
      title: "Préstamo Hipotecario",
      description: "Hacé realidad el sueño de tu casa propia con nuestras opciones de financiamiento.",
      icon: "/icons/prestamo-hipotecario.svg",
      link: "/productos/prestamo-hipotecario",
    },
  ]

  const features = [
    "Cuentas de ahorro en pesos y dólares",
    "Préstamos personales y hipotecarios",
    "Tarjetas de crédito y débito",
    "Seguros para vos y tu familia",
    "Inversiones a plazo fijo",
    "Atención personalizada en sucursales y canales digitales",
    "App móvil para gestionar tus finanzas desde cualquier lugar",
  ]

  return (
    <SegmentLayout
      title="Banca Personal"
      description="Soluciones financieras para tu vida diaria y proyectos personales."
      features={features}
      products={products}
      image="/segment-personas.jpg"
      color="from-sky-500 to-blue-700"
      ctaText="Abrir una cuenta"
      ctaLink="/contacto"
    />
  )
}
