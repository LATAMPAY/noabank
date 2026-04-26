import PageHeader from "@/components/page-header"

export const metadata = {
  title: "Política de Cookies | NOA BANK",
  description: "Política de cookies y tecnologías similares de NOA BANK.",
}

export default function CookiesPage() {
  return (
    <>
      <PageHeader
        title="Política de Cookies"
        breadcrumbs={[
          { label: "Legal", href: "/legal" },
          { label: "Política de Cookies", href: "/legal/cookies" },
        ]}
      />

      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="prose max-w-4xl mx-auto">
            <p className="lead">
              Esta Política de Cookies explica cómo NOA BANK utiliza cookies y tecnologías similares para reconocerte
              cuando visitas nuestro sitio web y aplicaciones.
            </p>

            <h2>1. ¿Qué son las cookies?</h2>
            <p>
              Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo (computadora, tablet o
              móvil) cuando visitas un sitio web. Las cookies son ampliamente utilizadas para hacer que los sitios web
              funcionen de manera más eficiente, así como para proporcionar información a los propietarios del sitio.
            </p>

            <h2>2. Tipos de cookies que utilizamos</h2>
            <p>Utilizamos los siguientes tipos de cookies:</p>
            <ul>
              <li>
                <strong>Cookies esenciales:</strong> Necesarias para el funcionamiento básico del sitio web. Te permiten
                navegar por el sitio y utilizar sus funciones.
              </li>
              <li>
                <strong>Cookies de preferencias:</strong> Permiten que el sitio web recuerde información que cambia la
                forma en que el sitio se comporta o se ve, como tu idioma preferido o la región en la que te encuentras.
              </li>
              <li>
                <strong>Cookies estadísticas:</strong> Nos ayudan a entender cómo los visitantes interactúan con el
                sitio web, recopilando y reportando información de forma anónima.
              </li>
              <li>
                <strong>Cookies de marketing:</strong> Se utilizan para rastrear a los visitantes en los sitios web. La
                intención es mostrar anuncios relevantes y atractivos para el usuario individual.
              </li>
            </ul>

            <h2>3. Cookies de terceros</h2>
            <p>
              Además de nuestras propias cookies, podemos utilizar cookies de terceros para reportar estadísticas de
              uso, entregar anuncios relevantes y mejorar nuestros servicios. Estos terceros pueden incluir proveedores
              de servicios analíticos y redes publicitarias.
            </p>

            <h2>4. Control de cookies</h2>
            <p>
              Puedes controlar y administrar las cookies de varias maneras. Ten en cuenta que eliminar o bloquear las
              cookies puede afectar tu experiencia de usuario y es posible que no puedas acceder a determinadas áreas o
              funcionalidades de nuestro sitio web.
            </p>
            <ul>
              <li>
                <strong>Configuración del navegador:</strong> La mayoría de los navegadores te permiten controlar las
                cookies a través de sus preferencias. Busca la sección "Ayuda" en tu navegador para obtener más
                información.
              </li>
              <li>
                <strong>Herramientas de terceros:</strong> Puedes optar por no recibir cookies de terceros utilizando
                herramientas como Your Online Choices o Network Advertising Initiative.
              </li>
              <li>
                <strong>Nuestro banner de cookies:</strong> Utilizamos un banner de cookies que te permite seleccionar
                qué tipos de cookies aceptas.
              </li>
            </ul>

            <h2>5. Cookies específicas que utilizamos</h2>
            <p>A continuación, se detallan algunas de las cookies específicas que utilizamos y su propósito:</p>
            <table>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Proveedor</th>
                  <th>Propósito</th>
                  <th>Duración</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>session_id</td>
                  <td>NOA BANK</td>
                  <td>Mantiene tu sesión abierta mientras navegas por el sitio</td>
                  <td>Sesión</td>
                </tr>
                <tr>
                  <td>preferences</td>
                  <td>NOA BANK</td>
                  <td>Guarda tus preferencias de navegación</td>
                  <td>1 año</td>
                </tr>
                <tr>
                  <td>_ga</td>
                  <td>Google Analytics</td>
                  <td>Distingue usuarios únicos asignando un número generado aleatoriamente</td>
                  <td>2 años</td>
                </tr>
                <tr>
                  <td>_gid</td>
                  <td>Google Analytics</td>
                  <td>Distingue usuarios</td>
                  <td>24 horas</td>
                </tr>
              </tbody>
            </table>

            <h2>6. Cambios en nuestra política de cookies</h2>
            <p>
              Podemos actualizar nuestra Política de Cookies periódicamente. Te recomendamos que revises esta página
              regularmente para estar informado sobre cualquier cambio. Los cambios en esta Política de Cookies entran
              en vigor cuando se publican en esta página.
            </p>

            <h2>7. Contacto</h2>
            <p>
              Si tienes preguntas sobre nuestra Política de Cookies, puedes contactarnos a través de los canales de
              atención al cliente disponibles en nuestro sitio web o escribirnos a privacidad@noabank.com.ar.
            </p>

            <p className="text-sm text-muted-foreground mt-8">Última actualización: 10 de abril de 2025</p>
          </div>
        </div>
      </section>
    </>
  )
}
