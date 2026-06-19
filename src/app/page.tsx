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
          <section className="flex flex-col items-start pb-[16px] pt-[44px]">
            <Tag className="!text-[13px] tracking-[0.06em]">
              ✦&nbsp;&nbsp;&nbsp;CAPE TOWN&nbsp;&nbsp;·&nbsp;&nbsp;AVAILABLE FOR
              PRODUCT DESIGN ROLES
            </Tag>
            <h1 className="mt-[28px] w-[1180px] max-w-full font-heading text-[56px] font-semibold leading-[1.06] tracking-[-0.02em] text-ink">
              Hi, I&apos;m Mel. I design products, build prototypes and ship
              solutions with AI.
            </h1>
            <p className="mt-[24px] font-body text-[19px] leading-[1.5] text-ink-muted">
              Product Designer&nbsp;&nbsp;•&nbsp;&nbsp;Founder&nbsp;&nbsp;•&nbsp;&nbsp;AI-Augmented
              Workflow
            </p>
            {/* generous space above + below the CTAs */}
            <div className="mb-[8px] mt-[44px] flex gap-[16px]">
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
        <section id="work" className="scroll-mt-[97px] pb-[64px] pt-[40px]">
          <Container>
            <SectionHeader
              eyebrow="SELECTED WORK · 03"
              heading="Things I've designed & built"
              className="mb-[48px]"
              headingClassName="text-[34px] leading-[1.05] tracking-[-0.02em]"
            />
            {/* full content width — roughly matches the hero title width */}
            <div className="flex flex-col gap-[28px]">
              {projects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
