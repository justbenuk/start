'use client'
import { cn } from "@/lib/utils";
import { DesktopMenuProps } from "@/types/menu-types";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DesktopMenuItem({ item }: DesktopMenuProps) {
  const pathname = usePathname()
  const active = pathname === item.href && 'text-indigo-500'
  return (
    <Link href={item.href} className={cn('', active)}>{item.name}</Link>
  )
}

