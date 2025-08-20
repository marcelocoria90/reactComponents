import { cn } from "../../utils/utils"

export function Button({ className, ...props }) {
  return (
    <button
      className={cn("px-4 py-2 rounded-md bg-blue-800 text-white", className)}
      {...props}
    />
  )
}