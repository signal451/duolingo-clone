import { Button } from "@/components/ui/button"
import { courses } from "@/db/schema"
import Image from "next/image"
import Link from "next/link"

type Props = {
  activeCourse: typeof courses.$inferSelect,
  hearts: number,
  points: number,
  hasActiveSubscription: boolean
}


export const UserProgress = ({ activeCourse, points, hearts }: Props) => {
  return (
    <div className="flex items-center justify-between gap-x-2 w-full">
      <Link href="/courses">
        <Button variant={"ghost"}>
          <Image
            src={activeCourse.imageSrc}
            alt={activeCourse.title}
            width={32}
            height={32}
          />
        </Button>
      </Link>
      <Link href={"/shop"}>
        <Button variant={"ghost"} className="text-orange-500">
          <Image src={"/points.svg"} height={28} width={28} alt="points" />
          {points}
        </Button>
      </Link>
      <Link href={"/shop"}>
        <Button variant={"ghost"} className="text-rose-500">
          <Image src={"/heart.svg"} height={28} width={28} alt="points" />
          {hearts}
        </Button>
      </Link>
    </div>
  )
}