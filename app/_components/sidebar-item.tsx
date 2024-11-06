"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"

type Props = {
  label: string,
  icon: string,
  href: string,
}

export const SidebarItem = ({ label, icon, href }: Props) => {

  const pathname = usePathname();

  return (
    <Button variant={pathname === href ? "sidebarOutline" : "sidebar"}
      className="justify-start h-[52px] text-[12px]" asChild>
      <Link href={href}>
        <Image
          src={icon}
          alt={label}
          className="mr-5"
          height={32}
          width={32}
        />
        <p className="font-black"> {label} </p>
      </Link>
    </Button>
  )
}