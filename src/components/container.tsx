import { cn } from "@/lib/utils";
import { ContainerProps } from "@/types";

export default function WideContainer({ children, className }: ContainerProps) {
  return (
    <div className={cn('mx-auto container px-6', className)}>{children}</div >
  )
}

