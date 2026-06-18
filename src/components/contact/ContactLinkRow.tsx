type Arrow = "→" | "↗" | "↓";

/**
 * Contact links list row: label left, value + arrow right, hairline top border.
 * Desktop spec: row height ~102px, label Hanken ~32px, value Poppins ~22px.
 */
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
      className="group flex items-center justify-between border-t border-line py-[30px] transition-colors"
    >
      <span className="font-heading text-[32px] font-medium tracking-[-0.01em] text-ink transition-colors group-hover:text-accent">
        {label}
      </span>
      <span className="flex items-center gap-[16px] font-body text-[22px] text-ink-muted transition-colors group-hover:text-ink">
        {value}
        <span className="text-[24px] transition-transform group-hover:translate-x-[3px]">
          {arrow}
        </span>
      </span>
    </a>
  );
}
