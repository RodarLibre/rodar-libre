import type { Metadata } from "next"
import { Trash2, Mail, AlertTriangle, Shield, Clock, UserX, FileText, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Eliminar Cuenta - RodarLibre",
  description: "Solicita la eliminación de tu cuenta y datos de RodaLibre. Proceso seguro y transparente para proteger tu privacidad.",
}

export default function DeleteAccountPage() {
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

      <div className="relative z-10">
        {/* Header Section */}
        <header className="px-4 py-8 border-b border-border bg-muted/20">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <a
                href="/"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Volver al inicio"
              >
                ← Volver al inicio
              </a>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-red-500/10 rounded-lg">
                <Trash2 className="w-8 h-8 text-red-500" />
              </div>
              <div>
                <h1 className="font-serif font-bold text-3xl md:text-4xl text-foreground">Eliminar Cuenta</h1>
                <p className="text-muted-foreground">Solicita la eliminación de tu cuenta y datos de RodaLibre</p>
              </div>
            </div>
          </div>
        </header>

        {/* Content Section */}
        <main className="px-4 py-12">
          <div className="max-w-4xl mx-auto">

            {/* App Information */}
            <section className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg mt-1">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="font-serif font-bold text-2xl text-foreground mb-4">Información de la Aplicación</h2>
                  <div className="bg-card border border-border rounded-lg p-4 space-y-2">
                    <p><strong className="text-foreground">Nombre de la App:</strong> RodaLibre</p>
                    <p><strong className="text-foreground">Desarrollador:</strong> Juan Roa</p>
                    <p><strong className="text-foreground">Contacto:</strong> rodarlibre.co@gmail.com</p>
                    <p><strong className="text-foreground">Sitio Web:</strong> rodarlibre.co</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Important Notice */}
            <section className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-2 bg-red-500/10 rounded-lg mt-1">
                  <AlertTriangle className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <h2 className="font-serif font-bold text-2xl text-foreground mb-4">Aviso Importante</h2>
                  <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                    <p className="text-red-800 dark:text-red-200 font-semibold mb-2">
                      ⚠️ Esta acción es irreversible
                    </p>
                    <p className="text-red-700 dark:text-red-300">
                      Una vez que elimines tu cuenta, no podrás recuperar tus datos ni acceder a tu información de vehículos.
                      Asegúrate de haber respaldado cualquier información importante antes de proceder.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Steps to Delete Account */}
            <section className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg mt-1">
                  <UserX className="w-5 h-5 text-primary" />
                </div>
                <div className="w-full">
                  <h2 className="font-serif font-bold text-2xl text-foreground mb-4">Pasos para Eliminar tu Cuenta</h2>
                  <p className="text-muted-foreground mb-6">
                    Para solicitar la eliminación de tu cuenta y todos los datos asociados, sigue estos pasos:
                  </p>

                  <div className="space-y-6">
                    <div className="bg-card border border-border rounded-lg p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                          1
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">Prepara tu solicitud</h3>
                          <p className="text-muted-foreground mb-3">
                            Antes de enviar tu solicitud, asegúrate de tener la siguiente información:
                          </p>
                          <ul className="space-y-1 text-muted-foreground">
                            <li>• Tu dirección de email registrada en RodaLibre</li>
                            <li>• Tu nombre completo</li>
                            <li>• Confirmación de que deseas eliminar permanentemente tu cuenta</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-card border border-border rounded-lg p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                          2
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">Envía tu solicitud por email</h3>
                          <p className="text-muted-foreground mb-3">
                            Envía un email a nuestro equipo de soporte con el asunto "Solicitud de Eliminación de Cuenta":
                          </p>
                          <div className="bg-muted/50 border border-border rounded-lg p-4">
                            <p className="text-foreground font-semibold mb-2">Email:</p>
                            <a 
                              href="mailto:rodarlibre.co@gmail.com?subject=Solicitud de Eliminación de Cuenta&body=Hola,%0D%0A%0D%0ADeseo eliminar permanentemente mi cuenta de RodaLibre.%0D%0A%0D%0ADatos de la cuenta:%0D%0A- Email: [tu email]%0D%0A- Nombre: [tu nombre]%0D%0A%0D%0AConfirmo que deseo eliminar todos mis datos asociados.%0D%0A%0D%0AGracias."
                              className="text-primary hover:text-primary/80 font-medium"
                            >
                              rodarlibre.co@gmail.com
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-card border border-border rounded-lg p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                          3
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">Espera la confirmación</h3>
                          <p className="text-muted-foreground">
                            Recibirás una respuesta por email confirmando que hemos recibido tu solicitud. 
                            Procesaremos tu solicitud dentro de 7 días hábiles.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-card border border-border rounded-lg p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                          4
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">Confirmación final</h3>
                          <p className="text-muted-foreground">
                            Una vez procesada tu solicitud, recibirás un email de confirmación indicando que 
                            tu cuenta y todos los datos asociados han sido eliminados permanentemente.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Data Deletion Information */}
            <section className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg mt-1">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div className="w-full">
                  <h2 className="font-serif font-bold text-2xl text-foreground mb-4">Datos que se Eliminarán</h2>
                  <p className="text-muted-foreground mb-6">
                    Al eliminar tu cuenta, se eliminarán permanentemente los siguientes datos:
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-card border border-border rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Datos de la Cuenta
                      </h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Nombre completo</li>
                        <li>• Dirección de email</li>
                        <li>• Contraseña encriptada</li>
                        <li>• Información de autenticación</li>
                      </ul>
                    </div>

                    <div className="bg-card border border-border rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Datos del Vehículo
                      </h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Información del vehículo (marca, modelo, año)</li>
                        <li>• Número de placa</li>
                        <li>• Lecturas del odómetro</li>
                        <li>• Historial de mantenimiento</li>
                        <li>• Documentos asociados</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Data Retention */}
            <section className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg mt-1">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div className="w-full">
                  <h2 className="font-serif font-bold text-2xl text-foreground mb-4">Período de Retención</h2>
                  <p className="text-muted-foreground mb-6">
                    Información importante sobre la retención de datos:
                  </p>

                  <div className="bg-card border border-border rounded-lg p-6">
                    <h3 className="font-semibold text-foreground mb-4">Eliminación Completa</h3>
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        <strong className="text-foreground">Todos los datos personales se eliminan permanentemente</strong> 
                        una vez procesada tu solicitud de eliminación de cuenta. No mantenemos copias de seguridad 
                        de tus datos personales después de la eliminación.
                      </p>
                      <p>
                        <strong className="text-foreground">Tiempo de procesamiento:</strong> Máximo 7 días hábiles 
                        desde la recepción de tu solicitud.
                      </p>
                      <p>
                        <strong className="text-foreground">Sin período de retención adicional:</strong> 
                        Una vez eliminados, tus datos no se pueden recuperar.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Alternative Options */}
            <section className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg mt-1">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="font-serif font-bold text-2xl text-foreground mb-4">Otras Opciones</h2>
                  <p className="text-muted-foreground mb-4">
                    Antes de eliminar tu cuenta, considera estas alternativas:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• <strong className="text-foreground">Actualizar información:</strong> Puedes modificar tus datos desde la aplicación</li>
                    <li>• <strong className="text-foreground">Desactivar temporalmente:</strong> Contacta con nosotros si necesitas una pausa temporal</li>
                    <li>• <strong className="text-foreground">Exportar datos:</strong> Solicita una copia de tus datos antes de eliminar</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg mt-1">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="font-serif font-bold text-2xl text-foreground mb-4">Contacto</h2>
                  <p className="text-muted-foreground mb-4">
                    Si tienes preguntas sobre el proceso de eliminación de cuenta o necesitas ayuda adicional:
                  </p>
                  <div className="bg-card border border-border rounded-lg p-4">
                    <p className="text-foreground font-semibold mb-2">Equipo de Soporte de RodaLibre</p>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Email:</strong> rodarlibre.co@gmail.com
                    </p>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Sitio Web:</strong> rodarlibre.co
                    </p>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Tiempo de respuesta:</strong> 24-48 horas
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
              <p className="text-sm text-muted-foreground">© 2025 RodarLibre. Todos los derechos reservados.</p>
              <div className="flex gap-6">
                <a
                  href="/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Inicio
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
