"use client"
import { Button } from "@/components/ui/button"
import Image from "next/image"


export const FlagListComponent = () => {

  const flagDictionary: { [key: string]: string } = {
    "KR": "Korean",
    "UK": "English",
    "RU": "Russia",
    "CN": "China",
    "MN": "Mongolian"
  }
  console.log(Object.keys(flagDictionary))

  return (
    <>
      {
        Object.keys(flagDictionary).map((code) => {
          return (
            <Button variant={"ghost"} className="w-full" key={code}>
              <Image
                src={`/${code}.svg`}
                height={32}
                width={40}
                className="mr-4 rounded-md"
                alt={flagDictionary[code]}
              />
              {flagDictionary[code]}
            </Button>
          )
        })
      }
    </>
  )
}