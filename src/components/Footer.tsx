import { footerLinks, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="w-full bg-footer-bg">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-[40px] px-[20px] pb-[32px] pt-[56px] sm:px-[40px] md:gap-[56px] md:pb-[44px] md:pt-[72px] lg:px-[80px] lg:pt-[88px]">
        <div className="flex flex-col gap-[24px] text-paper md:flex-row md:items-start md:justify-between md:gap-0">
          <h2 className="font-heading text-[28px] font-medium leading-[1.08] tracking-[-0.6px] md:w-[400px] md:text-[36px] lg:w-[520px] lg:text-[40px]">
            Let&apos;s work together.
          </h2>
          <div className="flex flex-col gap-[14px] font-body text-[17px] md:items-end">
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
