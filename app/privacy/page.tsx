import type { Metadata } from "next"
import { Shield, Mail, Lock, Eye, UserCheck, FileText, Calendar, AlertCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Política de Privacidad - RodarLibre",
  description: "Política de privacidad de RodarLibre - Protegemos tu información personal y respetamos tu privacidad.",
}

export default function PrivacyPolicyPage() {
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
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h1 className="font-serif font-bold text-3xl md:text-4xl text-foreground">Política de Privacidad</h1>
                <p className="text-muted-foreground">Última actualización: 04 de marzo, 2026</p>
              </div>
            </div>
          </div>
        </header>

        {/* Content Section */}
        <main className="px-4 py-12">
          <div className="max-w-4xl mx-auto">

            {/* Introduction */}
            <section className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg mt-1">
                  <UserCheck className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="font-serif font-bold text-2xl text-foreground mb-4">1. Introducción</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Bienvenid@ a RodarLibre (&quot;nosotros,&quot; &quot;nuestro,&quot; &quot;nos&quot;). Estamos comprometidos con proteger tu privacidad
                      y manejar tus datos de manera abierta y transparente. Esta Política de Privacidad explica cómo recopilamos,
                      usamos, procesamos y protegemos tu información cuando usas nuestra aplicación móvil, RodarLibre (la &quot;App&quot;).
                    </p>
                    <p>
                      Esta política está diseñada para cumplir tanto con la legislación colombiana de protección de datos personales (Ley 1581 de 2012 y sus decretos reglamentarios) como con los requisitos de Google Play Store y Apple App Store.
                    </p>
                    <div className="bg-card border border-border rounded-lg p-4 space-y-2">
                      <p><strong className="text-foreground">Nombre de la App:</strong> RodarLibre</p>
                      <p><strong className="text-foreground">Desarrollador (Controlador de Datos):</strong> Juan Roa</p>
                      <p><strong className="text-foreground">Contacto para Consultas de Privacidad:</strong> hola@rodarlibre.co</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Information We Collect */}
            <section className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg mt-1">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div className="w-full">
                  <h2 className="font-serif font-bold text-2xl text-foreground mb-4">2. Información que Recopilamos</h2>
                  <p className="text-muted-foreground mb-6">
                    Recopilamos una cantidad limitada de información personal y del vehículo para proporcionar y mejorar
                    nuestros servicios. Los datos que recopilamos son estrictamente necesarios para la funcionalidad de la App.
                  </p>

                  <h3 className="font-serif font-bold text-xl text-foreground mb-4">2.1. Datos que Proporcionas Directamente</h3>
                  <p className="text-muted-foreground mb-4">
                    Cuando creas una cuenta y registras tu vehículo, recopilamos la siguiente información:
                  </p>

                  <div className="space-y-6">
                    <div className="bg-card border border-border rounded-lg p-4">
                      <h4 className="font-sans font-semibold text-foreground mb-3">Información de la Cuenta:</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li><strong className="text-foreground">Nombre:</strong> Usado para comunicación dentro de la app</li>
                        <li><strong className="text-foreground">Dirección de Email:</strong> Usado para crear la cuenta, autenticación y comunicación.</li>
                      </ul>
                    </div>

                    <div className="bg-card border border-border rounded-lg p-4">
                      <h4 className="font-sans font-semibold text-foreground mb-3">Información del Vehículo (durante el registro):</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li><strong className="text-foreground">Marca, Modelo y Año:</strong> Para identificar las especificaciones de tu vehículo.</li>
                        <li><strong className="text-foreground">Placa:</strong> Para identificar únicamente tu vehículo dentro de la App.</li>
                        <li><strong className="text-foreground">Lectura del Odómetro:</strong> Para rastrear el kilometraje del vehículo y establecer programas de mantenimiento preventivo.</li>
                        <li><strong className="text-foreground">Ubicación:</strong> Se utiliza exclusivamente cuando lo autorizas para sugerir talleres o comercios aliados cercanos a tu ciudad.</li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="font-serif font-bold text-xl text-foreground mb-4 mt-8">2.2. Datos obtenidos de Fuentes Públicas (Mandato Tecnológico)</h3>
                  <p className="text-muted-foreground mb-4">
                    Para facilitarte la gestión de tus documentos y notificaciones, incluimos herramientas que consultan portales públicos a tu nombre. Al utilizar la App y dar tu consentimiento explícito, nos otorgas un <strong>mandato tecnológico</strong> (una autorización expresa, previa e informada) para actuar en tu representación y realizar las consultas correspondientes a nombre tuyo:
                  </p>

                  <div className="space-y-6">
                    <div className="bg-card border border-border rounded-lg p-4 border-l-4 border-l-blue-500">
                      <h4 className="font-sans font-semibold text-foreground mb-3">Consulta en el RUNT (SOAT y RTM):</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Obtenemos información sobre la vigencia de tus documentos oficiales. <strong>Nota crítica de privacidad:</strong> El número de documento de identidad requerido para esta consulta se procesa de forma <strong>estrictamente efímera</strong> (en tránsito). Entra a nuestro sistema, se usa para la consulta ante el RUNT, y se destruye inmediatamente de la memoria del servidor. <strong>NUNCA almacenamos tu número de documento en nuestras bases de datos</strong>. Así mismo, no extraemos ni almacenamos datos sensibles de identificación vehicular como el número de chasis, número de motor o código VIN.
                      </p>
                    </div>

                    <div className="bg-card border border-border rounded-lg p-4 border-l-4 border-l-blue-500">
                      <h4 className="font-sans font-semibold text-foreground mb-3">Consulta en el SIMIT (Comparendos y Multas):</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Utilizamos únicamente la placa de tu vehículo almacenada para que, <strong>cuando tú lo solicites manualmente desde la App</strong>, consultemos el estado de multas y comparendos. No realizamos estas búsquedas en segundo plano ni de forma periódica sin tu intervención directa.
                      </p>
                    </div>
                  </div>

                  <h3 className="font-serif font-bold text-xl text-foreground mb-4 mt-8">2.3. Datos que NO Recopilamos</h3>
                  <p className="text-muted-foreground">
                    No rastreamos tu ubicación en segundo plano, no leemos ni guardamos tus contactos, no almacenamos tu documento de identidad (cédula) y no recopilamos el código VIN ni el número de chasis de tus vehículos.
                  </p>
                </div>
              </div>
            </section>

            {/* How We Use Information */}
            <section className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg mt-1">
                  <Eye className="w-5 h-5 text-primary" />
                </div>
                <div className="w-full">
                  <h2 className="font-serif font-bold text-2xl text-foreground mb-4">3. Cómo Usamos tu Información</h2>
                  <p className="text-muted-foreground mb-6">
                    Los datos que recopilamos se usan exclusivamente para los siguientes propósitos:
                  </p>
                  <ul className="space-y-4 text-muted-foreground">
                    <li>
                      <strong className="text-foreground">Para Proporcionar la Funcionalidad Principal de la App:</strong> Tu email y contraseña
                      se usan para crear y asegurar tu cuenta. La información de tu vehículo es necesaria para entregar las
                      características principales de la App, como seguimiento de mantenimiento y gestión de documentos.
                    </li>
                    <li>
                      <strong className="text-foreground">Para Comunicarnos Contigo:</strong> Podemos usar tu dirección de email para enviarte
                      información importante sobre tu cuenta o actualizaciones del servicio. No la usaremos para propósitos de marketing.
                    </li>
                    <li>
                      <strong className="text-foreground">Para Mejorar Nuestros Servicios:</strong> Podemos analizar datos agregados y no identificables
                      para entender patrones de uso y mejorar las características de la App y la experiencia del usuario.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Data Security */}
            <section className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg mt-1">
                  <Lock className="w-5 h-5 text-primary" />
                </div>
                <div className="w-full">
                  <h2 className="font-serif font-bold text-2xl text-foreground mb-4">4. Seguridad de los Datos</h2>
                  <p className="text-muted-foreground mb-6">
                    Tomamos la seguridad de tus datos muy en serio e implementamos las mejores prácticas de la industria para protegerlos.
                  </p>
                  <ul className="space-y-4 text-muted-foreground">
                    <li>
                      <strong className="text-foreground">Encriptación:</strong> Todos los datos transmitidos entre la App y nuestros servidores
                      están encriptados usando protocolos de seguridad modernos. Tus datos también están encriptados en reposo en nuestros sistemas backend.
                    </li>
                    <li>
                      <strong className="text-foreground">Infraestructura Segura:</strong> Nuestro backend está alojado en una infraestructura segura
                      que usa Cloudflare Zero Trust para proteger contra accesos no autorizados.
                    </li>
                    <li>
                      <strong className="text-foreground">Acceso Limitado:</strong> El acceso a tus datos personales está restringido al personal
                      autorizado que lo requiere para realizar sus funciones.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Data Sharing & Ads */}
            <section className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg mt-1">
                  <AlertCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="font-serif font-bold text-2xl text-foreground mb-4">5. Compartir Datos y Publicidad</h2>

                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-6">
                    <h3 className="font-serif font-bold text-lg text-foreground mb-2">🚫 Sin Anuncios ni Venta de Datos</h3>
                    <p className="text-muted-foreground">
                      <strong>RodarLibre es una experiencia 100% libre de publicidad.</strong> No mostramos anuncios de terceros,
                      no rastreamos tu comportamiento para fines publicitarios y <strong>nunca vendemos tus datos</strong>.
                    </p>
                  </div>

                  <p className="text-muted-foreground mb-4">
                    No vendemos, rentamos o compartimos tu información personal con terceros para marketing o cualquier otro propósito.
                    Tus datos se usan exclusivamente para proporcionar el servicio RodarLibre y mejorar tu experiencia personal.
                  </p>
                  <p className="text-muted-foreground">
                    Solo podemos divulgar tu información si es requerido estrictamente por ley o en respuesta a solicitudes válidas de autoridades
                    públicas (ej., un tribunal o una agencia gubernamental).
                  </p>
                </div>
              </div>
            </section>

            {/* User Rights */}
            <section className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg mt-1">
                  <UserCheck className="w-5 h-5 text-primary" />
                </div>
                <div className="w-full">
                  <h2 className="font-serif font-bold text-2xl text-foreground mb-4">6. Derechos del Usuario y Control de Datos</h2>
                  <p className="text-muted-foreground mb-6">
                    Tienes control sobre tu información personal. Como usuario, tienes derecho a:
                  </p>
                  <ul className="space-y-4 text-muted-foreground">
                    <li>
                      <strong className="text-foreground">Acceder a tus Datos:</strong> Puedes ver la información de tu cuenta y vehículo dentro de la App.
                    </li>
                    <li>
                      <strong className="text-foreground">Corregir tus Datos:</strong> Puedes actualizar o corregir la información de tu vehículo
                      a través de la interfaz de la App.
                    </li>
                    <li>
                      <strong className="text-foreground">Eliminar tus Datos:</strong> Tienes derecho a solicitar la eliminación de tu cuenta y
                      todos los datos asociados. Puedes hacerlo fácilmente visitando nuestra página de eliminación de cuenta:
                      <a href="/delete-account" className="text-primary hover:text-primary/80 font-medium ml-1">
                        Solicitar Eliminación de Cuenta
                      </a>
                      o enviando una solicitud a nuestro email de contacto de privacidad:
                      <strong className="text-primary"> hola@rodarlibre.co</strong>. Procesaremos tu solicitud de manera oportuna.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Future Features */}
            <section className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg mt-1">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="font-serif font-bold text-2xl text-foreground mb-4">7. Características Futuras</h2>
                  <p className="text-muted-foreground">
                    Como se anunció en nuestra página de inicio (rodarlibre.co), planeamos introducir nuevas características en el futuro.
                    Esta Política de Privacidad se actualizará para reflejar cualquier cambio en nuestras prácticas de recopilación o uso de datos.
                    Te notificaremos de cualquier cambio significativo y obtendremos tu consentimiento si es requerido.
                  </p>
                </div>
              </div>
            </section>

            {/* Children's Privacy */}
            <section className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg mt-1">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="font-serif font-bold text-2xl text-foreground mb-4">8. Privacidad de Menores</h2>
                  <p className="text-muted-foreground">
                    Nuestra App no está destinada para uso de menores de 13 años. No recopilamos conscientemente información personal
                    de menores de 13 años. Si nos damos cuenta de que hemos recopilado dicha información, tomaremos medidas para eliminarla.
                  </p>
                </div>
              </div>
            </section>

            {/* Policy Changes */}
            <section className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg mt-1">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="font-serif font-bold text-2xl text-foreground mb-4">9. Cambios a esta Política de Privacidad</h2>
                  <p className="text-muted-foreground">
                    Podemos actualizar esta Política de Privacidad de vez en cuando. Te notificaremos de cualquier cambio publicando
                    la nueva política en esta página y actualizando la fecha de &quot;Última actualización&quot;. Se te recomienda revisar
                    esta Política de Privacidad periódicamente para cualquier cambio.
                  </p>
                </div>
              </div>
            </section>

            {/* Contact */}
            <section className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg mt-1">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="font-serif font-bold text-2xl text-foreground mb-4">10. Contáctanos</h2>
                  <p className="text-muted-foreground mb-4">
                    Si tienes alguna pregunta, inquietud o solicitud sobre esta Política de Privacidad o tus datos, por favor contáctanos en:
                  </p>
                  <div className="bg-card border border-border rounded-lg p-4">
                    <p className="text-foreground font-semibold">rodarlibre.co</p>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Email:</strong> hola@rodarlibre.co
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
