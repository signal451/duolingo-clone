import { FlagListComponent } from "./Flags"


export const Footer = () => {

  return (
    <div className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        <FlagListComponent />
      </div>
    </div>
  )
}