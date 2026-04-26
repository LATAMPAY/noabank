import ProductCategoryLayout from "@/components/product-category-layout"

export const metadata = {
  title: "Medios de Pago para PyMEs | NOA BANK",
  description: "Soluciones para recibir pagos y gestionar tus cobros de manera eficiente.",
}

export default function PagosPymesPage() {
  const products = [
    {
      title: "Terminal POS",
      description: "Aceptá pagos con tarjetas de débito y crédito en tu negocio.",
      icon: "/icons/terminal-pos.svg",
      link: "/productos/terminal-pos",
    },
    {
      title: "Pago a Proveedores",
      description: "Automatizá y optimizá el pago a tus proveedores.",
      icon: "/icons/pagos.svg",
      link: "/productos/pago-proveedores",
    },
    {
      title: "Pago de Sueldos",
      description: "Gestioná el pago de haberes de manera simple y segura.",
      icon: "/icons/pago-sueldos.svg",
      link: "/productos/pago-sueldos",
    },
    {
      title: "Cobranzas Digitales",
      description: "Recibí pagos online y a través de códigos QR.",
      icon: "/icons/cobranzas-digitales.svg",
      link: "/productos/cobranzas-digitales",
    },
  ]

  return (
    <ProductCategoryLayout
      title="Medios de Pago para PyMEs"
      description="Soluciones para recibir pagos y gestionar tus cobros de manera eficiente."
      products={products}
      categoryPath="/pymes/pagos"
    />
  )
}
