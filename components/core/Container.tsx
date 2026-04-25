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
      className={cn("mx-auto flex h-fit w-full max-w-4xl", className)}
    >
      {children}
    </div>
  )
}
