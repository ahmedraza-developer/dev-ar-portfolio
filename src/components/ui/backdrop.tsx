import { cn } from "@/lib/utils";

/**
 * Page-top decoration: a dot grid that fades out, under one soft accent light.
 * Absolutely positioned — the parent needs `relative isolate`.
 */
export function Backdrop({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-x-0 top-0 -z-10 h-[44rem] overflow-hidden",
        className,
      )}
    >
      <div className="absolute inset-0 bg-dots mask-[radial-gradient(ellipse_65%_60%_at_50%_0%,black_10%,transparent_75%)]" />
      <div className="absolute -top-72 left-1/2 h-[32rem] w-[min(60rem,120%)] -translate-x-1/2 rounded-full bg-brand/10 blur-[120px] dark:bg-brand/[0.07]" />
    </div>
  );
}
