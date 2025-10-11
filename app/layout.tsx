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
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { url: "/favicon/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  manifest: "/favicon/site.webmanifest",
  openGraph: {
    title: "Rodar Libre - La primera app para moter@s en Colombia",
    description: "Rueda libre, vive la ruta. Cuida tu moto. Síguenos en @rodarlibre.co",
    url: "https://rodarlibre.co/",
    siteName: "Rodar Libre",
    images: [
      {
        url: "/squared-logo.png",
        width: 1024,
        height: 1024,
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
    images: ["/logo-og.jpg"],
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
