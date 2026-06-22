import Link from "next/link";
import { getAdjacent } from "@/lib/projects";

export default function NextProjectNav({ slug }: { slug: string }) {
  const { prev, next } = getAdjacent(slug);

  return (
    <nav className="border-t border-line">
      <div className="mx-auto flex max-w-[1440px] items-stretch justify-between gap-[16px] px-[20px] py-[32px] sm:px-[40px] md:gap-[24px] md:py-[48px] lg:px-[80px]">
        <Link href={`/work/${prev.slug}`} className="group flex flex-col gap-[5px] md:gap-[6px]">
          <span className="font-body text-[11px] uppercase tracking-[0.06em] text-ink-muted md:text-[12px]">
            ← Previous
          </span>
          <span className="font-heading text-[18px] font-semibold text-ink transition-colors group-hover:text-accent md:text-[20px] lg:text-[22px]">
            {prev.title}
          </span>
        </Link>
        <Link
          href={`/work/${next.slug}`}
          className="group flex flex-col items-end gap-[5px] text-right md:gap-[6px]"
        >
          <span className="font-body text-[11px] uppercase tracking-[0.06em] text-ink-muted md:text-[12px]">
            Next →
          </span>
          <span className="font-heading text-[18px] font-semibold text-ink transition-colors group-hover:text-accent md:text-[20px] lg:text-[22px]">
            {next.title}
          </span>
        </Link>
      </div>
    </nav>
  );
}
