export type ProjectCategory =
  | "all"
  | "landingPages"
  | "websites"
  | "ai"
  | "ecommerce"
  | "crm"
  | "communication";

export type InfrastructureGroup = {
  title: string;
  items: { label: string; value: string }[];
};

export type ClientFeedback = {
  quote: string;
  name: string;
  role: string;
  company?: string;
};

/** One concrete thing that was built, shown in the "What I built" grid. */
export type Highlight = {
  title: string;
  detail: string;
};

export type Project = {
  id: number;
  slug: string;
  title: string;
  /** One sentence for cards, meta descriptions and share previews. */
  description: string;
  /** Case-study body: what the product is and what the build covered. */
  overview: string[];
  highlights: Highlight[];
  image: string;
  /** Screens of this project only; the first entry is `image`. */
  gallery: string[];
  category: ProjectCategory;
  tags: string[];
  /** Public URL, when the project is still online. */
  liveLink?: string;
  rating?: number;
  ratingCount?: number;
  deliverables: string[];
  featured: boolean;
  role: string;
  /** Optional sections: only add these when the details are real. */
  timeline?: string;
  infrastructure?: InfrastructureGroup[];
  clientFeedback?: ClientFeedback;
};

function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const categoryLabels: Record<Exclude<ProjectCategory, "all">, string> = {
  landingPages: "Landing Page",
  websites: "Website",
  ai: "AI & Voice",
  ecommerce: "E-commerce",
  crm: "Dashboard",
  communication: "Communication App",
};

type BaseProject = Omit<Project, "slug" | "gallery" | "featured" | "role"> & {
  gallery?: string[];
  featured?: boolean;
  role?: string;
};

function enrichProject(base: BaseProject): Project {
  return {
    ...base,
    slug: slugify(base.title),
    gallery: base.gallery ?? [base.image],
    featured: base.featured ?? false,
    role: base.role ?? "Front-End Engineer",
  };
}

