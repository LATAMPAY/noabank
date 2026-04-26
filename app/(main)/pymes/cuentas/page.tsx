import ProductCategoryLayout from "@/components/product-category-layout"

export const metadata = {
  title: "Cuentas para PyMEs | NOA BANK",
  description: "Soluciones financieras para la gestión eficiente de tu negocio.",
}

export default function CuentasPymesPage() {
  const products = [
    {
      title: "Cuenta Corriente",
      description: "Ideal para empresas con acuerdo de sobregiro y chequera.",
      icon: "/icons/cuenta-corriente.svg",
      link: "/productos/cuenta-corriente",
    },
    {
      title: "Cuenta Comercial",
      description: "Diseñada para las operaciones diarias de tu negocio.",
      icon: "/icons/cuenta-comercial.svg",
      link: "/productos/cuenta-comercial",
    },
    {
      title: "Cuenta Dólar Comercial",
      description: "Para operaciones en moneda extranjera y comercio exterior.",
      icon: "/icons/cuenta-dolar.svg",
      link: "/productos/cuenta-dolar-comercial",
    },
    {
      title: "Cuenta Recaudadora",
      description: "Optimizá la gestión de cobranzas de tu negocio.",
      icon: "/icons/cuenta-recaudadora.svg",
      link: "/productos/cuenta-recaudadora",
    },
  ]

  return (
    <ProductCategoryLayout
      title="Cuentas para PyMEs"
      description="Soluciones financieras para la gestión eficiente de tu negocio."
      products={products}
      categoryPath="/pymes/cuentas"
    />
  )
}
