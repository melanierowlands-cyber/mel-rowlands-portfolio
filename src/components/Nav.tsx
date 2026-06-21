"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks, site } from "@/lib/site";

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/#work") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-paper">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-[20px] py-[20px] sm:px-[40px] md:py-[28px] lg:px-[80px] lg:py-[34px]">
        <Link
          href="/"
          className="font-heading text-[18px] font-medium tracking-[-0.22px] text-ink lg:text-[22px]"
        >
          {site.name}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-[32px] font-body text-[15px] md:flex lg:gap-[44px] lg:text-[17px]">
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

        {/* Mobile hamburger button */}
        <button
          className="flex flex-col gap-[5px] p-[4px] md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span
            className={`block h-[2px] w-[24px] bg-ink transition-transform duration-200 ${
              menuOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-[24px] bg-ink transition-opacity duration-200 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-[24px] bg-ink transition-transform duration-200 ${
              menuOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu drawer */}
      {menuOpen && (
        <div className="border-t border-line bg-paper px-[20px] py-[8px] sm:px-[40px] md:hidden">
          <nav className="flex flex-col">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`border-b border-line/50 py-[16px] font-body text-[18px] ${
                    active
                      ? "text-ink underline decoration-from-font underline-offset-4"
                      : "text-ink-muted"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
