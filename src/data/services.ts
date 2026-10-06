import {
  Code2,
  Gauge,
  LayoutTemplate,
  Palette,
  Plug,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  title: string;
  description: string;
  stack: string[];
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    title: "UI Development",
    description:
      "Designs become production-ready interfaces — responsive, accessible, and polished down to the last pixel.",
    stack: ["Responsive UI", "Accessibility", "Components"],
    icon: LayoutTemplate,
  },
  {
    title: "Styling & Layout",
    description:
      "Tailwind CSS and modern layout systems that keep your product visually consistent and easy to maintain.",
    stack: ["Tailwind CSS", "Grid & Flexbox", "Design tokens"],
    icon: Palette,
  },
  {
    title: "React & Next.js",
    description:
      "Interactive web apps with reusable components, sensible architecture, and a codebase built to scale.",
    stack: ["React", "Next.js", "TypeScript"],
    icon: Code2,
  },
  {
    title: "Motion Design",
    description:
      "Smooth animations and micro-interactions that guide users — clear feedback without slowing the experience.",
    stack: ["Motion", "Interaction design", "Performance"],
    icon: Sparkles,
  },
  {
    title: "API Integration",
    description:
      "Frontends wired to REST and GraphQL APIs with reliable loading, empty, and error states throughout.",
    stack: ["REST", "GraphQL", "Async patterns"],
    icon: Plug,
  },
  {
    title: "Performance & SEO",
    description:
      "Faster load times, stronger Core Web Vitals, and SEO improvements that hold up in production.",
    stack: ["Core Web Vitals", "Accessibility", "Technical SEO"],
    icon: Gauge,
  },
];
