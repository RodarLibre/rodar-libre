"use client"

import Image from "next/image"
import * as React from "react"

export function HeroShowcaseVideo() {
  const videoRef = React.useRef<HTMLVideoElement>(null)

  React.useEffect(() => {
    const video = videoRef.current
    if (!video) {return}

    video.muted = true
    video.defaultMuted = true

    const play = () => void video.play().catch(() => undefined)
    const resumeWhenVisible = () => {
      if (document.visibilityState === "visible") {play()}
    }

    play()
    window.addEventListener("pageshow", play)
    document.addEventListener("visibilitychange", resumeWhenVisible)

    return () => {
      window.removeEventListener("pageshow", play)
      document.removeEventListener("visibilitychange", resumeWhenVisible)
    }
  }, [])

  return (
    <div
      className="relative isolate aspect-video w-full overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#08090b] shadow-2xl shadow-black/50 md:rounded-[2rem]"
      aria-hidden="true"
    >
      <Image
        src="/hero/rodarlibre-hero-poster.jpg"
        alt=""
        fill
        priority
        sizes="(max-width: 767px) 100vw, 58vw"
        className="object-cover"
      />

      <video
        ref={videoRef}
        className="absolute inset-0 size-full object-cover"
        poster="/hero/rodarlibre-hero-poster.jpg?v=5"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        tabIndex={-1}
        disablePictureInPicture
        onLoadedData={(event) => void event.currentTarget.play().catch(() => undefined)}
      >
        <source src="/hero/rodarlibre-hero.mp4?v=5" type="video/mp4" />
        <source src="/hero/rodarlibre-hero.webm?v=5" type="video/webm" />
      </video>

      <div className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/10" />
    </div>
  )
}
