import { footerLinks, site } from "@/lib/site";

/**
 * Site footer CTA band. Desktop spec:
 * bg #4B4744 · pt 88 / pb 44 / px 80 · gap 56
 * heading Hanken Grotesk Medium 40px (no Geist) · links Poppins 17px underlined
 */
export default function Footer() {
  return (
    <footer className="w-full bg-footer-bg">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-[56px] px-[80px] pb-[44px] pt-[88px]">
        <div className="flex items-start justify-between text-paper">
          <h2 className="w-[520px] font-heading text-[40px] font-medium leading-[1.08] tracking-[-0.6px]">
            Let&apos;s work together.
          </h2>
          <div className="flex flex-col items-end gap-[14px] font-body text-[17px]">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className="underline decoration-from-font underline-offset-2 transition-opacity hover:opacity-70"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="h-px w-full bg-white/20" />

        <div className="flex items-center justify-between font-body text-[14px] text-white/55">
          <p>{site.copyright}</p>
          <p>{site.location}</p>
        </div>
      </div>
    </footer>
  );
}
