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
          <section className="flex flex-col items-start gap-[40px] pb-[64px] pt-[56px] md:flex-row md:gap-[72px] md:pb-[104px] md:pt-[96px]">
            <div className="flex flex-1 flex-col gap-[24px] md:gap-[28px]">
              <Tag>ABOUT</Tag>
              <h1 className="font-heading text-[34px] font-medium leading-[1.12] tracking-[-1px] text-ink md:text-[44px] lg:text-[50px]">
                I design products that make complicated things feel simple
              </h1>
              <p className="font-body text-[17px] font-light leading-[1.66] text-ink-muted md:text-[19px]">
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
            <div className="relative h-[220px] w-[220px] shrink-0 overflow-hidden rounded-full md:h-[268px] md:w-[268px]">
              <Image
                src="/images/about/headshot.png"
                alt="Mel Rowlands"
                fill
                sizes="(max-width: 768px) 220px, 268px"
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
          <section className="flex flex-col gap-[32px] pb-[64px] pt-[56px] md:flex-row md:items-start md:gap-[72px] md:pb-[96px] md:pt-[88px]">
            <div className="flex shrink-0 flex-col gap-[14px] md:w-[280px] lg:w-[320px]">
              <Tag>BACKGROUND</Tag>
              <h2 className="font-heading text-[20px] font-medium tracking-[-0.01em] text-ink md:text-[22px]">
                Designer. Founder. Builder.
              </h2>
            </div>
            <div className="flex flex-1 flex-col gap-[22px] font-body text-[17px] font-light leading-[1.68] text-ink-muted md:gap-[26px] md:text-[19px]">
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

        {/* Rule */}
        <Container>
          <div className="h-px w-full bg-line" />
        </Container>

        {/* Other Work */}
        <Container>
          <section className="flex flex-col gap-[32px] pb-[64px] pt-[56px] md:flex-row md:items-start md:gap-[72px] md:pb-[96px] md:pt-[88px]">
            <div className="flex shrink-0 flex-col gap-[14px] md:w-[280px] lg:w-[320px]">
              <Tag>OTHER WORK</Tag>
              <h2 className="font-heading text-[20px] font-medium tracking-[-0.01em] text-ink md:text-[22px]">
                More of what I&apos;ve done.
              </h2>
            </div>
            <div className="flex flex-1 flex-col gap-[0px]">
              {[
                {
                  label: "Brand & Packaging",
                  years: "2015 – 2022",
                  body: "At Fineday Design Studio I co-led seven years of brand and packaging work for South African food and lifestyle companies — including Yuppie Chef, Sarah Graham, Jimmy's Public and Shackleton.",
                },
                {
                  label: "International Licensing",
                  years: "2015 – 2022",
                  body: "Surface pattern designs licensed to Studio E Fabrics and Nested Bean in the USA — used in commercial fabric collections and baby products.",
                },
                {
                  label: "B2B Data Platform Design",
                  years: "2022 – 2023",
                  body: "Dashboard and portal design for a B2B data annotation platform. Client confidential — NDA.",
                },
              ].map((item, i) => (
                <div key={i} className="border-t border-line py-[24px] md:py-[28px]">
                  <div className="flex flex-col gap-[6px] sm:flex-row sm:items-baseline sm:gap-[16px]">
                    <span className="font-heading text-[16px] font-semibold text-ink md:text-[17px]">
                      {item.label}
                    </span>
                    <span className="font-body text-[13px] text-ink-muted">{item.years}</span>
                  </div>
                  <p className="mt-[8px] font-body text-[15px] font-light leading-[1.62] text-ink-muted md:text-[16px]">
                    {item.body}
                  </p>
                </div>
              ))}
              <div className="border-t border-line" />
            </div>
          </section>
        </Container>

        {/* Rule */}
        <Container>
          <div className="h-px w-full bg-line" />
        </Container>

        {/* Interests */}
        <Container>
          <section className="flex flex-col gap-[32px] pb-[80px] pt-[56px] md:gap-[40px] md:pb-[120px] md:pt-[88px]">
            <div className="flex flex-col gap-[12px]">
              <Tag>WHAT I CARE ABOUT</Tag>
              <h2 className="font-heading text-[28px] font-semibold tracking-[-0.015em] text-ink md:text-[34px] lg:text-[38px]">
                Four threads through my work
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-[16px] md:flex md:items-stretch md:gap-[24px]">
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
