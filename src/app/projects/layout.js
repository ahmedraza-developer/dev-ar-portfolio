import { Analytics } from "@vercel/analytics/next";

// Meta Data
export const metadata = {
    // Title & Descriptions
    title: "Projects – Showcasing Creative Web Design and Development",
    description: "Explore a collection of innovative web design and development projects that demonstrate creative solutions, technical expertise, and impactful results for diverse clients.",
}

export default function RootLayout({ children }) {
    return (
        <>
            {children}
            <Analytics />
        </>
    );
}