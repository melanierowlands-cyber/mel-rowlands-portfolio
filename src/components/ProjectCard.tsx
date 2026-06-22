import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/projects";

const CORNER: Record<string, string> = {
  br: "bottom-[16px] right-[18px]",
  bl: "bottom-[16px] left-[18px]",
  tl: "top-[16px] left-[18px]",
  tr: "top-[16px] right-[18px]",
};

function CardLogo({ card }: { card: Project["card"] }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={card.logo}
      alt=""
      className={`pointer-events-none absolute h-auto ${CORNER[card.logoCorner ?? "br"]}`}
      style={{ width: card.logoWidth ? card.logoWidth * 0.7 : undefined }}
    />
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  const { card, slug, title, tags, blurb, prototypeUrl } = project;
  const caseHref = `/work/${slug}`;
  const chip = "color-mix(in srgb, currentColor 20%, transparent)";

  return (
    <article
      className="relative w-full overflow-hidden rounded-[10px] shadow-[0px_4px_12px_rgba(0,0,0,0.12)] transition-transform duration-200 hover:-translate-y-[2px] md:aspect-[1322/412]"
      style={{ color: card.textColor }}
    >
      <div className="flex h-full w-full flex-col md:flex-row">
        {/* Colour panel */}
        <div
          className="flex w-full shrink-0 flex-col justify-between px-[20px] py-[22px] md:basis-[37%] md:py-[26px] md:pl-[30px] md:pr-[22px]"
          style={{ backgroundColor: card.bg }}
        >
          <p className="font-body text-[11px] font-semibold lowercase tracking-[0.01em] opacity-85">
            {tags}
          </p>
          <div className="mt-[16px] flex flex-col gap-[8px] md:mt-0 md:gap-[10px]">
            <h3 className="font-heading text-[18px] font-semibold leading-[1.04] md:text-[26px]">
              {title}
            </h3>
            <p className="max-w-[400px] font-body text-[12px] leading-[1.5] opacity-90 md:text-[13px]">
              {blurb}
            </p>
            <div className="mt-[4px] flex flex-nowrap items-center gap-[12px] font-body text-[11px] font-medium md:gap-[16px] md:text-[11px]">
              <span
                className="whitespace-nowrap rounded-full px-[12px] py-[5px]"
                style={{ backgroundColor: chip }}
              >
                View case study
              </span>
              {prototypeUrl ? (
                <a
                  href={prototypeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-20 inline-flex shrink-0 items-center gap-[6px] underline decoration-from-font underline-offset-2"
                >
                  View live prototype →
                </a>
              ) : (
                <span className="inline-flex shrink-0 items-center gap-[6px] underline decoration-from-font underline-offset-2 opacity-55">
                  View live prototype →
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Image zone */}
        <div className="flex h-[180px] flex-1 items-stretch sm:h-[220px] md:h-full">
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
          <div className="w-[10px] shrink-0 md:w-[11px]" style={{ backgroundColor: card.stripe }} />
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

      <Link
        href={caseHref}
        aria-label={`${title} — view case study`}
        className="absolute inset-0 z-10"
      />
    </article>
  );
}
