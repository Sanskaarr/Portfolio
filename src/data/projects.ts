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
    name: "Prekies WMS & PO System",
    year: "2026",
    number: "01",
    description:
      "Custom warehouse management system (WMS) and procurement engine on Next.js and Supabase. Handles sellable vs. quarantine stock, PO reservations, scan-based dispatch, B2C returns, multi-invoice B2B GRN reconciliation, and Shipmozo CSV logistics mapping.",
    tags: ["Next.js", "Supabase", "PostgreSQL", "WMS & Logistics"],
    tone: "#b9c7d4",
    liveUrl: "https://prekies.vercel.app",
    codeUrl: "https://github.com/Sanskaarr/Prekies-PO-Staging",
    image: "/projects/prekies-pos.png",
    imageWidth: 2940,
    imageHeight: 1912,
    highlights: [
      "In-house inventory engine: sellable vs. quarantine segregation, atomic PO reservations, scan-based dispatch, and B2C return flows",
      "Manual internal PO raising with multi-invoice Goods Received Note (GRN) reconciliation against B2B invoices",
      "3-database architecture (WMS, Expense Tracker, Todo/EOD) sharing a central auth service, with Shipmozo CSV reference mapping",
    ],
  },
  {
    name: "Littlefeetngo.com",
    year: "NGO Project",
    number: "02",
    description:
      "Designed and built littlefeetngo.com for an NGO teaching children ages 3–10, from information architecture to deployment, featuring curriculum discovery and automated donation receipt generation.",
    tags: ["Next.js", "Supabase", "jsPDF", "NGO Platform"],
    tone: "#d6dfcb",
    liveUrl: "https://littlefeetngo.com",
    codeUrl: "https://github.com/Sanskaarr/Little-Feets",
    image: "/projects/littlefeetngo.jpg",
    imageWidth: 1600,
    imageHeight: 1050,
    highlights: [
      "Designed and built littlefeetngo.com end-to-end, from planning to deployment",
      "Interactive program showcases and curriculum structures for children ages 3–10",
      "Automated donation system with instant PDF receipt generation via jsPDF",
    ],
  },
  {
    name: "Prekies Babycare",
    year: "2026",
    number: "03",
    description:
      "Company website designed and built from scratch as Website Lead & Software Developer — planning, UI/UX structure and deployment, with product showcasing and performance tuned throughout.",
    tags: ["Web Design", "UI/UX", "Shopify", "Performance"],
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
    year: "AI Project",
    number: "04",
    description:
      "AI travel assistant that generates curated, personalized itineraries by integrating LLM APIs for destination and activity recommendations, with end-to-end recommendation and routing logic.",
    tags: ["AI / LLMs", "Next.js", "Prompt Engineering", "Travel Tech"],
    tone: "#d9b8a4",
    liveUrl: "https://tripwise-prototype.vercel.app/",
    image: "/projects/tripwise.jpg",
    imageWidth: 1600,
    imageHeight: 1040,
    highlights: [
      "Designed and launched an AI travel assistant integrating LLM APIs",
      "Built recommendation and routing logic end-to-end from free-form trip goals",
      "Curated, actionable itineraries with smart destination and activity ranking",
    ],
  },
  {
    name: "Karwaanfilms.com",
    year: "2023",
    number: "05",
    description:
      "A platform curating human-centric documentaries, photography and film. Led a team end-to-end — architecture, development, testing and launch of a scalable, high-performance product.",
    tags: ["Next.js", "MongoDB", "Node.js", "Project Lead"],
    tone: "#d7c9a8",
    liveUrl: "https://karwaanfilms.com",
    codeUrl: "https://github.com/Sanskaarr/karwaan-frontend",
    image: "/projects/karwaan.jpg",
    imageWidth: 2940,
    imageHeight: 1912,
    highlights: [
      "Led a talented team through development, testing and validation to launch",
      "Next.js frontend backed by a high-throughput MongoDB data layer",
      "Shipped a scalable, high-performance platform with an intuitive UX",
    ],
  },
  {
    name: "Smart Health Band",
    year: "IoT Project",
    number: "06",
    description:
      "Wearable prototype built for under ₹3,000 that monitors heart rate, temperature and motion — making basic health tracking affordable for users of all ages in India.",
    tags: ["IoT Sensors", "Python", "SQL", "Hardware"],
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
