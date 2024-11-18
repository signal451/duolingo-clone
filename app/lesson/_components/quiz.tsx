"use client"

import { challengeOptions, challenges, userSubscription } from "@/db/schema"
import { useState, useTransition } from "react";
import { Header } from "./header";
import { Challenge } from "./challenge";
import { QuestionBubble } from "./question-buble";
import { Footer } from "./footer";
import { reduceHearts, upsertUserProgress } from "@/actions/user-progress";
import { upsertChallengeProgress } from "@/actions/challenge-progress";
import { MAX_HEARTS } from "@/constants";
import { toast } from "sonner";
import { useWindowSize } from "react-use";
import { useRouter } from "next/navigation";
import { useHeartsModal } from "@/store/use-hearts-modal";



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

    // those 2
    const [hearts, setHearts] = useState(initialHearts)
    const [percentage, setPercentage] = useState(initialPercentage)

    const [challenges] = useState(initialLessonChallenges)
    const [activeIndex, setActiveIndex] = useState(() => {
      const uncompletedIndex = challenges.findIndex((challenge) => !challenge.completed)
      return uncompletedIndex === -1 ? 0 : uncompletedIndex
    })

    const challenge = challenges[activeIndex];
    const options = challenge?.challengeOptions ?? []
    // options
    const [selectedOption, setSelectedOption] = useState<number>();
    const [status, setStatus] = useState<"none" | "wrong" | "correct">("none");


    const title = challenge.type === "ASSIST" ? "Зөв утгатай үгний утгыг сонгоно уу" : challenge.question

    // const [finishAudio] = useAudio({ src: "/finish.mp3", autoPlay: true, });
    // const { width, height } = useWindowSize();


    // const router = useRouter();
    const [pending, startTransition] = useTransition();
    const { open: openHeartsModal } = useHeartsModal();
    // const { open: openPracticeModal } = usePracticeModal();

    const onSelect = (id: number) => {
      if (status !== "none") return;
      setSelectedOption(id);
    };

    const onNext = () => {
      setActiveIndex((current) => current + 1);
    };

    const onContinue = () => {
      if (!selectedOption) return;

      if (status === "wrong") {
        setStatus("none")
        setSelectedOption(undefined)
        return
      }

      if (status === "correct") {
        setStatus("none")
        setSelectedOption(undefined)
        return
      }

      const correctOption = options.find((option) => option.correct)

      if (!correctOption) return;

      if (correctOption.id === selectedOption) {
        startTransition(() => {
          upsertChallengeProgress(challenge.id)
            .then((response) => {
              if (response?.error === "hearts") {
                console.log("missing hearts");
                return;
              }

              setStatus("correct");
              setPercentage((prev) => prev + 100 / challenges.length);

              // This is a practice
              if (initialPercentage === 100) {
                setHearts((prev) => Math.min(prev + 1, MAX_HEARTS));
              }
            })
            .catch(() => toast.error("Something went wrong. Please try again."));
        });
      }

      else {
        startTransition(() => {
          reduceHearts(challenge.id)
            .then((response) => {
              if (response?.error === "hearts") {
                openHeartsModal();
                return;
              }
              setStatus("wrong");
              if (!response?.error) setHearts((prev) => Math.max(prev - 1, 0));
            })
            .catch(() => toast.error("Something went wrong. Please try again."));
        });
      }
    }

    return (
      <>
        <Header
          hearts={hearts}
          percentage={percentage}
          hasActiveSubscription={!!userSubscription?.isActive}
        />

        <div className="flex-1">
          <div className="flex h-full items-center justify-center">
            <div className="flex w-full flex-col gap-y-12 px-6 lg:min-h-[350px] lg:w-[600px] lg:px-0">
              <h1 className="text-center text-lg font-bold text-neutral-700 lg:text-start lg:text-3xl">
                {title}
              </h1>

              <div>
                {challenge.type === "ASSIST" && (
                  <QuestionBubble question={challenge.question} />
                )}
                <Challenge
                  options={options}
                  onSelect={onSelect}
                  status={status}
                  selectedOption={selectedOption}
                  disabled={pending}
                  type={challenge.type}
                />
              </div>
            </div>
          </div>
        </div>

        <Footer
          disabled={pending || !selectedOption}
          status={status}
          onCheck={onContinue}
        />
      </>
    )
  }