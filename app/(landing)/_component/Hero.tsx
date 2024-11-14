"use client"

import Image from "next/image"
import bear from "../../_assets/bears.png"
import { Button } from "@/components/ui/button"
import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs"
import { Loader } from "lucide-react"
import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react"
import Link from "next/link"


export default function Hero() {
  return (
    <div className="">
      <div className="flex flex-col justify-center items-center gap-y-3">
        <Image
          src={bear}
          width="0"
          height="0"
          sizes="100vw"
          alt="bear"
          className="w-48 h-36 animate-bounce-slow"
          priority />
        <p className="text-lg text-center font-semibold text-neutral-700 mx-3 "> Бүх насны хүмүүст зориулсан гадаад хэлний сургалтын платформ </p>
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedOut>
            <SignInButton mode="modal">
              <Button variant={"super"}> Бүртгэл үүсгэх</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <Button variant={"super"} asChild>
              <Link href={"/learn"}>
                Үргэлжлүүлэх
              </Link>
            </Button>
          </SignedIn>
        </ClerkLoaded>
      </div>
    </div>
  )
}