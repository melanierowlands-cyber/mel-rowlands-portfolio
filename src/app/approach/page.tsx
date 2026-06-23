import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import Tag from "@/components/Tag";

export const metadata: Metadata = {
  title: "Approach - Mel Rowlands",
  description:
    "How I work: research-led design, AI-augmented delivery. From first brief to live product - faster than you'd expect.",
};

const steps = [
  {
    number: "01",
    tool: "Discovery & Research",
    desc: "I use Claude to synthesise interview notes, spot patterns in user responses and pressure-test early assumptions against the brief. What used to take a week of affinity mapping takes an afternoon - without losing the rigour. Research findings feed directly into design decisions, not into a slide deck that gets set aside.",
  },
  {
    number: "02",
    tool: "Figma",
    desc: "Wireframes, design systems and high-fidelity screens. I work system-first - tokens, components, variants - so the design scales, stays consistent and hands off cleanly. No separate spec document. No translation layer between the design and the build.",
  },
  {
    number: "03",
    tool: "Figma Make",
    desc: "Turns the Figma design into a real, interactive front-end. Stakeholders interact with something that actually works - not a clickable mockup - so feedback is grounded in real use rather than imagination. It's also the fastest path from a finished design to running code.",
  },
  {
    number: "04",
    tool: "Claude Code",
    desc: "A pair-programmer I use to extend and refine what Figma Make generates - wiring up real data, building custom logic, fixing edge cases. The result is production-quality code, not throwaway prototype code. I can take a product further and faster than I could alone, without a separate development team.",
  },
  {
    number: "05",
    tool: "GitHub",
    desc: "Every change versioned. Safe to iterate, easy to roll back, ready for a development team to pick up if the product scales. The codebase is clean and handoff-ready from the start - not a prototype that needs to be rebuilt before it can ship.",
  },
  {
    number: "06",
    tool: "Vercel",
    desc: "Deployed to a live URL in minutes. The finished product is something anyone can open on any device - ready to test, share with stakeholders, or demonstrate to a client on the first call. A real product starts a different conversation than a screen recording.",
  },
];

const outcomes = [
  {
    title: "Brief to live product in weeks",
    body: "The full loop - research, design, build, deploy - compressed into a timeline that used to require a team of three or four.",
  },
  {
    title: "Prototypes that are real products",
    body: "Stakeholders can open, click through and react to something that actually works. Not a slide deck. Not a Figma preview. A URL.",
  },
  {
    title: "One person. Full-stack output.",
    body: "Research, UX, UI and front-end implementation - I own the whole chain. Less handoff friction, fewer misunderstandings between design and build.",
  },
  {
    title: "Research goes straight into the product",
    body: "No translation layer between insight and design decision. What I learn in discovery directly shapes what gets built - and why.",
  },
];

export default function ApproachPage() {
  return (
    <>
      <Nav />

      <main>
        {/* Hero */}
        <Container>
          <section className="flex flex-col gap-[16px] pb-[48px] pt-[40px] md:gap-[20px] md:pb-[64px] md:pt-[56px]">
            <Tag>HOW I WORK</Tag>
            <h1 className="max-w-[800px] font-heading text-[28px] font-semibold leading-[1.08] tracking-[-0.02em] text-ink sm:text-[34px] md:text-[38px]">
              Research-led design, built and shipped with AI.
            </h1>
            <p className="max-w-[640px] font-body text-[15px] font-light leading-[1.68] text-ink-muted md:text-[17px]">
              I design using the same process I always have - research, Figma, iteration. What&apos;s changed is what happens after the screens are done. A modern AI-assisted toolchain means I can take a design from first concept to a live, deployed product without a separate development team.
            </p>
          </section>
        </Container>

        {/* Rule */}
        <Container>
          <div className="h-px w-full bg-line" />
        </Container>

        {/* Toolchain */}
        <Container>
          <section className="pb-[48px] pt-[40px] md:pb-[64px] md:pt-[56px]">
            <div className="mb-[28px] flex flex-col gap-[10px] md:mb-[40px]">
              <Tag>THE TOOLCHAIN</Tag>
              <h2 className="font-heading text-[22px] font-semibold tracking-[-0.015em] text-ink md:text-[28px]">
                From first brief to live product
              </h2>
            </div>

            <div className="flex flex-col">
              {steps.map((step, i) => (
                <div key={i} className="border-t border-line">
                  <div className="flex gap-[16px] py-[22px] md:gap-[28px] md:py-[24px]">
                    <div className="flex w-[40px] shrink-0 flex-col gap-[4px] md:w-[56px]">
                      <span className="font-heading text-[18px] font-semibold tracking-[-0.01em] text-accent md:text-[22px]">
                        {step.number}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col gap-[6px] md:flex-row md:gap-[36px]">
                      <p className="w-full font-heading text-[16px] font-semibold text-ink md:w-[180px] md:shrink-0 md:text-[17px] lg:w-[200px]">
                        {step.tool}
                      </p>
                      <p className="flex-1 font-body text-[14px] leading-[1.68] text-ink-muted md:text-[15px]">
                        {step.desc}
                      </p>
                    </div>
                  </div>
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

        {/* What this means */}
        <Container>
          <section className="pb-[48px] pt-[40px] md:pb-[64px] md:pt-[56px]">
            <div className="mb-[28px] flex flex-col gap-[10px] md:mb-[36px]">
              <Tag>WHAT THIS MEANS IN PRACTICE</Tag>
              <h2 className="font-heading text-[22px] font-semibold tracking-[-0.015em] text-ink md:text-[28px]">
                The difference it makes
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-[14px] sm:grid-cols-2 md:gap-[16px]">
              {outcomes.map((o, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-[10px] rounded-[14px] border border-line bg-surface p-[22px] md:gap-[12px] md:p-[24px]"
                >
                  <p className="font-heading text-[17px] font-semibold tracking-[-0.005em] text-ink md:text-[18px]">
                    {o.title}
                  </p>
                  <p className="font-body text-[14px] leading-[1.62] text-ink-muted md:text-[15px]">
                    {o.body}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </Container>

        {/* Honesty callout */}
        <Container>
          <section className="pb-[64px] md:pb-[80px]">
            <div className="rounded-[14px] border border-line bg-paper-alt p-[28px] md:rounded-[20px] md:p-[40px]">
              <Tag className="mb-[20px] md:mb-[24px]">ON DESIGN JUDGMENT</Tag>
              <p className="max-w-[720px] font-heading text-[19px] font-medium leading-[1.48] tracking-[-0.01em] text-ink md:text-[24px]">
                AI accelerates the making. It doesn&apos;t replace knowing what to build.
              </p>
              <p className="mt-[16px] max-w-[600px] font-body text-[14px] font-light leading-[1.7] text-ink-muted md:mt-[20px] md:text-[15px]">
                The hard part of design isn&apos;t producing the screens - it&apos;s deciding what to put on them and why. AI doesn&apos;t replace user research, or the judgment call about which feature to cut, or the instinct that tells you a flow feels wrong before you can articulate why. What it does is remove the distance between a good decision and a shipped product. I still own the thinking. AI accelerates the making.
              </p>
            </div>
          </section>
        </Container>
      </main>

      <Footer />
    </>
  );
}
