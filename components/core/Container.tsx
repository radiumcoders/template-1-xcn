import { cn } from "@/lib/utils"

export default function Container({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn("mx-auto flex min-h-svh w-full max-w-6xl", className)}
    >
      {children}
    </div>
  )
}
