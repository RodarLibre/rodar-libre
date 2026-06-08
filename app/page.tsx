
import { Card, CardContent } from "@/components/ui/card"
import { EngineOilIcon } from "@/components/ui/engine-oil-icon"
import { HelmetIcon } from "@/components/ui/helmet-icon"
import { MaintenanceIcon } from "@/components/ui/maintenance-icon"
import { MotorcycleIcon } from "@/components/ui/motorcycle-icon"
import { Fuel, Mountain, Users, ScrollText, TriangleAlert, Scale, Store, Instagram, Linkedin, Github, Facebook, TrendingUp, Zap, MessageCircle } from "lucide-react"
import Image from "next/image"

const allyPerks = [
  { icon: Users, label: "Miles de clientes potenciales" },
  { icon: TrendingUp, label: "Mayor visibilidad digital" },
  { icon: Zap, label: "Presencia en la app" },
]

export default function RodarLibreLanding() {
  const whatsappNumber = "573195930092"
  const whatsappMessage = encodeURIComponent("¡Hola! Me interesa ser aliado de RodarLibre 🚀")
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

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
        <section id="hero" className="px-4 pt-32 pb-16 text-center scroll-mt-28">
          <div className="max-w-md mx-auto space-y-8">
            {/* Logo */}
            <div className="flex justify-center">
              <Image
                src="/logo.jpg"
                alt="RodarLibre Logo"
                width={384}
                height={384}
                className="w-60 h-60 md:w-96 md:h-96 object-contain"
                priority
                sizes="(max-width: 768px) 240px, 384px"
              />
            </div>

            {/* Title and Subtitle */}
            <div className="space-y-4">
              {/* <h1 className="font-serif font-black text-4xl md:text-5xl text-foreground">Rodar Libre</h1> */}
              <p className="font-sans text-lg text-muted-foreground leading-relaxed">
                La primera app para conductores en Colombia.
                <br />
                <span className="text-primary font-medium">Rueda libre, vive la ruta, cuida tu vehículo.</span>
              </p>
            </div>
          </div>
        </section>

        {/* Download App Section */}
        <section id="download" className="px-4 py-16 bg-muted/20 scroll-mt-28">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif font-bold text-2xl text-center mb-12 text-foreground">
              Descarga la app
            </h2>

            {/* Horizontal layout with App Store and Google Play */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* App Store Section */}
              <div className="flex flex-col items-center justify-center p-8 bg-card border border-border rounded-2xl h-full">
                <a
                  href="https://apps.apple.com/us/app/rodarlibre/id6762035476 "
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Descargar RodarLibre en App Store"
                  className="block w-full"
                >
                  <Image
                    src="/ios_banner.svg"
                    alt="Descargar en App Store"
                    width={200}
                    height={60}
                    className="w-full max-w-xs mx-auto hover:opacity-90 transition-opacity cursor-pointer object-contain"
                  />
                </a>
              </div>

              {/* Google Play Section */}
              <div className="flex flex-col items-center justify-center p-8 bg-card border border-border rounded-2xl h-full">
                <a
                  href="https://play.google.com/store/apps/details?id=com.rodarlibre"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Descargar RodarLibre en Google Play"
                  className="block w-full"
                >
                  <Image
                    src="/google-play-es.svg"
                    alt="Google Play Store"
                    width={200}
                    height={60}
                    className="w-full max-w-xs mx-auto hover:opacity-90 transition-opacity cursor-pointer object-contain"
                  />
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

            {/* Social Networks */}
            <div className="flex justify-center gap-8 mt-8">
              <a
                href="https://instagram.com/rodarlibre.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Seguir a RodarLibre en Instagram"
              >
                <Instagram className="w-14 h-14" />
              </a>
              <a
                href="https://www.facebook.com/rodarlibre.co"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Seguir a RodarLibre en Facebook"
              >
                <Facebook className="w-14 h-14" />
              </a>
              <a
                href="https://www.tiktok.com/@rodarlibre.co"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Seguir a RodarLibre en TikTok"
              >
                <svg className="w-14 h-14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="px-4 py-12 scroll-mt-28">
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

        {/* Allies Section */}
        <section id="aliados" className="px-4 py-12 bg-muted/20 scroll-mt-28">
          <div className="max-w-4xl mx-auto">
            <div className="max-w-sm mx-auto">
              <div className="rounded-3xl border border-border bg-card overflow-hidden shadow-2xl shadow-black/20">
                <div className="bg-gradient-to-br from-primary/20 via-primary/5 to-transparent px-8 pt-10 pb-8 text-center space-y-3 border-b border-border">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Aliados</p>
                  <h2 className="font-serif font-black text-4xl text-foreground leading-tight">
                    Llega a más
                    <br />
                    clientes
                  </h2>
                  <p className="text-muted-foreground text-sm">Haz que tu negocio crezca siendo parte de nuestros aliados</p>
                </div>

                <div className="px-8 py-6 space-y-4 border-b border-border">
                  {allyPerks.map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-4">
                      <div className="p-2 bg-primary/10 rounded-xl flex-shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-sm font-medium text-foreground">{label}</span>
                    </div>
                  ))}
                </div>

                <div className="px-8 py-8 space-y-3 text-center">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full h-14 rounded-2xl bg-[#1FA855] hover:bg-[#188C47] active:scale-95 transition-all text-white font-bold text-lg shadow-lg shadow-[#1FA855]/25"
                  >
                    <MessageCircle className="w-6 h-6 fill-white/30" />
                    Escríbenos por WhatsApp
                  </a>
                  <p className="text-xs text-muted-foreground">¡Ponte en contacto con nosotros!</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section id="team" className="px-4 py-12 scroll-mt-28">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif font-bold text-2xl text-center mb-8 text-foreground">Nuestro Equipo</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                    <h3 className="font-sans font-semibold text-card-foreground text-xl">Juan Roa</h3>
                    <p className="text-muted-foreground">CEO, CTO & Founder, Software Engineer</p>
                    <div className="flex justify-center gap-4 pt-2">
                      <a
                        href="https://instagram.com/thecameratherapy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="Instagram de Juan Roa"
                      >
                        <Instagram className="w-5 h-5" />
                      </a>
                      <a
                        href="https://linkedin.com/in/roadev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="LinkedIn de Juan Roa"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a
                        href="https://github.com/roadev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="GitHub de Juan Roa"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-card border-border overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-square relative">
                    <Image
                      src="/juan_david_mazuera.jpeg"
                      alt="Juan David Mazuera"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6 text-center space-y-2">
                    <h3 className="font-sans font-semibold text-card-foreground text-xl">Juan David Mazuera</h3>
                    <p className="text-muted-foreground">Desarrollador Senior Web / Mobile & Founder</p>
                    <div className="flex justify-center gap-4 pt-2">
                      <a
                        href="https://www.instagram.com/libresen2ruedas/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="Instagram de Juan David Mazuera"
                      >
                        <Instagram className="w-5 h-5" />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/juan-mazuera/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="LinkedIn de Juan David Mazuera"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a
                        href="https://github.com/jdmazuera/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="GitHub de Juan David Mazuera"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-card border-border overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-square relative">
                    <Image
                      src="/juan_diego_roa.jpeg"
                      alt="Juan Diego Roa"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      loading="eager"
                    />
                  </div>
                  <div className="p-6 text-center space-y-2">
                    <h3 className="font-sans font-semibold text-card-foreground text-xl">Juan Diego Roa</h3>
                    <p className="text-muted-foreground">Comercial y Soporte</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Supporters Section */}
        <section id="apoyan" className="px-4 py-12 bg-muted/20 scroll-mt-28">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif font-bold text-2xl text-center mb-8 text-foreground">Apoyan</h2>
            <div className="flex justify-center">
              <a
                href="https://www.youtube.com/@Libresen2Ruedas/videos"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visitar el canal de YouTube de Libres en 2 Ruedas"
                className="block transition-opacity hover:opacity-80"
              >
                <Image
                  src="/libres_en_2_ruedas.jpeg"
                  alt="Libres en 2 Ruedas"
                  width={768}
                  height={768}
                  className="w-full max-w-[358px] mx-auto object-contain rounded-2xl"
                  sizes="(max-width: 768px) 100vw, 358px"
                />
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-4 py-8 bg-background border-t border-border">
          <div className="max-w-xl mx-auto text-center space-y-4">
            <p className="text-sm text-muted-foreground">© 2026 RodarLibre. Todos los derechos reservados.</p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <a
                href="/privacy"
                className="text-muted-foreground hover:text-primary transition-colors whitespace-nowrap"
              >
                Privacidad
              </a>
              <a
                href="/#aliados"
                className="text-muted-foreground hover:text-primary transition-colors whitespace-nowrap"
              >
                Aliados
              </a>
              <a
                href="https://instagram.com/rodarlibre.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors whitespace-nowrap"
                aria-label="Seguir a RodarLibre en Instagram (se abre en nueva ventana)"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/rodarlibre.co"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors whitespace-nowrap"
                aria-label="Seguir a RodarLibre en Facebook (se abre en nueva ventana)"
              >
                Facebook
              </a>
              <a
                href="https://app.rodarlibre.co"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors whitespace-nowrap"
                aria-label="Descarga la app"
              >
                Descarga la App
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
