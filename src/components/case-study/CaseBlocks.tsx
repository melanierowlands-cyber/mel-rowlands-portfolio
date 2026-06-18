import Image from "next/image";
import type { Section, ShowcaseImage } from "@/lib/projects";
import ImagePlaceholder from "./ImagePlaceholder";

/* ---------- shared helpers (exact Figma px) ---------- */

function Wrap({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-[1440px] px-[80px] ${className}`}>{children}</div>;
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-body text-[20px] font-semibold uppercase leading-[1.2] tracking-[0.06em] text-accent">
      {children}
    </p>
  );
}

function Title({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-heading text-[44px] font-semibold leading-[1.04] tracking-[-0.015em] text-ink">
      {children}
    </h2>
  );
}

function Img({ img, className = "" }: { img: ShowcaseImage; className?: string }) {
  if (!img.src) return <ImagePlaceholder label={img.alt} width={img.width} height={img.height} className={className} />;
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
      <div className="mx-auto max-w-[1440px] px-[80px] py-[56px]">
        <p className="font-heading text-[32px] font-medium leading-[1.52] tracking-[-0.01em] text-ink">
          {text}
        </p>
      </div>
    </section>
  );
}

function Problem({ s }: { s: Extract<Section, { type: "problem" }> }) {
  return (
    <Wrap>
      <div className="flex gap-[120px]">
        <div className="flex w-[690px] flex-col gap-[24px]">
          <Eyebrow>{s.eyebrow}</Eyebrow>
          <div className="flex flex-col gap-[16px] font-body text-[24px] font-medium leading-[1.6] text-ink-muted">
            {s.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
        <div className="w-[470px] shrink-0">
          {s.side.kind === "metrics" ? (
            <div className="flex flex-col gap-[24px]">
              {s.side.cards.map((c, i) => (
                <div key={i} className={`${card} flex flex-col gap-[22px] rounded-[14px] p-[36px]`}>
                  <p className="font-body text-[13px] font-medium uppercase tracking-[0.08em] text-accent">
                    {c.label}
                  </p>
                  <p className="font-heading text-[24px] font-medium tracking-[-0.005em] text-ink">
                    {c.value}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className={`${card} flex flex-col gap-[18px] px-[32px] pb-[32px] pt-[30px]`}>
              <p className="font-body text-[13px] font-semibold uppercase tracking-[0.05em] text-theme">
                {s.side.label}
              </p>
              <div className="flex flex-col gap-[14px] font-body text-[16px] italic leading-[1.48] text-ink">
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
      <p className="mt-[28px] max-w-[860px] font-body text-[19px] font-light leading-[1.6] text-ink-muted">
        {s.intro}
      </p>
      <ul className="mt-[36px] flex flex-col gap-[18px]">
        {s.criteria.map((c, i) => (
          <li key={i} className="flex items-start gap-[16px]">
            <span
              className="mt-[1px] flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-[6px] text-[13px] font-semibold text-theme"
              style={{ backgroundColor: "color-mix(in srgb, var(--color-theme) 14%, transparent)" }}
            >
              ✓
            </span>
            <span className="font-body text-[18px] leading-[1.45] text-ink">{c}</span>
          </li>
        ))}
      </ul>
      <p className="mt-[36px] max-w-[900px] font-body text-[19px] font-light leading-[1.6] text-ink-muted">
        {s.closing}
      </p>
    </Wrap>
  );
}

function Research({ s }: { s: Extract<Section, { type: "research" }> }) {
  return (
    <Wrap>
      <div className="flex flex-col gap-[48px]">
        <div className="flex flex-col gap-[16px]">
          <Eyebrow>{s.eyebrow}</Eyebrow>
          <Title>{s.title}</Title>
        </div>
        <div className="flex gap-[32px]">
          {s.personas.map((p, i) => (
            <div key={i} className={`${card} flex w-[624px] flex-col gap-[28px] rounded-[14px] p-[40px]`}>
              <div className="flex items-center gap-[24px]">
                <div className="flex h-[86px] w-[86px] shrink-0 items-center justify-center rounded-full bg-paper-alt font-heading text-[26px] font-semibold text-theme">
                  {p.name
                    .replace(/^The\s+/, "")
                    .split(/[\s-]/)
                    .map((w) => w[0])
                    .slice(0, 2)
                    .join("")}
                </div>
                <p className="font-body text-[16px] italic leading-[1.5] text-ink">{p.quote}</p>
              </div>
              <p className="font-heading text-[32px] font-medium leading-[1.12] tracking-[-0.01em] text-ink">
                {p.name}
              </p>
              <ul className="flex flex-col gap-[14px]">
                {p.traits.map((t, j) => (
                  <li key={j} className="flex items-center gap-[12px]">
                    <span className="h-[7px] w-[7px] shrink-0 rounded-full bg-theme" />
                    <span className="font-body text-[16px] leading-[1.6] text-ink-muted">{t}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-[12px]">
                <div className="h-px w-full bg-line" />
                <p className="font-body text-[12px] font-semibold uppercase tracking-[0.06em] text-theme">
                  → Design Implication
                </p>
                <p className="font-body text-[15px] leading-[1.5] text-ink">{p.implication}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="max-w-[1280px] font-body text-[20px] font-light italic leading-[1.5] text-ink-muted">
          {s.bridge}
        </p>
      </div>
    </Wrap>
  );
}

function KeyInsight({ s }: { s: Extract<Section, { type: "keyInsight" }> }) {
  return (
    <Wrap>
      <div className="flex flex-col gap-[32px] rounded-[24px] border border-line bg-paper-alt p-[96px]">
        <Eyebrow>{s.eyebrow}</Eyebrow>
        <p className="max-w-[940px] font-heading text-[64px] font-bold leading-[1.0] tracking-[-0.02em] text-ink">
          {s.statement}
        </p>
      </div>
    </Wrap>
  );
}

function Approach({ s }: { s: Extract<Section, { type: "approach" }> }) {
  return (
    <Wrap>
      <div className="flex flex-col gap-[36px]">
        <div className="flex flex-col gap-[14px]">
          <Eyebrow>{s.eyebrow}</Eyebrow>
          <Title>{s.title}</Title>
        </div>
        <p className="max-w-[860px] font-body text-[19px] leading-[1.6] text-ink-muted">{s.intro}</p>
        <div className="flex flex-col pt-[8px]">
          {s.steps.map((step, i) => (
            <div key={i} className="border-t border-line">
              <div className="flex gap-[32px] py-[30px]">
                <span className="w-[72px] shrink-0 font-heading text-[34px] font-semibold tracking-[-0.01em] text-theme">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-col gap-[9px]">
                  {step.tag && (
                    <span className="w-fit rounded-[6px] border border-line px-[12px] py-[5px] font-body text-[11px] font-semibold uppercase tracking-[0.08em] text-theme">
                      {step.tag}
                    </span>
                  )}
                  <p className="font-heading text-[21px] font-medium leading-[1.3] text-ink">
                    {step.title}
                  </p>
                  <p className="font-body text-[16px] leading-[1.62] text-ink-muted">{step.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {s.callout && (
          <div className="flex gap-[22px] pt-[8px]">
            <div className="w-[4px] shrink-0 self-stretch rounded-[2px] bg-theme" />
            <div className="flex flex-col gap-[10px]">
              <p className="font-body text-[12px] font-semibold uppercase tracking-[0.05em] text-theme">
                {s.callout.label}
              </p>
              <p className="font-heading text-[23px] font-medium leading-[1.4] tracking-[-0.005em] text-ink">
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
      <div className="flex flex-col gap-[20px]">
        <Eyebrow>{s.eyebrow}</Eyebrow>
        <h2 className="font-heading text-[32px] font-semibold leading-[1.1] tracking-[-0.01em] text-ink">
          {s.title}
        </h2>
        <p className="max-w-[940px] font-body text-[18px] font-light leading-[1.6] text-ink-muted">
          {s.intro}
        </p>
      </div>

      <div className="mt-[40px] flex gap-[40px] rounded-[24px] border border-line bg-surface p-[44px]">
        {/* Before */}
        <div className="flex w-[320px] shrink-0 flex-col gap-[24px]">
          <p className="font-heading text-[26px] font-semibold text-ink-muted">{s.before.heading}</p>
          <div className="flex gap-[18px]">
            {s.before.plans.map((p, i) => (
              <div key={i} className="flex flex-1 flex-col gap-[16px] rounded-[12px] border border-line bg-paper p-[20px]">
                <p className="font-heading text-[16px] font-semibold text-ink">{p.name}</p>
                <div className="flex flex-col gap-[8px]">
                  {[0, 1, 2].map((k) => (
                    <div key={k} className="h-[8px] w-full rounded-full bg-line" />
                  ))}
                </div>
                <p className="mt-[8px] font-body text-[11px] text-ink-muted">{p.note}</p>
              </div>
            ))}
          </div>
          <p className="font-body text-[14px] leading-[1.5] text-ink-muted">{s.before.caption}</p>
        </div>

        <div className="w-px self-stretch bg-line" />

        {/* After */}
        <div className="flex flex-1 flex-col gap-[24px]">
          <p className="font-heading text-[26px] font-semibold text-ink">{s.after.heading}</p>
          <div className="flex gap-[16px]">
            {s.after.cards.map((c, i) => (
              <div
                key={i}
                className={`flex flex-1 flex-col gap-[14px] rounded-[14px] border p-[18px] ${
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
                <p className="font-heading text-[20px] font-semibold text-ink">{c.name}</p>
                <div className="flex items-end gap-[6px]">
                  {c.was && <span className="font-heading text-[16px] text-ink-muted line-through">{c.was}</span>}
                  <span className="font-heading text-[34px] font-bold leading-none text-ink">{c.price}</span>
                  {c.unit && <span className="font-body text-[13px] text-ink-muted">{c.unit}</span>}
                </div>
                <p className="font-body text-[12px] leading-[1.4] text-ink-muted">{c.meta}</p>
                <div className="h-px w-full bg-line" />
                <ul className="flex flex-col gap-[8px]">
                  {c.features.map((f, j) => (
                    <li key={j} className="flex gap-[8px] font-body text-[12px] leading-[1.4] text-ink">
                      <span className="text-theme">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div
                  className={`mt-auto rounded-full px-[16px] py-[10px] text-center font-body text-[12px] font-medium ${
                    c.featured ? "bg-theme text-on-accent" : "border border-ink text-ink"
                  }`}
                >
                  {c.cta}
                </div>
                <p className="font-body text-[10px] text-ink-muted">{c.footnote}</p>
              </div>
            ))}
          </div>
          <div className="flex items-end justify-between">
            <p className="max-w-[260px] font-body text-[13px] leading-[1.4] text-theme">
              ↑ {s.after.annotation}
            </p>
            <p className="max-w-[240px] text-right font-body text-[12px] leading-[1.4] text-ink-muted">
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
      <div className="flex flex-col gap-[40px]">
        <div className="flex flex-col gap-[16px]">
          <Eyebrow>{s.eyebrow}</Eyebrow>
          <Title>{s.title}</Title>
        </div>
        <div className="grid grid-cols-2 gap-[20px]">
          {s.items.map((f, i) => (
            <div key={i} className={`${card} flex flex-col gap-[16px] p-[32px]`}>
              <div
                className="h-[50px] w-[50px] rounded-[12px]"
                style={{ backgroundColor: "color-mix(in srgb, var(--color-theme) 14%, transparent)" }}
              />
              <p className="font-heading text-[23px] font-medium tracking-[-0.005em] text-ink">
                {f.title}
              </p>
              <p className="max-w-[566px] font-body text-[16px] leading-[1.6] text-ink-muted">
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
      <div className="flex flex-col gap-[40px]">
        <div className="flex flex-col gap-[16px]">
          <Eyebrow>{s.eyebrow}</Eyebrow>
          <Title>{s.title}</Title>
          {s.intro && (
            <p className="max-w-[640px] font-body text-[16px] leading-[1.6] text-ink-muted">{s.intro}</p>
          )}
        </div>
        <div className={portrait ? "flex justify-center gap-[32px]" : "flex flex-col gap-[40px]"}>
          {s.images.map((img, i) => (
            <figure key={i} className={portrait ? "w-[300px]" : "w-full"}>
              <Img img={img} />
              {img.caption && (
                <figcaption className="mt-[14px] font-body text-[16px] leading-[1.5] text-ink-muted">
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
      <div className="flex flex-col gap-[40px]">
        <div className="flex flex-col gap-[16px]">
          <Eyebrow>{s.eyebrow}</Eyebrow>
          <Title>{s.title}</Title>
          <p className="max-w-[940px] font-body text-[18px] font-light leading-[1.6] text-ink-muted">
            {s.intro}
          </p>
        </div>

        <div className="grid grid-cols-4 gap-[20px]">
          {s.stats.map((st, i) => (
            <div key={i} className={`${card} flex flex-col gap-[12px] p-[26px]`}>
              <p className="font-body text-[13px] font-semibold uppercase tracking-[0.06em] text-accent">
                {st.label}
              </p>
              <p className="font-heading text-[56px] font-bold leading-none text-theme">{st.value}</p>
              <p className="font-body text-[15px] text-ink-muted">{st.sub}</p>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className={`${card} p-[28px]`}>
          <div className="mb-[24px] flex items-center justify-between">
            <p className="font-heading text-[18px] font-semibold text-ink">{s.chartTitle}</p>
            <span className="flex items-center gap-[8px] font-body text-[13px] text-ink-muted">
              <span className="h-[14px] w-[14px] rounded-[3px] bg-theme" /> {s.chartLegend}
            </span>
          </div>
          <div className="flex gap-[14px]">
            <div className="flex h-[260px] flex-col justify-between py-[2px] font-body text-[12px] text-ink-muted">
              {[8, 6, 4, 2, 0].map((n) => (
                <span key={n}>{n}</span>
              ))}
            </div>
            <div className="flex flex-1 flex-col">
              <div className="flex h-[260px] items-end gap-[6px] border-b border-line">
                {s.chart.map((v, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t-[3px] bg-theme"
                    style={{ height: `${Math.max((v / max) * 100, 1)}%` }}
                    title={`${v}`}
                  />
                ))}
              </div>
              <div className="mt-[10px] flex justify-between font-body text-[12px] text-ink-muted">
                {s.chartAxis.map((a) => (
                  <span key={a}>{a}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-[22px]">
          <div className="w-[4px] shrink-0 self-stretch rounded-[2px] bg-theme" />
          <div className="flex flex-col gap-[10px]">
            <p className="font-body text-[12px] font-semibold uppercase tracking-[0.05em] text-theme">
              {s.validated.label}
            </p>
            <p className="font-body text-[18px] leading-[1.6] text-ink">{s.validated.body}</p>
          </div>
        </div>
        <p className="max-w-[940px] font-body text-[14px] font-light italic leading-[1.6] text-ink-muted">
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
        <p className="max-w-[980px] font-body text-[19px] font-light leading-[1.6] text-ink-muted">
          {s.intro}
        </p>
      </div>
      <div className="mt-[40px] flex items-start gap-[20px]">
        {s.items.map((it, i) => (
          <div key={i} className={`${card} flex flex-1 flex-col gap-[12px] p-[32px]`}>
            <p className="font-body text-[13px] font-semibold uppercase tracking-[0.06em] text-accent">
              {it.label}
            </p>
            <p className="font-heading text-[24px] font-medium tracking-[-0.005em] text-ink">{it.title}</p>
            <p className="font-body text-[16px] leading-[1.62] text-ink-muted">{it.body}</p>
            {it.image && (
              <div className="mt-[12px]">
                <Img img={it.image} />
              </div>
            )}
          </div>
        ))}
      </div>
      <p className="mt-[40px] max-w-[940px] font-body text-[19px] font-light leading-[1.6] text-ink-muted">
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
        <p className="max-w-[980px] font-body text-[19px] font-light leading-[1.6] text-ink-muted">
          {s.intro}
        </p>
      </div>
      <div className="mt-[40px] flex items-start gap-[20px]">
        {s.columns.map((col, i) => (
          <div key={i} className={`${card} flex flex-1 flex-col gap-[20px] p-[32px]`}>
            <p className="font-body text-[13px] font-semibold uppercase tracking-[0.06em] text-accent">
              {col.label}
            </p>
            <p className="font-heading text-[24px] font-medium tracking-[-0.005em] text-ink">{col.title}</p>
            <ul className="flex flex-col gap-[12px]">
              {col.bullets.map((b, j) => (
                <li key={j} className="flex items-start gap-[12px]">
                  <span className="mt-[8px] h-[7px] w-[7px] shrink-0 rounded-full bg-theme" />
                  <span className="font-body text-[16px] leading-[1.5] text-ink">{b}</span>
                </li>
              ))}
            </ul>
            {col.footnote && (
              <p className="mt-[4px] font-body text-[14px] text-ink-muted">{col.footnote}</p>
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
        <p className="max-w-[980px] font-body text-[19px] font-light leading-[1.6] text-ink-muted">
          {s.intro}
        </p>
      </div>
      <div className="mt-[40px] flex items-stretch gap-[12px]">
        {s.steps.map((step, i) => (
          <div key={i} className="flex flex-1 items-stretch gap-[12px]">
            <div className={`${card} flex flex-1 flex-col gap-[10px] p-[24px]`}>
              <span className="font-heading text-[14px] font-semibold text-theme">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="font-heading text-[18px] font-semibold text-ink">{step.tool}</p>
              <p className="font-body text-[13px] leading-[1.5] text-ink-muted">{step.desc}</p>
            </div>
            {i < s.steps.length - 1 && (
              <span className="self-center font-body text-[18px] text-theme">→</span>
            )}
          </div>
        ))}
      </div>
      <p className="mt-[40px] max-w-[940px] font-body text-[19px] font-light leading-[1.6] text-ink-muted">
        {s.closing}
      </p>
    </Wrap>
  );
}

function Learnings({ s }: { s: Extract<Section, { type: "learnings" }> }) {
  return (
    <Wrap>
      <div className="flex flex-col gap-[48px]">
        <div className="flex flex-col gap-[16px]">
          <Eyebrow>{s.eyebrow}</Eyebrow>
          <Title>{s.title}</Title>
        </div>
        <div className="flex items-stretch gap-[20px]">
          {s.cards.map((c, i) => (
            <div key={i} className={`${card} flex flex-1 flex-col gap-[14px] p-[30px]`}>
              <p className="font-heading text-[26px] font-bold tracking-[-0.01em] text-theme">
                {String(i + 1).padStart(2, "0")}
              </p>
              <p className="font-heading text-[20px] font-semibold leading-[1.22] tracking-[-0.005em] text-ink">
                {c.title}
              </p>
              <p className="font-body text-[14.5px] leading-[1.6] text-ink-muted">{c.body}</p>
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
