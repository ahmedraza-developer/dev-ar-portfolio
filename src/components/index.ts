import dynamic from "next/dynamic";
// Website Client Componets
const Hero = dynamic(() => import("./sections/Hero"));
const Navbar = dynamic(() => import("./sections/Navbar"));
const About = dynamic(() => import("./sections/About"));
const Services = dynamic(() => import("./sections/Services"));
const Skills = dynamic(() => import("./sections/Skills"));
const Contact = dynamic(() => import("./sections/Contact"));
const Footer = dynamic(() => import("./sections/Footer"));
// UI Client Componets
const LayoutBg = dynamic(() => import("./LayoutBG"));
const CursorFollower = dynamic(() => import("./CursorFollower"));
const LoadingScreen = dynamic(() => import("./LoadingScreen"));
const LottieAnimations = dynamic(() => import("./LottieAnimations"));
const ModeToggle = dynamic(() =>
  import("./Mode-Toggle").then((mod) => mod.ModeToggle)
);
const Dock = dynamic(() => import("./magicui/Dock").then((mod) => mod.Dock));
const DockIcon = dynamic(() =>
  import("./magicui/Dock").then((mod) => mod.DockIcon)
);
const Particles = dynamic(() =>
  import("./magicui/Particles").then((mod) => mod.Particles)
);
const Button = dynamic(() => import("./ui/button").then((mod) => mod.Button));
const Separator = dynamic(() =>
  import("./ui/separator").then((mod) => mod.Separator)
);
const Tooltip = dynamic(() =>
  import("./ui/tooltip").then((mod) => mod.Tooltip)
);
const TooltipContent = dynamic(() =>
  import("./ui/tooltip").then((mod) => mod.TooltipContent)
);
const TooltipTrigger = dynamic(() =>
  import("./ui/tooltip").then((mod) => mod.TooltipTrigger)
);
const Cards = dynamic(() => import("./Cards"));

export {
  LayoutBg,
  Hero,
  Navbar,
  About,
  Services,
  Skills,
  Contact,
  Footer,
  // UI Components
  CursorFollower,
  LoadingScreen,
  LottieAnimations,
  ModeToggle,
  Dock,
  DockIcon,
  Particles,
  Button,
  Separator,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  Cards
};
