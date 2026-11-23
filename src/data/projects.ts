export type ProjectCategory =
  | "all"
  | "landingPages"
  | "websites"
  | "ai"
  | "ecommerce"
  | "crm"
  | "communication"
  | "mobile";

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
  mobile: "Mobile App",
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
      "The same store also has a native iOS and Android app, built on a versioned mobile API from this backend (see Velamora Mobile App).",
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
    id: 19,
    title: "Velamora Mobile App",
    description:
      "The native iOS and Android app for the Velamora fashion store: editorial browsing, a three-tap path from shop to bag, checkout, accounts and order tracking.",
    featured: true,
    role: "Mobile Engineer (design, app, mobile API)",
    overview: [
      "Velamora's shoppers spend most of their time on their phones, so the store needed an app that feels as considered as the website rather than a wrapped web view. I designed and built a native app for iOS and Android with Expo and React Native.",
      "The app covers the whole store: an editorial home with a parallax hero, curated collections and a trending list, a shop with search and filters, product pages with colour-aware galleries and size selection, a wishlist, a bag and checkout, accounts with email verification, and order tracking with a delivery timeline.",
      "It talks to the same backend as the website through a versioned mobile API (v1) that I added to the store, with shared pricing and order logic, so prices, stock and discounts always match the web.",
    ],
    highlights: [
      {
        title: "Native tab bar on each platform",
        detail:
          "System tabs with Liquid Glass on iOS 26 and Material on Android, with live badge counts for the bag and the wishlist.",
      },
      {
        title: "Browse to bag in three taps",
        detail:
          "Product, size and add to bag, with haptic feedback along the way.",
      },
      {
        title: "One backend, two storefronts",
        detail:
          "A versioned API for catalogue, auth, wishlist, checkout and orders, sharing pricing and order rules with the website.",
      },
      {
        title: "Secure sign-in",
        detail:
          "Email and one-time-code verification, with the session token kept in the device's secure storage.",
      },
      {
        title: "Order tracking",
        detail:
          "Every order opens with its timeline from confirmed to delivered, and an order can also be tracked by its number.",
      },
      {
        title: "Fast, cached data",
        detail:
          "Server data is cached and refreshed in the background, so screens open instantly and stay in sync.",
      },
    ],
    image: "/projects/velamora-app/1.png",
    gallery: [
      "/projects/velamora-app/1.png",
      "/projects/velamora-app/2.png",
      "/projects/velamora-app/3.png",
      "/projects/velamora-app/4.png",
      "/projects/velamora-app/5.png",
    ],
    category: "mobile",
    tags: ["Expo", "React Native", "Expo Router", "TypeScript", "TanStack Query", "Next.js API"],
    deliverables: ["iOS & Android App", "App Design", "Mobile API", "Checkout & Order Tracking"],
    infrastructure: [
      {
        title: "App",
        items: [
          { label: "Framework", value: "Expo SDK 58, React Native" },
          { label: "Navigation", value: "Expo Router with native tabs" },
          { label: "Data", value: "TanStack Query, secure storage" },
        ],
      },
      {
        title: "Backend",
        items: [
          { label: "API", value: "Versioned v1 API on the Next.js store" },
          { label: "Database", value: "Neon Postgres + Drizzle ORM" },
          { label: "Shared logic", value: "Pricing, cart and order rules" },
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
    id: 20,
    title: "Wanderlux",
    description:
      "A premium travel agency website for visas, flights, hotels and car rental, with a working search for each service and scroll-driven GSAP animation.",
    featured: true,
    role: "Front-End Engineer (design and build)",
    overview: [
      "Wanderlux is a travel agency website built to feel like a premium travel brand while still doing real work: every one of its four services (visa, flights, hotels and car rental) has a search that validates input, shows loading states and returns results.",
      "The results are mock data that behaves like real data. Flight times and fares come from real airport coordinates, hotel and car prices scale with each city's cost index, and a seeded generator keeps results stable for the same search. Every service and destination has its own prerendered page with its own metadata.",
      "It is built on Next.js 16 and React 19 with Tailwind CSS v4 and GSAP. Sections are Server Components by default, only the interactive parts run on the client, and every animation respects reduced-motion settings.",
    ],
    highlights: [
      {
        title: "Search for all four services",
        detail:
          "One tabbed panel with field validation (date order, same-city and own-country checks), loading states and animated result cards. A new service needs only one config module.",
      },
      {
        title: "Animated flight routes",
        detail:
          "Flight results open with a boarding-pass route card: the arc draws itself and a plane flies along it, with distance and time from the route data.",
      },
      {
        title: "Destination and service pages",
        detail:
          "Prerendered pages with fares, stays and visa rules, opened from their cards with a shared-element view transition.",
      },
      {
        title: "Scroll-driven storytelling",
        detail:
          "Split-text headlines, a pinned horizontal process section, a marquee that follows scroll speed, counters and a magnetic call to action.",
      },
      {
        title: "Accessible by default",
        detail:
          "Semantic landmarks, ARIA tabs, keyboard-friendly controls, descriptive alt text on every image and full reduced-motion support.",
      },
      {
        title: "Responsive to 320px",
        detail:
          "Every section, including the search and the horizontal process, is designed down to small phones.",
      },
    ],
    image: "/projects/wanderlux/1.png",
    gallery: [
      "/projects/wanderlux/1.png",
      "/projects/wanderlux/2.png",
      "/projects/wanderlux/3.png",
      "/projects/wanderlux/4.png",
      "/projects/wanderlux/5.png",
    ],
    category: "websites",
    tags: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "GSAP"],
    liveLink: "https://travel-agency-website-ochre.vercel.app/",
    deliverables: ["Website Design", "Search Experience", "GSAP Animation", "Static Detail Pages"],
    infrastructure: [
      {
        title: "Frontend",
        items: [
          { label: "Framework", value: "Next.js 16, React 19, React Compiler" },
          { label: "Styling", value: "Tailwind CSS v4 with design tokens" },
          { label: "Animation", value: "GSAP: ScrollTrigger, SplitText, DrawSVG, MotionPath" },
        ],
      },
      {
        title: "Experience & Delivery",
        items: [
          { label: "Rendering", value: "Static generation, View Transitions" },
          { label: "Accessibility", value: "ARIA tabs, reduced motion" },
          { label: "Hosting", value: "Vercel" },
        ],
      },
    ],
  },
  {
    id: 21,
    title: "Prima Energie",
    description:
      "Corporate website for an engineering and construction company in Pakistan and Saudi Arabia, in English, Arabic and Chinese. I took it over for fixes and updates through to launch.",
    role: "Front-End Developer (fixes and updates)",
    overview: [
      "Prima Energie is an engineering and construction company working across Pakistan and Saudi Arabia on civil works, infrastructure, roads, power and manpower. Its website already existed in English, Arabic and Chinese when it came to me for fixes and updates before launch.",
      "I rebuilt the projects section around a single data file with photo galleries and a full-screen viewer, added a trust section with animated figures, a mobile action bar to call or book a meeting for the visitor's country, scroll reveals and a back-to-top button, and moved contact details into one site config.",
      "I also prepared the site for its hosting, including routing so that direct visits to inner pages load correctly.",
    ],
    highlights: [
      {
        title: "Data-driven project gallery",
        detail:
          "Every project, with its client, scope, features and photos in English and Arabic, comes from one data file and opens in a gallery with a full-screen view.",
      },
      {
        title: "Mobile action bar",
        detail:
          "On phones, a fixed bar lets visitors call or book in one tap, using the Pakistan or Saudi number for the selected country.",
      },
      {
        title: "Trust section",
        detail:
          "Years of experience, team size, safety training and certifications, with figures that count up as they come into view.",
      },
      {
        title: "Three languages",
        detail:
          "New sections follow the site's English, Arabic and Chinese content, including right-to-left layout for Arabic.",
      },
    ],
    image: "/projects/prima-energie/1.png",
    gallery: [
      "/projects/prima-energie/1.png",
      "/projects/prima-energie/2.png",
      "/projects/prima-energie/3.png",
      "/projects/prima-energie/4.png",
    ],
    category: "websites",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui"],
    liveLink: "https://primaenergie.com.pk/",
    deliverables: ["Bug Fixes", "New Sections", "Project Gallery", "Launch Support"],
  },
  {
    id: 22,
    title: "Book Writing Cube",
    description:
      "A set of service landing pages for a book writing and publishing company, each built around a free-quote form and trust logos from major publishers.",
    overview: [
      "Book Writing Cube offers writing, illustration, publishing, audiobook and marketing services for authors. Each service runs its own paid campaigns, so each one needed a landing page of its own.",
      "I built the landing pages for children's book illustration, book publishing, Amazon publishing, audiobook narration, bestseller campaigns and book marketing. They share one design system, and every page leads with a quote form above the fold.",
    ],
    highlights: [
      {
        title: "One page per service",
        detail:
          "Six landing pages, each with its own headline, offer and imagery, matched to the campaign that sends traffic to it.",
      },
      {
        title: "Quote form above the fold",
        detail:
          "A short free-quote form sits beside the headline on every page, with phone and chat calls to action repeated further down.",
      },
      {
        title: "Trust built in",
        detail:
          "Publisher and press logos, review badges and book carousels sit close to the form to support the decision.",
      },
      {
        title: "Shared design system",
        detail:
          "Header, form, logo strip and carousels are shared, so a new service page is quick to build and stays on brand.",
      },
    ],
    image: "/projects/book-writing-cube/1.png",
    gallery: [
      "/projects/book-writing-cube/1.png",
      "/projects/book-writing-cube/2.png",
      "/projects/book-writing-cube/3.png",
      "/projects/landing-pages/6.png",
      "/projects/landing-pages/7.png",
      "/projects/landing-pages/8.png",
      "/projects/landing-pages/9.png",
      "/projects/landing-pages/10.png",
      "/projects/landing-pages/11.png",
    ],
    category: "landingPages",
    tags: ["HTML 5", "CSS 3", "Bootstrap 4", "Jquery", "Slick"],
    liveLink: "https://www.bookwritingcube.us/",
    deliverables: ["Six Landing Pages", "Quote Forms", "Responsive Design"],
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
    image: "/projects/children-book/1.png",
    gallery: [
      "/projects/children-book/1.png",
      "/projects/children-book/2.png",
      "/projects/children-book/3.png",
    ],
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
    image: "/projects/ios-app/1.png",
    gallery: [
      "/projects/ios-app/1.png",
      "/projects/ios-app/2.png",
      "/projects/ios-app/3.png",
    ],
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
    image: "/projects/seo-services/1.png",
    gallery: [
      "/projects/seo-services/1.png",
      "/projects/seo-services/2.png",
      "/projects/seo-services/3.png",
    ],
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
    image: "/projects/crystallite/1.png",
    gallery: [
      "/projects/crystallite/1.png",
    ],
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
    image: "/projects/infinity-animations/1.png",
    gallery: [
      "/projects/infinity-animations/1.png",
      "/projects/infinity-animations/2.png",
      "/projects/infinity-animations/3.png",
    ],
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
    image: "/projects/bestselling-publisher/1.png",
    gallery: [
      "/projects/bestselling-publisher/1.png",
      "/projects/bestselling-publisher/2.png",
      "/projects/bestselling-publisher/3.png",
      "/projects/landing-pages/12.png",
      "/projects/landing-pages/15.png",
      "/projects/landing-pages/16.png",
    ],
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
    image: "/projects/baby-siri/1.png",
    gallery: [
      "/projects/baby-siri/1.png",
    ],
    category: "ai",
    tags: ["HTML5", "CSS3", "Javascript ES6", "Web Speech API"],
    liveLink: "https://baby-siri.netlify.app/",
    rating: 4.6,
    ratingCount: 11,
    deliverables: ["Voice Commands", "Spoken Responses", "Static, No-backend Build"],
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
    image: "/projects/fsf-mart/1.png",
    gallery: [
      "/projects/fsf-mart/1.png",
      "/projects/fsf-mart/2.png",
      "/projects/fsf-mart/3.png",
    ],
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
    image: "/projects/shopland/1.png",
    gallery: [
      "/projects/shopland/1.png",
      "/projects/shopland/2.png",
    ],
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
    image: "/projects/macrolight/1.png",
    gallery: [
      "/projects/macrolight/1.png",
      "/projects/macrolight/2.png",
    ],
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
    image: "/projects/slack-clone/1.png",
    gallery: [
      "/projects/slack-clone/1.png",
      "/projects/slack-clone/2.png",
      "/projects/slack-clone/3.png",
    ],
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
    image: "/projects/ready-app/1.png",
    gallery: [
      "/projects/ready-app/1.png",
      "/projects/ready-app/2.png",
      "/projects/ready-app/3.png",
    ],
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
