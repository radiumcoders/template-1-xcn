import { cn } from "@/lib/utils"

export function VerticalScales({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "h-full w-10 border-x border-stone-200 bg-[repeating-linear-gradient(315deg,var(--pattern)_0,var(--pattern)_1px,transparent_1px,transparent_50%)] bg-size-[10px_10px] dark:border-stone-900",
        className
      )}
    />
  )
}
export function HorizontalScales({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "h-10 w-full border-y border-stone-200 bg-[repeating-linear-gradient(315deg,var(--pattern)_0,var(--pattern)_1px,transparent_1px,transparent_50%)] bg-size-[10px_10px] dark:border-stone-900",
        className
      )}
    />
  )
}
export function FadingScales({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "h-10 w-full bg-[repeating-linear-gradient(to_bottom,var(--pattern)_0,var(--pattern)_1px,transparent_1px,transparent_0.4rem)] mask-b-from-20%",
        className
      )}
    />
  )
}

export function HeroDecoration({ className }: {className?: string }) {
  return (
    <div className={cn("h-3/4 bg-[repeating-linear-gradient(90deg,var(--pattern)_0,var(--pattern)_1px,var(--pattern)_1px,transparent_1.6rem)] mask-t-from-0 mask-l-from-50% mask-b-from-90% w-full", className)} />
  )
}