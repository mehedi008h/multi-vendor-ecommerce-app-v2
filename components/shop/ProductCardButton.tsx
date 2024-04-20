import { cn } from "@/lib/utils";
import React, { ComponentProps, forwardRef } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

interface Props extends ComponentProps<"div"> {
    icon: React.ReactNode;
    tooltipContent: string;
}

const ProductCardButton = forwardRef<HTMLDivElement, Props>(
    ({ icon, tooltipContent, className, ...props }, ref) => (
        <Tooltip delayDuration={2}>
            <TooltipTrigger>
                <div
                    ref={ref}
                    className={cn(
                        "h-8 w-8 border border-secondary rounded-md flex justify-center items-center text-neutral-600 hover:text-red-500",
                        className
                    )}
                >
                    {icon}
                </div>
            </TooltipTrigger>
            <TooltipContent className="text-white bg-secondary absolute top-1.5 right-5 w-fit">
                <p>{tooltipContent}</p>
            </TooltipContent>
        </Tooltip>
    )
);

ProductCardButton.displayName = "ProductCardButton";

export default ProductCardButton;
