import { cn } from "@/lib/utils"
import Image from "next/image"
import { SidebarItem } from "./sidebar-item"

// icons
import home from "@/app/_assets/icons/home.svg"
import quest from "@/app/_assets/icons/quests.svg"
import leaderboard from "@/app/_assets/icons/leaderboard.svg"
import sound from "@/app/_assets/icons/sounds.svg"
import shop from "@/app/_assets/icons/shop.svg"

type Props = {
  className?: string
}


export const SideBar = ({ className }: Props) => {
  return (
    <div className={cn("h-full w-[256px] lg:fixed left-0 top-0 px-4 border-r flex-col", className)}>
      <div className="pt-8 pl-3 pb-7 flex itens-center gap-x-1">
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
        <SidebarItem label="learn" href="/learn" icon={home} />
        <SidebarItem label="sounds" href="/sound" icon={sound} />
        <SidebarItem label="quests" href="/quests" icon={quest} />
        <SidebarItem label="leaderboard" href="/leaderboard" icon={leaderboard} />
        <SidebarItem label="shop" href="/shop" icon={shop} />
      </div>
    </div>
  )
}