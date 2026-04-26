import ProductDetailLayout from "@/components/product-detail-layout"

export const metadata = {
  title: "Seguro Empresarial | NOA BANK",
  description: "Soluciones integrales para proteger tu negocio.",
}

export default function SeguroEmpresarialPage() {
  const features = [
    "Cobertura integral para instalaciones y bienes",
    "Protección ante interrupción del negocio",
    "Responsabilidad civil empresarial",
    "Seguro para empleados y directivos",
    "Cobertura contra riesgos cibernéticos",
    "Planes personalizados según el tipo de negocio",
  ]

  const benefits = [
    "Protección integral para la continuidad de tu empresa",
    "Asesoramiento especializado en gestión de riesgos",
    "Primas competitivas con opciones de financiamiento",
    "Atención prioritaria en caso de siniestros",
    "Gestión de reclamos con ejecutivo dedicado",
  ]

  const requirements = [
    "Empresa legalmente constituida",
    "Documentación legal y contable actualizada",
    "Información detallada sobre instalaciones y bienes a asegurar",
    "Historial de siniestralidad (si existe)",
    "Medidas de seguridad implementadas",
  ]

  const faqs = [
    {
      question: "¿Qué cubre el seguro por interrupción del negocio?",
      answer:
        "Este seguro cubre las pérdidas económicas derivadas de la paralización total o parcial de la actividad empresarial debido a un siniestro cubierto, incluyendo gastos fijos, utilidades no percibidas y gastos extraordinarios para minimizar el impacto.",
    },
    {
      question: "¿Qué tipos de responsabilidad civil están cubiertos?",
      answer:
        "La cobertura incluye responsabilidad civil por daños a terceros, productos defectuosos, operaciones comerciales, patronal (accidentes laborales) y profesional, según el plan contratado y la actividad de la empresa.",
    },
    {
      question: "¿En qué consiste la cobertura contra riesgos cibernéticos?",
      answer:
        "Esta cobertura protege contra pérdidas financieras, responsabilidades y costos asociados con ataques cibernéticos, violaciones de datos, ransomware y otras amenazas digitales, incluyendo gastos de recuperación y notificación a afectados.",
    },
    {
      question: "¿Cómo se adapta el seguro al crecimiento de mi empresa?",
      answer:
        "Nuestros seguros empresariales son flexibles y pueden ajustarse periódicamente según el crecimiento y evolución de tu negocio, permitiendo modificar coberturas, sumas aseguradas y agregar nuevas ubicaciones o actividades.",
    },
  ]

  return (
    <ProductDetailLayout
      title="Seguro Empresarial"
      description="Soluciones integrales para proteger tu negocio."
      category="Seguros"
      categoryPath="/productos/seguros"
      features={features}
      benefits={benefits}
      requirements={requirements}
      faqs={faqs}
      image="/productos/seguro-empresarial.jpg"
      ctaText="Solicitar ahora"
      ctaLink="/contacto"
    />
  )
}
