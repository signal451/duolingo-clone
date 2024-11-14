import { FeedWrapper } from "@/app/_components/feed-wrapper";
import { StickyWrapper } from "@/app/_components/sticky-wrapper";
import { Header } from "./_components/Header";
import { UserProgress } from "@/app/_components/user-progress";
import { getUserProgress } from "@/db/queries";
import { redirect } from "next/navigation";


const LearnPage = async () => {

  const userProgressData = getUserProgress()

  const [userProgress] = await Promise.all([userProgressData]);

  if (!userProgress || !userProgress.activeCourse) {
    redirect("/courses")
  }

  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={{ title: "English", imageSrc: "/UK.svg" }}
          hearts={5}
          points={100}
          hasActiveSubscription={false} />
      </StickyWrapper>
      <FeedWrapper>
        <Header title="English" />
        <div className="space-y-4">
        </div>
      </FeedWrapper>
    </div>
  )
}


export default LearnPage