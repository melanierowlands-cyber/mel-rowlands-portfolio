import Image from "next/image";
import type { Section, ShowcaseImage } from "@/lib/projects";
import ImagePlaceholder from "./ImagePlaceholder";

/* ---------- shared helpers ---------- */

function Wrap({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`mx-auto max-w-[1440px] px-[20px] sm:px-[40px] lg:px-[80px] ${className}`}>
      {children}
    </div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-body text-[13px] font-semibold uppercase leading-[1.2] tracking-[0.06em] text-accent md:text-[14px]">
      {children}
    </p>
  );
}

function Title({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-heading text-[22px] font-semibold leading-[1.04] tracking-[-0.015em] text-ink sm:text-[28px] md:text-[34px]">
      {children}
    </h2>
  );
}

function Img({ img, className = "" }: { img: ShowcaseImage; className?: string }) {
  if (!img.src)
    return <ImagePlaceholder label={img.alt} width={img.width} height={img.height} className={className} />;
  return (
    <Image
      src={img.src}
      alt={img.alt}
      width={img.width}
      height={img.height}
      className={`h-auto w-full rounded-[14px] border border-line object-cover shadow-[0px_4px_20px_rgba(0,0,0,0.08)] ${className}`}
    />
  );
}

const card = "rounded-[16px] border border-line bg-surface";

/* ---------- section renderers ---------- */

function ProjectIntro({ text }: { text: string }) {
  return (
    <section className="bg-paper-alt">
      <div className="mx-auto max-w-[1440px] px-[20px] py-[28px] sm:px-[40px] md:py-[40px] lg:px-[80px]">
        <p className="font-heading text-[18px] font-medium leading-[1.52] tracking-[-0.01em] text-ink md:text-[20px] lg:text-[24px]">
          {text}
        </p>
      </div>
    </section>
  );
}

