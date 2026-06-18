import Link from "next/link";
import type { Project } from "@/lib/projects";

/**
 * Home "Selected Work" banner card.
 * Reproduces the Figma layout: 1308×398 rounded banner, colour tint,
 * text overlaid left, image collage right, vertical accent stripe.
 * Coordinates are taken directly from the desktop Figma frames.
 */
export default function ProjectCard({ project }: { project: Project }) {
  const { card, slug, title, tags, blurb, prototypeUrl } = project;
  const caseHref = `/work/${slug}`;

  return (
    <article
      className="relative h-[398px] w-[1308px] max-w-full overflow-hidden rounded-[9px] shadow-[0px_7px_14px_rgba(0,0,0,0.18)]"
      style={{ backgroundColor: card.bg, color: card.textColor }}
    >
      {/* Image collage (right side) */}
      {card.images.map((img, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={i}
          src={img.src}
          alt={img.alt}
          className="pointer-events-none absolute select-none object-cover"
          style={img.style}
        />
      ))}

      {/* Vertical accent stripe */}
      <div
        className="absolute top-[-8px] h-[406px] w-[26px]"
        style={{ left: 840, backgroundColor: card.stripe }}
      />

      {/* Tags */}
      <p
        className="absolute left-[26px] top-[25px] w-[421px] font-body text-[16px] font-semibold lowercase leading-[1.8] opacity-80"
        style={{ color: card.textColor }}
      >
        {tags}
      </p>

      {/* Title */}
      <Link
        href={caseHref}
        className="absolute left-[26px] top-[156px] font-heading text-[49px] font-semibold leading-none hover:opacity-90"
        style={{ color: card.textColor }}
      >
        {title}
      </Link>

      {/* Blurb */}
      <p
        className="absolute left-[26px] top-[240px] w-[407px] font-body text-[16px] leading-[1.58] opacity-90"
        style={{ color: card.textColor }}
      >
        {blurb}
      </p>

      {/* View case study (pill) */}
      <Link
        href={caseHref}
        className="absolute left-[26px] top-[344px] flex h-[28px] w-[148px] items-center rounded-[9px] bg-white/[0.37] pl-[16px] font-body text-[13.5px] font-medium tracking-[0.015em] transition-colors hover:bg-white/50"
        style={{ color: card.textColor }}
      >
        View case study
      </Link>

      {/* View live prototype */}
      {prototypeUrl ? (
        <a
          href={prototypeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group absolute left-[222px] top-[346px] inline-flex items-center gap-[10px] font-body text-[13.5px] font-medium tracking-[0.015em]"
          style={{ color: card.textColor }}
        >
          <span className="underline decoration-from-font underline-offset-2">
            View live prototype
          </span>
          <span className="text-[18px] transition-transform group-hover:translate-x-[3px]">
            →
          </span>
        </a>
      ) : (
        // Placeholder slot kept in layout so the live URL drops in with no structural change
        <span
          className="absolute left-[222px] top-[346px] inline-flex items-center gap-[10px] font-body text-[13.5px] font-medium tracking-[0.015em] opacity-40"
          style={{ color: card.textColor }}
          title="Live prototype URL pending"
        >
          <span className="underline decoration-from-font underline-offset-2">
            View live prototype
          </span>
          <span className="text-[18px]">→</span>
        </span>
      )}
    </article>
  );
}
