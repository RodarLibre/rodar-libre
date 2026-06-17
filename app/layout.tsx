import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import { Open_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Navbar } from "@/components/navbar"
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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://rodarlibre.co"),
  title: "RodarLibre - La primera app para conductores en Colombia",
  description: "Rueda libre, vive la ruta, cuida tu vehículo. Síguenos en @rodarlibre.co",
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
    title: "RodarLibre - La primera app para conductores en Colombia",
    description: "Rueda libre, vive la ruta, cuida tu vehículo. Síguenos en @rodarlibre.co",
    url: "https://rodarlibre.co/",
    siteName: "RodarLibre",
    images: [
      {
        url: "/squared-logo.png",
        width: 683,
        height: 1024,
        alt: "RodarLibre - App para conductores en Colombia",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RodarLibre - La primera app para conductores en Colombia",
    description: "Rueda libre, vive la ruta, cuida tu vehículo. Síguenos en @rodarlibre.co",
    images: ["/logo-og.webp"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${montserrat.variable} ${openSans.variable} antialiased`}>
      <body className="dark">
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
