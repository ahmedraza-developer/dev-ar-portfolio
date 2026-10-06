import { Icons } from "@/components/ui/icons";
import { socials } from "@/data/site";
import { cn } from "@/lib/utils";

const tones = {
  default:
    "border-border text-muted-foreground hover:border-foreground/30 hover:text-foreground",
  /** For use over imagery or a dark scrim. */
  overlay:
    "border-white/20 bg-black/20 text-white/85 backdrop-blur-md hover:border-white/50 hover:text-white",
};

type SocialLinksProps = {
  tone?: keyof typeof tones;
  className?: string;
};

export function SocialLinks({ tone = "default", className }: SocialLinksProps) {
  return (
    <ul className={cn("flex items-center gap-2", className)}>
      {socials.map((social) => {
        const Icon = Icons[social.icon];

        return (
          <li key={social.label}>
            <a
              href={social.href}
              aria-label={social.label}
              title={social.label}
              {...(social.external && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
              className={cn(
                "grid size-10 place-items-center rounded-full border transition-[color,border-color,transform] duration-300 ease-out outline-none hover:-translate-y-0.5 focus-visible:ring-3 focus-visible:ring-ring/50",
                tones[tone],
              )}
            >
              <Icon className="size-4" aria-hidden />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
