import Link from "next/link";

type Variant = "primary" | "secondary";

/**
 * Pill button. Desktop spec from Figma hero:
 * primary  = accent fill, on-accent text
 * secondary = transparent, ~1.75px ink border, ink text
 * padding ≈ 18.6px / 34.9px, text Poppins Medium 18.6px.
 */
export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center rounded-full font-body font-medium text-[14px] tracking-[0.01em] px-[22px] py-[12px] md:text-[18px] md:px-[35px] md:py-[18px] transition-colors duration-150";
  const styles =
    variant === "primary"
      ? "bg-accent text-on-accent hover:bg-[#c9743b]"
      : "border-[1.75px] border-ink text-ink hover:bg-ink hover:text-paper";

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}
