import type { Metadata } from "next"
import { Handshake, Store, Scale, FileText, MessageCircle, Shield, Briefcase, Sparkles, AlertCircle, Calendar } from "lucide-react"

export const metadata: Metadata = {
  title: "Condiciones de Aliados - RodarLibre",
  description: "Condiciones generales de aliados comerciales de RodarLibre y la relación con los usuarios.",
}

export default function AlliesConditionsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Starry background pattern */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20"></div>
        {/* Stars */}
        <div className="absolute top-10 left-10 w-1 h-1 bg-foreground rounded-full opacity-60"></div>
        <div className="absolute top-20 right-20 w-1 h-1 bg-foreground rounded-full opacity-80"></div>
        <div className="absolute top-32 left-1/4 w-0.5 h-0.5 bg-foreground rounded-full opacity-40"></div>
        <div className="absolute top-40 right-1/3 w-1 h-1 bg-foreground rounded-full opacity-70"></div>
        <div className="absolute top-60 left-1/2 w-0.5 h-0.5 bg-foreground rounded-full opacity-50"></div>
        <div className="absolute top-80 right-10 w-1 h-1 bg-foreground rounded-full opacity-60"></div>
        <div className="absolute bottom-40 left-20 w-0.5 h-0.5 bg-foreground rounded-full opacity-40"></div>
        <div className="absolute bottom-60 right-1/4 w-1 h-1 bg-foreground rounded-full opacity-80"></div>
      </div>

      <div className="relative z-10 pt-20">
        {/* Header Section */}
        <header className="px-4 py-8 border-b border-border bg-muted/20">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Handshake className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h1 className="font-serif font-bold text-3xl md:text-4xl text-foreground">
                  Condiciones Generales de Aliados
                </h1>
                <p className="text-muted-foreground">Última actualización: 7 de Junio de 2026</p>
              </div>
            </div>
          </div>
        </header>

        {/* Content Section */}
        <main className="px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <section className="mb-12">
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  En RodarLibre conectamos a nuestra comunidad con aliados comerciales que ofrecen productos,
                  servicios, beneficios o soluciones relacionadas con el ecosistema de movilidad, motocicletas,
                  vehículos, mantenimiento, seguros, accesorios, experiencias, asistencia u otras categorías afines.
                </p>
                <p>
                  Estas condiciones explican cómo funciona la relación entre RodarLibre, los aliados comerciales y
                  los usuarios.
                </p>
              </div>
            </section>

            {/* 1. Rol de RodarLibre */}
            <section className="mb-12">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg mt-1 flex-shrink-0">
                  <Store className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="font-serif font-bold text-2xl text-foreground mb-4">1. Rol de RodarLibre</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      RodarLibre actúa como un canal digital de promoción, visibilidad, referenciación y conexión entre
                      los usuarios y los aliados comerciales publicados en la aplicación, sitio web u otros canales
                      oficiales de RodarLibre.
                    </p>
                    <p>
                      RodarLibre puede mostrar información comercial de los aliados, beneficios, promociones, enlaces de
                      contacto, botones de WhatsApp, formularios, códigos de descuento u otros mecanismos que faciliten
                      el contacto entre el usuario y el aliado.
                    </p>
                    <p>
                      Salvo que se indique expresamente lo contrario, RodarLibre no presta directamente los productos o
                      servicios ofrecidos por los aliados.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 2. Responsabilidad de los aliados */}
            <section className="mb-12">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg mt-1 flex-shrink-0">
                  <Scale className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="font-serif font-bold text-2xl text-foreground mb-4">
                    2. Responsabilidad de los aliados
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Cada aliado comercial es responsable por los productos, servicios, precios, disponibilidad,
                      condiciones, garantías, asesoría, atención, entrega, soporte, reclamaciones y cumplimiento de las
                      obligaciones legales aplicables a su actividad.
                    </p>
                    <p>
                      Cuando el usuario contacte a un aliado por medio de un enlace, botón, WhatsApp, llamada, sitio
                      externo u otro canal proporcionado en RodarLibre, la relación comercial, contractual y operativa
                      se desarrollará directamente entre el usuario y el aliado.
                    </p>
                    <p>
                      RodarLibre no será responsable por errores, incumplimientos, cambios de precio, disponibilidad,
                      tiempos de atención, calidad del servicio, garantías, cancelaciones, devoluciones, reclamaciones,
                      siniestros o controversias derivadas de productos o servicios prestados directamente por los
                      aliados.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 3. Información publicada sobre aliados */}
            <section className="mb-12">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg mt-1 flex-shrink-0">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="font-serif font-bold text-2xl text-foreground mb-4">
                    3. Información publicada sobre aliados
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      RodarLibre podrá publicar información suministrada por los aliados o construida a partir de datos
                      entregados por ellos, como descripciones, imágenes, logos, beneficios, precios de referencia,
                      promociones, condiciones comerciales y canales de contacto.
                    </p>
                    <p>
                      Aunque RodarLibre procura mantener la información actualizada y clara, las condiciones finales de
                      cada producto o servicio deberán ser confirmadas directamente con el aliado antes de realizar
                      cualquier compra, contratación o solicitud.
                    </p>
                    <p>
                      Las promociones, descuentos o beneficios pueden estar sujetos a disponibilidad, vigencia,
                      ubicación, requisitos del aliado, validación previa o condiciones específicas.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 4. Contacto con aliados y canales externos */}
            <section className="mb-12">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg mt-1 flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="font-serif font-bold text-2xl text-foreground mb-4">
                    4. Contacto con aliados y canales externos
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Al hacer clic en botones como &quot;Contactar&quot;, &quot;Cotizar&quot;, &quot;Reservar&quot;,
                      &quot;Comprar&quot;, &quot;Agendar&quot;, &quot;Escribir por WhatsApp&quot; u otros similares, el
                      usuario puede ser redirigido a canales externos operados por el aliado.
                    </p>
                    <p>
                      En esos casos, el aliado será responsable por la atención, solicitud de información, tratamiento
                      de datos, cotización, venta, soporte y demás gestiones realizadas en sus propios canales.
                    </p>
                    <p>
                      RodarLibre podrá registrar métricas internas de interacción, como visualizaciones, clics, fecha,
                      hora, aliado consultado, campaña o fuente de tráfico, con fines de medición, trazabilidad
                      comercial, mejora del servicio y análisis interno.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 5. Tratamiento de datos personales */}
            <section className="mb-12">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg mt-1 flex-shrink-0">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="font-serif font-bold text-2xl text-foreground mb-4">
                    5. Tratamiento de datos personales
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      RodarLibre tratará los datos personales de los usuarios conforme a su{" "}
                      <a href="/privacy" className="text-primary hover:text-primary/80 font-medium">
                        Política de Privacidad
                      </a>{" "}
                      y a la normatividad aplicable.
                    </p>
                    <p>
                      Cuando el usuario decida contactar directamente a un aliado y le entregue información personal por
                      canales externos, dicho tratamiento será responsabilidad del aliado, de acuerdo con sus propias
                      políticas, autorizaciones y obligaciones legales.
                    </p>
                    <p>
                      RodarLibre no recomienda entregar información sensible, documentos personales, datos financieros o
                      información confidencial sin verificar previamente la identidad, legitimidad y condiciones del
                      aliado correspondiente.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 6. Productos o servicios regulados */}
            <section className="mb-12">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg mt-1 flex-shrink-0">
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="font-serif font-bold text-2xl text-foreground mb-4">
                    6. Productos o servicios regulados
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Algunos aliados pueden ofrecer productos o servicios sujetos a regulación especial, como seguros,
                      productos financieros, créditos, asistencia, servicios técnicos, transporte, salud, entre otros.
                    </p>
                    <p>
                      En esos casos, el aliado será responsable por contar con las autorizaciones, registros, permisos,
                      idoneidad o condiciones legales necesarias para ofrecer dichos productos o servicios.
                    </p>
                    <p>
                      RodarLibre no actúa como aseguradora, entidad financiera, intermediario, asesor técnico, agente,
                      corredor ni representante legal de los aliados, salvo que se indique expresamente lo contrario
                      mediante un acuerdo o aviso específico.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 7. Comisiones o beneficios comerciales */}
            <section className="mb-12">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg mt-1 flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="font-serif font-bold text-2xl text-foreground mb-4">
                    7. Comisiones o beneficios comerciales
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      RodarLibre podrá recibir comisiones, pagos, beneficios comerciales, pauta, patrocinios o
                      contraprestaciones por referir usuarios, generar visibilidad, promocionar aliados o facilitar
                      contactos comerciales.
                    </p>
                    <p>
                      Esto no implica que el usuario deba pagar un valor adicional a RodarLibre, salvo que se indique
                      expresamente en una condición específica.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 8. Recomendaciones al usuario */}
            <section className="mb-12">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg mt-1 flex-shrink-0">
                  <AlertCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="font-serif font-bold text-2xl text-foreground mb-4">
                    8. Recomendaciones al usuario
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    Antes de contratar, comprar o entregar información a un aliado, recomendamos:
                  </p>
                  <ul className="space-y-2 text-muted-foreground list-disc pl-5">
                    <li>Verificar las condiciones finales directamente con el aliado.</li>
                    <li>Preguntar por precios, vigencias, garantías, coberturas, exclusiones, requisitos y tiempos de atención.</li>
                    <li>Revisar cuidadosamente cualquier documento, cotización, contrato, póliza, factura o comprobante.</li>
                    <li>Conservar evidencia de la comunicación, pago o contratación.</li>
                    <li>Contactar directamente al aliado en caso de dudas, reclamos o solicitudes de soporte.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 9. Cambios en estas condiciones */}
            <section className="mb-12">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg mt-1 flex-shrink-0">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="font-serif font-bold text-2xl text-foreground mb-4">
                    9. Cambios en estas condiciones
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      RodarLibre podrá actualizar estas condiciones generales cuando lo considere necesario. La versión
                      vigente estará disponible en el sitio web, aplicación u otros canales oficiales de RodarLibre.
                    </p>
                    <p>
                      El uso de los canales de aliados de RodarLibre implica que el usuario conoce y acepta estas
                      condiciones generales.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>

        {/* Footer */}
        <footer className="px-4 py-8 bg-muted/20 border-t border-border">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-muted-foreground">© 2026 RodarLibre. Todos los derechos reservados.</p>
              <div className="flex gap-6">
                <a
                  href="/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Inicio
                </a>
                <a
                  href="/aliados"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Aliados
                </a>
                <a
                  href="/privacy"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Política de Privacidad
                </a>
                <a
                  href="https://instagram.com/rodarlibre.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Seguir a RodarLibre en Instagram (se abre en nueva ventana)"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
