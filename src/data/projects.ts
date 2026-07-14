export type Project = {
  name: string;
  year: string;
  number: string;
  description: string;
  tags: string[];
  tone: string;
  highlights: string[];
  /** Screenshot shown on the card and in the case study. Drop the file in
      `public/projects/` and reference it as "/projects/<file>". Until set,
      the card falls back to the `tone` color field. */
  image?: string;
  /** Intrinsic pixel size of `image`, required by next/image for aspect-ratio math. */
  imageWidth?: number;
  imageHeight?: number;
  /** Deployed product — renders the "Live project →" button in the case study. */
  liveUrl?: string;
  /** Demo video or walkthrough — renders the "Watch demo" button in the case study. */
  demoUrl?: string;
  /** Public GitHub repo — renders the "View code" button in the case study. */
  codeUrl?: string;
};

export const PROJECTS: Project[] = [
  {
    name: "Prekies Babycare",
    year: "2026",
    number: "01",
    description:
      "Company website designed and built from scratch as Website & Technical Head — planning, UI/UX structure and deployment, with product showcasing and performance tuned throughout.",
    tags: ["Web Design", "UI/UX", "Performance"],
    tone: "#c7cdb8",
    liveUrl: "https://prekies.com",
    image: "/projects/prekies.jpg",
    imageWidth: 1600,
    imageHeight: 911,
    highlights: [
      "Designed and developed end-to-end, from planning to deployment",
      "Product showcasing with streamlined, optimized navigation",
      "Responsive, user-friendly interface with performance improvements",
    ],
  },
  {
    name: "Tripwise",
    year: "College Project",
    number: "02",
    description:
      "AI-powered travel planning platform that turns a trip brief into curated itineraries, with smart recommendations for destinations, activities and routes.",
    tags: ["AI", "Travel", "Web Platform"],
    tone: "#d9b8a4",
    liveUrl: "https://tripwise-prototype.vercel.app/",
    image: "/projects/tripwise.jpg",
    imageWidth: 1600,
    imageHeight: 1040,
    // codeUrl: repo is private — set once it's public or has a shareable URL
    highlights: [
      "Curated itineraries generated from a single trip brief",
      "Smart recommendations for destinations, activities and routes",
      "Designed and launched end-to-end",
    ],
  },
  {
    name: "Karwaanfilms.com",
    year: "2023",
    number: "03",
    description:
      "A platform curating human-centric documentaries, photography and film. Led a team end-to-end — architecture, development, testing and launch of a scalable, high-performance product.",
    tags: ["Next.js", "MongoDB", "Node.js"],
    tone: "#d7c9a8",
    liveUrl: "https://karwaanfilms.com",
    codeUrl: "https://github.com/Sanskaarr/karwaan-frontend",
    image: "/projects/karwaan.jpg",
    imageWidth: 2940,
    imageHeight: 1912,
    highlights: [
      "Led a team through development, testing and validation to launch",
      "Next.js frontend backed by a MongoDB data layer",
      "Shipped a scalable, high-performance platform with an intuitive UX",
    ],
  },
  {
    name: "Smart Health Band",
    year: "College Project",
    number: "04",
    description:
      "Wearable prototype built for under ₹3,000 that monitors heart rate, temperature and motion — making basic health tracking affordable for users of all ages in India.",
    tags: ["IoT Sensors", "Python", "SQL"],
    tone: "#c9b8c9",
    image: "/projects/peak.jpg",
    imageWidth: 2940,
    imageHeight: 1912,
    highlights: [
      "Complete working prototype built for under ₹3,000",
      "Monitors heart rate, temperature and motion via IoT sensors",
      "Sensor data collected and analysed for trends with Python and SQL",
    ],
  },
];
