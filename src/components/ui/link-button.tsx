import type { ComponentProps } from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const linkButtonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-full text-sm font-medium whitespace-nowrap transition-[color,background-color,border-color,transform,filter] duration-300 ease-out outline-none focus-visible:ring-3 focus-visible:ring-ring/50 active:scale-[0.98] [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: "bg-brand text-brand-foreground hover:brightness-95",
        secondary: "bg-foreground text-background hover:bg-foreground/85",
        outline:
          "border border-border bg-card/60 text-foreground backdrop-blur-sm hover:border-foreground/30 hover:bg-card",
        ghost: "text-muted-foreground hover:bg-muted hover:text-foreground",
      },
      size: {
        default: "h-12 px-6",
        sm: "h-9 px-4",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

type LinkButtonProps = Omit<ComponentProps<"a">, "href"> &
  VariantProps<typeof linkButtonVariants> & {
    href: string;
    /** Open in a new tab — use for off-site links and downloadable files. */
    newTab?: boolean;
  };

export function LinkButton({
  href,
  newTab = false,
  variant,
  size,
  className,
  ...props
}: LinkButtonProps) {
  const classes = cn(linkButtonVariants({ variant, size }), className);

  if (href.startsWith("/") && !newTab) {
    return <Link href={href} className={classes} {...props} />;
  }

  return (
    <a
      href={href}
      className={classes}
      {...(newTab && { target: "_blank", rel: "noopener noreferrer" })}
      {...props}
    />
  );
}
