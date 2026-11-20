import type { ReactNode } from "react";

type PageIntroProps = {
  index: string;
  label: string;
  title: ReactNode;
  children?: ReactNode;
};

/** Opening block for inner pages: label row, oversized title and optional lede. */
export function PageIntro({ index, label, title, children }: PageIntroProps) {
  return (
    <section className="container-editorial pb-16 pt-14 md:pb-24 md:pt-24">
      <div className="flex items-baseline gap-4 text-muted-foreground">
        <span className="timecode">{index}</span>
        <span className="h-px w-10 bg-foreground/30" />
        <span className="eyebrow">{label}</span>
      </div>
      <h1 className="display-xl animate-rise mt-8 max-w-[14ch] text-balance">{title}</h1>
      {children ? (
        <div className="lede mt-10 max-w-2xl text-muted-foreground animate-rise [animation-delay:150ms]">
          {children}
        </div>
      ) : null}
    </section>
  );
}
