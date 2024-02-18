"use client";

import { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";

const SearchInput = () => {
    // state
    const [searchInput, setSearchInput] = useState("");

    return (
        <div className="w-[600px] xl:flex lg:flex md:flex hidden flex-row items-center border border-gray-500 rounded-full px-4 py-1">
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
};

export default SearchInput;
