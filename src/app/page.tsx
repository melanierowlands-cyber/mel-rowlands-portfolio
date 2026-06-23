import Image from "next/image";
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
            <h1 className="mt-[20px] w-full font-heading text-[26px] font-semibold leading-[1.06] tracking-[-0.02em] text-ink sm:text-[32px] md:mt-[28px] md:text-[38px]">
              Hi, I&apos;m Mel. I design products and platforms for teams
              that need to move fast.
            </h1>
            <Image
              src="/images/home/homepage-illustration.png"
              alt="Mel at her desk with wireframes and a MacBook"
              width={1668}
              height={943}
              className="mt-[24px] w-[280px] sm:w-[340px] md:mt-[28px] md:w-[400px]"
              priority
            />
            <p className="mt-[16px] font-body text-[15px] leading-[1.5] text-ink-muted md:mt-[20px] md:text-[17px]">
              Product Designer&nbsp;&nbsp;•&nbsp;&nbsp;Founder&nbsp;&nbsp;•&nbsp;&nbsp;AI-Augmented
              Workflow
            </p>
            <div className="mb-[8px] mt-[28px] flex flex-wrap gap-[12px] md:mt-[36px] md:gap-[16px]">
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
