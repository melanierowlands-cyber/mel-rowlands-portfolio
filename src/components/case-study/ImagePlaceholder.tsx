/**
 * Clearly-labelled stand-in for an asset that isn't available yet.
 * Holds the exact aspect ratio so the real image drops in with no layout shift.
 */
export default function ImagePlaceholder({
  label,
  width,
  height,
  className = "",
}: {
  label: string;
  width: number;
  height: number;
  className?: string;
}) {
  return (
    <div
      className={`flex w-full items-center justify-center rounded-[14px] border border-dashed border-line bg-paper-alt ${className}`}
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      <span className="px-[16px] text-center font-body text-[13px] uppercase tracking-[0.06em] text-ink-muted">
        {label}
      </span>
    </div>
  );
}
