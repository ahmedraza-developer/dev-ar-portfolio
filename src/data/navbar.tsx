import { Icons } from "@/components/Icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/projects", icon: NotebookIcon, label: "Projects" },
  ],
  contact: {
    email: "leadzahmed@gmail.com",
    tel: "+923187380601",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Ahmed-Crystallite",
        icon: Icons.github,
        external: "_blank",

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://pk.linkedin.com/in/ahmed-raza-96027a250",
        icon: Icons.linkedin,
        external: "_blank",

        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:leadzahmed@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
      Whatsapp: {
        name: "Whatsapp",
        url: "https://wa.me/923187380601",
        icon: Icons.whatsapp,
        external: "_blank",

        navbar: true,
      },
    },
  },
} as const;
