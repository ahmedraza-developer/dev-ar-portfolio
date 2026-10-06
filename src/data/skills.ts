import type { ComponentType, SVGProps } from "react";
import {
  AngularjsIcon,
  BootstrapIcon,
  ConvexIcon,
  CSS3Icon,
  FramerIcon,
  GitIcon,
  HTML5Icon,
  JavascriptES6Icon,
  MongoDbIcon,
  NeonIcon,
  NextjsIcon,
  ReactjsIcon,
  ReactRouterIcon,
  SassIcon,
  SupabaseIcon,
  TailwindCssIcon,
  TypescriptIcon,
  VitejsIcon,
  VueJsIcon,
} from "@/components/ui/svg-renderer";

export type Skill = {
  label: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export type SkillGroup = {
  title: string;
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    skills: [
      { label: "TypeScript", icon: TypescriptIcon },
      { label: "JavaScript (ES6+)", icon: JavascriptES6Icon },
      { label: "HTML5", icon: HTML5Icon },
      { label: "CSS3", icon: CSS3Icon },
    ],
  },
  {
    title: "Frameworks & libraries",
    skills: [
      { label: "React", icon: ReactjsIcon },
      { label: "Next.js", icon: NextjsIcon },
      { label: "React Router", icon: ReactRouterIcon },
      { label: "Vue", icon: VueJsIcon },
      { label: "Angular", icon: AngularjsIcon },
    ],
  },
  {
    title: "Styling & motion",
    skills: [
      { label: "Tailwind CSS", icon: TailwindCssIcon },
      { label: "Sass", icon: SassIcon },
      { label: "Bootstrap", icon: BootstrapIcon },
      { label: "Framer Motion", icon: FramerIcon },
    ],
  },
  {
    title: "Backend & data",
    skills: [
      { label: "Supabase", icon: SupabaseIcon },
      { label: "Convex", icon: ConvexIcon },
      { label: "Neon", icon: NeonIcon },
      { label: "MongoDB", icon: MongoDbIcon },
    ],
  },
  {
    title: "Tooling",
    skills: [
      { label: "Vite", icon: VitejsIcon },
      { label: "Git", icon: GitIcon },
    ],
  },
];

export const skillCount = skillGroups.reduce(
  (total, group) => total + group.skills.length,
  0,
);
