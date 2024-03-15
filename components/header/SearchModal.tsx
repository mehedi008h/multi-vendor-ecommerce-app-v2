"use client";

import React, { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTrigger,
} from "../ui/dialog";
import { SearchInput } from ".";
import { IoTimeOutline } from "react-icons/io5";
import { RiLinksFill } from "react-icons/ri";
import { Badge } from "../ui/badge";

interface Props {
    triggerButton: React.ReactNode;
}

const SearchModal = ({ triggerButton }: Props) => {
    // state
    const [searchInput, setSearchInput] = useState("");
    return (
        <Dialog>
            <DialogTrigger asChild>{triggerButton}</DialogTrigger>
            <DialogContent className="w-[700px]">
                <DialogHeader>
                    <SearchInput
                        setSearchInput={setSearchInput}
                        className="w-full mt-5"
                    />
                </DialogHeader>
                <div>
                    <div className="flex flex-col items-center w-full gap-2">
                        {[
                            "Mackbook Pro M3",
                            "Yamaha R15 M",
                            "Honda CVX",
                            "Samsung S25",
                            "Apple Ipad Pro",
                        ].map((history) => (
                            <div
                                key={history}
                                className="w-full flex items-center justify-between cursor-pointer group"
                            >
                                <div className="flex items-center gap-2">
                                    <IoTimeOutline
                                        size={18}
                                        className="text-neutral-500"
                                    />
                                    <p className="text-sm font-normal text-neutral-500 group-hover:text-neutral-600">
                                        {history}
                                    </p>
                                </div>
                                <RiLinksFill className="text-neutral-500 group-hover:text-blue-500" />
                            </div>
                        ))}
                    </div>

                    {/* search by keyword  */}
                    <div className="flex flex-row flex-wrap justify-center gap-3 mt-8">
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
                                className="py-1 px-3 text-primary border-secondary hover:bg-secondary hover:text-white rounded-2xl cursor-pointer"
                            >
                                {tag}
                            </Badge>
                        ))}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default SearchModal;
