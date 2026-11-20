import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { navItems, profile } from "@/content/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b transition-colors duration-300",
        scrolled || open ? "border-border bg-background" : "border-transparent bg-background",
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:bg-ink focus:px-4 focus:py-2 focus:text-ink-foreground"
      >
        Skip to content
      </a>
      <div className="container-editorial flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="group flex items-baseline gap-2" aria-label={`${profile.name} — home`}>
          <span className="text-[0.95rem] font-semibold tracking-tight">{profile.name}</span>
          <span className="inline-block size-1.5 translate-y-[-1px] bg-accent transition-transform group-hover:scale-150" />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-7">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="link-draw pb-0.5 text-[0.8125rem] font-medium text-muted-foreground transition-colors hover:text-foreground"
                  activeProps={{ className: "text-foreground!" }}
                  activeOptions={{ exact: true }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 border border-foreground px-4 py-2 text-[0.8125rem] font-semibold transition-colors hover:bg-foreground hover:text-background"
          >
            Let's Connect
            <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
          </Link>
        </nav>

        <button
          type="button"
          className="relative flex h-10 w-10 items-center justify-center lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={cn(
              "absolute h-px w-6 bg-foreground transition-transform duration-300",
              open ? "rotate-45" : "-translate-y-1",
            )}
          />
          <span
            className={cn(
              "absolute h-px w-6 bg-foreground transition-transform duration-300",
              open ? "-rotate-45" : "translate-y-1",
            )}
          />
        </button>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto bg-background lg:hidden"
      >
        <nav aria-label="Mobile" className="container-editorial flex min-h-full flex-col py-8">
          <ul className="border-t border-border">
            {navItems.map((item, i) => (
              <li key={item.to} className="border-b border-border">
                <Link
                  to={item.to}
                  className="flex items-baseline justify-between py-5"
                  activeOptions={{ exact: true }}
                  activeProps={{ className: "text-foreground" }}
                >
                  <span className="display-md">{item.label}</span>
                  <span className="timecode text-muted-foreground">0{i + 1}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-auto flex flex-col gap-3 pt-10">
            <Link
              to="/contact"
              className="inline-flex h-14 items-center justify-center bg-ink text-sm font-semibold text-ink-foreground"
            >
              Let's Connect →
            </Link>
            <p className="timecode text-center text-muted-foreground">{profile.location}</p>
          </div>
        </nav>
      </div>
    </header>
  );
}
