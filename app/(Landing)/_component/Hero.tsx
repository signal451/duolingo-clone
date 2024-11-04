"use client"

import Image from "next/image"
import bear from "../../_assets/bears.png"
import { Button } from "@/components/ui/button"
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
        <Link href={"/learn"}>
          <Button variant={"super"}> Үргэлжлүүлэх </Button>
        </Link>
      </div>
    </div>
  )
}