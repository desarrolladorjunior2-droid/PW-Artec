export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <circle cx="13" cy="4.5" r="2.5" fill="var(--accent)" />
        <circle cx="4" cy="19" r="2.5" fill="var(--text-primary)" />
        <circle cx="22" cy="19" r="2.5" fill="var(--text-primary)" />
        <path
          d="M13 7V13M13 13L6 17M13 13L20 17"
          stroke="var(--text-secondary)"
          strokeWidth="1.4"
        />
      </svg>
      <span className="font-display text-lg font-semibold tracking-tight text-[var(--text-primary)]">
        ARTEC
      </span>
    </span>
  );
}
