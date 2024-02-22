"use client";

import { useState } from "react";
import {
    MdKeyboardArrowDown,
    MdKeyboardArrowUp,
    MdOutlineDashboard,
} from "react-icons/md";
import { BsFire } from "react-icons/bs";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { LinkItem } from ".";

// category data for link
const categories = [
    {
        id: 1,
        name: "Hot Deals",
        icon: <BsFire size={20} />,
        link: "/",
        color: "text-yellow-900",
    },
    {
        id: 2,
        name: "Home",
        link: "/",
    },
    {
        id: 3,
        name: "Shop",
        link: "/shop",
    },
    {
        id: 4,
        name: "Vendors",
        link: "/",
    },
    {
        id: 5,
        name: "Mega Menu",
        subMenu: true,
    },
    {
        id: 6,
        name: "Blog",
        link: "/",
    },
    {
        id: 8,
        name: "Contact",
        link: "/",
    },
    {
        id: 9,
        name: "About",
        link: "/",
    },
];

const LinkBar = () => {
    const [category, setCategory] = useState<string>("");

    return (
        <div className="w-full linkBar xl:block lg:block hidden sticky top-0">
            <div className="container h-14 flex justify-start items-center gap-8 relative">
                {/* Browse All Category  */}
                <DropdownMenu>
                    <DropdownMenuTrigger className="outline-none">
                        <div className="cursor-pointer min-w-fit bg-green-700 px-3 py-2 rounded-lg text-white flex items-center gap-2 mr-5">
                            <MdOutlineDashboard size={21} />
                            <p className="text-base">Browse All Category</p>
                            <MdKeyboardArrowDown size={20} />
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="glass">
                        <div className="flex flex-col w-[300px]">
                            <DropdownMenuRadioGroup
                                value={category}
                                onValueChange={setCategory}
                            >
                                {categories.map((item, index) => (
                                    <DropdownMenuRadioItem
                                        value={item.name}
                                        key={index}
                                        className="flex gap-2 items-center hover:bg-gray-100 p-2 cursor-pointer"
                                    >
                                        <div className="h-6 w-6 rounded-md bg-gray-600"></div>
                                        <p className="font-semibold text-sm">
                                            {item.name}
                                        </p>
                                    </DropdownMenuRadioItem>
                                ))}
                            </DropdownMenuRadioGroup>
                        </div>
                    </DropdownMenuContent>
                </DropdownMenu>

                {/* links  */}
                {categories.map((category) => (
                    <LinkItem category={category} key={category.id} />
                ))}
            </div>
        </div>
    );
};

export default LinkBar;
