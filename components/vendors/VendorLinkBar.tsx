"use client";

import React, { useState } from "react";
import { SearchInput } from "../header";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { allCategories } from "@/data/filterSidebar";

interface Props {
    selectedTab: string;
    setSelectedTab: (value: string) => void;
}

const VendorLinkBar = ({ selectedTab, setSelectedTab }: Props) => {
    // state
    const [searchInput, setSearchInput] = useState("");
    return (
        <div className="w-full h-14 mt-32 bg-neutral-50 sticky top-14 z-40">
            <div className="container h-14 flex justify-between items-center">
                {/* links  */}
                <div className="flex flex-row items-center gap-5">
                    {selectedTab !== "All Products" && (
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="bg-transparent text-base font-normal">
                                        Category
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <div className="bg-white w-[200px] py-2 mt-4">
                                            {allCategories.map((category) => (
                                                <div
                                                    key={category}
                                                    className="px-3 py-2 text-sm font-normal cursor-pointer hover:bg-neutral-50"
                                                >
                                                    {category}
                                                </div>
                                            ))}
                                        </div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    )}

                    {["Home Page", "All Products", "Profile"].map((link) => (
                        <button
                            key={link}
                            onClick={() => setSelectedTab(link)}
                            className={` h-14 border-b-2 hover:text-orange-500 ${
                                selectedTab === link
                                    ? "border-orange-500 text-orange-500"
                                    : "border-transparent text-black"
                            }`}
                        >
                            {link}
                        </button>
                    ))}
                </div>

                {/* search input */}
                <div>
                    <SearchInput
                        setSearchInput={setSearchInput}
                        className="w-[300px] bg-white"
                    />
                </div>
            </div>
        </div>
    );
};

export default VendorLinkBar;
