import { FeedWrapper } from "@/app/_components/feed-wrapper";
import { StickyWrapper } from "@/app/_components/sticky-wrapper";
import { Header } from "./_components/header";
import { UserProgress } from "@/app/_components/user-progress";
import { getCourseProgress, getLessonPercentage, getUnits, getUserProgress } from "@/db/queries";
import { redirect } from "next/navigation";
import { Unit } from "./_components/unit";


const LearnPage = async () => {

  const userProgressData = getUserProgress()
  const courseProgressData = getCourseProgress()
  const unitsData = getUnits();
  const lessonPercentageData = getLessonPercentage()

  const [userProgress, units, courseProgress, lessonPercentage] = await Promise.all([userProgressData, unitsData, courseProgressData, lessonPercentageData]);

  if (!userProgress || !userProgress.activeCourse) {
    redirect("/courses")
  }

  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={{ id: userProgress.activeCourse.id, title: userProgress.activeCourse.title, imageSrc: userProgress.activeCourse.imageSrc }}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={false} />
      </StickyWrapper>
      <FeedWrapper>
        <Header title={userProgress.activeCourse.title} />
        {
          units?.map((unit) => (
            <div key={unit.id} className="mb-10">
              <Unit
                id={unit.id}
                order={unit.order}
                description={unit.description}
                title={unit.title}
                lessons={unit.lessons}
                activeLesson={courseProgress?.activeLesson}
                activeLessonPercentage={lessonPercentage} />
            </div>
          ))
        }
      </FeedWrapper>
    </div>
  )
}


export default LearnPage