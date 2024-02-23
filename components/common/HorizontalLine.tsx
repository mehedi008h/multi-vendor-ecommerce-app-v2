import { cn } from "@/lib/utils";
import React, { ComponentProps, forwardRef } from "react";

export const HorizontalLine = forwardRef<HTMLDivElement, ComponentProps<"div">>(
    ({ children, className, ...props }, ref) => (
        <div
            ref={ref}
            className={cn("h-[1px] bg-gray-500 w-full", className)}
            {...props}
        >
            {children}
        </div>
    )
);

HorizontalLine.displayName = "HorizontalLine";

export default HorizontalLine;
