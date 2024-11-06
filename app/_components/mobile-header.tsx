import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { SideBar } from "@/app/_components/sidebar"


export const MobileHeader = () => {
  return (
    <nav className="lg:hidden px-6 h-[50px] flex items-center  border-b fixed top-0 w-full z-50 bg-indigo-500">
      <Sheet>
        <SheetTrigger>
          <Menu className="text-white" />
        </SheetTrigger>
        <SheetContent className="p-0 z-[100]" side={"left"}>
          <SheetHeader>
            <SheetTitle></SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>
          <SideBar className="w-full" />
        </SheetContent>
      </Sheet>
    </nav>
  )
}