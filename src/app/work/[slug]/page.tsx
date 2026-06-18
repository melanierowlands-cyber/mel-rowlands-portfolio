import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Footer from "@/components/Footer";
import CaseHeaderBar from "@/components/case-study/CaseHeaderBar";
import CaseSection from "@/components/case-study/CaseBlocks";
import NextProjectNav from "@/components/case-study/NextProjectNav";
import { getProject, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: `${project.title} — Mel Rowlands`, description: project.blurb };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <div data-theme={project.theme}>
      <CaseHeaderBar projectNumber={project.projectNumber} prototypeUrl={project.prototypeUrl} />

      <div className="flex flex-col gap-[128px] pb-[128px] pt-[128px]">
        {/* Hero */}
        <section className="mx-auto w-full max-w-[1440px] px-[80px]">
          <div className="flex flex-col gap-[28px]">
            <div className="flex items-center gap-[12px]">
              <div className="flex h-[34px] w-[34px] items-center justify-center rounded-[8px] bg-mark font-heading text-[24px] font-medium text-on-accent">
                {project.logoLetter}
              </div>
              <span className="font-body text-[20px] font-semibold uppercase tracking-[0.06em] text-accent">
                {project.logoLabel}
              </span>
            </div>
            <h1 className="max-w-[1060px] font-heading text-[64px] font-bold leading-[1.0] tracking-[-0.02em] text-ink">
              {project.headline}
            </h1>
            <p className="max-w-[822px] font-body text-[24px] font-medium leading-[1.6] text-ink-muted">
              {project.intro}
            </p>
          </div>
        </section>

        {/* Full-bleed image strip */}
        <section className="w-full overflow-hidden bg-paper-alt">
          <div className="flex h-[228px] w-full">
            {project.strip.map((img, i) => (
              <div key={i} className="relative h-full flex-1">
                <Image src={img.src} alt={img.alt} fill sizes="50vw" className="object-cover" priority={i === 0} />
              </div>
            ))}
          </div>
        </section>

        {/* Sections */}
        {project.sections.map((section, i) => (
          <CaseSection key={i} section={section} />
        ))}
      </div>

      <NextProjectNav slug={project.slug} />
      <Footer />
    </div>
  );
}