function Problem({ s }: { s: Extract<Section, { type: "problem" }> }) {
  return (
    <Wrap>
      <div className="flex flex-col gap-[32px] md:flex-row md:gap-[56px] lg:gap-[80px]">
        <div className="flex flex-1 flex-col gap-[20px]">
          <Eyebrow>{s.eyebrow}</Eyebrow>
          <div className="flex flex-col gap-[14px] font-body text-[16px] font-medium leading-[1.6] text-ink-muted md:text-[17px]">
            {s.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
        <div className="w-full shrink-0 md:w-[280px] lg:w-[340px]">
          {s.side.kind === "metrics" ? (
            <div className="flex flex-col gap-[12px] md:gap-[16px]">
              {s.side.cards.map((c, i) => (
                <div key={i} className={`${card} flex flex-col gap-[12px] rounded-[14px] p-[20px] md:gap-[16px] md:p-[24px]`}>
                  <p className="font-body text-[12px] font-medium uppercase tracking-[0.08em] text-accent">
                    {c.label}
                  </p>
                  <p className="font-heading text-[18px] font-medium tracking-[-0.005em] text-ink md:text-[20px]">
                    {c.value}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className={`${card} flex flex-col gap-[14px] px-[20px] pb-[20px] pt-[18px] md:px-[24px] md:pb-[24px] md:pt-[22px]`}>
              <p className="font-body text-[12px] font-semibold uppercase tracking-[0.05em] text-theme">
                {s.side.label}
              </p>
              <div className="flex flex-col gap-[12px] font-body text-[14px] italic leading-[1.48] text-ink md:text-[15px]">
                {s.side.questions.map((q, i) => (
                  <p key={i}>{q}</p>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Wrap>
  );
}

function Goal({ s }: { s: Extract<Section, { type: "goal" }> }) {
  return (
    <Wrap>
      <div className="flex flex-col gap-[14px]">
        <Eyebrow>{s.eyebrow}</Eyebrow>
        <Title>{s.title}</Title>
      </div>
      <p className="mt-[16px] max-w-[860px] font-body text-[15px] font-light leading-[1.6] text-ink-muted md:mt-[22px] md:text-[16px]">
        {s.intro}
      </p>
      <ul className="mt-[22px] flex flex-col gap-[12px] md:mt-[28px] md:gap-[14px]">
        {s.criteria.map((c, i) => (
          <li key={i} className="flex items-start gap-[12px] md:gap-[14px]">
            <span
              className="mt-[1px] flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-[5px] text-[12px] font-semibold text-theme"
              style={{ backgroundColor: "color-mix(in srgb, var(--color-theme) 14%, transparent)" }}
            >
              ✓
            </span>
            <span className="font-body text-[14px] leading-[1.45] text-ink md:text-[15px]">{c}</span>
          </li>
        ))}
      </ul>
      <p className="mt-[22px] max-w-[900px] font-body text-[15px] font-light leading-[1.6] text-ink-muted md:mt-[28px] md:text-[16px]">
        {s.closing}
      </p>
    </Wrap>
  );
}

const PERSONA_ICONS: Record<string, React.ReactNode> = {
  person: (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <circle cx="8" cy="4.5" r="2.5" />
      <path d="M3 15a5 5 0 0110 0H3z" />
    </svg>
  ),
  graduation: (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8 2L1 6l7 3.5L15 6 8 2z" />
      <path d="M5 8v2.5c0 1.38 1.34 2.5 3 2.5s3-1.12 3-2.5V8" />
    </svg>
  ),
  location: (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8 1a5 5 0 00-5 5c0 3.9 5 9 5 9s5-5.1 5-9a5 5 0 00-5-5zm0 7a2 2 0 110-4 2 2 0 010 4z" />
    </svg>
  ),
  phone: (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M5 1h6a1 1 0 011 1v12a1 1 0 01-1 1H5a1 1 0 01-1-1V2a1 1 0 011-1zm3 12a.75.75 0 100-1.5.75.75 0 000 1.5z" />
    </svg>
  ),
  house: (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8 1.5L2 7v7h4v-4h4v4h4V7L8 1.5z" />
    </svg>
  ),
  budget: (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <rect x="2" y="2" width="12" height="2.5" rx="1.25" />
      <rect x="2" y="6.75" width="12" height="2.5" rx="1.25" />
      <rect x="2" y="11.5" width="8" height="2.5" rx="1.25" />
    </svg>
  ),
  people: (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <circle cx="5.5" cy="4.5" r="2" />
      <circle cx="10.5" cy="4.5" r="2" />
      <path d="M1 13a4.5 4.5 0 019 0H1z" />
      <path d="M10.5 10.8a4.5 4.5 0 014.5 2.2h-4.5" />
    </svg>
  ),
};

function Research({ s }: { s: Extract<Section, { type: "research" }> }) {
  const isRich = s.personas.some((p) => p.demographics);

  return (
    <Wrap>
      <div className="flex flex-col gap-[32px] md:gap-[40px]">
        <div className="flex flex-col gap-[14px]">
          <Eyebrow>{s.eyebrow}</Eyebrow>
          <Title>{s.title}</Title>
        </div>
        <div className={`flex flex-col gap-[20px] md:flex-row ${isRich ? "md:gap-[28px]" : "md:gap-[24px]"}`}>
          {s.personas.map((p, i) => {
            const initials = p.name
              .replace(/^The\s+/, "")
              .split(/[\s-]/)
              .map((w) => w[0])
              .slice(0, 2)
              .join("");

            if (p.demographics) {
              return (
                <div key={i} className={`${card} flex w-full flex-col overflow-hidden`}>
                  {p.photo && (
                    <div className="relative h-[200px] w-full overflow-hidden md:h-[240px]">
                      <Image src={p.photo} alt={p.name} fill className="object-cover object-top" />
                    </div>
                  )}
                  <div className="flex flex-col gap-[18px] p-[22px] md:gap-[20px] md:p-[28px]">
                    <div className="flex items-start gap-[14px]">
                      {p.portrait ? (
                        <Image
                          src={p.portrait}
                          alt={p.name}
                          width={44}
                          height={44}
                          className="h-[44px] w-[44px] shrink-0 rounded-full object-cover"
                        />
                      ) : (
                        <div className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full bg-paper-alt font-heading text-[15px] font-semibold text-theme">
                          {initials}
                        </div>
                      )}
                      <p className="font-body text-[13px] italic leading-[1.55] text-ink md:text-[14px]">{p.quote}</p>
                    </div>
                    <p className="font-heading text-[20px] font-medium leading-[1.12] tracking-[-0.01em] text-ink md:text-[22px]">
                      {p.name}
                    </p>
                    <div className="grid grid-cols-2 gap-x-[20px]">
                      <ul className="flex flex-col gap-[10px]">
                        {p.demographics.map((d, j) => (
                          <li key={j} className="flex items-center gap-[8px]">
                            <span className="shrink-0 text-theme">{PERSONA_ICONS[d.icon]}</span>
                            <span className="font-body text-[12px] leading-[1.4] text-ink md:text-[13px]">{d.label}</span>
                          </li>
                        ))}
                      </ul>
                      <ul className="flex flex-col gap-[10px]">
                        {p.traits.map((t, j) => (
                          <li key={j} className="flex items-start gap-[8px]">
                            <span className="mt-[5px] h-[5px] w-[5px] shrink-0 rounded-full bg-theme" />
                            <span className="font-body text-[12px] leading-[1.4] text-ink-muted md:text-[13px]">{t}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-col gap-[10px]">
                      <div className="h-px w-full bg-line" />
                      <p className="font-body text-[11px] font-semibold uppercase tracking-[0.06em] text-theme">
                        → Design Implication
                      </p>
                      <p className="font-body text-[13px] leading-[1.5] text-ink md:text-[14px]">{p.implication}</p>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <div key={i} className={`${card} flex w-full flex-col gap-[18px] rounded-[14px] p-[22px] md:gap-[22px] md:p-[28px]`}>
                <div className="flex items-center gap-[16px] md:gap-[20px]">
                  {p.portrait ? (
                    <Image
                      src={p.portrait}
                      alt={p.name}
                      width={72}
                      height={72}
                      className="h-[60px] w-[60px] shrink-0 rounded-full object-cover md:h-[72px] md:w-[72px]"
                    />
                  ) : (
                    <div className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full bg-paper-alt font-heading text-[20px] font-semibold text-theme md:h-[72px] md:w-[72px] md:text-[22px]">
                      {initials}
                    </div>
                  )}
                  <p className="font-body text-[14px] italic leading-[1.5] text-ink md:text-[15px]">{p.quote}</p>
                </div>
                <p className="font-heading text-[20px] font-medium leading-[1.12] tracking-[-0.01em] text-ink md:text-[24px]">
                  {p.name}
                </p>
                <ul className="flex flex-col gap-[12px]">
                  {p.traits.map((t, j) => (
                    <li key={j} className="flex items-center gap-[10px]">
                      <span className="h-[6px] w-[6px] shrink-0 rounded-full bg-theme" />
                      <span className="font-body text-[14px] leading-[1.6] text-ink-muted md:text-[15px]">{t}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col gap-[10px]">
                  <div className="h-px w-full bg-line" />
                  <p className="font-body text-[11px] font-semibold uppercase tracking-[0.06em] text-theme">
                    → Design Implication
                  </p>
                  <p className="font-body text-[13px] leading-[1.5] text-ink md:text-[14px]">{p.implication}</p>
                </div>
              </div>
            );
          })}
        </div>
        <p className="font-body text-[15px] font-light italic leading-[1.5] text-ink-muted md:text-[16px]">
          {s.bridge}
        </p>
      </div>
    </Wrap>
  );
}

function KeyInsight({ s }: { s: Extract<Section, { type: "keyInsight" }> }) {
  return (
    <Wrap>
      <div className="flex flex-col gap-[20px] rounded-[16px] border border-line bg-paper-alt p-[28px] md:gap-[24px] md:rounded-[20px] md:p-[40px]">
        <Eyebrow>{s.eyebrow}</Eyebrow>
        <p className="font-heading text-[24px] font-bold leading-[1.0] tracking-[-0.02em] text-ink sm:text-[32px] md:text-[42px]">
          {s.statement}
        </p>
      </div>
    </Wrap>
  );
}

function Approach({ s }: { s: Extract<Section, { type: "approach" }> }) {
  return (
    <Wrap>
      <div className="flex flex-col gap-[28px] md:gap-[32px]">
        <div className="flex flex-col gap-[12px]">
          <Eyebrow>{s.eyebrow}</Eyebrow>
          <Title>{s.title}</Title>
        </div>
        <p className="max-w-[860px] font-body text-[15px] leading-[1.6] text-ink-muted md:text-[16px]">{s.intro}</p>
        <div className="flex flex-col pt-[4px]">
          {s.steps.map((step, i) => (
            <div key={i} className="border-t border-line">
              <div className="flex gap-[16px] py-[20px] md:gap-[24px] md:py-[24px]">
                <span className="w-[44px] shrink-0 font-heading text-[22px] font-semibold tracking-[-0.01em] text-theme md:w-[56px] md:text-[26px]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-col gap-[6px] md:gap-[7px]">
                  {step.tag && (
                    <span className="w-fit rounded-[5px] border border-line px-[8px] py-[3px] font-body text-[10px] font-semibold uppercase tracking-[0.08em] text-theme md:px-[10px] md:py-[4px]">
                      {step.tag}
                    </span>
                  )}
                  <p className="font-heading text-[16px] font-medium leading-[1.3] text-ink md:text-[18px]">
                    {step.title}
                  </p>
                  <p className="font-body text-[14px] leading-[1.62] text-ink-muted md:text-[15px]">{step.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {s.callout && (
          <div className="flex gap-[16px] pt-[4px] md:gap-[18px]">
            <div className="w-[4px] shrink-0 self-stretch rounded-[2px] bg-theme" />
            <div className="flex flex-col gap-[8px]">
              <p className="font-body text-[11px] font-semibold uppercase tracking-[0.05em] text-theme">
                {s.callout.label}
              </p>
              <p className="font-heading text-[17px] font-medium leading-[1.4] tracking-[-0.005em] text-ink md:text-[19px]">
                {s.callout.body}
              </p>
            </div>
          </div>
        )}
      </div>
    </Wrap>
  );
}

function PricingReframe({ s }: { s: Extract<Section, { type: "pricingReframe" }> }) {
  return (
    <Wrap>
      <div className="flex flex-col gap-[14px] md:gap-[16px]">
        <Eyebrow>{s.eyebrow}</Eyebrow>
        <h2 className="font-heading text-[20px] font-semibold leading-[1.1] tracking-[-0.01em] text-ink md:text-[24px]">
          {s.title}
        </h2>
        <p className="max-w-[940px] font-body text-[14px] font-light leading-[1.6] text-ink-muted md:text-[15px]">
          {s.intro}
        </p>
      </div>

      <div className="mt-[24px] flex flex-col gap-[24px] rounded-[14px] border border-line bg-surface p-[20px] md:mt-[28px] md:flex-row md:gap-[32px] md:rounded-[18px] md:p-[28px]">
        {/* Before */}
        <div className="flex w-full shrink-0 flex-col gap-[16px] md:w-[240px] md:gap-[18px]">
          <p className="font-heading text-[18px] font-semibold text-ink-muted md:text-[20px]">{s.before.heading}</p>
          <div className="flex gap-[12px] md:gap-[14px]">
            {s.before.plans.map((p, i) => (
              <div key={i} className="flex flex-1 flex-col gap-[12px] rounded-[10px] border border-line bg-paper p-[14px] md:gap-[14px] md:p-[16px]">
                <p className="font-heading text-[14px] font-semibold text-ink md:text-[15px]">{p.name}</p>
                <div className="flex flex-col gap-[6px]">
                  {[0, 1, 2].map((k) => (
                    <div key={k} className="h-[7px] w-full rounded-full bg-line" />
                  ))}
                </div>
                <p className="mt-[4px] font-body text-[10px] text-ink-muted">{p.note}</p>
              </div>
            ))}
          </div>
          <p className="font-body text-[12px] leading-[1.5] text-ink-muted">{s.before.caption}</p>
        </div>

        <div className="hidden w-px self-stretch bg-line md:block" />

        {/* After */}
        <div className="flex flex-1 flex-col gap-[16px] md:gap-[18px]">
          <p className="font-heading text-[18px] font-semibold text-ink md:text-[20px]">{s.after.heading}</p>
          <div className="flex flex-col gap-[10px] sm:flex-row sm:gap-[12px]">
            {s.after.cards.map((c, i) => (
              <div
                key={i}
                className={`flex flex-1 flex-col gap-[10px] rounded-[12px] border p-[14px] md:gap-[12px] md:p-[16px] ${
                  c.featured ? "border-theme" : "border-line bg-paper"
                }`}
                style={
                  c.featured
                    ? { backgroundColor: "color-mix(in srgb, var(--color-theme) 6%, transparent)" }
                    : undefined
                }
              >
                <p className="font-body text-[10px] font-semibold uppercase tracking-[0.06em] text-theme">
                  {c.flag}
                </p>
                <p className="font-heading text-[16px] font-semibold text-ink md:text-[17px]">{c.name}</p>
                <div className="flex items-end gap-[5px]">
                  {c.was && <span className="font-heading text-[13px] text-ink-muted line-through md:text-[14px]">{c.was}</span>}
                  <span className="font-heading text-[24px] font-bold leading-none text-ink md:text-[26px]">{c.price}</span>
                  {c.unit && <span className="font-body text-[11px] text-ink-muted">{c.unit}</span>}
                </div>
                <p className="font-body text-[10px] leading-[1.4] text-ink-muted">{c.meta}</p>
                <div className="h-px w-full bg-line" />
                <ul className="flex flex-col gap-[6px]">
                  {c.features.map((f, j) => (
                    <li key={j} className="flex gap-[7px] font-body text-[10px] leading-[1.4] text-ink">
                      <span className="text-theme">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div
                  className={`mt-auto rounded-full px-[12px] py-[8px] text-center font-body text-[10px] font-medium ${
                    c.featured ? "bg-theme text-on-accent" : "border border-ink text-ink"
                  }`}
                >
                  {c.cta}
                </div>
                <p className="font-body text-[9px] text-ink-muted">{c.footnote}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-[6px] sm:flex-row sm:items-end sm:justify-between">
            <p className="font-body text-[12px] leading-[1.4] text-theme">
              ↑ {s.after.annotation}
            </p>
            <p className="font-body text-[11px] leading-[1.4] text-ink-muted sm:max-w-[220px] sm:text-right">
              {s.after.note}
            </p>
          </div>
        </div>
      </div>
    </Wrap>
  );
}

function Features({ s }: { s: Extract<Section, { type: "features" }> }) {
  return (
    <Wrap>
      <div className="flex flex-col gap-[28px] md:gap-[32px]">
        <div className="flex flex-col gap-[14px]">
          <Eyebrow>{s.eyebrow}</Eyebrow>
          <Title>{s.title}</Title>
        </div>
        <div className="grid grid-cols-1 gap-[14px] sm:grid-cols-2 md:gap-[16px]">
          {s.items.map((f, i) => (
            <div key={i} className={`${card} flex flex-col gap-[12px] p-[20px] md:gap-[14px] md:p-[24px]`}>
              <div
                className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-[10px] md:h-[46px] md:w-[46px]"
                style={{ backgroundColor: "color-mix(in srgb, var(--color-theme) 80%, transparent)" }}
              >
                {f.icon ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={f.icon} alt="" className="h-[24px] w-[24px] object-contain md:h-[26px] md:w-[26px]" />
                ) : null}
              </div>
              <p className="font-heading text-[17px] font-medium tracking-[-0.005em] text-ink md:text-[19px]">
                {f.title}
              </p>
              <p className="font-body text-[14px] leading-[1.6] text-ink-muted md:text-[15px]">
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Wrap>
  );
}

function Showcase({ s }: { s: Extract<Section, { type: "showcase" }> }) {
  const portrait = s.images.every((i) => i.height > i.width);
  const twoCol = s.columns === 2;
  const gridClass = twoCol
    ? "grid grid-cols-1 gap-[20px] sm:grid-cols-2 md:gap-[28px]"
    : portrait
    ? "flex flex-wrap justify-center gap-[16px] md:gap-[24px]"
    : "flex flex-col gap-[24px] md:gap-[32px]";
  const figClass = twoCol
    ? "w-full"
    : portrait
    ? "w-full sm:w-[240px] md:w-[280px]"
    : "w-full";
  return (
    <Wrap>
      <div className="flex flex-col gap-[28px] md:gap-[32px]">
        {(s.eyebrow || s.title || s.intro) && (
          <div className="flex flex-col gap-[14px]">
            {s.eyebrow && <Eyebrow>{s.eyebrow}</Eyebrow>}
            {s.title && <Title>{s.title}</Title>}
            {s.intro && (
              <p className="max-w-[640px] font-body text-[14px] leading-[1.6] text-ink-muted md:text-[15px]">{s.intro}</p>
            )}
          </div>
        )}
        <div className={gridClass}>
          {s.images.map((img, i) => (
            <figure key={i} className={figClass}>
              <Img img={img} />
              {img.caption && (
                <figcaption className="mt-[10px] font-body text-[13px] leading-[1.5] text-ink-muted md:mt-[12px] md:text-[14px]">
                  {img.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      </div>
    </Wrap>
  );
}

function Results({ s }: { s: Extract<Section, { type: "results" }> }) {
  const max = 8;
  return (
    <Wrap>
      <div className="flex flex-col gap-[28px] md:gap-[32px]">
        <div className="flex flex-col gap-[14px]">
          <Eyebrow>{s.eyebrow}</Eyebrow>
          <Title>{s.title}</Title>
          <p className="max-w-[940px] font-body text-[14px] font-light leading-[1.6] text-ink-muted md:text-[15px]">
            {s.intro}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-[12px] md:grid-cols-4 md:gap-[16px]">
          {s.stats.map((st, i) => (
            <div key={i} className={`${card} flex flex-col gap-[8px] p-[16px] md:gap-[10px] md:p-[20px]`}>
              <p className="font-body text-[10px] font-semibold uppercase tracking-[0.06em] text-accent md:text-[11px]">
                {st.label}
              </p>
              <p className="font-heading text-[28px] font-bold leading-none text-theme md:text-[36px] lg:text-[44px]">
                {st.value}
              </p>
              <p className="font-body text-[12px] text-ink-muted md:text-[13px]">{st.sub}</p>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className={`${card} p-[16px] md:p-[22px]`}>
          <div className="mb-[16px] flex items-center justify-between md:mb-[20px]">
            <p className="font-heading text-[14px] font-semibold text-ink md:text-[15px]">{s.chartTitle}</p>
            <span className="flex items-center gap-[6px] font-body text-[11px] text-ink-muted md:text-[12px]">
              <span className="h-[12px] w-[12px] rounded-[3px] bg-theme" /> {s.chartLegend}
            </span>
          </div>
          <div className="flex gap-[8px] md:gap-[12px]">
            <div className="flex h-[160px] flex-col justify-between py-[2px] font-body text-[10px] text-ink-muted md:h-[200px] md:text-[11px]">
              {[8, 6, 4, 2, 0].map((n) => (
                <span key={n}>{n}</span>
              ))}
            </div>
            <div className="flex flex-1 flex-col">
              <div className="flex h-[160px] items-end gap-[4px] border-b border-line md:h-[200px] md:gap-[5px]">
                {s.chart.map((v, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t-[3px] bg-theme"
                    style={{ height: `${Math.max((v / max) * 100, 1)}%` }}
                    title={`${v}`}
                  />
                ))}
              </div>
              <div className="mt-[6px] flex justify-between font-body text-[10px] text-ink-muted md:mt-[8px] md:text-[11px]">
                {s.chartAxis.map((a) => (
                  <span key={a}>{a}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-[14px] md:gap-[18px]">
          <div className="w-[4px] shrink-0 self-stretch rounded-[2px] bg-theme" />
          <div className="flex flex-col gap-[8px]">
            <p className="font-body text-[11px] font-semibold uppercase tracking-[0.05em] text-theme">
              {s.validated.label}
            </p>
            <p className="font-body text-[14px] leading-[1.6] text-ink md:text-[15px]">{s.validated.body}</p>
          </div>
        </div>
        <p className="max-w-[940px] font-body text-[12px] font-light italic leading-[1.6] text-ink-muted">
          {s.note}
        </p>
      </div>
    </Wrap>
  );
}

function Iterations({ s }: { s: Extract<Section, { type: "iterations" }> }) {
  return (
    <Wrap>
      <div className="flex flex-col gap-[14px]">
        <Eyebrow>{s.eyebrow}</Eyebrow>
        <Title>{s.title}</Title>
        <p className="max-w-[980px] font-body text-[15px] font-light leading-[1.6] text-ink-muted md:text-[16px]">
          {s.intro}
        </p>
      </div>
      <div className="mt-[24px] flex flex-col gap-[12px] md:mt-[32px] md:flex-row md:items-start md:gap-[16px]">
        {s.items.map((it, i) => (
          <div key={i} className={`${card} flex flex-col gap-[10px] p-[20px] md:flex-1 md:p-[24px]`}>
            <p className="font-body text-[12px] font-semibold uppercase tracking-[0.06em] text-accent">
              {it.label}
            </p>
            <p className="font-heading text-[17px] font-medium tracking-[-0.005em] text-ink md:text-[20px]">{it.title}</p>
            <p className="font-body text-[14px] leading-[1.62] text-ink-muted md:text-[15px]">{it.body}</p>
            {it.image && (
              <div className="mt-[8px] md:mt-[10px]">
                <Img img={it.image} />
              </div>
            )}
          </div>
        ))}
      </div>
      <p className="mt-[24px] max-w-[940px] font-body text-[15px] font-light leading-[1.6] text-ink-muted md:mt-[32px] md:text-[16px]">
        {s.closing}
      </p>
    </Wrap>
  );
}

function BusinessOpp({ s }: { s: Extract<Section, { type: "businessOpp" }> }) {
  return (
    <Wrap>
      <div className="flex flex-col gap-[14px]">
        <Eyebrow>{s.eyebrow}</Eyebrow>
        <Title>{s.title}</Title>
        <p className="max-w-[980px] font-body text-[15px] font-light leading-[1.6] text-ink-muted md:text-[16px]">
          {s.intro}
        </p>
      </div>
      <div className="mt-[24px] flex flex-col gap-[12px] md:mt-[32px] md:flex-row md:items-start md:gap-[16px]">
        {s.columns.map((col, i) => (
          <div key={i} className={`${card} flex flex-col gap-[12px] p-[20px] md:flex-1 md:gap-[16px] md:p-[24px]`}>
            <p className="font-body text-[12px] font-semibold uppercase tracking-[0.06em] text-accent">
              {col.label}
            </p>
            <p className="font-heading text-[17px] font-medium tracking-[-0.005em] text-ink md:text-[20px]">{col.title}</p>
            <ul className="flex flex-col gap-[8px] md:gap-[10px]">
              {col.bullets.map((b, j) => (
                <li key={j} className="flex items-start gap-[10px]">
                  <span className="mt-[8px] h-[6px] w-[6px] shrink-0 rounded-full bg-theme" />
                  <span className="font-body text-[14px] leading-[1.5] text-ink md:text-[15px]">{b}</span>
                </li>
              ))}
            </ul>
            {col.footnote && (
              <p className="mt-[2px] font-body text-[12px] text-ink-muted">{col.footnote}</p>
            )}
          </div>
        ))}
      </div>
    </Wrap>
  );
}

function Pipeline({ s }: { s: Extract<Section, { type: "pipeline" }> }) {
  return (
    <Wrap>
      <div className="flex flex-col gap-[14px]">
        <Eyebrow>{s.eyebrow}</Eyebrow>
        <Title>{s.title}</Title>
        <p className="max-w-[980px] font-body text-[15px] font-light leading-[1.6] text-ink-muted md:text-[16px]">
          {s.intro}
        </p>
      </div>
      <div className="mt-[24px] flex flex-col gap-[10px] md:mt-[32px] md:flex-row md:items-stretch">
        {s.steps.map((step, i) => (
          <div key={i} className="flex items-stretch gap-[10px]">
            <div className={`${card} flex flex-1 flex-col gap-[8px] p-[16px] md:p-[18px]`}>
              <span className="font-heading text-[13px] font-semibold text-theme">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="font-heading text-[15px] font-semibold text-ink md:text-[16px]">{step.tool}</p>
              <p className="font-body text-[12px] leading-[1.5] text-ink-muted">{step.desc}</p>
            </div>
            {i < s.steps.length - 1 && (
              <span className="hidden self-center font-body text-[16px] text-theme md:inline">→</span>
            )}
          </div>
        ))}
      </div>
      <p className="mt-[24px] max-w-[940px] font-body text-[15px] font-light leading-[1.6] text-ink-muted md:mt-[32px] md:text-[16px]">
        {s.closing}
      </p>
    </Wrap>
  );
}

function Learnings({ s }: { s: Extract<Section, { type: "learnings" }> }) {
  return (
    <Wrap>
      <div className="flex flex-col gap-[32px] md:gap-[36px]">
        <div className="flex flex-col gap-[14px]">
          <Eyebrow>{s.eyebrow}</Eyebrow>
          <Title>{s.title}</Title>
        </div>
        <div className="flex flex-col gap-[12px] md:flex-row md:items-stretch md:gap-[16px]">
          {s.cards.map((c, i) => (
            <div key={i} className={`${card} flex flex-col gap-[10px] p-[20px] md:flex-1 md:gap-[12px] md:p-[22px]`}>
              <p className="font-heading text-[20px] font-bold tracking-[-0.01em] text-theme md:text-[22px]">
                {String(i + 1).padStart(2, "0")}
              </p>
              <p className="font-heading text-[16px] font-semibold leading-[1.22] tracking-[-0.005em] text-ink md:text-[17px]">
                {c.title}
              </p>
              <p className="font-body text-[13px] leading-[1.6] text-ink-muted">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </Wrap>
  );
}

/* ---------- dispatcher ---------- */

export default function CaseSection({ section }: { section: Section }) {
  switch (section.type) {
    case "projectIntro":
      return <ProjectIntro text={section.text} />;
    case "problem":
      return <Problem s={section} />;
    case "goal":
      return <Goal s={section} />;
    case "research":
      return <Research s={section} />;
    case "keyInsight":
      return <KeyInsight s={section} />;
    case "approach":
      return <Approach s={section} />;
    case "pricingReframe":
      return <PricingReframe s={section} />;
    case "features":
      return <Features s={section} />;
    case "showcase":
      return <Showcase s={section} />;
    case "results":
      return <Results s={section} />;
    case "iterations":
      return <Iterations s={section} />;
    case "businessOpp":
      return <BusinessOpp s={section} />;
    case "pipeline":
      return <Pipeline s={section} />;
    case "learnings":
      return <Learnings s={section} />;
    default:
      return null;
  }
}
