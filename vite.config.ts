// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// Never set ssr.external or resolve.external: the Worker has no runtime module resolution, so
// the build fails. Never add compression (compressPublicAssets, vite-plugin-compression):
// hosting already compresses at the edge.
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // Static export for GitHub Pages: every page is rendered to <route>/index.html at build
    // time. All pages are identical for every visitor (no auth, cookies or per-user data).
    // `pages` lists every route explicitly; crawlLinks also follows links from them.
    // Inside Lovable's own build, crawlLinks is pinned to false (the explicit list still covers
    // every page), so the Lovable preview and publish keep working.
    pages: [
      { path: "/" },
      { path: "/about" },
      { path: "/journey" },
      { path: "/work" },
      { path: "/cinenest" },
      { path: "/contact" },
    ],
    prerender: {
      enabled: true,
      crawlLinks: true,
      // Crawling also finds links to static files (e.g. the CV PDF in public/). Those are copied
      // as-is, not rendered, so only prerender paths without a file extension.
      filter: ({ path }: { path: string }) => !/\.[a-z0-9]+$/i.test(path),
    },
  },
});
