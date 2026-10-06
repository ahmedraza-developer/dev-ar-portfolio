import { ArrowUpRight, Clock, Mail, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import ContactForm from "@/components/sections/form";
import { bentoSurface } from "@/components/ui/bento";
import { Em, Eyebrow, Section } from "@/components/ui/section";
import { site, socials } from "@/data/site";
import { cn } from "@/lib/utils";

const whatsapp = socials.find((social) => social.icon === "whatsapp");

const channels = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    icon: Mail,
    external: false,
  },
  ...(whatsapp
    ? [
        {
          label: "WhatsApp",
          value: site.phone,
          href: whatsapp.href,
          icon: MessageCircle,
          external: true,
        },
      ]
    : []),
];

export default function Contact() {
  return (
    <Section id="contact">
      <Reveal
        y={40}
        className={cn(
          bentoSurface,
          "relative isolate grid grid-cols-1 gap-12 overflow-hidden rounded-[2rem] p-5 sm:p-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16 lg:p-14",
        )}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-dots mask-[radial-gradient(ellipse_60%_70%_at_0%_0%,black,transparent_70%)]"
        />

        <div className="flex flex-col">
          <Eyebrow index="05">Contact</Eyebrow>
          <h2 className="mt-5 text-4xl leading-[1.02] font-medium tracking-[-0.035em] text-balance sm:text-5xl lg:text-6xl">
            Let&apos;s bring your vision <Em>to life.</Em>
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
            Have a project in mind? Whether you&apos;re starting something new
            or need support with an existing idea, share a few key details and
            I&apos;ll take it from there.
          </p>

          <ul className="mt-10 space-y-2 lg:mt-auto lg:pt-10">
            {channels.map(({ label, value, href, icon: Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(external && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                  className="group flex items-center gap-4 rounded-2xl border border-border bg-background/60 p-3 pr-5 transition-colors duration-300 outline-none hover:border-foreground/30 focus-visible:ring-3 focus-visible:ring-ring/50"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-muted transition-colors duration-300 group-hover:bg-brand group-hover:text-brand-foreground">
                    <Icon className="size-[18px]" aria-hidden />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                      {label}
                    </span>
                    <span className="mt-0.5 block truncate text-sm font-medium">
                      {value}
                    </span>
                  </span>
                  <ArrowUpRight
                    className="size-4 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden
                  />
                </a>
              </li>
            ))}
          </ul>

          <p className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="size-4 shrink-0" aria-hidden />
            I aim to respond within 1–2 business days.
          </p>
        </div>

        <div className="rounded-3xl border border-border bg-background/60 p-4 sm:p-7">
          <ContactForm />
        </div>
      </Reveal>
    </Section>
  );
}
