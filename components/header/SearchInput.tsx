"use client";

import { cn } from "@/lib/utils";
import React, { ComponentProps, forwardRef } from "react";
import { BiSearchAlt } from "react-icons/bi";

interface Props extends ComponentProps<"div"> {
    setSearchInput: (value: string) => void;
}

const SearchInput = forwardRef<HTMLDivElement, Props>(
    ({ setSearchInput, className, ...props }, ref) => {
        return (
            <div
                ref={ref}
                {...props}
                className={cn(
                    "w-[600px] xl:flex lg:flex hidden flex-row items-center border border-gray-500 rounded-full px-4 py-1",
                    className
                )}
            >
                {/* search input  */}
                <input
                    className="px-4 py-1 w-full outline-none text-gray-500 font-dmSans"
                    type="text"
                    name="searchInput"
                    placeholder="Search products ..."
                    onChange={(e) => setSearchInput(e.target.value)}
                />
                <BiSearchAlt className="text-gray-600" size={30} />
            </div>
        );
    }
);

SearchInput.displayName = "SearchInput";
export default SearchInput;
