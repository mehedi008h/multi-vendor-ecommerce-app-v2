"use client";

import React, { useState } from "react";
import { SearchInput } from "../header";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { allCategories } from "@/data/filterSidebar";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "../ui/menubar";
import { vendorLinks } from "@/data/vendor";

interface Props {
    selectedTab: string;
    setSelectedTab: (value: string) => void;
}

const VendorLinkBar = ({ selectedTab, setSelectedTab }: Props) => {
    // state
    const [searchInput, setSearchInput] = useState("");
    return (
        <div className="w-full h-14 xl:mt-32 lg:mt-32 md:mt-32 mt-5 glass sticky xl:top-14 top-0 transition duration-700 z-40">
            <div className="container h-14 flex justify-between items-center xl:px-0 px-2">
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
                                        <div className="bg-white w-[200px] py-2">
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

                    {vendorLinks.map((link) => (
                        <button
                            key={link}
                            onClick={() => setSelectedTab(link)}
                            className={`h-14 border-b-2 hover:text-orange-500 xl:block lg:block hidden ${
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
                        className="w-[300px] bg-white border-neutral-300"
                    />
                </div>

                <div className="xl:hidden lg:hidden block">
                    <Menubar>
                        <MenubarMenu>
                            <MenubarTrigger>Menu</MenubarTrigger>
                            <MenubarContent>
                                {vendorLinks.map((link) => (
                                    <div key={link}>
                                        <MenubarItem
                                            onClick={() => setSelectedTab(link)}
                                        >
                                            {link}
                                        </MenubarItem>
                                        <MenubarSeparator />
                                    </div>
                                ))}
                            </MenubarContent>
                        </MenubarMenu>
                    </Menubar>
                </div>
            </div>
        </div>
    );
};

export default VendorLinkBar;
