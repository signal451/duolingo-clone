import { cn } from "@/lib/utils"
import Image from "next/image"
import { SidebarItem } from "./sidebar-item"

type Props = {
  className?: string
}

export const SideBar = ({ className }: Props) => {
  return (
    <div className={cn("h-full w-[256px] lg:fixed left-0 top-0 px-4 border-r flex-col", className)}>
      <div className="pt-8 pl-4 pb-7 flex itens-center gap-x-1">
        <Image
          src={"/logo.png"}
          width="0"
          height="0"
          sizes="100vm"
          className="w-12 h-12"
          alt="logo" />
        <div className="flex flex-col leading-none pt-3">
          <span className="font-black"> Lingua гадаад</span>
          <span className="font-black"> хэл сурах амархан</span>

        </div>
      </div>
      <div className="flex flex-col gap-y-2 flex-1">
        <SidebarItem label="Learn" href="/learn" />
      </div>
    </div>
  )
}