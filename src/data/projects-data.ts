/**
 * Projects Data Configuration
 * Centralized project data with all categories
 */

export type ProjectCategory =
  | "all"
  | "landingPages"
  | "websites"
  | "ai"
  | "ecommerce"
  | "crm"
  | "communication";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: ProjectCategory;
  tags: string[];
  link: string;
  liveLink?: string;
  rating?: number;
  ratingCount?: number;
  deliverables?: string[];
}

/**
 * All projects data organized by category
 */
export const allProjects: Project[] = [
  // ========== Landing Pages ==========
  {
    id: 1,
    title: "Children Book Illustration",
    description:
      "Creative landing page for book illustration services with modern animations and engaging user experience.",
    image: "/projects/landing-pages/1.png",
    category: "landingPages",
    tags: ["HTML 5", "CSS 3", "Jquery", "Slick"],
    link: "https://jumpto1.us/children-book-illustration-services/",
    rating: 4.3,
    ratingCount: 9,
    deliverables: ["Responsive Design", "Animation Effects", "SEO Optimized"],
  },
  {
    id: 2,
    title: "iOS App Development",
    description:
      "Landing page for iOS app development services with clean design and call-to-action optimization.",
    image: "/projects/landing-pages/2.png",
    category: "landingPages",
    tags: ["HTML 5", "CSS 3", "Bootstrap 5", "Jquery", "Embla"],
    link: "https://jumpto1.us/ios-app-development-services/",
    rating: 4.2,
    ratingCount: 8,
    deliverables: ["Mobile Responsive", "Interactive UI", "Fast Loading"],
  },
  {
    id: 3,
    title: "SEO Services Landing",
    description:
      "Landing page for SEO services with GSAP animations and conversion-focused design.",
    image: "/projects/landing-pages/5.png",
    category: "landingPages",
    tags: ["HTML 5", "CSS 3", "Bootstrap 5", "Jquery", "Embla", "GSAP"],
    link: "https://seoresultspro.com/seo-services/",
    rating: 4.4,
    ratingCount: 8,
    deliverables: ["GSAP Animations", "Conversion Optimized", "A/B Testing"],
  },

  // ========== Websites ==========
  {
    id: 4,
    title: "Crystallite Digital",
    description:
      "Modern digital agency website with responsive design, modern UI/UX, and seamless user experience.",
    image: "/projects/websites/1.png",
    category: "websites",
    tags: ["Nextjs 13", "Bootstrap 5", "Jquery"],
    link: "#",
    rating: 4.5,
    ratingCount: 12,
    deliverables: ["Full Website", "CMS Integration", "Performance Optimized"],
  },
  {
    id: 5,
    title: "Infinity Animations",
    description:
      "Animation studio portfolio with modern UI/UX, interactive elements, and stunning visual effects.",
    image: "/projects/websites/2.png",
    category: "websites",
    tags: ["Nextjs 14", "Tailwind Css", "Shadcn Ui"],
    link: "https://infinityanimations.com/",
    rating: 4.8,
    ratingCount: 8,
    deliverables: [
      "Portfolio Showcase",
      "Interactive Gallery",
      "Contact System",
    ],
  },
  {
    id: 6,
    title: "Bestselling Publisher",
    description:
      "Publishing company website with Next.js, modern stack, and comprehensive content management.",
    image: "/projects/websites/5.png",
    category: "websites",
    tags: ["Nextjs 13", "Tailwind CSS", "Jquery", "Javascript", "Embla"],
    link: "https://bestsellingpublisher.com/",
    rating: 4.6,
    ratingCount: 9,
    deliverables: ["Multi-page Site", "Blog System", "SEO Optimized"],
  },
  {
    id: 15,
    title: "Ready App",
    description:
      "Platform that allows users to find and book truck drivers for their business with intuitive interface.",
    image: "/projects/websites/3.png",
    category: "websites",
    tags: ["HTML 5", "CSS 3", "Javascript", "Jquery", "Slick", "Bootstrap 5"],
    link: "#",
    rating: 4.6,
    ratingCount: 9,
    deliverables: ["Responsive Design", "Interactive UI", "Fast Loading"],
  },
  {
    id: 16,
    title: "Tandym",
    description:
      "The best place for your brand is your customer's wallet - elegant brand wallet solution.",
    image: "/projects/websites/4.png",
    category: "websites",
    tags: ["HTML 5", "CSS 3", "Javascript", "Tailwind CSS", "Embla"],
    link: "https://www.bytandym.com/",
    rating: 4.6,
    ratingCount: 9,
    deliverables: ["Responsive Design", "Interactive UI", "SEO Optimized"],
  },

  // ========== AI Related ==========
  {
    id: 7,
    title: "Baby Siri - Virtual Assistant",
    description:
      "AI-powered virtual assistant interface with voice recognition and natural language processing.",
    image: "/projects/websites/8.png",
    category: "ai",
    tags: ["HTML5", "CSS3", "Javascript ES6", "AI Integration"],
    link: "https://baby-siri.netlify.app/",
    rating: 4.6,
    ratingCount: 11,
    deliverables: [
      "AI Integration",
      "Voice Recognition",
      "Real-time Processing",
    ],
  },
  {
    id: 8,
    title: "AI Website Builder",
    description:
      "Ship AI-driven web experiences fast with Next.js 16, React 19, Tailwind v4, and a production-ready agent stack.",
    image: "/projects/websites/11.png",
    category: "ai",
    tags: [
      "trpc",
      "Inngest",
      "Clerk",
      "Prisma",
      "Neon",
      "Docker",
      "E2B Cloud Sandboxes",
    ],
    link: "#",
    rating: 4.7,
    ratingCount: 1,
    deliverables: [
      "Real-time metrics",
      "AI Analytics",
      "Auto-escalation chatbot",
    ],
  },

  // ========== Ecommerce ==========
  {
    id: 9,
    title: "FSF Mart",
    description:
      "Full-featured e-commerce platform with shopping cart, payment integration, and inventory management.",
    image: "/projects/ecommerce/1.png",
    category: "ecommerce",
    tags: ["HTML 5", "CSS 3", "Bootstrap 5", "Jquery", "Javascript"],
    link: "https://fsf-mart-pk.netlify.app/",
    rating: 4.2,
    ratingCount: 15,
    deliverables: ["Shopping Cart", "Payment Gateway", "Product Management"],
  },
  {
    id: 10,
    title: "Modern E-commerce",
    description:
      "Next.js based e-commerce solution with modern UI, fast performance, and seamless shopping experience.",
    image: "/projects/ecommerce/2.png",
    category: "ecommerce",
    tags: [
      "Nextjs 14",
      "Tailwind Css",
      "React Hook Form",
      "Shadcn Ui",
      "Typescript",
    ],
    link: "https://ecommerce-nextjs-sandy-one.vercel.app/",
    rating: 4.7,
    ratingCount: 6,
    deliverables: ["Product Catalog", "Checkout System", "Order Management"],
  },

  // ========== CRM ==========
  {
    id: 11,
    title: "Macrolight Trading",
    description:
      "Craft a range of options portfolio trading strategies designed to optimize returns and manage risk effectively.",
    image: "/projects/websites/10.png",
    category: "crm",
    tags: [
      "Vite",
      "React",
      "Tailwind CSS",
      "Javascript",
      "Jquery",
      "Slick",
      "Bootstrap 5",
    ],
    link: "https://macrolight-trading-reactjs.vercel.app/",
    rating: 4.6,
    ratingCount: 9,
    deliverables: ["Responsive Design", "Interactive UI", "SEO Optimized"],
  },

  // ========== Communication App ==========
  {
    id: 13,
    title: "Slack Clone Real Time Communication",
    description:
      "Slack Clone Real Time Communication App with messaging, file sharing, and seamless collaboration features.",
    image: "/projects/websites/9.png",
    category: "communication",
    tags: [
      "Next.js",
      "Tailwind CSS",
      "Convex",
      "Typescript",
      "trpc",
      "next-auth",
      "jotai",
      "shadcn/ui",
    ],
    link: "https://dev-ar-communication-app.vercel.app/",
    rating: 4.9,
    ratingCount: 25,
    deliverables: ["Real-time Messaging", "File Sharing", "SEO Optimized"],
  },
];

/**
 * Get projects filtered by category
 * @param category - The category to filter by
 * @returns Array of projects matching the category
 */
export const getProjectsByCategory = (
  category: ProjectCategory
): Project[] => {
  if (category === "all") {
    return allProjects;
  }
  return allProjects.filter((project) => project.category === category);
};

