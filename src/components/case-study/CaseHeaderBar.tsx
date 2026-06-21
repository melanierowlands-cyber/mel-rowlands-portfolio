import Link from "next/link";

export default function CaseHeaderBar({
  projectNumber,
  prototypeUrl,
}: {
  projectNumber: string;
  prototypeUrl?: string;
}) {
  return (
    <div className="border-b border-line">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-[20px] py-[16px] sm:px-[40px] md:py-[20px] lg:px-[80px]">
        <Link
          href="/"
          className="font-body text-[12px] font-medium uppercase tracking-[0.08em] text-ink transition-opacity hover:opacity-70 md:text-[13px]"
        >
          Mel Rowlands
        </Link>

        {prototypeUrl ? (
          <a
            href={prototypeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-[12px] font-medium uppercase tracking-[0.08em] text-ink-muted transition-colors hover:text-ink md:text-[13px]"
          >
            View Live Prototype ↗
          </a>
        ) : (
          <span
            className="font-body text-[12px] font-medium uppercase tracking-[0.08em] text-ink-muted opacity-40 md:text-[13px]"
            title="Live prototype URL pending"
          >
            View Live Prototype ↗
          </span>
        )}

        <span className="font-body text-[12px] font-medium uppercase tracking-[0.08em] text-theme md:text-[13px]">
          PROJECT {projectNumber}
        </span>
      </div>
    </div>
  );
}
