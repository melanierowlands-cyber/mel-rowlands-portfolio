import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/projects";

const CORNER: Record<string, string> = {
  br: "bottom-[22px] right-[24px]",
  bl: "bottom-[22px] left-[24px]",
  tl: "top-[22px] left-[24px]",
  tr: "top-[22px] right-[24px]",
};

function CardLogo({ card }: { card: Project["card"] }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={card.logo}
      alt=""
      className={`pointer-events-none absolute h-auto ${CORNER[card.logoCorner ?? "br"]}`}
      style={{ width: card.logoWidth }}
    />
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  const { card, slug, title, tags, blurb, prototypeUrl } = project;
  const caseHref = `/work/${slug}`;
  const chip = "color-mix(in srgb, currentColor 20%, transparent)";

  return (
    <article
      className="relative w-full overflow-hidden rounded-[12px] shadow-[0px_6px_16px_rgba(0,0,0,0.12)] transition-transform duration-200 hover:-translate-y-[2px] md:aspect-[1322/412]"
      style={{ color: card.textColor }}
    >
      <div className="flex h-full w-full flex-col md:flex-row">
        {/* Colour panel — full width on mobile, 37% on desktop */}
        <div
          className="flex w-full shrink-0 flex-col justify-between px-[24px] py-[28px] md:basis-[37%] md:py-[34px] md:pl-[40px] md:pr-[28px]"
          style={{ backgroundColor: card.bg }}
        >
          <p className="font-body text-[13px] font-semibold lowercase tracking-[0.01em] opacity-85">
            {tags}
          </p>
          <div className="mt-[20px] flex flex-col gap-[10px] md:mt-0 md:gap-[12px]">
            <h3 className="font-heading text-[18px] font-semibold leading-[1.04] md:text-[38px]">
              {title}
            </h3>
            <p className="max-w-[400px] font-body text-[14px] leading-[1.5] opacity-90 md:text-[15px]">
              {blurb}
            </p>
            <div className="mt-[4px] flex flex-wrap items-center gap-[12px] font-body text-[12px] font-medium md:mt-[6px] md:gap-[20px] md:text-[13px]">
              <span
                className="rounded-full px-[14px] py-[6px] md:px-[16px] md:py-[7px]"
                style={{ backgroundColor: chip }}
              >
                View case study
              </span>
              {prototypeUrl ? (
                <a
                  href={prototypeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-20 inline-flex items-center gap-[8px] underline decoration-from-font underline-offset-2"
                >
                  View live prototype →
                </a>
              ) : (
                <span className="inline-flex items-center gap-[8px] underline decoration-from-font underline-offset-2 opacity-55">
                  View live prototype →
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Image zone — fixed height on mobile, flex-1 on desktop */}
        <div className="flex h-[200px] flex-1 items-stretch sm:h-[240px] md:h-full">
          <div className="relative flex-1 overflow-hidden">
            <Image
              src={card.photoLeft}
              alt=""
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1280px) 28vw, 360px"
              className="object-cover"
              style={{ objectPosition: card.photoLeftPos ?? "center" }}
            />
            {(card.logoOn ?? "right") === "left" && <CardLogo card={card} />}
          </div>
          <div className="w-[10px] shrink-0 md:w-[14px]" style={{ backgroundColor: card.stripe }} />
          <div className="relative flex-1 overflow-hidden">
            <Image
              src={card.photoRight}
              alt=""
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1280px) 32vw, 420px"
              className="object-cover"
              style={{ objectPosition: card.photoRightPos ?? "center" }}
            />
            {(card.logoOn ?? "right") === "right" && <CardLogo card={card} />}
          </div>
        </div>
      </div>

      {/* Whole-card link (sits beneath the prototype link) */}
      <Link
        href={caseHref}
        aria-label={`${title} — view case study`}
        className="absolute inset-0 z-10"
      />
    </article>
  );
}
