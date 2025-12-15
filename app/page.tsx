import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { EngineOilIcon } from "@/components/ui/engine-oil-icon"
import { HelmetIcon } from "@/components/ui/helmet-icon"
import { InstagramIcon } from "@/components/ui/instagram-icon"
import { MaintenanceIcon } from "@/components/ui/maintenance-icon"
import { MotorcycleIcon } from "@/components/ui/motorcycle-icon"
import { Fuel, Wrench, Star, Mountain, Users, Route, ScrollText, TriangleAlert, Scale, DollarSign, Store } from "lucide-react"
import Image from "next/image"

export default function RodarLibreLanding() {
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
        {/* Mountain silhouettes */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-muted/30 to-transparent"></div>
        <Mountain className="absolute bottom-8 left-10 w-8 h-8 text-muted-foreground/20" />
        <Mountain className="absolute bottom-12 right-16 w-6 h-6 text-muted-foreground/15" />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="px-4 py-16 text-center">
          <div className="max-w-md mx-auto space-y-8">
            {/* Logo */}
            <div className="flex justify-center">
              <Image
                src="/logo.jpg"
                alt="Rodar Libre Logo"
                width={384}
                height={384}
                className="w-60 h-60 md:w-96 md:h-96 object-contain"
                priority
                sizes="(max-width: 768px) 240px, 384px"
              />
            </div>

            {/* Title and Subtitle */}
            <div className="space-y-4">
              <h1 className="font-serif font-black text-4xl md:text-5xl text-foreground">Rodar Libre</h1>
              <p className="font-sans text-lg text-muted-foreground leading-relaxed">
                La primera app para conductores en Colombia.
                <br />
                <span className="text-primary font-medium">Rueda libre, vive la ruta, cuida tu vehículo.</span>
              </p>
            </div>
          </div>
        </section>

                {/* Instagram Follow Section */}
        <section className="px-4 py-16 bg-muted/20">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif font-bold text-2xl text-center mb-12 text-foreground">
              Descarga la app y síguenos
            </h2>

            {/* Horizontal layout with Instagram and Google Play */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Instagram Section */}
              <div className="flex flex-col items-center justify-center space-y-6 p-8 bg-card border border-border rounded-2xl">
                <p className="font-sans text-sm text-muted-foreground font-medium">Síguenos en Instagram</p>
                <a
                  href="https://instagram.com/rodarlibre.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Seguir a Rodar Libre en Instagram"
                  className="block"
                >
                  <div className="p-8 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-3xl hover:scale-105 transition-transform cursor-pointer w-40 h-40 flex items-center justify-center">
                    <InstagramIcon className="w-20 h-20 text-white" size={80} aria-hidden="true" />
                  </div>
                </a>
                <a
                  href="https://instagram.com/rodarlibre.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Seguir a Rodar Libre en Instagram (se abre en nueva ventana)"
                >
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                    Seguir @rodarlibre.co
                  </Button>
                </a>
              </div>

              {/* Google Play Section */}
              <div className="flex flex-col items-center justify-center space-y-6 p-8 bg-card border border-border rounded-2xl">
                <a
                  href="https://play.google.com/store/apps/details?id=com.rodarlibre"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Descargar Rodar Libre en Google Play"
                  className="block w-full"
                >
                  <Image
                    src="/google-play-es.svg"
                    alt="Google Play Store"
                    width={200}
                    height={60}
                    className="w-full max-w-xs mx-auto hover:opacity-90 transition-opacity cursor-pointer"
                  />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.rodarlibre"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Descargar Rodar Libre en Google Play (se abre en nueva ventana)"
                >
                </a>
              </div>
            </div>

            <div className="text-center">
              <p className="font-sans text-lg text-muted-foreground leading-relaxed">
                Mantente al día con las últimas noticias,
                <br />
                <span className="text-primary font-semibold">tips, actualizaciones de la app y más</span>
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif font-bold text-2xl text-center mb-8 text-foreground">¿Qué puedes hacer?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-card border-border">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="flex justify-center">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Fuel className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-card-foreground">Registro de tanqueadas</h3>
                    <p className="text-sm text-muted-foreground">Ahorra dinero</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="flex justify-center">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <EngineOilIcon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-card-foreground">Control de cambios de aceite</h3>
                    <p className="text-sm text-muted-foreground">Mantén tu moto en perfecto estado</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="flex justify-center">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <MaintenanceIcon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-card-foreground">Recordatorios inteligentes</h3>
                    <p className="text-sm text-muted-foreground">Nunca olvides los mantenimientos</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-card border-border">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="flex justify-center">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <ScrollText className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-card-foreground">Guarda tus documentos</h3>
                    <p className="text-sm text-muted-foreground">Mantén ordenados en un solo lugar tu SOAT y RTM</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="flex justify-center">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <TriangleAlert className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-card-foreground">Notificaciones de vencimiento</h3>
                    <p className="text-sm text-muted-foreground">Recibe a tiempo notificaciones sobre vencimiento de tus papeles</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="flex justify-center">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Scale className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-card-foreground">Consulta constantemente infracciones</h3>
                    <p className="text-sm text-muted-foreground">Revisa si tienes multas en el SIMIT</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-card border-border">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="flex justify-center">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <HelmetIcon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-card-foreground">Descuentos exclusivos</h3>
                    <p className="text-sm text-muted-foreground">Tendremos alianzas con talleres y tiendas.</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="flex justify-center">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Store className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-card-foreground">Encuentra talleres, accesorios y más.</h3>
                    <p className="text-sm text-muted-foreground">Encuentra todo en un solo lugar.</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="flex justify-center">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <MotorcycleIcon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-card-foreground">Únete a clubes de tu ciudad.</h3>
                    <p className="text-sm text-muted-foreground">Encuentra clubes de moter@s y conductores en tu región para salir a rodar y conectar.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif font-bold text-2xl text-center mb-8 text-foreground">Nuestro Equipo</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-card border-border overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-square relative">
                    <Image
                      src="/juanroa.jpg"
                      alt="Juan Roa"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6 text-center space-y-2">
                    <h3 className="font-sans font-semibold text-card-foreground text-lg">Juan Roa</h3>
                    <p className="text-sm text-muted-foreground">CEO & Founder, Software Engineer</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-card border-border overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-square relative">
                    <Image
                      src="/adri.jpg"
                      alt="Adri"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6 text-center space-y-2">
                    <h3 className="font-sans font-semibold text-card-foreground text-lg">Adriana Guerrero</h3>
                    <p className="text-sm text-muted-foreground">Co-founder, Designer</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-square relative">
                    <Image
                      src="/juandmazuera.jpeg"
                      alt="Juan David Mazuera"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6 text-center space-y-2">
                    <h3 className="font-sans font-semibold text-card-foreground text-lg">Juan David Mazuera</h3>
                    <p className="text-sm text-muted-foreground">Co-founder, Software Engineer</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="px-4 py-12 bg-muted/20">
          <div className="max-w-md mx-auto text-center space-y-6">
            <h2 className="font-serif font-bold text-2xl text-foreground">Lo que vendrá después</h2>
            <div className="flex justify-center gap-8 text-primary">
              <Route className="w-8 h-8" />
              <Users className="w-8 h-8" />
              <Star className="w-8 h-8" />
            </div>
            <p className="font-sans text-lg text-muted-foreground">
              <span className="text-primary font-semibold">Muy pronto:</span>
              <br />
              rutas, comunidad y mucho más
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-4 py-8 bg-background border-t border-border">
          <div className="max-w-md mx-auto text-center space-y-4">
            <p className="text-sm text-muted-foreground">© 2025 Rodar Libre. Todos los derechos reservados.</p>
            <div className="flex justify-center gap-6">
              <a 
                href="/privacy" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Privacidad
              </a>
              <a 
                href="https://instagram.com/rodarlibre.co/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Seguir a Rodar Libre en Instagram (se abre en nueva ventana)"
              >
                Instagram
              </a>
              <a 
                href="https://play.google.com/store/apps/details?id=com.rodarlibre" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Descarga la app en Google Play"
              >
                Descarga la app
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
