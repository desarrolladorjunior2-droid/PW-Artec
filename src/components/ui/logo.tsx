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
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-extrabold tracking-tight text-[var(--text-primary)]">
          ARTEC
        </span>
        <span className="mt-0.5 font-display text-[0.6rem] font-bold tracking-[0.32em] text-[var(--accent)]">
          S.A.S.
        </span>
      </span>
    </span>
  );
}
