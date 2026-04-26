import SegmentLayout from "@/components/segment-layout"

export const metadata = {
  title: "PyMEs y Comercios | NOA BANK",
  description: "Impulsamos el crecimiento de tu negocio con soluciones a medida.",
}

export default function PymesPage() {
  const products = [
    {
      title: "Cuenta Corriente",
      description: "Ideal para empresas con acuerdo de sobregiro y chequera.",
      icon: "/icons/cuenta-corriente.svg",
      link: "/productos/cuenta-corriente",
    },
    {
      title: "Préstamo PyME",
      description: "Capital de trabajo e inversión para el crecimiento de tu negocio.",
      icon: "/icons/prestamo-pyme.svg",
      link: "/productos/prestamo-pyme",
    },
    {
      title: "Medios de Pago",
      description: "Soluciones para recibir pagos con tarjetas y otros medios electrónicos.",
      icon: "/icons/medios-pago.svg",
      link: "/pymes/pagos",
    },
    {
      title: "Pago a Proveedores",
      description: "Gestión eficiente de pagos a proveedores y empleados.",
      icon: "/icons/pagos.svg",
      link: "/pymes/pagos",
    },
    {
      title: "Comercio Exterior",
      description: "Soluciones para importación, exportación y pagos internacionales.",
      icon: "/icons/comercio-exterior.svg",
      link: "/pymes/comercio-exterior",
    },
    {
      title: "Seguros para PyMEs",
      description: "Protección integral para tu negocio y empleados.",
      icon: "/icons/seguro-empresarial.svg",
      link: "/productos/seguro-empresarial",
    },
  ]

  const features = [
    "Cuentas corrientes comerciales",
    "Financiamiento para capital de trabajo",
    "Medios de pago para tu negocio",
    "Pago a proveedores y empleados",
    "Gestión de cheques y cobranzas",
    "Soluciones de comercio exterior",
    "Seguros para tu negocio",
  ]

  return (
    <SegmentLayout
      title="PyMEs y Comercios"
      description="Impulsamos el crecimiento de tu negocio con soluciones a medida."
      features={features}
      products={products}
      image="/segment-pymes.jpg"
      color="from-blue-500 to-indigo-700"
      ctaText="Contactar a un especialista"
      ctaLink="/contacto"
    />
  )
}
