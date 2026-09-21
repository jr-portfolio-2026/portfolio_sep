import e4mPreview from "@/assets/e4m-preview.jpg";
import fretioPreview from "@/assets/fretio-preview.jpg";
import payotePreview from "@/assets/payote-preview.jpg";
import pesPreview from "@/assets/pes-preview.jpg";

export type ProjectSlug = "fretio" | "e4m" | "pes" | "payote";

export type Project = {
  slug: ProjectSlug;
  name: string;
  category: string;
  status: string;
  image: string;
  relevance: string;
  problem: string;
  working: string;
  improve: string;
  mandate: string;
  specifications: string[];
  limitations: string[];
  demoLabel: string;
  demoSteps: string[];
  accent: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "fretio",
    name: "FRET.IO",
    category: "Calculation system",
    status: "Public demo",
    image: fretioPreview,
    relevance: "Applied software · structured calculation",
    problem: "Turns a technical fret-planning process into a controlled, repeatable calculation workflow.",
    working: "Core calculations, planning logic, and a demo-ready interface are operational.",
    improve: "Refine specialist workflows, validation, and finish toward a best-in-market instrument.",
    mandate: "Translate specialist instrument-making calculations into a calm, legible planning surface without flattening the underlying technical logic.",
    specifications: ["Scale and fret-position calculation", "Input validation and unit control", "Printable planning output", "Responsive workshop interface"],
    limitations: ["Specialist validation remains in progress", "Export formats require further testing", "Public demo uses representative values"],
    demoLabel: "Fret position study",
    demoSteps: ["Define scale", "Select temperament", "Review positions", "Prepare output"],
    accent: "Measurement / precision",
  },
  {
    slug: "e4m",
    name: "E4M",
    category: "Institutional redesign",
    status: "Work in progress",
    image: e4mPreview,
    relevance: "NGO · institutional systems",
    problem: "Reframes an NGO website as a clearer institutional information and programme system.",
    working: "The direction is approved and the principal experience is the most mature institutional study in the portfolio.",
    improve: "Expand programme depth, publishing structures, and the wider institutional architecture.",
    mandate: "Give programmes, evidence, and institutional identity a coherent public structure suitable for partners, beneficiaries, and decision-makers.",
    specifications: ["Programme-led information architecture", "Editorial publishing framework", "Partner and impact presentation", "Accessible multilingual foundation"],
    limitations: ["Programme content is represented in draft form", "Translation architecture is not yet connected", "Final publishing workflow remains to be specified"],
    demoLabel: "Programme navigator",
    demoSteps: ["Choose a programme", "Read the mandate", "Review evidence", "Open participation path"],
    accent: "Institution / clarity",
  },
  {
    slug: "pes",
    name: "PES",
    category: "Productivity system",
    status: "Internal build",
    image: pesPreview,
    relevance: "Operations · workflow design",
    problem: "Organises priorities and task progression for use in a real working environment.",
    working: "The core workflow is practical and actively usable for day-to-day planning.",
    improve: "Resolve small interaction issues and strengthen reporting across longer cycles.",
    mandate: "Create a low-friction operational surface that makes priorities visible while preserving enough structure for review and accountability.",
    specifications: ["Priority and status controls", "Focused daily workflow", "Task grouping and review", "Lightweight progress reporting"],
    limitations: ["Designed around one current workflow", "Long-cycle reporting needs refinement", "Collaboration permissions are not public"],
    demoLabel: "Priority desk",
    demoSteps: ["Capture work", "Set priority", "Move through status", "Review the cycle"],
    accent: "Workflow / focus",
  },
  {
    slug: "payote",
    name: "Payote",
    category: "Strategic redesign",
    status: "Case study",
    image: payotePreview,
    relevance: "French commerce · brand strategy",
    problem: "Reconsiders a French brand’s website through commercial positioning and digital presentation.",
    working: "A coherent strategic and visual direction demonstrates the redesign thesis.",
    improve: "Develop the commerce journey, content system, and final production detail.",
    mandate: "Test how a recognisable French brand can retain its character while gaining a clearer commercial narrative and more disciplined digital experience.",
    specifications: ["Brand and market review", "Reframed product narrative", "Editorial commerce concepts", "Responsive visual direction"],
    limitations: ["Independent academic exercise", "No live commerce connection", "Final product catalogue is illustrative"],
    demoLabel: "Editorial commerce study",
    demoSteps: ["Enter the collection", "Read the material story", "Compare products", "Review purchase path"],
    accent: "Commerce / narrative",
  },
];

export function getProject(slug: ProjectSlug): Project {
  return PROJECTS.find((project) => project.slug === slug) ?? (PROJECTS[0] as Project);
}
