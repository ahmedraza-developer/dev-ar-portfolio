import "./globals.css";
import { Analytics } from '@vercel/analytics/next';
import { primary, secondary } from "../configs/font";
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/Footer";
export const metadata = {
  title: "Ahmed Raza Portfolio – Web Design, Development & Creative Solutions",
  description: "Explore Ahmed Raza's portfolio showcasing innovative web design, development expertise, and creative digital solutions. Discover personalized and professional work that delivers results.",
};
// Export RootLayout
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${primary.variable} ${secondary.variable}`}>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;