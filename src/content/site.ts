/**
 * Central content for the whole site. Edit text, links and career data here —
 * pages read from this file, so no layout changes are needed when facts change.
 */

export const profile = {
  name: "Dhiraj Thapa Chhetri",
  firstName: "Dhiraj",
  designation: "Creative Entrepreneur & Post-Production Specialist",
  secondaryDesignations: [
    "Founder of CineNest Media",
    "Video Editor",
    "Visual Storyteller",
    "Creative Team Leader",
  ],
  positioning:
    "I build creative teams, develop post-production workflows, and transform raw footage into meaningful visual stories.",
  location: "Lalitpur, Nepal",
  email: "dhirajthapa.mail@gmail.com",
  phone: "+977 9849668301",
  phoneHref: "tel:+9779849668301",
  languages: ["Nepali", "English", "Hindi"],
  tagline: "Creative mind. Entrepreneurial spirit. Always building.",
} as const;

export const links = {
  linkedin: "https://www.linkedin.com/in/dhirajthapachhetri/",
  instagram: "https://www.instagram.com/dhirajthapachettri/",
  cinenest: "https://cinenestmedia.com",
  email: `mailto:${profile.email}`,
} as const;

export const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/journey", label: "Journey" },
  { to: "/work", label: "Work" },
  { to: "/cinenest", label: "CineNest" },
  { to: "/contact", label: "Contact" },
] as const;

export const markets = [
  { country: "United States", code: "USA", tz: "UTC −5 to −8" },
  { country: "Canada", code: "CAN", tz: "UTC −3.5 to −8" },
  { country: "Australia", code: "AUS", tz: "UTC +8 to +11" },
  { country: "Portugal", code: "PRT", tz: "UTC +0" },
] as const;

export const hero = {
  label: "Creative Entrepreneur · Post-Production Specialist",
  heading: "Creating stories beyond the frame.",
  copy: "From shaping stories in the editing room to building a creative business, my journey is driven by creativity, technology, and the ambition to build something meaningful.",
  locationLine: "Lalitpur, Nepal · Working Worldwide",
  collaborationLine: "Collaborating with clients across the USA, Canada, Australia & Portugal.",
} as const;

export const introduction = [
  "I'm Dhiraj Thapa Chhetri, a creative entrepreneur and post-production specialist based in Nepal.",
  "My journey began in visual production, evolved through professional video editing, and eventually led me to build CineNest Media — a post-production agency working with international clients.",
  "Today, I combine creative storytelling, technical expertise, and business thinking to deliver meaningful visual experiences and build efficient creative operations.",
] as const;

export const about = {
  heading: "Creativity was the beginning. Building became the journey.",
  paragraphs: [
    "I'm a creative entrepreneur and post-production specialist based in Lalitpur, Nepal.",
    "I began my professional journey in visual production, learning the fundamentals of photography, videography, composition, and storytelling.",
    "Over time, I became increasingly interested in what happens after the camera stops recording — the process of shaping footage, building narratives, refining colors, and creating visual experiences through editing.",
    "That interest developed into a professional editing career, collaborations with international clients, and eventually the decision to build my own post-production agency.",
    "In August 2025, I founded CineNest Media.",
    "Today, I lead a six-person creative team, working with clients from different parts of the world.",
    "Beyond creative work, I'm interested in entrepreneurship, technology, business development, team leadership, and building systems that allow creative people to do their best work.",
  ],
} as const;

export type TimelineEntry = {
  date: string;
  chapter: string;
  title: string;
  body: string[];
  list?: string[];
  note?: string;
  current?: boolean;
};

export const timeline: TimelineEntry[] = [
  {
    date: "2019",
    chapter: "The Beginning",
    title: "Portal Bikes Pvt. Ltd.",
    body: [
      "Entered the creative industry as a Creative Media Professional.",
      "Worked on photography, videography, product content, promotional videos, and documentary-style storytelling.",
      "Developed an understanding of visual production, marketing, and brand communication.",
    ],
  },
  {
    date: "2023",
    chapter: "Independent Creative Work",
    title: "Freelance Video Editor",
    body: [
      "Started working independently as a freelance video editor.",
      "Developed expertise in wedding films, real estate videos, promotional content, and international post-production projects.",
    ],
  },
  {
    date: "2023",
    chapter: "Glamour Clicks Studio",
    title: "Founded Glamour Clicks Studio",
    body: [
      "Managed a creative production studio specializing in wedding films and promotional content.",
      "Led a small team of editors and videographers and managed creative production.",
    ],
    note: "An earlier business venture, no longer operating.",
  },
  {
    date: "Aug 2025",
    chapter: "CineNest Media",
    title: "Founded CineNest Media",
    body: [
      "Transitioned towards building a dedicated post-production agency focused on professional video editing and creative collaboration.",
    ],
  },
  {
    date: "Present",
    chapter: "Building and Leading",
    title: "Leading a six-person creative team",
    body: [
      "Managing international client relationships across the United States, Canada, Australia and Portugal.",
      "Focused on creative direction, post-production quality, client relationships, workflow development, and business growth.",
    ],
    current: true,
  },
];

export type ExperienceEntry = {
  organisation: string;
  role: string;
  start: string;
  end: string;
  /** Used to draw the overlap chart: fractional years. */
  span: [number, number];
  kind: string;
  status?: "current" | "previous";
  points: string[];
};

