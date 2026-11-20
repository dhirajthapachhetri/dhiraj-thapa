const SITE = "Dhiraj Thapa Chhetri";

/** Builds the per-page meta tags (title, description, Open Graph, Twitter). */
export function pageMeta(title: string, description: string) {
  const full = title.startsWith(SITE) ? title : `${title} — ${SITE}`;
  return [
    { title: full },
    { name: "description", content: description },
    { property: "og:title", content: full },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: full },
    { name: "twitter:description", content: description },
  ];
}
