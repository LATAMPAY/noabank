import PageHeader from "@/components/page-header"

export const metadata = {
  title: "Términos y Condiciones | NOA BANK",
  description: "Términos y condiciones de uso de los servicios de NOA BANK.",
}

export default function TerminosPage() {
  return (
    <>
      <PageHeader
        title="Términos y Condiciones"
        breadcrumbs={[
          { label: "Legal", href: "/legal" },
          { label: "Términos y Condiciones", href: "/legal/terminos" },
        ]}
      />

      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="prose max-w-4xl mx-auto">
            <p className="lead">
              Los presentes Términos y Condiciones regulan el acceso y uso de los servicios ofrecidos por NOA BANK.
            </p>

            <h2>1. Aceptación de los Términos</h2>
            <p>
              Al acceder y utilizar los servicios de NOA BANK, ya sea a través de nuestro sitio web, aplicaciones
              móviles o cualquier otro medio, usted acepta estos Términos y Condiciones en su totalidad. Si no está de
              acuerdo con estos términos, por favor no utilice nuestros servicios.
            </p>

            <h2>2. Definiciones</h2>
            <p>
              En estos Términos y Condiciones, "NOA BANK", "nosotros", "nuestro" se refiere a NOA BANK S.A., una entidad
              financiera autorizada por el Banco Central de la República Argentina. "Usuario", "usted", "su" se refiere
              a cualquier persona que acceda o utilice los servicios de NOA BANK.
            </p>

            <h2>3. Servicios</h2>
            <p>
              NOA BANK ofrece diversos servicios financieros, incluyendo pero no limitado a: cuentas bancarias,
              préstamos, tarjetas de crédito y débito, inversiones, seguros y servicios de banca digital. Estos
              servicios están sujetos a términos y condiciones específicos que complementan los presentes términos
              generales.
            </p>

            <h2>4. Requisitos para el uso de los servicios</h2>
            <p>Para utilizar los servicios de NOA BANK, usted debe:</p>
            <ul>
              <li>Ser mayor de 18 años o contar con la autorización de un tutor legal.</li>
              <li>Proporcionar información personal precisa, completa y actualizada.</li>
              <li>Cumplir con los requisitos específicos para cada servicio.</li>
              <li>Aceptar los términos y condiciones específicos de cada servicio.</li>
              <li>Utilizar los servicios de acuerdo con la legislación vigente y estos términos.</li>
            </ul>

            <h2>5. Responsabilidades del usuario</h2>
            <p>Como usuario de los servicios de NOA BANK, usted se compromete a:</p>
            <ul>
              <li>Mantener la confidencialidad de sus credenciales de acceso.</li>
              <li>Notificar inmediatamente a NOA BANK sobre cualquier uso no autorizado de su cuenta.</li>
              <li>No utilizar los servicios para actividades ilegales o fraudulentas.</li>
              <li>No interferir con el funcionamiento normal de los servicios.</li>
              <li>Cumplir con todas las leyes y regulaciones aplicables.</li>
            </ul>

            <h2>6. Propiedad intelectual</h2>
            <p>
              Todos los derechos de propiedad intelectual relacionados con los servicios de NOA BANK, incluyendo pero no
              limitado a marcas, logotipos, diseños, textos, gráficos, software y contenido, son propiedad de NOA BANK o
              de sus licenciantes. Estos derechos están protegidos por las leyes de propiedad intelectual.
            </p>

            <h2>7. Privacidad y protección de datos</h2>
            <p>
              NOA BANK se compromete a proteger la privacidad y los datos personales de sus usuarios de acuerdo con la
              legislación vigente. Para más información sobre cómo recopilamos, utilizamos y protegemos sus datos,
              consulte nuestra Política de Privacidad.
            </p>

            <h2>8. Limitación de responsabilidad</h2>
            <p>
              NOA BANK no será responsable por daños indirectos, incidentales, especiales, punitivos o consecuentes que
              resulten del uso o la imposibilidad de usar nuestros servicios, incluso si hemos sido advertidos de la
              posibilidad de tales daños.
            </p>

            <h2>9. Modificaciones</h2>
            <p>
              NOA BANK se reserva el derecho de modificar estos Términos y Condiciones en cualquier momento. Las
              modificaciones entrarán en vigor inmediatamente después de su publicación en nuestro sitio web o
              aplicaciones. El uso continuado de nuestros servicios después de la publicación de las modificaciones
              constituye la aceptación de las mismas.
            </p>

            <h2>10. Ley aplicable y jurisdicción</h2>
            <p>
              Estos Términos y Condiciones se rigen por las leyes de la República Argentina. Cualquier disputa
              relacionada con estos términos será sometida a la jurisdicción exclusiva de los tribunales competentes de
              la Ciudad Autónoma de Buenos Aires.
            </p>

            <h2>11. Contacto</h2>
            <p>
              Si tiene alguna pregunta sobre estos Términos y Condiciones, puede contactarnos a través de los canales de
              atención al cliente disponibles en nuestro sitio web o aplicaciones.
            </p>

            <p className="text-sm text-muted-foreground mt-8">Última actualización: 10 de abril de 2025</p>
          </div>
        </div>
      </section>
    </>
  )
}
