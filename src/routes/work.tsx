import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageIntro } from "@/components/site/PageIntro";
import { ProjectCard } from "@/components/site/ProjectCard";
import { Reveal } from "@/components/site/Reveal";
import { ContactCTA } from "@/components/site/Sections";
import { VideoModal } from "@/components/site/VideoModal";
import { categories, filterProjects, projects, type Category, type Project } from "@/content/projects";
import { cn } from "@/lib/utils";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: pageMeta(
      "Selected Work",
      "Selected video work by Dhiraj Thapa Chhetri across real estate, weddings, marketing and commercial, and short-form social content.",
    ),
  }),
  component: WorkPage,
});

function WorkPage() {
  const [filter, setFilter] = useState<Category | "All">("All");
  const [active, setActive] = useState<Project | null>(null);
  const list = filterProjects(projects, filter);
  const hasPlaceholders = projects.some((p) => p.placeholder);

  return (
    <>
      <PageIntro index="04" label="Selected Work" title={<>Different stories. <span className="serif-statement tracking-normal">One creative perspective.</span></>}>
        <p>Real estate, weddings, commercial and short-form edits — in the formats they were made for.</p>
      </PageIntro>

      <section aria-label="Projects" className="container-editorial pb-24 md:pb-36">
        <div className="sticky top-16 z-10 -mx-1 mb-12 flex flex-wrap items-center gap-2 border-y border-border bg-background/95 px-1 py-4 backdrop-blur-sm md:top-20">
          {(["All", ...categories] as const).map((c) => {
            const count = filterProjects(projects, c).length;
            const selected = filter === c;
            return (
              <button
                key={c}
                type="button"
                aria-pressed={selected}
                onClick={() => setFilter(c)}
                className={cn(
                  "flex items-baseline gap-2 border px-4 py-2 text-[0.8125rem] font-medium transition-colors",
                  selected ? "border-foreground bg-foreground text-background" : "border-border hover:border-foreground",
                )}
              >
                {c}
                <span className={cn("timecode", selected ? "text-background/60" : "text-muted-foreground")}>{count}</span>
              </button>
            );
          })}
        </div>

        {hasPlaceholders ? (
          <p className="mb-10 max-w-xl border-l-2 border-accent pl-4 text-sm text-muted-foreground">
            Project slots are shown as placeholders while the first videos are being selected. Each opens in a full-screen
            player once its video link is added.
          </p>
        ) : null}

        <div className="columns-1 gap-8 sm:columns-2 lg:columns-3">
          {list.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 80} className="mb-12 break-inside-avoid">
              <ProjectCard project={p} index={projects.indexOf(p)} onOpen={setActive} />
            </Reveal>
          ))}
        </div>
      </section>

      <ContactCTA />
      <VideoModal project={active} onClose={() => setActive(null)} />
    </>
  );
}
