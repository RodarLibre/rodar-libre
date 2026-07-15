"use client"

import { useSearchParams } from "next/navigation"
import Image from "next/image"
import { Suspense } from "react"

function OgTestContent() {
  const searchParams = useSearchParams()
  const version = searchParams.get("v") || "1"

  // 1200x630 layout container
  const containerStyle = {
    width: "1200px",
    height: "630px",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    position: "relative" as const,
    overflow: "hidden",
  }

  if (version === "1") {
    // Variation 1: Solid Black Background with Centered Lettering Logo
    return (
      <div style={{ ...containerStyle, backgroundColor: "#000000" }} id="og-card">
        <div className="relative w-[700px] h-[385px]">
          <Image
            src="/logo-lettering.png"
            alt="RodarLibre"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    )
  }

  if (version === "2") {
    // Variation 2: Deep Dark Radial Gradient (Sleek and Premium) with Centered Lettering Logo
    return (
      <div
        style={{
          ...containerStyle,
          background: "radial-gradient(circle at center, #111115 0%, #000000 100%)",
        }}
        id="og-card"
      >
        <div className="relative w-[700px] h-[385px]">
          <Image
            src="/logo-lettering.png"
            alt="RodarLibre"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    )
  }

  if (version === "3") {
    // Variation 3: Premium Brand Glow Background (emerald-accented) with Centered Lettering Logo
    return (
      <div
        style={{
          ...containerStyle,
          background: "radial-gradient(circle at center, #051510 0%, #000000 100%)",
        }}
        id="og-card"
      >
        {/* Subtle, soft ambient glow in the background */}
        <div className="absolute w-[600px] h-[350px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />
        
        <div className="relative w-[700px] h-[385px] z-10">
          <Image
            src="/logo-lettering.png"
            alt="RodarLibre"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    )
  }

  return <div>Invalid version</div>
}

export default function OgTestPage() {
  return (
    <div className="min-h-screen bg-zinc-900 flex items-center justify-center p-8">
      <Suspense fallback={<div>Cargando...</div>}>
        <OgTestContent />
      </Suspense>
    </div>
  )
}
