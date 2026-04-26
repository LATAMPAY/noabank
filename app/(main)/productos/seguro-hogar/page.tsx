import ProductDetailLayout from "@/components/product-detail-layout"

export const metadata = {
  title: "Seguro de Hogar | NOA BANK",
  description: "Cobertura completa para tu casa y tus bienes.",
}

export default function SeguroHogarPage() {
  const features = [
    "Cobertura contra incendio, robo y hurto",
    "Protección ante daños por fenómenos naturales",
    "Responsabilidad civil ante terceros",
    "Asistencia domiciliaria 24/7",
    "Reposición a nuevo de bienes dañados",
    "Planes flexibles según tus necesidades",
  ]

  const benefits = [
    "Tranquilidad para vos y tu familia",
    "Primas accesibles con descuento en débito automático",
    "Cobertura inmediata desde la contratación",
    "Atención prioritaria en caso de siniestros",
    "Gestión de reclamos 100% digital",
  ]

  const requirements = [
    "Ser propietario o inquilino de la vivienda a asegurar",
    "Vivienda de uso particular (no comercial)",
    "Construcción de material (no prefabricada)",
    "Ubicación dentro de zonas asegurables",
  ]

  const faqs = [
    {
      question: "¿Qué bienes están cubiertos por el seguro?",
      answer:
        "El seguro cubre el edificio (estructura) y/o el contenido (muebles, electrodomésticos, ropa, etc.) según el plan contratado. Algunos objetos de valor como joyas, obras de arte o antigüedades pueden requerir declaración específica.",
    },
    {
      question: "¿Qué servicios incluye la asistencia domiciliaria?",
      answer:
        "La asistencia domiciliaria incluye servicios de plomería, electricidad, cerrajería, vidriería y otros oficios para emergencias en el hogar, con un número determinado de eventos sin cargo según el plan contratado.",
    },
    {
      question: "¿Cómo se determina el valor a asegurar?",
      answer:
        "El valor a asegurar debe reflejar el costo de reconstrucción del inmueble y/o el valor de reposición a nuevo del contenido. Nuestros asesores pueden ayudarte a determinar estos valores.",
    },
    {
      question: "¿Qué debo hacer en caso de siniestro?",
      answer:
        "Debés comunicarte inmediatamente con NOA BANK a través de nuestro centro de atención al cliente o la app móvil. Un asesor especializado te guiará en todo el proceso de denuncia y gestión del siniestro.",
    },
  ]

  return (
    <ProductDetailLayout
      title="Seguro de Hogar"
      description="Cobertura completa para tu casa y tus bienes."
      category="Seguros"
      categoryPath="/productos/seguros"
      features={features}
      benefits={benefits}
      requirements={requirements}
      faqs={faqs}
      image="/productos/seguro-hogar.jpg"
      ctaText="Solicitar ahora"
      ctaLink="/contacto"
    />
  )
}
