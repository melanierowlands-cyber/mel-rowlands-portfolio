type Arrow = "→" | "↗" | "↓";

export default function ContactLinkRow({
  label,
  value,
  href,
  arrow,
  external = false,
  download,
}: {
  label: string;
  value: string;
  href: string;
  arrow: Arrow;
  external?: boolean;
  download?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      download={download || undefined}
      className="group flex items-center justify-between border-t border-line py-[16px] transition-colors md:py-[22px]"
    >
      <span className="font-heading text-[18px] font-medium tracking-[-0.01em] text-ink transition-colors group-hover:text-accent md:text-[22px] lg:text-[26px]">
        {label}
      </span>
      <span className="flex items-center gap-[8px] font-body text-[13px] text-ink-muted transition-colors group-hover:text-ink md:gap-[12px] md:text-[15px] lg:text-[17px]">
        <span className="hidden sm:inline">{value}</span>
        <span className="text-[16px] transition-transform group-hover:translate-x-[3px] md:text-[20px]">
          {arrow}
        </span>
      </span>
    </a>
  );
}
