export type Metric = {
  value: string;
  suffix?: string;
  label: string;
  numeric?: number;
};

export const METRICS: Metric[] = [
  { value: "70", suffix: "+", numeric: 70, label: "Agents operating simultaneously" },
  { value: "1,500", suffix: "+", numeric: 1500, label: "Users supported simultaneously" },
  { value: "360", suffix: "°", numeric: 360, label: "Integrated ecosystem" },
  { value: "National", label: "Departmental & national scalability" },
];

export type Solution = {
  id: string;
  index: string;
  category: string;
  title: string;
  positioning: string;
  services: string[];
};

export const SOLUTIONS: Solution[] = [
  {
    id: "digital-marketing",
    index: "01",
    category: "Digital Marketing",
    title: "Digital Marketing, Advertising & Strategic Acquisition",
    positioning: "Turn digital attention into measurable opportunities.",
    services: [
      "Multichannel paid media",
      "Social Ads",
      "Search",
      "Display",
      "Campaign planning",
      "Campaign optimization",
      "Performance analytics",
      "ROI monitoring",
      "Lead generation",
      "Strategic prospecting",
      "Mass outreach",
    ],
  },
  {
    id: "territorial-strategies",
    index: "02",
    category: "Territorial Strategies",
    title: "Territorial Strategies & Digital Inclusion",
    positioning: "Transform digital initiatives into real territorial impact.",
    services: [
      "Promotion and communication campaigns",
      "Awareness programs",
      "Field activation",
      "Digital diagnostics",
      "Field data collection",
      "Connectivity analysis",
      "Digital inclusion",
      "ICT appropriation",
      "Direct engagement with target populations",
    ],
  },
  {
    id: "contact-center",
    index: "03",
    category: "Contact Center / BPO",
    title: "Contact Center & Operational Conversion",
    positioning: "Human operations designed to turn conversations into outcomes.",
    services: [
      "Lead management",
      "Multichannel contact center",
      "Customer support",
      "Customer retention",
      "Telemarketing",
      "Data validation",
      "Surveys",
      "Confirmation campaigns",
      "Conversion operations",
    ],
  },
  {
    id: "web-technology",
    index: "04",
    category: "Web & Technology",
    title: "Web Ecosystems & Technology",
    positioning: "Technology built around performance, scalability and experience.",
    services: [
      "Landing page development",
      "Corporate websites",
      "Campaign websites",
      "UX/UI",
      "SEO/SEM-oriented platforms",
      "Cloud infrastructure",
      "Hosting",
      "High availability",
      "Technical support",
      "Technology integration",
      "Maintenance",
    ],
  },
  {
    id: "btl-events",
    index: "05",
    category: "BTL & Events",
    title: "BTL, Space Adaptation & Corporate Events",
    positioning: "Turn physical spaces into experiences that create impact.",
    services: [
      "Event spaces",
      "Corporate events",
      "Space adaptation",
      "Production",
      "Event infrastructure",
      "Customized solutions",
      "End-to-end execution",
    ],
  },
];

export const ECOSYSTEM_STEPS = [
  { label: "Digital Strategy", short: "Strategy" },
  { label: "Advertising", short: "Advertising" },
  { label: "Landing Page / Web", short: "Web" },
  { label: "Lead Capture", short: "Leads" },
  { label: "Contact Center", short: "Contact Center" },
  { label: "Conversion", short: "Conversion" },
  { label: "Follow-up", short: "Follow-up" },
  { label: "Analytics", short: "Analytics" },
  { label: "Territorial Impact", short: "Territory" },
] as const;

export type EcosystemNode = {
  id: string;
  label: string;
  description: string;
  connections: string[];
};

