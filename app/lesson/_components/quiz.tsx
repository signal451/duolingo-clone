"use client"

import { challengeOptions, challenges, userSubscription } from "@/db/schema"
import { useState } from "react";
import { Header } from "./header";



type QuizProps = {
  initialPercentage: number,
  initialHearts: number,
  initialLessonId: number,
  initialLessonChallenges: (typeof challenges.$inferSelect & {
    completed: boolean,
    challengeOptions: (typeof challengeOptions.$inferSelect)[]
  })[],

  userSubscription:
  | (typeof userSubscription.$inferSelect & {
    isActive: boolean;
  })
  | null;
}

export const Quiz =
  ({ initialPercentage,
    initialHearts,
    initialLessonId,
    initialLessonChallenges,
    userSubscription,
  }: QuizProps) => {

    const [hearts, setHearts] = useState(initialHearts)
    const [percentage, setPercentage] = useState(10 || initialPercentage)

    return (
      <>
        <Header
          hearts={hearts}
          percentage={percentage}
          hasActiveSubscription={!!userSubscription?.isActive} />
      </>
    )
  }