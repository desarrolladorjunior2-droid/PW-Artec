import { SectionMotion } from "@/components/ui/section-motion";
import { brandColor, sectionTint } from "@/lib/brand-colors";

const PHOTOS = [
  { src: "/images/gallery/01.webp", alt: "Agricultor consultando una tableta al atardecer entre cultivos" },
  { src: "/images/gallery/02.webp", alt: "Equipo de trabajo revisando datos frente a un computador en una oficina" },
  { src: "/images/gallery/03.webp", alt: "Agente de contact center con diadema sonriendo a cámara" },
  { src: "/images/gallery/04.webp", alt: "Manos usando un celular con íconos de redes sociales flotando" },
  { src: "/images/gallery/05.webp", alt: "Mujer recolectando hojas en un cultivo verde" },
  { src: "/images/gallery/06.webp", alt: "Persona interactuando con una pantalla de código HTML y CSS" },
  { src: "/images/gallery/07.webp", alt: "Mujer con laptop conversando al aire libre" },
  { src: "/images/gallery/08.webp", alt: "Vista aérea de un escritorio con laptops y reportes de datos" },
  { src: "/images/gallery/09.webp", alt: "Técnico con laptop en un centro de datos" },
  { src: "/images/gallery/10.webp", alt: "Manos escribiendo en un teclado dentro de un contact center" },
  { src: "/images/gallery/11.webp", alt: "Mujer revisando su laptop en un parque" },
  { src: "/images/gallery/12.webp", alt: "Diseño de un espacio interior con sofá rojo y escalera" },
] as const;

function Track({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul
      className="flex shrink-0 gap-4 pr-4 md:gap-6 md:pr-6"
      aria-hidden={hidden || undefined}
    >
      {PHOTOS.map((photo, i) => (
        <li
          key={photo.src}
          className="relative h-56 w-72 shrink-0 overflow-hidden rounded-2xl border-2 sm:h-64 sm:w-80 md:h-80 md:w-[26rem]"
          style={{ borderColor: brandColor(i) }}
        >
          {/* Pre-optimized WebP from the ARTEC portfolio. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photo.src}
            alt={hidden ? "" : photo.alt}
            width={900}
            height={695}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
        </li>
      ))}
    </ul>
  );
}

export function Gallery() {
  return (
    <section
      aria-label="Galería de imágenes"
      style={sectionTint("var(--brand-indigo)")}
      className="section-tinted relative overflow-hidden border-y border-[var(--border)] bg-[var(--background-glass)] py-14 md:py-20"
    >
      <SectionMotion tint="var(--brand-indigo)" seed={4} strong />
      <div className="relative overflow-hidden motion-reduce:overflow-x-auto">
        <div className="gallery-track flex w-max">
          <Track />
          <Track hidden />
        </div>
      </div>
    </section>
  );
}
