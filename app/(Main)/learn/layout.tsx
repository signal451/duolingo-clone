import { MobileHeader } from "@/app/_components/mobile-header"
import { SideBar } from "@/app/_components/sidebar"
import React from "react"

const HomePageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <MobileHeader />
      <SideBar className="hidden lg:flex" />
      <main className="lg:pl-[256px] h-full pt-[50px] lg:pt-0">
        <div className=" h-full">
          {children}
        </div>
      </main>
    </>
  )
}


export default HomePageLayout