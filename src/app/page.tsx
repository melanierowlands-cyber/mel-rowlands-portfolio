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
          <section className="flex flex-col items-start pb-[16px] pt-[32px] md:pt-[44px]">
            <Tag className="!text-[13px] tracking-[0.06em]">
              ✦&nbsp;&nbsp;&nbsp;CAPE TOWN&nbsp;&nbsp;·&nbsp;&nbsp;AVAILABLE FOR
              PRODUCT DESIGN ROLES
            </Tag>
            <h1 className="mt-[20px] w-full font-heading text-[26px] font-semibold leading-[1.06] tracking-[-0.02em] text-ink sm:text-[36px] md:mt-[28px] md:text-[48px] lg:text-[56px]">
              Hi, I&apos;m Mel. I design products and platforms for teams
              that need to move fast.
            </h1>
            <p className="mt-[16px] font-body text-[16px] leading-[1.5] text-ink-muted md:mt-[24px] md:text-[19px]">
              Product Designer&nbsp;&nbsp;•&nbsp;&nbsp;Founder&nbsp;&nbsp;•&nbsp;&nbsp;AI-Augmented
              Workflow
            </p>
            <div className="mb-[8px] mt-[32px] flex flex-wrap gap-[12px] md:mt-[44px] md:gap-[16px]">
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
        <section id="work" className="scroll-mt-[80px] pb-[48px] pt-[32px] md:scroll-mt-[97px] md:pb-[64px] md:pt-[40px]">
          <Container>
            <SectionHeader
              eyebrow="SELECTED WORK · 03"
              heading="Things I've designed & built"
              className="mb-[32px] md:mb-[48px]"
              headingClassName="text-[24px] leading-[1.05] tracking-[-0.02em] md:text-[30px] lg:text-[34px]"
            />
            <div className="flex flex-col gap-[20px] md:gap-[28px]">
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
