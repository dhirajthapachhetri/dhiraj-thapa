import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { MediaFrame } from "@/components/site/MediaFrame";
import { Reveal } from "@/components/site/Reveal";
import { ContactCTA, MarketsSection } from "@/components/site/Sections";
import { cinenestAssets, media } from "@/content/media";
import { cinenest, links } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/cinenest")({
  head: () => ({
    meta: pageMeta(
      "CineNest Media — Founder Story",
      "In August 2025 Dhiraj Thapa Chhetri founded CineNest Media, a post-production agency with a six-person team serving clients in the USA, Canada, Australia and Portugal.",
    ),
  }),
  component: CinenestPage,
});

function CinenestPage() {
  const [first, ...rest] = cinenest.paragraphs;
  return (
    <>
      <section className="bg-ink text-ink-foreground">
        <div className="container-editorial pb-20 pt-14 md:pb-32 md:pt-24">
          <div className="flex items-center justify-between">
            <div className="flex items-baseline gap-4 text-ink-muted">
              <span className="timecode">05</span>
              <span className="h-px w-10 bg-ink-foreground/30" />
              <span className="eyebrow">CineNest Media · Founder story</span>
            </div>
            <img src={cinenestAssets.logo} alt="CineNest Media logo" width={64} height={64} className="size-12 md:size-16" />
          </div>
          <h1 className="display-xl animate-rise mt-10 max-w-[14ch] text-balance">
            From working independently to <span className="serif-statement tracking-normal text-accent">building a team.</span>
          </h1>
          <dl className="mt-20 grid grid-cols-1 gap-px bg-ink-border sm:grid-cols-3">
            {cinenest.facts.map((f, i) => (
              <Reveal key={f.label} delay={i * 90} className="bg-ink pt-6 sm:pr-6">
                <dt className="eyebrow text-ink-muted">{f.label}</dt>
                <dd className="mt-3 text-6xl font-medium tracking-[-0.04em] md:text-8xl">{f.value}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      <section aria-labelledby="story-title" className="container-editorial py-24 md:py-36">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <h2 id="story-title" className="serif-statement text-4xl leading-[1.05] md:sticky md:top-28 md:text-5xl">
              {cinenest.subheading}
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <p className="lede font-medium">{first}</p>
            <div className="mt-8 space-y-6 leading-relaxed text-muted-foreground">
              {rest.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <div className="mt-12 flex flex-wrap gap-3">
              <Button asChild variant="ink" size="xl">
                <a href={links.cinenest} target="_blank" rel="noopener noreferrer">
                  Explore CineNest Media ↗
                </a>
              </Button>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              This is Dhiraj's personal website. For agency services, visit cinenestmedia.com.
            </p>
          </div>
        </div>
      </section>

      <section aria-label="Showreel and behind the scenes" className="container-editorial pb-24 md:pb-36">
        <div className="grid gap-8 md:grid-cols-12">
          <figure className="md:col-span-8">
            {cinenestAssets.showreel ? (
              <div className="aspect-video w-full bg-ink">
                <iframe
                  src={cinenestAssets.showreel}
                  title="CineNest Media showreel"
                  loading="lazy"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full border-0"
                />
              </div>
            ) : (
              <MediaFrame
                tone="ink"
                timecode="SHOWREEL · 00:00:00:00"
                slot={{ src: null, alt: "CineNest Media showreel", placeholder: "CineNest showreel — coming soon" }}
                className="aspect-video w-full"
              />
            )}
            <figcaption className="eyebrow mt-3 text-muted-foreground">CineNest Media showreel</figcaption>
          </figure>
          <figure className="md:col-span-4 md:mt-24">
            <MediaFrame slot={media.behindTheScenes} timecode="BTS · 00:12:40:02" className="aspect-[4/5] w-full" />
            <figcaption className="eyebrow mt-3 text-muted-foreground">Behind the scenes</figcaption>
          </figure>
        </div>
      </section>

      <MarketsSection index="06" />
      <ContactCTA />
    </>
  );
}
