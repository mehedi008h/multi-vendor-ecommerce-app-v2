"use client";

import { cn } from "@/lib/utils";
import React, { ComponentProps, forwardRef, useState } from "react";
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";

interface Props extends ComponentProps<"div"> {
    initialRating?: number;
    readonly?: boolean;
    total?: number;
    fill?: string;
    outline?: string;
}

const Rating = forwardRef<HTMLDivElement, Props>(
    (
        {
            initialRating = 3,
            readonly = false,
            total,
            fill = "gold",
            outline = "gray",
            className,
            ...props
        },
        ref
    ) => {
        const [wholePart, setWholePart] = useState(Math.floor(initialRating));
        const [fractionPart, setFractionPart] = useState(initialRating % 1);

        const handleRatingChange = (newRating: number) => {
            if (!readonly) {
                setWholePart(Math.floor(newRating));
                setFractionPart(newRating % 1);
            }
        };
        return (
            <div
                ref={ref}
                {...props}
                className={cn("flex items-center text-xl", className)}
            >
                {[1, 2, 3, 4, 5].map((star) => (
                    <span
                        key={star}
                        onClick={() => handleRatingChange(star)}
                        style={{
                            color:
                                star < wholePart + 1
                                    ? fill
                                    : star === wholePart + 1 &&
                                      fractionPart >= 0.5
                                    ? fill
                                    : outline,
                        }}
                        className={
                            readonly ? "cursor-default" : "cursor-pointer"
                        }
                    >
                        {star <= wholePart ? (
                            <IoMdStar />
                        ) : star === wholePart + 1 && fractionPart >= 0.5 ? (
                            <IoMdStarHalf />
                        ) : (
                            <IoMdStarOutline />
                        )}
                    </span>
                ))}

                {total ? (
                    <p className="text-secondary text-base ms-1">({total})</p>
                ) : (
                    <p className="text-secondary text-base ms-1">
                        ({wholePart + (fractionPart >= 0.5 ? 0.5 : 0)})
                    </p>
                )}
            </div>
        );
    }
);

Rating.displayName = "Rating";

export default Rating;
