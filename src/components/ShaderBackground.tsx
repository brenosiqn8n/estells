import {
  Shader,
  Swirl,
  ChromaFlow,
  FlutedGlass,
  FilmGrain,
} from "shaders/react";

/** Golden animated hero background. Lazy-loaded so three/shaders stays out of
 *  the initial bundle. */
export default function ShaderBackground() {
  return (
    <Shader className="h-full w-full">
      <Swirl colorA="#ffffff" colorB="#f0efeb" detail={1.7} />
      <ChromaFlow
        baseColor="#ffffff"
        downColor="#d4a853"
        leftColor="#d4a853"
        rightColor="#e8c97a"
        upColor="#e8c97a"
        momentum={13}
        radius={3.5}
      />
      <FlutedGlass
        aberration={0.61}
        angle={31}
        frequency={8}
        highlight={0.12}
        highlightSoftness={0}
        lightAngle={-90}
        refraction={4}
        shape="rounded"
        softness={1}
        speed={0.15}
      />
      <FilmGrain strength={0.05} />
    </Shader>
  );
}
