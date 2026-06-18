import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Container from "@/components/Container";
import AvailabilityBadge from "@/components/contact/AvailabilityBadge";
import ContactLinkRow from "@/components/contact/ContactLinkRow";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact — Mel Rowlands",
  description:
    "Open to product design roles and selective collaborations. Based in Cape Town, working with teams anywhere.",
};

export default function ContactPage() {
  return (
    <>
      <Nav />

      <main>
        {/* Hero */}
        <Container>
          <section className="flex flex-col gap-[28px] pb-[72px] pt-[110px]">
            <AvailabilityBadge />
            <h1 className="max-w-[1280px] font-heading text-[62px] font-medium leading-[1.06] tracking-[-0.02em] text-ink">
              Let&apos;s build something good together.
            </h1>
            <p className="max-w-[760px] font-body text-[20px] font-light leading-[1.6] text-ink-muted">
              Open to product design roles and selective collaborations. Based
              in Cape Town, working with teams anywhere.
            </p>
          </section>
        </Container>

        {/* Links list */}
        <Container>
          <div className="border-b border-line pb-0">
            <ContactLinkRow
              label="Email"
              value={site.email}
              href={`mailto:${site.email}`}
              arrow="→"
            />
            <ContactLinkRow
              label="LinkedIn"
              value={site.linkedinLabel}
              href={site.linkedin}
              arrow="↗"
              external
            />
            <ContactLinkRow
              label="Curriculum Vitae"
              value={site.cvLabel}
              href={site.cvUrl}
              arrow="↓"
              external
            />
          </div>
        </Container>

        {/* Bottom bar */}
        <Container>
          <div className="flex items-center justify-between py-[36px] font-body text-[14px] text-ink-muted">
            <p>{site.copyright}</p>
            <p>{site.location}</p>
          </div>
        </Container>
      </main>
    </>
  );
}
