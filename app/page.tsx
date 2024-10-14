import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="">
      <div className="flex flex-col p-4 space-y-4 max-w-[200px] mx-auto">
        <Button> default </Button>
        <Button variant={"primary"}> primary </Button>
        <Button variant={"primaryOutline"}> pimary outline </Button>
        <Button variant={"secondary"}> secondary </Button>
        <Button variant={"secondaryOutline"}> secondary outline </Button>
        <Button variant={"destructive"}> danger </Button>
        <Button variant={"super"}> super </Button>
        <Button variant={"ghost"}> ghost</Button>
        <Button variant={"sidebar"}> sideber </Button>
        <Button variant={"sidebarOutline"}> sideber </Button>
      </div>
    </div>
  );
}
