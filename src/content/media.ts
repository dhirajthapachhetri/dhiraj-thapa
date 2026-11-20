import cinenestLogo from "@/assets/cinenest-logo.png.asset.json";

/**
 * Every photo slot on the site. Set `src` to an image URL (or an imported asset's
 * `.url`) to replace a placeholder — the layout stays the same.
 * Only use authentic photographs of Dhiraj; never stock or generated portraits.
 */
export type MediaSlot = {
  src: string | null;
  alt: string;
  /** Shown inside the placeholder until a real photo is added. */
  placeholder: string;
};

export const media = {
  heroPortrait: {
    src: null,
    alt: "Portrait of Dhiraj Thapa Chhetri",
    placeholder: "Portrait — awaiting photograph",
  },
  aboutImage: {
    src: null,
    alt: "Dhiraj Thapa Chhetri at work in the editing room",
    placeholder: "In the edit suite — awaiting photograph",
  },
  behindTheScenes: {
    src: null,
    alt: "Behind the scenes with the CineNest Media team",
    placeholder: "Behind the scenes — awaiting photograph",
  },
} satisfies Record<string, MediaSlot>;

export const cinenestAssets = {
  logo: cinenestLogo.url,
  /** YouTube/Vimeo embed URL or an .mp4 file URL. Leave null to show the placeholder. */
  showreel: null as string | null,
};
