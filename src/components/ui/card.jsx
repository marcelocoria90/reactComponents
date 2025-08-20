import { cn } from "../../utils/utils"


export function Card({ className, ...props }) {
  return (
    <div className={cn("bg-white shadow-md rounded-lg overflow-hidden", className)}>
      {props.children}
    </div>
  )
}

export function CardHeader({ className, ...props }) {
  return (
    <div className={cn("p-4 border-b", className)}>
      {props.children}
    </div>
  )
}

export function CardContent({ className, ...props }) {
  return (
    <div className={cn("p-4", className)}>
      {props.children}
    </div>
  )
}

export function CardTitle({ className, ...props }) {
  return (
    <h2 className={cn("text-lg font-semibold", className)}>
      {props.children}
    </h2>
  )
}