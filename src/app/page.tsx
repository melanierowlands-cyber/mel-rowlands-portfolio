import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import Button from "@/components/Button";
import Tag from "@/components/Tag";
import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <>
      <Nav />

      <main>
        {/* Hero */}
        <Container>
          <section className="flex flex-col items-start gap-[32px] pb-[140px] pt-[110px]">
            <Tag className="!text-[13px] tracking-[0.06em]">
              ✦&nbsp;&nbsp;&nbsp;CAPE TOWN&nbsp;&nbsp;·&nbsp;&nbsp;AVAILABLE FOR
              PRODUCT DESIGN ROLES
            </Tag>
            <h1 className="w-[1180px] max-w-full font-heading text-[66px] font-semibold leading-[1.06] tracking-[-0.02em] text-ink">
              Hi, I&apos;m Mel. I design products, build prototypes and ship
              solutions with AI.
            </h1>
            <p className="font-body text-[20px] leading-[1.5] text-ink-muted">
              Product Designer&nbsp;&nbsp;•&nbsp;&nbsp;Founder&nbsp;&nbsp;•&nbsp;&nbsp;AI-Augmented
              Workflow
            </p>
            <div className="mt-[16px] flex gap-[16px]">
              <Button href="/#work" variant="primary">
                View Work
              </Button>
              <Button href="/about" variant="secondary">
                About Me
              </Button>
            </div>
          </section>
        </Container>

        {/* Selected Work */}
        <section id="work" className="scroll-mt-[97px] pb-[120px]">
          <Container>
            <SectionHeader
              eyebrow="SELECTED WORK · 03"
              heading="Things I've designed & built"
              className="mb-[56px]"
            />
          </Container>

          <div className="flex flex-col items-center gap-[88px] px-[40px]">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
