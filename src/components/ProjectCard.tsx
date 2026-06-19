import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/projects";

/**
 * Home "Selected Work" banner, composed from live elements (so text stays
 * crisp, selectable and responsive-ready): a colour panel with copy + links
 * on the left, and two photos split by a colour divider on the right, with a
 * logo overlaid bottom-right. Banner aspect ratio matches the original (1322:412).
 */
export default function ProjectCard({ project }: { project: Project }) {
  const { card, slug, title, tags, blurb, prototypeUrl } = project;
  const caseHref = `/work/${slug}`;
  const chip = "color-mix(in srgb, currentColor 20%, transparent)";

  return (
    <article
      className="relative aspect-[1322/412] w-full overflow-hidden rounded-[12px] shadow-[0px_6px_16px_rgba(0,0,0,0.12)] transition-transform duration-200 hover:-translate-y-[2px]"
      style={{ color: card.textColor }}
    >
      <div className="flex h-full w-full">
        {/* Left colour panel */}
        <div
          className="flex shrink-0 basis-[37%] flex-col justify-between py-[34px] pl-[40px] pr-[28px]"
          style={{ backgroundColor: card.bg }}
        >
          <p className="font-body text-[14px] font-semibold lowercase tracking-[0.01em] opacity-85">
            {tags}
          </p>
          <div className="flex flex-col gap-[12px]">
            <h3 className="font-heading text-[38px] font-semibold leading-[1.04]">
              {title}
            </h3>
            <p className="max-w-[400px] font-body text-[15px] leading-[1.5] opacity-90">
              {blurb}
            </p>
            <div className="mt-[6px] flex items-center gap-[20px] font-body text-[13px] font-medium">
              <span
                className="rounded-full px-[16px] py-[7px]"
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

        {/* Right image zone: two photos split by a colour divider */}
        <div className="flex flex-1 items-stretch">
          <div className="relative flex-1 overflow-hidden">
            <Image
              src={card.photoLeft}
              alt=""
              fill
              sizes="(max-width: 1280px) 28vw, 360px"
              className="object-cover"
            />
          </div>
          <div className="w-[14px] shrink-0" style={{ backgroundColor: card.stripe }} />
          <div className="relative flex-1 overflow-hidden">
            <Image
              src={card.photoRight}
              alt=""
              fill
              sizes="(max-width: 1280px) 32vw, 420px"
              className={`object-cover ${card.photoRightFit === "top" ? "object-top" : ""}`}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={card.logo}
              alt=""
              className="absolute bottom-[22px] right-[24px] h-auto"
              style={{ width: card.logoWidth }}
            />
          </div>
        </div>
      </div>

      {/* Whole-card link to the case study (sits beneath the prototype link) */}
      <Link
        href={caseHref}
        aria-label={`${title} — view case study`}
        className="absolute inset-0 z-10"
      />
    </article>
  );
}
