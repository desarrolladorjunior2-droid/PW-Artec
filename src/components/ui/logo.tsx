import Image from "next/image";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <Image
        src="/artec-mark.png"
        alt=""
        width={433}
        height={410}
        priority
        className="h-7 w-auto shrink-0"
      />
      <span className="font-display text-lg font-extrabold tracking-tight text-[var(--text-primary)]">
        ARTEC
        <span className="ml-1 text-[0.6em] font-bold align-top text-[var(--text-secondary)]">
          S.A.S.
        </span>
      </span>
    </span>
  );
}
