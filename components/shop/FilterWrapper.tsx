import { cn } from "@/lib/utils";
import React, { ComponentProps, forwardRef, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

interface Props extends ComponentProps<"div"> {
    filterTitle?: string;
    children: React.ReactNode;
    expandButton?: boolean;
    toogleExpand?: (value: boolean) => void;
}

export const FilterWrapper = forwardRef<HTMLDivElement, Props>(
    (
        {
            filterTitle,
            expandButton = false,
            toogleExpand,
            children,
            className,
            ...props
        },
        ref
    ) => {
        const [expand, setExpand] = useState<boolean>(false);

        // handle expand button
        const handleExpand = () => {
            setExpand(!expand);
            if (toogleExpand) toogleExpand(!expand);
        };
        return (
            <div
                ref={ref}
                className={cn("flex flex-col gap-1 p-2", className)}
                {...props}
            >
                {/* filter title  */}
                <h5 className="font-medium text-lg text-primary mb-2">
                    {filterTitle}
                </h5>
                {/* filter item */}
                {children}

                {/* expand button  */}
                {expandButton && (
                    <div
                        onClick={handleExpand}
                        className="flex items-center gap-1 text-orange-500 hover:text-blue-500 text-sm mt-2 ps-2 cursor-pointer"
                    >
                        See{" "}
                        {expand ? (
                            <>
                                Less <IoIosArrowUp />
                            </>
                        ) : (
                            <>
                                More <IoIosArrowDown />
                            </>
                        )}
                    </div>
                )}
            </div>
        );
    }
);

FilterWrapper.displayName = "FilterWrapper";
