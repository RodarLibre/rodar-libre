import Image from "next/image"

/**
 * Velocidad del carousel: segundos que tarda en completar un ciclo.
 * Mayor valor = movimiento más lento.
 */
const MARQUEE_DURATION_SECONDS = 35

/** Para agregar un aliado: sube el logo a /public/allies y añade una entrada aquí. */
const allies = [
  { name: "RS Rueda Seguro", logo: "/allies/rs-rueda-seguro-biker.webp" },
  { name: "Royal Enfield Cali Panamericana", logo: "/allies/re_panamericana.webp" },
  { name: "Hero Cali Panamericana", logo: "/allies/hero_panamericana.webp" },
  // { name: "Capital Motos", logo: "/allies/capital_motos_logo.jpg" },
  { name: "Nómadas Urbanos", logo: "/allies/nomadas_urbanos.jpg" },
  { name: "MotoEuforia", logo: "/allies/moto_euforia.webp" },
  // { name: "Legión TT Colombia", logo: "/allies/legion_tt_colombia.jpg" },
  // { name: "KB Motos Racing", logo: "/allies/kb_motos_racing.jpg" },
  // { name: "MotoExplorer", logo: "/allies/motoexplorer_logo.png" },
  // { name: "RS Rueda Seguro Biker", logo: "/allies/rs-rueda-seguro-biker.jpeg" },
  { name: "Damotos Cali", logo: "/allies/damotos_logo.webp" },
  // { name: "Motores En Familia", logo: "/allies/motores_en_familia.webp" },
  { name: "Mostacho Café", logo: "/allies/mostacho.webp" },
  // { name: "Damotos", logo: "/allies/damotos_logo.png" },
  { name: "Granautos", logo: "/allies/granautos.webp" },
  { name: "Café Racer DC", logo: "/allies/caferacer.webp" },
  { name: "Be Twin Café Jaus", logo: "/allies/betwincoffeejaus.webp" },
  { name: "Smak accesorios", logo: "/allies/smak_logo.webp" },
]

function AllyList({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <ul
      aria-hidden={ariaHidden || undefined}
      className={`flex items-center gap-6 pr-6 md:gap-10 md:pr-10 ${ariaHidden ? "motion-reduce:hidden" : ""}`}
    >
      {allies.map((ally) => (
        <li key={ally.name} className="flex-none">
          <figure className="flex flex-col items-center gap-3">
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl overflow-hidden border border-border bg-card shadow-md">
              <Image
                src={ally.logo}
                alt={ariaHidden ? "" : `Logo de ${ally.name}`}
                width={112}
                height={112}
                loading="lazy"
                sizes="(max-width: 768px) 96px, 112px"
                className="w-full h-full object-cover"
              />
            </div>
            <figcaption className="text-xs font-medium text-muted-foreground text-center max-w-28 leading-tight">
              {ally.name}
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  )
}

export function AlliesMarquee() {
  return (
    <div
      role="region"
      aria-label="Nuestros aliados actuales"
      className="group relative overflow-hidden motion-reduce:overflow-x-auto py-2 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
      style={{ "--marquee-duration": `${MARQUEE_DURATION_SECONDS}s` } as React.CSSProperties}
    >
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused] motion-reduce:animate-none">
        <AllyList />
        {/* Copia para lograr el loop infinito; oculta para lectores de pantalla */}
        <AllyList ariaHidden />
      </div>
    </div>
  )
}
