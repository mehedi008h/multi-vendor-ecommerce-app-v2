"use client";

import { BiSearchAlt, BiUser } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import logo from "../../public/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import SearchInput from "./SearchInput";
import { MobileDrawer, SearchModal, UserMenu } from ".";
import { Cart } from "../cart";
import { useState } from "react";

const SearchBar = () => {
    return (
        <div className="container h-20 flex justify-between items-center xl:px-0 lg:px-0 px-2">
            <div className="flex flex-row items-center gap-2">
                <MobileDrawer />
                {/* logo */}
                <Link href="/">
                    <div className="w-36 h-16">
                        <Image className="w-full h-full" src={logo} alt="" />
                    </div>
                </Link>
            </div>
            {/* search */}
            <SearchModal
                triggerButton={
                    <div className="w-[600px] xl:flex lg:flex hidden flex-row justify-between items-center border border-gray-500 rounded-full px-4 py-1">
                        {/* search input  */}
                        {/* <input
                    className="px-4 py-1 w-full outline-none text-gray-500 font-dmSans"
                    type="text"
                    name="searchInput"
                    placeholder="Search products ..."
                    onChange={(e) => setSearchInput(e.target.value)}
                /> */}
                        <p className="text-gray-500">Search products ...</p>
                        <BiSearchAlt className="text-gray-600" size={30} />
                    </div>
                }
            />
            {/* <SearchInput setSearchInput={setSearchInput} /> */}
            {/* link  */}
            <div className="flex flex-row gap-4">
                {/* white list  */}
                <Link
                    className="h-12 w-12 flex justify-center items-center border-2 rounded-full hover:text-green-500 relative"
                    href={"/"}
                >
                    <AiOutlineHeart size={25} />
                    <div className="h-6 w-6 flex justify-center items-center rounded-full bg-green-500 text-white text-sm font-semibold font-roboto absolute -top-1.5 -right-1.5">
                        4
                    </div>
                </Link>
                {/* cart view  */}
                <Cart />

                {/* user menu  */}
                {/* <Link
                    className="h-12 w-12 flex justify-center items-center border-2 rounded-full hover:text-green-500"
                    href={"/login"}
                >
                    <BiUser size={25} />
                </Link> */}
                <UserMenu />
            </div>
        </div>
    );
};

export default SearchBar;
