"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"


type Props = {
  label: string,
  icon: string,
  href: string,
}

export const SidebarItem = ({ label, icon, href }: Props) => {

  const pathname = usePathname();


  return (
    <Button variant={pathname === href ? "sidebarOutline" : "sidebar"}
      className="justify-start h-[52px]" asChild>
      <Link href={href}> {label} </Link>
    </Button>
  )
}