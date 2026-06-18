/**
 * Contact availability pill — Figma: line border, radius-full, px16 py9,
 * 8px dot + Poppins Medium 12px label, tracking 0.6px.
 */
export default function AvailabilityBadge({
  label = "AVAILABLE FOR NEW ROLES",
}: {
  label?: string;
}) {
  return (
    <div className="inline-flex items-center gap-[8px] rounded-full border border-line px-[16px] py-[9px]">
      <span className="relative flex h-[8px] w-[8px]">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
        <span className="relative inline-flex h-[8px] w-[8px] rounded-full bg-accent" />
      </span>
      <span className="font-body text-[12px] font-medium uppercase tracking-[0.05em] text-ink-muted">
        {label}
      </span>
    </div>
  );
}
