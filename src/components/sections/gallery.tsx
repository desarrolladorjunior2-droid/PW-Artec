import { ArrowUpRight } from "lucide-react";
import { SectionMotion } from "@/components/ui/section-motion";
import { brandColor, sectionTint } from "@/lib/brand-colors";

const PHOTOS = [
  { src: "/images/gallery/01.webp", alt: "Agricultor consultando una tableta al atardecer entre cultivos", href: "#case-study", to: "Caso Putumayo" },
  { src: "/images/gallery/02.webp", alt: "Equipo de trabajo revisando datos frente a un computador en una oficina", href: "#capabilities", to: "Capacidades" },
  { src: "/images/gallery/03.webp", alt: "Agente de contact center con diadema sonriendo a cámara", href: "#solutions", to: "Soluciones" },
  { src: "/images/gallery/04.webp", alt: "Manos usando un celular con íconos de redes sociales flotando", href: "#solutions", to: "Soluciones" },
  { src: "/images/gallery/05.webp", alt: "Mujer recolectando hojas en un cultivo verde", href: "#case-study", to: "Caso Putumayo" },
  { src: "/images/gallery/06.webp", alt: "Persona interactuando con una pantalla de código HTML y CSS", href: "#capabilities", to: "Capacidades" },
  { src: "/images/gallery/07.webp", alt: "Mujer con laptop conversando al aire libre", href: "#about", to: "Nosotros" },
  { src: "/images/gallery/08.webp", alt: "Vista aérea de un escritorio con laptops y reportes de datos", href: "#impact", to: "Impacto" },
  { src: "/images/gallery/09.webp", alt: "Técnico con laptop en un centro de datos", href: "#capabilities", to: "Capacidades" },
  { src: "/images/gallery/10.webp", alt: "Manos escribiendo en un teclado dentro de un contact center", href: "#solutions", to: "Soluciones" },
  { src: "/images/gallery/11.webp", alt: "Mujer revisando su laptop en un parque", href: "#contact", to: "Contacto" },
  { src: "/images/gallery/12.webp", alt: "Diseño de un espacio interior con sofá rojo y escalera", href: "#about", to: "Nosotros" },
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
          <a
            href={photo.href}
            tabIndex={hidden ? -1 : undefined}
            aria-label={`${photo.alt} — ir a ${photo.to}`}
            className="group relative block h-full w-full focus-visible:outline-offset-[-4px]"
          >
            {/* Pre-optimized WebP from the ARTEC portfolio. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photo.src}
              alt=""
              width={900}
              height={695}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 group-focus-visible:scale-105"
            />
            <span className="pointer-events-none absolute inset-x-3 bottom-3 flex translate-y-2 items-center justify-between gap-2 rounded-full bg-[var(--surface-glass-strong)] px-4 py-2 text-sm font-semibold text-[var(--text-primary)] opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 [@media(hover:none)]:translate-y-0 [@media(hover:none)]:opacity-100">
              {photo.to}
              <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </span>
          </a>
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
      className="section-tinted relative overflow-hidden section-overlap bg-[var(--background-glass)] py-14 md:py-20"
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
