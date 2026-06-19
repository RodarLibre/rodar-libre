import type {CSSProperties, ReactNode} from "react"
import {
  AbsoluteFill,
  Easing,
  Img,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion"

const SCREENSHOTS = [
  "app/runt_sync.webp",
  "app/no_fines.webp",
  "app/01-aliados-y-beneficios.webp",
  "app/04-detalle-evento.webp",
] as const

const FEATURES = [
  {eyebrow: "SINCRONIZA", title: "Tu vehículo", accent: "#22c55e"},
  {eyebrow: "CONDUCE", title: "Sin pendientes", accent: "#38bdf8"},
  {eyebrow: "DESCUBRE", title: "Nuevas rutas", accent: "#8b5cf6"},
  {eyebrow: "COMPARTE", title: "La aventura", accent: "#f97316"},
] as const

const clamp = {
  extrapolateLeft: "clamp" as const,
  extrapolateRight: "clamp" as const,
}

const cyclicDistance = (a: number, b: number) => {
  const distance = Math.abs(a - b)
  return Math.min(distance, 1 - distance)
}

const PhoneFrame = ({
  children,
  style,
  accent = "#22c55e",
}: {
  children: ReactNode
  style: CSSProperties
  accent?: string
}) => (
  <div
    style={{
      position: "absolute",
      width: 286,
      height: 616,
      borderRadius: 48,
      padding: 8,
      background: "linear-gradient(145deg, #4c4c52 0%, #151518 38%, #050506 100%)",
      boxShadow: `0 42px 90px rgba(0,0,0,.65), 0 0 64px ${accent}24, inset 0 0 0 1px rgba(255,255,255,.17)`,
      overflow: "hidden",
      transformOrigin: "50% 82%",
      ...style,
    }}
  >
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        overflow: "hidden",
        borderRadius: 40,
        backgroundColor: "#0a0a0b",
      }}
    >
      {children}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: 10,
          width: 72,
          height: 20,
          borderRadius: 999,
          background: "#050506",
          transform: "translateX(-50%)",
          boxShadow: "inset 0 0 0 1px rgba(255,255,255,.03)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: 40,
          boxShadow: "inset 0 0 0 1px rgba(255,255,255,.08)",
          pointerEvents: "none",
        }}
      />
    </div>
  </div>
)

const RouteLine = ({progress}: {progress: number}) => (
  <svg
    viewBox="0 0 1280 720"
    width="1280"
    height="720"
    style={{position: "absolute", inset: 0, opacity: 0.46}}
  >
    <defs>
      <linearGradient id="route-gradient" x1="0" x2="1">
        <stop offset="0" stopColor="#22c55e" stopOpacity="0" />
        <stop offset=".32" stopColor="#22c55e" />
        <stop offset=".68" stopColor="#38bdf8" />
        <stop offset="1" stopColor="#38bdf8" stopOpacity="0" />
      </linearGradient>
      <filter id="route-glow">
        <feGaussianBlur stdDeviation="5" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <path
      d="M-70 570 C190 368 350 665 574 492 C784 329 940 410 1350 170"
      fill="none"
      stroke="url(#route-gradient)"
      strokeWidth="3"
      strokeDasharray="10 22"
      strokeDashoffset={-progress * 32}
      filter="url(#route-glow)"
    />
  </svg>
)

