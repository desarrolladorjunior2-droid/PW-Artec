import { Logo } from "@/components/ui/logo";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { SectionPhoto } from "@/components/ui/section-photo";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[var(--border)] bg-[var(--surface-glass)] backdrop-blur-xl">
      <SectionPhoto
        src="/images/sections/footer.webp"
        colors={["var(--brand-indigo)", "var(--brand-green)"]}
      />
      <div className="container-artec relative grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:py-20">
        <div className="max-w-sm">
          <Logo />
          <p className="mt-5 text-sm leading-relaxed text-[var(--text-secondary)]">
            Conectamos marcas y territorios con estrategia digital,
            tecnología y conversión a gran escala.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)]">
            Navegación
          </p>
          <ul className="mt-5 space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--accent)]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)]">
            Contacto
          </p>
          <ul className="mt-5 space-y-3 text-sm text-[var(--text-secondary)]">
            <li>{SITE.address}</li>
            <li>{SITE.city}</li>
            <li>
              <a
                href={`mailto:${SITE.email}`}
                className="transition-colors hover:text-[var(--accent)]"
              >
                {SITE.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${SITE.phoneHref}`}
                className="transition-colors hover:text-[var(--accent)]"
              >
                {SITE.phone}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-[var(--border)]">
        <div className="container-artec flex flex-col items-center justify-between gap-3 py-6 text-xs text-[var(--text-muted)] sm:flex-row">
          <p>© {new Date().getFullYear()} ARTEC S.A.S. Todos los derechos reservados.</p>
          <p>Bogotá D.C., Colombia</p>
        </div>
      </div>
    </footer>
  );
}
