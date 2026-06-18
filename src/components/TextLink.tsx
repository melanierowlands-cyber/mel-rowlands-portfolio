import Link from "next/link";

type Arrow = "internal" | "external" | "download" | "none";

const glyphs: Record<Arrow, string> = {
  internal: "→",
  external: "↗",
  download: "↓",
  none: "",
};

/**
 * Inline editorial link: underline + trailing arrow glyph.
 * → internal · ↗ external · ↓ download
 */
export default function TextLink({
  href,
  children,
  arrow = "internal",
  external = false,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  arrow?: Arrow;
  external?: boolean;
  className?: string;
}) {
  const glyph = glyphs[arrow];
  const content = (
    <span className={`group inline-flex items-center gap-[8px] ${className}`}>
      <span className="underline decoration-from-font underline-offset-2">
        {children}
      </span>
      {glyph && (
        <span className="transition-transform duration-150 group-hover:translate-x-[3px]">
          {glyph}
        </span>
      )}
    </span>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }
  return <Link href={href}>{content}</Link>;
}
