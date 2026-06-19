"use client"

import * as React from "react"

export function HeroShowcaseVideo() {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const videoRef = React.useRef<HTMLVideoElement>(null)
  const hasLoadedRef = React.useRef(false)

  React.useEffect(() => {
    const container = containerRef.current
    const video = videoRef.current
    if (!container || !video) {return}

    // --- helpers ---
    const play = () => void video.play().catch(() => undefined)

    const resumeWhenVisible = () => {
      if (document.visibilityState === "visible" && hasLoadedRef.current) {play()}
    }

    // --- lazy-load: only fetch the video when the container is in view ---
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasLoadedRef.current) {return}
        hasLoadedRef.current = true

        // Set sources dynamically so the browser doesn't fetch anything until now
        const webm = document.createElement("source")
        webm.src = "/hero/rodarlibre-hero.webm?v=5"
        webm.type = "video/webm"

        const mp4 = document.createElement("source")
        mp4.src = "/hero/rodarlibre-hero.mp4?v=5"
        mp4.type = "video/mp4"

        video.appendChild(webm)
        video.appendChild(mp4)
        video.load()
        play()

        observer.disconnect()
      },
      { rootMargin: "200px" }, // start loading slightly before it scrolls into view
    )

    observer.observe(container)

    window.addEventListener("pageshow", play)
    document.addEventListener("visibilitychange", resumeWhenVisible)

    return () => {
      observer.disconnect()
      window.removeEventListener("pageshow", play)
      document.removeEventListener("visibilitychange", resumeWhenVisible)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative isolate aspect-video w-full overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#08090b] shadow-2xl shadow-black/50 md:rounded-[2rem]"
      aria-hidden="true"
    >
      {/* Single poster image — no duplicate <Image> download */}
      <video
        ref={videoRef}
        className="absolute inset-0 size-full object-cover"
        poster="/hero/rodarlibre-hero-poster.webp"
        loop
        muted
        playsInline
        preload="none"
        tabIndex={-1}
        disablePictureInPicture
      >
        {/* Sources are injected by the IntersectionObserver above */}
      </video>

      <div className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/10" />
    </div>
  )
}
