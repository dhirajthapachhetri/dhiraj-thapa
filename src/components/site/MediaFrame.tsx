import type { MediaSlot } from "@/content/media";
import { cn } from "@/lib/utils";

type MediaFrameProps = {
  slot: MediaSlot;
  className?: string;
  /** Timecode shown in the placeholder's corner. */
  timecode?: string;
  tone?: "paper" | "ink";
  sizes?: string;
  priority?: boolean;
};

/**
 * Shows a real photo when `slot.src` is set, otherwise a film-frame placeholder
 * (crop marks, safe-area guide, timecode) that clearly reads as "photo to come".
 */
export function MediaFrame({
  slot,
  className,
  timecode = "00:00:00:00",
  tone = "paper",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
}: MediaFrameProps) {
  if (slot.src) {
    return (
      <div className={cn("relative overflow-hidden bg-muted", className)}>
        <img
          src={slot.src}
          alt={slot.alt}
          sizes={sizes}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className="h-full w-full object-cover"
        />
      </div>
    );
  }

  const ink = tone === "ink";
  return (
    <div
      role="img"
      aria-label={`${slot.alt} (placeholder)`}
      className={cn(
        "grain overflow-hidden",
        ink ? "frame-placeholder-ink text-ink-foreground" : "frame-placeholder text-foreground",
        className,
      )}
    >
      <CropMarks />
      <div
        className={cn(
          "absolute inset-[12%] border border-dashed",
          ink ? "border-ink-foreground/20" : "border-foreground/15",
        )}
      />
      <div className="absolute left-5 top-5 flex items-center gap-2">
        <span className="animate-rec inline-block size-1.5 rounded-full bg-accent" />
        <span className={cn("timecode", ink ? "text-ink-muted" : "text-muted-foreground")}>
          {timecode}
        </span>
      </div>
      <span
        className={cn(
          "timecode absolute right-5 top-5",
          ink ? "text-ink-muted" : "text-muted-foreground",
        )}
      >
        ISO 800 · 24 fps
      </span>
      <div className="absolute inset-0 flex items-center justify-center p-8">
        <p className="serif-statement max-w-[16ch] text-center text-2xl leading-tight md:text-3xl">
          {slot.placeholder}
        </p>
      </div>
      <span
        className={cn(
          "eyebrow absolute bottom-5 left-5",
          ink ? "text-ink-muted" : "text-muted-foreground",
        )}
      >
        Placeholder
      </span>
    </div>
  );
}

function CropMarks() {
  const base = "absolute size-4 border-accent";
  return (
    <>
      <span className={cn(base, "left-3 top-3 border-l border-t")} />
      <span className={cn(base, "right-3 top-3 border-r border-t")} />
      <span className={cn(base, "bottom-3 left-3 border-b border-l")} />
      <span className={cn(base, "bottom-3 right-3 border-b border-r")} />
    </>
  );
}
