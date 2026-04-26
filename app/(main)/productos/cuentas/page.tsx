import ProductCategoryLayout from "@/components/product-category-layout"

export const metadata = {
  title: "Cuentas | NOA BANK",
  description: "Descubrí nuestras opciones de cuentas diseñadas para satisfacer tus necesidades financieras.",
}

export default function CuentasPage() {
  const products = [
    {
      title: "Cuenta Única",
      description: "Cuenta multimoneda con tarjeta de débito y acceso a todos los canales digitales.",
      icon: "/icons/cuenta.svg",
      link: "/productos/cuenta-unica",
    },
    {
      title: "Cuenta Corriente",
      description: "Ideal para empresas con acuerdo de sobregiro y chequera.",
      icon: "/icons/cuenta-corriente.svg",
      link: "/productos/cuenta-corriente",
    },
    {
      title: "Cuenta Sueldo",
      description: "Sin costo de mantenimiento y beneficios exclusivos para empleados.",
      icon: "/icons/cuenta-sueldo.svg",
      link: "/productos/cuenta-sueldo",
    },
    {
      title: "Cuenta Dólar",
      description: "Mantené tus ahorros en dólares con seguridad y disponibilidad inmediata.",
      icon: "/icons/cuenta-dolar.svg",
      link: "/productos/cuenta-dolar",
    },
    {
      title: "Cuenta Joven",
      description: "Diseñada para jóvenes de 13 a 25 años con beneficios exclusivos.",
      icon: "/icons/cuenta-joven.svg",
      link: "/productos/cuenta-joven",
    },
    {
      title: "Cuenta Jubilados",
      description: "Beneficios especiales para jubilados y pensionados.",
      icon: "/icons/cuenta-jubilados.svg",
      link: "/productos/cuenta-jubilados",
    },
  ]

  return (
    <ProductCategoryLayout
      title="Cuentas"
      description="Descubrí nuestras opciones de cuentas diseñadas para satisfacer tus necesidades financieras."
      products={products}
      categoryPath="/productos/cuentas"
    />
  )
}
