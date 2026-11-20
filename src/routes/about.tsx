import { createFileRoute } from "@tanstack/react-router";
import { MediaFrame } from "@/components/site/MediaFrame";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ContactCTA } from "@/components/site/Sections";
import { media } from "@/content/media";
import { about, education, expertise, profile, tools, training } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: pageMeta(
      "About",
      "From visual production to video editing to founding CineNest Media — the story, expertise, education and tools of Dhiraj Thapa Chhetri.",
    ),
  }),
  component: AboutPage,
});

function AboutPage() {
  const [lead, ...rest] = about.paragraphs;
  return (
    <>
      <section className="container-editorial pb-20 pt-14 md:pb-32 md:pt-24">
        <div className="flex items-baseline gap-4 text-muted-foreground">
          <span className="timecode">01</span>
          <span className="h-px w-10 bg-foreground/30" />
          <span className="eyebrow">About</span>
        </div>
        <h1 className="display-lg animate-rise mt-8 max-w-[20ch] text-balance">
          Creativity was the beginning. <span className="serif-statement tracking-normal">Building became the journey.</span>
        </h1>

        <div className="mt-16 grid gap-12 md:mt-24 md:grid-cols-12">
          <div className="md:col-span-5">
            <MediaFrame slot={media.aboutImage} timecode="00:04:12:08" className="aspect-[3/4] w-full md:sticky md:top-28" />
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="lede font-medium text-foreground">{lead}</p>
            <div className="mt-8 space-y-6 leading-relaxed text-muted-foreground">
              {rest.map((p) =>
                p.startsWith("In August 2025") ? (
                  <p key={p} className="serif-statement border-l-2 border-accent py-1 pl-5 text-2xl text-foreground md:text-3xl">
                    {p}
                  </p>
                ) : (
                  <p key={p}>{p}</p>
                ),
              )}
            </div>
            <dl className="mt-12 grid grid-cols-2 gap-6 border-t border-foreground pt-6">
              <div>
                <dt className="eyebrow text-muted-foreground">Based in</dt>
                <dd className="mt-2 text-sm font-medium">{profile.location}</dd>
              </div>
              <div>
                <dt className="eyebrow text-muted-foreground">Languages</dt>
                <dd className="mt-2 text-sm font-medium">{profile.languages.join(" · ")}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section aria-labelledby="expertise-title" className="border-t border-border bg-paper-deep">
        <div className="container-editorial py-24 md:py-36">
          <SectionHeading index="02" label="Expertise" title={<span id="expertise-title">Different disciplines. One creative perspective.</span>} />
          <div className="mt-16 grid gap-px bg-border md:grid-cols-3">
            {expertise.map((group, gi) => (
              <Reveal key={group.title} delay={gi * 100} className="bg-paper-deep p-0 md:p-8 md:first:pl-0">
                <div className="flex items-baseline justify-between border-b border-foreground pb-3 pt-6 md:pt-0">
                  <h3 className="text-lg font-semibold tracking-tight">{group.title}</h3>
                  <span className="timecode text-muted-foreground">0{gi + 1}</span>
                </div>
                <ul className="mt-2">
                  {group.items.map((item) => (
                    <li key={item} className="border-b border-border py-3 text-[0.9375rem] transition-[padding] duration-300 hover:pl-2">
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section aria-labelledby="tools-title" className="container-editorial py-24 md:py-36">
        <SectionHeading index="03" label="Tools & Technology" size="md" title={<span id="tools-title">The toolkit behind the work.</span>} />
        <dl className="mt-16 border-t border-foreground">
          {tools.map((t) => (
            <Reveal key={t.group} className="grid gap-2 border-b border-border py-6 md:grid-cols-12 md:gap-6">
              <dt className="eyebrow pt-1.5 text-muted-foreground md:col-span-3">{t.group}</dt>
              <dd className="text-xl font-medium tracking-tight md:col-span-9 md:text-2xl">
                {t.items.map((item, i) => (
                  <span key={item}>
                    {item}
                    {i < t.items.length - 1 ? <span className="mx-3 text-muted-foreground/50">/</span> : null}
                  </span>
                ))}
              </dd>
            </Reveal>
          ))}
        </dl>
      </section>

      {/* Education */}
      <section aria-labelledby="education-title" className="container-editorial pb-12 md:pb-20">
        <SectionHeading index="04" label="Education" size="md" title={<span id="education-title">Technology first, then storytelling.</span>} />
        <div className="mt-16 grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6 md:col-start-4">
            <p className="eyebrow mb-4 text-muted-foreground">Formal education</p>
            <ul className="border-t border-foreground">
              {education.map((e) => (
                <li key={e.title} className="grid grid-cols-[1fr_auto] gap-4 border-b border-border py-5">
                  <div>
                    <p className="font-semibold tracking-tight">{e.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{e.place}</p>
                  </div>
                  <span className="timecode text-muted-foreground">{e.date}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-3">
            <p className="eyebrow mb-4 text-muted-foreground">Professional training</p>
            <ul className="border-t border-foreground">
              {training.map((t) => (
                <li key={t.title} className="border-b border-border py-5">
                  <p className="font-semibold tracking-tight">{t.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{t.place}</p>
                  <p className="timecode mt-2 text-muted-foreground">{t.date}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