export const experience: ExperienceEntry[] = [
  {
    organisation: "CineNest Media",
    role: "Founder",
    start: "August 2025",
    end: "Present",
    span: [2025.58, 2026.9],
    kind: "Own agency",
    status: "current",
    points: [
      "Founded a dedicated post-production agency.",
      "Built and lead a six-person creative team.",
      "Manage international client relationships.",
      "Oversee creative direction and quality control.",
      "Develop production workflows and operational systems.",
      "Manage project delivery and business development.",
    ],
  },
  {
    organisation: "Freelance Video Editor",
    role: "Self-employed",
    start: "September 2023",
    end: "August 2025",
    span: [2023.67, 2025.58],
    kind: "Independent, alongside other roles",
    points: [
      "Edited wedding films, real estate tours, and promotional content.",
      "Worked with international clients.",
      "Collaborated with wedding studios and creative professionals.",
      "Adapted editing approaches to different client requirements.",
    ],
  },
  {
    organisation: "Glamour Clicks Studio",
    role: "Founder & Senior Editor",
    start: "April 2023",
    end: "Late 2025",
    span: [2023.25, 2025.95],
    kind: "Previous venture",
    status: "previous",
    points: [
      "Founded and managed a creative production studio.",
      "Specialized in wedding and promotional videos.",
      "Led a small team of editors and videographers.",
      "Oversaw production, post-production, and delivery.",
      "Managed client relationships and creative direction.",
    ],
  },
  {
    organisation: "Portal Bikes Pvt. Ltd.",
    role: "Creative Media Professional",
    start: "September 2019",
    end: "December 2024",
    span: [2019.67, 2024.95],
    kind: "Employment",
    points: [
      "Planned, shot, and edited photography and videos.",
      "Created promotional content for bikes, shelters, and prefab structures.",
      "Collaborated with marketing and design teams.",
      "Produced product videos and documentary-style content.",
      "Edited visual material to align with brand identity and marketing objectives.",
    ],
  },
];

export const education = [
  {
    title: "Bachelor of Science in Computer Science and Information Technology",
    short: "BSc CSIT",
    place: "Vedas College",
    date: "2023",
  },
  {
    title: "Higher Secondary Education",
    place: "Moonlight Secondary School",
    date: "2019",
  },
] as const;

export const training = [
  { title: "Graphic Designing", place: "Animax Animation Academy", date: "Oct 2018 – Jan 2019" },
  { title: "Web Designing and Hosting", place: "Aptech Computer Education", date: "Apr 2016 – Aug 2016" },
] as const;

export const expertise = [
  {
    title: "Creative & Post-Production",
    items: [
      "Professional Video Editing",
      "Cinematic Storytelling",
      "Narrative Structure",
      "Color Grading",
      "Visual Effects",
      "Motion Graphics",
      "Sound Design",
      "Creative Direction",
      "Short-Form Content Editing",
      "Long-Form Content Editing",
    ],
  },
  {
    title: "Production Knowledge",
    items: [
      "Cinematography",
      "Photography",
      "Camera Operations",
      "Drone Footage",
      "Lighting and Composition",
      "Visual Content Strategy",
    ],
  },
  {
    title: "Business & Leadership",
    items: [
      "Creative Team Management",
      "Project Management",
      "Client Relationship Management",
      "Production Workflow Development",
      "Quality Control",
      "Business Development",
      "Digital Marketing",
      "Creative Operations",
    ],
  },
] as const;

export const tools = [
  { group: "Video Editing", items: ["Adobe Premiere Pro", "Final Cut Pro", "DaVinci Resolve"] },
  { group: "Motion Graphics & VFX", items: ["Adobe After Effects", "Blender (Basic)"] },
  { group: "Photography & Design", items: ["Adobe Photoshop", "Adobe Lightroom", "Canva"] },
  { group: "Audio", items: ["Adobe Audition"] },
  { group: "Web", items: ["WordPress"] },
  { group: "Production Equipment", items: ["DSLR and mirrorless cameras", "Drones", "Gimbals"] },
] as const;

export const cinenest = {
  heading: "From working independently to building a team.",
  subheading: "Building something beyond myself.",
  paragraphs: [
    "In August 2025, I founded CineNest Media with a clear direction: to build a reliable post-production partner for filmmakers, creative agencies, real estate professionals, and content creators.",
    "What began as an individual creative journey has developed into a collaborative team of six people.",
    "Today, I focus on leading creative operations, managing international relationships, maintaining editing standards, developing workflows, and building a business that allows creative professionals to work together effectively.",
    "CineNest Media represents the next chapter of my journey — moving beyond individual creative execution towards building a sustainable creative operation.",
  ],
  facts: [
    { value: "6", label: "People on the team" },
    { value: "2025", label: "Founded in August" },
    { value: "4", label: "International client markets" },
  ],
} as const;

export const philosophy = {
  statement: "Filming captures the moment. Editing shapes the meaning.",
  support:
    "I believe great visual storytelling goes beyond beautiful images. It's about understanding what matters, knowing what to emphasize, and creating an experience that stays with the viewer.",
} as const;

export const contact = {
  heading: "Let's build something meaningful.",
  paragraphs: [
    "I'm always interested in connecting with creative professionals, entrepreneurs, filmmakers, and people building something meaningful.",
    "Whether it's a creative collaboration, business opportunity, or simply an interesting conversation, I'd love to hear from you.",
  ],
} as const;

/**
 * Testimonials appear only when this list has entries. Add real, attributable
 * quotes only — never placeholders.
 */
export const testimonials: { quote: string; name: string; role: string }[] = [];
