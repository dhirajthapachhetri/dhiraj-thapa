import type { Project } from "@/content/projects";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  index: number;
  onOpen: (project: Project) => void;
  className?: string;
};

export function ProjectCard({ project, index, onOpen, className }: ProjectCardProps) {
  const portrait = project.format === "portrait";
  const num = String(index + 1).padStart(2, "0");
  return (
    <article className={cn("group", className)}>
      <button
        type="button"
        onClick={() => onOpen(project)}
        className="block w-full text-left"
        aria-label={`Open ${project.title} — ${project.category}`}
      >
        <div
          className={cn(
            "relative overflow-hidden",
            portrait ? "aspect-[9/16]" : "aspect-video",
            project.thumbnail ? "bg-muted" : "frame-placeholder-ink grain",
          )}
        >
          {project.thumbnail ? (
            <img
              src={project.thumbnail}
              alt=""
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          ) : (
            <>
              <span className="timecode absolute left-4 top-4 text-ink-muted">
                {portrait ? "9:16" : "16:9"} · {num}
              </span>
              <span className="eyebrow absolute right-4 top-4 text-ink-muted">
                {project.placeholder ? "Placeholder" : project.category}
              </span>
              <span className="serif-statement absolute inset-x-4 bottom-4 text-2xl text-ink-foreground md:text-3xl">
                {project.title}
              </span>
            </>
          )}
          <span
            aria-hidden
            className="absolute left-1/2 top-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-accent text-accent-foreground opacity-0 transition-all duration-500 group-hover:opacity-100 group-focus-within:opacity-100"
          >
            <svg viewBox="0 0 24 24" className="ml-0.5 size-5" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </div>
        <div className="mt-4 flex items-baseline justify-between gap-4 border-t border-border pt-3">
          <h3 className="text-base font-semibold tracking-tight">{project.title}</h3>
          <span className="timecode shrink-0 text-muted-foreground">{num}</span>
        </div>
        <p className="eyebrow mt-1 text-muted-foreground">{project.category}</p>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>
      </button>
    </article>
  );
}
