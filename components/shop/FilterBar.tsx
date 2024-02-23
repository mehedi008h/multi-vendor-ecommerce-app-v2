"use client";

import { TbListTree } from "react-icons/tb";
import { CiGrid41 } from "react-icons/ci";
import { VscSettings } from "react-icons/vsc";
import { Button } from "../ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { HorizontalLine, VerticalLine } from "../common";

const FilterBar = () => {
    return (
        <>
            <div className="py-3 flex justify-between items-center">
                {/* left side  */}
                {/* all filter button  */}
                <Button className="bg-gray-500 bg-opacity-10 hover:bg-gray-500 hover:bg-opacity-10 px-3 py-2 rounded-lg text-primary flex items-center gap-2">
                    <VscSettings size={20} /> All Fillters
                </Button>

                {/* right side  */}
                <div className="flex items-center gap-2 font-dmSans">
                    {/* showing result  */}
                    <h3 className="font-medium text-base text-primary">
                        Showing 1–16 of 17 results
                    </h3>
                    <VerticalLine />

                    {/* sort by  */}
                    <div className="flex items-center gap-2 relative">
                        <h3 className="text-gray-400">Sort by : </h3>
                        <DropdownMenu>
                            <DropdownMenuTrigger className="outline-none">
                                <div className="flex items-center gap-2 text-primary cursor-pointer">
                                    <h3 className="font-medium text-base">
                                        Latest Products
                                    </h3>
                                </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem>
                                    Latest Products
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Oldest Products
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Comments Products
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>

                    <VerticalLine />

                    {/* per page  */}
                    <div className="flex items-center gap-2 relative">
                        <h3 className="text-gray-400">Show : </h3>
                        <DropdownMenu>
                            <DropdownMenuTrigger className="outline-none">
                                <div className="flex items-center gap-2 text-primary cursor-pointer">
                                    <h3 className="font-medium text-base">
                                        30 items
                                    </h3>
                                </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem>30 items</DropdownMenuItem>
                                <DropdownMenuItem>50 items</DropdownMenuItem>
                                <DropdownMenuItem>100 items</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>

                    <VerticalLine />

                    <div className="flex items-center gap-2">
                        <Button className="bg-gray-500 hover:bg-gray-500 hover:bg-opacity-10 bg-opacity-10 p-2 rounded-lg text-primary hover:text-orange-500">
                            <CiGrid41 size={20} />
                        </Button>
                        <Button className="bg-gray-500 hover:bg-gray-500 hover:bg-opacity-10 bg-opacity-10 p-2 rounded-lg text-primary hover:text-orange-500">
                            <TbListTree size={20} />
                        </Button>
                    </div>
                </div>
            </div>
            <HorizontalLine className="bg-gray-300 mb-5" />
        </>
    );
};

export default FilterBar;
