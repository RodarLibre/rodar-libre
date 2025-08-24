import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import { Open_Sans } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "900"],
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
  title: "Rodar Libre - La primera app para moter@s en Colombia",
  description: "Rueda libre, vive la ruta. Cuida tu moto. Síguenos en @rodarlibre.co",
  generator: "v0.app",
  openGraph: {
    title: "Rodar Libre - La primera app para moter@s en Colombia",
    description: "Rueda libre, vive la ruta. Cuida tu moto. Síguenos en @rodarlibre.co",
    url: "https://rodarlibre.co/",
    siteName: "Rodar Libre",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Rodar Libre - App para moteros en Colombia",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rodar Libre - La primera app para moteros en Colombia",
    description: "Rueda libre, vive la ruta. Cuida tu moto. Síguenos en @rodarlibre.co",
    images: ["/logo.jpg"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${montserrat.variable} ${openSans.variable} antialiased`}>
      <body className="dark">{children}</body>
    </html>
  )
}
