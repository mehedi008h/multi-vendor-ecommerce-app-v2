"use client";

import React, { useState } from "react";
import { FilterWrapper } from "../shop/FilterWrapper";
import { allCategories } from "@/data/filterSidebar";
import Image from "next/image";
import { placeHolder } from "@/data/images";
import { Badge } from "../ui/badge";
import { HorizontalLine } from "../common";

const VendorSidebar = () => {
    // state
    const [categoryExpand, setCategoryExpand] = useState<boolean>(false);

    // expand all filters
    let categories = categoryExpand ? allCategories : allCategories.slice(0, 7);
    return (
        <div className="xl:block hidden mt-1">
            {/* Product Category  */}
            <div className="border rounded-md">
                <h1 className="font-medium text-lg text-primary p-2 mt-2">
                    Vendor by industry
                </h1>
                <hr className="my-2" />
                <FilterWrapper expandButton toogleExpand={setCategoryExpand}>
                    <>
                        {categories.map((category) => (
                            <div
                                key={category}
                                className="flex justify-between items-center p-2 border rounded-md hover:border-teal-50 hover:shadow-md cursor-pointer group"
                            >
                                <div className="flex gap-2 items-center">
                                    <div className="w-7 h-7 rounded-md">
                                        <Image
                                            className="w-full h-full rounded-md"
                                            src={placeHolder}
                                            alt=""
                                        />
                                    </div>
                                    <h1 className="text-sm font-medium font-dmSans text-primary group-hover:text-orange-500">
                                        {category}
                                    </h1>
                                </div>
                                <div className="bg-primary bg-opacity-10 px-2 py-1 rounded-md text-sm text-primary group-hover:text-white group-hover:bg-orange-500">
                                    1121
                                </div>
                            </div>
                        ))}
                    </>
                </FilterWrapper>
            </div>

            <FilterWrapper filterTitle="Vendor by tags" className="px-0 mt-2">
                <HorizontalLine className="-mt-1 bg-gray-300" />
                <div className="flex flex-row flex-wrap gap-3 mt-2">
                    {[
                        "Apple",
                        "Oppo",
                        "Keybord",
                        "SamSung",
                        "Computer",
                        "Keybord",
                    ].map((tag) => (
                        <Badge
                            key={tag}
                            variant="outline"
                            className="py-2 px-3 text-primary border-secondary hover:bg-secondary hover:text-white cursor-pointer"
                        >
                            {tag}
                        </Badge>
                    ))}
                </div>
            </FilterWrapper>
        </div>
    );
};

export default VendorSidebar;
