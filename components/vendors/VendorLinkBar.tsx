"use client";

import React, { useState } from "react";
import { SearchInput } from "../header";

interface Props {
    selectedTab: string;
    setSelectedTab: (value: string) => void;
}

const VendorLinkBar = ({ selectedTab, setSelectedTab }: Props) => {
    // state
    const [searchInput, setSearchInput] = useState("");
    return (
        <div className="w-full h-14 mt-32 bg-neutral-50 sticky top-14">
            <div className="container h-14 flex justify-between items-center">
                {/* links  */}
                <div className="flex flex-row items-center gap-5">
                    <button className="border-b-2 border-red-500 h-14">
                        Category
                    </button>
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