export const ECOSYSTEM_NODES: EcosystemNode[] = [
  {
    id: "strategy",
    label: "Strategy",
    description:
      "Digital and territorial strategy design: campaign planning, audience definition and roadmap for measurable outcomes.",
    connections: ["marketing", "territory"],
  },
  {
    id: "marketing",
    label: "Marketing",
    description:
      "Multichannel paid media, search, social and display campaigns engineered for lead generation and strategic prospecting.",
    connections: ["technology", "conversion"],
  },
  {
    id: "technology",
    label: "Technology",
    description:
      "Landing pages, corporate websites and cloud infrastructure that capture and route demand into the ecosystem.",
    connections: ["people", "marketing"],
  },
  {
    id: "people",
    label: "People",
    description:
      "A multichannel contact center operation — 70+ agents managing conversations, support and retention at scale.",
    connections: ["conversion", "technology"],
  },
  {
    id: "territory",
    label: "Territory",
    description:
      "Field activation, digital inclusion and ICT appropriation programs that bring the ecosystem into communities.",
    connections: ["strategy", "conversion"],
  },
  {
    id: "conversion",
    label: "Conversion",
    description:
      "Measurement, follow-up and reporting that close the loop — turning activity into transparent, trackable results.",
    connections: ["strategy", "people"],
  },
];

export type WhyPillar = {
  index: string;
  title: string;
  description: string;
};

export const WHY_PILLARS: WhyPillar[] = [
  {
    index: "01",
    title: "360° Ecosystem",
    description:
      "Digital advertising, web platforms, lead acquisition and contact center operations integrated into one ecosystem.",
  },
  {
    index: "02",
    title: "Scalability",
    description:
      "Experience supporting focused corporate campaigns as well as departmental and national coverage projects.",
  },
  {
    index: "03",
    title: "Operational Rigor",
    description:
      "Transparent metrics, optimized budgets and multidisciplinary teams focused on achieving objectives.",
  },
];

export type CapabilityGroup = {
  category: string;
  items: string[];
};

export const CAPABILITIES: CapabilityGroup[] = [
  {
    category: "Strategy",
    items: ["Digital strategy", "Campaign planning", "Territorial planning"],
  },
  {
    category: "Marketing",
    items: ["Paid media", "Lead generation", "Performance", "Prospecting"],
  },
  {
    category: "Technology",
    items: [
      "Web",
      "Landing pages",
      "UX/UI",
      "Hosting",
      "Cloud infrastructure",
      "Technical support",
    ],
  },
  {
    category: "Operations",
    items: [
      "Contact center",
      "Telemarketing",
      "Validation",
      "Conversion",
      "Customer support",
    ],
  },
  {
    category: "Territory",
    items: [
      "Field work",
      "Digital inclusion",
      "ICT appropriation",
      "Community engagement",
    ],
  },
  {
    category: "Events",
    items: ["BTL", "Space adaptation", "Corporate events", "Production"],
  },
];

export const CASE_STUDY = {
  eyebrow: "Impact in territory",
  title: "Digital inclusion and large-scale communication in Putumayo.",
  summary:
    "Conectividad y apropiación tecnológica para la inclusión digital en el departamento de Putumayo.",
  timeline: [
    {
      label: "Challenge",
      description:
        "Extend connectivity awareness and digital inclusion to communities across the Putumayo department.",
    },
    {
      label: "Strategy",
      description:
        "Communication strategies and promotion campaigns designed to reach target populations across the territory.",
    },
    {
      label: "Field Execution",
      description:
        "Field data collection, connectivity analysis and direct outreach conducted on the ground.",
    },
    {
      label: "Community Engagement",
      description:
        "Surveys, ICT appropriation activities and direct engagement with local communities.",
    },
    {
      label: "Impact",
      description:
        "Contribution to internet access expansion efforts and digital inclusion in the department.",
    },
  ],
};

export const SERVICE_OPTIONS = [
  "Digital Marketing",
  "Territorial Strategies",
  "Contact Center / BPO",
  "Web & Technology",
  "BTL & Events",
  "Integrated Solution",
  "Other",
] as const;
