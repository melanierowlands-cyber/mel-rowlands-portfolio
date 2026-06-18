/**
 * Uppercase, tracked eyebrow / category label.
 * Poppins Medium 13px, accent colour, 0.06em tracking by default.
 */
export default function Tag({
  children,
  className = "",
  as: Tag = "p",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "p" | "span";
}) {
  return (
    <Tag
      className={`font-body text-[13px] font-medium uppercase tracking-[0.06em] text-accent ${className}`}
    >
      {children}
    </Tag>
  );
}
