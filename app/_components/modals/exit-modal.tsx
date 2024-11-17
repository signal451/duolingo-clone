"use client"

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useExitModal } from "@/store/use-exit"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Lottie from "lottie-react";
import animation from "../modals/sad_shiba.json"
import { Button } from "@/components/ui/button"


export const ExitModal = () => {
  const router = useRouter()
  const [isClient, setIsClient] = useState(false)
  const { isOpen, close } = useExitModal()


  useEffect(() => setIsClient(true), []);

  if (!isClient) return null

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent>
        <DialogHeader>
          <div className="mb-5 flex w-full items-center justify-center">
            <Lottie animationData={animation} loop={true} style={{ width: 120, height: 120 }} />
          </div>

          <DialogTitle className="text-center text-2xl font-bold">
            Хичээлээс гарах
          </DialogTitle>

          <DialogDescription className="text-center text-base">
            Та хичээлээс гарах гэж байна итгэлтэй байна уу ?
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="mb-4">
          <div className="flex w-full flex-col gap-y-4">
            <Button
              variant={"primary"}
              className="w-full"
              size={"lg"}
              onClick={close}
            >
              Үргэлжлүүлэх
            </Button>
            <Button
              variant={"dangerOutline"}
              className="w-full"
              size="lg"
              onClick={() => {
                close();
                router.push("/learn");
              }}
            >
              Дуусгах
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )


}