const rawProjects: BaseProject[] = [
  {
    id: 18,
    title: "Velamora",
    description:
      "A premium ready-to-wear fashion store with its own brand identity, a full shopping and checkout flow, order tracking and an admin dashboard for sales, stock and demand.",
    featured: true,
    role: "Product Engineer (brand, design, front end, back end)",
    overview: [
      "Velamora is a modern clothing label for the US and international markets, built from nothing: the name, the logo, the colour system and every visual on the site. The brief was a store that feels like a luxury fashion house rather than a template, while still being fast and easy to buy from.",
      "I designed and built the whole thing: an editorial home page, eight collection pages, shop pages with filters for size, colour, price and category, product pages with colour-aware galleries and size guides, a bag and a single-page checkout, customer accounts with email verification, a wishlist and a track-your-order page with a delivery timeline. Behind it is an admin dashboard for orders, products, inventory, customers, discounts, reviews and analytics.",
      "It runs on Next.js 16 with Cache Components and Partial Prerendering, on Neon: Postgres with Drizzle, Neon Auth for accounts, Object Storage for product photos and a Neon Function that collects first-party analytics. The store went through a full security review and is covered by end-to-end tests against the production build.",
    ],
    highlights: [
      {
        title: "Brand identity from scratch",
        detail:
          "Name, Didone monogram seal, serif wordmark and an ivory, ink and clay palette — plus generated garment artwork in each product's real colourways, so the catalogue looks finished before any photoshoot.",
      },
      {
        title: "Checkout that can't be gamed",
        detail:
          "Prices, discounts, shipping and tax are recalculated on the server, and stock and discount uses change inside one database transaction, so two buyers can never get the last item.",
      },
      {
        title: "Order tracking without leaking data",
        detail:
          "Customers follow every step from confirmed to delivered. An order only opens with its number and email or a signed private cookie — never with the email sitting in the URL.",
      },
      {
        title: "Admin built around demand",
        detail:
          "Revenue, visitors and conversion at a glance, plus hot sellers, a demand score from views, add-to-carts and wishlists, low-stock alerts and days of stock left at the current sales rate.",
      },
      {
        title: "Privacy-first analytics",
        detail:
          "No third-party trackers or cookies: page views, product views, add-to-carts and searches go to a Neon Function and straight into Postgres, feeding the funnel and traffic heatmap.",
      },
      {
        title: "Security reviewed",
        detail:
          "Strict security headers, rate limiting on checkout, sign-in and every form, email verification by one-time code, origin checks and admin access re-checked on every action.",
      },
    ],
    image: "/projects/velamora/1.png",
    gallery: [
      "/projects/velamora/1.png",
      "/projects/velamora/2.png",
      "/projects/velamora/3.png",
      "/projects/velamora/4.png",
      "/projects/velamora/5.png",
      "/projects/velamora/6.png",
      "/projects/velamora/7.png",
      "/projects/velamora/8.png",
    ],
    category: "ecommerce",
    tags: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Neon Postgres",
      "Drizzle ORM",
      "Neon Auth",
      "Tailwind CSS",
      "shadcn/ui",
      "Playwright",
    ],
    liveLink: "https://www.velamoraclothing.store/",
    deliverables: ["Brand Identity", "E-commerce Build", "Admin Dashboard", "Security Review"],
    infrastructure: [
      {
        title: "Frontend",
        items: [
          { label: "Framework", value: "Next.js 16, React 19, React Compiler" },
          { label: "Rendering", value: "Cache Components, Partial Prerendering" },
          { label: "UI", value: "Tailwind CSS v4, shadcn/ui on Base UI" },
        ],
      },
      {
        title: "Backend & Data",
        items: [
          { label: "Database", value: "Neon Postgres + Drizzle ORM" },
          { label: "Auth", value: "Neon Auth (Better Auth), email OTP" },
          { label: "Storage & Functions", value: "Neon Object Storage, Neon Function analytics" },
        ],
      },
      {
        title: "Quality & Delivery",
        items: [
          { label: "Testing", value: "Playwright end-to-end against production" },
          { label: "Security", value: "CSP, rate limiting, signed order access" },
          { label: "Hosting", value: "Vercel + Neon, custom domain" },
        ],
      },
    ],
  },
  {
    id: 17,
    title: "Nodelane",
    description:
      "Project management for agencies and freelancers: a realtime board for the team and a private portal for every client, with pinned feedback, approvals and invoicing.",
    featured: true,
    role: "Product Engineer (design, front end, back end)",
    overview: [
      "Nodelane is a project manager built for client work. Tools like Linear and Trello are made for the people doing the work; agencies also have a client who wants to see progress, give feedback and sign things off without learning a task tool. Nodelane gives the team a fast kanban board and gives each client a private portal at a link — no account, no seat.",
      "I designed and built the whole product: a Linear-style interface in light and dark, a keyboard-first board with drag and drop, a task panel with rich text, files and a timeline, feedback pins dropped right on design images, versioned approvals, time tracking and numbered PDF invoices. Boards, comments and presence update live for everyone on a project.",
      "It runs on Next.js 16 and React 19 with Server Components and Server Actions, on Neon Postgres with Drizzle. Realtime needs no paid service: Postgres triggers publish changes over LISTEN/NOTIFY to a WebSocket function. The app went through a full security review and is covered by Playwright end-to-end tests that also run against production.",
    ],
    highlights: [
      {
        title: "Client portal at a private link",
        detail:
          "Clients see only the tasks you share, comment, and approve or request changes. Links are 256-bit tokens stored hashed, and can expire or be revoked.",
      },
      {
        title: "Feedback pinned to the design",
        detail:
          "Click anywhere on an uploaded design to drop a numbered pin and start a thread. Team and client both pin, reply and resolve, by mouse or keyboard.",
      },
      {
        title: "Realtime board and presence",
        detail:
          "Moves, comments and approvals appear for everyone instantly, and avatars show who is looking at which task — Postgres LISTEN/NOTIFY into a WebSocket function.",
      },
      {
        title: "Versioned approvals",
        detail:
          "Every sign-off is recorded per version, and an approval moves the task to Done on its own. “Which one was final?” always has an answer.",
      },
      {
        title: "Time tracking to invoices",
        detail:
          "Timers on every task turn billable hours into a numbered PDF invoice. Billed time is locked so the same hour can never be invoiced twice.",
      },
      {
        title: "Keyboard first and accessible",
        detail:
          "⌘K search across tasks and projects, drag and drop from the keyboard with screen-reader announcements, visible focus and reduced-motion support.",
      },
    ],
    image: "/projects/nodelane/1.png",
    gallery: [
      "/projects/nodelane/1.png",
      "/projects/nodelane/2.png",
      "/projects/nodelane/3.png",
      "/projects/nodelane/4.png",
      "/projects/nodelane/5.png",
      "/projects/nodelane/6.png",
      "/projects/nodelane/7.png",
      "/projects/nodelane/8.png",
    ],
    category: "crm",
    tags: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Neon Postgres",
      "Drizzle ORM",
      "WebSockets",
      "Tailwind CSS",
      "shadcn/ui",
      "Playwright",
    ],
    liveLink: "https://nodelane.vercel.app/",
    deliverables: ["Product Design", "Full-stack Build", "Realtime Collaboration", "End-to-end Tests"],
    infrastructure: [
      {
        title: "Frontend",
        items: [
          { label: "Framework", value: "Next.js 16, React 19, React Compiler" },
          { label: "UI", value: "Tailwind CSS v4, shadcn/ui, Motion" },
          { label: "Interactions", value: "dnd-kit, Tiptap, cmdk" },
        ],
      },
      {
        title: "Backend & Realtime",
        items: [
          { label: "Database", value: "Neon Postgres + Drizzle ORM" },
          { label: "Auth", value: "Neon Auth (Better Auth), organizations" },
          { label: "Realtime", value: "LISTEN/NOTIFY → WebSocket function" },
        ],
      },
      {
        title: "Quality & Delivery",
        items: [
          { label: "Testing", value: "Playwright end-to-end + Vitest" },
          { label: "Security", value: "CSP, rate limiting, tenant isolation" },
          { label: "Hosting", value: "Vercel + Neon, GitHub Actions CI" },
        ],
      },
    ],
  },
  {
    id: 1,
    title: "Children Book Illustration",
    description:
      "Conversion-focused landing page for a children's book illustration service, with a portfolio gallery, pricing packages and a quote form.",
    overview: [
      "A long-form landing page for Jumpto1's children's book illustration service, aimed at self-publishing authors who need artwork for their stories.",
      "The page takes a visitor from the pitch to a quote request in one scroll: what the service covers, examples of illustrated covers and interior pages, six pricing packages, the production process and client testimonials. I built the front end with HTML5, CSS3 and jQuery, using Slick for the carousels.",
    ],
    highlights: [
      {
        title: "Quote form in the hero",
        detail:
          "A short lead form sits beside the headline, so a visitor can request a quote without scrolling.",
      },
      {
        title: "Portfolio carousel",
        detail:
          "Illustrated book covers and interior pages are shown in a swipeable gallery.",
      },
      {
        title: "Six pricing packages",
        detail:
          "Tiered illustration packages are laid out side by side for quick comparison.",
      },
      {
        title: "Testimonial slider",
        detail: "Client reviews rotate in a carousel near the end of the page.",
      },
      {
        title: "Calls to action throughout",
        detail:
          "Call and chat buttons repeat at each stage, so the next step is always in view.",
      },
    ],
    image: "/projects/landing-pages/1.png",
    category: "landingPages",
    tags: ["HTML 5", "CSS 3", "Jquery", "Slick"],
    liveLink: "https://jumpto1.us/children-book-illustration-services/",
    rating: 4.3,
    ratingCount: 9,
    deliverables: ["Responsive Design", "Animation Effects", "SEO Optimized"],
  },
  {
    id: 2,
    title: "iOS App Development",
    description:
      "Service landing page for an iOS app development agency, with a case-study carousel, industry tabs, an FAQ accordion and consultation forms.",
    overview: [
      "A landing page for Jumpto1's iOS app development service, written for founders and businesses who want apps for iPhone, iPad, Apple Watch and Apple TV.",
      "It is a content-heavy page: client logos, a company overview, case studies, a services grid, a seven-step development process, testimonials, industries served and an FAQ. I built it with HTML5, CSS3 and Bootstrap 5, with jQuery for interactions and Embla for the carousels.",
    ],
    highlights: [
      {
        title: "Case-study carousel",
        detail:
          "Featured app projects are presented in a slider with previous and next controls.",
      },
      {
        title: "Seven-step process slider",
        detail:
          "The development approach, from discovery to maintenance, is stepped through one stage at a time.",
      },
      {
        title: "Industry tabs",
        detail:
          "Visitors switch between sectors such as healthcare, finance and e-commerce without leaving the section.",
      },
      {
        title: "FAQ accordion",
        detail: "Common questions expand in place to keep the page compact.",
      },
      {
        title: "Consultation modal and forms",
        detail:
          "A strategy-session popup and inline forms capture leads at several points on the page.",
      },
      {
        title: "Sticky header",
        detail:
          "Navigation stays in reach while scrolling and collapses into a menu on small screens.",
      },
    ],
    image: "/projects/landing-pages/2.png",
    category: "landingPages",
    tags: ["HTML 5", "CSS 3", "Bootstrap 5", "Jquery", "Embla"],
    liveLink: "https://jumpto1.us/ios-app-development-services/",
    rating: 4.2,
    ratingCount: 8,
    deliverables: ["Mobile Responsive", "Interactive UI", "Fast Loading"],
  },
  {
    id: 3,
    title: "SEO Services Landing",
    description:
      "Landing page for an SEO agency with animated sections, testimonial and case-study carousels, and pricing plans with a billing-period toggle.",
    overview: [
      "A landing page for SEO Results Pro, an agency selling search engine optimisation to businesses from startups to enterprises.",
      "The page covers social-proof statistics, nine service categories, case studies, six pricing plans, a six-step process and the industries the agency serves. I built it with HTML5, CSS3 and Bootstrap 5, with Embla carousels and GSAP for motion.",
    ],
    highlights: [
      {
        title: "Pricing with a billing toggle",
        detail:
          "Six plans switch between annual, quarterly and monthly pricing from a single control.",
      },
      {
        title: "Testimonial and case-study carousels",
        detail: "Two separate sliders, each with its own navigation arrows.",
      },
      {
        title: "GSAP animation",
        detail: "Motion on the page is built with GSAP rather than CSS alone.",
      },
      {
        title: "Statistics band",
        detail:
          "Headline numbers such as client count and retention rate open the page as social proof.",
      },
      {
        title: "Repeated contact points",
        detail:
          "“Talk to an SEO expert” buttons and phone links appear throughout the page.",
      },
    ],
    image: "/projects/landing-pages/5.png",
    category: "landingPages",
    tags: ["HTML 5", "CSS 3", "Bootstrap 5", "Jquery", "Embla", "GSAP"],
    liveLink: "https://seoresultspro.com/seo-services/",
    rating: 4.4,
    ratingCount: 8,
    deliverables: ["GSAP Animations", "Conversion Optimized", "A/B Testing"],
  },
  {
    id: 4,
    title: "Crystallite Digital",
    description:
      "Company website for a digital agency, built with Next.js 13 and Bootstrap 5 around a full-screen hero and off-canvas navigation.",
    overview: [
      "The company website for Crystallite, a digital agency. I built it with Next.js 13 and Bootstrap 5, with jQuery for the interactive pieces.",
      "The design leads with a full-screen hero — a large headline over a night-time city backdrop — and keeps the navigation out of the way behind a menu button.",
    ],
    highlights: [
      {
        title: "Full-screen hero",
        detail:
          "A large headline and contact link sit over a full-bleed city photograph.",
      },
      {
        title: "Vertical brand lettering",
        detail:
          "The company name runs up the left edge of the hero as a graphic element, beside a rail of social links.",
      },
      {
        title: "Off-canvas navigation",
        detail:
          "The menu opens from a button, keeping the first screen free of a navigation bar.",
      },
    ],
    image: "/projects/websites/1.png",
    category: "websites",
    tags: ["Nextjs 13", "Bootstrap 5", "Jquery"],
    rating: 4.5,
    ratingCount: 12,
    deliverables: ["Full Website", "CMS Integration", "Performance Optimized"],
  },
  {
    id: 5,
    title: "Infinity Animations",
    description:
      "Marketing website for a video animation studio, with a filterable video portfolio, video testimonials and lead forms, built with Next.js 14.",
    featured: true,
    overview: [
      "Infinity Animations needed a portfolio that could sell creative work without slowing the experience down. I built a Next.js 14 site with Tailwind CSS and Shadcn UI — focused on motion-friendly layouts, a strong showcase flow, and contact paths that convert visitors into leads.",
      "The studio produces explainer, product, promotional and training videos, so the site is built around watching work: a video portfolio filtered by animation style, a grid of ten services, a four-step production process and client testimonials, including video testimonials.",
    ],
    highlights: [
      {
        title: "Filterable video portfolio",
        detail:
          "Work is filtered by style — motion graphics, hybrid, 3D, 2D and whiteboard — with videos that play from their thumbnails.",
      },
      {
        title: "Video testimonials",
        detail:
          "Client reviews sit in a carousel alongside playable video testimonials.",
      },
      {
        title: "Services grid",
        detail:
          "Ten animation services, from 2D and 3D to architectural visualisation and CGI/VFX.",
      },
      {
        title: "Client logo carousel",
        detail: "A strip of client logos sits directly under the hero.",
      },
      {
        title: "Lead capture",
        detail:
          "A multi-field contact form closes the page, with “Get a call” buttons throughout.",
      },
      {
        title: "Optimised images",
        detail:
          "Images are served through Next.js image optimisation at sizes matched to the device.",
      },
    ],
    image: "/projects/websites/2.png",
    category: "websites",
    tags: ["Nextjs 14", "Tailwind Css", "Shadcn Ui"],
    liveLink: "https://infinityanimations.com/",
    rating: 4.8,
    ratingCount: 8,
    deliverables: ["Portfolio Showcase", "Interactive Gallery", "Contact System"],
    timeline: "6 weeks",
    infrastructure: [
      {
        title: "Frontend",
        items: [
          { label: "Framework", value: "Next.js 14 (App Router)" },
          { label: "Styling", value: "Tailwind CSS + Shadcn UI" },
          { label: "Components", value: "Reusable sections, gallery modules" },
        ],
      },
      {
        title: "Experience & Delivery",
        items: [
          { label: "Animations", value: "CSS + interaction-driven motion" },
          { label: "Performance", value: "Image optimization, route-based splitting" },
          { label: "Hosting", value: "Vercel production deployment" },
        ],
      },
    ],
    clientFeedback: {
      quote:
        "Ahmed translated our creative direction into a site that finally feels premium. The gallery flow is intuitive, animations are smooth, and the build is easy for us to maintain.",
      name: "Studio Lead",
      role: "Creative Director",
      company: "Infinity Animations",
    },
  },
  {
    id: 6,
    title: "Bestselling Publisher",
    description:
      "Multi-page website for a book publishing service, with service pages, a publishing process walkthrough and a registration form, built with Next.js.",
    overview: [
      "The website for Best Selling Publisher, a service that helps new and established authors take a manuscript through to publication and distribution.",
      "The home page explains how publishing support is structured, walks through the process, presents six services and Amazon publishing packages, and ends in a registration form. I built it with Next.js 13 and Tailwind CSS, with Embla for the carousels.",
    ],
    highlights: [
      {
        title: "Service navigation with dropdowns",
        detail:
          "The main menu groups the writing and publishing services into dropdown submenus.",
      },
      {
        title: "Image carousel",
        detail: "Publishing examples are shown in a slider within the service overview.",
      },
      {
        title: "Six service cards",
        detail: "Each publishing service is introduced in its own card.",
      },
      {
        title: "Process walkthrough",
        detail:
          "A numbered, six-point section explains how publishing support is structured.",
      },
      {
        title: "Registration form",
        detail:
          "Name, email, phone and comments fields, plus a “how did you hear about us” dropdown.",
      },
    ],
    image: "/projects/websites/5.png",
    category: "websites",
    tags: ["Nextjs 13", "Tailwind CSS", "Jquery", "Javascript", "Embla"],
    liveLink: "https://bestsellingpublisher.com/",
    rating: 4.6,
    ratingCount: 9,
    deliverables: ["Multi-page Site", "Blog System", "SEO Optimized"],
  },
  {
    id: 7,
    title: "Baby Siri - Virtual Assistant",
    description:
      "Browser voice assistant that listens for spoken commands and answers out loud, built with the Web Speech API and plain JavaScript.",
    overview: [
      "Baby Siri is a small voice assistant that runs entirely in the browser. Tap the microphone, say a command, and it replies out loud.",
      "It is built with HTML5, CSS3 and vanilla JavaScript on top of the browser's Web Speech API — speech recognition for input and speech synthesis for the replies — with no backend and no dependencies.",
    ],
    highlights: [
      {
        title: "Speech recognition",
        detail:
          "The microphone button starts listening and turns what you say into a command.",
      },
      {
        title: "Spoken replies",
        detail: "Answers are read back using the browser's speech synthesis voice.",
      },
      {
        title: "Built-in commands",
        detail:
          "Greetings, the current time and date, jokes, and opening sites such as YouTube, Google, Facebook and Instagram.",
      },
      {
        title: "Listening state",
        detail: "An animated waveform shows when the assistant is listening.",
      },
      {
        title: "No backend",
        detail:
          "Everything runs client-side as a static site, so it loads instantly and costs nothing to host.",
      },
    ],
    image: "/projects/websites/8.png",
    category: "ai",
    tags: ["HTML5", "CSS3", "Javascript ES6", "Web Speech API"],
    liveLink: "https://baby-siri.netlify.app/",
    rating: 4.6,
    ratingCount: 11,
    deliverables: ["Voice Commands", "Spoken Responses", "Static, No-backend Build"],
  },
  {
    id: 8,
    title: "AI Website Builder",
    description:
      "Prompt-to-app builder: describe an app in chat and an AI agent generates it. Built with Next.js, tRPC, Prisma, Inngest, Clerk and E2B sandboxes.",
    overview: [
      "Vibe is an AI website builder: you describe what you want in a chat box and an AI agent builds the app or site for you.",
      "It runs on Next.js 16, React 19 and Tailwind v4 with a full agent stack behind it — tRPC for type-safe APIs, Inngest for the background generation jobs, E2B cloud sandboxes to run the generated code, Prisma with Neon Postgres for data, and Clerk for authentication.",
    ],
    highlights: [
      {
        title: "Prompt box",
        detail:
          "A single “What would you like to build?” input with a keyboard shortcut to submit.",
      },
      {
        title: "Starter prompts",
        detail:
          "One-click ideas such as a Netflix clone, kanban board, file manager, store page or admin dashboard.",
      },
      {
        title: "Background generation",
        detail:
          "Builds run as Inngest jobs, so a long generation never blocks the interface.",
      },
      {
        title: "Sandboxed execution",
        detail: "Generated code runs in isolated E2B cloud sandboxes.",
      },
      {
        title: "Accounts",
        detail: "Sign-in and the user menu are handled by Clerk.",
      },
      {
        title: "Type-safe data layer",
        detail: "tRPC procedures over Prisma and a Neon Postgres database.",
      },
    ],
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
    rating: 4.7,
    ratingCount: 1,
    deliverables: ["Prompt-to-app Generation", "Sandboxed Execution", "Authentication"],
  },
  {
    id: 9,
    title: "FSF Mart",
    description:
      "Grocery storefront front end with category navigation, promotional carousels, countdown deals and product grids, built with Bootstrap 5 and jQuery.",
    overview: [
      "FSF Mart is the storefront front end for an online grocery and general store, covering fresh produce, bakery, meat and seafood, dairy, frozen food, drinks and more.",
      "The home page is dense by design: a category menu, a delivery-location selector, offer banners, promotional carousels, timed deals and several product grids. I built it with HTML5, CSS3 and Bootstrap 5, with jQuery and Slick for the sliders.",
    ],
    highlights: [
      {
        title: "Product cards",
        detail: "Each card shows price, stock status and an add button.",
      },
      {
        title: "Countdown deals",
        detail: "A “top savings” section runs against a live countdown timer.",
      },
      {
        title: "Promotional carousels",
        detail: "Offer banners and featured collections slide with Slick.",
      },
      {
        title: "Category navigation",
        detail:
          "A full category menu plus an icon grid for jumping straight into bakery items.",
      },
      {
        title: "Shopper header",
        detail:
          "Delivery-location selector, cart counter, wishlist link and an account menu.",
      },
    ],
    image: "/projects/ecommerce/1.png",
    category: "ecommerce",
    tags: ["HTML 5", "CSS 3", "Bootstrap 5", "Jquery", "Javascript"],
    liveLink: "https://fsf-mart-pk.netlify.app/",
    rating: 4.2,
    ratingCount: 15,
    deliverables: ["Storefront UI", "Product Grids", "Promotional Carousels"],
  },
  {
    id: 10,
    title: "Modern E-commerce",
    description:
      "Fashion storefront built with Next.js 14, TypeScript, Tailwind CSS and Shadcn UI, with a product catalogue, cart and validated checkout forms.",
    featured: true,
    overview: [
      "A modern storefront built with Next.js 14 and TypeScript — product discovery, cart flow, and checkout UX designed to feel fast and trustworthy. Shadcn UI and React Hook Form kept the interface consistent while making form validation reliable across the purchase journey.",
    ],
    highlights: [
      {
        title: "Storefront header",
        detail:
          "Product, inspiration and room navigation, with a live cart counter and an account menu.",
      },
      {
        title: "Campaign hero",
        detail:
          "A full-width promotional banner leads into an editorial grid of collection tiles.",
      },
      {
        title: "Validated forms",
        detail:
          "Forms across the purchase journey are built with React Hook Form for reliable validation.",
      },
      {
        title: "Consistent components",
        detail: "The interface is assembled from Shadcn UI components styled with Tailwind CSS.",
      },
    ],
    image: "/projects/ecommerce/2.png",
    category: "ecommerce",
    tags: [
      "Nextjs 14",
      "Tailwind Css",
      "React Hook Form",
      "Shadcn Ui",
      "Typescript",
    ],
    rating: 4.7,
    ratingCount: 6,
    deliverables: ["Product Catalog", "Checkout System", "Order Management"],
    timeline: "8 weeks",
    infrastructure: [
      {
        title: "Frontend",
        items: [
          { label: "Framework", value: "Next.js 14 + TypeScript" },
          { label: "UI", value: "Tailwind CSS + Shadcn UI" },
          { label: "Forms", value: "React Hook Form + validation" },
        ],
      },
      {
        title: "Commerce Flow",
        items: [
          { label: "Catalog", value: "Product listing & detail views" },
          { label: "Cart", value: "Persistent cart state & checkout UI" },
          { label: "Deployment", value: "Vercel + optimized static assets" },
        ],
      },
    ],
    clientFeedback: {
      quote:
        "The storefront feels modern and fast. Product pages are clean, checkout is straightforward, and the codebase is structured well enough for us to keep building on it.",
      name: "E-commerce Lead",
      role: "Operations Manager",
      company: "Retail Client",
    },
  },
  {
    id: 11,
    title: "Macrolight Trading",
    description:
      "Trading dashboard for building and back-testing options strategies, with a trade list, strategy builder and results views, built with React and Vite.",
    overview: [
      "Macrolight Trading is a dashboard for crafting options portfolio trading strategies designed to optimise returns and manage risk.",
      "It is a React single-page app built with Vite and styled with Tailwind CSS. The interface is organised around a sidebar — dashboard, trade list, templates, backtest status, results and a strategy builder — with a dark, data-dense layout.",
    ],
    highlights: [
      {
        title: "Trade list table",
        detail:
          "Markets with price change, sell, buy, high and low values, and a sparkline chart in every row.",
      },
      {
        title: "Sentiment bars",
        detail: "Each market shows its buying sentiment as a percentage progress bar.",
      },
      {
        title: "Sidebar navigation",
        detail:
          "Six workspaces: dashboard, trade list, templates, backtest status, results and strategy builder.",
      },
      {
        title: "Row actions and pagination",
        detail: "Inspect or delete a trade inline, and page through long lists.",
      },
      {
        title: "App header",
        detail:
          "Global search, a notification badge, a profile menu and community links.",
      },
    ],
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
    liveLink: "https://macrolight-trading-reactjs.vercel.app/",
    rating: 4.6,
    ratingCount: 9,
    deliverables: ["Dashboard UI", "Data Tables", "Strategy Builder Screens"],
  },
  {
    id: 13,
    title: "Slack Clone Real Time Communication",
    description:
      "Slack-style team chat with workspaces, channels, direct messages, threads and image sharing, built with Next.js, Convex and TypeScript.",
    featured: true,
    overview: [
      "A full-stack Slack-style communication app with real-time messaging, channels, and file sharing. Built on Next.js with Convex for live data, tRPC for type-safe APIs, and NextAuth for authentication — designed for responsive collaboration across devices.",
      "The layout follows the product it is modelled on: a workspace rail, a sidebar of channels and direct messages, and a message pane with a rich-text composer. Messages appear for everyone in the channel as they are sent.",
    ],
    highlights: [
      {
        title: "Workspaces, channels and DMs",
        detail:
          "A workspace switcher, a channel list and one-to-one direct messages in the sidebar.",
      },
      {
        title: "Threads",
        detail: "Reply to any message in a thread, with reply counts shown inline.",
      },
      {
        title: "Rich-text composer",
        detail:
          "Bold, italic, strikethrough, links, lists, quotes and code, plus emoji and image upload.",
      },
      {
        title: "Image messages",
        detail: "Share images in a channel alongside text and emoji.",
      },
      {
        title: "Sign-in options",
        detail: "Email sign-in alongside Google and GitHub.",
      },
      {
        title: "Workspace search",
        detail: "A search bar across the top of the workspace.",
      },
    ],
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
    liveLink: "https://dev-ar-communication-app.vercel.app/",
    rating: 4.9,
    ratingCount: 25,
    deliverables: ["Real-time Messaging", "File Sharing", "SEO Optimized"],
    timeline: "10 weeks",
    infrastructure: [
      {
        title: "Frontend",
        items: [
          { label: "Framework", value: "Next.js + TypeScript" },
          { label: "UI", value: "Tailwind CSS + shadcn/ui" },
          { label: "State", value: "Jotai for client state" },
        ],
      },
      {
        title: "Backend & Realtime",
        items: [
          { label: "Database", value: "Convex (real-time sync)" },
          { label: "API layer", value: "tRPC end-to-end types" },
          { label: "Auth", value: "NextAuth session handling" },
        ],
      },
      {
        title: "Infrastructure",
        items: [
          { label: "Hosting", value: "Vercel (frontend)" },
          { label: "Realtime backend", value: "Convex cloud" },
          { label: "File sharing", value: "Integrated upload & message flow" },
        ],
      },
    ],
    clientFeedback: {
      quote:
        "Real-time messaging works flawlessly and the UI feels familiar in the best way. Ahmed handled complex state and auth cleanly—the app was ready for demo and iteration quickly.",
      name: "Product Manager",
      role: "Technical PM",
      company: "Collaboration SaaS",
    },
  },
  {
    id: 15,
    title: "Ready App",
    description:
      "Website for a hiring platform that connects businesses with truck drivers, with job posting, candidate search and subscription pages.",
    overview: [
      "Ready App is a platform that lets businesses find and hire truck drivers. The site is built around two actions — posting a job and finding candidates.",
      "I built the front end with HTML5, CSS3 and Bootstrap 5, with jQuery and Slick for the interactive pieces.",
    ],
    highlights: [
      {
        title: "Task-led navigation",
        detail:
          "Post a job, subscription, find candidates and blogs lead the main navigation.",
      },
      {
        title: "Illustrated hero",
        detail:
          "A clear headline and a single “Post a job” button beside a custom illustration.",
      },
      {
        title: "Account bar",
        detail: "Help centre, sign-up and login links sit in a utility bar above the header.",
      },
    ],
    image: "/projects/websites/3.png",
    category: "websites",
    tags: ["HTML 5", "CSS 3", "Javascript", "Jquery", "Slick", "Bootstrap 5"],
    rating: 4.6,
    ratingCount: 9,
    deliverables: ["Responsive Design", "Interactive UI", "Fast Loading"],
  },
  {
    id: 16,
    title: "Tandym",
    description:
      "Marketing website for Tandym, a branded payments platform for e-commerce merchants, with product feature sections and a client logo carousel.",
    overview: [
      "Tandym is a branded payments platform: it lets e-commerce merchants offer their own payment method, cutting processing fees and rewarding repeat shoppers. Its line is “the best place for your brand is your customer's wallet”.",
      "The marketing site makes that case to merchants, leading with the numbers that matter to them — processing fees, customer lifetime value and NPS. I built the front end with HTML5, CSS3, JavaScript and Tailwind CSS, with Embla for the carousel.",
    ],
    highlights: [
      {
        title: "Layered hero",
        detail:
          "A serif headline beside a tilted product illustration with floating metric cards.",
      },
      {
        title: "Metric callouts",
        detail:
          "Processing fees, lifetime-value uplift and NPS are pulled out as headline numbers.",
      },
      {
        title: "Embla carousel",
        detail: "A swipeable, touch-friendly carousel built on Embla.",
      },
      {
        title: "Audience-led navigation",
        detail: "Separate paths for merchants and shoppers, with demo and sign-in buttons.",
      },
    ],
    image: "/projects/websites/4.png",
    category: "websites",
    tags: ["HTML 5", "CSS 3", "Javascript", "Tailwind CSS", "Embla"],
    liveLink: "https://www.bytandym.com/",
    rating: 4.6,
    ratingCount: 9,
    deliverables: ["Responsive Design", "Interactive UI", "SEO Optimized"],
  },
];

