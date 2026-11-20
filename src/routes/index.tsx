import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MediaFrame } from "@/components/site/MediaFrame";
import { ProjectCard } from "@/components/site/ProjectCard";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CinenestTeaser, ContactCTA, MarketsSection, PhilosophySection } from "@/components/site/Sections";
import { VideoModal } from "@/components/site/VideoModal";
import { media } from "@/content/media";
import { projects, type Project } from "@/content/projects";
import { hero, introduction, markets, profile, timeline } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      ...pageMeta(
        "Dhiraj Thapa Chhetri — Creative Entrepreneur & Post-Production Specialist",
        "Creating stories beyond the frame. Dhiraj Thapa Chhetri is a post-production specialist and founder of CineNest Media, collaborating with clients across the USA, Canada, Australia and Portugal.",
      ),
    ],
  }),
  component: Index,
});

function Index() {
  const [active, setActive] = useState<Project | null>(null);
  const featured = projects.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="container-editorial pb-20 pt-10 md:pb-28 md:pt-16">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="flex flex-col lg:col-span-7">
            <p className="eyebrow animate-rise flex items-center gap-3 text-muted-foreground">
              <span className="inline-block h-px w-8 bg-foreground" />
              {hero.label}
            </p>
            <h1 className="display-xl animate-rise mt-10 max-w-[11ch] [animation-delay:80ms]">
              Creating stories <span className="serif-statement tracking-normal">beyond</span> the frame.
            </h1>
            <p className="lede animate-rise mt-10 max-w-xl text-muted-foreground [animation-delay:160ms]">
              {hero.copy}
            </p>
            <div className="animate-rise mt-10 flex flex-wrap gap-3 [animation-delay:240ms]">
              <Button asChild variant="ink" size="xl">
                <Link to="/journey">Explore My Journey</Link>
              </Button>
              <Button asChild variant="line" size="xl">
                <Link to="/work">View Selected Work</Link>
              </Button>
            </div>
            <div className="mt-auto grid gap-6 pt-16 sm:grid-cols-2">
              <div className="border-t border-border pt-4">
                <p className="eyebrow text-muted-foreground">Based in</p>
                <p className="mt-2 text-sm font-medium">{hero.locationLine}</p>
              </div>
              <div className="border-t border-border pt-4">
                <p className="eyebrow text-muted-foreground">Collaborating with</p>
                <p className="mt-2 text-sm font-medium">{hero.collaborationLine}</p>
              </div>
            </div>
          </div>
          <div className="relative lg:col-span-5">
            <MediaFrame
              slot={media.heroPortrait}
              priority
              timecode="00:00:19:25"
              className="aspect-[4/5] w-full animate-rise [animation-delay:200ms]"
            />
            <div className="mt-4 flex items-baseline justify-between">
              <span className="timecode text-muted-foreground">{profile.name}</span>
              <span className="timecode text-muted-foreground">Founder, CineNest Media</span>
            </div>
          </div>
        </div>
        <ul aria-label="Client markets" className="mt-16 flex flex-wrap items-center gap-x-10 gap-y-3 border-y border-border py-5">
          <li className="eyebrow text-muted-foreground">Client markets</li>
          {markets.map((m) => (
            <li key={m.code} className="flex items-baseline gap-2 text-sm font-medium">
              <span className="timecode text-muted-foreground">{m.code}</span>
              {m.country}
            </li>
          ))}
        </ul>
      </section>

      {/* Introduction */}
      <section aria-labelledby="intro-title" className="container-editorial py-20 md:py-32">
        <SectionHeading index="01" label="Introduction" size="md" title={<span id="intro-title">{profile.designation}</span>} />
        <div className="mt-14 grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-6 md:col-start-4">
            <p className="serif-statement text-3xl leading-[1.15] md:text-[2.75rem]">“{profile.positioning}”</p>
          </Reveal>
          <Reveal delay={120} className="space-y-5 text-muted-foreground md:col-span-3">
            {introduction.map((p) => (
              <p key={p} className="leading-relaxed">
                {p}
              </p>
            ))}
            <Link to="/about" className="link-draw inline-block pt-2 text-sm font-semibold text-foreground">
              More about me →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Selected work preview */}
      <section aria-labelledby="work-title" className="container-editorial py-20 md:py-32">
        <SectionHeading index="02" label="Selected Work" title={<span id="work-title">Different stories. One creative perspective.</span>} />
        <div className="mt-16 grid items-end gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <ProjectCard project={featured[0]!} index={0} onOpen={setActive} />
          </Reveal>
          <Reveal delay={100} className="md:col-span-3">
            <ProjectCard project={featured[2]!} index={2} onOpen={setActive} />
          </Reveal>
          <div className="flex md:col-span-2 md:justify-end">
            <Link to="/work" className="link-draw text-sm font-semibold">
              All work →
            </Link>
          </div>
        </div>
      </section>

      {/* Journey teaser */}
      <section aria-labelledby="journey-teaser" className="container-editorial py-20 md:py-32">
        <SectionHeading index="03" label="Journey" title={<span id="journey-teaser">Every chapter built the next.</span>} />
        <ol className="mt-16 grid border-t border-foreground sm:grid-cols-2 lg:grid-cols-5">
          {timeline.map((t, i) => (
            <Reveal as="li" key={t.chapter} delay={i * 70} className="border-b border-border py-6 sm:pr-6 lg:border-b-0 lg:border-r lg:px-5 lg:first:pl-0 lg:last:border-r-0">
              <p className={t.current ? "text-4xl font-medium tracking-tight text-foreground" : "text-4xl font-medium tracking-tight"}>
                {t.date}
                {t.current ? <span className="ml-2 inline-block size-2 translate-y-[-4px] rounded-full bg-accent" /> : null}
              </p>
              <p className="eyebrow mt-4 text-muted-foreground">{t.chapter}</p>
              <p className="mt-2 text-sm leading-relaxed">{t.title}</p>
            </Reveal>
          ))}
        </ol>
        <Link to="/journey" className="link-draw mt-10 inline-block text-sm font-semibold">
          Read the full journey →
        </Link>
      </section>

      <PhilosophySection />
      <CinenestTeaser />
      <MarketsSection />
      <ContactCTA />

      <VideoModal project={active} onClose={() => setActive(null)} />
    </>
  );
}
