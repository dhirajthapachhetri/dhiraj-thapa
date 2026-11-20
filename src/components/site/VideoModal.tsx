import * as DialogPrimitive from "@radix-ui/react-dialog";
import type { Project } from "@/content/projects";
import { cn } from "@/lib/utils";

type VideoModalProps = {
  project: Project | null;
  onClose: () => void;
};

function isFile(url: string) {
  return /\.(mp4|webm|mov)(\?|$)/i.test(url);
}

/** Full-screen viewer. Plays YouTube/Vimeo embeds or video files; shows a notice for placeholders. */
export function VideoModal({ project, onClose }: VideoModalProps) {
  const portrait = project?.format === "portrait";
  return (
    <DialogPrimitive.Root open={!!project} onOpenChange={(o) => !o && onClose()}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-ink data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0" />
        <DialogPrimitive.Content className="fixed inset-0 z-50 flex flex-col text-ink-foreground outline-none data-[state=open]:animate-in data-[state=open]:fade-in-0">
          {project ? (
            <>
              <div className="container-editorial flex items-center justify-between py-5">
                <div>
                  <DialogPrimitive.Title className="text-sm font-semibold">{project.title}</DialogPrimitive.Title>
                  <DialogPrimitive.Description className="eyebrow mt-1 text-ink-muted">
                    {project.category}
                  </DialogPrimitive.Description>
                </div>
                <DialogPrimitive.Close className="eyebrow border border-ink-border px-4 py-2.5 transition-colors hover:bg-ink-foreground hover:text-ink">
                  Close ✕
                </DialogPrimitive.Close>
              </div>
              <div className="flex min-h-0 flex-1 items-center justify-center px-5 pb-6">
                <div
                  className={cn(
                    "relative max-h-full w-full",
                    portrait ? "aspect-[9/16] max-w-[min(420px,calc((100vh-160px)*9/16))]" : "aspect-video max-w-[min(1200px,calc((100vh-200px)*16/9))]",
                  )}
                >
                  {project.video ? (
                    isFile(project.video) ? (
                      <video
                        src={project.video}
                        controls
                        autoPlay
                        playsInline
                        preload="metadata"
                        className="h-full w-full bg-ink object-contain"
                      />
                    ) : (
                      <iframe
                        src={project.video}
                        title={project.title}
                        allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
                        allowFullScreen
                        loading="lazy"
                        className="h-full w-full border-0"
                      />
                    )
                  ) : (
                    <div className="frame-placeholder-ink grain flex h-full w-full flex-col items-center justify-center gap-4 p-8 text-center">
                      <span className="eyebrow text-accent">Video coming soon</span>
                      <p className="serif-statement max-w-[20ch] text-3xl">This project slot is ready for a real edit.</p>
                      <p className="max-w-sm text-sm text-ink-muted">{project.description}</p>
                    </div>
                  )}
                </div>
              </div>
              {project.externalUrl ? (
                <div className="container-editorial pb-6">
                  <a
                    href={project.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-draw text-sm"
                  >
                    View project ↗
                  </a>
                </div>
              ) : null}
            </>
          ) : null}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
