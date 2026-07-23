import * as React from "react";

export function HeroShowcaseVideo() {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    const video = videoRef.current;
    if (!video) {return;}

    const play = () => {
      void video.play().catch(() => undefined);
    };

    play();

    const resumeWhenVisible = () => {
      if (document.visibilityState === "visible") {
        play();
      }
    };

    window.addEventListener("pageshow", play);
    document.addEventListener("visibilitychange", resumeWhenVisible);

    return () => {
      window.removeEventListener("pageshow", play);
      document.removeEventListener("visibilitychange", resumeWhenVisible);
    };
  }, []);

  return (
    <div
      className="relative isolate aspect-video w-full overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#08090b] shadow-2xl shadow-black/50 md:rounded-[2rem]"
      aria-hidden="true"
    >
      <video
        ref={videoRef}
        className="absolute inset-0 size-full object-cover"
        poster="/hero/rodarlibre-hero-poster.webp"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        disablePictureInPicture
      >
        <source src="/hero/rodarlibre-hero.webm" type="video/webm" />
        <source src="/hero/rodarlibre-hero.mp4" type="video/mp4" />
      </video>
      <div className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/10" />
    </div>
  );
}

export default HeroShowcaseVideo;
