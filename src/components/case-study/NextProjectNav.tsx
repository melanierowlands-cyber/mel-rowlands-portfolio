import Link from "next/link";
import { getAdjacent } from "@/lib/projects";

export default function NextProjectNav({ slug }: { slug: string }) {
  const { prev, next } = getAdjacent(slug);

  return (
    <nav className="border-t border-line">
      <div className="mx-auto flex max-w-[1440px] items-stretch justify-between gap-[16px] px-[20px] py-[40px] sm:px-[40px] md:gap-[24px] md:py-[64px] lg:px-[80px]">
        <Link href={`/work/${prev.slug}`} className="group flex flex-col gap-[6px] md:gap-[8px]">
          <span className="font-body text-[12px] uppercase tracking-[0.06em] text-ink-muted md:text-[13px]">
            ← Previous
          </span>
          <span className="font-heading text-[20px] font-semibold text-ink transition-colors group-hover:text-accent md:text-[24px] lg:text-[28px]">
            {prev.title}
          </span>
        </Link>
        <Link
          href={`/work/${next.slug}`}
          className="group flex flex-col items-end gap-[6px] text-right md:gap-[8px]"
        >
          <span className="font-body text-[12px] uppercase tracking-[0.06em] text-ink-muted md:text-[13px]">
            Next →
          </span>
          <span className="font-heading text-[20px] font-semibold text-ink transition-colors group-hover:text-accent md:text-[24px] lg:text-[28px]">
            {next.title}
          </span>
        </Link>
      </div>
    </nav>
  );
}
