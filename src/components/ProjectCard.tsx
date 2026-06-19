import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/projects";

/**
 * Home "Selected Work" card — a single pre-composed banner image
 * (background, copy, links and imagery are baked into the artwork),
 * wrapped in a link to the case study.
 */
export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      aria-label={`${project.title} — view case study`}
      className="block w-full overflow-hidden rounded-[12px] shadow-[0px_6px_16px_rgba(0,0,0,0.12)] transition-transform duration-200 hover:-translate-y-[2px]"
    >
      <Image
        src={project.cardImage}
        alt={`${project.title} — ${project.blurb}`}
        width={1322}
        height={412}
        className="h-auto w-full"
        priority={project.order === 1}
      />
    </Link>
  );
}
