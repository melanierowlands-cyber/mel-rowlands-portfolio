import { footerLinks, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="w-full bg-footer-bg">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-[32px] px-[20px] pb-[28px] pt-[44px] sm:px-[40px] md:gap-[40px] md:pb-[36px] md:pt-[56px] lg:px-[80px]">
        <div className="flex flex-col gap-[20px] text-paper md:flex-row md:items-start md:justify-between md:gap-0">
          <h2 className="font-heading text-[24px] font-medium leading-[1.08] tracking-[-0.4px] md:w-[360px] md:text-[28px]">
            Let&apos;s work together.
          </h2>
          <div className="flex flex-col gap-[12px] font-body text-[15px] md:items-end">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                download={link.download || undefined}
                className="underline decoration-from-font underline-offset-2 transition-opacity hover:opacity-70"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="h-px w-full bg-white/20" />

        <div className="flex items-center justify-between font-body text-[13px] text-white/55">
          <p>{site.copyright}</p>
          <p>{site.location}</p>
        </div>
      </div>
    </footer>
  );
}
