import { createFileRoute } from "@tanstack/react-router";
import { ContactForm } from "@/components/site/ContactForm";
import { contact, links, profile } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: pageMeta(
      "Contact",
      "Let's build something meaningful. Get in touch with Dhiraj Thapa Chhetri for creative collaborations, business opportunities or a good conversation.",
    ),
  }),
  component: ContactPage,
});

const details = [
  { label: "Email", value: profile.email, href: links.email },
  { label: "Phone", value: profile.phone, href: profile.phoneHref },
  { label: "Location", value: profile.location },
  { label: "LinkedIn", value: "in/dhirajthapachhetri", href: links.linkedin, external: true },
  { label: "Instagram", value: "@dhirajthapachettri", href: links.instagram, external: true },
  { label: "CineNest Media", value: "cinenestmedia.com", href: links.cinenest, external: true },
];

function ContactPage() {
  return (
    <section className="container-editorial pb-24 pt-14 md:pb-36 md:pt-24">
      <div className="flex items-baseline gap-4 text-muted-foreground">
        <span className="timecode">07</span>
        <span className="h-px w-10 bg-foreground/30" />
        <span className="eyebrow">Contact</span>
      </div>
      <h1 className="display-xl animate-rise mt-8 max-w-[12ch] text-balance">
        Let's build something <span className="serif-statement tracking-normal">meaningful.</span>
      </h1>

      <div className="mt-16 grid gap-16 md:mt-24 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="space-y-5 leading-relaxed text-muted-foreground">
            {contact.paragraphs.map((p) => (
              <p key={p} className="lede">
                {p}
              </p>
            ))}
          </div>
          <dl className="mt-12 border-t border-foreground">
            {details.map((d) => (
              <div key={d.label} className="grid grid-cols-[120px_1fr] gap-4 border-b border-border py-4">
                <dt className="eyebrow pt-1 text-muted-foreground">{d.label}</dt>
                <dd className="font-medium">
                  {d.href ? (
                    <a
                      href={d.href}
                      className="link-draw"
                      {...(d.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      {d.value}
                      {d.external ? " ↗" : ""}
                    </a>
                  ) : (
                    d.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <h2 className="eyebrow mb-8 text-muted-foreground">Write to me</h2>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
