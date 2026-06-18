import Link from "next/link";

/**
 * Case-study top bar — matches the Figma "MEL ROWLANDS · View Live Prototype ↗
 * · PROJECT 0X" strip. Replaces the global nav on case-study pages.
 */
export default function CaseHeaderBar({
  projectNumber,
  prototypeUrl,
}: {
  projectNumber: string;
  prototypeUrl?: string;
}) {
  return (
    <div className="border-b border-line">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-[80px] py-[20px]">
        <Link
          href="/"
          className="font-body text-[13px] font-medium uppercase tracking-[0.08em] text-ink transition-opacity hover:opacity-70"
        >
          Mel Rowlands
        </Link>

        {prototypeUrl ? (
          <a
            href={prototypeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-[13px] font-medium uppercase tracking-[0.08em] text-ink-muted transition-colors hover:text-ink"
          >
            View Live Prototype ↗
          </a>
        ) : (
          <span
            className="font-body text-[13px] font-medium uppercase tracking-[0.08em] text-ink-muted opacity-40"
            title="Live prototype URL pending"
          >
            View Live Prototype ↗
          </span>
        )}

        <span className="font-body text-[13px] font-medium uppercase tracking-[0.08em] text-theme">
          PROJECT {projectNumber}
        </span>
      </div>
    </div>
  );
}
