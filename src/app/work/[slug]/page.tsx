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

      <div className="flex flex-col gap-[64px] pb-[64px] pt-[64px] md:gap-[96px] md:pb-[96px] md:pt-[96px] lg:gap-[128px] lg:pb-[128px] lg:pt-[128px]">
        {/* Hero */}
        <section className="mx-auto w-full max-w-[1440px] px-[20px] sm:px-[40px] lg:px-[80px]">
          <div className="flex flex-col gap-[20px] md:gap-[28px]">
            <div className="flex items-center gap-[12px]">
              <div className="flex h-[30px] w-[30px] items-center justify-center rounded-[8px] bg-mark font-heading text-[20px] font-medium text-on-accent md:h-[34px] md:w-[34px] md:text-[24px]">
                {project.logoLetter}
              </div>
              <span className="font-body text-[16px] font-semibold uppercase tracking-[0.06em] text-accent md:text-[20px]">
                {project.logoLabel}
              </span>
            </div>
            <h1 className="font-heading text-[32px] font-bold leading-[1.0] tracking-[-0.02em] text-ink sm:text-[44px] md:text-[52px] lg:text-[64px]">
              {project.headline}
            </h1>
            <p className="font-body text-[17px] font-medium leading-[1.6] text-ink-muted md:text-[20px] lg:text-[24px]">
              {project.intro}
            </p>
          </div>
        </section>

        {/* Full-bleed image strip */}
        <section className="w-full overflow-hidden bg-paper-alt">
          <div className="flex h-[140px] w-full md:h-[180px] lg:h-[228px]">
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
