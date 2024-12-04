import { getUserProgress } from "@/db/queries"
import { redirect } from "next/navigation"
import { StickyWrapper } from "../../_components/sticky-wrapper"
import { UserProgress } from "../../_components/user-progress"
import { FeedWrapper } from "../../_components/feed-wrapper"
import Image from "next/image"
import { QUESTS } from "@/constants"
import { Progress } from "@/components/ui/progress"

const QuestsPage = async () => {

  const userProgressData = getUserProgress()

  const [userProgress] = await Promise.all([userProgressData])


  if (!userProgress || !userProgress.activeCourse) redirect("/courses")


  return (
    <div className="flex flex-row-reverse gap-[48px] px-8">
      <StickyWrapper>
        <UserProgress
          activeCourse={userProgress.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={false}
        />
      </StickyWrapper>

      <FeedWrapper>
        <div className="flex w-full flex-col items-center">
          {/* <Image src={"/quests.svg"} alt="Quests" height={90} width={90} />
          <h1 className="my-6 text-center text-2xl font-bold text-neutral-800">
            Даалгавар
          </h1>
          <p className="mb-6 text-center text-lg text-muted-foreground">
            Complete quests by earning points.
          </p> */}

        </div>
      </FeedWrapper>

    </div>
  )
}

export default QuestsPage