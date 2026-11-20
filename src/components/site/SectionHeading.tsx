import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  index: string;
  label: string;
  title: ReactNode;
  className?: string;
  tone?: "paper" | "ink";
  size?: "lg" | "md";
};

/** Editorial section header: numbered label on a hairline, then a large title. */
export function SectionHeading({
  index,
  label,
  title,
  className,
  tone = "paper",
  size = "lg",
}: SectionHeadingProps) {
  const ink = tone === "ink";
  return (
    <div className={cn("grid gap-8 md:grid-cols-12", className)}>
      <div
        className={cn(
          "flex items-baseline gap-4 border-t pt-4 md:col-span-3",
          ink ? "border-ink-border text-ink-muted" : "border-foreground text-muted-foreground",
        )}
      >
        <span className="timecode">{index}</span>
        <span className="eyebrow">{label}</span>
      </div>
      <Reveal className="md:col-span-9">
        <h2 className={cn(size === "lg" ? "display-lg" : "display-md", "max-w-[18ch] text-balance")}>
          {title}
        </h2>
      </Reveal>
    </div>
  );
}
