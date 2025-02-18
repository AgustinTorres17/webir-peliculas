import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transition-all duration-300",
  {
    variants: {
      variant: {
        default: "bg-fondo text-primary-foreground hover:bg-fondo/70 hover:text-accent",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-transparent hover:bg-fuente hover:text-accent-oscuro/80",
        secondary:
          "bg-fuente text-fondo hover:bg-fuente/80 mt-2",
        ghost: "bg-accent  hover:text-white text-primario",
        link: "text-fuente underline-offset-4 hover:underline hover:text-accent",
        favedMovie: "text-fuente bg-accent hover:bg-destructive/80",
        unFavedMovie: "bg-fuente text-fondo hover:text-accent hover:bg-primario",
        Search: "bg-yellow-300 text-black hover:bg-white hover:text-black mt-2",
        Chat: "bg-fondo text-accent hover:bg-fondo/70 rounded",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />)
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }
