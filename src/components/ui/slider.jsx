"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

const Slider = React.forwardRef(({ className, valueA, valueB, onChange, ...props }, ref) => {
  const handleThumbAMove = (newValue) => {
    const newValueA = Math.min(newValue, valueB); // Evita que valueA supere a valueB
    onChange([newValueA, valueB]);
  };

  const handleThumbBMove = (newValue) => {
    const newValueB = Math.max(newValue, valueA); // Evita que valueB sea menor que valueA
    onChange([valueA, newValueB]);
  };

  return (
    <SliderPrimitive.Root
      ref={ref}
      className={cn("relative flex w-3/4 touch-none select-none items-center", className)}
      {...props}>
      <SliderPrimitive.Track
        className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
        <SliderPrimitive.Range
          className="absolute h-full bg-primary"
          style={{
            left: `${(valueA * 100)}%`,
            width: `${((valueB - valueA) * 100)}%`,
          }}
        />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb
        className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        style={{ left: `${(valueA * 100)}%` }}
        onMove={handleThumbAMove}
      />
      <SliderPrimitive.Thumb
        className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        style={{ left: `${(valueB * 100)}%` }}
        onMove={handleThumbBMove}
      />
    </SliderPrimitive.Root>
  );
});

Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider }
