import {Composition} from "remotion"

import {HeroVideo} from "./hero-video"

export const RemotionRoot = () => (
  <Composition
    id="RodarLibreHero"
    component={HeroVideo}
    durationInFrames={8 * 30}
    fps={30}
    width={1280}
    height={720}
  />
)
