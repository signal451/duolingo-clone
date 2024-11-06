

export const StickyWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="hidden lg:block w-[300px] sticky bottom-6 lg:pt-7">
      <div className="sticky top-6 flex flex-col gap-y-4">
        {children}
      </div>
    </div>
  )
}