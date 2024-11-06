


export const FeedWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex-1 relative top-0 pb-10 flex items-center justify-center">
      <div className="w-full xl:w-1/2">
        {children}
      </div>
    </div>
  )
}