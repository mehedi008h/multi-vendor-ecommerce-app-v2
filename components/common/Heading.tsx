import { cn } from "@/lib/utils";
import React, { ComponentProps, forwardRef } from "react";

interface Props extends ComponentProps<"div">, ComponentProps<"h1"> {
    title: string;
    subTitle: string;
    rightSide?: React.ReactNode;
    titleClassName?: string;
}

const Heading = forwardRef<HTMLDivElement, Props>(
    (
        { title, subTitle, rightSide, className, titleClassName, ...props },
        ref
    ) => (
        <div
            ref={ref}
            className={cn("flex justify-between items-cente", className)}
            {...props}
        >
            {/* left side  */}
            <div>
                <h1
                    className={`text-3xl font-bold text-[#425A8B] ${titleClassName}`}
                >
                    {title}
                </h1>
                <p className="text-sm text-gray-600">{subTitle}</p>
            </div>

            {/* right side  */}
            {rightSide && rightSide}
        </div>
    )
);

Heading.displayName = "Heading";

export default Heading;
