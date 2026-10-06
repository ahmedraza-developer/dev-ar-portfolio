import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export function Tag({ className, ...props }: ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-muted/50 px-2.5 py-0.5 text-xs leading-5 text-muted-foreground",
        className,
      )}
      {...props}
    />
  );
}
