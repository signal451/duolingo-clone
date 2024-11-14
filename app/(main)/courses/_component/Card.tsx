import { cn } from "@/lib/utils"
import { Check } from "lucide-react"
import Image from "next/image"

type Props = {
  title: string,
  id: number,
  imageSrc: string,
  onClick: (id: number) => void,
  disabled?: boolean,
  active?: boolean
}


export const Card = ({ title, id, imageSrc, onClick, disabled, active }: Props) => {
  return (
    <div onClick={() => onClick(id)} className={cn("h-full rounded-xl border-2  hover:bg-black/5 cursor-pointer active:border-b-2 flex flex-col items-center justify-between p-3 pb-6 min-h-[200px] min-w-[120px]", disabled && "pointer-events-none opacity-50")}>
      <div className="min-[24px] w-full flex items-center justify-end">
        {active && (
          <div className="rounded-md bg-green-600 flex items-center justify-center p-1.5">
            <Check className="text-white stroke-[4] h-4 w-4" />
          </div>
        )}
      </div>
      <Image
        src={imageSrc}
        alt={title}
        height={50}
        width={83.33}
        className="rounded-lg drop-shadow-md border object-cover" />
      <p className="text-neutral-700 text-center font-bold mt-3">
        {title}
      </p>
    </div>
  )
}