export const HeroVideo = () => {
  const frame = useCurrentFrame()
  const {durationInFrames} = useVideoConfig()
  const progress = frame / durationInFrames
  const orbit = progress * Math.PI * 2
  const intro = 1
  const masterOpacity = 1

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#08090b",
        color: "white",
        fontFamily: "Arial, Helvetica, sans-serif",
        overflow: "hidden",
      }}
    >
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(circle at 70% 42%, rgba(34,197,94,.15), transparent 25%), radial-gradient(circle at 45% 74%, rgba(56,189,248,.12), transparent 33%), linear-gradient(145deg, #131519 0%, #08090b 52%, #050506 100%)",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.18,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
          transform: `translate(${Math.sin(orbit) * 10}px, ${Math.cos(orbit) * 8}px)`,
        }}
      />

      <RouteLine progress={progress} />

      {FEATURES.map((feature, index) => {
        const center = index / FEATURES.length
        const distance = cyclicDistance(progress, center)
        const visibility = interpolate(distance, [0.04, 0.16], [1, 0], {
          ...clamp,
          easing: Easing.out(Easing.cubic),
        })

        return (
          <div
            key={feature.title}
            style={{
              position: "absolute",
              left: 58,
              bottom: 62,
              width: 305,
              opacity: visibility * masterOpacity,
              transform: `translateY(${(1 - visibility) * 24}px)`,
            }}
          >
            <div
              style={{
                color: feature.accent,
                fontSize: 16,
                fontWeight: 800,
                letterSpacing: 5,
                marginBottom: 8,
              }}
            >
              {feature.eyebrow}
            </div>
            <div style={{fontSize: 42, fontWeight: 800, letterSpacing: -1.7, lineHeight: 1.02}}>
              {feature.title}
            </div>
            <div
              style={{
                marginTop: 18,
                width: 68,
                height: 3,
                borderRadius: 4,
                background: feature.accent,
                boxShadow: `0 0 20px ${feature.accent}`,
              }}
            />
          </div>
        )
      })}

      <PhoneFrame
        accent="#38bdf8"
        style={{
          left: 414,
          top: 111 + Math.sin(orbit + 1.7) * 8,
          opacity: masterOpacity * 0.52,
          transform: `perspective(1100px) rotateY(13deg) rotateZ(-7deg) scale(${0.8 + intro * 0.05}) translateX(${(1 - intro) * 80}px)`,
          filter: "saturate(.78) brightness(.72)",
        }}
      >
        <Img
          src={staticFile("app/01-aliados-y-beneficios.webp")}
          style={{width: "100%", height: "100%", objectFit: "cover"}}
        />
      </PhoneFrame>

      <PhoneFrame
        style={{
          left: 702,
          top: 54 + Math.sin(orbit) * 7,
          opacity: masterOpacity,
          zIndex: 3,
          transform: `perspective(1100px) rotateY(-2deg) rotateZ(${Math.sin(orbit) * 0.65}deg) scale(${0.91 + intro * 0.09}) translateY(${(1 - intro) * 55}px)`,
        }}
      >
        {SCREENSHOTS.map((src, index) => {
          const center = index / SCREENSHOTS.length
          const distance = cyclicDistance(progress, center)
          const opacity = interpolate(distance, [0.02, 0.12], [1, 0], {
            ...clamp,
            easing: Easing.inOut(Easing.cubic),
          })

          return (
            <Img
              key={src}
              src={staticFile(src)}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                opacity,
                transform: `scale(${1.025 - opacity * 0.025})`,
              }}
            />
          )
        })}
      </PhoneFrame>

      <PhoneFrame
        accent="#8b5cf6"
        style={{
          left: 984,
          top: 104 + Math.sin(orbit + 3.2) * 9,
          opacity: masterOpacity * 0.48,
          transform: `perspective(1100px) rotateY(-16deg) rotateZ(7deg) scale(${0.79 + intro * 0.05}) translateX(${(1 - intro) * -80}px)`,
          filter: "saturate(.78) brightness(.7)",
        }}
      >
        <Img
          src={staticFile("app/04-detalle-evento.webp")}
          style={{width: "100%", height: "100%", objectFit: "cover"}}
        />
      </PhoneFrame>

      <div
        style={{
          position: "absolute",
          right: 35,
          bottom: 26,
          color: "rgba(255,255,255,.56)",
          fontSize: 13,
          fontWeight: 700,
          letterSpacing: 1.4,
        }}
      >
        Tu Vehículo, Tu Mundo, Tu App
      </div>
    </AbsoluteFill>
  )
}
