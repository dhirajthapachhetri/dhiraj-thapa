import { Link } from "@tanstack/react-router";
import { links, navItems, profile } from "@/content/site";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="container-editorial pb-10 pt-20 md:pt-28">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="eyebrow text-ink-muted">{profile.name}</p>
            <p className="serif-statement mt-6 text-4xl leading-[1.05] md:text-6xl">
              {profile.tagline}
            </p>
          </div>
          <nav aria-label="Footer" className="grid grid-cols-2 gap-10 md:col-span-5">
            <div>
              <p className="eyebrow mb-5 text-ink-muted">Navigate</p>
              <ul className="space-y-2.5">
                {navItems.map((item) => (
                  <li key={item.to}>
                    <Link to={item.to} className="link-draw text-sm">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow mb-5 text-ink-muted">Elsewhere</p>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="link-draw">
                    LinkedIn ↗
                  </a>
                </li>
                <li>
                  <a href={links.instagram} target="_blank" rel="noopener noreferrer" className="link-draw">
                    Instagram ↗
                  </a>
                </li>
                <li>
                  <a href={links.email} className="link-draw">
                    Email
                  </a>
                </li>
                <li>
                  <a href={links.cinenest} target="_blank" rel="noopener noreferrer" className="link-draw">
                    CineNest Media ↗
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="mt-20 flex flex-col justify-between gap-4 border-t border-ink-border pt-6 text-xs text-ink-muted md:flex-row">
          <p>
            © {year} {profile.name}. All rights reserved.
          </p>
          <p className="timecode">{profile.location} · Working Worldwide</p>
        </div>
      </div>
    </footer>
  );
}
