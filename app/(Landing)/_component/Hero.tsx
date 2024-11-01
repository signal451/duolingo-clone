"use client"

import Image from "next/image"
import bear from "../../_assets/bears.png"
import { Button } from "@/components/ui/button"


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
        <p className="text-lg text-center font-semibold text-neutral-700 mx-3"> Learn, practice, and master new language with Lingua </p>
        <Button variant={"super"}> Get started </Button>
      </div>
    </div>
  )
}