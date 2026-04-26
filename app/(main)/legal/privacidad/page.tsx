import PageHeader from "@/components/page-header"

export const metadata = {
  title: "Política de Privacidad | NOA BANK",
  description: "Política de privacidad y protección de datos personales de NOA BANK.",
}

export default function PrivacidadPage() {
  return (
    <>
      <PageHeader
        title="Política de Privacidad"
        breadcrumbs={[
          { label: "Legal", href: "/legal" },
          { label: "Política de Privacidad", href: "/legal/privacidad" },
        ]}
      />

      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="prose max-w-4xl mx-auto">
            <p className="lead">
              En NOA BANK nos comprometemos a proteger tu privacidad y tus datos personales. Esta política describe cómo
              recopilamos, utilizamos y protegemos tu información.
            </p>

            <h2>1. Información que recopilamos</h2>
            <p>Recopilamos diferentes tipos de información para proporcionar y mejorar nuestros servicios:</p>
            <ul>
              <li>
                <strong>Información personal:</strong> Nombre, dirección, número de documento, fecha de nacimiento,
                información de contacto.
              </li>
              <li>
                <strong>Información financiera:</strong> Ingresos, historial crediticio, transacciones, productos
                contratados.
              </li>
              <li>
                <strong>Información de uso:</strong> Cómo interactúas con nuestros servicios, preferencias,
                comportamiento en nuestro sitio web y aplicaciones.
              </li>
              <li>
                <strong>Información técnica:</strong> Dirección IP, tipo de dispositivo, navegador, sistema operativo.
              </li>
            </ul>

            <h2>2. Cómo obtenemos tu información</h2>
            <p>Obtenemos tu información a través de diferentes medios:</p>
            <ul>
              <li>Directamente de ti cuando contratas nuestros servicios o interactúas con nosotros.</li>
              <li>De terceros como burós de crédito, entidades gubernamentales o socios comerciales.</li>
              <li>
                Automáticamente a través de cookies y tecnologías similares cuando utilizas nuestro sitio web o
                aplicaciones.
              </li>
            </ul>

            <h2>3. Finalidades del tratamiento de datos</h2>
            <p>Utilizamos tu información para los siguientes fines:</p>
            <ul>
              <li>Proporcionar, mantener y mejorar nuestros servicios.</li>
              <li>Procesar transacciones y gestionar tu relación con nosotros.</li>
              <li>Evaluar solicitudes de crédito y gestionar riesgos.</li>
              <li>Cumplir con obligaciones legales y regulatorias.</li>
              <li>Prevenir fraudes y garantizar la seguridad de nuestros servicios.</li>
              <li>Personalizar tu experiencia y ofrecerte productos y servicios relevantes.</li>
              <li>Realizar análisis estadísticos y de mercado.</li>
            </ul>

            <h2>4. Base legal para el tratamiento</h2>
            <p>Tratamos tus datos personales en base a las siguientes bases legales:</p>
            <ul>
              <li>Ejecución de un contrato contigo.</li>
              <li>Cumplimiento de obligaciones legales.</li>
              <li>Nuestro interés legítimo, siempre que no prevalezcan tus derechos y libertades.</li>
              <li>Tu consentimiento, cuando sea necesario.</li>
            </ul>

            <h2>5. Compartiendo tu información</h2>
            <p>Podemos compartir tu información con:</p>
            <ul>
              <li>Entidades del grupo NOA BANK.</li>
              <li>Proveedores de servicios que nos ayudan a operar nuestro negocio.</li>
              <li>Autoridades reguladoras, gubernamentales y judiciales cuando sea requerido por ley.</li>
              <li>Burós de crédito y sistemas de información crediticia.</li>
              <li>Socios comerciales, con tu consentimiento cuando sea necesario.</li>
            </ul>

            <h2>6. Seguridad de la información</h2>
            <p>
              Implementamos medidas técnicas, administrativas y físicas diseñadas para proteger tus datos personales
              contra accesos no autorizados, pérdida, alteración o destrucción. Estas medidas incluyen encriptación,
              controles de acceso, monitoreo de seguridad y planes de contingencia.
            </p>

            <h2>7. Tus derechos</h2>
            <p>De acuerdo con la legislación aplicable, tienes derecho a:</p>
            <ul>
              <li>Acceder a tus datos personales.</li>
              <li>Rectificar datos inexactos o incompletos.</li>
              <li>Solicitar la supresión de tus datos en determinadas circunstancias.</li>
              <li>Oponerte al tratamiento de tus datos.</li>
              <li>Solicitar la limitación del tratamiento.</li>
              <li>Solicitar la portabilidad de tus datos.</li>
              <li>Retirar tu consentimiento en cualquier momento.</li>
            </ul>

            <h2>8. Conservación de datos</h2>
            <p>
              Conservamos tus datos personales durante el tiempo necesario para cumplir con las finalidades para las que
              fueron recopilados, incluido el cumplimiento de requisitos legales, contables o de informes.
            </p>

            <h2>9. Cookies y tecnologías similares</h2>
            <p>
              Utilizamos cookies y tecnologías similares para mejorar tu experiencia, recordar tus preferencias y
              entender cómo utilizas nuestros servicios. Puedes gestionar tus preferencias de cookies a través de la
              configuración de tu navegador.
            </p>

            <h2>10. Cambios en esta política</h2>
            <p>
              Podemos actualizar esta política periódicamente para reflejar cambios en nuestras prácticas o requisitos
              legales. Te notificaremos sobre cambios significativos a través de nuestro sitio web o por otros medios.
            </p>

            <h2>11. Contacto</h2>
            <p>
              Si tienes preguntas o inquietudes sobre esta política o el tratamiento de tus datos personales, puedes
              contactar a nuestro Delegado de Protección de Datos en privacidad@noabank.com.ar o a través de los canales
              de atención al cliente disponibles en nuestro sitio web.
            </p>

            <p className="text-sm text-muted-foreground mt-8">Última actualización: 10 de abril de 2025</p>
          </div>
        </div>
      </section>
    </>
  )
}
