import type { Metadata } from "next"
import { Users, TrendingUp, Zap, MessageCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Aliados - RodarLibre",
  description: "Haz crecer tu negocio con Rodar Libre. Únete a nuestra red de aliados en Colombia.",
}

const perks = [
  { icon: Users, label: "Miles de clientes potenciales" },
  { icon: TrendingUp, label: "Mayor visibilidad digital" },
  { icon: Zap, label: "Presencia en la app" },
]

export default function AlliesPage() {
  const whatsappNumber = "573195930092"
  const whatsappMessage = encodeURIComponent("¡Hola! Me interesa ser aliado de RodarLibre 🚀")
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-32">
      {/* Starry background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20" />
        <div className="absolute top-10 left-10 w-1 h-1 bg-foreground rounded-full opacity-60" />
        <div className="absolute top-32 right-20 w-1 h-1 bg-foreground rounded-full opacity-80" />
        <div className="absolute top-60 left-1/3 w-0.5 h-0.5 bg-foreground rounded-full opacity-40" />
        <div className="absolute bottom-40 right-1/4 w-1 h-1 bg-foreground rounded-full opacity-70" />
        <div className="absolute bottom-20 left-20 w-0.5 h-0.5 bg-foreground rounded-full opacity-50" />
      </div>

      {/* Card */}
      <div className="relative z-10 w-full max-w-sm mx-auto">
        <div className="rounded-3xl border border-border bg-card overflow-hidden shadow-2xl shadow-black/50">

          {/* Card Header */}
          <div className="bg-gradient-to-br from-primary/20 via-primary/5 to-transparent px-8 pt-10 pb-8 text-center space-y-3 border-b border-border">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Aliados</p>
            <h1 className="font-serif font-black text-4xl text-foreground leading-tight">
              Llega a más<br/>clientes
            </h1>
            <p className="text-muted-foreground text-sm">
              Únete a la lista de espera.
            </p>
          </div>

          {/* Perks */}
          <div className="px-8 py-6 space-y-4 border-b border-border">
            {perks.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-4">
                <div className="p-2 bg-primary/10 rounded-xl flex-shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">{label}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="px-8 py-8 space-y-3 text-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full h-14 rounded-2xl bg-[#25D366] hover:bg-[#1EBE5C] active:scale-95 transition-all text-white font-bold text-lg shadow-lg shadow-[#25D366]/30"
            >
              <MessageCircle className="w-6 h-6 fill-white/30" />
              Escríbenos por WhatsApp
            </a>
            <p className="text-xs text-muted-foreground">¡Ponte en contacto con nosotros!</p>
          </div>

        </div>

        {/* Subtle glow */}
        <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-primary/20 to-transparent opacity-50 blur-xl -z-10" />
      </div>
    </div>
  )
}
