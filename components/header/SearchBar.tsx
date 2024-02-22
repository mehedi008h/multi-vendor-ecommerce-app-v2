"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BiCart, BiUser } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { HiX } from "react-icons/hi";
import logo from "../../public/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import SearchInput from "./SearchInput";
import { MobileDrawer } from ".";

const SearchBar = () => {
    // cart open & close
    const [toggle, setToggle] = useState(false);

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
            <SearchInput />
            {/* link  */}
            <div className="flex flex-row gap-4">
                <Link
                    className="h-12 w-12 flex justify-center items-center border-2 rounded-full hover:text-green-500 relative"
                    href={"/"}
                >
                    <AiOutlineHeart size={25} />
                    <div className="h-6 w-6 flex justify-center items-center rounded-full bg-green-500 text-white text-sm font-semibold font-roboto absolute -top-1.5 -right-1.5">
                        4
                    </div>
                </Link>
                {/* toogle cart view  */}
                <div className="relative">
                    <button
                        className="h-12 w-12 flex justify-center items-center border-2 rounded-full hover:text-green-500 hover:border-green-300 relative"
                        onClick={() => setToggle(true)}
                    >
                        <BiCart size={25} />
                        <div className="h-6 w-6 flex justify-center items-center rounded-full bg-amber-500 text-white text-sm font-semibold font-roboto absolute -top-1.5 -right-1.5">
                            4
                        </div>
                    </button>

                    {toggle && (
                        <motion.div
                            whileInView={{ x: [300, 0] }}
                            transition={{ duration: 0.85, ease: "easeOut" }}
                            className="cart_container xl:w-2/5 lg:w-2/5 md:w-2/5 w-full"
                        >
                            <HiX
                                className="text-red-500"
                                size={25}
                                onClick={() => setToggle(false)}
                                id="btn_close"
                            />
                            {/* tooltip  */}
                            {/* <Tooltip
                                anchorId="btn_close"
                                place="top"
                                content="Close Cart"
                            /> */}
                            {/* cart  */}
                            <div>Hello</div>
                        </motion.div>
                    )}
                </div>
                <Link
                    className="h-12 w-12 flex justify-center items-center border-2 rounded-full hover:text-green-500"
                    href={"/login"}
                >
                    <BiUser size={25} />
                </Link>
            </div>
        </div>
    );
};

export default SearchBar;
