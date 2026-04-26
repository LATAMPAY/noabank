import ProductDetailLayout from "@/components/product-detail-layout"

export const metadata = {
  title: "Seguro de Vida | NOA BANK",
  description: "Protección para vos y tu familia ante cualquier imprevisto.",
}

export default function SeguroVidaPage() {
  const features = [
    "Cobertura por fallecimiento por cualquier causa",
    "Indemnización por invalidez total y permanente",
    "Cobertura adicional por enfermedades graves",
    "Asistencia médica telefónica 24/7",
    "Trámites simplificados para beneficiarios",
    "Planes flexibles según tus necesidades",
  ]

  const benefits = [
    "Tranquilidad para vos y protección económica para tu familia",
    "Primas accesibles con descuento en débito automático",
    "Cobertura inmediata desde la contratación",
    "Posibilidad de aumentar la suma asegurada en momentos clave",
    "Deducción impositiva en Ganancias",
  ]

  const requirements = [
    "Ser mayor de 18 años y menor de 65 años",
    "DNI argentino o residencia permanente",
    "Completar declaración jurada de salud",
    "Exámenes médicos según edad y suma asegurada (pueden ser requeridos)",
  ]

  const faqs = [
    {
      question: "¿Quiénes pueden ser beneficiarios de mi seguro de vida?",
      answer:
        "Podés designar como beneficiarios a cualquier persona física o jurídica. Si no designás beneficiarios, la indemnización se pagará a tus herederos legales.",
    },
    {
      question: "¿Qué enfermedades graves cubre el seguro?",
      answer:
        "La cobertura adicional incluye enfermedades como cáncer, infarto agudo de miocardio, accidente cerebrovascular, insuficiencia renal crónica y otras patologías graves según el plan contratado.",
    },
    {
      question: "¿Puedo modificar la suma asegurada con el tiempo?",
      answer:
        "Sí, podés solicitar el aumento o disminución de la suma asegurada en cualquier momento, sujeto a evaluación en caso de aumento.",
    },
    {
      question: "¿Qué deben hacer mis beneficiarios en caso de siniestro?",
      answer:
        "Tus beneficiarios deben comunicarse con NOA BANK a través de nuestro centro de atención al cliente. Un asesor especializado los guiará en todo el proceso de presentación de documentación y cobro de la indemnización.",
    },
  ]

  return (
    <ProductDetailLayout
      title="Seguro de Vida"
      description="Protección para vos y tu familia ante cualquier imprevisto."
      category="Seguros"
      categoryPath="/productos/seguros"
      features={features}
      benefits={benefits}
      requirements={requirements}
      faqs={faqs}
      image="/productos/seguro-vida.jpg"
      ctaText="Solicitar ahora"
      ctaLink="/contacto"
    />
  )
}
