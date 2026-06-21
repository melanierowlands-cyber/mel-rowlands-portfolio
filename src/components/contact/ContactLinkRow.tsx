type Arrow = "→" | "↗" | "↓";

export default function ContactLinkRow({
  label,
  value,
  href,
  arrow,
  external = false,
}: {
  label: string;
  value: string;
  href: string;
  arrow: Arrow;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group flex items-center justify-between border-t border-line py-[20px] transition-colors md:py-[30px]"
    >
      <span className="font-heading text-[22px] font-medium tracking-[-0.01em] text-ink transition-colors group-hover:text-accent md:text-[28px] lg:text-[32px]">
        {label}
      </span>
      <span className="flex items-center gap-[10px] font-body text-[14px] text-ink-muted transition-colors group-hover:text-ink md:gap-[16px] md:text-[18px] lg:text-[22px]">
        <span className="hidden sm:inline">{value}</span>
        <span className="text-[18px] transition-transform group-hover:translate-x-[3px] md:text-[24px]">
          {arrow}
        </span>
      </span>
    </a>
  );
}
