import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/site/PageIntro";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ContactCTA } from "@/components/site/Sections";
import { experience, timeline } from "@/content/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/journey")({
  head: () => ({
    meta: [
      { title: "Journey — Dhiraj Thapa Chhetri" },
      {
        name: "description",
        content:
          "Every chapter built the next: from Portal Bikes in 2019 to freelance editing, Glamour Clicks Studio and founding CineNest Media in August 2025.",
      },
      { property: "og:title", content: "Journey — Dhiraj Thapa Chhetri" },
      {
        property: "og:description",
        content: "The career timeline and professional experience of Dhiraj Thapa Chhetri, founder of CineNest Media.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: JourneyPage,
});

const AXIS_START = 2019;
const AXIS_END = 2027;

function nowAsYear() {
  const d = new Date();
  return d.getFullYear() + d.getMonth() / 12;
}

function JourneyPage() {
  return (
    <>
      <PageIntro index="03" label="Journey" title={<>Every chapter <span className="serif-statement tracking-normal">built</span> the next.</>}>
        <p>
          A path through visual production, independent editing and two businesses — some of them running side by side.
        </p>
      </PageIntro>

      {/* Timeline */}
      <section aria-label="Career timeline" className="container-editorial pb-24 md:pb-36">
        <ol className="relative">
          <span aria-hidden className="absolute bottom-0 left-[7px] top-0 w-px bg-border md:left-[calc(33.333%-0.5px)]" />
          {timeline.map((t, i) => (
            <li key={`${t.date}-${t.chapter}`} className="relative grid gap-4 pb-16 pl-10 md:grid-cols-3 md:gap-0 md:pb-24 md:pl-0">
              <span
                aria-hidden
                className={cn(
                  "absolute left-0 top-3 size-[15px] rounded-full border-2 md:left-[calc(33.333%-7.5px)]",
                  t.current ? "border-accent bg-accent" : "border-foreground bg-background",
                )}
              />
              <Reveal className="md:pr-14 md:text-right">
                <p className="timecode text-muted-foreground">Chapter {String(i + 1).padStart(2, "0")}</p>
                <p className="mt-2 text-5xl font-medium tracking-[-0.04em] md:text-7xl">{t.date}</p>
              </Reveal>
              <Reveal delay={100} className="md:col-span-2 md:pl-14">
                <p className="eyebrow pt-3 text-muted-foreground">{t.chapter}</p>
                <h3 className="display-md mt-3">{t.title}</h3>
                <div className="mt-5 max-w-xl space-y-3 leading-relaxed text-muted-foreground">
                  {t.body.map((b) => (
                    <p key={b}>{b}</p>
                  ))}
                </div>
                {t.note ? (
                  <p className="serif-statement mt-5 inline-block border-t border-border pt-3 text-lg text-muted-foreground">
                    {t.note}
                  </p>
                ) : null}
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      {/* Experience */}
      <section aria-labelledby="experience-title" className="border-t border-border bg-paper-deep">
        <div className="container-editorial py-24 md:py-36">
          <SectionHeading index="04" label="Experience" title={<span id="experience-title">Where experience meets execution.</span>} />

          <OverlapChart />

          <div className="mt-20 border-t border-foreground">
            {experience.map((e) => (
              <Reveal key={e.organisation} as="article" className="grid gap-6 border-b border-border py-10 md:grid-cols-12">
                <div className="md:col-span-4">
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl font-semibold tracking-tight">{e.organisation}</h3>
                    {e.status === "current" ? (
                      <span className="eyebrow bg-accent px-2 py-1 text-accent-foreground">Current</span>
                    ) : null}
                    {e.status === "previous" ? (
                      <span className="eyebrow border border-border px-2 py-1 text-muted-foreground">Previous venture</span>
                    ) : null}
                  </div>
                  <p className="mt-2 font-medium">{e.role}</p>
                  <p className="timecode mt-3 text-muted-foreground">
                    {e.start} – {e.end}
                  </p>
                  <p className="eyebrow mt-2 text-muted-foreground">{e.kind}</p>
                </div>
                <ul className="space-y-2.5 md:col-span-7 md:col-start-6">
                  {e.points.map((p) => (
                    <li key={p} className="flex gap-4 leading-relaxed text-muted-foreground">
                      <span aria-hidden className="mt-[0.7em] h-px w-4 shrink-0 bg-foreground/40" />
                      {p}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}

/** Shows how roles overlapped in time, so they don't read as strictly sequential. */
function OverlapChart() {
  const years = Array.from({ length: AXIS_END - AXIS_START + 1 }, (_, i) => AXIS_START + i);
  const pct = (y: number) => ((Math.min(Math.max(y, AXIS_START), AXIS_END) - AXIS_START) / (AXIS_END - AXIS_START)) * 100;
  const rows = [...experience].reverse();

  return (
    <figure className="mt-16" aria-label="Overlapping roles over time">
      <figcaption className="eyebrow mb-6 text-muted-foreground">Roles ran in parallel — not one after another</figcaption>
      <div className="overflow-x-auto">
        <div className="min-w-[640px]">
          <div className="space-y-3">
            {rows.map((e) => {
              const end = e.status === "current" ? nowAsYear() : e.span[1];
              const left = pct(e.span[0]);
              const width = pct(end) - left;
              return (
                <div key={e.organisation} className="grid grid-cols-[180px_1fr] items-center gap-4">
                  <span className="truncate text-sm font-medium">{e.organisation}</span>
                  <div className="relative h-8">
                    <div
                      className={cn(
                        "absolute inset-y-0 flex items-center px-3",
                        e.status === "current" ? "bg-accent text-accent-foreground" : "bg-ink text-ink-foreground",
                      )}
                      style={{ left: `${left}%`, width: `${width}%` }}
                    >
                      <span className="timecode truncate">
                        {e.start.split(" ")[1] ?? e.start} – {e.end === "Present" ? "Now" : e.end.split(" ").at(-1)}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-4 grid grid-cols-[180px_1fr] gap-4">
            <span />
            <div className="relative h-6 border-t border-foreground">
              {years.map((y) => (
                <span
                  key={y}
                  className={cn(
                    "timecode absolute top-2 text-muted-foreground",
                    y === AXIS_START ? "" : y === AXIS_END ? "-translate-x-full" : "-translate-x-1/2",
                  )}
                  style={{ left: `${pct(y)}%` }}
                >
                  {y}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </figure>
  );
}
