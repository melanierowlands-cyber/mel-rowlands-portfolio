import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import Tag from "@/components/Tag";
import ThreadCard from "@/components/about/ThreadCard";

export const metadata: Metadata = {
  title: "About — Mel Rowlands",
  description:
    "Product designer with 20+ years of design depth and a research-led process. Designer. Founder. Builder.",
};

const threads = [
  {
    number: "01",
    title: "Education",
    body: "Designing tools that make learning creative, structured and genuinely accessible.",
  },
  {
    number: "02",
    title: "Conservation",
    body: "A deep love of wildlife and the systems and teams that work to protect it.",
  },
  {
    number: "03",
    title: "AI",
    body: "Augmenting design and development with AI — thoughtfully, and with intent.",
  },
  {
    number: "04",
    title: "Community",
    body: "Products that bring people together and quietly remove everyday friction.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Nav />

      <main>
        {/* Intro */}
        <Container>
          <section className="flex items-start gap-[72px] pb-[104px] pt-[96px]">
            <div className="flex flex-1 flex-col gap-[28px]">
              <Tag>ABOUT</Tag>
              <h1 className="font-heading text-[50px] font-medium leading-[1.12] tracking-[-1px] text-ink">
                I design products that make complicated things feel simple
              </h1>
              <p className="font-body text-[19px] font-light leading-[1.66] text-ink-muted">
                I&apos;m Mel — a product designer with 20+ years of design depth
                and a research-led process. I own design end-to-end — research,
                IA, interaction and UI — and pair Figma with Claude Code to take
                work from prototype to production. Small teams get product
                thinking, research and polished UI from one person, at shipping
                speed.
              </p>
              <p className="font-body text-[13px] font-medium leading-normal tracking-[0.04em] text-ink-muted">
                CAPE TOWN&nbsp;&nbsp;·&nbsp;&nbsp;UK PASSPORT&nbsp;&nbsp;·&nbsp;&nbsp;AVAILABLE
                FOR REMOTE ROLES ON UK / US EAST-COAST HOURS
              </p>
            </div>
            <div className="relative h-[268px] w-[268px] shrink-0 overflow-hidden rounded-full">
              <Image
                src="/images/about/headshot.png"
                alt="Mel Rowlands"
                fill
                sizes="268px"
                className="object-cover"
                priority
              />
            </div>
          </section>
        </Container>

        {/* Rule */}
        <Container>
          <div className="h-px w-full bg-line" />
        </Container>

        {/* Background */}
        <Container>
          <section className="flex items-start gap-[72px] pb-[96px] pt-[88px]">
            <div className="flex w-[320px] shrink-0 flex-col gap-[14px]">
              <Tag>BACKGROUND</Tag>
              <h2 className="font-heading text-[22px] font-medium tracking-[-0.01em] text-ink">
                Designer. Founder. Builder.
              </h2>
            </div>
            <div className="flex flex-1 flex-col gap-[26px] font-body text-[19px] font-light leading-[1.68] text-ink-muted">
              <p>
                I&apos;ve spent 20+ years turning complex ideas into products
                people can actually use.
              </p>
              <p>
                My career started in design studios and investment research,
                before moving into product design, UX and startup building. Most
                recently I co-founded iNGENiO Education, where I led product
                strategy, UX, research and growth for a digital learning
                platform used by schools and families.
              </p>
              <p>
                Today I combine product thinking, research and AI-assisted
                development to take ideas from early concepts to shipped
                experiences.
              </p>
            </div>
          </section>
        </Container>

        {/* Interests */}
        <Container>
          <section className="flex flex-col gap-[40px] pb-[120px] pt-[8px]">
            <div className="flex flex-col gap-[12px]">
              <Tag>WHAT I CARE ABOUT</Tag>
              <h2 className="font-heading text-[38px] font-semibold tracking-[-0.015em] text-ink">
                Four threads through my work
              </h2>
            </div>
            <div className="flex items-stretch gap-[24px]">
              {threads.map((t) => (
                <ThreadCard key={t.number} {...t} />
              ))}
            </div>
          </section>
        </Container>
      </main>

      <Footer />
    </>
  );
}
