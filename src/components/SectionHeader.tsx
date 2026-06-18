import Tag from "./Tag";

/**
 * Eyebrow + heading pair used across pages.
 * Heading defaults to Hanken Grotesk SemiBold (per locked directive — no Geist).
 */
export default function SectionHeader({
  eyebrow,
  heading,
  className = "",
  headingClassName = "text-[44px] leading-[1.05] tracking-[-0.02em]",
}: {
  eyebrow: string;
  heading: string;
  className?: string;
  headingClassName?: string;
}) {
  return (
    <div className={`flex flex-col gap-[16px] ${className}`}>
      <Tag>{eyebrow}</Tag>
      <h2 className={`font-heading font-semibold text-ink ${headingClassName}`}>
        {heading}
      </h2>
    </div>
  );
}
