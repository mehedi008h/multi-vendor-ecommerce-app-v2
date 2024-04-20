import { cn } from "@/lib/utils";
import React, { ComponentProps, forwardRef } from "react";

export const VerticalLine = forwardRef<HTMLDivElement, ComponentProps<"div">>(
    ({ children, className, ...props }, ref) => (
        <div
            ref={ref}
            className={cn("h-6 bg-gray-500 w-[1px]", className)}
            {...props}
        >
            {children}
        </div>
    )
);

VerticalLine.displayName = "VerticalLine";

export default VerticalLine;
