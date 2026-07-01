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
          <section className="flex flex-col pb-[16px] pt-[32px] lg:flex-row lg:items-center lg:gap-[64px] lg:pt-[44px]">
            {/* Text column */}
            <div className="flex flex-col items-start lg:flex-1">
              <Tag className="!text-[13px] tracking-[0.06em]">
                ✦&nbsp;&nbsp;&nbsp;CAPE TOWN&nbsp;&nbsp;·&nbsp;&nbsp;AVAILABLE FOR
                PRODUCT DESIGN ROLES
              </Tag>
              <h1 className="mt-[20px] w-full font-heading text-[26px] font-semibold leading-[1.06] tracking-[-0.02em] text-ink sm:text-[32px] md:text-[38px] lg:text-[44px]">
                Hi, I&apos;m Mel. I design products and platforms for teams
                that need to move fast.
              </h1>
              <p className="mt-[16px] font-body text-[15px] leading-[1.5] text-ink-muted md:text-[17px]">
                Product Designer&nbsp;&nbsp;•&nbsp;&nbsp;Founder&nbsp;&nbsp;•&nbsp;&nbsp;AI-Augmented
                Workflow
              </p>

              {/* Illustration – below headline on mobile/tablet, hidden on desktop */}
              <div className="mt-[28px] w-full lg:hidden">
                <video
                  src="/portfolio_homepage_clip.mp4"
                  poster="/images/home/homepage-illustration.png"
                  width={1668}
                  height={943}
                  className="w-full"
                  autoPlay
                  muted
                  loop
                  playsInline
                  aria-label="Mel at her desk with wireframes and a MacBook"
                />
              </div>

              <div className="mb-[8px] mt-[28px] flex flex-wrap gap-[12px] md:gap-[16px]">
                <Button href="/#work" variant="primary">
                  View Work
                </Button>
                <Button href="/about" variant="secondary">
                  About Me
                </Button>
              </div>
            </div>

            {/* Illustration – right column on desktop only */}
            <div className="hidden w-[560px] shrink-0 lg:block">
              <video
                src="/portfolio_homepage_clip.mp4"
                poster="/images/home/homepage-illustration.png"
                width={1668}
                height={943}
                className="w-full"
                autoPlay
                muted
                loop
                playsInline
                aria-label="Mel at her desk with wireframes and a MacBook"
              />
            </div>
          </section>
        </Container>

        {/* Selected Work */}
        <section id="work" className="scroll-mt-[70px] pb-[48px] pt-[32px] md:pb-[56px] md:pt-[36px]">
          <Container>
            <SectionHeader
              eyebrow="SELECTED WORK · 03"
              heading="Things I've designed & built"
              className="mb-[28px] md:mb-[40px]"
              headingClassName="text-[22px] leading-[1.05] tracking-[-0.02em] md:text-[26px]"
            />
            <div className="flex flex-col gap-[20px] md:gap-[24px]">
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
