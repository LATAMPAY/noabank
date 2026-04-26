import ProductDetailLayout from "@/components/product-detail-layout"

export const metadata = {
  title: "Seguro Agrícola | NOA BANK",
  description: "Protección contra riesgos climáticos para tus cultivos.",
}

export default function SeguroAgricolaPage() {
  const features = [
    "Cobertura contra granizo, heladas, sequía e inundaciones",
    "Protección para diversos tipos de cultivos",
    "Indemnización por rendimiento o por hectárea",
    "Asesoramiento técnico especializado",
    "Inspección y peritaje rápido en caso de siniestro",
    "Planes adaptados a cada región productiva",
  ]

  const benefits = [
    "Protección de tu inversión agrícola",
    "Estabilidad financiera ante eventos climáticos adversos",
    "Primas accesibles con opciones de financiamiento",
    "Posibilidad de asegurar cultivos específicos o toda la explotación",
    "Integración con líneas de crédito agrícolas",
  ]

  const requirements = [
    "Ser productor agropecuario (persona física o jurídica)",
    "Documentación legal de la explotación",
    "Título de propiedad o contrato de arrendamiento",
    "Plan de siembra detallado",
    "Historial de rendimientos (recomendable)",
  ]

  const faqs = [
    {
      question: "¿Qué cultivos pueden asegurarse?",
      answer:
        "Ofrecemos cobertura para una amplia variedad de cultivos, incluyendo cereales (trigo, maíz, cebada), oleaginosas (soja, girasol), cultivos industriales (algodón, caña de azúcar), frutales y hortalizas.",
    },
    {
      question: "¿Cómo se determina la indemnización en caso de siniestro?",
      answer:
        "Dependiendo del tipo de cobertura contratada, la indemnización puede calcularse por rendimiento (comparando el rendimiento obtenido con el asegurado) o por hectárea afectada (según el daño evaluado por el perito).",
    },
    {
      question: "¿Cuándo comienza la cobertura del seguro?",
      answer:
        "La cobertura comienza desde la emergencia del cultivo y finaliza con la cosecha, según los plazos establecidos en la póliza para cada tipo de cultivo y región.",
    },
    {
      question: "¿Qué debo hacer en caso de un evento climático que afecte mis cultivos?",
      answer:
        "Debés comunicarte inmediatamente con NOA BANK a través de nuestro centro de atención al cliente o la app móvil, idealmente dentro de las 48 horas posteriores al evento. Un perito visitará tu campo para evaluar los daños.",
    },
  ]

  return (
    <ProductDetailLayout
      title="Seguro Agrícola"
      description="Protección contra riesgos climáticos para tus cultivos."
      category="Seguros"
      categoryPath="/productos/seguros"
      features={features}
      benefits={benefits}
      requirements={requirements}
      faqs={faqs}
      image="/productos/seguro-agricola.jpg"
      ctaText="Solicitar ahora"
      ctaLink="/contacto"
    />
  )
}
