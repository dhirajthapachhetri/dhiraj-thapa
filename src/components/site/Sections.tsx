import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { cinenestAssets } from "@/content/media";
import { cinenest, links, markets, philosophy, contact, profile } from "@/content/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

/** Oversized editorial pause. */
export function PhilosophySection() {
  const [first, second] = philosophy.statement.split(". ");
  return (
    <section aria-label="Philosophy" className="border-y border-border bg-paper-deep">
      <div className="container-editorial py-24 md:py-40">
        <p className="eyebrow text-muted-foreground">Philosophy</p>
        <Reveal>
          <blockquote className="mt-10">
            <p className="serif-statement text-[clamp(2.5rem,7vw,7rem)] leading-[0.98] text-balance">
              {first}.
              <br />
              <span className="mark-lime">{second}</span>
            </p>
          </blockquote>
        </Reveal>
        <Reveal delay={120} className="mt-12 md:ml-[41.66%] md:max-w-xl">
          <p className="lede text-muted-foreground">{philosophy.support}</p>
        </Reveal>
      </div>
    </section>
  );
}

/** Four markets set as typography with timezones. */
export function MarketsSection({ index = "06" }: { index?: string }) {
  return (
    <section aria-labelledby="markets-title" className="container-editorial py-24 md:py-36">
      <SectionHeading index={index} label="International" title={<span id="markets-title">Local roots. Global collaboration.</span>} />
      <div className="mt-12 grid gap-10 md:grid-cols-12">
        <p className="lede text-muted-foreground md:col-span-5 md:col-start-4">
          Based in Nepal, collaborating with creative professionals and businesses across different
          markets.
        </p>
      </div>
      <ul className="mt-16 border-t border-foreground">
        <li className="grid grid-cols-12 items-baseline gap-4 border-b border-border py-6">
          <span className="timecode col-span-3 text-muted-foreground md:col-span-2">NPL</span>
          <span className="col-span-9 text-2xl font-medium tracking-tight md:col-span-6 md:text-4xl">
            Nepal <span className="serif-statement text-muted-foreground">— home base</span>
          </span>
          <span className="timecode hidden text-muted-foreground md:col-span-4 md:block md:text-right">UTC +5:45</span>
        </li>
        {markets.map((m, i) => (
          <Reveal as="li" key={m.code} delay={i * 70} className="group grid grid-cols-12 items-baseline gap-4 border-b border-border py-6">
            <span className="timecode col-span-3 text-muted-foreground md:col-span-2">{m.code}</span>
            <span className="col-span-9 text-2xl font-medium tracking-tight transition-transform duration-500 group-hover:translate-x-2 md:col-span-6 md:text-4xl">
              {m.country}
            </span>
            <span className="timecode hidden text-muted-foreground md:col-span-4 md:block md:text-right">{m.tz}</span>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

/** Dark founder-story teaser used on Home. */
export function CinenestTeaser() {
  return (
    <section aria-labelledby="cinenest-teaser" className="bg-ink text-ink-foreground">
      <div className="container-editorial py-24 md:py-36">
        <SectionHeading tone="ink" index="05" label="CineNest Media" title={<span id="cinenest-teaser">{cinenest.heading}</span>} />
        <div className="mt-16 grid gap-12 md:grid-cols-12">
          <div className="flex items-start gap-5 md:col-span-3">
            <img src={cinenestAssets.logo} alt="CineNest Media logo" width={72} height={72} loading="lazy" className="size-16 md:size-20" />
          </div>
          <div className="md:col-span-5">
            <p className="serif-statement text-3xl leading-tight md:text-4xl">{cinenest.subheading}</p>
            <p className="mt-6 leading-relaxed text-ink-muted">{cinenest.paragraphs[0]}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild variant="lime" size="xl">
                <Link to="/cinenest">Read the founder story</Link>
              </Button>
              <Button asChild variant="line-inverse" size="xl">
                <a href={links.cinenest} target="_blank" rel="noopener noreferrer">
                  Explore CineNest Media ↗
                </a>
              </Button>
            </div>
          </div>
          <dl className="grid grid-cols-3 gap-6 md:col-span-4 md:grid-cols-1 md:gap-0">
            {cinenest.facts.map((f) => (
              <div key={f.label} className="border-t border-ink-border py-5">
                <dt className="eyebrow text-ink-muted">{f.label}</dt>
                <dd className="mt-2 text-4xl font-medium tracking-tight md:text-5xl">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

/** Closing invitation used at the bottom of pages. */
export function ContactCTA() {
  return (
    <section aria-labelledby="cta-title" className="container-editorial py-24 md:py-36">
      <div className="grid gap-10 border-t border-foreground pt-10 md:grid-cols-12">
        <p className="eyebrow text-muted-foreground md:col-span-3">Get in touch</p>
        <div className="md:col-span-9">
          <h2 id="cta-title" className="display-xl max-w-[12ch] text-balance">
            {contact.heading}
          </h2>
          <div className="mt-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <a href={links.email} className="link-draw text-xl font-medium tracking-tight md:text-3xl">
              {profile.email}
            </a>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="ink" size="xl">
                <Link to="/contact">Let's Connect →</Link>
              </Button>
              <Button asChild variant="line" size="xl">
                <a href={links.instagram} target="_blank" rel="noopener noreferrer">
                  Instagram ↗
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
