import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Fuel, Wrench, BellRing, Star, Mountain, Users, Route, Instagram, ScrollText, TriangleAlert, Scale } from "lucide-react"

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
              <img src="/rodar-libre-logo.png" alt="Rodar Libre Logo" className="w-48 h-48 object-contain" />
            </div>

            {/* Title and Subtitle */}
            <div className="space-y-4">
              <h1 className="font-serif font-black text-4xl md:text-5xl text-foreground">Rodar Libre</h1>
              <p className="font-sans text-lg text-muted-foreground leading-relaxed">
                La primera app para moteros en Colombia.
                <br />
                <span className="text-primary font-medium">Rueda libre, vive la ruta, cuida tu moto.</span>
              </p>
            </div>
          </div>
        </section>

        {/* Instagram Follow Section */}
        <section className="px-4 py-16 bg-muted/20">
          <div className="max-w-md mx-auto text-center space-y-8">
            <h2 className="font-serif font-bold text-2xl text-foreground">Síguenos en Instagram</h2>
            <div className="flex justify-center">
              <a href="https://instagram.com/rodarlibre.co/" target="_blank" rel="noopener noreferrer">
                <div className="p-8 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-3xl hover:scale-105 transition-transform cursor-pointer">
                  <Instagram className="w-16 h-16 text-white" />
                </div>
              </a>
            </div>
            <p className="font-sans text-lg text-muted-foreground">
              Mantente al día con las últimas noticias,
              <br />
              <span className="text-primary font-semibold">tips de moteros y actualizaciones de la app</span>
            </p>
            <a href="https://instagram.com/rodarlibre.co/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                Seguir @ruedalibre.co
              </Button>
            </a>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif font-bold text-2xl text-center mb-8 text-foreground">Funciones</h2>
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
                      <Wrench className="w-6 h-6 text-primary" />
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
                      <BellRing className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-card-foreground">Recordatorios inteligentes</h3>
                    <p className="text-sm text-muted-foreground">Nunca olvides el mantenimiento</p>
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
              <a href="https://instagram.com/rodarlibre.co/" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                Instagram
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
