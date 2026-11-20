/**
 * Portfolio projects. Add or replace entries here — the Work page lays them out
 * automatically. Set `placeholder: false` once a project is real.
 *
 * video: a YouTube/Vimeo embed URL (e.g. https://www.youtube.com/embed/ID or
 * https://player.vimeo.com/video/ID) or a direct .mp4 URL.
 */
export const categories = [
  "Real Estate",
  "Weddings",
  "Marketing & Commercial",
  "Social Media & Short-Form",
] as const;

export type Category = (typeof categories)[number];

export type Project = {
  id: string;
  title: string;
  category: Category;
  description: string;
  format: "landscape" | "portrait";
  thumbnail: string | null;
  video: string | null;
  externalUrl?: string;
  year?: string;
  placeholder: boolean;
};

export const projects: Project[] = [
  {
    id: "real-estate-01",
    title: "Property walkthrough",
    category: "Real Estate",
    description: "Slot for a cinematic real estate tour edit. Add the video link and thumbnail to publish.",
    format: "landscape",
    thumbnail: null,
    video: null,
    placeholder: true,
  },
  {
    id: "wedding-01",
    title: "Wedding film",
    category: "Weddings",
    description: "Slot for a wedding highlight film. Add the video link and thumbnail to publish.",
    format: "landscape",
    thumbnail: null,
    video: null,
    placeholder: true,
  },
  {
    id: "social-01",
    title: "Vertical reel",
    category: "Social Media & Short-Form",
    description: "Slot for a short-form vertical edit. Add the video link and thumbnail to publish.",
    format: "portrait",
    thumbnail: null,
    video: null,
    placeholder: true,
  },
  {
    id: "commercial-01",
    title: "Brand promo",
    category: "Marketing & Commercial",
    description: "Slot for a promotional or commercial edit. Add the video link and thumbnail to publish.",
    format: "landscape",
    thumbnail: null,
    video: null,
    placeholder: true,
  },
  {
    id: "real-estate-02",
    title: "Listing reel",
    category: "Real Estate",
    description: "Slot for a vertical property reel. Add the video link and thumbnail to publish.",
    format: "portrait",
    thumbnail: null,
    video: null,
    placeholder: true,
  },
  {
    id: "wedding-02",
    title: "Ceremony teaser",
    category: "Weddings",
    description: "Slot for a wedding teaser. Add the video link and thumbnail to publish.",
    format: "portrait",
    thumbnail: null,
    video: null,
    placeholder: true,
  },
  {
    id: "commercial-02",
    title: "Product film",
    category: "Marketing & Commercial",
    description: "Slot for a product or documentary-style film. Add the video link and thumbnail to publish.",
    format: "landscape",
    thumbnail: null,
    video: null,
    placeholder: true,
  },
  {
    id: "social-02",
    title: "Short-form series",
    category: "Social Media & Short-Form",
    description: "Slot for a short-form content series. Add the video link and thumbnail to publish.",
    format: "portrait",
    thumbnail: null,
    video: null,
    placeholder: true,
  },
];

export function filterProjects(list: Project[], category: Category | "All"): Project[] {
  return category === "All" ? list : list.filter((p) => p.category === category);
}
