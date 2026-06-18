import Link from "next/link";
import { getAdjacent } from "@/lib/projects";

/**
 * Circular Prev / Next chain at the foot of each case study.
 */
export default function NextProjectNav({ slug }: { slug: string }) {
  const { prev, next } = getAdjacent(slug);

  return (
    <nav className="border-t border-line">
      <div className="mx-auto flex max-w-[1440px] items-stretch justify-between gap-[24px] px-[80px] py-[64px]">
        <Link href={`/work/${prev.slug}`} className="group flex flex-col gap-[8px]">
          <span className="font-body text-[13px] uppercase tracking-[0.06em] text-ink-muted">
            ← Previous
          </span>
          <span className="font-heading text-[28px] font-semibold text-ink transition-colors group-hover:text-accent">
            {prev.title}
          </span>
        </Link>
        <Link
          href={`/work/${next.slug}`}
          className="group flex flex-col items-end gap-[8px] text-right"
        >
          <span className="font-body text-[13px] uppercase tracking-[0.06em] text-ink-muted">
            Next →
          </span>
          <span className="font-heading text-[28px] font-semibold text-ink transition-colors group-hover:text-accent">
            {next.title}
          </span>
        </Link>
      </div>
    </nav>
  );
}
