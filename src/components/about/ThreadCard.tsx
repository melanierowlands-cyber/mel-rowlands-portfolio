/**
 * About "Four threads" card.
 * Desktop spec: surface bg, radius 18, px 28 / py 30, gap 14.
 * number Hanken 16px accent · title Hanken 23px ink · body Poppins Light 15px.
 */
export default function ThreadCard({
  number,
  title,
  body,
}: {
  number: string;
  title: string;
  body: string;
}) {
  return (
    <div className="flex flex-1 flex-col gap-[14px] self-stretch rounded-[18px] bg-surface px-[28px] py-[30px]">
      <p className="font-heading text-[16px] font-medium tracking-[0.02em] text-accent">
        {number}
      </p>
      <div className="h-[6px]" />
      <p className="font-heading text-[23px] font-medium tracking-[-0.005em] text-ink">
        {title}
      </p>
      <p className="font-body text-[15px] font-light leading-[1.58] text-ink-muted">
        {body}
      </p>
    </div>
  );
}
