import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function InputDemo() {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2 m-4">
      <Input type="text" placeholder="Do coding assignment" />
      <Button type="submit" className="bg-black text-white">Add Task</Button>
    </div>
  )
}