export const allProjects: Project[] = rawProjects.map(enrichProject);

export const featuredProjects: Project[] = allProjects.filter((p) => p.featured);

export const PROJECTS_PER_PAGE = 6;

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  if (category === "all") return allProjects;
  return allProjects.filter((project) => project.category === category);
}

export function getCategoryLabel(category: ProjectCategory): string {
  if (category === "all") return "All";
  return categoryLabels[category];
}

/** Narrows an untrusted query-string value to a known category. */
export function parseProjectCategory(value: string | undefined): ProjectCategory {
  return value !== undefined && Object.hasOwn(categoryLabels, value)
    ? (value as ProjectCategory)
    : "all";
}

/** "All" plus every category that has at least one project, with counts. */
export function getProjectCategories(): {
  category: ProjectCategory;
  label: string;
  count: number;
}[] {
  const categories = Object.keys(categoryLabels) as ProjectCategory[];

  return (["all", ...categories] as ProjectCategory[])
    .map((category) => ({
      category,
      label: getCategoryLabel(category),
      count: getProjectsByCategory(category).length,
    }))
    .filter(({ count }) => count > 0);
}

export function getPaginatedProjects({
  page = 1,
  category = "all",
  perPage = PROJECTS_PER_PAGE,
}: {
  page?: number;
  category?: ProjectCategory;
  perPage?: number;
} = {}) {
  const matches = getProjectsByCategory(category);
  const totalProjects = matches.length;
  const totalPages = Math.max(1, Math.ceil(totalProjects / perPage));
  const currentPage = Math.min(Math.max(1, page), totalPages);
  const start = (currentPage - 1) * perPage;

  return {
    projects: matches.slice(start, start + perPage),
    currentPage,
    totalPages,
    totalProjects,
  };
}

export function getProjectsHref({
  page = 1,
  category = "all",
}: {
  page?: number;
  category?: ProjectCategory;
} = {}): string {
  const params = new URLSearchParams();
  if (category !== "all") params.set("category", category);
  if (page > 1) params.set("page", String(page));

  const query = params.toString();
  return query ? `/projects?${query}` : "/projects";
}

export function getProjectBySlug(slug: string): Project | undefined {
  return allProjects.find((project) => project.slug === slug);
}

export function getAdjacentProjects(slug: string): {
  previous?: Project;
  next?: Project;
} {
  const index = allProjects.findIndex((project) => project.slug === slug);
  if (index === -1) return {};

  return {
    previous: allProjects[index - 1],
    next: allProjects[index + 1],
  };
}

/** Other projects worth reading next: same category first, then the rest. */
export function getRelatedProjects(slug: string, limit = 3): Project[] {
  const current = getProjectBySlug(slug);
  if (!current) return [];

  const others = allProjects.filter((project) => project.slug !== slug);
  return [
    ...others.filter((project) => project.category === current.category),
    ...others.filter((project) => project.category !== current.category),
  ].slice(0, limit);
}

export function getProjectSlugs(): string[] {
  return allProjects.map((project) => project.slug);
}
