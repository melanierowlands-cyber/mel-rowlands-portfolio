"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, site } from "@/lib/site";

export default function Nav() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/#work") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-paper">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-[80px] py-[34px]">
        <Link
          href="/"
          className="font-heading text-[22px] font-medium tracking-[-0.22px] text-ink"
        >
          {site.name}
        </Link>
        <nav className="flex items-center gap-[44px] font-body text-[17px]">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                className={
                  active
                    ? "text-ink underline decoration-from-font underline-offset-4"
                    : "text-ink-muted transition-colors hover:text-ink"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
