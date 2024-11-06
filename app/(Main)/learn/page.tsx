import { FeedWrapper } from "@/app/_components/feed-wrapper";
import { StickyWrapper } from "@/app/_components/sticky-wrapper";
import { Header } from "./_components/Header";
import { UserProgress } from "@/app/_components/user-progress";


export default function LearnPage() {
  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={{ title: "Englishg", imageSrc: "/UK.svg" }}
          hearts={5}
          points={100}
          hasActiveSubscription={false} />
      </StickyWrapper>
      <FeedWrapper>
        <Header title="English" />
        <div className="space-y-4">
          <div className="h-[700px] bg-blue-500" />
          <div className="h-[700px] bg-blue-500" />
        </div>
      </FeedWrapper>
    </div>
  )
}