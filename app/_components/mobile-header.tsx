import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { SideBar } from "@/app/_components/sidebar"


export const MobileHeader = () => {
  return (
    <nav className="lg:hidden px-6 h-[50px] flex items-center  border-b fixed top-0 w-full z-50">
      <Sheet>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent className="p-0 z-[100]" side={"left"}>
          <SheetHeader>
            <SheetTitle></SheetTitle>
          </SheetHeader>
          <SideBar className="w-full" />
        </SheetContent>
      </Sheet>
    </nav>
  )
}