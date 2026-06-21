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
    <p className="font-body text-[14px] font-semibold uppercase leading-[1.2] tracking-[0.06em] text-accent md:text-[17px] lg:text-[20px]">
      {children}
    </p>
  );
}

function Title({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-heading text-[26px] font-semibold leading-[1.04] tracking-[-0.015em] text-ink sm:text-[34px] lg:text-[44px]">
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
      className={`h-auto w-full rounded-[14px] border border-line object-cover ${className}`}
    />
  );
}

const card = "rounded-[16px] border border-line bg-surface";

/* ---------- section renderers ---------- */

function ProjectIntro({ text }: { text: string }) {
  return (
    <section className="bg-paper-alt">
      <div className="mx-auto max-w-[1440px] px-[20px] py-[32px] sm:px-[40px] md:py-[56px] lg:px-[80px]">
        <p className="font-heading text-[20px] font-medium leading-[1.52] tracking-[-0.01em] text-ink md:text-[26px] lg:text-[32px]">
          {text}
        </p>
      </div>
    </section>
  );
}

function Problem({ s }: { s: Extract<Section, { type: "problem" }> }) {
  return (
    <Wrap>
      <div className="flex flex-col gap-[40px] md:flex-row md:gap-[80px] lg:gap-[120px]">
        <div className="flex flex-1 flex-col gap-[24px]">
          <Eyebrow>{s.eyebrow}</Eyebrow>
          <div className="flex flex-col gap-[16px] font-body text-[18px] font-medium leading-[1.6] text-ink-muted md:text-[20px] lg:text-[24px]">
            {s.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
        <div className="w-full shrink-0 md:w-[360px] lg:w-[470px]">
          {s.side.kind === "metrics" ? (
            <div className="flex flex-col gap-[16px] md:gap-[24px]">
              {s.side.cards.map((c, i) => (
                <div key={i} className={`${card} flex flex-col gap-[16px] rounded-[14px] p-[24px] md:gap-[22px] md:p-[36px]`}>
                  <p className="font-body text-[13px] font-medium uppercase tracking-[0.08em] text-accent">
                    {c.label}
                  </p>
                  <p className="font-heading text-[20px] font-medium tracking-[-0.005em] text-ink md:text-[24px]">
                    {c.value}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className={`${card} flex flex-col gap-[18px] px-[24px] pb-[24px] pt-[22px] md:px-[32px] md:pb-[32px] md:pt-[30px]`}>
              <p className="font-body text-[13px] font-semibold uppercase tracking-[0.05em] text-theme">
                {s.side.label}
              </p>
              <div className="flex flex-col gap-[14px] font-body text-[15px] italic leading-[1.48] text-ink md:text-[16px]">
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
      <div className="flex flex-col gap-[16px]">
        <Eyebrow>{s.eyebrow}</Eyebrow>
        <Title>{s.title}</Title>
      </div>
      <p className="mt-[20px] max-w-[860px] font-body text-[17px] font-light leading-[1.6] text-ink-muted md:mt-[28px] md:text-[19px]">
        {s.intro}
      </p>
      <ul className="mt-[28px] flex flex-col gap-[14px] md:mt-[36px] md:gap-[18px]">
        {s.criteria.map((c, i) => (
          <li key={i} className="flex items-start gap-[14px] md:gap-[16px]">
            <span
              className="mt-[1px] flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-[6px] text-[13px] font-semibold text-theme"
              style={{ backgroundColor: "color-mix(in srgb, var(--color-theme) 14%, transparent)" }}
            >
              ✓
            </span>
            <span className="font-body text-[16px] leading-[1.45] text-ink md:text-[18px]">{c}</span>
          </li>
        ))}
      </ul>
      <p className="mt-[28px] max-w-[900px] font-body text-[17px] font-light leading-[1.6] text-ink-muted md:mt-[36px] md:text-[19px]">
        {s.closing}
      </p>
    </Wrap>
  );
}

function Research({ s }: { s: Extract<Section, { type: "research" }> }) {
  return (
    <Wrap>
      <div className="flex flex-col gap-[40px] md:gap-[48px]">
        <div className="flex flex-col gap-[16px]">
          <Eyebrow>{s.eyebrow}</Eyebrow>
          <Title>{s.title}</Title>
        </div>
        <div className="flex flex-col gap-[24px] md:flex-row md:gap-[32px]">
          {s.personas.map((p, i) => (
            <div key={i} className={`${card} flex w-full flex-col gap-[24px] rounded-[14px] p-[28px] md:gap-[28px] md:p-[40px]`}>
              <div className="flex items-center gap-[20px] md:gap-[24px]">
                {p.portrait ? (
                  <Image
                    src={p.portrait}
                    alt={p.name}
                    width={86}
                    height={86}
                    className="h-[72px] w-[72px] shrink-0 rounded-full object-cover md:h-[86px] md:w-[86px]"
                  />
                ) : (
                  <div className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full bg-paper-alt font-heading text-[24px] font-semibold text-theme md:h-[86px] md:w-[86px] md:text-[26px]">
                    {p.name
                      .replace(/^The\s+/, "")
                      .split(/[\s-]/)
                      .map((w) => w[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                )}
                <p className="font-body text-[15px] italic leading-[1.5] text-ink md:text-[16px]">{p.quote}</p>
              </div>
              <p className="font-heading text-[26px] font-medium leading-[1.12] tracking-[-0.01em] text-ink md:text-[32px]">
                {p.name}
              </p>
              <ul className="flex flex-col gap-[14px]">
                {p.traits.map((t, j) => (
                  <li key={j} className="flex items-center gap-[12px]">
                    <span className="h-[7px] w-[7px] shrink-0 rounded-full bg-theme" />
                    <span className="font-body text-[15px] leading-[1.6] text-ink-muted md:text-[16px]">{t}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-[12px]">
                <div className="h-px w-full bg-line" />
                <p className="font-body text-[12px] font-semibold uppercase tracking-[0.06em] text-theme">
                  → Design Implication
                </p>
                <p className="font-body text-[14px] leading-[1.5] text-ink md:text-[15px]">{p.implication}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="font-body text-[17px] font-light italic leading-[1.5] text-ink-muted md:text-[20px]">
          {s.bridge}
        </p>
      </div>
    </Wrap>
  );
}

function KeyInsight({ s }: { s: Extract<Section, { type: "keyInsight" }> }) {
  return (
    <Wrap>
      <div className="flex flex-col gap-[24px] rounded-[16px] border border-line bg-paper-alt p-[32px] md:gap-[32px] md:rounded-[24px] md:p-[64px] lg:p-[96px]">
        <Eyebrow>{s.eyebrow}</Eyebrow>
        <p className="font-heading text-[28px] font-bold leading-[1.0] tracking-[-0.02em] text-ink sm:text-[40px] md:text-[52px] lg:text-[64px]">
          {s.statement}
        </p>
      </div>
    </Wrap>
  );
}

function Approach({ s }: { s: Extract<Section, { type: "approach" }> }) {
  return (
    <Wrap>
      <div className="flex flex-col gap-[32px] md:gap-[36px]">
        <div className="flex flex-col gap-[14px]">
          <Eyebrow>{s.eyebrow}</Eyebrow>
          <Title>{s.title}</Title>
        </div>
        <p className="max-w-[860px] font-body text-[17px] leading-[1.6] text-ink-muted md:text-[19px]">{s.intro}</p>
        <div className="flex flex-col pt-[8px]">
          {s.steps.map((step, i) => (
            <div key={i} className="border-t border-line">
              <div className="flex gap-[20px] py-[24px] md:gap-[32px] md:py-[30px]">
                <span className="w-[52px] shrink-0 font-heading text-[26px] font-semibold tracking-[-0.01em] text-theme md:w-[72px] md:text-[34px]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-col gap-[8px] md:gap-[9px]">
                  {step.tag && (
                    <span className="w-fit rounded-[6px] border border-line px-[10px] py-[4px] font-body text-[11px] font-semibold uppercase tracking-[0.08em] text-theme md:px-[12px] md:py-[5px]">
                      {step.tag}
                    </span>
                  )}
                  <p className="font-heading text-[18px] font-medium leading-[1.3] text-ink md:text-[21px]">
                    {step.title}
                  </p>
                  <p className="font-body text-[15px] leading-[1.62] text-ink-muted md:text-[16px]">{step.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {s.callout && (
          <div className="flex gap-[18px] pt-[8px] md:gap-[22px]">
            <div className="w-[4px] shrink-0 self-stretch rounded-[2px] bg-theme" />
            <div className="flex flex-col gap-[10px]">
              <p className="font-body text-[12px] font-semibold uppercase tracking-[0.05em] text-theme">
                {s.callout.label}
              </p>
              <p className="font-heading text-[20px] font-medium leading-[1.4] tracking-[-0.005em] text-ink md:text-[23px]">
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
      <div className="flex flex-col gap-[16px] md:gap-[20px]">
        <Eyebrow>{s.eyebrow}</Eyebrow>
        <h2 className="font-heading text-[24px] font-semibold leading-[1.1] tracking-[-0.01em] text-ink md:text-[32px]">
          {s.title}
        </h2>
        <p className="max-w-[940px] font-body text-[16px] font-light leading-[1.6] text-ink-muted md:text-[18px]">
          {s.intro}
        </p>
      </div>

      <div className="mt-[32px] flex flex-col gap-[28px] rounded-[16px] border border-line bg-surface p-[24px] md:mt-[40px] md:flex-row md:gap-[40px] md:rounded-[24px] md:p-[44px]">
        {/* Before */}
        <div className="flex w-full shrink-0 flex-col gap-[20px] md:w-[280px] md:gap-[24px] lg:w-[320px]">
          <p className="font-heading text-[22px] font-semibold text-ink-muted md:text-[26px]">{s.before.heading}</p>
          <div className="flex gap-[14px] md:gap-[18px]">
            {s.before.plans.map((p, i) => (
              <div key={i} className="flex flex-1 flex-col gap-[14px] rounded-[12px] border border-line bg-paper p-[16px] md:gap-[16px] md:p-[20px]">
                <p className="font-heading text-[15px] font-semibold text-ink md:text-[16px]">{p.name}</p>
                <div className="flex flex-col gap-[8px]">
                  {[0, 1, 2].map((k) => (
                    <div key={k} className="h-[8px] w-full rounded-full bg-line" />
                  ))}
                </div>
                <p className="mt-[6px] font-body text-[11px] text-ink-muted">{p.note}</p>
              </div>
            ))}
          </div>
          <p className="font-body text-[13px] leading-[1.5] text-ink-muted md:text-[14px]">{s.before.caption}</p>
        </div>

        <div className="hidden w-px self-stretch bg-line md:block" />

        {/* After */}
        <div className="flex flex-1 flex-col gap-[20px] md:gap-[24px]">
          <p className="font-heading text-[22px] font-semibold text-ink md:text-[26px]">{s.after.heading}</p>
          <div className="flex flex-col gap-[12px] sm:flex-row sm:gap-[16px]">
            {s.after.cards.map((c, i) => (
              <div
                key={i}
                className={`flex flex-1 flex-col gap-[12px] rounded-[14px] border p-[16px] md:gap-[14px] md:p-[18px] ${
                  c.featured ? "border-theme" : "border-line bg-paper"
                }`}
                style={
                  c.featured
                    ? { backgroundColor: "color-mix(in srgb, var(--color-theme) 6%, transparent)" }
                    : undefined
                }
              >
                <p className="font-body text-[11px] font-semibold uppercase tracking-[0.06em] text-theme">
                  {c.flag}
                </p>
                <p className="font-heading text-[18px] font-semibold text-ink md:text-[20px]">{c.name}</p>
                <div className="flex items-end gap-[6px]">
                  {c.was && <span className="font-heading text-[15px] text-ink-muted line-through md:text-[16px]">{c.was}</span>}
                  <span className="font-heading text-[28px] font-bold leading-none text-ink md:text-[34px]">{c.price}</span>
                  {c.unit && <span className="font-body text-[12px] text-ink-muted md:text-[13px]">{c.unit}</span>}
                </div>
                <p className="font-body text-[11px] leading-[1.4] text-ink-muted md:text-[12px]">{c.meta}</p>
                <div className="h-px w-full bg-line" />
                <ul className="flex flex-col gap-[8px]">
                  {c.features.map((f, j) => (
                    <li key={j} className="flex gap-[8px] font-body text-[11px] leading-[1.4] text-ink md:text-[12px]">
                      <span className="text-theme">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div
                  className={`mt-auto rounded-full px-[14px] py-[9px] text-center font-body text-[11px] font-medium md:px-[16px] md:py-[10px] md:text-[12px] ${
                    c.featured ? "bg-theme text-on-accent" : "border border-ink text-ink"
                  }`}
                >
                  {c.cta}
                </div>
                <p className="font-body text-[10px] text-ink-muted">{c.footnote}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-[8px] sm:flex-row sm:items-end sm:justify-between">
            <p className="font-body text-[13px] leading-[1.4] text-theme">
              ↑ {s.after.annotation}
            </p>
            <p className="font-body text-[12px] leading-[1.4] text-ink-muted sm:max-w-[240px] sm:text-right">
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
      <div className="flex flex-col gap-[32px] md:gap-[40px]">
        <div className="flex flex-col gap-[16px]">
          <Eyebrow>{s.eyebrow}</Eyebrow>
          <Title>{s.title}</Title>
        </div>
        <div className="grid grid-cols-1 gap-[16px] sm:grid-cols-2 md:gap-[20px]">
          {s.items.map((f, i) => (
            <div key={i} className={`${card} flex flex-col gap-[14px] p-[24px] md:gap-[16px] md:p-[32px]`}>
              <div
                className="h-[44px] w-[44px] rounded-[12px] md:h-[50px] md:w-[50px]"
                style={{ backgroundColor: "color-mix(in srgb, var(--color-theme) 14%, transparent)" }}
              />
              <p className="font-heading text-[20px] font-medium tracking-[-0.005em] text-ink md:text-[23px]">
                {f.title}
              </p>
              <p className="font-body text-[15px] leading-[1.6] text-ink-muted md:text-[16px]">
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
  return (
    <Wrap>
      <div className="flex flex-col gap-[32px] md:gap-[40px]">
        <div className="flex flex-col gap-[16px]">
          <Eyebrow>{s.eyebrow}</Eyebrow>
          <Title>{s.title}</Title>
          {s.intro && (
            <p className="max-w-[640px] font-body text-[15px] leading-[1.6] text-ink-muted md:text-[16px]">{s.intro}</p>
          )}
        </div>
        <div
          className={
            portrait
              ? "flex flex-wrap justify-center gap-[20px] md:gap-[32px]"
              : "flex flex-col gap-[32px] md:gap-[40px]"
          }
        >
          {s.images.map((img, i) => (
            <figure key={i} className={portrait ? "w-full sm:w-[260px] md:w-[300px]" : "w-full"}>
              <Img img={img} />
              {img.caption && (
                <figcaption className="mt-[12px] font-body text-[15px] leading-[1.5] text-ink-muted md:mt-[14px] md:text-[16px]">
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
      <div className="flex flex-col gap-[32px] md:gap-[40px]">
        <div className="flex flex-col gap-[16px]">
          <Eyebrow>{s.eyebrow}</Eyebrow>
          <Title>{s.title}</Title>
          <p className="max-w-[940px] font-body text-[16px] font-light leading-[1.6] text-ink-muted md:text-[18px]">
            {s.intro}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-[14px] md:grid-cols-4 md:gap-[20px]">
          {s.stats.map((st, i) => (
            <div key={i} className={`${card} flex flex-col gap-[10px] p-[20px] md:gap-[12px] md:p-[26px]`}>
              <p className="font-body text-[11px] font-semibold uppercase tracking-[0.06em] text-accent md:text-[13px]">
                {st.label}
              </p>
              <p className="font-heading text-[36px] font-bold leading-none text-theme md:text-[48px] lg:text-[56px]">
                {st.value}
              </p>
              <p className="font-body text-[13px] text-ink-muted md:text-[15px]">{st.sub}</p>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className={`${card} p-[20px] md:p-[28px]`}>
          <div className="mb-[20px] flex items-center justify-between md:mb-[24px]">
            <p className="font-heading text-[16px] font-semibold text-ink md:text-[18px]">{s.chartTitle}</p>
            <span className="flex items-center gap-[8px] font-body text-[12px] text-ink-muted md:text-[13px]">
              <span className="h-[14px] w-[14px] rounded-[3px] bg-theme" /> {s.chartLegend}
            </span>
          </div>
          <div className="flex gap-[10px] md:gap-[14px]">
            <div className="flex h-[200px] flex-col justify-between py-[2px] font-body text-[11px] text-ink-muted md:h-[260px] md:text-[12px]">
              {[8, 6, 4, 2, 0].map((n) => (
                <span key={n}>{n}</span>
              ))}
            </div>
            <div className="flex flex-1 flex-col">
              <div className="flex h-[200px] items-end gap-[4px] border-b border-line md:h-[260px] md:gap-[6px]">
                {s.chart.map((v, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t-[3px] bg-theme"
                    style={{ height: `${Math.max((v / max) * 100, 1)}%` }}
                    title={`${v}`}
                  />
                ))}
              </div>
              <div className="mt-[8px] flex justify-between font-body text-[11px] text-ink-muted md:mt-[10px] md:text-[12px]">
                {s.chartAxis.map((a) => (
                  <span key={a}>{a}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-[18px] md:gap-[22px]">
          <div className="w-[4px] shrink-0 self-stretch rounded-[2px] bg-theme" />
          <div className="flex flex-col gap-[10px]">
            <p className="font-body text-[12px] font-semibold uppercase tracking-[0.05em] text-theme">
              {s.validated.label}
            </p>
            <p className="font-body text-[16px] leading-[1.6] text-ink md:text-[18px]">{s.validated.body}</p>
          </div>
        </div>
        <p className="max-w-[940px] font-body text-[13px] font-light italic leading-[1.6] text-ink-muted md:text-[14px]">
          {s.note}
        </p>
      </div>
    </Wrap>
  );
}

function Iterations({ s }: { s: Extract<Section, { type: "iterations" }> }) {
  return (
    <Wrap>
      <div className="flex flex-col gap-[16px]">
        <Eyebrow>{s.eyebrow}</Eyebrow>
        <Title>{s.title}</Title>
        <p className="max-w-[980px] font-body text-[17px] font-light leading-[1.6] text-ink-muted md:text-[19px]">
          {s.intro}
        </p>
      </div>
      <div className="mt-[32px] flex flex-col gap-[16px] md:mt-[40px] md:flex-row md:items-start md:gap-[20px]">
        {s.items.map((it, i) => (
          <div key={i} className={`${card} flex flex-col gap-[12px] p-[24px] md:flex-1 md:p-[32px]`}>
            <p className="font-body text-[13px] font-semibold uppercase tracking-[0.06em] text-accent">
              {it.label}
            </p>
            <p className="font-heading text-[20px] font-medium tracking-[-0.005em] text-ink md:text-[24px]">{it.title}</p>
            <p className="font-body text-[15px] leading-[1.62] text-ink-muted md:text-[16px]">{it.body}</p>
            {it.image && (
              <div className="mt-[10px] md:mt-[12px]">
                <Img img={it.image} />
              </div>
            )}
          </div>
        ))}
      </div>
      <p className="mt-[32px] max-w-[940px] font-body text-[17px] font-light leading-[1.6] text-ink-muted md:mt-[40px] md:text-[19px]">
        {s.closing}
      </p>
    </Wrap>
  );
}

function BusinessOpp({ s }: { s: Extract<Section, { type: "businessOpp" }> }) {
  return (
    <Wrap>
      <div className="flex flex-col gap-[16px]">
        <Eyebrow>{s.eyebrow}</Eyebrow>
        <Title>{s.title}</Title>
        <p className="max-w-[980px] font-body text-[17px] font-light leading-[1.6] text-ink-muted md:text-[19px]">
          {s.intro}
        </p>
      </div>
      <div className="mt-[32px] flex flex-col gap-[16px] md:mt-[40px] md:flex-row md:items-start md:gap-[20px]">
        {s.columns.map((col, i) => (
          <div key={i} className={`${card} flex flex-col gap-[16px] p-[24px] md:flex-1 md:gap-[20px] md:p-[32px]`}>
            <p className="font-body text-[13px] font-semibold uppercase tracking-[0.06em] text-accent">
              {col.label}
            </p>
            <p className="font-heading text-[20px] font-medium tracking-[-0.005em] text-ink md:text-[24px]">{col.title}</p>
            <ul className="flex flex-col gap-[10px] md:gap-[12px]">
              {col.bullets.map((b, j) => (
                <li key={j} className="flex items-start gap-[12px]">
                  <span className="mt-[8px] h-[7px] w-[7px] shrink-0 rounded-full bg-theme" />
                  <span className="font-body text-[15px] leading-[1.5] text-ink md:text-[16px]">{b}</span>
                </li>
              ))}
            </ul>
            {col.footnote && (
              <p className="mt-[4px] font-body text-[13px] text-ink-muted md:text-[14px]">{col.footnote}</p>
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
      <div className="flex flex-col gap-[16px]">
        <Eyebrow>{s.eyebrow}</Eyebrow>
        <Title>{s.title}</Title>
        <p className="max-w-[980px] font-body text-[17px] font-light leading-[1.6] text-ink-muted md:text-[19px]">
          {s.intro}
        </p>
      </div>
      <div className="mt-[32px] flex flex-col gap-[12px] md:mt-[40px] md:flex-row md:items-stretch">
        {s.steps.map((step, i) => (
          <div key={i} className="flex items-stretch gap-[12px]">
            <div className={`${card} flex flex-1 flex-col gap-[10px] p-[20px] md:p-[24px]`}>
              <span className="font-heading text-[14px] font-semibold text-theme">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="font-heading text-[17px] font-semibold text-ink md:text-[18px]">{step.tool}</p>
              <p className="font-body text-[13px] leading-[1.5] text-ink-muted">{step.desc}</p>
            </div>
            {i < s.steps.length - 1 && (
              <span className="hidden self-center font-body text-[18px] text-theme md:inline">→</span>
            )}
          </div>
        ))}
      </div>
      <p className="mt-[32px] max-w-[940px] font-body text-[17px] font-light leading-[1.6] text-ink-muted md:mt-[40px] md:text-[19px]">
        {s.closing}
      </p>
    </Wrap>
  );
}

function Learnings({ s }: { s: Extract<Section, { type: "learnings" }> }) {
  return (
    <Wrap>
      <div className="flex flex-col gap-[40px] md:gap-[48px]">
        <div className="flex flex-col gap-[16px]">
          <Eyebrow>{s.eyebrow}</Eyebrow>
          <Title>{s.title}</Title>
        </div>
        <div className="flex flex-col gap-[16px] md:flex-row md:items-stretch md:gap-[20px]">
          {s.cards.map((c, i) => (
            <div key={i} className={`${card} flex flex-col gap-[12px] p-[24px] md:flex-1 md:gap-[14px] md:p-[30px]`}>
              <p className="font-heading text-[24px] font-bold tracking-[-0.01em] text-theme md:text-[26px]">
                {String(i + 1).padStart(2, "0")}
              </p>
              <p className="font-heading text-[18px] font-semibold leading-[1.22] tracking-[-0.005em] text-ink md:text-[20px]">
                {c.title}
              </p>
              <p className="font-body text-[14px] leading-[1.6] text-ink-muted md:text-[14.5px]">{c.body}</p>
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
